import React from 'react';
import './Calculator.css';
import { useState } from 'react';

function Calculator() {
    const [bill, setBill] = useState(0)
    const [tip, setTip] = useState(0)
    const [split, setSplit] = useState(0)

    const tip_to_pay = bill * (tip/100)
    const bill_total = bill + tip_to_pay
    const person_total = bill_total / split
    const tip_per_person = (bill * tip_to_pay) / split


     return (
        <div className='container'>
            <form>
                <div className='billAmount'>Bill Amount:
                <input 
                type="number"
                value={bill}
                onChange={(e) => setBill(e.target.value )}
                />
                </div>

                <div className='tipPercent'>Tip Percent:
                <input 
                type="number"
                value={tip}
                onChange={(e) => setTip(e.target.value )}
                />
                </div>

                <div className='numPeople'>Number of People:
                <input 
                type="number"
                value={split}
                onChange={(e) => setSplit(e.target.value )}
                />
                </div>
            </form>
            
            <h2>Results:</h2>
            <h3>Bill Total: ${bill_total.toFixed(2)}</h3>
            <h3>Tip Amount: ${tip_to_pay.toFixed(2)}</h3>
            <h3>Tip Per Person: ${tip_per_person.toFixed(2)}</h3>
            <h3>Bill Total Per Person: ${person_total.toFixed(2)}</h3>
       </div>
       
     )
   }

export default Calculator

// inputs for:
// bill, tip %, split

// display:
// tip amount, the bill total, per person amount