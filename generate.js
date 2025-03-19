// DOM Elements/
const quote = document.getElementById('quote-text');
const author = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');


// List of quotes
const quotesList = new Array();
const options = {
    method: 'GET',
    headers: { 'X-Api-Key': '4q2JsbVjEmY/kNRbQMxDKA==3kecJ356XaaYu9FL'},

}

// Generate a new quote
async function getQuote() {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', options);   
        const result = await response.json();
        const data = await result[0];
        // store the quote in the array
        quotesList.push(data);
        
        // add quote to the local storage
        // if the array is full, remove the oldest quote
        if (quotesList.length > 50) {
            quotesList.shift();
        }
        localStorage.setItem('quote', );

        //update the UI with the new quote
        quote.innerHTML = data.quote;
        author.innerHTML = data.author
        
        // tests loges
        console.log(data)
        console.log(result);
        
        return data
    } catch (error) {
        console.log(error);
    }
}
// add event listener to the generate button
generateBtn.addEventListener('click', getQuote());