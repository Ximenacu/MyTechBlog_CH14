console.log("editDelete.js")

document.querySelector('#editBtn').addEventListener('click', async (event) =>{
    const myDiv = document.getElementById('postContent');
    const old = document.getElementById('postContentText').innerHTML;
    console.log("old: ", old); 
    const inputElement = document.createElement('input')
    const editbtn = document.createElement('button') //
    document.getElementById('postContentText').innerHTML = '';
    myDiv.appendChild(inputElement);
    myDiv.appendChild(editbtn);
    inputElement.setAttribute("value", old);
    inputElement.setAttribute("style", "width:500px; margin:3% 0% 3% 5%");
    inputElement.setAttribute("class", "form-control");
    inputElement.setAttribute("id", "updatedpost");
    editbtn.textContent = 'Save';
    editbtn.setAttribute("class", "btn btn-secondary");
    editbtn.setAttribute("style", "height:40px; margin-right:3%");
    editbtn.setAttribute("id", "saveChanges");
});

document.getElementById('postContent').addEventListener('click', async (event) => {
    if (event.target.id === 'saveChanges') {
      const updated = document.getElementById('updatedpost').value.trim();
    //   console.log(document.location.pathname);
      const response = await fetch(`${document.location.pathname}`, {
        method: 'PUT',
        body: JSON.stringify({updated}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log("response ok")
        document.location.replace(document.location.pathname);
      } else {
        alert('Failed to add comment.');
      }
    }
  });