/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

function getCat(){

const inputURL = "https://cataas.com/cat"
console.log("Image URL: " + inputURL)

const fetchCat = new Promise((resolve, reject) => {
  fetch(inputURL)
    .then(response => {
      if (!response.ok) {
        reject("Failed to fetch the image");
      }
      return response.blob();
    })
    .then(blob => {
      const imgURL = URL.createObjectURL(blob);
      resolve(imgURL); // Resolve with the image URL
    })
    .catch(error => reject(error));
});

// Use the promise to set the image in the yellow div
fetchCat
  .then(imgURL => {
    const catDiv = document.getElementById("cat-card");
    catDiv.innerHTML = `<img src="${imgURL}" width="200" alt="Random Cat Image" />`;
  })
  .catch(error => {
    console.error("Promise error:", error);
    document.getElementById("cat-card").innerText = "Error loading image";
  });
}

window.onload = getCat()
