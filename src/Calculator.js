import React, {useState} from "react"
import {evaluate, or} from "mathjs"
import Button from "./Button"
import "./Calculator.scss"

function Calculator() {

  const [equation, setEquation] = useState("")
  const [display, setDisplay] = useState("")

  function handleClick(event) {
    const {outerText} = event.target
    setEquation(equation + outerText)
    setDisplay(display + outerText)

    if (outerText === "/" || 
        outerText === "*" ||
        outerText === "-" || 
        outerText === "+" 
    ) {
      setDisplay("")
    }

    if (outerText === "=") {
      console.log(equation)
      console.log(evaluate(equation))
      setDisplay(evaluate(equation))
    }

    if (outerText === "C") {
      setEquation("")
      setDisplay("")
    }
  }

  return (
    <div className="Calculator">
    
      
      <div className="Buttons">
        <div className="item-display">{display}</div>
        <Button handleClick={handleClick} styleName="item-C" character="C" />
        <Button handleClick={handleClick} styleName="item-percent" character="%" />
        <Button handleClick={handleClick} styleName="item-divide" character="/" />
        <Button handleClick={handleClick} styleName="item-7" character="7" />
        <Button handleClick={handleClick} styleName="item-8" character="8" />
        <Button handleClick={handleClick} styleName="item-9" character="9" />
        <Button handleClick={handleClick} styleName="item-multiply" character="*" />
        <Button handleClick={handleClick} styleName="item-4" character="4" />
        <Button handleClick={handleClick} styleName="item-5" character="5" />
        <Button handleClick={handleClick} styleName="item-6" character="6" />
        <Button handleClick={handleClick} styleName="item-minus" character="-" />
        <Button handleClick={handleClick} styleName="item-1" character="1" />
        <Button handleClick={handleClick} styleName="item-2" character="2" />
        <Button handleClick={handleClick} styleName="item-3" character="3" />
        <Button handleClick={handleClick} styleName="item-add" character="+" />
        <Button handleClick={handleClick} styleName="item-0" character="0" /> 
        <Button handleClick={handleClick} styleName="item-equals" character="=" /> 
      </div>
    </div>
  )
}

export default Calculator