// Function to calculate the loan
function calculateLoan() {
    // Get input values
    let salary = parseFloat(document.getElementById("salary").value);
    let foir = parseFloat(document.getElementById("foir").value);
    let previousEmis = parseFloat(document.getElementById("previous_emis").value);
    let tenure = parseFloat(document.getElementById("tenure").value);
    let rateOfInterest = parseFloat(document.getElementById("rate_of_interest").value);
    let processingRate = parseFloat(document.getElementById("processing_rate").value);

    // Calculate FOIR
    let foirValue = 0;
    if (foir >= 0 && foir <= 100) {
        foirValue = foir;
    } else {
        alert("Invalid FOIR value. Please enter a value between 0 and 100.");
        return;
    }

    // Calculate income
    let income = (salary * foirValue) / 100;

    // Calculate monthly EMI based on tenure
    let emiContribution = 0;
    if (tenure == 1) {
        emiContribution = 9000;
    } else if (tenure == 2) {
        emiContribution = 4800;
    } else if (tenure == 3) {
        emiContribution = 3600;
    } else if (tenure == 4) {
        emiContribution = 2800;
    } else {
        emiContribution = 2400;
    }

    // Calculate actual amount after deducting monthly EMI
    let actualAmt = income - previousEmis;

    // Calculate gross eligible loan amount
    let grossEligibleLoanAmt = actualAmt / emiContribution;

    // Calculate processing fees and GST
    let processingFeesAmt = (grossEligibleLoanAmt * processingRate) / 100;
    let gst = processingFeesAmt * 18 / 100;

    // Calculate net eligible loan amount
    let netEligibleLoanAmt = (grossEligibleLoanAmt - processingFeesAmt) - gst;

    // Display the results
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <p>Gross Eligible Loan Amount (In Lacs): ${grossEligibleLoanAmt.toFixed(2)}</p>
        <p>Net Eligible Loan Amount (In Lacs): ${netEligibleLoanAmt.toFixed(2)}</p>
    `;
}

// Function to clear the form
function clearValues() {
    document.getElementById("loanForm").reset(); // Reset the form
    document.getElementById("result").innerHTML = ""; // Clear any previous result
}