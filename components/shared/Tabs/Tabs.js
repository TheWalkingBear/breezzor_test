import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './Tabs.module.scss';

const Tabs = ({data, activeSlug, onClick}) => {
    return (
        <div className={s.container}>
            {data.map((item) => (
                <button className={cn(s.tab, activeSlug === item.slug && s.active)} onClick={() => onClick ? onClick(item.slug) : false} key={item.id}>
                    <span>{item.name}</span>
                </button>
            ))}
        </div>
    )
}

export default Tabs;