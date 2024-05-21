import React , { useState } from "react";
import './bmi.css'
export const BmiCalc = () =>{
    const [height, setHeight] = useState('');
    const [weight, setWSeight] = useState('');
    const [bmiValue, setBmiValue] = useState('');
    const [bmiMsg, setBmiMsg] = useState('');

    const CalculateBmi = () => {
        if(height && weight ) {
            const heightInM = height /100;
            const bmi = (weight/(heightInM*heightInM));
            setBmiValue(parseFloat(bmi.toFixed(3)));
            let msg = '';
            if (bmi< 18.5){
                msg = "You are underweight";
            }else if(bmi >= 18.5 && bmi <25){
                msg = "You are normal Weight";
            }else if (bmi >=25 && bmi<30){
                msg = "You are overweight";
            }else{
                msg = "You are obese.";
            }
            setBmiMsg(msg);
        }else{
            setBmiMsg('');
            setBmiValue('');
        }
    };
    return(
        <div className="container">
            <h1>BMI CALCULATOR</h1>
            <div className="input-container">
                <label htmlFor="height">Enetr Your Height in CM</label>
                <input type="number" id="height" value={height} onChange={(e) =>setHeight(e.target.value)} />
            </div>
            <div className="input-conatiner">
                <label htmlFor="weight">Enetr Your Weight in Kg</label>
                <input type="number" id="weight" value={weight} onChange={(e) =>setWSeight(e.target.value)} />
            </div>
            <button className="calculate-btn" onClick={CalculateBmi}>Click To Calculate BMI</button>
            <div className="result">
            <p>Your BMI: <span className="bmi-value">{bmiValue}</span></p>
            <p>Result: <span className="bmi-message">{bmiMsg}</span></p>
            </div>
        </div>
    );

}