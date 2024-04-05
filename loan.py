def calculate_loan(salary, previous_emis, tenure, rate_of_interest, processing_rate):
    
    # Calculate income
    income = (salary * FOIR) / 100
    
    # Calculate monthly EMI based on tenure
    if tenure == 1:
        emi_contribution = 9000
    elif tenure == 2:
        emi_contribution = 4800
    elif tenure == 3:
        emi_contribution = 3600
    elif tenure == 4:
        emi_contribution = 2800
    else:
        emi_contribution = 2400
    
    # Calculate actual amount after deducting monthly EMI
    actual_amt = income - previous_emis
    
    # Calculate gross eligible loan amount
    gross_eligible_loan_amt = actual_amt / emi_contribution
    
    # Calculate processing fees and GST
    processing_fees_amt = (gross_eligible_loan_amt * processing_rate) / 100
    gst = processing_fees_amt * 18 / 100
    
    # Calculate net eligible loan amount
    net_eligible_loan_amt = (gross_eligible_loan_amt - processing_fees_amt) - gst
    
    return gross_eligible_loan_amt, net_eligible_loan_amt

# Get user input
salary = float(input("Enter salary of customer: "))
FOIR = float(input("Enter FOIR: "))
previous_emis = float(input("Enter any previous EMIs: "))
tenure = int(input("Enter loan tenure (in years): "))
rate_of_interest = float(input("Enter rate of interest (%): "))
processing_rate = float(input("Enter processing fee rate (%): "))

gross_eligible_loan_amt, net_eligible_loan_amt = calculate_loan(salary, previous_emis, tenure, rate_of_interest, processing_rate)
print(f"Gross Eligible Loan Amount: {gross_eligible_loan_amt:.2f}")
print(f"Net Eligible Loan Amount: {net_eligible_loan_amt:.2f}")
