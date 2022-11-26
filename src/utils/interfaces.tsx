export interface ProjectInterface {
 id: string;
 title: string;
 description: string;
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
}

export interface ColumnInterface {
 id: string;
 title: string;
 tasks?: TaskInterface[];
}
