export function generateRecordForId(id) {
  const seed = id * 2654435761 >>> 0
  function rnd(n) {
    let x = seed
    x ^= x << 13
    x ^= x >>> 17
    x ^= x << 5
    return Math.abs((x + id) % n)
  }

  const firstNames = ['John', 'Jane', 'Alex', 'Chris', 'Pat', 'Taylor', 'Sam', 'Morgan', 'Avery', 'Casey']
  const lastNames = ['Smith', 'Doe', 'Lee', 'Patel', 'Garcia', 'Chen', 'Kumar', 'Nguyen', 'Brown', 'Singh']
  const name = `${firstNames[rnd(10)]} ${lastNames[rnd(10)]}`
  const phone = `+91 ${9000000000 + (id % 1000000000)}`
  const email = `${name.toLowerCase().replace(/ /g, '.')}.${id % 1000}@example.com`
  const score = rnd(100)
  const now = Date.now()
  const lastMessageAt = now - (rnd(1000000000))
  const addedBy = ['Kartikey Mishra', 'Priya Sharma', 'Admin'][rnd(3)]
  const bg = ['#F88', '#8F8', '#88F', '#FF8', '#8FF', '#F8F'][rnd(6)]
  const avatar = `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><rect fill='${bg}' width='100%' height='100%'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='14' font-family='Arial' fill='#222'>${name.split(' ')[0][0]}</text></svg>`
  )}`
  return { id, name, phone, email, score, lastMessageAt, addedBy, avatar }
}
