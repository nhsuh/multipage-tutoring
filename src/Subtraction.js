import React, {useState} from 'react'
import Navbar from './Navbar'
import Box from '@material-ui/core/box';
import numberLineAddition from './images/numberLineAddition.gif'
var numberOne;
var numberTwo;
refreshNumbers();
function refreshNumbers()
{
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  var random1 = Math.floor(Math.random()*10)*plusOrMinus
  var random2 = Math.floor(Math.random()*10)*plusOrMinus
  numberOne = random1;
  numberTwo = random2;
}
export default function Subtraction() {
  const answer = numberOne-numberTwo;
  const [userAnswer, setUserAnswer] = useState();
  const [correct, setCorrect] = useState(0);
  const additionColors = {
      color: '#C92B7B'
  }
  const additionStyle = {
      width: '90%'
  }
  const boxStyle = {
    padding: "1px",
    fontSize: "20px",
    marginRight:"315px",
    textAlign: "center",
    cursor: "pointer"
  }
  const handleChange = ((e) => {
    setUserAnswer(e.target.value)
  })
  const handleSubmit = (e) => {
    const userAnswerComp = parseInt(userAnswer) //parseInt Nan
    console.log(userAnswer)
    console.log(userAnswerComp)
    //e.preventDefault();
    if(userAnswer === "")
    {
      setCorrect(-2);
    }
    else if(answer === userAnswerComp)
    {
      setCorrect(1); 
      refreshNumbers();
    }
    else
    {
      setCorrect(-1);
    }
    setUserAnswer("");
  }
return (

  <div style = {additionColors}>
    <Navbar correctness = {correct}/>
    <h3>Example: -3 + 7 = 4</h3>
    <img style = {additionStyle} src = {numberLineAddition}/>
    <h4>{numberOne} - {numberTwo} = </h4> <input value = {userAnswer} type = "text" onChange = {handleChange}/> 
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
