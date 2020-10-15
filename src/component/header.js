import React from 'react';
import {Layout,Affix, Col,Row ,Menu} from 'antd';
import {Link, useLocation} from 'react-router-dom';

import {navs} from './../router';

export default function FooterPage(){
    // 菜单的默认选中项通过地址中的pathname来获取
    let { pathname }=useLocation();
    let activeIndex=navs.findIndex((nav,index)=>{
        return pathname==nav.to;
    });
    
    return (
        <Affix offsetTop={0}>
            <Layout.Header id="header">
                <div className="wrap">
                    <Row>
                        <Col xs={6} sm={4} md={2}>
                            <div className="logo">
                                <Link to="/">CNode</Link>
                            </div>
                        </Col>
                        <Col xs={18} sm={20} md={22}>
                        <Menu theme="dark" mode="horizontal" selectedKeys={[activeIndex+'']}>
                            {
                                navs.map((nav,index)=>{
                                    return (
                                        <Menu.Item key={index}>
                                            <Link to={nav.to}>{nav.txt}</Link>
                                        </Menu.Item>
                                    );
                                })
                            }
                        </Menu>
                        </Col>
                    </Row>
        
                </div>
            </Layout.Header>
        </Affix>
    );
}