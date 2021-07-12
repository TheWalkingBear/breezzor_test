import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './Gallery.module.scss';

import { Image } from 'antd';

import {Images} from '../Icons/Icons';

const Gallery = ({data}) => {
    return (
        <div className={s.container}>
                <div className="container">
                    <Image.PreviewGroup>
                        <div className={s.list}>
                            <div className={s.list__largeItem}>
                                <div className={s.list__item}>
                                    <div className={s.list__item__bgImage} style={{backgroundImage: `url(${data[0].image})`}} />
                                    <Image src={data[0].image} / >
                                </div>
                            </div>
                            <div className={s.list__smallItems}>
                                {data.map((item, index) => index > 0 && (
                                    <div className={cn(s.list__item, index === 6 && s.more)} style={{display: index > 6 ? 'none' : null}} key={item.id}>
                                        {index === 6 ? (
                                            <div className={s.more__content}>
                                                <Images />
                                                <span>Все фото: {data.length}</span>
                                                <Image src={item.image} />
                                            </div>
                                        ) : (
                                            <>
                                                <div className={s.list__item__bgImage} style={{backgroundImage: `url(${item.image})`}} />
                                                <Image src={item.image} />
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Image.PreviewGroup>
                </div>
        </div>
    )
}

export default Gallery;