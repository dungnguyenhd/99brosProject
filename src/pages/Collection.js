import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PhoneData from '../component/data';
import { Outlet, Link } from 'react-router-dom';

const Collection = () => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState('');
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    let url = 'https://62b04a56e460b79df0423a2e.mockapi.io/aa/';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });

    let url_category = 'https://62b04a56e460b79df0423a2e.mockapi.io/name';

    fetch(url_category)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const doSearch = () => {
    let url =
      'https://62b04a56e460b79df0423a2e.mockapi.io/aa/?search=' + product;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProduct('');
        setData(data);
      });
  };

  var categories_list = [];

  if (categories != null) {
    categories_list = categories.map((item) => (
      <li>
        <Link to={'category/' + item.type_name}>{item.type_name}</Link>
      </li>
    ));
  }

  return (
    <>
      <div className="container">
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
          <div className="row text-center mt-3">
            <span className="h1 text-danger mt-2"> MANAGE PRODUCT </span>
          </div>

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
