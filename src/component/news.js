import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/main.css';

function NewsData(props) {
    const [phone, setPhone] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        setPhone(props.newsdata);
    }, [props.newsdata]);

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
            if (count < 6) {
                count++;
                return (
                    <div class="col-md-4 mb-4">

                        <div class="card overflow-hidden shadow"> <div className='card-border bg-primary'><Link to={'/viewnews/' + item.id}> <img class="card-img-top" src={item.thumnail} height='320' /></Link></div>

                            <div class="card-body py-4 px-3">

                                <div class="d-flex align-items-center"><span class="fs-0"><span class="fs-0 fw-medium" style={{ color: 'black' }}><h3>{item.tieude}</h3></span></span></div>

                                <div class="d-flex align-items-center"><span class="fs-0"><span class="fs-0 fw-medium span-description" style={{ color: 'black'}}>{item.mota}</span></span></div>

                            </div>

                        </div>
                    </div>
                );
            } else {
                return;
            }
        });
    }



    return (
        <>
            <div>

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
            <br /><br /><br />
            {phone_list}
        </>
    );
}

export default NewsData;
