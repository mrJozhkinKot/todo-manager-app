import {
 ColumnInterface,
 CommentInterface,
 ProjectInterface,
 SubtaskInterface,
 TaskInterface,
} from './interfaces';

export interface ManagerState {
 projects: ProjectInterface[];
 isModal: boolean;
 isModalEdit: boolean;
 isCreateSubtask: boolean;
 isCreateComment: boolean;
 currentProjectId: string;
 currentColumnId: string;
 currentTaskId: string;
 currentColumn: ColumnInterface;
 currentTask: TaskInterface;
}

export enum ManagerActionType {
 ADD_NEW_TASK = 'ADD_NEW_TASK',
 DELETE_TASK = 'DELETE_TASK',
 TOGGLE_IS_MODAL = 'TOGGLE_IS_MODAL',
 TOGGLE_IS_MODAL_EDIT = 'TOGGLE_IS_MODAL_EDIT',
 CREATE_NEW_PROJECT = 'CREATE_NEW_PROJECT',
 EDIT_PROJECT = 'EDIT_NEW_PROJECT',
 DELETE_PROJECT = 'DELETE_PROJECT',
 SET_PROJECT_ID = 'SET_PROJECT_ID',
 SET_COLUMN_ID = 'SET_COLUMN_ID',
 SET_TASK_ID = 'SET_TASK_ID',
 EDIT_TASK = 'EDIT_TASK',
 SET_CURRENT_COLUMN = 'SET_CURRENT_COLUMN',
 SET_CURRENT_TASK = 'SET_CURRENT_TASK',
 SORT_TASKS = 'SORT_TASKS',
 ADD_NEW_SUBTASK = 'ADD_NEW_SUBTASK',
 EDIT_SUBTASK = 'EDIT_SUBTASK',
 DELETE_SUBTASK = 'DELETE_SUBTASK',
 ADD_NEW_COMMENT = 'ADD_NEW_COMMENT',
 DELETE_COMMENT = 'DELETE_COMMENT',
 ADD_REPLY_COMMENT = 'ADD_REPLY_COMMENT',
}

interface addNewTaskAction {
 type: ManagerActionType.ADD_NEW_TASK;
 payload: { tasksList: TaskInterface[]; colID: string; projectID: string };
}

interface deleteTaskAction {
 type: ManagerActionType.DELETE_TASK;
 payload: { taskID: string; colID: string; projectID: string };
}

interface toggleIsModal {
 type: ManagerActionType.TOGGLE_IS_MODAL;
 payload: boolean;
}

interface toggleIsModalEdit {
 type: ManagerActionType.TOGGLE_IS_MODAL_EDIT;
 payload: boolean;
}

interface createNewProjectAction {
 type: ManagerActionType.CREATE_NEW_PROJECT;
 payload: ProjectInterface;
}

interface editProjectAction {
 type: ManagerActionType.EDIT_PROJECT;
 payload: { project: ProjectInterface; projectID: string };
}

interface deleteProjectAction {
 type: ManagerActionType.DELETE_PROJECT;
 payload: string;
}
interface setProjectIdAction {
 type: ManagerActionType.SET_PROJECT_ID;
 payload: string;
}

interface setColumnIdAction {
 type: ManagerActionType.SET_COLUMN_ID;
 payload: string;
}

interface setTaskIdAction {
 type: ManagerActionType.SET_TASK_ID;
 payload: string;
}

interface editTaskAction {
 type: ManagerActionType.EDIT_TASK;
 payload: { task: TaskInterface; colID: string; projectID: string; taskID: string };
}

interface setCurrentColumn {
 type: ManagerActionType.SET_CURRENT_COLUMN;
 payload: ColumnInterface;
}

interface setCurrentTask {
 type: ManagerActionType.SET_CURRENT_TASK;
 payload: TaskInterface;
}

interface sortTasks {
 type: ManagerActionType.SORT_TASKS;
 payload: {
  projectID: string;
  draggableColumn: ColumnInterface;
  dropableColumn: ColumnInterface;
 };
}

interface addNewSubtaskAction {
 type: ManagerActionType.ADD_NEW_SUBTASK;
 payload: { subtask: SubtaskInterface; colID: string; projectID: string; taskID: string };
}

interface editSubtaskAction {
 type: ManagerActionType.EDIT_SUBTASK;
 payload: {
  subtask: SubtaskInterface;
  colID: string;
  projectID: string;
  taskID: string;
  subtaskID: string;
 };
}

interface deleteSubtaskAction {
 type: ManagerActionType.DELETE_SUBTASK;
 payload: { subtaskID: string; taskID: string; colID: string; projectID: string };
}

interface addNewCommentAction {
 type: ManagerActionType.ADD_NEW_COMMENT;
 payload: { comment: CommentInterface; colID: string; projectID: string; taskID: string };
}

interface deleteCommentAction {
 type: ManagerActionType.DELETE_COMMENT;
 payload: { commentID: string; colID: string; projectID: string; taskID: string };
}

interface addReplyCommentAction {
 type: ManagerActionType.ADD_REPLY_COMMENT;
 payload: {
  comment: CommentInterface;
  parentID: string;
  colID: string;
  projectID: string;
  taskID: string;
 };
}

export type ManagerAction =
 | addNewTaskAction
 | deleteTaskAction
 | toggleIsModal
 | toggleIsModalEdit
 | createNewProjectAction
 | editProjectAction
 | deleteProjectAction
 | setProjectIdAction
 | setColumnIdAction
 | setTaskIdAction
 | editTaskAction
 | setCurrentColumn
 | setCurrentTask
 | sortTasks
 | addNewSubtaskAction
 | editSubtaskAction
 | deleteSubtaskAction
 | addNewCommentAction
 | deleteCommentAction
 | addReplyCommentAction;
