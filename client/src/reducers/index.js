import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

// reducer as formReducer renames it

export default combineReducers({
	auth: authReducer,
	form: formReducer
})