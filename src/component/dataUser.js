import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/main.css';
import { AddCart, DeleteCart } from '../actions';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

function UserHouseData(props) {
  const [house, setHouse] = useState(null);
  const [listItem, setListItem] = useState([]);
  const [liked, setLiked] = useState([]);
  const [district, setDistrict] = useState(null);
  const [districtHCM, setDistrictHCM] = useState(null);
  let navigate = useNavigate();
  // const params = useParams();
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(-1);

  useEffect(() => {
    setHouse(props.data);
    if (props.data != null) {
      //setCurrentItems(props.data.slice(0, 6));
      setPage(0);
      console.log('set item offset');
    }
  }, [props.data]);

  useEffect(() => {
    if (house != null) {
      // Fetch items from another resources.
      let itemsPerPage = 3;
      const starOffset = page * itemsPerPage;
      let endOffset = (page + 1) * itemsPerPage;
      if (endOffset > house.length) {
        endOffset = house.length;
      }
      setCurrentItems(house.slice(starOffset, endOffset));
      setPageCount(Math.ceil(house.length / itemsPerPage));
      // window.scrollTo();
    }
  }, [page]);

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


  const handlePageClick = (event) => {
    setPage(event.selected);
  };

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

  const sortAreaDown = () => {
    const sortData = [...house];
    sortData.sort((a, b) => a.dientich - b.dientich);
    setHouse(sortData);
  };

  const sortAreaUp = () => {
    const sortData = [...house];
    sortData.sort((a, b) => b.dientich - a.dientich);
    setHouse(sortData);
  };


  const clickView = () => {
    window.scrollTo(0, 0);
  }

  var house_list = [];
  var count = 0;
  var MAX_ITEM = 6;

  if (house != null) {
    house_list = currentItems.map((item) => {
      console.log("update!!!!!!");
      if (count < 6) {
        count++;
        return (
          <div class="col-md-4 mb-4">


            <div class="card overflow-hidden shadow"> <div className='card-border bg-primary'><Link to={'/buy/' + item.id} onClick={clickView}> <img class="card-img-top" src={item.anh} /></Link></div>

              <div class="card-body py-4 px-3">

                <div class="d-flex align-items-center"><span class="fs-0"><Link to={'/buy/' + item.id} onClick={clickView}> <h4 class="fw-medium ten">{item.tennha}</h4></Link><span class="fs-0 fw-medium" style={{ color: 'black' }}>Địa chỉ: {item.diachi}</span></span></div>

                <div class="d-flex align-items-center"><span class="fs-0 fw-medium">Mức Giá: {item.mucgia}</span></div>

                <div class="d-flex align-items-center"><span class="fs-0 fw-medium">Diện tích: {item.dientich}m2</span>

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

  const doSearch = (khuvuc) => {
    let url =
      'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase/?khuvuc=' + khuvuc;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setHouse(data);
      });
  };

  useEffect(() => {
    console.log('app useeffect!!');
    // console.log('products', products);
    let url_khuvuc =
      'https://62be5bb10bc9b1256155b7bd.mockapi.io/Khuvuc';

    fetch(url_khuvuc)
      .then((response) => response.json())
      .then((data) => {
        setDistrict(data);
      });
  }, []);

  var khuvuc_jsx = [];

  if (district != null) {
    khuvuc_jsx = (
      (khuvuc_jsx = district.map((item) => (
        <li>
          <button className="dropdown-item" value={item.tenkhuvuc} onClick={(e) => doSearch(e.target.value)}>
            {item.tenkhuvuc}
          </button>
        </li>
      )))
    );
  }

  // -------------------------------------------------------------------------------------

  const doSearchHCM = (khuvuc) => {
    let url =
      'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase/?khuvuc=' + khuvuc;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setHouse(data);
      });
  };

  useEffect(() => {
    console.log('app useeffect!!');
    // console.log('products', products);
    let url_khuvucHCM =
      'https://62b52183da3017eabb1530f0.mockapi.io/TPHCM';

    fetch(url_khuvucHCM)
      .then((response) => response.json())
      .then((data) => {
        setDistrictHCM(data);
      });
  }, []);

  var khuvucHCM_jsx = [];

  if (districtHCM != null) {
    khuvucHCM_jsx = (
      (khuvucHCM_jsx = districtHCM.map((item) => (
        <li>
          <button className="dropdown-item" value={item.tenkhuvuc} onClick={(e) => doSearchHCM(e.target.value)}>
            {item.tenkhuvuc}
          </button>
        </li>
      )))
    );
  }


  return (
    <>
      <div>
        <span className='h5'>
          Bộ lọc:
        </span>

         <button
          className="btn btn-outline-info dropdown-toggle ms-2"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
        >
          Theo Giá
        </button>

        <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
          <li>
            <button className="dropdown-item" onClick={() => sortPriceUp()}>
              Giảm dần
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => sortPriceDown()}>
              Tăng Dần
            </button>
          </li>
        </ul>


        <button
          className="btn btn-outline-info dropdown-toggle ms-2"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
        >
          Theo Diện Tích
        </button>

        <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
          <li>
            <button className="dropdown-item" onClick={() => sortAreaUp()}>
              Giảm dần
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => sortAreaDown()}>
              Tăng Dần
            </button>
          </li>
        </ul>


        <button
          className="btn btn-outline-info dropdown-toggle ms-1"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
        >
          Theo Quận Hà Nội
        </button>

        <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
            <li className='text-info h5 ms-3'>Hà Nội</li>
            {khuvuc_jsx}
        </ul>


        <button
          className="btn btn-outline-info dropdown-toggle ms-1"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
        >
          Theo Quận TP HCM
        </button>

        <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
            <li className='text-info h5 ms-3'>TP Hồ Chí Minh</li>
            {khuvucHCM_jsx}
        </ul>

      </div>
      <br /><br /><br />
      {/* {house_list} */}
      <div className="row card-deck ">{house_list}</div>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName=""
        previousLinkClassName="page-link"
        nextClassName=""
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
        forcePage={page}
      />
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

