
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './list'
import Detail from './detail'

function OrderRoutes() {
  return <>
        <Routes>
            <Route path="" element={<List />} />
            <Route path='detail/:id' element={<Detail />} />
        </Routes>
  </>
}

export default OrderRoutes