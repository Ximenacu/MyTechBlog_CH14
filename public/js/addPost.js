console.log("addPost.js")
document.querySelector('#addPost').addEventListener('click', async (event) =>{
    event.preventDefault();
    const newPostTitle = document.querySelector('#newPostTitle').value.trim();
    const newPostBody = document.querySelector('#newPostBody').value.trim();
    if (newPostTitle && newPostTitle) {
        const response = await fetch('/api/dashboard/new', {
            method: 'POST',
            body: JSON.stringify({ newPostTitle, newPostBody }),
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            console.log("response ok")
            document.location.replace(document.location.pathname);
          } else {
            alert('Failed to add comment.');
          }
    }
})