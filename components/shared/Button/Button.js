import React, {useEffect, useState} from 'react';
import cn from 'classnames';
import Link from "next/link";
import s from './Button.module.scss'

const Button = ({href, rounded, dark, onClick, children}) => {
    if(href) {
        return (
            <Link href={href}>
                <a className={cn(s.container, rounded && s.rounded, dark && s.dark)}>
                    <span>{children}</span>
                </a>
            </Link>
        )
    } else {
        return (
            <button className={cn(s.container, rounded && s.rounded, dark && s.dark)} onClick={() => onClick && onClick()}>
                <span>{children}</span>
            </button>
        )
    }
}

export default Button;