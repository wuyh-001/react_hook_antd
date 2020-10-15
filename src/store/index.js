import { combineReducers, createStore} from 'redux';
import {topics,topicDetail } from './reducers'

export default createStore(combineReducers({
    topics,
    topicDetail
}))