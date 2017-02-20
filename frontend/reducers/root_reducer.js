import {combineReducers} from 'redux';


import SessionReducer from './session_reducer';
import ProjectsReducer from './projects_reducer';
import ProjectDetailReducer from './project_detail_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  projects: ProjectsReducer,
  projectDetail: ProjectDetailReducer,
  search: SearchReducer
});

export default RootReducer;
