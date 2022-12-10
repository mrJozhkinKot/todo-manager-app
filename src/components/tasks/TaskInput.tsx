import React, { useState } from 'react';

interface TaskInputInterface {
 onCreate: (title: string) => void;
 onButtonsAction: () => void;
}
const TaskInput: React.FC<TaskInputInterface> = ({ onCreate, onButtonsAction }) => {
 const [value, setValue] = useState<string>('');

 return (
  <div className="modal-edit_subtasks-input">
   <input
    type="text"
    value={value}
    autoFocus
    onChange={(e: React.FormEvent<HTMLInputElement>) => {
     setValue(e.currentTarget.value);
    }}
   />
   <div>
    <i
     className="fas fa-check"
     onClick={() => {
      onCreate(value);
      onButtonsAction();
     }}
    ></i>
    <i className="fas fa-times" onClick={onButtonsAction}></i>
   </div>
  </div>
 );
};

export default TaskInput;
