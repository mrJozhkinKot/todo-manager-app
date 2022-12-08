import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ColumnInterface, TaskInterface } from '../../utils/interfaces';
import { ManagerActionType } from '../../utils/reducerTypes';
import moment from 'moment';
import SubtaskList from '../tasks/SubtaskList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import TaskInput from '../tasks/TaskInput';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import CommentList from '../tasks/CommentList';

interface ModalEditProps {
 task: TaskInterface;
 column: ColumnInterface;
 onSubmit: (taskChanged: TaskInterface) => void;
}

type priorities = string[];

const ModalEdit: React.FC<ModalEditProps> = ({ task, column, onSubmit }) => {
 const dispatch = useDispatch();
 const [valueTitle, setValueTitle] = useState<string>(task.title);
 const [valueDescription, setValueDescription] = useState<string>(task.description);
 const [valueSelect, setValueSelect] = useState<string>('');
 const [valueDate, setValueDate] = useState<string>('');
 const [isEdit, setIsEdit] = useState<boolean>(false);

 const { isCreateSubtask, isCreateComment } = useTypedSelector((state) => state.manager);
 const { id } = useParams();

 const priorities: priorities = ['high', 'middle', 'low'];
 const buttonCreateSubtask = 'Create subtask';
 const buttonCreateComment = 'Add comment';

 const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setValueSelect(e.currentTarget.value);
 };

 const calculateTimeInProcess = () => {
  const start = moment(task.dateCreate, 'LLL');
  const now = moment();
  const diffInDays = now.diff(start, 'minutes');
  return `${diffInDays} minutes`;
 };

 const openInputForCreateSubtask = () => {
  dispatch({ type: ManagerActionType.TOGGLE_IS_CREATE_SUBTASK, payload: true });
 };

 const openInputForCreateComment = () => {
  dispatch({ type: ManagerActionType.TOGGLE_IS_CREATE_COMMENT, payload: true });
 };

 const closeModal = () => {
  dispatch({
   type: ManagerActionType.TOGGLE_IS_MODAL_EDIT,
   payload: false,
  });
 };

 const addNewSubtask = (title: string) => {
  dispatch({
   type: ManagerActionType.ADD_NEW_SUBTASK,
   payload: {
    subtask: {
     id: uuidv4(),
     title: title,
     isDone: false,
    },
    projectID: id,
    colID: column.id,
    taskID: task.id,
   },
  });
 };

 const addNewComment = (text: string) => {
  dispatch({
   type: ManagerActionType.ADD_NEW_COMMENT,
   payload: {
    comment: {
     id: uuidv4(),
     idParent: task.id,
     text: text,
     comments: [],
    },
    projectID: id,
    colID: column.id,
    taskID: task.id,
   },
  });
 };

 return (
  <div className="modal">
   <div className="modal-edit_content">
    <div className="modal-edit_title">
     {isEdit && (
      <input
       value={valueTitle}
       onChange={(e: React.FormEvent<HTMLInputElement>) => setValueTitle(e.currentTarget.value)}
      />
     )}
     {!isEdit && <p>{task.title}</p>}
     <i className="fas fa-pencil-alt modal-edit_button-edit" onClick={() => setIsEdit(true)}></i>
     <i
      className="fas fa-check"
      onClick={() => {
       setIsEdit(false);
       onSubmit({
        ...task,
        title: valueTitle,
        description: valueDescription,
        priority: valueSelect,
        timeDeadline: valueDate,
       });
      }}
     ></i>
    </div>
    <i className="fas fa-times modal_button-close" onClick={closeModal}></i>
    <p className="modal-edit_status">{task.status}</p>
    {isEdit && (
     <textarea
      rows={3}
      className="modal-edit_description"
      value={valueDescription}
      onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
       setValueDescription(e.currentTarget.value)
      }
     />
    )}
    {!isEdit && <p className="modal-edit_description">{task.description}</p>}
    <div className="modal-edit_additional-info">
     <div className="modal-edit_data-container">
      <p>create: {task.dateCreate}</p>
      <p>in the process:{calculateTimeInProcess()}</p>
     </div>
     <div className="modal-edit_priorities">
      <p>Priority</p>
      {isEdit && (
       <select defaultValue={task.priority} onChange={onSelectChange}>
        {priorities.map((val) => {
         return (
          <option key={val} value={val}>
           {val}
          </option>
         );
        })}
       </select>
      )}
      {!isEdit && (
       <p className={`${task.priority} modal-edit_priorities-options`}>{task.priority}</p>
      )}
     </div>
    </div>
    <SubtaskList task={task} column={column} />
    {isCreateSubtask && (
     <TaskInput
      onCreate={addNewSubtask}
      onButtonsAction={() => {
       dispatch({
        type: ManagerActionType.TOGGLE_IS_CREATE_SUBTASK,
        payload: false,
       });
      }}
     />
    )}
    <div className="modal-edit_date-deadline">
     <p>deadline:</p>
     {isEdit && (
      <input
       type="date"
       onChange={(e: React.FormEvent<HTMLInputElement>) => {
        setValueDate(e.currentTarget.value);
       }}
      />
     )}
     {!isEdit && <p className={task.timeDeadline}>{task.timeDeadline}</p>}
    </div>
    <CommentList task={task} column={column} />
    {isCreateComment && (
     <TaskInput
      onCreate={addNewComment}
      onButtonsAction={() => {
       dispatch({
        type: ManagerActionType.TOGGLE_IS_CREATE_COMMENT,
        payload: false,
       });
      }}
     />
    )}
    <div className="modal-edit_buttons">
     <label>
      <input type="file" className="modal-edit_file"></input>
      <span className="modal-edit_file-span">Choose File</span>
     </label>
     {!isCreateSubtask && !isCreateComment && (
      <div className="modal-edit_button" onClick={openInputForCreateSubtask}>
       {buttonCreateSubtask}
      </div>
     )}
     {!isCreateSubtask && !isCreateComment && (
      <div className="modal-edit_button" onClick={openInputForCreateComment}>
       {buttonCreateComment}
      </div>
     )}
     <div
      className="modal-edit_button-confirm"
      onClick={() => {
       closeModal();
       onSubmit({
        ...task,
        title: valueTitle,
        description: valueDescription,
        priority: valueSelect,
        timeDeadline: valueDate,
       });
      }}
     >
      OK
     </div>
    </div>
   </div>
  </div>
 );
};

export default ModalEdit;
