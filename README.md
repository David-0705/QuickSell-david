
# DoubleTick Customer Table App

A performant React app for browsing, searching, and filtering a large customer dataset (1,000,000+ records) with a modern UI.

## Features
- Infinite scroll for large datasets
- Fast search and filtering
- Sortable table columns
- Responsive design
- Modular React components
- Custom header with logo and menu

## Folder Structure
```
quickSell/
  public/
  src/
	 assets/
	 components/
	 	FiltersDropdown.jsx
		Header.jsx
		HeaderCell.jsx
		SearchAndFilterRow.jsx
		SerachBar.jsx
		SubtitleRow.jsx
		TableHeader.jsx
		TableRow.jsx
	 App.jsx
	 style.css
  package.json
  README.md
```

## Getting Started
1. **Install dependencies:**
	```sh
	npm install
	```
2. **Run the app:**
	```sh
	npm run dev
	```
3. **Open in browser:**
	Visit `http://localhost:5173` (or the port shown in your terminal).

## Customization
- **Logo:** Replace `src/assets/Utlis/Doubletick.png` with your own logo.
- **Table columns:** Edit `src/components/TableHeader.jsx` and `src/components/TableRow.jsx`.
- **Filters:** Customize filter logic in `src/components/SearchAndFilterRow.jsx`.

## Technologies Used
- React
- Vite
- CSS Modules

## License
MIT
