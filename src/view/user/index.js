import React, { Fragment, useEffect } from 'react';
import {Card,Avatar} from 'antd';
import { useParams } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { useUserDetail } from './../../store/action'
import { useSelector } from 'react-redux';

import TopicList from './../../component/topicList';
import FromNow from './../../component/fromNow';

export default function UserPage(){
    let {usename}=useParams();
    let getUserdata=useUserDetail();
    useEffect(()=>{
        getUserdata(usename);
    },[usename]);
    let {loading,data}=useSelector(state=>state.userDetail);
    let {avatar_url,githubUsername,create_at,score,recent_topics=[],recent_replies=[]}=data;
    return (
        <Fragment>
            <Card 
                loading={loading} 
                className="user-details"
            >
                <Avatar 
                size={80} 
                icon={<UserOutlined />} 
                src={avatar_url}
            />
            <p style={{
                marginTop: 20
            }}>用户名：{usename}　注册时间：{<FromNow date={create_at} />}　积分：{score}</p>
            <p>github：<a href={`https://github.com/${githubUsername}`} target="_blank">https://github.com/{githubUsername}</a></p>
          </Card>
            <Card 
                loading={loading} 
                title="最近创建的话题"
            >
                <TopicList
                    loading={loading}
                    data={recent_topics}
                />  
            </Card>
            <Card 
                loading={loading} 
                title="最近参与的话题"
            >
                <TopicList
                    loading={loading}
                    data={recent_replies}
                />  
            </Card>
        </Fragment>
    );
}