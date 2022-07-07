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

    function setTextTitle(){
        return (data.length>0)?("Result for '"+params.string+"'"):("Have no result for '"+params.string+"'");
    }

    return (
        <div>
            <div class="container" style={{ paddingTop: "7rem", }}>
                <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" title="Hooray!">Hover over me!</button>
                <div class="mb-7 text-center pt-5 mt-5" >
                    <h4 class="fs-xl-7 fs-lg-4 fs-5 fw-bold font-cursive">{setTextTitle()}</h4>
                </div>
                <div className='container' style={{textAlign:"center"}}>
                    <button type="button"><i class="fa fa-solid fa-arrow-left"></i></button>
                </div>
                <div className='row result-search' style={{visibility: data.length>0?"visible":"hidden"}}>
                    <UserHouseData data={data} />
                </div>
            </div>
        </div>
    );
}

export default SearchResult;