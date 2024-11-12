// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


//Make variables for data
countArray = [0, 0, 0, 0, 0, 0]
let urlArray = ["https://cataas.com/api/cats?tags=sad", 
                "https://cataas.com/api/cats?tags=grump", 
                "https://cataas.com/api/cats?tags=ragdoll", 
                "https://cataas.com/api/cats?tags=Fierce", 
                "https://cataas.com/api/cats?tags=fluffy", 
                "https://cataas.com/api/cats?tags=Wide%20mouth"]

//Loop through urlArray to get data

  json = ""
  js = null

  function getCatData() {

    const xhr = new XMLHttpRequest()
    xhr.open("GET", urlArray[0], true)
    xhr.setRequestHeader("Accept", "application/json")

    xhr.onload = function() {
      if(xhr.status === 200) {
        json = xhr.responseText
        js = JSON.parse(json)
        countArray[0] = js.length
        console.log("i: 0 " + " Value: " + js.length)
      }

    }

    xhr.send()

  }
 window.onload = getCatData



// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Sad", "Grump", "Ragdoll", "Fierce", "Fluffy", "Wide Mouth"],
    datasets: [{
      label: "Revenue",
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
