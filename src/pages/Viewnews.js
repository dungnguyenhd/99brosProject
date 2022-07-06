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
            <div className='row'>
                <h1> {news.tieude} </h1> <br/> <span> {news.day} </span>
            </div>

            <div className='row mt-5'>
                <span>
                    <img src={news.anhchitiet} height='500' width='1200' />
                </span>
            </div>

            <div className='row'>
                <span>
                    {news.mota}
                </span>
            </div>

            <div className='row'>
                <span>
                    {news.chitiet}
                </span>
            </div>

            <div className='row'>
                <span>
                    <img src={news.anhchitiet2} height='500' width='1200' />
                </span>
            </div>

            <div className='row'>
                <span>
                    {news.chitiet2}
                </span>
            </div>
        </div>
      ) : (
        <div className="spinner-border text-primary mt-3 ms-6"> </div>
      )}
      <div className="container">

        <div className='mt-7'>
           <h2 className='pt-5'> Tin liên quan </h2>
        </div>

        <div className="row">
          <NewsData newsdata={newsdata} />
        </div>
      </div>
    </>
  );
};

export default Viewnews;
