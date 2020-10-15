import React from 'react';
import {Pagination} from 'antd';
import { Link, useLocation } from 'react-router-dom';
import qs from 'qs';

export default function Page(){
    let {search}=useLocation();
    let {tab="all",page=1}=qs.parse(search.substr(1));
    return (
        <Pagination
            defaultCurrent={page} 
            total={1000}
            className="page-wrap"
            itemRender={(page,type)=>{
                switch(type){
                    case 'page':
                        return (
                            <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>
                        );
                    case 'prev':
                        return (
                        <Link to={`/?tab=${tab}&page=${page}`}>{'<'}</Link>
                        );
                    case 'next':
                        return (
                            <Link to={`/?tab=${tab}&page=${page}`}>{'>'}</Link>
                        );
                   default:
                        return (
                            <Link to={`/?tab=${tab}&page=${page}`}>...</Link>
                        );
                }
            }}
        />
    );
}