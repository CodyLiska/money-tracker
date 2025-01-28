const saveButton = document.getElementById("saveButton");

document.addEventListener("DOMContentLoaded", function () {
  // Transaction Row User Inputs
  const inputs = document.querySelectorAll(
    "#transactionRow input, #transactionRow select"
  );
  // Total Balance Section
  const clearedBalanceValue = parseFloat(
    document.getElementById("clearedBalanceValue").innerText
  );
  const unclearedBalanceValue = parseFloat(
    document.getElementById("unclearedBalanceValue").innerText
  );
  const workingBalanceValue = parseFloat(
    document.getElementById("workingBalanceValue").innerText
  );

  // LOGGING
  // console.log("clearedBalanceValue: ", clearedBalanceValue);
  // console.log("unclearedBalanceValue: ", unclearedBalanceValue);
  // console.log("workingBalanceValue: ", workingBalanceValue);


  // Helper Function to add Event Listeners to all Input and Select elements
  function addSaveButtonListeners(row) {
    const inputs = row.querySelectorAll("input, select");
    inputs.forEach((input) => {
      input.addEventListener("focus", function () {
        saveButton.style.display = "inline-block";
      });
    });
  }

  // Initial setup for existing rows
  const initialRow = document.getElementById("transactionRow");
  addSaveButtonListeners(initialRow);

  // Add Row Button Event Listener
  document
    .getElementById("addRowButton")
    .addEventListener("click", function () {
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

  // Helper Function to Calculate Uncleared Balance
  function updateUnclearedBalance() {
    const rows = document.querySelectorAll("#transactionTable tr");
    let totalUnclearedBalance = 0;
    let totalClearedBalance = 0;

    rows.forEach((row) => {
      const inflowInput = row.querySelector("#inflowCellInput");
      const outflowInput = row.querySelector("#outflowCellInput");
      const clearedCheckbox = row.querySelector("#clearedCheckboxCell");

      const inflowValue = parseFloat(inflowInput.value) || 0;
      const outflowValue = parseFloat(outflowInput.value) || 0;

      

    document.getElementById("unclearedBalanceValue").innerText =
      totalUnclearedBalance.toFixed(2);
    document.getElementById("clearedBalanceValue").innerText =
      totalClearedBalance.toFixed(2);

    console.log("Total Uncleared Balance: ", totalUnclearedBalance);
    console.log("Total Cleared Balance: ", totalClearedBalance);
    });

  saveButton.addEventListener("click", function () {
    // Assign User Input Values to Variables
    // const dateUserInput = document.getElementById("dateCellInput").value;
    // const payeeUserInput = document.getElementById("payeeCellDropDown").value;
    // const categoryUserInput = document.getElementById(
    //   "categroyCellDropdown"
    // ).value;
    // const notesUserInput = document.getElementById("notesCellInput").value;
    // const outflowUserInput = document.getElementById("outflowCellInput").value;
    // const inflowUserInput = document.getElementById("inflowCellInput").value;
    // const clearedCheckbox = document.getElementById(
    //   "clearedCheckboxCell"
    // ).checked;
    const rows = document.querySelectorAll("#transactionTable tr");
    let totalUnclearedBalance = 0;
    let totalClearedBalance = 0;

    rows.forEach((row) => {
      const inflowUserInput = row.querySelector("#inflowCellInput");
      const outflowUserInput = row.querySelector("#outflowCellInput");
      const clearedCheckbox = row.querySelector("#clearedCheckboxCell");

      const inflowValue = parseFloat(inflowUserInput.value) || 0;
      const outflowValue = parseFloat(outflowUserInput.value) || 0;

      if (clearedCheckbox.checked) {
        totalClearedBalance += inflowValue - outflowValue;
      } else {
        totalUnclearedBalance += inflowValue - outflowValue;
      }

      document.getElementById("unclearedBalanceValue").innerText = totalUnclearedBalance.toFixed(2);
      document.getElementById("clearedBalanceValue").innerText = totalClearedBalance.toFixed(2);
    
      console.log("Total Uncleared Balance: ", totalUnclearedBalance);
      console.log("Total Cleared Balance: ", totalClearedBalance);
    });

    // User Input Form Data
    console.log("********  Transaction Details Form  ********");
    console.log("Date: ", dateUserInput);
    console.log("Payee: ", payeeUserInput);
    console.log("Category: ", categoryUserInput);
    console.log("Notes: ", notesUserInput);
    console.log("Outflow: ", outflowUserInput);
    console.log("Inflow: ", inflowUserInput);
    console.log("Cleared Checkbox: ", clearedCheckbox);

    // Balance Details Section
    console.log("********  Balance Details Section  ********");
    console.log("Cleared Balance: ", clearedBalanceValue);
    console.log("Uncleared Balance: ", unclearedBalanceValue);
    console.log("Working Balance: ", workingBalanceValue);

    // Hide the save button after it is clicked
    saveButton.style.display = "none";

    if (outflowUserInput && inflowUserInput) {
      alert("Please enter only one value in Outflow or Inflow");
      return;
    }

    // SCENARIO: Inflow && Uncleared
    if (inflowUserInput && clearedCheckbox == false) {
      const userInputConverted = parseFloat(
        document.getElementById("inflowCellInput").value
      );
      const currentUnclearedBalance = parseFloat(
        document.getElementById("unclearedBalanceValue").innerText
      );
      console.log("userInputConverted: ", userInputConverted);
      console.log("Current Uncleared Balance: ", currentUnclearedBalance);
      var result = userInputConverted + currentUnclearedBalance;
      console.log("Result: ", result);
      unclearedBalanceValue.innerText = result;
      return result;
    }

    // SCENARIO: Outflow && Uncleared
    // if (outflowUserInput && clearedCheckbox == false) {
    //   const userInputToFloat = parseFloat(outflowUserInput);
    //   console.log("Outflow Value (function): ", userInputToFloat);
    //   var result = unclearedBalanceValue - userInputToFloat;
    //   console.log("Result: ", result);
    //   unclearedBalanceCell.innerText = result;
    //   return result;
    // }

    // // SCENARIO: Inflow && Cleared
    // if (inflowUserInput && clearedCheckbox == true) {
    //   const userInputConverted = parseFloat(inflowUserInput);
    //   console.log("Inflow Value (function): ", userInputConverted);
    //   var result = userInputConverted + clearedBalanceValue;
    //   console.log("Result: ", result);
    //   clearedBalanceCell.innerText = result;
    //   return result;
    // }

    // // SCENARIO: Outflow && Cleared
    // if (outflowUserInput && clearedCheckbox == true) {
    //   const userInputToFloat = parseFloat(outflowUserInput);
    //   console.log("Outflow Value (function): ", userInputToFloat);
    //   var result = clearedBalanceValue - userInputToFloat;
    //   console.log("Result: ", result);
    //   clearedBalanceCell.innerText = result;
    //   return result;
    // }
  });
});
