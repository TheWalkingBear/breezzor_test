import React, {useEffect, useState, useRef} from 'react';
import s from './Recommendations.module.scss';

import Tabs from '../../../shared/Tabs/Tabs';
import TourCard from '../../../shared/TourCard/TourCard';

import { ArrowLeft, ArrowRight } from '../../../shared/Icons/Icons';

import { Swiper, SwiperSlide } from 'swiper/react';

const Recommendations = ({data}) => {
    const {description, tours} = data;

    const [tabs, setTabs] = useState([]);
    const [toursList, setToursList] = useState([]);

    const [activeSlug, setActiveSlug] = useState(null);

    const swiperRef = useRef(null);

    useEffect(() => {
        getTours(null);
    }, [tours]);

    const tabsSwitchHandler = (slug) => {
        setActiveSlug(slug);
        getTours(slug);
    }

    const getTours = (slug) => {
        let tabsArr = [];
        
        tours.map((item, index) => {
            if(item.items.length > 0) {
                tabsArr.push({id: item.id, name: item.category_name, slug: item.category_slug});
            }
        });
        setTabs(tabsArr);

        let toursArr = [];
        if(slug !== null) {
            tours.find(tour => tour.category_slug === slug).items.map((tour) => {
                toursArr.push(tour);
            });
        } else {
            tours.map((item) => {
                item.items.map((tour) => {
                    toursArr.push(tour);
                });
            });
        }
        setToursList(toursArr);
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
                        <Tabs data={tabs} startTab={'Все'} activeSlug={activeSlug} onClick={(slug) => tabsSwitchHandler(slug)}/>
                    </div>
                    {toursList.length > 0 && <div className={s.content__cards}>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={3}
                            loop={toursList.length > 3}
                            ref={swiperRef}
                        >
                            {toursList.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <TourCard {...item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {toursList.length > 3 ? (
                            <>
                                <button className={s.sliderPrev} onClick={() => swiperRef.current.swiper.slidePrev()}><ArrowLeft /></button>
                                <button className={s.sliderNext} onClick={() => swiperRef.current.swiper.slideNext()}><ArrowRight /></button>
                            </>
                        ) : null}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Recommendations;