import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './Recommendations.module.scss';

import Tabs from '../../../shared/Tabs/Tabs';
import TourCard from '../../../shared/TourCard/TourCard';

import { Swiper, SwiperSlide } from 'swiper/react';

const Recommendations = ({data}) => {
    const {description, tours} = data;

    const [tabs, setTabs] = useState([]);
    const [toursList, setToursList] = useState([]);

    const [activeSlug, setActiveSlug] = useState(null);

    useEffect(() => {
        let tabsArr = [];
        tours.map((item, index) => {
            if(item.items.length > 0) {
                tabsArr.push({id: item.id, name: item.category_name, slug: item.category_slug});
            }
        });
        setTabs(tabsArr);
        setActiveSlug(tabsArr[0].slug)

        let toursArr = [];
        tours.map((item) => {
            item.items.map((tour) => {
                toursArr.push(tour);
            });
        });
        console.log(toursArr);
        setToursList(toursArr);
    }, [tours]);

    const tabsSwitchHandler = (slug) => {
        
    }

    return (
        <div className={s.container}>
            <div className="container">
                <div className={s.title}>
                    <span>Вам также может понравиться</span>
                </div>
                <div className={s.description} dangerouslySetInnerHTML={{ __html: description }} />
                <div className={s.content}>
                    <div className={s.content__tabs}>
                        <Tabs data={tabs} activeSlug={activeSlug} onClick={(slug) => tabsSwitchHandler(slug)}/>
                    </div>
                    {toursList.length > 0 && <div className={s.content__cards}>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={3}
                        >
                            {toursList.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <TourCard {...item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Recommendations;