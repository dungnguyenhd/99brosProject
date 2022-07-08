import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
const NoPage = () => {
  return (
    <>
      <div style={{ paddingTop: "8rem", }} class="container fluid" >
        <div class="col-6 text-justify row ">

          <h1 style={{ lineHeight: "70px" }}>Về 99BROS</h1>
          <p class="blockquote">
            99bros là công ty cung cấp dịch vụ thuê văn phòng chuyên nghiệp tại Hà Nội và TP. Hồ Chí Minh.
            Chúng tôi trợ giúp khách hàng doanh nghiệp tìm thuê văn phòng tại các tòa nhà hạng A,B,C nhanh chóng,
            tối ưu chi phí và phù hợp mục đích sử dụng!
          </p>
        </div>
        <div style={{ paddingTop: "3rem", }} >
          <h4>Dịch vụ tư vấn hoàn toàn miễn phí, nhận ngay:</h4>
        </div>
        <div>
          <ul>
            <li>Bản đề xuất văn phòng nhiều lựa chọn nhất chỉ sau một cuộc gọi</li>
            <li>Báo cáo so sánh chi tiết tất cả thông tin giá, phí và chính sách thuê</li>
            <li>Thông tin ưu & Nhược điểm của từng khu vực , từng toà nhà</li>
          </ul>
        </div>
        <div class="row" style={{ paddingTop: "2rem", }}>
          <div class="col md-4">
            <img class="rounded float-right" src='https://www.saga.vn/uploads/%E1%BA%A3nh%20b%C3%A0i%20vi%E1%BA%BFt%20790x399/Handshake.jpg' width="558px" height="350px" />
            <div style={{ paddingTop: "2rem", }} >
              <h3>Khách thuê</h3>
              <p>Tìm hiểu dịch vụ thuê văn phòng</p>
            </div>

          </div>
          <div class="col md-4">
            <img class="rounded float-left" src='https://znews-photo.zingcdn.me/w660/Uploaded/jaroin/2016_08_05/getintravel.jpg' width="558px" height="350px" />
            <div style={{ paddingTop: "2rem", }}>
              <h3>Chủ toà nhà</h3>
              <p>Trở thành đối tác cho thuê văn phòng</p>
            </div>
          </div>
        </div>

        <div class="mb-7 text-center mt-5" style={{ paddingTop: "2rem", }}>
          <h3 class="fs-xl-7 fs-lg-4 fs-5 fw-bold font-cursive text-capitalize">Các Đối Tác</h3>
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
    </>
  )
};

export default NoPage;
