//your JS code here. If required.
const form = document.getElementsById("signup-form");


form.addEventListner("submit",(event)=>{
	event.preventDefault();
	const name = document.getElementsById("name").value;
	const email = document.getElementsById("email").value;
	const password = document.getElementsById("password").value;
	const confirmpassword = document.getElementsById("confirm-password").value;
	if(password === confirmpassword){
		const testUser = {name};
		const useremail = {email};
		const userpassword = {password};
        localStorage.setItem("name", JSON.stringify(username));
        localStorage.setItem("email", JSON.stringify(useremail));
        localStorage.setItem("password", JSON.stringify(userpassword));

		sessionStorage.setItem("name", name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("password", password);
		
		alert("Sign up successful!");
	} else{
		alert{"Passwords do not match"};
	};
});