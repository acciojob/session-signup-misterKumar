//your JS code here. If required.


//Form to extract data
let form = document.getElementById("signup-form");

// Checking pass validity on btn click
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let p1 = document.getElementById("password");
  let p2 = document.getElementById("confirm-password");

  if (p1.value !== p2.value) {
    alert("Passwords do not match");
  } else {
    let elements = form.children;
    Array.from(elements).forEach((val) => {
      if (
        val.hasAttribute("id") &&
        val.id != "confirm-password" &&
        val.id != "submit"
      ) {
        window.sessionStorage.setItem(val.id, val.value);
		
      }
	  val.value = "";
    });

    alert("Sign up successfull");
  }
});