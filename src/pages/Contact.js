import React from 'react';

const Contact = () => {
    return (
        <>
            <div style={{ paddingTop: "8rem" }} className="container fluid">
                <div class="row">
                    <div class = "col-6">
                    <div class="col-6 text-justify ">
                        <h5 style={{ lineHeight: "70px" }}>Liên hệ</h5>
                        <h2 class="blockquote">
                            CTCP Tư vấn & Dịch vụ bất động sản 99BROS
                        </h2>
                    </div>
                    <div style={{ paddingTop: "2rem", }} >
                        <h3>Điện thoại:</h3>
                        <p>0559969402</p>
                        <h3>Email</h3>
                        <p>infor@99bros.com</p>
                        <h3>Địa chỉ</h3>
                        <ul>
                            <li>TP.HCM: Tầng 3, AMD Building, 96 Cao Thắng, P.4, Quận 3</li>
                            <li>Hà Nội: Tầng 5, PeekView Building, 36 Hoàng Cầu, Đống đa, Hà Nội</li>
                        </ul>
                    </div>
                    </div>
                    <div class="col-6 md-4">
                        <img class="rounded float-end" src='https://hoasenjobs.com/sharefb?file=/news/2016/12/14/1481679549_bat-tay.jpg' width="558px" height="350px" />
                    </div>
                </div>

            </div>
        </>
    )
}
export default Contact;