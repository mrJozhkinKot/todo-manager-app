export interface ProjectInterface {
 id: string;
 title: string;
 description: string;
 columns: ColumnInterface[];
}

export interface TaskInterface {
 id: string;
 number: number;
 title: string;
 description: string;
 dateCreate: string;
 timeInProcess: string;
 timeDeadline: string;
 priority: string;
 files?: Blob;
 status: string;
 comments: CommentInterface[];
 subtasks: SubtaskInterface[];
}

export interface ColumnInterface {
 id: string;
 title: string;
 tasks: TaskInterface[];
}

export interface SubtaskInterface {
 id: string;
 title: string;
 isDone: boolean;
}

export interface CommentInterface {
 id: string;
 idParent: string;
 text: string;
 comments: CommentInterface[];
}
