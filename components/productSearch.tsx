import { useState } from "react"


export default function ProductSearch({onSearch}:any) {
    return (
        <form action="" method="get" onSubmit={e => e.preventDefault()}>
            <input type="search" onChange={onSearch} placeholder="Введите минимум 3 символа)" />
            <button type="submit">Искать</button>
        </form>
    )
}