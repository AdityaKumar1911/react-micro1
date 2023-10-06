import React, { useState } from "react";
import  "./form.css";
function Form(){
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [cvvNum,setCvvNum]=useState('')
    const [error,setError]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(firstName.length==0||lastName.length==0||cvvNum.length==0){
            setError(true)
        }
        if(firstName&&lastName&&cvvNum)
        {
        console.log("First Name: ",firstName,"\nLast Name: ",lastName)
        }
    }
    return(
        <>
           <form onSubmit={handleSubmit}>
               <div className="cardholder">
               <div>
                <label htmlFor="">CARDHOLDER NAME</label><br />
                   <input placeholder="e.g. Jane Appleseed" onChange={e=>setFirstName(e.target.value)} /> <br /> 
               </div>
               {error&&firstName.length<=0?
               <label id="error">First Name can't be Empty</label>:""} 
               </div>
               <div className="card-number">
               <div>
               <label htmlFor="">CARD NUMBER</label> <br />
                   <input placeholder="e.g. 1234 5678 9123 0000" type="number" onChange={e=>setLastName(e.target.value)} />
                   
               </div>
               {error&&lastName.length<=0?
               <label id="error">Last Name can't be Empty</label>:""}
               <div>
               </div>
               </div>

              <div className="alldate-cvv">
              <div className="date-cvv">
               <div id="space">
               <label htmlFor="">EXP.DATE (MM/YY)</label> <br />
                   <input id="dateid" placeholder="MM" type="number" onChange={e=>setLastName(e.target.value)} />
                   <input id="datemm" placeholder="MM" type="number" onChange={e=>setLastName(e.target.value)} />
                   
               </div>
               {/* {error&&lastName.length<=0?
               <label id="error">Last Name can't be Empty</label>:""} */}
               <div>
               </div>
               </div>
               <div className="date-cvv">
               <div>
               <label htmlFor="">CVC</label> <br />
                   <input id="datCVC" placeholder="MM" type="number" onChange={e=>setCvvNum(e.target.value)} />
                   
               </div>
               {error&&cvvNum.length<=0?
               <label id="error">CVC must be numeric</label>:""}
               <div>
               </div>
               </div>
              </div>
               <div className="subbtn">
                   <button id="submit">
                       Submit
                   </button>
                   </div>
           </form>
        </>
    );
}
export default Form;