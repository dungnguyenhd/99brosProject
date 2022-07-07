import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import PhoneDataUser from '../component/dataUser';

const Category = () => {
  const [phone, setPhone] = useState(null);
  const [category, setName] = useState(null);
  const params = useParams();
  useEffect(() => {
    console.log('user use effect!!');

    let url =
      'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase/?phanloai=' + params.name;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPhone(data);
        setName(params.name);
      });
  }, []);

  return (
    <div style={{paddingTop: "7rem",}}>
      <div className="App-jumbotron jumbotron text-center ">
        <h1> Khu vực {category}</h1>
        <p>BDS Khu Vực</p>
      </div>
      <div className="container ">
        <div className="row">
          <PhoneDataUser data={phone} />
        </div>
      </div>
    </div>
  );
};

export default Category;
