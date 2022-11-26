import { ManagerState, ManagerActionType, ManagerAction } from '../../utils/reducerTypes';

const initialState: ManagerState = {
 projects: [
  {
   id: '1',
   title: '',
   description: '',
   columns: [
    {
     id: 'queue',
     title: 'Queue',
     tasks: [
      {
       id: '3',
       number: 1,
       title: 'do somethieng',
       description: '',
       dateCreate: '',
       timeInProgress: '',
       priority: '',
       status: 'on progress',
       comments: [],
       columnID: 'queue',
      },
      {
       id: '2',
       number: 2,
       title: 'change something',
       description: '',
       dateCreate: '',
       timeInProgress: '',
       priority: '',
       status: 'on progress',
       comments: [],
       columnID: 'queue',
      },
     ],
    },
    { id: 'development', title: 'Development', tasks: [] },
    {
     id: 'done',
     title: 'Done',
     tasks: [
      {
       id: '7',
       number: 1,
       title: 'make dinner',
       description: '',
       dateCreate: '',
       timeInProgress: '',
       priority: '',
       status: 'on progress',
       comments: [],
       columnID: 'done',
      },
      {
       id: '8',
       number: 2,
       title: 'do homework',
       description: '',
       dateCreate: '',
       timeInProgress: '',
       priority: '',
       status: 'on progress',
       comments: [],
       columnID: 'done',
      },
     ],
    },
   ],
  },
 ],
};

export const managerReducer = (state = initialState, action: ManagerAction): ManagerState => {
 switch (action.type) {
  case ManagerActionType.ADD_NEW_TASK:
   const { projectID, colID, tasksList } = action.payload;
   return {
    ...state,
    projects: state.projects.map((project, index) => {
     if (projectID === project.id) {
      return {
       ...state.projects[index],
       columns: state.projects[index].columns.map((col) => {
        if (colID === col.id) {
         return { ...col, tasks: tasksList };
        }
        return col;
       }),
      };
     }
     return project;
    }),
   };
  case ManagerActionType.DELETE_TASK:
   return {
    ...state,
    projects: state.projects.map((project, index) => {
     if (action.payload.projectID === project.id) {
      return {
       ...state.projects[index],
       columns: state.projects[index].columns.map((col, indCol) => {
        if (action.payload.colID === col.id) {
         console.log(action.payload.colID, col.id, index);
         return {
          ...col,
          tasks: state.projects[index].columns[indCol].tasks.filter(
           (task) => task.id !== action.payload.taskID
          ),
         };
        }
        return col;
       }),
      };
     }
     return project;
    }),
   };
  default:
   return state;
 }
};
