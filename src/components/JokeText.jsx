import { useState } from 'react'
import '../styles/JokeText.css'

function JokeText(props) {

  return (
    <div className = "JokeText">
    <b><p id="JokeText">{props.children}</p></b>
    </div>
  )
}

export default JokeText