import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Fetch from "../api/Fetch";

import { checkToken } from "../helpers/checkToken";
import { getIP } from "../helpers/getIp";
import { NoFoundPage } from "../pages/404/NoFoundPage";
import { AboutPage } from "../pages/aboutUs/AboutPage";
import { ContactPage } from "../pages/contactus/ContactPage";

import { HomePage } from "../pages/home/HomePage";
import { LoadingPage } from "../pages/loading/LoadingPage";
import { ProductPage } from "../pages/products/ProductPage";
import { SearchPage } from "../pages/search/SearchPage";
import { CartDetailPage } from "../pages/shopping/CartDetailPage";
import { CartPage } from "../pages/shopping/CartPage";
import { SignupPage } from "../pages/signup/SignupPage";
import { SignupSucessPage } from "../pages/signup/SignupSucessPage";
import { startLoadingConfig } from "../store/slices/config";

import { AdminRouter } from "./AdminRouter";
import { ClientRouter } from "./ClientRouter";
import { PrivateAdminRouter } from "./PrivateAdminRouter";
import { PrivateClientRouter } from "./PrivateClientRouter";

export const AppRouter = () => {
    const dispatch = useDispatch();
    const id = "577a409c-fcb5-4921-b098-37ea1675dc96";
    const { isLoading, user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(checkToken());
        dispatch(startLoadingConfig(id));
        //
        getIP().then((data) => {
            Fetch.post("/visits/create", data).then((res) => {});
        });
    }, [dispatch]);

    if (isLoading) {
        return <LoadingPage />;
    }

    if (!isLoading) {
        return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/cart/details" element={<CartDetailPage />} />
                <Route path="/about-us" element={<AboutPage />} />
                <Route path="/contact-us" element={<ContactPage />} />
                <Route path="/search/:category" element={<SearchPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/product/:productId" element={<ProductPage />} />
                <Route path="/sign-up" element={<SignupPage />} />
                <Route path="/sign-up/success" element={<SignupSucessPage />} />

                {/* Private Client*/}
                <Route
                    path="/dashboard/*"
                    element={
                        <PrivateClientRouter>
                            <ClientRouter />
                        </PrivateClientRouter>
                    }
                />
                {/* Private Admin*/}
                <Route
                    path="/admin/dashboard/*"
                    element={
                        <PrivateAdminRouter>
                            <AdminRouter />
                        </PrivateAdminRouter>
                    }
                />

                <Route path="*" element={<NoFoundPage />} />
            </Routes>
        );
    }
};
