//For formating numbers as USD
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  trailingZeroDisplay: 'stripIfInteger'
})

//Change values of year inputs when first has been typed to
function autofillYears(){
  //Get the value of the first
  let starting_year = parseInt(document.getElementById('year1').value)
  
  if(starting_year) {
    //Set values of other year boxes based on the first year
    document.getElementById("year2").placeholder = starting_year + 1
    document.getElementById("year3").value = starting_year + 2
    document.getElementById("year4").value = starting_year + 3
  }
  else {
    //Make boxes empty if starting_year is null
    document.getElementById("year2").placeholder = ""
    document.getElementById("year3").value = ""
    document.getElementById("year4").value = ""
  }
}

//Calculate the user's debt
function calculateDebt() {
  //Initiate variables using html tags
  const loan1 = parseFloat(document.getElementById('loan1').value);
  const loan2 = parseFloat(document.getElementById('loan2').value);
  const loan3 = parseFloat(document.getElementById('loan3').value);
  const loan4 = parseFloat(document.getElementById('loan4').value);
  const interest_rate = 0.05; // 5% interest
  
  //Find the total debt
  let total_debt = loan1 * Math.pow(1 + interest_rate, 3) + 
      loan2 * Math.pow(1 + interest_rate, 2) + 
      loan3 * Math.pow(1 + interest_rate, 1) + 
      loan4
  
  //Find amortization payment for 10 years
  let amortization = (total_debt * interest_rate) / (1 - Math.pow(1 + interest_rate, -10))

  //Show results in the console
  console.log("Total Debt: " +total_debt)
  console.log("Amortization: " + amortization)
  
  //Fill out graph with data
  paymentGraph(amortization, total_debt, interest_rate)
  
}

//Find the interest and principal and then fill out the needed table cells with data
function paymentGraph(amort_payment, remaining_debt, interest_rate) {
  
  //Create variables
  let paymentName = "payment"
  let interestName = "interest"
  let principalName = "principal"
  let remainingDebtName = "remainingDebt"
  let principal_payment
  let interest_payment
  
  //Loop through all years
  for(let i = 1; i < 11; i++) {
    console.log("Year " + i)
    
    //Find principal payment
    principal_payment = amort_payment - (remaining_debt * interest_rate)
    console.log("Principal: " + principal_payment)

    //Find interest payment
    interest_payment = amort_payment - principal_payment
    console.log("Interest: " + interest_payment)

    //Get debt amount after payment
    remaining_debt -= principal_payment
    console.log("Remaining Debt: " + remaining_debt)

    //Round values and then place them in paragraphs
    document.getElementById(paymentName + i).textContent = formatter.format(Math.round(amort_payment*100)/100)
    document.getElementById(interestName + i).textContent = formatter.format(Math.round(interest_payment * 100)/100)
    document.getElementById(principalName + i).textContent = formatter.format(Math.round(principal_payment * 100)/100)
    document.getElementById(remainingDebtName + i).textContent = formatter.format(Math.round(remaining_debt * 100)/100)
  }
  
}