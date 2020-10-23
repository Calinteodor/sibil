import {createStore, applyMiddleware, compose} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
//Warns when the state is mutated in the redux store
import  rootReducer from './reducers';

export  default function configureStore(initialState) {
  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //support for redux dev tools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(reduxImmutableStateInvariant())
    )
  );
}