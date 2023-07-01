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

document.querySelector('#deleteBtn').addEventListener('click', async (event) =>{
    const sureText = document.createElement('p');
    sureText.textContent = "Are you sure you want to Delete this post?";
    sureText.setAttribute('style', 'margin:2% 2% 0% 0%')

    const editbtn = document.createElement('button') //
    editbtn.textContent = "I'm Sure."
    editbtn.setAttribute("class", "btn btn-danger");
    editbtn.setAttribute("style", "height:40px; margin-right:3%");
    editbtn.setAttribute("id", "confirmDelete");

    document.getElementById('sure').appendChild(sureText);
    document.getElementById('sure').appendChild(editbtn);
});

document.getElementById('sure').addEventListener('click', async (event) => {
    if (event.target.id === 'confirmDelete') {
        console.log("button works. ")

      const response = await fetch(`${document.location.pathname}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log("response ok")
        document.location.replace('/api/dashboard');
      } else {
        alert('Failed to add comment.');
      }
    }
  });