import React from 'react';
import css from './images/css.webp';
import html from './images/html.webp';
import Reactimg from './images/Reactimg.png';
import js from './images/js.png';
import styles from './App4.css';



// function App4 (){
//   return (
//     <div className='center-main-content'>
//     <h3>Front End Technologies</h3>
//     <div className="img-holder">
//         <img src={css} />
//         <img src={html} />
//         <img src={js} />
//         <img src={Reactimg} />
//     </div>
//     </div>
//   )
// }

function App4 (){
  return (
    <>
     <div className='login-form'>
      <h4>SUBSCRIBE</h4>
      <h6>Sign up with your email address to receive news and updates</h6>
      <div className='input-form-group'>
        <input typeof="text" placeholder="FirstName" />
        <input typeof="text" placeholder='LastName' />
        <input typeof='text' placeholder='Email' />
      </div>
      <button>Subscribe</button>
     </div>
    </>
  )
}
export default App4;