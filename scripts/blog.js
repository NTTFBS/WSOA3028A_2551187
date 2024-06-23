import { initialise } from "./menu.js";
initialise("Blog");

document.querySelector('.read-more').addEventListener('mouseover', function() {
    console.log('Mouse is over the button');
   
});