import React, { useState } from 'react';
import { useEffect } from 'react';
import UserPhoneData from './dataUser';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/main.css';

function Type(props) {
    const [type, setType] = useState("");
    const [data, setData] = useState([]);
    const [string, setString] = useState("");

    useEffect(() => {
        setType(props.type);
        setString(props.string);
        let url = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase';
        if (type != null) {
            url = url + '/?sophong=' + props.type;
        }

        // if(string != ""){
        //     url = url + '&& ?search=' + props.string;
        // }

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, [props.type]);

    var listType;
    if (type != null) {
        listType = (
            <div>
                <div class="mb-7 text-center" style={{ paddingTop: "2.5rem", }}>
                    <h4 class="blink_me_blue text-secondary"><i class="fas fa-american-sign-language-interpreting"></i>&#160;PHÂN LOẠI </h4>
                    <h3 class="fs-xl-7 fs-lg-4 fs-5 fw-bold font-cursive text-capitalize">{type}</h3>
                </div>
                <div className='row'>
                    <UserPhoneData data={data} />
                </div>
            </div>
        );
    }

    return (
        <div>
            {listType}
        </div>
    );
}

export default Type;