import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import serviceReducer from '../reducers/serviceReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  service: serviceReducer,
});

const ConfigureStore = () => {
  return createStore(rootReducer, compose(applyMiddleware(thunk)));
};

export default ConfigureStore;
