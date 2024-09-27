import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { baseApi } from '../../../api/baseApi'
import { formatDate } from '../../../utils/dateHelper'

function Detail() {

    const { id } = useParams()

    const { data } = useQuery({
        queryKey: [`/orders/${id}`],
        queryFn: () => {
            return baseApi.get<OrderDetailModel>(`orders`, Number(id))
        }
    })

    return <>
        <h1>Detail Order</h1>
        <p>Order Date: {formatDate(data?.orderDate ?? "")}</p>
        <p>Shipped Date: {formatDate(data?.shippedDate ?? "")}</p>
        <p>Required Date: {formatDate(data?.requiredDate ?? "")}</p>
    </>
}

export default Detail

interface OrderDetailModel {
    id: number
    orderDate: string
    shippedDate : string    
    requiredDate : string
}

