import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/main.css';

function SearchResult(props) {
    const params = useParams();
    const [phone, setPhone] = useState(null);
    let navigate = useNavigate();

    // useEffect(() => {
    //     setPhone(props.newsdata);
    // }, [props.newsdata]);

    return (
        <div>
            <h1>{params.string}</h1>
        </div>
    );
}

export default SearchResult;