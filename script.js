//your JS code here. If required.
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener('click',()=>{
const name = document.querySelector('#name').value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirm-password").value;
	if(password === confirmPassword){
		window.sessionStorage.setItem("name",name);
		window.sessionStorage.setItem("email",email);
		window.sessionStorage.setItem("password",password);
		alert("Sign up successful!.")	
	}
	else{
		alert("Passwords do not match");
	}
})