import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/main.css';

function PhoneData(props) {
  const [phone, setPhone] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    setPhone(props.data);
  }, [props.data]);

  const sortPriceDown = () => {
    const sortData = [...phone];
    sortData.sort((a, b) => a.price - b.price);
    setPhone(sortData);
  };

  const sortPriceUp = () => {
    const sortData = [...phone];
    sortData.sort((a, b) => b.price - a.price);
    setPhone(sortData);
  };

  var phone_list = [];
  var count = 0;
  if (phone != null) {
    phone_list = phone.map((item) => {
      if (count < 12) {
        count++;
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>
              <img src={item.picture} width="100" />
            </td>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{phone.status == 'true' ? (
                      <span className="h6 text-primary">Avaiable</span>
                    ) : (
                      <span className="h6 text-danger">Out of Stock</span>
                    )}
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
      fetch('https://62b04a56e460b79df0423a2e.mockapi.io/aa/' + id, {
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
        <button
          className="btn btn-outline-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
        >
          Sort Price
        </button>

        <Link to={'/edit/new'}>
              <button className="btn bg-success p-1 text-light ms-2">
                Add &#160;&#160;
                <i class="fas fa-plus text-light"></i>
              </button>
            </Link>

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

      <table className="table table-bordered text-center mt-4">
      {phone_list}
      </table>
    </>
  );
}

export default PhoneData;
