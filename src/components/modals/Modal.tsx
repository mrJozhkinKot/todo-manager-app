import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ProjectInterface } from '../../utils/interfaces';
import { ManagerActionType } from '../../utils/reducerTypes';

interface ModalProps {
 modal: {
  text: string;
  buttonValue: string;
 };
 project?: ProjectInterface;
 onCreate: (valueTitle: string, valueDescription: string) => void;
}

const Modal: React.FC<ModalProps> = ({ modal, project, onCreate }) => {
 const dispatch = useDispatch();
 const [valueTitle, setValueTitle] = useState<string>(project?.title || '');
 const [valueDescription, setValueDescription] = useState<string>(project?.description || '');

 const closeModal = () => {
  dispatch({
   type: ManagerActionType.TOGGLE_IS_MODAL,
   payload: false,
  });
  dispatch({
   type: ManagerActionType.TOGGLE_IS_MODAL_EDIT,
   payload: false,
  });
 };

 return (
  <div className="modal">
   <div className="modal_content">
    <div>{modal.text}</div>
    <i className="fas fa-times modal_button-close" onClick={closeModal} />
    <form
     className="modal_form"
     onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onCreate(valueTitle, valueDescription);
      closeModal();
     }}
    >
     <label htmlFor="title">Title:</label>
     <input
      id="title"
      type="text"
      className="modal_input"
      value={valueTitle}
      onChange={(e: React.FormEvent<HTMLInputElement>) => setValueTitle(e.currentTarget.value)}
     />
     <label htmlFor="description">Description:</label>
     <textarea
      id="description"
      rows={3}
      value={valueDescription}
      className="modal_input"
      onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
       setValueDescription(e.currentTarget.value)
      }
     />
     <input
      type="submit"
      className="modal_button-create"
      value={modal.buttonValue}
      disabled={valueTitle ? false : true}
     />
    </form>
   </div>
  </div>
 );
};

export default Modal;
