import React from 'react'
import './style.css'

const Stats = ({ stats }) => {
    // console.log(stats)
    if (!stats) {
        // loading not yet started
        return <span className="stats">Loading...</span>
    } else {
        return (
            <span className="stats">
                {stats.error && 'Error'}
                {stats.isLoading && 'Loanding...'}
                {stats.download !== null && `${stats.downloads}`}
            </span>
        )

    }

}

export default Stats;