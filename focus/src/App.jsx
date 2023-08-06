/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect } from 'react'

import Canvas from './visualizer/canvas'
import './App.css'

function App() {
  const [start, setStart] = useState(true)

  useEffect(() => {
    const webgazer = window.webgazer
    webgazer.showVideo(false)
    webgazer.setGazeListener((data,clock) => {
      if (start) {
        console.log("started");
        setStart(false);
      }
      console.log(data,clock)
      if (data != null) {
        if(data.x < window.innerWidth * 0.25 || data.x > window.innerWidth * 0.75 || data.y < window.innerHeight * 0.25 || data.y > window.innerHeight * 0.75)  alert("Focus your eyes on the center of the screen")
      }
    }).begin()
  },[])

  
  return (
    <div>
     <Canvas />
    </div>
  )
}

export default App
