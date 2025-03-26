// DOM Elements
// Text elements
const quote = document.getElementById('quote-text');
const author = document.getElementById('quote-author');
const category = document.getElementById('quote-category');

// Buttons
const generateBtn = document.getElementById('generate-btn');


// List of quotes
const quotesList = new Array();
const categories = new Array();
const options = {
    method: 'GET',
    headers: { 'X-Api-Key': '4q2JsbVjEmY/kNRbQMxDKA==3kecJ356XaaYu9FL'},
    
}

// Fetch quotes from API
// Generate a new quote
async function getQuote() {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', options);   
        const result = await response.json();
        const data = await result[0];
        // store the quote in the array
        quotesList.push(data);
        // store the category in the array
        if (!categories.includes(data.category)){
            categories.push(data.category);
        }
        //update the UI with the new quote
        quote.innerHTML = data.quote;
        author.innerHTML = data.author
        category.innerHTML += data.category
        // tests loges
        console.log(data)
        console.log(result);
        console.log(categories)
        
        return data
    } catch (error) {
        console.log(error);
    }
    category.innerHTML =''
}


// add event listener to the generate button && genarete quote
generateBtn.addEventListener('click',()=>{
    getQuote()
} );

// copy quote to clipboard


// store the quotes and categories in the local storage


// toggle to dark mode 
const darkMode = document.getElementById('dark-mode');

function toggleDarkMode(){
   console.log('dark mode toggled');
    
    
}

// clean the quote



// generate a new quote when window is loaded
window.addEventListener("load", () => {
    console.log("page is fully loaded");
    getQuote();
  });