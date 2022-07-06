import { Outlet, Link } from 'react-router-dom';
import '../css/main.css';

const Footer = () => {
    return (
    <>

      <section class="chan pb-0 pb-lg-4">

        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-7 col-12 mb-4 mb-md-6 mb-lg-0 order-0"> <img class="mb-4" src="https://i.imgur.com/CkZJbLx.png" width="150" alt="99Bros" />
              <p class="fs--1 text-secondary mb-0 fw-medium">Bất động sản 99Bros. Bất động sản hàng đầu KITS.</p>
            </div>
            <div class="col-lg-2 col-md-4 mb-4 mb-lg-0 order-lg-1 order-md-2">
              <h4 class="footer-heading-color fw-bold font-sans-serif mb-3 mb-lg-4">Nhóm 5</h4>
              <ul class="list-unstyled mb-0">
                <li class="mb-2"><Link to="/aboutMe" class="link-900 fs-1 fw-medium text-decoration-none">Về chúng tôi</Link></li>
                <li class="mb-2"><a class="link-900 fs-1 fw-medium text-decoration-none" href="#!">Công việc</a></li>
                <li class="mb-2"><a class="link-900 fs-1 fw-medium text-decoration-none" href="#!">Donate us</a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-4 mb-4 mb-lg-0 order-lg-2 order-md-3">
              <h4 class="footer-heading-color fw-bold font-sans-serif mb-3 mb-lg-4">Liên hệ</h4>
              <ul class="list-unstyled mb-0">
                <li class="mb-2"><a class="link-900 fs-1 fw-medium text-decoration-none" href="#!">Trợ giúp/FAQ</a></li>
                <li class="mb-2"><a class="link-900 fs-1 fw-medium text-decoration-none" href="#!">Email</a></li>
                <li class="mb-2"><a class="link-900 fs-1 fw-medium text-decoration-none" href="#!">Điện thoại</a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-4 mb-4 mb-lg-0 order-lg-3 order-md-4">
              <h4 class="footer-heading-color fw-bold font-sans-serif mb-3 mb-lg-4">More</h4>
              <ul class="list-unstyled mb-0">
                <li class="mb-2"><a class="link-900 fs-1 fw-medium text-decoration-none" href="#!">Không</a></li>
                <li class="mb-2"><a class="link-900 fs-1 fw-medium text-decoration-none" href="#!">Còn</a></li>
                <li class="mb-2"><a class="link-900 fs-1 fw-medium text-decoration-none" href="#!">Gì</a></li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-5 col-12 mb-4 mb-md-6 mb-lg-0 order-lg-4 order-md-1">
              <div class="icon-group mb-4"> <a class="text-decoration-none icon-item shadow-social" id="facebook" href="https://www.facebook.com/dungn99/" target="_blank"><i class="fab fa-facebook-f"> </i></a><a class="text-decoration-none icon-item shadow-social" id="instagram" href="https://www.instagram.com/" target='_blank'><i class="fab fa-instagram"> </i></a><a class="text-decoration-none icon-item shadow-social" id="twitter" href="https://twitter.com/" target='_sblank'><i class="fab fa-twitter"> </i></a></div>
              <h4 class="fw-medium font-sans-serif text-secondary mb-3">Khám phá ứng dụng của chúng tôi</h4>
              <div class="d-flex align-items-center"> <a href="https://unleashed-fern-bee.notion.site/Demo-Playlist-195d8de4f63946ec95b4cfd097cfbe1a" target='_blank'> <i class="fas fa-store"></i> Notion </a><a href="https://batdongsan.com.vn/" target='_blank'> &#160; <i class="fas fa-hands-helping"></i> Partner</a></div>
            </div>
          </div>
        </div>

      </section>

    </>
    );
  };

  export default Footer;