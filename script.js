
const submitBTN = document.getElementById("submit");
const clearBTN = document.getElementById("clear-list");
const textAppend = document.getElementById("append-text");


submitBTN.addEventListener('click', function() {
  const textInput = document.getElementById("text-input").value;
  const textClear = document.getElementById("text-input").value = "";
  let div = document.createElement('div');
  div.setAttribute('class', 'div');  
  let list = document.createElement('li');
  let item = document.createTextNode(textInput);
  const delButton = document.createElement('button');
  delButton.textContent = 'Delete';
  delButton.setAttribute('class', 'btn');  
  div.appendChild(list);
  list.appendChild(item);
  div.appendChild(delButton);
  document.getElementById('append-text').appendChild(div);
  delButton.addEventListener('click', function(){
    textAppend.removeChild(div);
  })
})

clearBTN.addEventListener('click', function(){
  textAppend.innerHTML = "";
})

