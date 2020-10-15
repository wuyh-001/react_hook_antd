// 主题列表
export function topics(state={
    loading:true,
    data:[]
},action){
    switch(action.type){
        // 数据请求中
        case 'topic_loading':
            return {
                loading:true,
                data:[]
            };
        break;
        // 数据请求结束
        case 'topic_finished':
            return {
                loading:false,
                data:action.list
            };
        break;
        default:
            return state;
    }
};

// 主题详情
export function topicDetail(state={
    loading:true,
    data:{
        author:{loginname:""}
    },
    isError:false,
    err_msg:''
},action){
    switch(action.type){
        case 'topicDetail_loading':
            return {
                loading:true,
                data:{
                    author:{loginname:''}
                },
                isError:false,
                err_msg:''
            };
        case 'topicDetail_finished':
            return {
                loading:false,
                data:action.list,
                isError:false,
                err_msg:''
            }; 
        case 'topicDetail_error':
            return {
                loading:false,
                data:{
                    author:{loginname:''}
                },
                isError:true,
                err_msg:action.err_msg
            }; 
        default:
            return state;
    }
}

// 用户详情
export function userDetail(state={
    loading:true,
    data:{}
},action){
    switch(action.type){
        // 数据请求中
        case 'userDetail_loading':
            return {
                loading:true,
                data:{}
            };
        break;
        // 数据请求结束
        case 'userDetail_finished':
            return {
                loading:false,
                data:action.data
            };
        break;
        default:
            return state;
    }
};