import React,{useContext} from 'react'
import { QuizContext } from '../helpers/Context'
import "../App.css"

export const MainMenu = () => {
  const {gameState,setGameState} = useContext(QuizContext)
  return (
    <div className='menu'>
      <button onClick={() => {setGameState("quiz")}}>Start Quiz</button>
    </div>
  )
}
