import React from 'react';
import NewsData from '../component/news';
import Type from '../component/type';
import '../css/main.css'
import { useState } from 'react';
import { useEffect } from 'react';;

const Tintuc = () => {

  const [newsdata, setNewsdata] = useState([]);

  useEffect(() => {
    let news_url = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/NewsDatabase';
    fetch(news_url)
      .then((response) => response.json())
      .then((newsdata) => {
        setNewsdata(newsdata);
      });
  }, []);

  return(
    <div className="container" id='wrapper_tintuc' style={{ backgroundColor: 'white', border: '1px solid white', borderRadius: '7px', marginTop: '2.5rem',paddingTop: "7rem", }}>
    <div class="mb-7 text-center" id='viewtrend' style={{ marginTop: '1rem' }}>
      <h4 class="blink_me_green text-secondary"><i class="far fa-newspaper"></i>&#160;TIN TỨC </h4>
      <h3 class="fs-xl-7 fs-lg-4 fs-5 fw-bold font-cursive text-capitalize">Tin Hot Hôm Nay</h3>
    </div>

    <section class="pt-5" id="destination" style={{ marginLeft: "2.5rem", }}>
      <div class="container">
              <NewsData newsdata={newsdata} />
              <NewsData newsdata={newsdata} />
      </div>
    </section>


  </div>
  );
};

export default Tintuc;
