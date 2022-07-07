import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import UserHouseData from '../component/dataUser';
import '../css/main.css';

function SearchResult(props) {
    const params = useParams();
    const [data, setData] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        let url = 'https://62be5bb10bc9b1256155b7bd.mockapi.io/MainDatabase';
        if (params.string != null) {
            url += '?search=' + params.string;
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                console.log(data);
            });
    }, []);

    return (
        <div>
            <div class="container" style={{ paddingTop: "7rem", }}>
                <div class="mb-7 text-center pt-5 mt-5" >
                    <h4 class="fs-xl-7 fs-lg-4 fs-5 fw-bold font-cursive">Result for "{params.string}"</h4>
                </div>
                <div className='row'>
                    <UserHouseData data={data} />
                </div>
            </div>
        </div>
    );
}

export default SearchResult;