import { combineReducers, createStore} from 'redux';
import {topics,topicDetail,userDetail } from './reducers'

export default createStore(combineReducers({
    topics,
    topicDetail,
    userDetail
}))