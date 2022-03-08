//get submitBTN and change it into a JS var
const submitBTN = document.getElementById("submit");
const clearBTN = document.getElementById("clear-list");
const textAppend = document.getElementById("append-text");

//create variable for the text input to add to append-text
//create function which onclick of submit button
//will allow us to append our value of textInput
//to the div append-text in a li format
submitBTN.addEventListener('click', function() {
  const textInput = document.getElementById("text-input").value;
  let list = document.createElement('li');
  let item = document.createTextNode(textInput);
  const delButton = document.createElement('button');
  list.appendChild(item);
  list.appendChild(delButton);
  document.getElementById('append-text').appendChild(list);
  delButton.addEventListener('click', function(){
    const listDel = document.querySelectorAll('li');
    list.innerHTML = '';
  })
})

clearBTN.addEventListener('click', function(){
  textAppend.innerHTML = "";
})

