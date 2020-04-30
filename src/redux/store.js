import { createStore } from 'redux'
// import rootReducers from './reducers'
import todos from './reducers/todos'

const store = createStore ( todos )
export default store