import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import UserPhoneData from '../component/dataUser';
import '../css/main.css';
import { Outlet, Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState('');
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    let url = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase';
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
      {/* <!-- ======= Hero Section ======= --> */}
      <section style={{paddingTop: "7rem",}}>
        <div class="bg-holder" id="start" style={{
      backgroundImage: `url("https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571459.jpg&fm=jpg")`}}>
        </div>

        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-5 col-lg-6 order-0 order-md-1 text-end"></div>
            <div class="col-md-7 col-lg-6 text-md-start text-center py-4">
              <h1 class="hero-title">Welcome<br/>To 99Bros Website </h1>
              <p class="mb-4 fw-medium">This website provide infomation about real estate.<br class="d-none d-xl-block" />Or house renting, real estate news<br class="d-none d-xl-block" />Booking room.</p>
              <div class="text-center text-md-start"> <a class="btn btn-primary btn-lg me-md-4 mb-3 mb-md-0 border-0 primary-btn-shadow" href="#viewnews" role="button">View news</a>
                <div class="w-100 d-block d-md-none"></div><a href="#start" role="button"><span class="btn btn-success round-btn-lg rounded-circle me-3 danger-btn-shadow">
                <i class="fas fa-paper-plane"></i>
                </span></a><span class="fw-medium" style={{color: 'white'}}>Post News</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </section><!-- End Hero Section --> */}
{/*
      <!-- ============================================--> */}

      <section class="pt-1 pt-md-9" id="service">

        <div class="container">
          <div class="position-absolute z-index--1 end-0 d-none d-lg-block"></div>
          <div class="mb-7 text-center">
            <h5 class="text-secondary">LOCATION </h5>
            <h3 class="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">Choose Location</h3>
          </div>
          <div class="row">
            <div class="col-lg-3 col-sm-6 mb-6">
              <div class="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div class="card-body p-xxl-5 p-4"> <img src="http://2.bp.blogspot.com/-BhNz0plAze4/VecqxSWuxyI/AAAAAAAADJM/9HROc8vSj4o/s400/vector-logohn-khuevancac.jpg" width="75" alt="Service" />
                  <h4 class="mb-3">Hà Nội</h4>
                  <p class="mb-0 fw-medium">Thành phố Hà Nội bao gồm cả ngoại thành và nội thành.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-6">
              <div class="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div class="card-body p-xxl-5 p-4"> <img src="https://i.imgur.com/TW9KwPd.png" width="75" alt="Service" />
                  <h4 class="mb-3">Hồ Chí Minh</h4>
                  <p class="mb-0 fw-medium">Thành phố Hồ Chí Minh và các khu vực lân cận.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-6">
              <div class="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div class="card-body p-xxl-5 p-4"> <img src="https://www.sos24h.vn/wwwroot/resources/upload/img/productcategory/8-2020/logo2.png" width="75" alt="Service" />
                  <h4 class="mb-3">Đà Nẵng</h4>
                  <p class="mb-0 fw-medium">Khu vực Thành Phố Đà Nẵng. Không bao gồm lân cận</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-6">
              <div class="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div class="card-body p-xxl-5 p-4"> <img src="https://i.pinimg.com/originals/95/b2/2f/95b22f2e0059265d3d9cdb0cce0a4a27.png" width="115" alt="Service" />
                  <h4 class="mb-3">Các Khu Vực Khác</h4>
                  <p class="mb-0 fw-medium">Các tỉnh thành khác trên khu vực Việt Nam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        {/* <!-- end of .container--> */}





      <div className="container">
        <div class="mb-7 text-center" id='viewnews'>
            <h5 class="text-secondary">OFFICE </h5>
            <h3 class="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">Top Office</h3>
          </div>

          <section class="pt-5" id="destination">
          <div class="container">
            <div className='row'>
          <UserPhoneData data={data} />
          </div>
          </div>
          </section>
      </div>

    </>
  );
};

export default Home;
