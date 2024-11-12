function fetchCatImage() {
  //Create XMLHttpRequest object
  const xhr = new XMLHttpRequest()
  //Get the website we want to get from
  xhr.open("GET", "https://cataas.com/cat/gif", true)
  //Ensure that it is an image
  xhr.responseType = "blob"
  
  //Assign function to xhr's onload function
  xhr.onload = function() {
    //If the image is finished loaing
    if (xhr.status === 200) {
      //Get the URL of the image
      const imgURL = URL.createObjectURL(xhr.response)
      //Get the HTML element
      const catDiv = document.getElementById("cat")
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