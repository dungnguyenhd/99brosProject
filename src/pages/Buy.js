import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import UserPhoneData from '../component/dataUser';

const Buy = () => {
  const params = useParams();
  const [phone, setPhone] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('user use effect!!');

    let url = 'https://62b04a56e460b79df0423a2e.mockapi.io/aa/' + params.id;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        var date = new Date(data.rd);
        data.rd = date.toISOString().slice(0, 10);
        setPhone(data);
      });

    let url_relate = 'https://62b04a56e460b79df0423a2e.mockapi.io/aa/';
    fetch(url_relate)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  return (
    <>
      {phone != null ? (
        <div className="container text-center " style={{paddingTop: "7rem",}} >
          <h1 className="mt-4"> thông tin sản phẩm-tên</h1>
          <div className="row ms-5">
            {/* ----------------------------------------------------------------------------------- */}
            <h1 className="mt-4"> TỔNG QUAN </h1>
            <div className="col-md-4 col-sm-6  ps-5">
              <img src={phone.picture} height="290" />
            </div>
            <div class="col-md-4 col-md-6 mt-5">
              <ul>
                <li>
                  <td className="h4">Chủ đầu tư: </td>
                  <td className="h5"> {phone.name}</td>
                </li>

                <li>
                  <td className="h4">Đơn vị phân phối:</td>
                  <td className="h5"> ${phone.price}</td>
                </li>

                <li>
                  <td className="h4">Diện tích khuôn viên đất:</td>
                  <td className="h5"> {phone.type}</td>
                </li>

                <li>
                  <td className="h4">Vị trí:</td>
                  <td className="h5"> {phone.country}</td>
                </li>

                <li>
                  <td className="h4">Mật độ xây dựng:</td>
                  <td className="h5"> {phone.rd} </td>
                </li>

                <li>
                  <td className="h4">Loại hình:</td>
                  <td className="h5"> {phone.country}</td>
                </li>

                <li>
                  <td className="h4">Tổng số sản phẩm:</td>
                  <td className="h5"> {phone.country}</td>
                </li>

                <li>
                  <td className="h4">Diện tích nhà phố:</td>
                  <td className="h5"> {phone.country}</td>
                </li>
              </ul>
              {/* <button className="btn btn-danger mt-3"> Đăng ký </button> */}
            </div>
          </div>
          {/* -------------------------------------------------------------------------------------------------------*/}
          <div className="row ms-5">
            <h1 className="mt-4"> VỊ TRÍ CHIẾN LƯỢC </h1>
            <div class="col-md-4 col-md-6 mt-5">
              <span>
                {' '}
                <span> VỊ TRÍ KIM CƯƠNG</span>
                <br />
                Tọa lạc ngay giao lộ Nguyễn Văn Tỏ – quốc lộ 51, P. Long Bình
                Tân, TP. Biên Hòa, Phố thương mại Diamond Center mang đến cơ hội
                an cư lạc nghiệp vô cùng thuận tiện cho cư dân bởi hệ thống tiện
                ích cao cấp bao quanh. Chỉ trong vài phút, từ Diamond Center có
                thể tiếp cận mọi tiện ích từ giáp dục, y tế, thương mại cho đến
                vui chơi giải trí, cũng như làm việc hay thực hiện các thủ tục
                hành chính. Diamond Center còn được cộng hưởng lợi ích rất lớn
                do nằm trong khu vực phát triển đô thị quy hạch hoàn chỉnh, cộng
                đồng dân trí cao. Đây cũng là khu vực đang được đầu tư thêm rất
                nhiều dự án hạ tầng và tiện ích, mang đến cho các chủ nhân
                Diamond Center một tài sản gia tăng giá trị bền vững.
              </span>
            </div>
            <div className="col-md-4 col-sm-6  ps-5">
              <img
                src="https://thegioidatviet.com.vn/wp-content/uploads/2021/11/so-do-vi-tri.jpg"
                height="400"
                width="400"
              />
            </div>
            {/* ------------------------------------------------------------------------------------------------------------ */}
            <div className="row ms-5">
              <h1 className="mt-4"> Tiện ích</h1>
              <div className="col-md-4 col-sm-6  ps-5">
                <img
                  src="https://thegioidatviet.com.vn/wp-content/uploads/2021/11/so-do-vi-tri.jpg"
                  height="400"
                  width="400"
                />
                <span>
                  <b> VỊ TRÍ KIM CƯƠNG</b>
                  <br />
                  Tọa lạc ngay giao lộ Nguyễn Văn Tỏ – quốc lộ 51, P. Long Bình
                  Tân, TP. Biên Hòa, Phố thương mại Diamond Center mang đến cơ
                  hội an cư lạc nghiệp vô cùng thuận tiện cho cư dân bởi hệ
                  thống tiện ích cao cấp bao quanh. Chỉ trong vài phút, từ
                  Diamond Center có thể tiếp cận mọi tiện ích từ giáp dục, y tế,
                  thương mại cho đến vui chơi giải trí, cũng như làm việc hay
                  thực hiện các thủ tục hành chính. Diamond Center còn được cộng
                  hưởng lợi ích rất lớn do nằm trong khu vực phát triển đô thị
                  quy hạch hoàn chỉnh, cộng đồng dân trí cao. Đây cũng là khu
                  vực đang được đầu tư thêm rất nhiều dự án hạ tầng và tiện ích,
                  mang đến cho các chủ nhân Diamond Center một tài sản gia tăng
                  giá trị bền vững.
                </span>
              </div>
              <div className="col-md-4 col-sm-6  ps-5">
                <img
                  src="https://thegioidatviet.com.vn/wp-content/uploads/2021/11/so-do-vi-tri.jpg"
                  height="400"
                  width="400"
                />
                <span>
                  <b> VỊ TRÍ KIM CƯƠNG</b>
                  <br />
                  Tọa lạc ngay giao lộ Nguyễn Văn Tỏ – quốc lộ 51, P. Long Bình
                  Tân, TP. Biên Hòa, Phố thương mại Diamond Center mang đến cơ
                  hội an cư lạc nghiệp vô cùng thuận tiện cho cư dân bởi hệ
                  thống tiện ích cao cấp bao quanh. Chỉ trong vài phút, từ
                  Diamond Center có thể tiếp cận mọi tiện ích từ giáp dục, y tế,
                  thương mại cho đến vui chơi giải trí, cũng như làm việc hay
                  thực hiện các thủ tục hành chính. Diamond Center còn được cộng
                  hưởng lợi ích rất lớn do nằm trong khu vực phát triển đô thị
                  quy hạch hoàn chỉnh, cộng đồng dân trí cao. Đây cũng là khu
                  vực đang được đầu tư thêm rất nhiều dự án hạ tầng và tiện ích,
                  mang đến cho các chủ nhân Diamond Center một tài sản gia tăng
                  giá trị bền vững.
                </span>
              </div>
              <div className="col-md-4 col-sm-6  ps-5">
                <img
                  src="https://thegioidatviet.com.vn/wp-content/uploads/2021/11/so-do-vi-tri.jpg"
                  height="400"
                  width="400"
                />
                <span>
                  <b> VỊ TRÍ KIM CƯƠNG</b>
                  <br />
                  Tọa lạc ngay giao lộ Nguyễn Văn Tỏ – quốc lộ 51, P. Long Bình
                  Tân, TP. Biên Hòa, Phố thương mại Diamond Center mang đến cơ
                  hội an cư lạc nghiệp vô cùng thuận tiện cho cư dân bởi hệ
                  thống tiện ích cao cấp bao quanh. Chỉ trong vài phút, từ
                  Diamond Center có thể tiếp cận mọi tiện ích từ giáp dục, y tế,
                  thương mại cho đến vui chơi giải trí, cũng như làm việc hay
                  thực hiện các thủ tục hành chính. Diamond Center còn được cộng
                  hưởng lợi ích rất lớn do nằm trong khu vực phát triển đô thị
                  quy hạch hoàn chỉnh, cộng đồng dân trí cao. Đây cũng là khu
                  vực đang được đầu tư thêm rất nhiều dự án hạ tầng và tiện ích,
                  mang đến cho các chủ nhân Diamond Center một tài sản gia tăng
                  giá trị bền vững.
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="spinner-border text-primary mt-3 ms-6"> </div>
      )}

      {/*  <div className="row mt-5">
        <UserPhoneData data={data} />
      </div> */}
    </>
  );
};

export default Buy;
