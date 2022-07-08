import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import UserPhoneData from '../component/dataUser';
import { right } from '@popperjs/core';
import { Link } from 'react-router-dom';
import './/SideBar.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';




const AddNew = () => {
    const params = useParams();
    const [phone, setPhone] = useState([]);
    const [data, setData] = useState([]);
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        console.log('Add new!!!!!!!!!!!!!!!!!');

        if (params.id != 'new') {
            let url = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase/' + params.id;

            console.log(url);
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    var date = new Date(data.rd);
                    data.rd = date.toISOString().slice(0, 10);
                    setPhone(data);
                });
        } else {
            let initData = {};
            initData.home = {};
            setPhone(initData);
        }

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

    const saveData = () => {
        let method;
        let id = '';
        if (params.id != 'new') {
            method = 'PUT';
            id = params.id;
        } else {
            method = 'POST';
        }

        let url = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase/' + id;

        let url_detail = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/Detail/' + id;


        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(phone),
        })
            .then((response) => response.json())
            .then((data) => {
                // var date = new Date(data.dob);
                // data.dob = date.getTime();
                setPhone(data);
                console.log('Success:', data);

            })
            .catch((error) => {
                console.error('Error:', error);
            });

        fetch(url_detail, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(detail),
        })
            .then((response) => response.json())
            .then((data) => {
                // var date = new Date(data.dob);
                // data.dob = date.getTime();
                setDetail(data);
                console.log('Success:', data);

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };




    var str2bool = (value) => {
        if (value && typeof value === 'string') {
            if (value.toLowerCase() === 'true') return true;
            if (value.toLowerCase() === 'false') return false;
        }
        return value;
    };

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let data = { ...phone };
        let dataDetail = { ...detail };
        dataDetail[name] = value;
        data[name] = value;
        setPhone(data);
        setDetail(data);
    };



    function FileUploadPage() {
        const [selectedFile, setSelectedFile] = useState();
        const [isFilePicked, setIsFilePicked] = useState(false);

        const changeHandler = (event) => {
            setSelectedFile(event.target.files[0]);
            setIsSelected(true);
        };

        const handleSubmission = () => {
        };

        return (
            <div>
                <input type="file" name="file" onChange={changeHandler} />
                <div>
                    <button onClick={handleSubmission}>Submit</button>
                </div>
            </div>
        )
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
                                <img src='https://tpc.googlesyndication.com/simgad/12332553322558091477?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qk9RWMQiV8oqgqUPJWnpKtz2w4c9w' width='200px' height='950px'></img>

                                <img style={{ marginTop: '5rem' }} src='http://taxiadvertisingvn.com/wp-content/uploads/2021/07/roadshowqc.gif' width='200px' height='950px'></img>
                            </div>
                            <div className='col-sm-11 col-md-10 col-lg-8 '>
                                <div className="container text-center " style={{ paddingTop: "7rem", }}>

                                    <div className="container" style={{ color: "rgba(240, 110, 62, 0.2)", paddingTop: "5rem", backgroundImage: `url("https://www.creativosonline.org/wp-content/uploads/2017/08/gifs-antiguos.gif")` }}><img src='https://i.imgur.com/CkZJbLx.png' style={{ paddingBottom: '5rem', }} width='200px'></img></div>

                                    <div className="row md-12" style={{ paddingTop: "3rem", }}>
                                        {/* ----------------------------------------------------------------------------------- */}
                                        <div className='container row md-12' style={{ margin: "auto" }}>
                                            <h1 className="mt-4"> <b>Thông tin tòa nhà</b> </h1>
                                        </div>
                                        <div className='container-fluid row' style={{ marginTop: "auto", width: "100%" }}>
                                            <div className="col-md-4 col-sm-12 col-4" style={{ paddingTop: "4rem", width: "50%" }}>
                                                <img src="https://printgo.vn/uploads/media/763962/dinh-dang-file-thiet-ke-png-1024x1012_1566374045.jpg" style={{ width: "95%", height: "95%", paddingTop: "1rem" }} class="rounded adImage" />
                                            </div>
                                            <div className="row col-sm-12 col-md-8 col-8" style={{ paddingTop: "4rem", width: "50%" }}>
                                                <div className='col-6 col-sm-6' style={{ margin: "auto" }}>
                                                    <img src="https://printgo.vn/uploads/media/763962/dinh-dang-file-thiet-ke-png-1024x1012_1566374045.jpg" width="100%" class="rounded adImage" />
                                                    <img src="https://printgo.vn/uploads/media/763962/dinh-dang-file-thiet-ke-png-1024x1012_1566374045.jpg" width="100%" class="rounded adImage" style={{ marginTop: "2rem", padding: '0' }} />
                                                </div>
                                                <div className='col-6 col-sm-6' style={{ margin: "auto" }}>
                                                    <img src="https://printgo.vn/uploads/media/763962/dinh-dang-file-thiet-ke-png-1024x1012_1566374045.jpg" width="100%" class="rounded adImage" />
                                                    <img src="https://printgo.vn/uploads/media/763962/dinh-dang-file-thiet-ke-png-1024x1012_1566374045.jpg" width="100%" class="rounded adImage" style={{ marginTop: "2rem" }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" " style={{ paddingTop: "4rem" }}>
                                            <table style={{ margin: "auto", width: "100%" }}>
                                                <ul class="list-group">


                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <td className="h4" style={{ marginRight: "18rem" }}><i class="fa fa-chart-area"></i>  &#160; Khu vực:</td>


                                                        <input
                                                            className="h5"
                                                            value={phone.khuvuc}
                                                            name="type"
                                                            onChange={(e) => handleChange(e)}>
                                                        </input>


                                                    </li>

                                                    <li class="list-group-item  d-flex justify-content-between align-items-center">
                                                        <td className="h4" style={{ marginRight: "18rem" }}><i class="fa fa-house-user"></i>  &#160; Diện tích:</td>
                                                        <input
                                                            className="h5"
                                                            value={phone.dientich}
                                                            name="type"
                                                            onChange={(e) => handleChange(e)}>
                                                        </input>
                                                    </li>

                                                    <li class="list-group-item  d-flex justify-content-between align-items-center">
                                                        <td className="h4"> <i class="fa fa-map-pin"></i>  &#160;  &#160;  &#160;Vị trí:</td>
                                                        <input
                                                            className="h5"
                                                            value={phone.diachi}
                                                            name="type"
                                                            onChange={(e) => handleChange(e)}>
                                                        </input>
                                                    </li>

                                                    <li class="list-group-item  d-flex justify-content-between align-items-center">
                                                        <td className="h4"><i class="fa fa-signature"></i> &#160;  &#160;Tên nhà:</td>
                                                        <input
                                                            className="h5"
                                                            value={phone.tennha}
                                                            name="type"
                                                            onChange={(e) => handleChange(e)}>
                                                        </input>
                                                    </li>

                                                    <li class="list-group-item  d-flex justify-content-between align-items-center">
                                                        <td className="h4"><i class="fa fa-list-ol"></i> &#160;  &#160;Loại hình:</td>
                                                        <input
                                                            className="h5"
                                                            value={phone.sophong}
                                                            name="type"
                                                            onChange={(e) => handleChange(e)}>
                                                        </input>
                                                    </li>

                                                    <li class="list-group-item  d-flex justify-content-between align-items-center">
                                                        <td className="h4"><i class="fa fa-list-ol"></i> &#160;  &#160;Số lượng:</td>
                                                        <input
                                                            className="h5"
                                                            value={phone.phaply}
                                                            name="type"
                                                            onChange={(e) => handleChange(e)}>
                                                        </input>
                                                    </li>

                                                    <li class="list-group-item  d-flex justify-content-between align-items-center">
                                                        <td className="h4"><i class="fa fa-barcode"></i> &#160;  &#160;Mã dự án:</td>
                                                        <input
                                                            className="h5"
                                                            value={phone.maduan}
                                                            name="type"
                                                            onChange={(e) => handleChange(e)}>
                                                        </input>
                                                    </li>


                                                    <li class="list-group-item  d-flex justify-content-between align-items-center">
                                                        <td className="h4"><i class="fa fa-mobile-alt"></i> &#160; &#160;Liên hệ:</td>
                                                        <input
                                                            className="h5"
                                                            value={phone.lienhe}
                                                            name="type"
                                                            onChange={(e) => handleChange(e)}>
                                                        </input>
                                                    </li>

                                                    <li class="list-group-item  d-flex justify-content-between align-items-center">
                                                        <td className="h4"> <i class="fa fa-dollar-sign"></i> &#160; Mức giá:</td>
                                                        <input
                                                            className="h5"
                                                            value={phone.mucgia}
                                                            name="type"
                                                            onChange={(e) => handleChange(e)}>
                                                        </input>
                                                    </li>


                                                </ul>
                                            </table>

                                        </div>
                                        <div className='row' style={{ marginTop: "2rem" }}>
                                            <div className='container row md-12' style={{ margin: "auto" }}>
                                                <h1 className="mt-4"> <b>Chi tiết các dịch vụ</b> </h1>
                                            </div>
                                            <div class=" " style={{ paddingTop: "4rem" }}>
                                                <table style={{ margin: "auto", width: "100%" }}>
                                                    <ul class="list-group">

                                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                                            <td className="h4" style={{ marginRight: "18rem" }}><img class="img-logo" src="https://maisonoffice.vn/wp-content/themes/maisonreal/assets/images/svg/do-xe.svg" alt="Maison Office" width="14" height="25" />  &#160; Bãi xe:</td>
                                                            <input
                                                                className="number"
                                                                value={detail.baidoxe}
                                                                name="type"
                                                                onChange={(e) => handleChange(e)}>
                                                            </input>
                                                        </li>

                                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                                            <td className="h4" style={{ marginRight: "18rem" }}><img class="img-logo" src="https://maisonoffice.vn/wp-content/themes/maisonreal/assets/images/svg/do-oto.svg" alt="Maison Office" width="25" height="16" />  &#160; Giá gửi xe oto:</td>
                                                            <input
                                                                className="number"
                                                                value={detail.giadooto}
                                                                name="type"
                                                                onChange={(e) => handleChange(e)}>
                                                            </input>
                                                        </li>

                                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                                            <td className="h4" style={{ marginRight: "18rem" }}><img class="img-logo" src="https://maisonoffice.vn/wp-content/themes/maisonreal/assets/images/svg/do-xe.svg" alt="Maison Office" width="14" height="25" />  &#160; Giá gửi xe máy:</td>
                                                            <input
                                                                className="number"
                                                                value={detail.giadoxemay}
                                                                name="type"
                                                                onChange={(e) => handleChange(e)}>
                                                            </input>
                                                        </li>


                                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                                            <td className="h4" style={{ marginRight: "18rem" }}><img class="img-logo" src="https://maisonoffice.vn/wp-content/themes/maisonreal/assets/images/svg/gio-lam-viec.svg" alt="Maison Office" width="25" height="25" />  &#160; Giờ làm việc:</td>
                                                            <input
                                                                className="time"
                                                                value={detail.giolamviec}
                                                                name="type"
                                                                onChange={(e) => handleChange(e)}>
                                                            </input>
                                                        </li>

                                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                                            <td className="h4" style={{ marginRight: "18rem" }}><img class="img-logo" src="https://maisonoffice.vn/wp-content/themes/maisonreal/assets/images/svg/thang-may.svg" alt="Maison Office" width="26" height="26" />  &#160; Thang máy:</td>
                                                            <input
                                                                className="number"
                                                                value={detail.thangmay}
                                                                name="type"
                                                                onChange={(e) => handleChange(e)}>
                                                            </input>
                                                        </li>

                                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                                            <td className="h4" style={{ marginRight: "18rem" }}><img class="img-logo" src="https://maisonoffice.vn/wp-content/themes/maisonreal/assets/images/svg/dien-du-phong.svg" alt="Maison Office" width="16" height="22" />  &#160; Điện dự phòng:</td>
                                                            <input
                                                                className="number"
                                                                value={detail.dienduphong}
                                                                name="type"
                                                                onChange={(e) => handleChange(e)}>
                                                            </input>
                                                        </li>

                                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                                            <td className="h4" style={{ marginRight: "18rem" }}><img class="img-logo" src="https://maisonoffice.vn/wp-content/themes/maisonreal/assets/images/svg/phi-dich-vu.svg" alt="Maison Office" width="18" height="25" />  &#160;Phí dịch vụ:</td>
                                                            <input
                                                                className="number"
                                                                value={detail.phidichvu}
                                                                name="type"
                                                                onChange={(e) => handleChange(e)}>
                                                            </input>
                                                        </li>


                                                    </ul>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    {/* -------------------------------------------------------------------------------------------------------*/}
                                    <div className="container-fluid">
                                        <div className="row ms-5 pt-5 me-5" style={{ marginTop: "5rem", }}>
                                            <div className='container row md-12' style={{ margin: "auto" }}>
                                                <h1 className="mt-4" style={{ paddingBottom: "5rem", paddingtop: "1rem" }}> <b>Mô tả</b> </h1>
                                            </div>
                                            <div className='container row'>
                                                <div className='col-sm-8 col-8 col-md-8 form-floating'>
                                                    <textarea style={{ paddingRight: "auto", width: "100%" }} rows="10" placeholder="Nhập nội dung tại đây" >
                                                        <input
                                                            className="text-area"
                                                            value={phone.mota}
                                                            name="type"
                                                            onChange={(e) => handleChange(e)}>
                                                        </input>
                                                    </textarea>
                                                </div>

                                                <div className="col-md-4 col-sm-4 col-4" style={{ marginRight: "auto", paddingBottom: "auto", left: "auto" }}>
                                                    <img src="https://printgo.vn/uploads/media/763962/dinh-dang-file-thiet-ke-png-1024x1012_1566374045.jpg" width="100%" class="rounded adImage" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ------------------------------------------------------------------------------------------------------------ */}
                                    <div className='container-fluid'>
                                        <div className="row ms-5 pt-5 me-5">
                                            <h1 className="mt-4"><b> Lợi ích</b></h1>

                                            <div className="col-md-4 col-sm-4  ps-5 col-4 text-justify" style={{ paddingTop: "2rem", }}>
                                                <img
                                                    src="https://printgo.vn/uploads/media/763962/dinh-dang-file-thiet-ke-png-1024x1012_1566374045.jpg" width="100%" class="rounded adImage"
                                                />
                                                <br />
                                                <span class="blockquote">
                                                    <b> Thông tin thêm</b>
                                                    <br />
                                                    <textarea style={{ paddingRight: "auto", width: "100%" }} rows="10" placeholder="Nhập nội dung tại đây" >
                                                        <input
                                                            className="text-area"
                                                            value={phone.thongtinthem}
                                                            name="type"
                                                            onChange={(e) => handleChange(e)}>
                                                        </input>
                                                    </textarea>
                                                </span>
                                            </div>
                                            <div className="col-md-4 col-sm-4 col-4  ps-5 text-justify" style={{ paddingTop: "2rem", }}>
                                                <img
                                                    src="https://printgo.vn/uploads/media/763962/dinh-dang-file-thiet-ke-png-1024x1012_1566374045.jpg" width="100%" class="rounded adImage" />
                                                <br />
                                                <span class="blockquote">
                                                    <b> Vị trí phong thủy</b>
                                                    <br />
                                                    <textarea style={{ paddingRight: "auto", width: "100%" }} rows="10" placeholder="Nhập nội dung tại đây" >
                                                        <input
                                                            className="text-area"
                                                            value={phone.vitriphongthuy}
                                                            name="type"
                                                            onChange={(e) => handleChange(e)}>
                                                        </input>
                                                    </textarea>
                                                </span>
                                            </div>
                                            <div className="col-md-4 col-sm-4 col-4  ps-5 text-justify" style={{ paddingTop: "2rem", }}>
                                                <img
                                                    src="https://printgo.vn/uploads/media/763962/dinh-dang-file-thiet-ke-png-1024x1012_1566374045.jpg" width="100%" class="rounded adImage" />
                                                <br />
                                                <span class="blockquote" >
                                                    <b> Quy mô tòa nhà</b>
                                                    <br />
                                                    <textarea style={{ paddingRight: "auto", width: "100%" }} rows="10" placeholder="Nhập nội dung tại đây" >
                                                        <input
                                                            className="text-area"
                                                            value={phone.quymo}
                                                            name="type"
                                                            onChange={(e) => handleChange(e)}>
                                                        </input>
                                                    </textarea>
                                                </span>
                                            </div>
                                        </div>
                                    </div>



                                    <div className='' style={{marginTop: "4rem"}}>

                                        <div class="building-ttnb" >

                                            <span class="ttnb-overlay"></span>
                                            <button
                                                className="btn bg-primary text-light"
                                                onClick={saveData}
                                            >
                                                Save
                                            </button>
                                            &#160;&#160;
                                            <Link to="/">
                                                <button
                                                    className="btn bg-secondary text-light"
                                                    onClick={() => navigate('/', { replace: true })}
                                                >
                                                    Cancle
                                                </button>
                                            </Link>
                                        </div>

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

                            <div className='hidden-sm col-md-1 col-lg-2 d-none d-lg-block ' style={{ marginTop: '7rem', padding: '0px' }}>
                                <img src='http://taxiadvertisingvn.com/wp-content/uploads/2021/07/roadshowqc.gif' width='200px' height='1000px'></img>
                                <div className='stickyBuy col-md-4 col-md-6 mt-5 ' >

                                    <img src='https://thumbs.gfycat.com/TatteredAgonizingHuman-size_restricted.gif' width='250px'></img>

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

export default AddNew;
