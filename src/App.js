import { useState } from "react";
import "./App.css";
import Form from './Form';

function App() {
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
          <div className="cardnumber">0000 0000 0000 0000</div>
          <div className="nameanddate">
            <div className="cardholdername">Aditya Kumar </div>
            <div className="date">00/00</div>
          </div>
        </div>
        <div className="card2">
          <div className="blackborder"></div>
          <div className="cvvborder">
            <div className="cvv">
              <p>000</p>
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
        <Form/>
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
