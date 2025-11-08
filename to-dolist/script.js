const inputbox= document.getElementById("input-box");
const list= document.getElementById("tasks");


function addtask(){
    if (inputbox.value==='') {
        alert("Write smth")
    } 
    else {
  
    let li = document.createElement("li");
     const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onchange = function() {
            if (checkbox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        };
          li.appendChild(checkbox);
        li.appendChild(document.createTextNode(' ' + inputbox.value));

        list.appendChild(li);
        inputbox.value = '';
    }
}


