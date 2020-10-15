import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Alert } from 'antd';

import {useTopicDetail} from './../../store/action';
import Detail from './detail';
import Reply from './reply'

export default function TopicPage(){
    let {id}=useParams();
    let history=useHistory();
    let getData=useTopicDetail();
    let {loading,data,isError,err_msg}=useSelector(state=>state.topicDetail)
    useEffect(()=>{
        getData(id);
    },[id]);
    return (
        <div>
            {
                isError ? (
                    <Alert
                        message="错误提示"
                        description={err_msg}
                        type="error"
                        closable
                        afterClose={()=>{
                            history.goBack();
                        }}
                    />
                ) : (
                    <Fragment>
                        <Detail data={data} loading={loading}/>
                        <Reply loading={loading} data={data.replies}/>
                    </Fragment>
                    
                )
            }
        </div>
    );
}