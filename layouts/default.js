import React, {useEffect, useState} from 'react'

import s from './default.module.scss';

import Head from '../components/layout/Head/Head'
import Header from '../components/layout/Header/Header'

const Layout = (props) => {
    return (
        <>
            <Head title={props.title}/>
            <div className={s.pageWrapper}>
                <Header />
                <div className={s.pageContent}>{props.children}</div>
            </div>
        </>
    )
}

export default Layout