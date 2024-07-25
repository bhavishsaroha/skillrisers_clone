import React from "react";
import { Header } from "../../../shared/components/Header";
import { Footer } from "../../../shared/components/Footer";
import { Course } from "./Course";
import { Banner } from "./Banner";
import { Cart } from "../../cart/Cart";

export const DashBoard = () => {
    return (
        <div>
            <Header />
            <Banner />
            <div className='container'>
                <div className='row'>
                    <Course />        
                </div>
            </div>
            <Footer />
        </div>
    );
}