import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/main.css';
import { AddCart, DeleteCart } from '../actions';
import { connect } from 'react-redux';

function UserHouseData(props) {
  const [house, setHouse] = useState(null);
  const [listItem, setListItem] = useState([]);
  const [liked, setLiked] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    setHouse(props.data);
  }, [props.data]);

  useEffect(() => {
    console.log('product list useEffect!!');
    setListItem(props.store_state.Carts);
    if (listItem.length > 0) {
      var list = [];
      for (var i = 0; i < listItem.length; i++) {
        list[i] = listItem[i].id;
      };
      setLiked(list);
    }
  }, [props.store_state]);

  const sortPriceDown = () => {
    const sortData = [...house];
    sortData.sort((a, b) => a.phaply - b.phaply);
    setHouse(sortData);
  };

  const sortPriceUp = () => {
    const sortData = [...house];
    sortData.sort((a, b) => b.phaply - a.phaply);
    setHouse(sortData);
  };

  const clickView = () => {
    window.scrollTo(0, 0);
  }

  var house_list = [];
  var count = 0;
  var MAX_ITEM = 6;

  if (house != null) {
    house_list = house.map((item) => {
      console.log("update!!!!!!");
      if (count < 6) {
        count++;
        return (
          <div class="col-md-4 mb-4">


            <div class="card overflow-hidden shadow"> <div className='card-border bg-primary'><Link to={'/buy/' + item.id} onClick={clickView}> <img class="card-img-top" src={item.anh}/></Link></div>

              <div class="card-body py-4 px-3">

                <div class="d-flex align-items-center"><span class="fs-0"><h4 class="fw-medium ten">{item.tennha}</h4><span class="fs-0 fw-medium" style={{ color: 'black' }}>Địa chỉ: {item.diachi}</span></span></div>

                <div class="d-flex align-items-center"><span class="fs-0 fw-medium">Mức Giá: {item.mucgia}</span></div>

                <div class="d-flex align-items-center"><span class="fs-0 fw-medium">Diện tích: {item.dientich}</span>

                  <span className='tim' style={{ marginLeft: "7.5rem", }}>
                    {/* <button
                      className="btn btn-outline-danger ms-2 rounded-circle"
                      onClick={() => liked.includes(item.id) ? props.DeleteCart(getPosition(item.id)) : props.AddCart(item)}
                      style={{ backgroundColor: liked.includes(item.id) ? "red" : "white" }}>
                      <i class="fas fa-heart text-end" style={{ color: liked.includes(item.id) ? "white" : "red" }}></i>
                      <span class="tooltiptext">Tooltip text</span>
                    </button> */}
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

  function getPosition(id) {
    var position = 0;
    if (liked != null) {
      for (var i = 0; i < liked.length; i++) {
        if (liked[i] == id) {
          position = i;
          break;
        }
      }
    }
    return position;
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
      {house_list}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    //_products: state._todoProduct,
    numberCart: state._todoProduct.numberCart,
    store_state: state._todoProduct
  };
};
// /* function mapDispatchToProps(dispatch) {
//   return {
//     AddCart: (item) => dispatch(AddCart(item)),
//     DeleteCart: (item) => dispatch(DeleteCart(item)),
//   };
// } */
// export default connect(mapStateToProps,  {
//   AddCart, 
//   DeleteCart })(UserHouseData);
function mapDispatchToProps(dispatch) {
  return {
    AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserHouseData);

