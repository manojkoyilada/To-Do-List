import React, {useState} from 'react';
import Button from './Button'
import './TaskInput.css'

const TaskInput = ({onAddTask}) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const taskInputHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
    }
    onAddTask(enteredValue);
    console.log(enteredValue)
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`task-form ${!isValid && 'invalid'}`}>
        <label>TO DO LIST:</label>
        <input type="text" onChange={taskInputHandler} value={enteredValue} />
        {!isValid && <p style={{color:'red', fontSize:16}}> * Please enter a task...</p>}
        <Button type='submit'>Add Task</Button>
      </div>
    </form>
  )
}

export default TaskInput