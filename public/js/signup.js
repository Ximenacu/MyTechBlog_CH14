const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log("event received from signup")
    const username = document.querySelector('#signUpUser').value.trim();
    const email = document.querySelector('#signUpMail').value.trim();
    const password = document.querySelector('#signUpPassword').value.trim();
    console.log(username)
    console.log(email)
    console.log(password)
  
    if (username && email && password) {
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/api/dashboard');
      } else {
        console.log(response)
        alert('Failed to sign up.');
      }
    }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);