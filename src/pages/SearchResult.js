import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/main.css';

function SearchResult(props) {
    const params = useParams();
    let navigate = useNavigate();

    // useEffect(() => {
    //     setPhone(props.newsdata);
    // }, [props.newsdata]);

    return (
        <div>
            <div class="container" style={{ paddingTop: "7rem", }}>
                <h1>{params.string}</h1>
            </div>
        </div>
    );
}

export default SearchResult;