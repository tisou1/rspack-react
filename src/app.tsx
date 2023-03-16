import React from "react"
import { answer } from "./answer"
// import style from './index.module.css'
import rspackImg from "./assets/rspack.png"
import "./index.scss"

import useKeyPress from "./hooks/useKeyPress"

const App = () => {
  const name: string = "rspack"

  useKeyPress({
    c: () => console.log("按下了c......"),
  })
  return (
    <div className="main">
      <p>
        {" "}
        the answer to the universe is {answer}, {name}
      </p>
      <img src={rspackImg} width={200} height={200} />
    </div>
  )
}

export default App
