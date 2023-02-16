import React from 'react';
import './Calculator.css';
import { useState } from 'react';

function Calculator() {
    const [bill, setBill] = useState('')
    const [people, setPeople] = useState('')
    const [billTip, setBillTip] = useState('')
   
     return (
       <form>
         <input 
           type="number"
           value={bill}
           onChange={(e) => setBill(e.target.value )}
         />
   
         <input 
           type="number"
           value={people}
           onChange={(e) => setPeople(e.target.value )}
         />

         <input 
           type="number"
           value={billTip}
           onChange={(e) => setBillTip(e.target.value )}
         />
       </form>
     )
   }

export default Calculator