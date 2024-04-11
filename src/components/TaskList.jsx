import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const CourseGoalList = props => {
  return (
    <ul className="task-list">
      {props.items.map(goal => (
        <TaskItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </TaskItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
