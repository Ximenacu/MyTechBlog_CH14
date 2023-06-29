document.querySelector('#logOutBtn').addEventListener('click', async () => {
    const response = await fetch('/api/login/logout')
  
    if (response.ok) {
      document.location.replace('/');
      console.log('response ok');
    } else {
      alert('Failed to log out.');
    }
  }
);

  
