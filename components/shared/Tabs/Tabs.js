import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './Tabs.module.scss';

const Tabs = ({data, onClick}) => {
    return (
        <div className={s.container}>
            {data.map((item) => (
                <button className={s.tab} key={item.id} onClick={() => onClick ? onClick(item.slug) : false}>
                    <span>{item.name}</span>
                </button>
            ))}
        </div>
    )
}

export default Tabs;