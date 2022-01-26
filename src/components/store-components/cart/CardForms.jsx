import React, { useState } from 'react';
import './css/CardForms.css'

const CardForms = ({ state, closeAlloverlay }) => {
  const [paymentState, setPaymentState] = useState(false)

  function pay() {
    return new Promise((resolve, reject) => {
      setPaymentState(true)
      const error = false
      if (!error) {
        resolve()
      } else {
        reject("Error: Something went wrong")
      }
    })
  }

  return (
    <div className={'card-forms' + " " + (!state ? "card-forms-hidden" : "card-forms-visible")}>
      <form action="">
        <div className='card-form' id='cardForm1'>
          <div>
            <p className='input-header'>Card number</p>
            <input type="text" name="card number" id="card_number" required />
            <label htmlFor="card_number"></label>
            <p className='input-header'>Cardholder's name</p>
            <input type="text" name="owner name" id="card_name" required />
            <label htmlFor="card_name"></label>
          </div>
          <div className='exp-date-input'>
            <p className='input-header'>Exp.Date</p>
            <input type="text" name="date" id="exp_date" placeholder='MM/YY' required pattern='\d{2}/\d{2}' />
            <label htmlFor="exp_date"></label>
          </div>
        </div>

        <div className='card-form' id='cardForm2'>
          <div className='card-mask'></div>
          <div className='cvc-code-input'>
            <p>cvc</p>
            <input type="text" name="back_card_code" id="cvc-code" placeholder='CVV' />
            <label htmlFor="cvc-code"></label>
          </div>
        </div>
        <button onClick={() => pay()} className='pay-btn' type="button">Pay</button>
      </form>
      <div>
        <h2 style={{ transition: ".4s", opacity: (!paymentState ? "0" : "1"), color: "#0F0" }}>Succsesfull Payment</h2>
      </div>
    </div>
  )
};

export default CardForms;
