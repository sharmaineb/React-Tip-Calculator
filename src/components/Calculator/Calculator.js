import React from 'react';
import './Calculator.css';
import { useState } from 'react';

function Calculator() {
    const [bill, setBill] = useState('')
    const [tipPercent, setTipPercent] = useState('')
    const [split, setSplit] = useState('')

     return (
       <form>
         <input 
           type="number"
           value={bill}
           onChange={(e) => setBill(e.target.value )}
         />
   
         <input 
           type="number"
           value={tipPercent}
           onChange={(e) => setTipPercent(e.target.value )}
         />

         <input 
           type="number"
           value={split}
           onChange={(e) => setSplit(e.target.value )}
         />
       </form>
     )
   }

export default Calculator

// inputs for:
// bill, tip %, split

// display:
// tip amount, the bill total, per person amount