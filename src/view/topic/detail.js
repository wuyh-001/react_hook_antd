import { Card } from 'antd';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import TopicTag from './../../component/topicTag';
import FromNow from './../../component/fromNow';

export default function Detail(props){
    let {loading,data}=props;
    let {author,content,create_at,good,top,tab,title,visit_count}=data;
    console.log(author)
    return(
        <Card
            type="inner"
            title={
                <Fragment>
                    <h1>
                        <TopicTag tab={top?'top':(good?'good':tab)}/>
                        {title}
                    </h1>
                    <div>
                        -作者：<Link to={`/user/${author.loginname}`}>{author.loginname}</Link>
                        -创建时间：<FromNow date={create_at}/>
                        -浏览人数：{visit_count}
                    </div>
                </Fragment>
            }
            loading={loading}
        >
            <div dangerouslySetInnerHTML={{__html:content}}></div>
        </Card>
       
    )
} 