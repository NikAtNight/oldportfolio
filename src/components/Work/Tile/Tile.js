import React from 'react';
import './tile.css'

const Tile = ({ title, url, desc, langs }) => {
    return (
        <div className="tile-container">
            <div className="title-animate">
                <h2> Bigger TITLE </h2>
            </div>
            <div className="tile-content">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of.
            </p>

                <ul className="lang-list">
                    <li>
                        <button className="lang-color" /> Javascript
                </li>
                    <li>
                        <button className="lang-color" /> Javascript
                </li>
                </ul>

                <div className="anchor-container">
                    <a> Github </a>
                    <a> Website </a>
                </div>
            </div>
        </div>
    )
}
export default Tile;