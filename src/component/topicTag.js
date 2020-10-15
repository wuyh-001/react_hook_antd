import React from 'react';
import {List,Avatar, Col} from 'antd';
import {Tag} from 'antd';

function setTab(tab){
    switch(tab){
        case "top":
            return <Tag color="magenta" className="topic-tag">置顶</Tag>
        break;
        case "good":
            return <Tag color="green" className="topic-tag">精华</Tag>
        break;
        case "share":
            return <Tag color="blue" className="topic-tag">分享</Tag>
        break;
        case "ask":
            return <Tag color="green" className="topic-tag">问答</Tag>
        break;
        case "job":
            return <Tag color="cyan" className="topic-tag">招聘</Tag>
        break;
        case "dev":
            return <Tag color="lime" className="topic-tag">测试</Tag>
        break;
        default:
            return <Tag color="transparent" className="topic-tag-empty"></Tag>
    }
}

export default function TopicTag(props){
    let {tab}=props;
    return setTab(tab);
}