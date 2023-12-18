import React,{useState, useContext} from 'react'
import { Questions } from '../helpers/QuestionBank'
import { QuizContext } from '../helpers/Context'
import "../App.css"

export const Quiz = () => {

  const {score, setScore , setGameState} = useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState("")

  const nextQuestion = () => {
    if(Questions[currQuestion].answer == optionChosen){
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  }

  const finnishQuiz = () => {
    if(Questions[currQuestion].answer == optionChosen){
      setScore(score + 1);
    }
    setGameState("endScreen")
  }

  return (
    <div className='quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button onClick={() => setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
        <button onClick={() => setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
        <button onClick={() => setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
      </div>

      {currQuestion == Questions.length - 1 ? (<button onClick={finnishQuiz}>Finnish Quiz</button>) 
      : (<button onClick={nextQuestion}>Next Question</button>)}
      
    </div>
  )
}
