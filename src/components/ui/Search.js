import { getSuggestedQuery } from '@testing-library/dom'
import React, { useState} from 'react'

const Search = ( {getQuery}) => {

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    const [text,setText] = useState('')
    return (
        <section className='search'>
            <form>
                <input type='text' className='form-control' value={text} onChange={ (e) => onChange(e.target.value)} placeholder='Search Character' autoFocus />
            </form>
        </section>
    )
}

export default Search
