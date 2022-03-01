//get submitBTN and change it into a JS var
const submitBTN = document.getElementById("submit");
//create variable for the text input to add to append-text
const textInput = document.getElementById("text-input").value;
//create function which onclick of submit button
//will allow us to append our value of textInput
//to the div append-text in a li format
submitBTN.addEventListener('click', function appendFunction() {
   let list = document.createElement('li');
   document.getElementById('append-text').appendChild(list);
})