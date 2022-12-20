import React from 'react'
import { Route, Navigate, Routes } from "react-router-dom"
import MainPage from '../Pages/MainPage/MainPage'
import ChannelPage from "../Pages/ChannelPage/ChannelPage"
import PlayerPage from "../Pages/PlayerPage/PlayerPage"

function AppRouter() {
    return (
        <Routes>
            <Route path='/main' element={<MainPage />}></Route>
            <Route path='/channel' element={<ChannelPage />} ></Route>
            <Route path='/player' element={<PlayerPage />}></Route>
            <Route path='*' element={<Navigate to="/main" />}></Route>
        </Routes>
    )
}

export default AppRouter