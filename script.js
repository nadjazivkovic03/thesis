document.addEventListener("DOMContentLoaded", function() {
  // Get reference to the button element
  var button = document.getElementById("exec");

  // Add event listener to the button
  button.addEventListener("click", function() {
      // Create XMLHttpRequest object
      var xhr = new XMLHttpRequest();
      
      // Configure the request
      xhr.open("GET", "execute.php", true);
      
      // Define callback function for when the request changes state
      xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
              // Display response from PHP script
              alert(xhr.responseText);
          }
      };
      
      // Send the request
      xhr.send();
  });
});