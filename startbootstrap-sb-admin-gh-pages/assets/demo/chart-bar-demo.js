// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


//Make variables for data
let countArray = [0, 0, 0, 0, 0, 0]
let urlArray = ["https://cataas.com/api/cats?tags=sad", 
                "https://cataas.com/api/cats?tags=grump", 
                "https://cataas.com/api/cats?tags=ragdoll", 
                "https://cataas.com/api/cats?tags=Fierce", 
                "https://cataas.com/api/cats?tags=fluffy", 
                "https://cataas.com/api/cats?tags=Wide%20mouth"]
json = ""
js = null

//Make a function for each bar in graph
//Why I cannot do this in just one function I do not know >:I
function getCatData() {
  //Make xhr object
  const xhr = new XMLHttpRequest()
  //Use it to open the url
  xhr.open("GET", urlArray[0], true)
  xhr.setRequestHeader("Accept", "application/json")

  xhr.onload = function() {
    if(xhr.status === 200) {
      //Set json to the stringified object
      json = xhr.responseText
      //Parse it into a JS object
      js = JSON.parse(json)
      //Set countArray element to object's length
      countArray[0] = js.length
      console.log("i: " + 0 + " Value: " + js.length)
    }

  }

  //Send xhr
  xhr.send()

}

function getCatData1() {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", urlArray[1], true)
  xhr.setRequestHeader("Accept", "application/json")

  xhr.onload = function() {
    if(xhr.status === 200) {
      json = xhr.responseText
      js = JSON.parse(json)
      countArray[1] = js.length
      console.log("i: " + 1 + " Value: " + js.length)
    }

  }

  xhr.send()

}

function getCatData2() {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", urlArray[2], true)
  xhr.setRequestHeader("Accept", "application/json")

  xhr.onload = function() {
    if(xhr.status === 200) {
      json = xhr.responseText
      js = JSON.parse(json)
      countArray[2] = js.length
      console.log("i: " + 2 + " Value: " + js.length)
    }

  }

  xhr.send()

}

function getCatData3() {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", urlArray[3], true)
  xhr.setRequestHeader("Accept", "application/json")

  xhr.onload = function() {
    if(xhr.status === 200) {
      json = xhr.responseText
      js = JSON.parse(json)
      countArray[3] = js.length
      console.log("i: " + 3 + " Value: " + js.length)
    }

  }

  xhr.send()

}

function getCatData4() {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", urlArray[4], true)
  xhr.setRequestHeader("Accept", "application/json")

  xhr.onload = function() {
    if(xhr.status === 200) {
      json = xhr.responseText
      js = JSON.parse(json)
      countArray[4] = js.length
      console.log("i: " + 4 + " Value: " + js.length)
    }

  }

  xhr.send()

}

function getCatData5() {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", urlArray[5], true)
  xhr.setRequestHeader("Accept", "application/json")

  xhr.onload = function() {
    if(xhr.status === 200) {
      json = xhr.responseText
      js = JSON.parse(json)
      countArray[5] = js.length
      console.log("i: " + 5 + " Value: " + js.length)
      //Generate the bar graph now that we have all the data
      generateGraph()
    }

  }

  xhr.send()

}

//Run all functions when window loads
window.onload = function() {
  getCatData()
  getCatData1()
  getCatData2()
  getCatData3()
  getCatData4()
  getCatData5()
}

//Generate the graph based on countArray's values
function generateGraph() {
  // Bar Chart Example
  var ctx = document.getElementById("myBarChart");
  var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Sad", "Grump", "Ragdoll", "Fierce", "Fluffy", "Wide Mouth"],
      datasets: [{
        label: "Cats",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: [countArray[0], countArray[1], countArray[2], countArray[3], countArray[4], countArray[5]],
      }],
    },
    options: {
      scales: {
        xAxes: [{
          time: {
            unit: 'month'
          },
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 6
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 20,
            maxTicksLimit: 5
          },
          gridLines: {
            display: true
          }
        }],
      },
      legend: {
        display: false
      }
    }
  });

}
