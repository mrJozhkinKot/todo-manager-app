export interface ProjectInterface {
 id: string;
 title: string;
 columns: ColumnInterface[];
}

export interface TaskInterface {
 id: string;
 number: number;
 title: string;
 description: string;
 dateCreate: string;
 timeInProgress: string;
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
