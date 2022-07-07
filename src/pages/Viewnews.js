import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import NewsData from '../component/news';

const Viewnews = () => {
  const params = useParams();
  const [news, setNews] = useState([]);
  const [newsdata, setNewsdata] = useState([]);

  useEffect(() => {
    console.log('user use effect!!');

    let url = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/NewsDatabase/' + params.id;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((newsdata) => {
        var date = new Date(newsdata.day);
        newsdata.day = date.toISOString().slice(0, 10);
        setNews(newsdata);
      });

    let url_relate = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/NewsDatabase/';
    fetch(url_relate)
      .then((response) => response.json())
      .then((newsdata) => {
        setNewsdata(newsdata);
      });
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  return (
    <>
      {news != null ? (
        <div className="container" style={{ paddingTop: "7rem", }}>

          <p><i><span style={{color: 'blue'}}>Trang chủ</span>/<span style={{color: 'blue'}}>Tin tức</span>/ Tin hot trong ngày</i> </p>

            <div className='row mt-5'>
                <h1> {news.tieude} </h1> <br/> <span> Ngày: {news.day} - 2:09 PM </span>
            </div>

            <div className='row mt-5'>
                <span>
                    {news.mota}
                </span>
            </div>

            <div className='row mt-5 mt-5'>
                <span>
                    <img src={news.anhchitiet} style={{paddingLeft: '5rem'}}/>
                </span>
            </div>

            <div className='row mt-5'>
                <span>
                    {news.mota}
                </span>
            </div>

            <div className='row mt-5'>
                <span>
                    {news.chitiet}
                </span>
            </div>

            <div className='row mt-5'>
                <span>
                    <img src={news.anhchitiet2} style={{paddingLeft: '5rem'}}/>
                </span>
            </div>

            <div className='row mt-5'>
                <span>
                    {news.chitiet2}
                </span>
            </div>

            <p className='mt-5'> Chủ đề: <span style={{color: 'blue'}}> {news.tieude} </span> </p>

            <div class="icon-group mb-4 mt-3">

             <span className='pt-2 text-danger'>Chia sẻ: &#160;&#160;</span>
            <a class="text-decoration-none icon-item shadow-social" id="facebook" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a class="text-decoration-none icon-item shadow-social" id="instagram" href="https://www.instagram.com/" target='_blank'><i class="fab fa-instagram"></i></a>
            <a class="text-decoration-none icon-item shadow-social" id="twitter" href="https://twitter.com/" target='_sblank'><i class="fab fa-twitter"> </i></a></div>


        </div>


      ) : (
        <div className="spinner-border text-primary mt-3 ms-6"> </div>
      )}
      <div className="container">

        <div className='mt-7'>
          <h2 className='pt-5'> Tin liên quan </h2>
        </div>

        <div className="row mt-5">
          <NewsData newsdata={newsdata} />
        </div>


      </div>
    </>
  );
};

export default Viewnews;
