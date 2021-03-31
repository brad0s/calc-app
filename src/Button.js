import React from "react"
import "./Button.scss"

function Button(props) {

  return (
    <div className={`Button ${props.styleName}`} onClick={props.handleClick}>
      {props.character}
    </div>
  )
}

export default Button