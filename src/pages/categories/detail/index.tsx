import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseApi } from '../../../api/baseApi'

function Detail() {

    const { id } = useParams()

    const { data } = useQuery({
        queryKey: [`/categories/${id}`],
        queryFn: () => {
            return baseApi.get<CategoryDetailModel>(`categories`, Number(id))
        }
    })


    return <>
        <h1>Detail Category</h1>
        <h3>{data?.name}</h3>
        <p>{data?.description}</p>
    </>
}

export default Detail

interface CategoryDetailModel{
    id: number
    name: string
    description: string
}