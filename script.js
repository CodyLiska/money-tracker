const saveButton = document.getElementById("saveButton");

// Helper Function to add Event Listeners to all Input and Select elements
function addSaveButtonListeners(row) {
  const inputs = row.querySelectorAll("input, select");
  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      saveButton.style.display = "inline-block";
    });
  });

  // Add event listener to update balance when inflow value changes
  row
    .querySelector("#inflowCellInput")
    .addEventListener("input", updateBalances);
  row
    .querySelector("#outflowCellInput")
    .addEventListener("input", updateBalances);
  row
    .querySelector("#clearedCheckboxCell")
    .addEventListener("change", updateBalances);
}

// Update Balance Total Function to calculate and update the uncleared, cleared, and working balances
function updateBalances() {
  const rows = document.querySelectorAll("#transactionTable tr");
  let totalUnclearedBalance = 0;
  let totalClearedBalance = 0;

  rows.forEach((row) => {
    const inflowInput = row.querySelector("#inflowCellInput");
    const outflowInput = row.querySelector("#outflowCellInput");
    const clearedCheckbox = row.querySelector("#clearedCheckboxCell");

    const inflowValue = parseFloat(inflowInput.value) || 0;
    const outflowValue = parseFloat(outflowInput.value) || 0;

    if (clearedCheckbox.checked) {
      totalClearedBalance += inflowValue - outflowValue;
    } else {
      totalUnclearedBalance += inflowValue - outflowValue;
    }
  });

  document.getElementById("unclearedBalanceValue").innerText = totalUnclearedBalance.toFixed(2);
  document.getElementById("clearedBalanceValue").innerText = totalClearedBalance.toFixed(2);

  const workingBalanceValue = totalUnclearedBalance + totalClearedBalance;
  document.getElementById("workingBalanceValue").innerText = workingBalanceValue.toFixed(2);

  console.log("Total Uncleared Balance: ", totalUnclearedBalance);
  console.log("Total Cleared Balance: ", totalClearedBalance);
  console.log("Working Balance: ", workingBalanceValue);
}

// Initial setup for existing rows
const initialRow = document.getElementById("transactionRow");
addSaveButtonListeners(initialRow);

// ADD NEW ROW functionality
document.getElementById("addRowButton").addEventListener("click", function () {
  var table = document.getElementById("transactionTable");
  var newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td id="chevronCell">
      <i class="bi bi-chevron-up text-danger"></i>
    </td>
    <td id="dateCell">
      <input
        type="date"
        id="dateCellInput"
        class="form-control form-control-sm"
        value=""
      />
    </td>
    <td id="payeeCell">
      <select
        id="payeeCellDropDown"
        class="form-select form-select-sm"
      >
        <option>John Doe</option>
        <option>Jane Smith</option>
        <option>ABC Corp</option>
      </select>
    </td>
    <td id="categoryCell">
      <select
        id="categroyCellDropdown"
        class="form-select form-select-sm"
      >
        <option>Groceries</option>
        <option>Utilities</option>
        <option>Entertainment</option>
      </select>
    </td>
    <td id="notesCell">
      <input
        type="text"
        id="notesCellInput"
        class="form-control form-control-sm"
        value=""
      />
    </td>
    <td id="outflowCell">
      <input
        type="text"
        id="outflowCellInput"
        class="form-control form-control-sm"
        value=""
      />
    </td>
    <td id="inflowCell">
      <input
        type="text"
        id="inflowCellInput"
        class="form-control form-control-sm"
        value=""
      />
    </td>
    <td id="clearedCell">
      <input
        id="clearedCheckboxCell"
        class="form-check-input"
        type="checkbox"
      />
    </td>
  `;

  table.appendChild(newRow);
  addSaveButtonListeners(newRow); // Add event listeners to the new row
});

// SAVE BUTTON functionality to log all values and update balances
saveButton.addEventListener("click", function () {
  const rows = document.querySelectorAll("#transactionTable tr");
  let totalUnclearedBalance = 0;
  let totalClearedBalance = 0;

  rows.forEach((row) => {
    const inflowInput = row.querySelector("#inflowCellInput");
    const outflowInput = row.querySelector("#outflowCellInput");
    const clearedCheckbox = row.querySelector("#clearedCheckboxCell");

    const inflowValue = parseFloat(inflowInput.value) || 0;
    const outflowValue = parseFloat(outflowInput.value) || 0;

    if (clearedCheckbox.checked) {
      if (inflowValue) {
        totalUnclearedBalance += inflowValue;
        totalClearedBalance += inflowValue;
      }
      if (outflowValue) {
        totalClearedBalance -= outflowValue;
      }
    } else {
      if (inflowValue) {
        totalUnclearedBalance += inflowValue;
      }
      if (outflowValue) {
        totalUnclearedBalance -= outflowValue;
      }
    }
  });

  document.getElementById("unclearedBalanceValue").innerText =
    totalUnclearedBalance.toFixed(2);
  document.getElementById("clearedBalanceValue").innerText =
    totalClearedBalance.toFixed(2);

  console.log("Total Uncleared Balance: ", totalUnclearedBalance);
  console.log("Total Cleared Balance: ", totalClearedBalance);
});

// Initial call to update the uncleared balance
updateBalances();
