import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ColumnInterface, SubtaskInterface, TaskInterface } from '../../utils/interfaces';
import { ManagerActionType } from '../../utils/reducerTypes';

interface SubtaskProps {
 subtask: SubtaskInterface;
 task: TaskInterface;
 column: ColumnInterface;
}
const Subtask: React.FC<SubtaskProps> = ({ subtask, task, column }) => {
 const { id } = useParams();
 const dispatch = useDispatch();

 const deleteSubtask = () => {
  dispatch({
   type: ManagerActionType.DELETE_SUBTASK,
   payload: {
    subtaskID: subtask.id,
    taskID: task.id,
    colID: column.id,
    projectID: id,
   },
  });
 };
 return (
  <div className="modal-edit_subtasks-subtask">
   <div className="modal-edit_subtasks-subtask_content">
    <input
     type="checkbox"
     checked={subtask.isDone}
     onChange={() => {
      dispatch({
       type: ManagerActionType.EDIT_SUBTASK,
       payload: {
        subtask: { ...subtask, title: subtask.title, isDone: !subtask.isDone },
        projectID: id,
        colID: column.id,
        taskID: task.id,
        subtaskID: subtask.id,
       },
      });
     }}
    />
    <p
     className={
      subtask.isDone ? 'modal-edit_subtasks-subtask__cross' : 'modal-edit_subtasks-subtask'
     }
    >
     {subtask.title}
    </p>
   </div>
   <div className="modal-edit_subtasks-subtask_button">
    <i className="fas fa-times" onClick={deleteSubtask}></i>
   </div>
  </div>
 );
};

export default Subtask;
