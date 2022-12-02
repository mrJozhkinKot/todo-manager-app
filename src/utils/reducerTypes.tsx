import { ProjectInterface, TaskInterface } from './interfaces';

export interface ManagerState {
 projects: ProjectInterface[];
 isModal: boolean;
 isModalEdit: boolean;
 currentColumnId: string;
 currentTaskId: string;
}

export enum ManagerActionType {
 ADD_NEW_TASK = 'ADD_NEW_TASK',
 DELETE_TASK = 'DELETE_TASK',
 TOGGLE_IS_MODAL = 'TOGGLE_IS_MODAL',
 TOGGLE_IS_MODAL_EDIT = 'TOGGLE_IS_MODAL_EDIT',
 CREATE_NEW_PROJECT = 'CREATE_NEW_PROJECT',
 DELETE_PROJECT = 'DELETE_PROJECT',
 SET_COLUMN_ID = 'SET_COLUMN_ID',
 SET_TASK_ID = 'SET_TASK_ID',
 EDIT_TASK = 'EDIT_TASK',
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

interface deleteProjectAction {
 type: ManagerActionType.DELETE_PROJECT;
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

export type ManagerAction =
 | addNewTaskAction
 | deleteTaskAction
 | toggleIsModal
 | toggleIsModalEdit
 | createNewProjectAction
 | deleteProjectAction
 | setColumnIdAction
 | setTaskIdAction
 | editTaskAction;
