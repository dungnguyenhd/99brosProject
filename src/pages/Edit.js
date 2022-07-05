import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Edit = () => {
  const params = useParams();
  const [phone, setPhone] = useState(null);
  const [countries, setCountries] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    console.log('user use effect!!');

    if (params.id != 'new') {
      let url = 'https://62b04a56e460b79df0423a2e.mockapi.io/aa/' + params.id;

      console.log(url);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          var date = new Date(data.rd);
          data.rd = date.toISOString().slice(0, 10);
          setPhone(data);
        });
    } else {
      let initData = {};
      initData.home = {};
      setPhone(initData);
    }

    let countries_url =
      'https://62b04a56e460b79df0423a2e.mockapi.io/countries/';

    console.log(countries_url);
    fetch(countries_url)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const saveData = () => {
    let method;
    let id = '';
    if (params.id != 'new') {
      method = 'PUT';
      id = params.id;
    } else {
      method = 'POST';
    }

    let url = 'https://62b04a56e460b79df0423a2e.mockapi.io/aa/' + id;

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(phone),
    })
      .then((response) => response.json())
      .then((data) => {
        // var date = new Date(data.dob);
        // data.dob = date.getTime();
        setPhone(data);
        console.log('Success:', data);
      
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  var str2bool = (value) => {
    if (value && typeof value === 'string') {
      if (value.toLowerCase() === 'true') return true;
      if (value.toLowerCase() === 'false') return false;
    }
    return value;
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let data = { ...phone };
    data[name] = value;
    setPhone(data);
  };

  return (
    <>
      {phone != null ? (
        <div className="col-md-6 mt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 col-sm-6 w-25 pt-3 ms-3 ps-5">
                <img src={phone.picture} height="250" />
              </div>

              <div className="col-md-4 border-danger">
                <h1 className="mt-2"> Phone Profile</h1>
                <table className="table table-bordered mt-5">
                  <tr>
                    <td className="h3">Name: </td>
                    <input
                      className="h3"
                      value={phone.name}
                      name="name"
                      onChange={(e) => handleChange(e)}
                    ></input>
                  </tr>

                  <tr>
                    <td className="h3">Price:</td>
                    <input
                      className="h3"
                      value={phone.price}
                      name="price"
                      onChange={(e) => handleChange(e)}
                    ></input>
                  </tr>

                  <tr>
                    <td className="h3">Type:</td>
                    <input
                      className="h3"
                      value={phone.type}
                      name="type"
                      onChange={(e) => handleChange(e)}
                    ></input>
                  </tr>

                  <tr>
                    <td className="h3">Made in:</td>
                    <td>
                      {countries != null ? (
                        <select
                          className="h3"
                          name="country"
                          value={phone.country}
                          onChange={(e) => handleChange(e)}
                        >
                          {countries.map((item) => (
                            <option value={item.country_name}>
                              {item.country_name}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <div className="spinner-border text-primary mt-3 ms-6"></div>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td className="h3">Status:</td>
                    <td>
                      <select
                        name="status"
                        value={phone.status}
                        onChange={(e) => handleChange(e)}
                        className="h3"
                      >
                        <option value={true}>
                          <span> Avaiable </span>
                        </option>

                        <option value={false}>
                          <span> Out of Stock </span>
                        </option>
                      </select>
                    </td>
                  </tr>

                  <td className="h3">Release Date:</td>
                  <td>
                    <input className='h3'
                      type="date"
                      id="birthday"
                      name="rd"
                      value={phone.rd}
                      onChange={(e) => handleChange(e)}
                    ></input>
                  </td>
                </table>
                <button
                  className="btn bg-primary text-light"
                  onClick={saveData}
                >
                  Save
                </button>
                &#160;&#160;
                <button
                  className="btn bg-secondary text-light"
                  onClick={() => navigate('/', { replace: true })}
                >
                  Cancle
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="spinner-border text-primary mt-3 ms-6"></div>
      )}
    </>
  );
};

export default Edit;
