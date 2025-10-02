# Money Tracker

A lightweight, client‑side expense & income tracker built using HTML, CSS, and JavaScript.

## Table of Contents

- [Money Tracker](#money-tracker)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Usage / Running Locally](#usage--running-locally)
  - [How It Works (Core Logic)](#how-it-works-core-logic)
  - [Possible Enhancements / Roadmap](#possible-enhancements--roadmap)

---

## Overview

Money Tracker is a simple front-end application that lets a user log incomes and expenses, track balances, and observe how money flows over time. It’s intended as a lightweight, offline‑friendly “personal finance scratchpad” rather than a full-featured finance system.

This repo is primarily composed of static files (HTML, CSS, JS) and does not appear to rely on a backend or external database.

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
├── .vscode/                ← (Editor settings, e.g. launch / debugging configs)
├── index.html              ← The main HTML page / UI entrypoint
├── style.css               ← CSS for styling
├── script.js                ← Main JavaScript logic
├── script_old.js           ← Previous version (or legacy logic)
├── money_tracker.tkb       ← (Possibly a data or tracker file)
├── README.md               ← This readme / project documentation
└── .gitignore
```

- **index.html** — Contains the markup and UI skeleton
- **style.css** — Defines layout, colors, typography, spacing
- **script.js** — Core logic for managing transactions, updating UI, local storage, etc
- **script_old.js** — An older or earlier version of the script (for reference or fallback)
- **money_tracker.tkb** — It’s unclear what this is (maybe a data file or custom format)
- **.vscode** — Settings for VS Code (optional)
- **.gitignore** — Specifies files/folders to be ignored by Git

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

4. **(Optional) Use “script_old.js”**
   - You may compare or revert to the older logic by switching in `script_old.js` in place of `script.js` within `index.html`

## How It Works (Core Logic)

Here is a rough description of how the system likely functions (you may need to verify by reading `script.js`):

1. **Data Model / Storage**

   - Transactions are stored (most likely) in browser local storage (or memory)
   - Each transaction contains at least a date/time, description, amount, and type (income vs expense)

2. **Adding Transactions**

   - A form or input UI lets the user enter transaction details
   - On submission, the script validates input, appends to transaction list, updates storage

3. **Balance & Totals**

   - The application aggregates transaction amounts
   - It updates a “balance” (sum of incomes minus sum of expenses)
   - Possibly shows subtotals by category (if categories exist) or filtering by time

4. **Rendering UI**

   - The JS updates the DOM to reflect the list of transactions
   - Also updates the balance display, maybe color‑coding positive vs negative
   - May support removing transactions, editing, or filtering

5. **Legacy / Old Script**

   - `script_old.js` likely contains a previous version of logic; useful for rollback or reference
   - Could also contain alternate approaches (e.g. simpler, less features)

6. **Custom File: money_tracker.tkb**
   - This file’s purpose is unclear from surface-level view
   - It might store data in a custom format, backup, or be a configuration/tracker file
   - You may need to open it in a text editor to see its contents

## Possible Enhancements / Roadmap

Improvements/next steps:

- Add **categories** (e.g. Food, Rent, Transport) for transactions
- Add **date filtering** (day / week / month / year)
- Enable **editing** or **deleting** past transactions
- Support **recurring payments** (e.g. monthly rent)
- Add **export / import** functionality (CSV, JSON)
- Add **charts / visualizations** (e.g. pie chart, bar chart of spend by category)
- Add **data backup / synchronization** (e.g. sync across devices or cloud)
- Improve styling / responsive design
- Add input validation and error handling
- Add tests (unit tests for logic)
- Document code and architecture in more detail
