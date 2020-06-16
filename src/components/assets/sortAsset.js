import React from 'react'

export default function SortAsset(props) {
    return (
        <div>
            <select onChange={(e) => props.sortArray(e.target.value)}>
                <option value="id">by id</option>
                <option value="name">by name</option>
            </select>
        </div>
    )
}
