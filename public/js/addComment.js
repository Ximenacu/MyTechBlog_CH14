console.log("addComment.js")
document.querySelector('#addComment').addEventListener('click', async (event) =>{
    event.preventDefault();
    const newComment = document.querySelector('#newComment').value.trim();
    const post_id=  document.location.pathname[1];
    if (newComment) {
        const response = await fetch('/newComment', {
            method: 'POST',
            body: JSON.stringify({ newComment, post_id }),
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