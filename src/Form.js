import React, { useState } from "react";
import  "./form.css";
function Form({firstName,setFirstName, setMonth, setCvvNum, cvvNum, setCardNumber , cardNumber, setYear}){
    const [error,setError]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(firstName.length==0||cardNumber.length==0||cvvNum.length==0){
            setError(true)
        }
        if(firstName&&cardNumber&&cvvNum)
        {
        console.log("First Name: ",firstName,"\nLast Name: ",cardNumber)
        }
    }
    return(
        <>
           <form onSubmit={handleSubmit}>
               <div className="cardholder">
               <div>
                <div className="names">
                <label  htmlFor="">CARDHOLDER NAME</label>
                </div>
                   <input placeholder="e.g. Jane Appleseed" onChange={e=>setFirstName(e.target.value)} /> <br /> 
               </div>
               {error&&firstName.length<=0?
               <label id="error">First Name can't be Empty</label>:""} 
               </div>
               <div className="card-number">
               <div>
               <div className="names">
               <label htmlFor="">CARD NUMBER</label> 
               </div>
                   <input type="number" placeholder="e.g. 1234 5678 9123 0000"  onChange={e=>setCardNumber(e.target.value)} />
                   
               </div>
               {error&&cardNumber.length <= 0?
               <label id="error">Last Name can't be Empty</label>:""}
               <div>
               </div>
               </div>

              <div className="alldate-cvv">
              <div className="date-cvv">
               <div id="space">
                <div className="names">
                <label htmlFor="">EXP.DATE (MM/YY)</label>
                </div>
                   <input id="dateid" placeholder="MM" type="number" onChange={e=>setMonth(e.target.value)} />
                   <input id="datemm" placeholder="YY" type="number" onChange={e=>setYear(e.target.value)} />
                   
               </div>
               {/* {error&&cardNumber.length<=0?
               <label id="error">Last Name can't be Empty</label>:""} */}
               <div>
               </div>
               </div>
               <div className="date-cvv">
               <div>
               <div className="names">
               <label htmlFor="">CVC</label> 
               </div>
                   <input id="datCVC" placeholder="e.g. 123" type="number" onChange={e=>setCvvNum(e.target.value)} />
                   
               </div>
               {error&&cvvNum.length<=0?
               <label id="error">CVC must be numeric</label>:""}
               <div>
               </div>
               </div>
              </div>
               <div className="subbtn">
                   <button id="submit">
                   Confirm
                   </button>
                   </div>
           </form>
        </>
    );
}
export default Form;