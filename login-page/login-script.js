let loggedInInd = sessionStorage.getItem('loggedIn');
if (loggedInInd === 'true') {
	document.querySelector('form').style.display = 'none';
	document.getElementById('logged-in-msg').style.display = 'block';
	document.getElementById(
		'logged-in-msg'
	).innerHTML = `Welcome ${sessionStorage.getItem('username')} !`;
}

function subscribeClicked() {
	console.log('subsc');
	document.getElementById('subscribe-pop-msg').style.display = 'block';
	setTimeout(() => {
		document.getElementById('subscribe-pop-msg').style.display = 'none';
	}, 5000);
}

function loginClicked(event) {
	event.preventDefault();
	let name = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	document.getElementById('login-anchor').removeAttribute('href');
	if (name == null || name == '') {
		alert("Name can't be blank");
		document.getElementById('login-anchor').removeAttribute('href');

		return false;
	} else if (password.length < 6) {
		alert('Password must be at least 6 characters long.');
		return false;
	}

	sessionStorage.setItem('loggedIn', true);
	sessionStorage.setItem('username', name);
	username = name;
	let links = [];
	location.replace('../main-page/main-page.html');
}
