import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TaskInterface } from '../../utils/interfaces';
import { ManagerActionType } from '../../utils/reducerTypes';
import moment from 'moment';

interface ModalEditProps {
 task: TaskInterface;
 onSubmit: (taskChanged: TaskInterface) => void;
}

type priorities = string[];

const ModalEdit: React.FC<ModalEditProps> = ({ task, onSubmit }) => {
 const dispatch = useDispatch();
 const [valueTitle, setValueTitle] = useState<string>(task.title);
 const [valueDescription, setValueDescription] = useState<string>(task.description);
 const [valueSelect, setValueSelect] = useState<string>('');
 const [isEdit, setIsEdit] = useState<boolean>(false);

 const priorities: priorities = ['high', 'middle', 'low'];

 const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setValueSelect(e.currentTarget.value);
 };

 const calculateTimeInProcess = () => {
  const start = moment(task.dateCreate, 'LLL');
  const now = moment();
  const diffInDays = now.diff(start, 'minutes');
  return `${diffInDays} minutes`;
 };

 const closeModal = () => {
  dispatch({
   type: ManagerActionType.TOGGLE_IS_MODAL_EDIT,
   payload: false,
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
    <div className="modal-edit_buttons">
     <label>
      <input type="file" className="modal-edit_file"></input>
      <span className="modal-edit_file-span">Choose File</span>
     </label>
     <div
      className="modal-edit_button-confirm"
      onClick={() => {
       closeModal();
       onSubmit({
        ...task,
        title: valueTitle,
        description: valueDescription,
        priority: valueSelect,
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
