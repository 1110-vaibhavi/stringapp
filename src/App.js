import React, { useState } from 'react';
const App = () => {
 const [message, setMessage] = useState('');
 const handleMessageChange = (event) => {
   setMessage(event.target.value);
   console.log(event.target.value);
 };
  const handleLowercase = () => {
    setMessage(message.toLowerCase());
  };
  const handleUppercase = () => {
    setMessage(message.toUpperCase());
  };
  const clearText = () => {
  setMessage("");
};
const countVowels = () => {
  const count = (message.match(/[aeiou]/gi) || []).length;
  alert("Vowels: " + count);
};
const countConsonants = () => {
  const count = (message.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
  alert("Consonants: " + count);
};
 return (
   <div className='app-container'>
    <h1 ><label htmlFor="message">My Textarea</label></h1>
     <br></br>
     <textarea
       id="message"
       name="message"
       value={message}
       onChange={handleMessageChange}
       rows="25" cols="100"
     />
     <hr />
     <button className='btn btn-secondary m-2' disabled={!message}>Submit</button>
     <button className="btn btn-success m-2" onClick={handleLowercase}>
        lowercase
      </button>
      <button className="btn btn-primary m-2" onClick={handleUppercase}>
        UPPERCASE
      </button>
      <button className='btn btn-warning m-2' onClick={clearText}>
        Clear text
      </button>
      <button className='btn btn-dark m-2' onClick={countVowels}>
        Vowels
      </button>
      <button className='btn btn-danger m-2' onClick={countConsonants}>
        Consonants
      </button>
     <p>curent value : {message}</p>
   </div>
 );
};
export default App;