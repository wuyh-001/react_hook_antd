import React, { Component } from 'react';
import { Layout } from 'antd';
import {useSelector} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import {routers} from './router';
import Header from './component/header';
import Footer from './component/footer';

export default function App(){
	return (
		<Layout className="App" theme="light">
			<Header/>
			<Layout.Content>
				<div className="wrap">
					<Switch>
					{
						routers.map((item,index)=>{
							return (
								<Route
									key={index}
									path={item.path}
									exact={item.exact}
									render={(props)=>{
										return item.render(props)
									}}
								/>
							);	
						})
					}
				</Switch>
			</div>
		</Layout.Content>
		<Footer/>
		</Layout>
	);
}

