import React from 'react';
import { TaskInterface, ColumnInterface } from '../../utils/interfaces';
import Comment from './Comment';

interface CommentListProps {
 task: TaskInterface;
 column: ColumnInterface;
}

const CommentList: React.FC<CommentListProps> = ({ task, column }) => {
 return (
  <div className="modal-edit_comments">
   {task.comments.map((comment) => (
    <Comment key={comment.id} comment={comment} task={task} column={column} />
   ))}
  </div>
 );
};

export default CommentList;
