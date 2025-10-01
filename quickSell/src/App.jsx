import React, { useState, useRef, useEffect, useCallback } from 'react';
import { generateRecordForId } from './dataGenerator';
import Header from './components/Header';
import SubtitleRow from './components/SubtitleRow';
import SearchAndFilterRow from './components/SearchAndFilterRow';
import TableHeader from './components/TableHeader';
import TableRow from './components/TableRow';

const TOTAL = 1_000_000
const PAGE_SIZE = 30
const SEARCH_CHUNK = 20000
const MAX_MATCHES = 5000

function formatDate(ts) {
  const d = new Date(ts)
  return d.toLocaleString()
}

function HeaderCell({ label, sortKey, sortState, onSort }) {
  const active = sortState.key === sortKey
  const dir = active ? (sortState.dir === 'asc' ? '▲' : '▼') : ''
  return (
    <div className="th" onClick={() => onSort(sortKey)} role="button" tabIndex={0}>
      {label} <span className="sort-indicator">{dir}</span>
    </div>
  )
}

export default function App() {
  const [rows, setRows] = useState([])
  const [pagesLoaded, setPagesLoaded] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [searching, setSearching] = useState(false)
  const [matchesCount, setMatchesCount] = useState(null)
  const [sortState, setSortState] = useState({ key: 'id', dir: 'asc' })
  const [filterOpen, setFilterOpen] = useState(false)

  const idListRef = useRef(null)
  const containerRef = useRef(null)
  const loadingRef = useRef(false)

  useEffect(() => {
    resetAndLoad()
  }, [])

  const resetAndLoad = useCallback(() => {
    idListRef.current = null
    setRows([])
    setPagesLoaded(0)
    setMatchesCount(null)
    setQuery('')
    setSortState({ key: 'id', dir: 'asc' })
    loadNextPage(0)
  }, [])

  function getIdAtIndex(i) {
    if (idListRef.current) return idListRef.current[i]
    return i + 1
  }

  function loadPage(pageIndex) {
    const start = pageIndex * PAGE_SIZE
    const out = []
    for (let i = start; i < start + PAGE_SIZE && i < (idListRef.current ? idListRef.current.length : TOTAL); i++) {
      const id = getIdAtIndex(i)
      out.push(generateRecordForId(id))
    }
    return out
  }

  function loadNextPage(existingPages = pagesLoaded) {
    if (loadingRef.current) return
    loadingRef.current = true
    setIsLoading(true)
    setTimeout(() => {
      const page = existingPages
      const newRows = loadPage(page)
      setRows(prev => [...prev, ...newRows])
      setPagesLoaded(p => p + 1)
      setIsLoading(false)
      loadingRef.current = false
    }, 0)
  }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    function onScroll() {
      const { scrollTop, clientHeight, scrollHeight } = el
      if (scrollTop + clientHeight > scrollHeight - 300) {
        const totalPages = Math.ceil((idListRef.current ? idListRef.current.length : TOTAL) / PAGE_SIZE)
        if (pagesLoaded < totalPages) loadNextPage()
      }
    }
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [pagesLoaded])

  useEffect(() => {
    if (!query) {
      idListRef.current = null
      setRows([])
      setPagesLoaded(0)
      setSearching(false)
      setMatchesCount(null)
      setTimeout(() => loadNextPage(0), 0)
      return
    }

    let cancelled = false
    setSearching(true)
    setIsLoading(true)
    setRows([])
    setPagesLoaded(0)

    const q = query.trim().toLowerCase()
    const matches = []
    let i = 0

    function processChunk() {
      const end = Math.min(i + SEARCH_CHUNK, TOTAL)
      for (; i < end; i++) {
        const id = i + 1
        const rec = generateRecordForId(id)
        if (
          rec.name.toLowerCase().includes(q) ||
          rec.email.toLowerCase().includes(q) ||
          rec.phone.toLowerCase().includes(q)
        ) {
          matches.push(id)
          if (matches.length >= MAX_MATCHES) break
        }
      }
      setMatchesCount(matches.length)
      if (cancelled) return
      if (i < TOTAL && matches.length < MAX_MATCHES) {
        setTimeout(processChunk, 0)
      } else {
        idListRef.current = matches.slice()
        applySortToIdList()
        setSearching(false)
        setIsLoading(false)
        setTimeout(() => loadNextPage(0), 0)
      }
    }

    processChunk()
    return () => { cancelled = true }
  }, [query])

  function applySortToIdList() {
    const key = sortState.key
    const dir = sortState.dir
    if (!idListRef.current) {
      idListRef.current = Array.from({ length: TOTAL }, (_, i) => i + 1)
    }
    const arr = idListRef.current
    const comparator = (a, b) => {
      const ra = generateRecordForId(a)
      const rb = generateRecordForId(b)
      let va = ra[key]
      let vb = rb[key]
      if (key === 'score' || key === 'id') {
        va = Number(va)
        vb = Number(vb)
        return va - vb
      }
      return String(va).localeCompare(String(vb))
    }
    setIsLoading(true)
    setTimeout(() => {
      arr.sort((a, b) => (sortState.dir === 'asc' ? comparator(a, b) : -comparator(a, b)))
      idListRef.current = arr
      setRows([])
      setPagesLoaded(0)
      loadNextPage(0)
      setIsLoading(false)
    }, 0)
  }

  function onSort(key) {
    setSortState(s => {
      const dir = s.key === key && s.dir === 'asc' ? 'desc' : 'asc'
      const newState = { key, dir }
      setTimeout(() => { applySortToIdList() }, 0)
      return newState
    })
  }

  const searchTimeout = useRef(null)
  function onSearchChange(e) {
    const v = e.target.value
    setQuery(v)
    if (searchTimeout.current) clearTimeout(searchTimeout.current)
    searchTimeout.current = setTimeout(() => { setQuery(v) }, 250)
  }

  return (
    <div className="app">
      <Header />
      <SubtitleRow total={TOTAL.toLocaleString()} />
      <SearchAndFilterRow onSearchChange={onSearchChange} filterOpen={filterOpen} setFilterOpen={setFilterOpen} />

      <div className="container" ref={containerRef}>
        <div className="table">
          <TableHeader sortState={sortState} onSort={onSort} />

          {/* Body */}
          <div className="tbody">
            {rows.map(row => (
              <TableRow row={row} key={row.id} />
            ))}
            {isLoading && <div className="loading">Loading...</div>}
            {!isLoading && rows.length === 0 && <div className="empty">No rows to display</div>}
          </div>
        </div>

        <footer className="footer">
          <div>Total records: {TOTAL.toLocaleString()}</div>
          {matchesCount !== null && <div>Matches: {matchesCount}</div>}
        </footer>
      </div>
    </div>
  )
}
