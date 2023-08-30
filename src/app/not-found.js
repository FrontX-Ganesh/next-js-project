"use client"
import React from 'react';
import './not-found.css';
import { useRouter } from 'next/navigation';

const pageNotFound = () => {
    const router = useRouter()
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <div className="grid-row">
                        <div className="colmun colmun-left">
                            {/* <img src="image-left.png" alt="image-left" /> */}
                                <h1 className="px-spc-b-20">We can't find the page you are looking for.</h1>
                                <span className="px-spc-b-20">This page has been relocated or removed.</span>
                                <button className="go-home"  onClick={() => router.push("/")}><i className="fa fa-home"></i> Go Home</button>
                        </div>
                        {/* <div className="colmun colmun-right">
                            <img src="right-shape.png" alt="right-shape" />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default pageNotFound