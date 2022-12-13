import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/home';
import BookFlight from './components/bookFlight'
import Header from './components/header';
import ViewDetail from './components/viewDetail';

const AppRoutes=()=>{
    return(
        <>
        <Header/>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='book-flight' element={<BookFlight/>}></Route>
            <Route path='view-detail' element={<ViewDetail/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default AppRoutes;