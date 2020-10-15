import React from 'react';
import { Card,List, Comment,Avatar,Tooltip} from 'antd';
import { UserOutlined } from '@ant-design/icons';

import FromNow from './../../component/fromNow';
import { Link } from 'react-router-dom';


export default function Reply(props){
    let {loading,data}=props;
    return (
        <Card title="评论列表" loading={loading} type="inner">
            <List 
                dataSource={data}
                pagination={true}
                renderItem={(item)=>{
                    let {author,content,create_at}=item;
                    return (
                        <List.Item>
                        <Comment
                            author={
                                <Link to={`/user/${author.loginname}`}>{author.loginname}</Link>
                            }
                            avatar={
                                <Avatar 
                                    icon={<UserOutlined />} 
                                    src={author.avatar_url}
                                    title={author.loginname}
                                />
                            }
                            content={
                                <div dangerouslySetInnerHTML={{__html:content}}></div>
                            }
                            datetime={<FromNow date={create_at}/>}
                        />
                        </List.Item>
                    );
                }}
            />
        </Card>
    );
}