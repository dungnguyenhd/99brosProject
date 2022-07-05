import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/main.css';
import { AddCart } from '../actions';
import { connect } from 'react-redux';

function UserPhoneData(props) {
  const [phone, setPhone] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    setPhone(props.data);
  }, [props.data]);

  const sortPriceDown = () => {
    const sortData = [...phone];
    sortData.sort((a, b) => a.phaply - b.phaply);
    setPhone(sortData);
  };

  const sortPriceUp = () => {
    const sortData = [...phone];
    sortData.sort((a, b) => b.phaply - a.phaply);
    setPhone(sortData);
  };

  const clickView = () => {
    window.scrollTo(0, 0);
  }

  var phone_list = [];
  var count = 0;
  if (phone != null) {
    phone_list = phone.map((item) => {
      if (count < 12) {
        count++;
        return (
          <div class="col-md-4 mb-4">

            <div class="card overflow-hidden shadow"> <div className='card-border bg-primary'><Link to={'/buy/' + item.id} onClick={clickView}> <img class="card-img-top" src={item.anh} height='420' /></Link></div>

              <div class="card-body py-4 px-3">

                <div class="d-flex align-items-center"><span class="fs-0"><h4 class="fw-medium ten">{item.tennha}</h4><span class="fs-0 fw-medium" style={{ color: 'black' }}>Địa chỉ: {item.diachi}</span></span></div>

                <div class="d-flex align-items-center"><span class="fs-0 fw-medium">Mức Giá: {item.mucgia}</span></div>

                <div class="d-flex align-items-center"><span class="fs-0 fw-medium">Diện tích: {item.dientich}</span>

                  <span className='tim' style={{ marginLeft: "12rem", }}>
                    <button
                      className="btn btn-outline-danger ms-2 rounded-circle"
                      onClick={() => props.AddCart(item)}>
                      <i class="fas fa-heart text-end"></i>
                    </button>

                  </span>
                </div>

              </div>

            </div>
          </div>
        );
      } else {
        return;
      }
    });
  }


  return (
    <>
      <div>
        <button
          className="btn btn-outline-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
        >
          Sort Price
        </button>

        <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
          <li>
            <button className="dropdown-item" onClick={() => sortPriceUp()}>
              High to Low
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => sortPriceDown()}>
              Low to High
            </button>
          </li>
        </ul>
      </div>
      <br /><br /><br />
      {phone_list}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    //_products: state._todoProduct,
    numberCart: state._todoProduct.numberCart,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserPhoneData);

