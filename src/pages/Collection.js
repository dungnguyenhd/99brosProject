import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PhoneData from '../component/data';
import { Outlet, Link } from 'react-router-dom';

const Collection = () => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState('');

  useEffect(() => {
    let url = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase/';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });

  }, []);

  const doSearch = () => {
    let url =
      'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase/?search=' + product;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProduct('');
        setData(data);
      });
  };


  return (
    <>
      <div className="container" style={{ paddingTop: "7rem", }}>

        <div className="row text-center mt-3">
          <span className="h1 text-danger mt-2"> QUẢN LÍ BÀI ĐĂNG </span>
        </div>

        <div className="input-group mb-3">
          {/* ------------------------------------Search---------------------------------------- */}

          <input
            type="text"
            className="form-control mt-3"
            placeholder="Search"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
          <button
            className="btn btn-success mt-3"
            type="submit"
            onClick={() => doSearch()}
          >
            Search
          </button>
        </div>

        {/* ------------------------------------Search---------------------------------------- */}


        {/* ____________________________________DATA_________________________________________ */}
        <div className="row mt-4">

          <div className="btn-group mt-3">
          </div>
          <PhoneData data={data} />
        </div>

        {/* ____________________________________DATA_________________________________________ */}
      </div>
    </>
  );
};

export default Collection;
