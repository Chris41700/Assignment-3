//Christopher Hui
//TTP Assignment-3
//Select the section with an id of container without using querySelector.
const containers = document.getElementById('container');
console.log(containers);

//Select the section with an id of container using querySelector
const queryContainer = document.querySelector('section');
console.log(queryContainer);

//Select all of the list items with a class of "second
const second = document.getElementsByClassName('second');
console.log(second);

//Select a list item with a class of third, but only the list item inside of the ol tag.
const olThird = document.querySelector('ol li.third');
console.log(olThird);

//Give the section with an id of container the text "Hello!".
containers.append('Hello!');
console.log(containers);

//Add the class main to the div with a class of footer.
const feet = document.querySelector('.footer');
feet.classList += " main";

//Remove the class main on the div with a class of footer.
feet.classList.remove('footer');

//Create a new li element.
const newListItem = document.createElement('li');

//Give the li the text "four".
newListItem.textContent = 'four';
console.log(newListItem);

//Append the li to the ul element.
const unorderedList = document.querySelector('section ul');
unorderedList.append(newListItem);

//Loop over all of the lis inside the ol tag and give them a background color of "green".
const green = document.querySelectorAll('ol li');

for (let i = 0; i < green.length; i++)
    green[i].style.backgroundColor = "green";

//Remove the div with a class of footer.
feet.remove();