//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from  'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props) {
    return (
        <div className="bigCounter">
        <div className="calendar">
        <i className="far fa-clock"></i>
        </div>
       <div className="four">{props.forthDigit%10}</div>
       <div className="three">{props.thirdDigit%10}</div>
       <div className="two">{props.secondDigit%10}</div>
       <div className="one">{props.firstDigit%10}</div>
        </div>
       
    );
};
SimpleCounter.propTypes = {
    firstDigit:PropTypes.number,
    secondDigit:PropTypes.number,
    thirdDigit:PropTypes.number,
    forthDigit:PropTypes.number
}
let counter = 0;

setInterval(function () {
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    counter++;
    //render your react application
ReactDOM.render(<SimpleCounter firstDigit={one} secondDigit={two} thirdDigit={three} forthDigit={four}/>, document.querySelector("#app"));
},1000)


