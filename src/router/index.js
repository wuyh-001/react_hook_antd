import React from 'react';
import qs from 'qs';

import IndexPage from './../view/index';
import GetstartPage from './../view/getstart';
import AboutPage from './../view/about';
import UserPage from './../view/user';
import TopicPage from './../view/topic';
import NotFoundPage from './../view/page404';

const types=['all','good','share','ask','job','dev']

const routers=[
    {
        path:'/',
        exact:true,
        render(props){
            let {search}=props.location;
            // 通过qs 可以将search参数格式化 
            let {tab,page}=qs.parse(search.substr(1));
            /*
            ** 除以下三种情况，页面都返回404
            ** http://localhost:3000
            ** http://localhost:3000/?tab=job
            ** http://localhost:3000/?tab=job&page=1
            */ 
            if((tab===undefined && page===undefined) || types.includes(tab) && (page===undefined || page>0)){
                return <IndexPage {...props}/>
            };
            return <NotFoundPage/>
        }
    },
    {
        path:'/getstart',
        exact:true,
        render(props){
            return <GetstartPage {...props}/>
        }
    },
    {
        path:'/about',
        exact:true,
        render(props){
            return <AboutPage {...props}/>
        }
    },
    {
        path:'/user/:usename',
        exact:false,
        render(props){
            return <UserPage {...props}/>
        }
    },
    {
        path:'/topic/:id',
        exact:false,
        render(props){
            return <TopicPage {...props}/>
        }
    },
    {
        path:'',
        exact:true,
        render(){
            return <NotFoundPage/>
        }
    },
];

const navs=[
    {
        txt:'首页',
        to:'/'
    },
    {
        txt:'关于我们',
        to:'/about'
    },
    {
        txt:'新手入门',
        to:'/getstart'
    },
];

const indexNav=[
    {
        txt:'全部',
        to:'/?tab=all'
    },
    {
        txt:'精华',
        to:'/?tab=good'
    },
    {
        txt:'分享',
        to:'/?tab=share'
    },
    {
        txt:'问答',
        to:'/?tab=ask'
    },
    {
        txt:'招聘',
        to:'/?tab=job'
    },
    {
        txt:'客户端测试',
        to:'/?tab=dev'
    }
];

export {
    types,
    routers,
    navs,
    indexNav
}



