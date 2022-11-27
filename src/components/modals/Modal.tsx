import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ManagerActionType } from '../../utils/reducerTypes';

interface ModalProps {
 modal: {
  text: string;
 };
 onCreate: (value: string) => void;
}

const Modal: React.FC<ModalProps> = ({ modal, onCreate }) => {
 const dispatch = useDispatch();
 const [value, setValue] = useState<string>('');

 const closeModal = () => {
  dispatch({
   type: ManagerActionType.TOGGLE_IS_MODAL,
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
      onCreate(value);
      closeModal();
     }}
    >
     <input
      type="text"
      className="modal_input"
      value={value}
      onChange={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
     ></input>
     <input
      type="submit"
      className="modal_button-create"
      value="Create"
      disabled={value ? false : true}
     />
    </form>
   </div>
  </div>
 );
};

export default Modal;
