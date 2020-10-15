import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

import IndexNav from './indexNav';
import TopicList from './../../component/topicList';
import {useTopicList} from './../../store/action/index';
import Page from './../../component/page';


export default function IndexPage(){
    let {loading,data}=useSelector(state=>{
        return state.topics
    });
    let {search}=useLocation();
    let {tab="all",page=1}=qs.parse(search.substr(1))
    let getData=useTopicList();
    // tab,page有更改的时候都会执行getData方法
    useEffect(()=>{
         getData(tab,page);
    },[tab,page])
    return (
        <div>
            <IndexNav/>
            <TopicList
                loading={loading}
                data={data}
            />
            {loading?'':<Page/>}
        </div>
    );
}