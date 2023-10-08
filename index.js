// This array howls on all the words and its meaning
const words = [ {word: "Aberration", meaning: "A deivation from the norm"}, 
    {word: "Capitulate", meaning: "To surrender"}, 
    {word: "Abate", meaning: "to decrease in force or intensity"}, 
    {word: "Beliligerent", meaning: "inclined to live in a state of hostility or war"}, 
    {word: "Cacophony", meaning: "harsh or discordant sound"}, 
    {word: "Enervate", meaning: "to reduce the mental or moral vigor of"}, 
    {word: "Facetrious", meaning: "joking or jesting, often inappropriately"}, 
    {word: "Garrulous", meaning: "given to excessive and often trivial or rambling talk"}, 
    {word: "Hapless", meaning: "having no luck"},
    {word: "Defenestration", meaning: "the act of throwing someone or something out the window"}];

    // Function to display words and meaning in the table
    function displayWords() { // Declares function 'displayWords'
        const tableBody = document.getElementById('wordsTable'); // Gets the ID 'wordsTable' and stores it to 'tableBody'
        tableBody.innerHTML =''; // Clear current rows when adding new rows. 
        words.forEach(wordObject => { //Loops over each word-meaning combination in the array 'words'
            const row = tableBody.insertRow(); // Inserts a new row at the end of the table
            const cell1 = row.insertCell(0); // Inserts cell for word and gives position
            const cell2 = row.insertCell(1); // Inserts cell for meaning and gives position
            cell2.classList.add('hidden-meaning');
            cell1.textContent = wordObject.word; // Inputs the word for first cell
            cell2.textContent = wordObject.meaning; // Inputs the meaning for second cell
        });
    }

    // Attaches an event listener to hand form submission
    document.getElementById('addWordForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents page from reloading after submission
        const word = document.getElementById('wordInput').value; // Stores value from'wordInput' and stores it in 'word'
        const meaning = document.getElementById('meaningInput').value // Stores value of for 'meaningInput' and stores it in 'meaning'
        words.push({word: word, meaning: meaning}); // pushes new object to 'words' array
        displayWords(); // Shows updated table of words
        document.getElementById('wordInput').value = '';
        document.getElementById('meaningInput').value = '';
        });

displayWords(); // Displays initial set of words when page loads