let button = document.getElementById('btn');
let urlInput = document.getElementById("urlInput");
let emailInput = document.getElementById("emailInput");

button.addEventListener('click', function() {

  if (isValidURL(urlInput.value.trim())) {
    urlInput.style.backgroundColor = "green";
  } else {
    urlInput.style.backgroundColor = "red";
  }

 
  if (isValidEmail(emailInput.value.trim())) {
    emailInput.style.backgroundColor = "green";
  } else {
    emailInput.style.backgroundColor = "red";
  }
});

function isValidURL(url) {
    return /^https?:\/\/.*\..*/.test(url);
  }
  
  function isValidEmail(email) {
  
    return /.*@.*\..*/.test(email);
  }
  