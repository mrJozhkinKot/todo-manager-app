import { ManagerState, ManagerActionType, ManagerAction } from '../../utils/reducerTypes';

const initialState: ManagerState = {
 projects: [
  {
   id: '1',
   title: 'First project',
   columns: [
    {
     id: 'queue',
     title: 'Queue',
     tasks: [
      {
       id: '3',
       number: 1,
       title: 'do something',
       description:
        'this task about something very important, this task about something very important, this task about something very important this task about something very important ',
       dateCreate: '01.12.22',
       timeInProgress: '1day',
       priority: 'low',
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
 isModal: false,
 isModalEdit: false,
 currentColumnId: '',
 currentTaskId: '',
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
  case ManagerActionType.TOGGLE_IS_MODAL:
   return {
    ...state,
    isModal: action.payload,
   };
  case ManagerActionType.TOGGLE_IS_MODAL_EDIT:
   return {
    ...state,
    isModalEdit: action.payload,
   };
  case ManagerActionType.CREATE_NEW_PROJECT:
   return {
    ...state,
    projects: [...state.projects, action.payload],
   };
  case ManagerActionType.DELETE_PROJECT:
   return {
    ...state,
    projects: state.projects.filter((project) => project.id !== action.payload),
   };
  case ManagerActionType.SET_COLUMN_ID:
   return {
    ...state,
    currentColumnId: action.payload,
   };
  case ManagerActionType.SET_TASK_ID:
   return {
    ...state,
    currentTaskId: action.payload,
   };
  case ManagerActionType.EDIT_TASK:
   return {
    ...state,
    projects: state.projects.map((project, index) => {
     if (action.payload.projectID === project.id) {
      return {
       ...state.projects[index],
       columns: state.projects[index].columns.map((col, indCol) => {
        if (action.payload.colID === col.id) {
         return {
          ...col,
          tasks: state.projects[index].columns[indCol].tasks.map((task) => {
           if (action.payload.taskID === task.id) {
            return { ...task, ...action.payload.task };
           }
           return task;
          }),
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
