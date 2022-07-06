import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from '../actions';

const Favorite = (props) => {
  let navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    console.log('product list useEffect!!');
    setCartItems(props.store_state.Carts);
  }, [props.store_state]);


  const clickView = () => {
    window.scrollTo(0, 0);
  }

  console.log(cartItems);

  var carts_jsx = '';
  if (cartItems.length > 0) {
    carts_jsx = cartItems.map((item, key) => (
      <tr>
       <td><Link to={'/buy/' + item.id} onClick={clickView}> <img src={item.anh} width='300'/> </Link> </td>
        <td> <Link to={'/buy/' + item.id} onClick={clickView}>  <h5>{item.tennha} </h5> </Link> </td>
        <td class="text-center"> <Link to={'/buy/' + item.id} onClick={clickView}>  <h5>${item.mucgia}</h5></Link></td>
        <td class="text-center"><Link to={'/buy/' + item.id} onClick={clickView}> {item.mota} /</Link></td>
        <td class="text-center">

        <Link to={'/buy/' + item.id} onClick={clickView}><button class="btn btn-sm btn-info"> <i class="far fa-eye"></i>  &#160;Xem</button></Link> &#160;
          <button class="btn btn-sm btn-danger" onClick={() => props.DeleteCart(key)}> <i class="fas fa-trash-alt"></i> &#160;Xóa</button>
        </td>
      </tr>
    ));
    console.log('success');
  }




  return (
    <div class="container-fluid" style={{ paddingTop: "7rem", }}>
      <div class="row">
        <div class="col mt-2">
          <h2 class="text-center">Danh sách yêu thích</h2><br></br>
          <table class="table table-bordered table-striped p-2">
            <thead>
              <tr>
                <th width='300' class="text-center">Ảnh</th>
                <th width='300' class="text-center">Tên tòa nhà</th>
                <th class="text-center" width='300'>Giá</th>
                <th class="text-center" width='700'>Mô tả</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length == 0 ? (
                <tr>
                  <td colspan="4" class="text-center">
                    Your Cart is empty
                  </td>
                </tr>
              ) : (
                ''
              )}
              {carts_jsx}
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="text-center">
            <button class="btn btn-primary m-1" onClick={()=>navigate(-1)}>Tiếp tục tìm kiếm</button>
            <button class="btn btn-danger m-1" type="button">
              Liên hệ
            </button>
          </div>

          <br></br>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  //  console.log(state)
  return {
    //items: state._todoProduct.Carts,
    store_state: state._todoProduct,
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
})(Favorite);