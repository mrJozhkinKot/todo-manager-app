import React from 'react';
import { useDispatch } from 'react-redux';
import { ManagerActionType } from '../../utils/reducerTypes';

interface ModalProps {
 modal: {
  text: string;
 };
}

const Modal: React.FC<ModalProps> = ({ modal }) => {
 const dispatch = useDispatch();

 const closeModal = () => {
  dispatch({
   type: ManagerActionType.TOGGLE_IS_PROJECT_MODAL,
   payload: false,
  });
 };

 return (
  <div className="modal">
   <div className="modal_content">
    <div>{modal.text}</div>
    <i className="fas fa-times modal_button-close" onClick={closeModal}></i>
    <form
     className="modal_form"
     onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('submit');
     }}
    >
     <input type="text" className="modal_input"></input>
     <input type="submit" className="modal_button-create" value="Create" disabled={false} />
    </form>
   </div>
  </div>
 );
};

export default Modal;
