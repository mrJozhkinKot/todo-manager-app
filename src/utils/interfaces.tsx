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
 priority: string;
 files?: Blob;
 status: string;
 comments: string[];
 columnID: string;
}

export interface ColumnInterface {
 id: string;
 title: string;
 tasks: TaskInterface[];
}

export interface StatusListInterface {
 queue: string;
 development: string;
 done: string;
}
