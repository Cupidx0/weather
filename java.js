function displayCurrentDate() {
    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var currentDate = today.toLocaleDateString('en-uk',options);
    document.getElementById('h1').innerText = currentDate;
    document.getElementById('h2').innerText = currentDate;
}


// Call the function to display the current date
displayCurrentDate();


