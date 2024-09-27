//dışarıdan bir date alan ve bunu 22 Ocak 2022 Perşembe 03:00 şeklinde döndüren bir fonksiyon yazınız. (dayjs ile)

import dayjs from "dayjs";

export function formatDate(date: string): string {
    return dayjs(date).format('DD MMMM YYYY dddd HH:mm')
}