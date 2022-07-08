import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import UserHouseData from '../component/dataUser';

const Category = () => {
  const [phone, setPhone] = useState([]);
  const [category, setName] = useState(null);
  const params = useParams();
  useEffect(() => {
    console.log('user use effect!!');

    let url =
      'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase/?phanloai=' + params.name;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPhone(data);
        setName(params.name);
      });
  }, []);

  const clickView = () => {
    window.scrollTo(0, 0);
  }

  const clickDown = () => {
    window.scrollTo(0, 20000);
  }

  return (
    <div className='container-fluid' style={{ paddingTop: "7rem", }}>
      <div className='row'>
      <div className='col-lg-2 d-none d-lg-block'>
      <div className='sticky' style={{ marginTop: '10rem' }}>

              <div className='btn-group-vertical wrapper_sidebar bg-muted'>
                <button class="btn btn-md btn-outline-light">&#160;</button>
                <button class="btn btn-md btn-outline-light">&#160;</button>

                <button className="shake-btn btn btn-danger ms-2 rounded-circle" style={{ padding: '.8rem' }} type="button" data-bs-toggle="tooltip" title="Hotline">
                  <a href="https://chat.zalo.me/" target="_blank" className='text-white'><i class="fa fa-phone-alt"></i></a>
                </button>

                &#160;
                <button className="shake-btn btn btn-info ms-2 rounded-circle" style={{ padding: '.8rem' }} type="button" data-bs-toggle="tooltip" title="Facebook">
                  <a href="https://www.facebook.com/" target="_blank" className='text-white'><i class="fab fa-facebook-f"></i></a>
                </button>

                &#160;
                <button className="shake-btn btn btn-secondary ms-2 rounded-circle" style={{ padding: '.8rem' }} type="button" data-bs-toggle="tooltip" title="Twitter">
                  <a href="https://twitter.com/?lang=en" target="_blank" className='text-white'><i class="fab fa-twitter"></i></a>
                </button>

              </div>
            </div>

      </div>

      <div className='col-lg-8 col-md-12 col-sm-12'>
            <div className="App-jumbotron jumbotron text-center ">
              <h1> Khu vực {category}</h1>
              <p>BDS Khu Vực</p>
            </div>
            <div className="container mt-5">
              <div className="row">
                <UserHouseData data={phone} />
              </div>
            </div>
      </div>

      <div className='col-lg-2 d-none d-lg-block'>

      </div>


    </div>
    </div>
  );
};

export default Category;
