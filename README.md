# Money Tracker

A lightweight, client‑side expense & income tracker built using HTML, CSS, and JavaScript.

## Table of Contents

- [Money Tracker](#money-tracker)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Usage / Running Locally](#usage--running-locally)
  - [Possible Enhancements / Roadmap](#possible-enhancements--roadmap)

---

## Overview

Money Tracker is a simple front-end application that lets a user log incomes and expenses, track balances, and observe how money flows over time. It’s intended as a lightweight, offline‑friendly “personal finance scratchpad” rather than a full-featured finance system.

## Features

- Add **income** and **expense** transactions
- Track a running **balance**
- Separate “old script” vs “current script” (there is a `script_old.js`)
- Basic styling via CSS
- Offline-capable (since no external backend dependency)
- Simple, minimal UI

## Project Structure

Here is an outline of the repository’s key files/folders:

```
/
├── .vscode/                
├── index.html              
├── style.css             
├── script.js               
├── script_old.js         
├── money_tracker.tkb       
├── README.md              
└── .gitignore
```

## Usage / Running Locally

To run or test this project locally:

1. **Clone** the repository

   ```bash
   git clone https://github.com/CodyLiska/money-tracker.git
   cd money-tracker
   ```

2. **Open** `index.html` in your browser

   - Because it is a static site, you can load it directly (e.g. `file://`)
   - For more consistent behavior (especially with modules / fetch), consider using a local HTTP server (e.g. Python’s `http.server` or VS Code Live Server)

3. **Interact** with the UI

   - Add new transactions (income/expense)
   - Observe the balance updates
   - The UI should reflect changes immediately
   - If local storage or data persistence is implemented, reload the page to confirm data is retained

## Possible Enhancements / Roadmap

Improvements/next steps:

- [ ] Add **categories** (e.g. Food, Rent, Transport) for transactions
- [ ] Add **date filtering** (day / week / month / year)
- [ ] Enable **editing** or **deleting** past transactions
- [ ] Support **recurring payments** (e.g. monthly rent)
- [ ] Add **export / import** functionality (CSV, JSON)
- [ ] Add **charts / visualizations** (e.g. pie chart, bar chart of spend by category)
- [ ] Add **data backup / synchronization** (e.g. sync across devices or cloud)
- [ ] Improve styling / responsive design
- [ ] Add input validation and error handling
- [ ] Add tests (unit tests for logic)
- [ ] Document code and architecture in more detail
