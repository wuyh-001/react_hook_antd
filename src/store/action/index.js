import axios from 'axios';
import { useDispatch } from 'react-redux';

const http=axios.create({
    baseURL:'https://cnodejs.org/api/v1'
});

// 获取主题列表
function useTopicList(){
    let dispatch=useDispatch();
    // 每次请求数据的时候执行的是该函数
    return function(tab="all",page=1,limit=20,mdrender=true){
        dispatch({
            type:'topic_loading'
        });
        http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then((res)=>{
            dispatch({
                type:'topic_finished',
                list:res.data.data
            });
        })
    }
};

// 获取主题详情
function useTopicDetail(){
    let dispatch=useDispatch();
    // 每次请求数据的时候执行的是该函数
    return function(id){
        dispatch({
            type:'topicDetail_loading'
        });
        http.get(`/topic/${id}`).then((res)=>{
            dispatch({
                type:'topicDetail_finished',
                list:res.data.data
            });
        }).catch((err)=>{
            dispatch({
                type:'topicDetail_error',
                err_msg:err.response.data.error_msg
            });
        })
    }
};

// 获取主题列表
function useUserDetail(){
    let dispatch=useDispatch();
    // 每次请求数据的时候执行的是该函数
    return function(username){
        dispatch({
            type:'userDetail_loading'
        });
        http.get(`/user/${username}`).then((res)=>{
            dispatch({
                type:'userDetail_finished',
                data:res.data.data
            });
        })
    }
};

export {
    useTopicList,
    useTopicDetail,
    useUserDetail
}