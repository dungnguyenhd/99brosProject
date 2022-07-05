import React from 'react';


const NoPage = () => {
  return (
    <>
      <div style={{ paddingTop: "7rem", }} class="container fluid">
        <div class="col-6 text-justify " >
          <h1 style={{ lineHeight: "70px" }}>Về 99BROS</h1>
          <p class="blockquote">
            99bros là công ty cung cấp dịch vụ thuê văn phòng chuyên nghiệp tại Hà Nội và TP. Hồ Chí Minh.
            Chúng tôi trợ giúp khách hàng doanh nghiệp tìm thuê văn phòng tại các tòa nhà hạng A,B,C nhanh chóng,
            tối ưu chi phí và phù hợp mục đích sử dụng!
          </p>
        </div>
        <div>
          <h4>Dịch vụ tư vấn hoàn toàn miễn phí, nhận ngay:</h4>
        </div>
        <div>
          <ul>
            <li>Bản đề xuất văn phòng nhiều lựa chọn nhất chỉ sau một cuộc gọi</li>
            <li>Báo cáo so sánh chi tiết tất cả thông tin giá, phí và chính sách thuê</li>
            <li>Thông tin ưu & Nhược điểm của từng khu vực , từng toà nhà</li>
          </ul>
        </div>
        <div class="row">
          <div class="col md-4">
            <img class="rounded float-right" src='https://game8.vn/media/202204/files/bind-from-air.png' width="558px" height="350px" />
            <div>
              <h3>Khách thuê</h3>
              <p>Tìm hiểu dịch vụ thuê văn phòng</p>
            </div>

          </div>
          <div class="col md-4">
            <img class="rounded float-left" src='https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com//var/app/current/web/app/uploads/2021/05/Dust2-boxes.jpg' width="558px" height="350px" />
            <div>
              <h3>Chủ toà nhà</h3>
              <p>Trở thành đối tác cho thuê văn phòng</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default NoPage;
