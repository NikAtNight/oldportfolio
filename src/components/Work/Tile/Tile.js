import React from 'react';
import './tile.css'

const Tile = ({ title, url, desc, langs }) => {
    const mappedLangs = langs && langs.map((lang,index) => {
        return (
            <li key={index}>
                {lang}
            </li>
        )
    })

    return (
        <div className="tile-container">
            <div className="title-animate">
                <h2> {title} </h2>
            </div>
            <div className="tile-content">
                <p>
                    {desc}
                </p>

                <ul className="lang-list">
                    {mappedLangs}
                </ul>

                <div className="anchor-container">
                    <a target="_blank" rel="noreferrer" href={url[0]}> Github </a>
                    <a target="_blank" rel="noreferrer" href={url[1]}> Website </a>
                </div>
            </div>
        </div>
    )
}
export default Tile;