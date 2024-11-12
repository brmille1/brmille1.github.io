//Add listener for button click event
document.getElementById("calculateBtn").addEventListener("click", calcAvailableRent)

//Make object for table
const paymentTable = {
  tableRows: [[0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0]],

}

let table1 = document.querySelector("#table1 tbody")
let row = document.createElement("tr")
let column1 = document.createElement("td")
let column2 = document.createElement("td")
let column3 = document.createElement("td")
column1.innerHTML = "This is a column1"
column2.innerHTML = "This is a column2"
column3.innerHTML = "This is a column3"
row.appendChild(column1)
row.appendChild(column2)
row.appendChild(column3)
table1.appendChild(row)


//Calculate available rent
function calcAvailableRent() {
  
  //Get data from HTML and parse it into floats
  let income = document.querySelector("#income").value
  income = parseFloat(income)
  let expenses = document.querySelector("#expenses").value
  expenses = parseFloat(expenses)
  let savings = document.querySelector("#savings").value
  savings = parseFloat(savings)
  
  //Log inputs
  console.log(income)
  console.log(expenses)
  console.log(savings)
  
  //Find available rent
  let availableRent = income - expenses - savings
  
  //Find house price
  let r = 0.05 / 12
  let n = 30 * 12
  let housePrice = (expenses * (1 - (Math.pow(1 + r, -n)))) / r
  
  //Round results down to 2 decimal points
  availableRent = Math.floor(availableRent * 100) / 100
  housePrice = Math.floor(housePrice * 100) / 100
  
  //Set innerHTML to results
  document.getElementById("rentAmount").innerHTML = availableRent
  document.getElementById("housePrice").innerHTML = housePrice
  
}

function fetchCatImage() {
  //Create XMLHttpRequest object
  const xhr = new XMLHttpRequest()
  //Get the website we want to get from
  xhr.open("GET", "https://cataas.com/cat", true)
  //Ensure that it is an image
  xhr.responseType = "blob"
  
  //Assign function to xhr's onload function
  xhr.onload = function() {
    //If the image is finished loaing
    if (xhr.status === 200) {
      //Get the URL of the image
      const imgURL = URL.createObjectURL(xhr.response)
      //Get the HTML element
      const catDiv = document.getElementById("catImage")
      //Set its innerHTMl to the cat image
      catDiv.innerHTML = `<img src="${imgURL}" alt="Random Cat Image" />`
    } else {
      console.error("Failed to load cat image")
    }
    
  }
  
  xhr.send()
}

//Get cat image when window is loaded
window.onload = fetchCatImage