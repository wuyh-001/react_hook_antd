import React from 'react';
import {List,Avatar, Col} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

import TopicTag from './topicTag';
import FromNow from './../component/fromNow'

export default function TopicList(props){
    let {loading,data}=props;
    return (
        <List
            className="topic-list"
            loading={loading}
            dataSource={data}
            renderItem={(item)=>{
                let {author,good,id,tab,title,top,last_reply_at}=item;
                let {avatar_url,loginname}=author;
                return (
                    <List.Item>
                        <Col xs={24} md={22}>
                            <Link to={`/user/${loginname}`}> 
                                <Avatar 
                                    icon={<UserOutlined />} 
                                    src={avatar_url}
                                    title={loginname}
                                />
                                <TopicTag tab={top?'top':(good?'good':tab)}/>
                                <Link to={`/topic/${id}`}>{title}</Link>
                            </Link>
                        </Col>
                        <Col xs={0} md={2} className="time-from-now">
                            <FromNow date={last_reply_at}/>
                        </Col>
                    </List.Item>
                );
            }}
        />
    );
}