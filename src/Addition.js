import React, {useState} from 'react'
import Box from '@material-ui/core/box';
import numberLineAddition from './images/numberLineAddition.gif'
export default function Addition() {
    const numberOne = 2;
    const numberTwo = 2;
    const answer = numberOne+numberTwo;
    const [userAnswer, setUserAnswer] = useState();
    const [correct, setCorrect] = useState(0);
    const additionColors = {
        color: '#C92B7B'
    }
    const additionStyle = {
        width: '90%'
    }
    const boxStyle = {
      padding: "10px",
      fontSize: "20px",
      marginRight:"150px",
      textAlign: "center",
      cursor: "pointer"
    }
    const handleChange = ((e) => {
      setUserAnswer(e.currentTarget.Value)
    })
    const handleSubmit = (e) => {
      var userAnswerComp = parseInt(userAnswer)
      console.log(userAnswer)
      console.log(userAnswerComp)
      e.preventDefault();
      if(userAnswer === "")
      {
        setCorrect(-2);
      }
      else if(answer === userAnswerComp)
      {
        setCorrect(1); 
      }
      else
      {
        setCorrect(-1);
      }
      setUserAnswer("");
    }
  return (
    <div style = {additionColors}>
      <h3>Example: -3 + 7 = 4</h3>
      <img style = {additionStyle} src = {numberLineAddition}/>
      <h4>{numberOne} + {numberTwo} = </h4> <input value = {userAnswer} type = "text" onChange = {handleChange}/> 
      <Box
        style = {boxStyle}
        color = "black" 
        bgcolor = "gray"
        onClick={handleSubmit}> 
        Submit 
      </Box>
      {correct === -1 && 'incorrect'}
      {correct === -2 && 'please put a valid answer'}
      {correct === 1 && 'correct'}
    </div>
  )
}
