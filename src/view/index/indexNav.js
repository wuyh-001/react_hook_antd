import React from 'react';
import {Menu} from 'antd';
import qs from 'qs';

import { indexNav, types } from './../../router/index';
import { Link, useLocation } from 'react-router-dom';


export default function IndexPage(){
    // 拿到当前参数
    let {search}=useLocation();
    // 给tab默认值
    let {tab='all'}=qs.parse(search.substr(1));
    // 设置子导航的选中项
    let currentindex=!tab?0:types.indexOf(tab);
    // let currentindex=types.findIndex((nav,index)=>{
    //     return tab==nav;
    // });

    return (
        <Menu 
            theme={'light'} 
            mode='horizontal'
            defaultSelectedKeys={[currentindex+'']}
            selectedKeys={[currentindex+'']}
        >
            {
              indexNav.map((item,index)=>{
                    return (
                        <Menu.Item 
                        key={index}
                        >
                            <Link to={item.to}>{item.txt}</Link>
                        </Menu.Item>
                    );
              }) 
            }
        </Menu>
    );
}