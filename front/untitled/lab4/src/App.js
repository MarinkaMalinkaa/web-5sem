import {BrowserRouter, Route, Routes} from "react-router-dom";
import VoucherIf from "./VoucherIf";
import Voucher from "./Voucher";
import React from "react";
import './App.css';
import {Provider} from "react-redux";
import {store} from "./redux";
import OrderPage from "./OrderPage";
import BookingPage from "./BookingPage";
import Sort from "./Sort";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter basename="/" >
                <div>
                    <Routes>
                        <Route exact path="/" element={<Voucher/>}/>
                        <Route exact path="/voucher" element={<Voucher/>}/>
                        <Route exact path={`/voucher/:pk`} element={<VoucherIf/>}></Route>
                        <Route path ="/order" element={<OrderPage/>}/>
                        <Route path ="/bookingpage" element={<BookingPage/>}/>
                        <Route path ="/sort" element={<Sort/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>


    );
}

export default App;