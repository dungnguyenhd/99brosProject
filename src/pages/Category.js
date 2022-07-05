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
      'https://62b04a56e460b79df0423a2e.mockapi.io/aa/?type=' + params.name;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPhone(data);
        setName(params.name);
      });
  }, []);

  return (
    <div>
      <div className="App-jumbotron jumbotron text-center ">
        <h1> Category {category}</h1>
        <p>Product</p>
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
