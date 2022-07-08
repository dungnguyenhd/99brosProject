import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/main.css';
import ReactPaginate from 'react-paginate';

function PhoneData(props) {
  const [phone, setPhone] = useState([]);
  const [district, setDistrict] = useState(null);
  const [districtHCM, setDistrictHCM] = useState(null);
  let navigate = useNavigate();
  //Use pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(-1);

  useEffect(() => {
    setPhone(props.data);
    if (props.data != null) {
      //setCurrentItems(props.data.slice(0, 6));
      setPage(0);
      console.log('set item offset');
    }
  }, [props.data]);

  useEffect(() => {
    if (phone != null) {
      // Fetch items from another resources.
      let itemsPerPage = 3;
      const starOffset = page * itemsPerPage;
      let endOffset = (page + 1) * itemsPerPage;
      if (endOffset > phone.length) {
        endOffset = phone.length;
      }
      setCurrentItems(phone.slice(starOffset, endOffset));
      setPageCount(Math.ceil(phone.length / itemsPerPage));
      // window.scrollTo();
    }
  },[phone.length]);

  const handlePageClick = (event) => {
    setPage(event.selected);
  };

  const sortPriceDown = () => {
    const sortData = [...phone];
    sortData.sort((a, b) => a.mucgia - b.mucgia);
    setPhone(sortData);
  };

  const sortPriceUp = () => {
    const sortData = [...phone];
    sortData.sort((a, b) => b.mucgia - a.mucgia);
    setPhone(sortData);
  };

  const sortAreaDown = () => {
    const sortData = [...phone];
    sortData.sort((a, b) => a.dientich - b.dientich);
    setPhone(sortData);
  };

  const sortAreaUp = () => {
    const sortData = [...phone];
    sortData.sort((a, b) => b.dientich - a.dientich);
    setPhone(sortData);
  };


  const clickView = () => {
    window.scrollTo(0, 0);
  }

  const doSearch = (khuvuc) => {
    let url =
      'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase/?khuvuc=' + khuvuc;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPhone(data);
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
        setPhone(data);
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



  var phone_list = [];
  var count = 0;
  if (phone != null) {
    phone_list = currentItems.map((item) => {
      if (count < 12) {
        count++;
        return (
          <tr key={item.id}>
            <td width='40'>{item.id}</td>
            <td width='300'>
              <img src={item.anh} width="300" />
            </td>
            <td width='300'>{item.tennha}</td>
            <td width='200'>${item.mucgia}</td>
            <td width='500' className='blockquote p-2 span-description'>
              {item.mota}
            </td>
            <td>
              <Link to={'/buy/' + item.id}>
                <button className="btn btn-primary"> <i class="fas fa-eye"></i> </button>
              </Link>
            </td>

            <td>
              <Link to={'/edit/' + item.id}>
                <button className="btn bg-warning">
                  <i class="fas fa-pencil-alt text-light"></i>
                </button>
              </Link>
            </td>
            <td>
              <button
                className="btn bg-danger ms-1"
                onClick={() => deletePhone(item.id)}
              >
                <i class="fas fa-trash text-light" />
              </button>
            </td>
          </tr>
        );
      } else {
        return;
      }
    });
  }

  const deletePhone = (id) => {
    if (window.confirm('Are you sure?') == true) {
      fetch('https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase/' + id, {
        method: 'DELETE',
      }).then(() => {
        let result = [...phone];
        result = result.filter((phonef) => {
          return phonef.id != id;
        });
        setPhone(result);
      });
    } else {
    }
  };

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


      <br /><br /><br /><br />

      <table className="table table-secondary table-bordered text-center mt-4">
      {/* {phone_list} */}
      </table>
      <div className="row card-deck ">{phone_list}</div>
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

export default PhoneData;
