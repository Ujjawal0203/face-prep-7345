import React from "react";
import {Box} from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Home from "../component/Home";
import Login from "../component/Login";

const AllRouter = () => {
    return(
        <Box>
            <Routes>
                <Route exact  path='/' element={<Login/>}></Route>
                <Route path='/home'element={<Home/>}></Route>
            </Routes>
        </Box>
    )
}

export default AllRouter;