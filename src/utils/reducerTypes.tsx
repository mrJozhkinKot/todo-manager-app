import { ProjectInterface, TaskInterface } from './interfaces';

export interface ManagerState {
 projects: ProjectInterface[];
 isProjectModal: boolean;
}

export enum ManagerActionType {
 ADD_NEW_TASK = 'ADD_NEW_TASK',
 DELETE_TASK = 'DELETE_TASK',
 TOGGLE_IS_PROJECT_MODAL = 'TOGGLE_IS_PROJECT_MODAL',
}

interface addNewTaskAction {
 type: ManagerActionType.ADD_NEW_TASK;
 payload: { tasksList: TaskInterface[]; colID: string; projectID: string };
}

interface deleteTaskAction {
 type: ManagerActionType.DELETE_TASK;
 payload: { taskID: string; colID: string; projectID: string };
}

interface toggleIsProjectModal {
 type: ManagerActionType.TOGGLE_IS_PROJECT_MODAL;
 payload: boolean;
}

export type ManagerAction = addNewTaskAction | deleteTaskAction | toggleIsProjectModal;
