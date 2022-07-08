import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import UserPhoneData from '../component/dataUser';
import { right } from '@popperjs/core';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';





const Buy = () => {
  const params = useParams();
  const [phone, setPhone] = useState([]);
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    console.log('user use effect!!');

    let url = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase/' + params.id;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        /*        var date = new Date(data.rd);
               data.rd = date.toISOString().slice(0, 10); */
        setPhone(data);
      });

    let url_relate = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase/';
    fetch(url_relate)
      .then((response) => response.json())
      .then((data) => {
        setData(data);

      });

    let url_detail = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/Detail/' + params.id;

    console.log(url_detail);
    fetch(url_detail)
      .then((response) => response.json())
      .then((data) => {
        /*        var date = new Date(data.rd);
               data.rd = date.toISOString().slice(0, 10); */
        setDetail(data);
      });

  }, []);


  const clickView = () => {
    window.scrollTo(0, 0);
  }

  const clickDown = () => {
    window.scrollTo(0, 20000);
  }


  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  return (
    <>

      {phone != null ? (
        <>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-sm-1 col-md-1 col-lg-2 d-none d-lg-block ' style={{ marginTop: '7rem' }}>

                <div className='sticky' >
                  <div className='btn-group-vertical wrapper_sidebar bg-muted'>
                    <button type="button" class="btn btn-light btn-md text-info" onClick={clickView} style={{ marginTop: '7rem', fontSize: '1.5rem' }} data-bs-toggle="tooltip" title="Up"><i class="fas fa-arrow-up"></i></button>
                    <a href='#warrper_thongtintoanha'><button type="button" class="shake-btn btn btn-light btn-md text-info" style={{ fontSize: '1.5rem' }} data-bs-toggle="tooltip" title="Popular"><i class="fa fa-balance-scale"></i></button></a>
                    <a href='#wrapper_chitietdichvu'><button type="button" class="shake-btn btn btn-light btn-md text-info" style={{ fontSize: '1.5rem' }} data-bs-toggle="tooltip" title="Office"><i class="fas fa-hotel"></i></button></a>
                    <a href='#wrapper_mota'><button type="button" class="shake-btn btn btn-light btn-md text-info" style={{ fontSize: '1.5rem' }} data-bs-toggle="tooltip" title="Hot news"><i class="far fa-newspaper"></i></button></a>
                    <button type="button" class="btn btn-light btn-md text-info" onClick={clickDown} style={{ fontSize: '1.5rem' }} data-bs-toggle="tooltip" title="Down"><i class="fas fa-arrow-down"></i></button>
                  </div>

                  <div className='btn-group-vertical wrapper_sidebar bg-muted'>
                    <button class="btn btn-md btn-outline-light">&#160;</button>
                    <button class="btn btn-md btn-outline-light">&#160;</button>
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
                <img src='http://taxiadvertisingvn.com/wp-content/uploads/2021/07/roadshowqc.gif' width='200px' height='1000px'></img>
                <img style={{ marginTop: "2rem" }} src='https://tpc.googlesyndication.com/simgad/12332553322558091477?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qk9RWMQiV8oqgqUPJWnpKtz2w4c9w' width='200px' height='950px'></img>

                <img style={{ marginTop: '5rem' }} src='http://taxiadvertisingvn.com/wp-content/uploads/2021/07/roadshowqc.gif' width='200px' height='950px'></img>
              </div>
              <div className='col-sm-11 col-md-10 col-lg-8 '>
                <div className="container text-center " style={{ paddingTop: "7rem", }}>

                  <div className="container" style={{ color: "rgba(240, 110, 62, 0.2)", paddingTop: "5rem", backgroundImage: `url("https://www.creativosonline.org/wp-content/uploads/2017/08/gifs-antiguos.gif")` }}><img src='https://i.imgur.com/CkZJbLx.png' style={{ paddingBottom: '5rem', }} width='200px'></img></div>

                  <div className="row md-12" style={{ paddingTop: "3rem", }}>
                    {/* ----------------------------------------------------------------------------------- */}
                    <div className='container row md-12' id='warrper_thongtintoanha' style={{ margin: "auto" }}>
                      <h1 className="mt-4"> <b>Thông tin tòa nhà</b> </h1>
                    </div>
                    <div className='container-fluid row' style={{ marginTop: "auto", width: "100%" }}>
                      <div className="col-md-4 col-sm-12 col-4" style={{ paddingTop: "4rem", width: "50%" }}>
                        <img src={phone.anh} style={{ width: "95%", height: "95%", paddingTop: "1rem" }} class="rounded adImage" />
                      </div>
                      <div className="row col-sm-12 col-md-8 col-8" style={{ paddingTop: "4rem", width: "50%" }}>
                        <div className='col-6 col-sm-6' style={{ margin: "auto" }}>
                          <img src={detail.anh1} width="100%" class="rounded adImage" />
                          <img src={detail.anh2} width="100%" class="rounded adImage" style={{ marginTop: "2rem", padding: '0' }} />
                        </div>
                        <div className='col-6 col-sm-6' style={{ margin: "auto" }}>
                          <img src={detail.anh3} width="100%" class="rounded adImage" />
                          <img src={detail.anh4} width="100%" class="rounded adImage" style={{ marginTop: "2rem" }} />
                        </div>
                      </div>
                    </div>
                    <div class=" " style={{ paddingTop: "4rem" }}>
                      <table style={{ margin: "auto", width: "100%" }}>
                        <ul class="list-group">
                          {/* <li>
      <td className="h4">Chủ đầu tư: </td>
      <td className="h5"> {phone.name}</td>
    </li>

    <li>
      <td className="h4">Đơn vị phân phối:</td>
      <td className="h5"> ${phone.price}</td>
    </li> */}

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            <td className="h4" style={{ marginRight: "18rem" }}><i class="fa fa-chart-area"></i>  &#160; Khu vực:</td>
                            <span class="badge rounded-pill"><td className="h5"> {phone.khuvuc}</td></span>
                          </li>

                          <li class="list-group-item  d-flex justify-content-between align-items-center">
                            <td className="h4" style={{ marginRight: "18rem" }}><i class="fa fa-house-user"></i>  &#160; Diện tích:</td>
                            <span class="badge rounded-pill"><td className="h5"> {phone.dientich}</td></span>
                          </li>

                          <li class="list-group-item  d-flex justify-content-between align-items-center">
                            <td className="h4"> <i class="fa fa-map-pin"></i>  &#160;  &#160;  &#160;Vị trí:</td>
                            <span class="badge rounded-pill"><td className="h5"> {phone.diachi}</td></span>
                          </li>

                          <li class="list-group-item  d-flex justify-content-between align-items-center">
                            <td className="h4"><i class="fa fa-signature"></i> &#160;  &#160;Tên nhà:</td>
                            <span class="badge rounded-pill"> <td className="h5"> {phone.tennha} </td></span>
                          </li>

                          <li class="list-group-item  d-flex justify-content-between align-items-center">
                            <td className="h4"><i class="fa fa-list-ol"></i> &#160;  &#160;Loại hình:</td>
                            <span class="badge rounded-pill"> <td className="h5"> {phone.sophong}</td></span>
                          </li>

                          <li class="list-group-item  d-flex justify-content-between align-items-center">
                            <td className="h4"><i class="fa fa-list-ol"></i> &#160;  &#160;Số lượng:</td>
                            <span class="badge rounded-pill"> <td className="h5"> {phone.phaply}</td></span>
                          </li>

                          <li class="list-group-item  d-flex justify-content-between align-items-center">
                            <td className="h4"><i class="fa fa-barcode"></i> &#160;  &#160;Mã dự án:</td>
                            <span class="badge rounded-pill"><td className="h5"> {phone.maduan}</td></span>
                          </li>


                          <li class="list-group-item  d-flex justify-content-between align-items-center">
                            <td className="h4"><i class="fa fa-mobile-alt"></i> &#160; &#160;Liên hệ:</td>
                            <span class="badge rounded-pill"><td className="h5"> {phone.lienhe}</td></span>
                          </li>

                          <li class="list-group-item  d-flex justify-content-between align-items-center">
                            <td className="h4"> <i class="fa fa-dollar-sign"></i> &#160; Mức giá:</td>
                            <span class="badge rounded-pill"><td className="h5"> {phone.mucgia}</td></span>
                          </li>


                        </ul>
                      </table>

                    </div>
                    <div className='row' style={{ marginTop: "2rem" }}>
                      <div className='container row md-12' style={{ margin: "auto" }} id="wrapper_chitietdichvu">
                        <h1 className="mt-4"> <b>Chi tiết các dịch vụ</b> </h1>
                      </div>
                      <div class=" " style={{ paddingTop: "4rem" }}>
                        <table style={{ margin: "auto", width: "100%" }}>
                          <ul class="list-group">

                            <li class="list-group-item d-flex justify-content-between align-items-center">
                              <td className="h4" style={{ marginRight: "18rem" }}><img class="img-logo" src="https://maisonoffice.vn/wp-content/themes/maisonreal/assets/images/svg/do-xe.svg" alt="Maison Office" width="14" height="25" />  &#160; Bãi xe:</td>
                              <span class="badge rounded-pill"><td className="h5"> {detail.baidoxe}</td></span>
                            </li>

                            <li class="list-group-item d-flex justify-content-between align-items-center">
                              <td className="h4" style={{ marginRight: "18rem" }}><img class="img-logo" src="https://maisonoffice.vn/wp-content/themes/maisonreal/assets/images/svg/do-oto.svg" alt="Maison Office" width="25" height="16" />  &#160; Giá gửi xe oto:</td>
                              <span class="badge rounded-pill"><td className="h5"> {detail.giadooto}</td></span>
                            </li>

                            <li class="list-group-item d-flex justify-content-between align-items-center">
                              <td className="h4" style={{ marginRight: "18rem" }}><img class="img-logo" src="https://maisonoffice.vn/wp-content/themes/maisonreal/assets/images/svg/do-xe.svg" alt="Maison Office" width="14" height="25" />  &#160; Giá gửi xe máy:</td>
                              <span class="badge rounded-pill"><td className="h5"> {detail.giadoxemay}</td></span>
                            </li>


                            <li class="list-group-item d-flex justify-content-between align-items-center">
                              <td className="h4" style={{ marginRight: "18rem" }}><img class="img-logo" src="https://maisonoffice.vn/wp-content/themes/maisonreal/assets/images/svg/gio-lam-viec.svg" alt="Maison Office" width="25" height="25" />  &#160; Giờ làm việc:</td>
                              <span class="badge rounded-pill"><td className="h5"> {detail.giolamviec}</td></span>
                            </li>

                            <li class="list-group-item d-flex justify-content-between align-items-center">
                              <td className="h4" style={{ marginRight: "18rem" }}><img class="img-logo" src="https://maisonoffice.vn/wp-content/themes/maisonreal/assets/images/svg/thang-may.svg" alt="Maison Office" width="26" height="26" />  &#160; Thang máy:</td>
                              <span class="badge rounded-pill"><td className="h5"> {detail.thangmay}</td></span>
                            </li>

                            <li class="list-group-item d-flex justify-content-between align-items-center">
                              <td className="h4" style={{ marginRight: "18rem" }}><img class="img-logo" src="https://maisonoffice.vn/wp-content/themes/maisonreal/assets/images/svg/dien-du-phong.svg" alt="Maison Office" width="16" height="22" />  &#160; Điện dự phòng:</td>
                              <span class="badge rounded-pill"><td className="h5"> {detail.dienduphong}</td></span>
                            </li>

                            <li class="list-group-item d-flex justify-content-between align-items-center">
                              <td className="h4" style={{ marginRight: "18rem" }}><img class="img-logo" src="https://maisonoffice.vn/wp-content/themes/maisonreal/assets/images/svg/phi-dich-vu.svg" alt="Maison Office" width="18" height="25" />  &#160;Phí dịch vụ:</td>
                              <span class="badge rounded-pill"><td className="h5"> {detail.phidichvu}</td></span>
                            </li>


                          </ul>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* -------------------------------------------------------------------------------------------------------*/}
                  <div className="container-fluid">
                    <div className="row ms-5 pt-5 me-5" style={{ marginTop: "5rem", }}>
                      <div className='container row md-12' style={{ margin: "auto" }} id="warrper_mota">
                        <h1 className="mt-4" style={{ paddingBottom: "5rem", paddingtop: "1rem" }}> <b>Mô tả</b> </h1>
                      </div>
                      <div className='container row'>
                        <div className='col-sm-8 col-8 col-md-8'>
                          <span style={{ paddingRight: "auto" }}>
                            {phone.mota}
                          </span>
                        </div>

                        <div className="col-md-4 col-sm-4 col-4" style={{ marginRight: "auto", paddingBottom: "auto", left: "auto" }}>
                          <img
                            src={detail.anh5}
                            width='100%'
                            class="img-thumbnail" ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ------------------------------------------------------------------------------------------------------------ */}
                  {/* <span>Vị trí trên map</span>
    <div id="dia_diem" class="section-building section-extra section-map">
      <div class="container"><h3 class="heading">Địa điểm</h3>
      <div class="map-content">
        <p>
          <iframe loading="lazy" style="border: 0;" src="https://www.google.com/maps/place/B%C3%B2+T%C6%A1+Qu%C3%A1n+M%E1%BB%99c+Nguy%C3%AAn+H%E1%BB%93ng/@21.017234,105.8092314,17z/data=!3m1!4b1!4m5!3m4!1s0x3135abd73ed8ab63:0xb6387b62a439553f!8m2!3d21.0172311!4d105.8114162?hl=vi-VN" width="754" height="350" frameborder="0" allowfullscreen="allowfullscreen">
            <span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">&#65279;</span></iframe></p>
</div>
</div>
</div> */}
                  {/* ------------------------------------------------------------------------------------------------------------ */}
                  <div className='container-fluid'>
                    <div className="row ms-5 pt-5 me-5">
                      <h1 className="mt-4"><b> Lợi ích</b></h1>

                      <div className="col-md-4 col-sm-4  ps-5 col-4 text-justify" style={{ paddingTop: "2rem", }}>
                        <img
                          src={phone.anh}
                          width="100%"
                          class="rounded adImage" />
                        <br />
                        <span class="blockquote">
                          <b> Thông tin thêm</b>
                          <br />
                          {detail.thongtinthem}
                        </span>
                      </div>
                      <div className="col-md-4 col-sm-4 col-4  ps-5 text-justify" style={{ paddingTop: "2rem", }}>
                        <img
                          src={detail.anh7}
                          width="100%"
                          class="rounded adImage" />
                        <br />
                        <span class="blockquote">
                          <b> Vị trí toà nhà</b>
                          <br />
                          {detail.vitriphongthuy}
                        </span>
                      </div>
                      <div className="col-md-4 col-sm-4 col-4  ps-5 text-justify" style={{ paddingTop: "2rem", }}>
                        <img
                          src={detail.anh8}
                          width="100%"
                          class="rounded adImage" />
                        <br />
                        <span class="blockquote" >
                          <b> Quy mô tòa nhà</b>
                          <br />
                          {detail.quymo}
                        </span>
                      </div>
                    </div>
                  </div>





                  <div className=''>

                    <div class="building-ttnb" style={{marginTop: '20rem'}}>

                      <span class="ttnb-overlay"></span>

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
                                            onSlideChange={() => console.log('slide change')}
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

                  </div>




                </div>



              </div>

              <div className='hidden-sm col-md-1 col-lg-2 d-none d-lg-block ' style={{ marginTop: '7rem', padding: '0px' }}>
                <img src='http://taxiadvertisingvn.com/wp-content/uploads/2021/07/roadshowqc.gif' width='200px' height='1000px'></img>
                <div className='stickyBuy col-md-4 col-md-6 mt-5 ' >

                  <img href="https://chat.zalo.me/" target="_blank" src='https://thumbs.gfycat.com/TatteredAgonizingHuman-size_restricted.gif' width='250px'></img>

                </div>
                <img src='http://taxiadvertisingvn.com/wp-content/uploads/2021/07/roadshowqc.gif' width='200px' height='1000px'></img>

                <div className='stickyBuy col-md-4 col-md-6 mt-5 ' >

                  <img src='https://thumbs.gfycat.com/TatteredAgonizingHuman-size_restricted.gif' width='250px'></img>

                </div>
              </div>

              {/*   <div className='col-lg-1 d-none d-lg-block d-md-block'></div> */}
            </div>
          </div></>
      ) : (
        <div className="spinner-border text-primary mt-3 ms-6"> </div>
      )}



    </>
  );
};

export default Buy;
