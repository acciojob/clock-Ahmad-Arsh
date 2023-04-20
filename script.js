 function updateClock() {
      var timer = document.getElementById('timer');
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();
      var month = currentTime.getMonth() + 1;
      var day = currentTime.getDate();
      var year = currentTime.getFullYear();
      var ampm = hours >= 12 ? 'PM' : 'AM';
      
      // Convert hours from 24-hour format to 12-hour format
      hours = hours % 12;
      hours = hours ? hours : 12; // Handle midnight (0 hours)
      
      // Add leading zeros to single-digit seconds, minutes, and hours
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      if (hours < 10) {
        hours = '0' + hours;
      }
      
      // Display the date and time in the specified format
      timer.innerHTML = month + "/" + day + "/" + year + " " + hours + ":" + minutes + ":" + seconds + " " + ampm;
    }
    
    window.onload = function() {
      setInterval(updateClock, 1000); // Update the clock every second
    };