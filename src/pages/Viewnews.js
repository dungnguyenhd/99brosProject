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
                <h2> {news.tieude} </h2> <br/> <span> {news.day} </span>
            </div>

            <div className='row'>
                <span>
                    {news.chitiet}
                </span>
            </div>
        </div>
      ) : (
        <div className="spinner-border text-primary mt-3 ms-6"> </div>
      )}
      <div className="container">
        <div className="row mt-5">
          <NewsData newsdata={newsdata} />
        </div>
      </div>
    </>
  );
};

export default Viewnews;
