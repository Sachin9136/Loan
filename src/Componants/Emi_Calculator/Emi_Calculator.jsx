import React, { useState } from 'react';

function Emi_Calculator() {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(1);
  const [emi, setEmi] = useState('');

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const termMonths = parseFloat(loanTerm) * 12; // Loan term in months

    const emiValue = (principal * rate * Math.pow(1 + rate, termMonths)) / (Math.pow(1 + rate, termMonths) - 1);

    setEmi(emiValue.toFixed(2));
  };

  return (
    <div>
        <div className="row justify-content-center">
            <div className="col-lg-9 col-xl-8"> 
                <form className='d-flex justify-content-center' onSubmit={(e) => { e.preventDefault(); calculateEMI(); }}>
                    <div className="select-form">
                        <div className="select-itms">
                            <input type="number" id="loanAmount" placeholder='Loan Amount' onChange={(e) => setLoanAmount(e.target.value)} required/><br/><br/>
                        </div>
                    </div>
                    <div className="select-form">
                        <div className="select-itms">
                            <input type="number" id="interestRate" placeholder='Rate Of Interest' onChange={(e) => setInterestRate(e.target.value)} step="0.01" required/><br/><br/>
                        </div>
                    </div>
                    <div className="select-form">
                        <div className="select-itms">
                            <input type="number" id="loanTerm" placeholder='Loan Time'  onChange={(e) => setLoanTerm(e.target.value)} required/><br/><br/>
                        </div>
                    </div>
                    <div className="search-form calculate_emi">
                    <button type="submit">Calculate EMI</button>
                    </div>
                </form>
                <div className='text-center'>
                    {emi && <div className='text-white h4'>Your Monthly EMI: ₹ {emi}</div>}
                </div>
            </div>
        </div> 
        


      
    </div>
  );
}

export default Emi_Calculator;