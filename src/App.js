import { useState } from "react";
import "./App.css";
import Form from './Form';

function App() {
  const [firstName,setFirstName]=useState('')
  const [month,setMonth]=useState('')
  const [year,setYear]=useState('')
  const [cvvNum,setCvvNum]=useState('')
  const [cardNumber, setCardNumber]=useState('')
  // const  [inputValue, setInputValue] =  useState('');
	// const  handleChange = (event) => {
	// 	setInputValue(event.target.value);
	// };

  return (
    <div className="contenar">
      <div className="cardes">
        <div className="card1">
          <div className="allcardes">
            <div className="sercal1"></div>
            <div className="sercal2"></div>
          </div>
          <div className="cardnumber">{cardNumber ? cardNumber : "0000 0000 0000 0000"}</div>
          <div className="nameanddate">
            <div className="cardholdername">{!firstName ? "Aditya Kumar" : firstName }</div>
            <div className="date">{!month ? "00/00" : month}{year && "/" + year} </div>
          </div>
        </div>
        <div className="card2">
          <div className="blackborder"></div>
          <div className="cvvborder">
            <div className="cvv">
              <p>{cvvNum ? cvvNum : "000"}</p>
            </div>
          </div>
          <div className="linestyle">
            <div className="firstrow">
              <p id="row1"></p>
              <p id="row2"></p>
              <p id="row3"></p>
              <p id="row4"></p>
            </div>
            <div className="secondrow">
              <p id="row5"></p>
              <p id="row6"></p>
              <p id="row7"></p>
              <p id="row8"></p>
            </div>
            <div className="thirdrow">
              <p id="row9"></p>
              <p id="row10"></p>
              <p id="row11"></p>
              <p id="row12"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="formes">
        <Form firstName={firstName} setFirstName={setFirstName} setMonth={setMonth} setCvvNum={setCvvNum} cvvNum={cvvNum} setCardNumber={setCardNumber} cardNumber={cardNumber} setYear={setYear}/>
       {/* <div className="allform">
       <form>
        <label>
        CARDHOLDER NAME 
        </label><br />
        <input type="text" value={inputValue} onChange={handleChange} /><br />
        <b>Cardholder name required</b>
        <label><br />
        CARD NUMBER
        </label><br />
        <input type="number"  />
        <label><br />
        EXP.DATE (MM/YY)
        </label><br />
        <input type="number"  />
        <input type="number"  />
        <label><br />
        CVC
        </label><br />
        <input type="number"  />
      </form>
       </div> */}
      </div>
    </div>
  );
}

export default App;
