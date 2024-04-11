import React, { useState } from "react";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  const [taskItems, setTaskItems] = useState([
    {text: 'Sample Task', id: 'g1'},
    {text: 'Click on the tasks to mark them completed!', id: 'g2'}
  ]);

  const addTaskHandler = enteredText => {
    setTaskItems(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({text: enteredText, id: Math.random().toString()});
      return updatedTasks;
    });
  };

  const deleteItemHandler = taskId => {
    setTaskItems(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== taskId);
      return updatedTasks;
    });
  };

  let context = (<p style={{textAlign:'center'}}>No tasks found. May be add one?</p>);

  if (taskItems.length > 0) {
    context = (
      <TaskList items={taskItems} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="task-form-data">
        <TaskInput onAddTask={addTaskHandler} />
      </section>
      <section id="tasks">
        {context}
      </section>
    </div>
  );
};

export default App;
