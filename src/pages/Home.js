import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import UserHouseData from '../component/dataUser';
import NewsData from '../component/news';
import Type from '../component/type';
import '../css/main.css';
import { Outlet, Link } from 'react-router-dom';
import PhoneData from '../component/data';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import autoplay from 'autoplay';


const Home = () => {
  const [data, setData] = useState([]);
  const [newsdata, setNewsdata] = useState([]);
  const [categories, setCategories] = useState(null);
  const [stringSearch, setStringSearch] = useState('');
  const [type, setType] = useState([]);
  var arrayName = [];

  useEffect(() => {
    let url = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase';

    let urlHome = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase';
    // if (stringSearch.length > 0) {
    //   urlHome += '?search=' + stringSearch;
    // }

    fetch(urlHome)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.map((item) => {
          if (!arrayName.includes(item.sophong)) {
            arrayName.push(item.sophong);
            console.log(" Nguyen Duy Hung Array" + arrayName.length);
          }
        });
        setType(arrayName);

        for (var i = 0; i < type.length; i++) {
          console.log("Get lol:" + type[i]);
        }
      }, []);

    let news_url = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/NewsDatabase';
    fetch(news_url)
      .then((response) => response.json())
      .then((newsdata) => {
        setNewsdata(newsdata);
      });

    let url_category = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase/?sophong=';

    fetch(url_category)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const clickView = () => {
    window.scrollTo(0, 0);
  }

  const clickDown = () => {
    window.scrollTo(0, 20000);
  }

  // const doSearch = () => {
  //   let url =
  //     'https://62b04a56e460b79df0423a2e.mockapi.io/aa/?search=' + product;

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProduct('');
  //       setData(data);
  //     });
  // };

  var arrayType = [];
  if (type != null) {
    arrayType = type.map((item) => (
      <div>
        <Type type={item} string={stringSearch} />
      </div>
    ));
    console.log("step........" + stringSearch);
  }


  return (
    <>
      {/* <!-- ======= Hero Section ======= --> */} 
      <section style={{ paddingTop: "7rem", }}>
        <div class="bg-holder" id="start" style={{
          backgroundImage: `url("https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571459.jpg&fm=jpg")`
        }}>
        </div>

        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-5 col-lg-6 order-0 order-md-1 text-end"></div>
            <div class="col-md-7 col-lg-6 text-md-start text-center py-4">
              <h1 class="hero-title">99Bros<br />of KITS<br />Vietnam </h1>
              <p class="mb-4 fw-medium">99Bros Bất động sản.<br class="d-none d-xl-block" />Dịch vụ bất động sản hàng đầu KITS<br class="d-none d-xl-block" />Xem ngay.</p>
              <div class="text-center text-md-start"> <a class="btn btn-primary btn-lg me-md-4 mb-3 mb-md-0 border-0 primary-btn-shadow" href="#viewnews" role="button">Xem tin</a>
                <div class="w-100 d-block d-md-none"></div>
                <Link to={"/new/"+"new"}  onClick={clickView}>
                  <a href="#start" role="button">
                    <span class="btn btn-success round-btn-lg rounded-circle me-3 danger-btn-shadow">
                 <i class="fas fa-paper-plane">
                 </i>
                 </span></a>
                 <span class="fw-medium" style={{ color: 'white' }}>Đăng tin</span>
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </section><!-- End Hero Section --> */}
      {/*
      <!-- ============================================--> */}

      <div className='container-fluid'>
        <div className='row'>

          <div className='col-lg-2 d-none d-lg-block'>
            <div className='sticky' style={{ marginTop: '40rem' }}>
              <div className='btn-group-vertical wrapper_sidebar bg-muted'>
                <button type="button" class="btn btn-light btn-md text-info" onClick={clickView} style={{ marginTop: '7rem', fontSize: '1.5rem' }} data-bs-toggle="tooltip" title="Up"><i class="fas fa-arrow-up"></i></button>
                <a href='#wrapper_xem_nhieu'><button type="button" className="shake-btn btn btn-light btn-md text-info" style={{ fontSize: '1.5rem' }} data-bs-toggle="tooltip" title="Popular"><i className="fab fa-hotjar"></i></button></a>
                <a href='#wrapper_phanloai'><button type="button" className="shake-btn btn btn-light btn-md text-info" style={{ fontSize: '1.5rem' }} data-bs-toggle="tooltip" title="Office"><i className="fas fa-hotel"></i></button></a>
                <a href='#wrapper_tintuc'><button type="button" className="shake-btn btn btn-light btn-md text-info" style={{ fontSize: '1.5rem' }} data-bs-toggle="tooltip" title="Hot news"><i className="far fa-newspaper"></i></button></a>
                <button type="button" class="btn btn-light btn-md text-info" onClick={clickDown} style={{ fontSize: '1.5rem' }} data-bs-toggle="tooltip" title="Down"><i className="fas fa-arrow-down"></i></button>
              </div>

              <div className='btn-group-vertical wrapper_sidebar bg-muted'>
                <button className="btn btn-md btn-outline-light">&#160;</button>
                <button className="btn btn-md btn-outline-light">&#160;</button>
                <button className="shake-btn btn btn-danger ms-2 rounded-circle" style={{ padding: '.5rem' }} type="button" data-bs-toggle="tooltip" title="Hotline">
                  <a href="https://chat.zalo.me/" target="_blank" className='text-white'><i class="fa fa-phone-alt"></i></a>
                </button>

                &#160;
                <button className="shake-btn btn btn-info ms-2 rounded-circle" style={{ padding: '.5rem' }} type="button" data-bs-toggle="tooltip" title="Facebook">
                  <a href="https://www.facebook.com/" target="_blank" className='text-white'><i class="fab fa-facebook-f"></i></a>
                </button>

                &#160;
                <button className="shake-btn btn btn-secondary ms-2 rounded-circle" style={{ padding: '.5rem' }} type="button" data-bs-toggle="tooltip" title="Twitter">
                  <a href="https://twitter.com/?lang=en" target="_blank" className='text-white'><i class="fab fa-twitter"></i></a>
                </button>
              </div>
            </div>

          </div>

          <div className='col-lg-8 col-md-12 col-sm-12'>
            <section class="pt-1 pt-md-9" id="service">

              <div class="container">
                {/* div search */}
                <div className='container mt-5' style={{ marginBottom: "20px" }}>
                  <form className="form-inline">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        size="100"
                        placeholder="Tìm kiếm"
                        id='inputSearch'
                        onChange={function () {
                          var text = inputSearch.value;
                          setStringSearch(text);
                        }}
                      />
                      <div className="input-group-btn">
                        <Link to={stringSearch===""?"/":'/search/' + stringSearch}>
                          <button
                            type="button"
                            className="btn btn-danger">
                            <i class="fas fa-search"></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
                {/* end of div search */}

                <div className="position-absolute z-index--1 end-0 d-none d-lg-block"></div>
                <div className='containter'>
                  <div className="mb-7 text-center pt-5 mt-5" >
                    <h5 className="text-secondary"><i className="fas fa-list"></i>&#160; DANH MỤC </h5>
                    <h4 className="fs-xl-7 fs-lg-4 fs-5 fw-bold font-cursive text-capitalize">Bất Động Sản Theo Khu Vực</h4>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 mb-6">
                      <Link to={'category/Hà%20Nội'}>
                        <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                          <div className="card-body p-xxl-5 p-4"> <img src="http://2.bp.blogspot.com/-BhNz0plAze4/VecqxSWuxyI/AAAAAAAADJM/9HROc8vSj4o/s400/vector-logohn-khuevancac.jpg" width="75" alt="Service" />
                            <h4 className="mb-3">Hà Nội</h4>
                            <p className="mb-0 fw-medium">Thành phố Hà Nội bao gồm cả ngoại thành và nội thành.</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-6">
                      <Link to={'category/Hồ%20Chí%20Minh'}>
                        <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                          <div className="card-body p-xxl-5 p-4"> <img src="https://i.imgur.com/TW9KwPd.png" width="75" alt="Service" />
                            <h4 className="mb-3">Hồ Chí Minh</h4>
                            <p className="mb-0 fw-medium">Thành phố Hồ Chí Minh và các khu vực lân cận.</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-6">
                      <Link to={'category/Đà%20Nẵng'}>
                        <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                          <div className="card-body p-xxl-5 p-4"> <img src="https://www.sos24h.vn/wwwroot/resources/upload/img/productcategory/8-2020/logo2.png" width="75" alt="Service" />
                            <h4 className="mb-3">Đà Nẵng</h4>
                            <p className="mb-0 fw-medium">Khu vực Thành Phố Đà Nẵng. Không bao gồm lân cận</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-6">
                      <Link to={'category/Khác'}>
                        <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                          <div className="card-body p-xxl-5 p-4"> <img src="https://i.pinimg.com/originals/95/b2/2f/95b22f2e0059265d3d9cdb0cce0a4a27.png" width="115" alt="Service" />
                            <h4 className="mb-3">Các Khu Vực Khác</h4>
                            <p className="mb-0 fw-medium">Các tỉnh thành khác trên khu vực Việt Nam</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- end of .container--> */}

            <div className='container' id='wrapper_xem_nhieu' style={{ backgroundColor: 'white', border: '1px solid white', borderRadius: '7px', }}>

              <div className="container" style={{ paddingTop: "1rem" }} id='viewnews'>
                <div className="mb-7 text-center" id='viewtrend'>
                  <h4 className="blink_me text-secondary"><i className="fas fa-fire"></i>&#160; XEM NHIỀU </h4>
                  <h3 className="fs-xl-7 fs-lg-4 fs-5 fw-bold font-cursive text-capitalize">TOP NHÀ PHỔ BIẾN</h3>
                </div>

                <section className="pt-5" id="destination" style={{ marginLeft: "2.5rem", }}>
                  <div className="container">
                    <div className='row'>
                      <UserHouseData data={data} />
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className='container' id='wrapper_phanloai' style={{ backgroundColor: 'white', border: '1px solid white', borderRadius: '7px', marginTop: '2.5rem' }}>

              <section className="pt-5" id="destination" style={{ marginLeft: "2.5rem", }}>
                <div className="container">
                  <div className='row'>
                    {arrayType}
                  </div>
                </div>
              </section>
            </div>


            <div className="container" id='wrapper_tintuc' style={{ backgroundColor: 'white', border: '1px solid white', borderRadius: '7px', marginTop: '2.5rem' }}>
              <div className="mb-7 text-center" id='viewtrend' style={{ marginTop: '1rem' }}>
                <h4 className="blink_me_green text-secondary"><i className="far fa-newspaper"></i>&#160;TIN TỨC </h4>
                <h3 className="fs-xl-7 fs-lg-4 fs-5 fw-bold font-cursive text-capitalize">Tin Hot Hôm Nay</h3>
              </div>

              <section className="pt-5" id="destination" style={{ marginLeft: "2.5rem", }}>
                <div className="container">
                  <NewsData newsdata={newsdata} />
                </div>
              </section>
            </div>

            <div className="mb-7 text-center mt-5">
              <h3 className="fs-xl-7 fs-lg-4 fs-5 fw-bold font-cursive text-capitalize">Các Đối Tác</h3>
            </div>

            <div className='container'>
              <Swiper className='ps-9'
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide><img src='https://www.leaderim.com/wp-content/uploads/2020/02/Partner-logo-2016.png' height={70} /></SwiperSlide>
                <SwiperSlide><img src='https://www.pngfind.com/pngs/m/683-6836144_cisco-partner-logo-cisco-partner-logo-vector-hd.png' height={70} /></SwiperSlide>
                <SwiperSlide><img src='https://thumbs.dreamstime.com/b/partner-logo-design-ai-supported-81271814.jpg' height={70} /></SwiperSlide>
                <SwiperSlide><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXfIvUx5yLhleD_vSTSP6NTY0HoYy1YwHVi6mnCNQ93UdwoKnTbO5EWDJAGyMk_loSIA&usqp=CAU' height={70} /></SwiperSlide>
                <SwiperSlide><img src='https://us.123rf.com/450wm/nakigitsune111/nakigitsune1111806/nakigitsune111180600285/103380642-the-logo-between-the-letter-s-and-letter-o-or-so-with-a-certain-distance-and-connected-by-orange-and.jpg?ver=6' height={70} /></SwiperSlide>
                <SwiperSlide><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-R9fTatXZD2vZGInGIbNCwGeL0KxF-HkkQYaH8_p3yuKbVVg7vw6iavRqRod9lkVf5lg&usqp=CAU' height={70} /></SwiperSlide>
                <SwiperSlide><img src='https://allvectorlogo.com/img/2016/10/sap-partner-logo.png' height={70} /></SwiperSlide>
                <SwiperSlide><img src='https://www.seekpng.com/png/detail/209-2091194_rheem-pro-partner-logo.png' height={70} /></SwiperSlide>
                <SwiperSlide><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjFJ4p95Vx4W9CWNldLVkcLmDwFl15SSGzjg&usqp=CAU' height={70} /></SwiperSlide>
                <SwiperSlide><img src='https://findlogovector.com/wp-content/uploads/2019/10/business-integration-partners-bip-logo-vector.png' height={70} /></SwiperSlide>
                <br />
              </Swiper>

              <br /> <br />
            </div>

          </div>

          <div className='col-lg-2 d-none d-lg-block'>
            <div style={{ marginTop: '59rem', paddingLeft: '5rem' }}>

              <img src='https://marketingbatdongsan.vn/wp-content/uploads/2020/08/Banner-300x600-Mahattan.png' width='130' height='400'></img>

              <img src='https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/258185782_493988712118760_7871080718877959268_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=1_aIoClntsUAX-u7MLt&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8pzJqT0zRvgPyjaPxWMIzhfV8mJe30JRsmeDKaQo4zjA&oe=62CD76B0'  className='mt-8' width='130' height='400's/>


            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
