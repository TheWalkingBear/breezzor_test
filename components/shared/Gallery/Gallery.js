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
                                {data.map((item, index) =>
                                    index > 0 && index <= 5 ? (
                                        <div className={s.list__item} key={item.id}>
                                            <div className={s.list__item__bgImage} style={{backgroundImage: `url(${item.image})`}} />
                                            <Image src={item.image} />
                                        </div>
                                    ) : null
                                )}
                                {data.length > 6 && <div className={cn(s.list__item, s.more)}>
                                    <div className={s.more__content}>
                                        <Images />
                                        <span>Все фото: {data.length}</span>
                                        <Image src={data[6].image} />
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </Image.PreviewGroup>
                </div>
        </div>
    )
}

export default Gallery;