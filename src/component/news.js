import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/main.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import autoplay from 'autoplay';


function NewsData(props) {
    const [news, setNews] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        setNews(props.newsdata);
    }, [props.newsdata]);

    const sortPriceDown = () => {
        const sortData = [...news];
        sortData.sort((a, b) => a.price - b.price);
        setNews(sortData);
    };

    const sortPriceUp = () => {
        const sortData = [...news];
        sortData.sort((a, b) => b.price - a.price);
        setNews(sortData);
    };

    const clickView = () => {
        window.scrollTo(0, 0);
    }



    var news_list = [];
    var count = 0;
    if (news != null) {
        news_list = news.map((item) => {
            if (count < 12) {
                count++;
                return (
                    <SwiperSlide>
                        <div class="card overflow-hidden shadow"> <div className='card-border bg-primary'><Link to={'/viewnews/' + item.id} onClick={clickView}> <img class="card-img-top" src={item.thumnail} height='320' /></Link></div>

                            <div class="card-body py-4 px-3">

                                <div class="d-flex align-items-center"><Link to={'/viewnews/' + item.id} onClick={clickView}><span class="fs-0"><span class="fs-0 fw-medium" style={{ color: 'black' }}><h3>{item.tieude}</h3></span></span></Link></div>

                                <div class="d-flex align-items-center"><span class="fs-0"><span class="fs-0 fw-medium span-description" style={{ color: 'black'}}>{item.mota}</span></span></div>

                            </div>

                        </div>
                    </SwiperSlide>
                );
            } else {
                return;
            }
        });
    }

    var news_list2 = [];
    var count2 = 0;
    if (news != null) {
        news_list2 = news.map((item) => {
            if (count2 < 3) {
                count2++;
                return (
                    <div class="col-md-4 mb-4">
                        <div class="card overflow-hidden shadow"> <div className='bg-primary'><Link to={'/viewnews/' + item.id} onClick={clickView}> <img class="card-img-top" style={{ border: 'none' }} src={item.thumnail} height='320' /></Link></div>

                            <div class="card-body py-4 px-3">

                                <div class="d-flex align-items-center"><Link to={'/viewnews/' + item.id} onClick={clickView}><span class="fs-0"><span class="fs-0 fw-medium" style={{ color: 'black' }}><h3>{item.tieude}</h3></span></span></Link></div>

                                <div class="d-flex align-items-center"><span class="fs-0"><span class="fs-0 fw-medium" style={{ color: 'black' }}>{item.mota}</span></span></div>

                            </div>

                        </div>
                        </div>
                );
            } else {
                return;
            }
        });
    }


    return (
        <>
                        <div class="container">
                            <div className='row'>
                      <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                      >
                        {news_list}

                      </Swiper>
                      </div>

                      <br /> <br />

                      <div className='row'>
                      {news_list2}
                      </div>

                    </div>

        </>
    );
}

export default NewsData;
