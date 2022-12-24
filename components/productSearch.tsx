import { useState } from "react"

enum Price {
    min,
    max
}


export default function ProductSearch({onSearch, onFilter}:any) {
    const [price, setPrice] = useState({
        min: 0,
        max: 10000,
        absoluteMin: 0,
        absoluteMax: 10000
    })


    const changePrice = (kee: any) => (e: any) => {
        const result = {...price, [kee]: parseInt(e.target.value)}
        if (result.min <= result.max) {
            setPrice({...price, ...result})
        }
        onFilter(price.min, 'minPrice')
        onFilter(price.max, 'maxPrice')
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
                    <input type="range" min="0" max="5000" value={price.min} className="range"
                    id="min" onChange={changePrice('min')}/>
                    <input type="range" min="0" max="5000" value={price.max}
                    className="range" id="max" onChange={changePrice('max')}/>
                </div>

            </div>
            <div className="category">
                <div data-category="Lorem" onClick={onFilter('Lorem', 'category')}>#Lorem</div>
                <div data-category="ipsum" onClick={onFilter('ipsum', 'category')}>#ipsum</div>
                <div data-category="dolor" onClick={onFilter('dolor', 'category')}>#dolor</div>
                <div data-category="sit" onClick={onFilter('sit', 'category')}>#sit</div>
                <div data-category="amet" onClick={onFilter('amet', 'category')}>#amet</div>
                <div data-category="consectetur" onClick={onFilter('consectetur', 'category')}>#consectetur</div>
                <div data-category="adipisicing" onClick={onFilter('adipisicing', 'category')}>#adipisicing</div>
                <div data-category="est" onClick={onFilter('est', 'category')}>#est</div>
                <div data-category="quaerat" onClick={onFilter('quaerat', 'category')}>#quaerat</div>
            </div>

            <div className="color-category">
                <div data-color="blue" onClick={onFilter('blue', 'color')} className="blue"></div>
                <div data-color="red" onClick={onFilter('red', 'color')} className="red"></div>
                <div data-color="pink" onClick={onFilter('pink', 'color')} className="pink"></div>
                <div data-color="green" onClick={onFilter('green', 'color')} className="green"></div>
                <div data-color="blue" onClick={onFilter('blue', 'color')} className="blue"></div>
                <div data-color="red" onClick={onFilter('red', 'color')} className="red"></div>
                <div data-color="pink" onClick={onFilter('pink', 'color')} className="pink"></div>
                <div data-color="green" onClick={onFilter('green', 'color')} className="green"></div>
                <div data-color="blue" onClick={onFilter('blue', 'color')} className="blue"></div>
                <div data-color="red" onClick={onFilter('red', 'color')} className="red"></div>
                <div data-color="pink" onClick={onFilter('pink', 'color')} className="pink"></div>
                <div data-color="green" onClick={onFilter('green', 'color')} className="green"></div>
                <div data-color="blue" onClick={onFilter('blue', 'color')} className="blue"></div>
                <div data-color="red" onClick={onFilter('red', 'color')} className="red"></div>
                <div data-color="pink" onClick={onFilter('pink', 'color')} className="pink"></div>
                <div data-color="green" onClick={onFilter('green', 'color')} className="green"></div>
                <div data-color="blue" onClick={onFilter('blue', 'color')} className="blue"></div>
                <div data-color="red" onClick={onFilter('red', 'color')} className="red"></div>
                <div data-color="pink" onClick={onFilter('pink', 'color')} className="pink"></div>
                <div data-color="green" onClick={onFilter('green', 'color')} className="green"></div>
            </div>
        </div>

    )
}