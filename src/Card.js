import React, { useState } from "react";

export default function Card(props) {
    const [isClicked, setIsClicked] = useState(false)

    function handleClick() {
        setIsClicked(!isClicked)
    }
    return (
        <>
            <div className="card"
                onClick={handleClick}
            >
                <p className="card-title">{props.title}</p>
                <p className="card-subtitle">{ props.phase }</p>
            </div>
            {
                isClicked &&
                <div className="card-content">
                        <div>

                        </div>
                        <button className="card-close" onClick={handleClick}>close</button>
                        <div className="card-details-container">
                            <h2 className="text-center">{props.contentTitle}</h2>
                            <p className="card-details"><strong>Details: </strong>{ props.details}</p>
                        </div>
                </div>
            }
        </>
    )
}