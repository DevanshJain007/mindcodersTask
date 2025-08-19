import React, { useState, useEffect } from 'react'

const QuizDashboard = () => {
  const questions = [
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], answer: "Au" },
    { question: "Which river is considered the holiest in India?", options: ["Yamuna", "Ganga", "Brahmaputra", "Narmada"], answer: "Ganga" },
    { question: "Who was the first Prime Minister of India?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad"], answer: "Jawaharlal Nehru" },
    { question: "Which is the largest state in India by area?", options: ["Maharashtra", "Rajasthan", "Madhya Pradesh", "Uttar Pradesh"], answer: "Rajasthan" },
    { question: "What is the name of India's national song?", options: ["Jana Gana Mana", "Vande Mataram", "Saare Jahan Se Achha", "Ae Mere Watan Ke Logon"], answer: "Vande Mataram" }
  ]

  const [isStartQuiz, setIsStartQuiz] = useState(false)
  const [timer, setTimer] = useState(10)
  const [quizOver, setQuizOver] = useState(false)
  const [score,setScore]=useState(0);
//   const handleScore=()=>{
//     if(option===questions.answer){
//         setScore(prev=>prev+1);
//     }
//   }
  
  useEffect(() => {
    let interval

    if (isStartQuiz && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1)
      }, 1000)
    }

    if (timer === 0 && isStartQuiz) {
      setQuizOver(true)
      setIsStartQuiz(false) 
    }

    return () => clearInterval(interval)
  }, [isStartQuiz, timer])

  const startQuiz = () => {
    setIsStartQuiz(true)
    setQuizOver(false)
    setTimer(10)
  }

  return (
    <>
      <h2>Welcome to the Quiz</h2>

      {!isStartQuiz && !quizOver && (
        <div>
          <h3>To start the Quiz click the button</h3>
          <button type="button" onClick={startQuiz}>Start the Quiz</button>
        </div>
      )}

      {isStartQuiz && !quizOver && (
        <div>
          <h3>Time left: {timer} seconds</h3>
          {questions.map((que, index) => (
            <div key={index}>
              <p>{index + 1}. {que.question}</p>
              {que.options.map((opt, ind) => (
                <button key={ind}>
                  {opt}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}

      {quizOver && (
        <div>
          <h2>Quiz Ended Successfully </h2>
          <h2>Your Score</h2>
        </div>
      )}
    </>
  )
}

export default QuizDashboard
