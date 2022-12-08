import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ColumnInterface, CommentInterface, TaskInterface } from '../../utils/interfaces';
import { ManagerActionType } from '../../utils/reducerTypes';
import TaskInput from './TaskInput';

interface CommentProps {
 comment: CommentInterface;
 task: TaskInterface;
 column: ColumnInterface;
}
const Comment: React.FC<CommentProps> = ({ comment, task, column }) => {
 const { id } = useParams();
 const dispatch = useDispatch();
 const [isReplyInput, setIsReplyInput] = useState<boolean>(false);

 const deleteComment = () => {
  dispatch({
   type: ManagerActionType.DELETE_COMMENT,
   payload: {
    commentID: comment.id,
    taskID: task.id,
    colID: column.id,
    projectID: id,
   },
  });
 };

 const addReplyInput = () => {
  setIsReplyInput(true);
 };

 const addReplyComment = (value: string) => {
  dispatch({
   type: ManagerActionType.ADD_REPLY_COMMENT,
   payload: {
    comment: {
     id: uuidv4(),
     idParent: comment.id,
     text: value,
     comments: [],
    },
    projectID: id,
    colID: column.id,
    taskID: task.id,
    commentID: comment.id,
   },
  });
 };

 return (
  <div className="modal-edit_comments-comment-parent">
   <div className="modal-edit_comments-comment">
    <div>
     <p>{comment.text}</p>
     <p className="modal-edit_comments-comment_reply" onClick={addReplyInput}>
      Reply
     </p>
    </div>
    <div className="modal-edit_comments-comment_button">
     <i className="fas fa-times" onClick={deleteComment}></i>
    </div>
   </div>
   <div>
    {comment.comments.length
     ? comment.comments.map((com) => (
        <Comment key={com.id} comment={com} task={task} column={column} />
       ))
     : null}
   </div>
   {isReplyInput && (
    <TaskInput onCreate={addReplyComment} onButtonsAction={() => setIsReplyInput(false)} />
   )}
  </div>
 );
};

export default Comment;
