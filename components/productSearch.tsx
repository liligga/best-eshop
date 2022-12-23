import { useState } from "react"

enum Price {
    min,
    max
}


export default function ProductSearch({onSearch}:any) {
    const [price, setPrice] = useState({
        min: 0,
        max: 10000,
        absoluteMin: 0,
        absoluteMax: 10000
    })

    const [filter, setFilter] = useState({
        priceMin: 0,
        priceMax: 10000,
        category: null,
        color: null
    })

    const changePrice = (kee: any) => (e: any) => {
        setPrice({...price, [kee]: e.target.value})
    }

    const changeFilter = (e: any) => {
        
    }

    return (

        <div className="filter">
            <form className="searchForm" method="get" onSubmit={e => e.preventDefault()}>
                <input type="search" onChange={onSearch} placeholder="Enter minimum 3 characters)" />
                <button type="submit">Search</button>
            </form>
            

            <div className="priceSlider">
                <div className="min-max">
                    <div className="min">
                    <label>Min</label><span id="min-value">${price.min}</span>
                    </div>
                    <div className="max">
                    <label>Max</label><span id="max-value">${price.max}</span>
                    </div>
                </div>

                <div className="min-max-range">
                    <input type="range" min="0" max="10000" value={price.min} className="range"
                    id="min" onChange={changePrice('min')}/>
                    <input type="range" min="0" max="10000" value={price.max}
                    className="range" id="max" onChange={changePrice('max')}/>
                </div>

            </div>
            <div className="category">
                <div>#Lorem</div>
                <div>#ipsum</div>
                <div>#dolor</div>
                <div>#sit</div>
                <div>#amet</div>
                <div>#consectetur</div>
                <div>#adipisicing</div>
                <div>#est</div>
                <div>#quaerat</div>
            </div>

            <div className="color-category">
                <div className="blue"></div>
                <div className="red"></div>
                <div className="pink"></div>
                <div className="green"></div>
                <div className="blue"></div>
                <div className="red"></div>
                <div className="pink"></div>
                <div className="green"></div>
                <div className="blue"></div>
                <div className="red"></div>
                <div className="pink"></div>
                <div className="green"></div>
                <div className="blue"></div>
                <div className="red"></div>
                <div className="pink"></div>
                <div className="green"></div>
                <div className="blue"></div>
                <div className="red"></div>
                <div className="pink"></div>
                <div className="green"></div>
            </div>
        </div>

    )
}