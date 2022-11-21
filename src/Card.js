import React, { useState } from "react";

export default function Card(props) {
    const {details, handleCardOpen, institutions, mechanism, phase, sponsors, title} = props
    const [isClicked, setIsClicked] = useState(false)

    function handleClick() {
        setIsClicked(!isClicked)
    }
    return (
        <>
            <div className="card"
                onClick={() => {
                    handleClick()
                    handleCardOpen()
                }}
            >
                <p className="card-title">{ title }</p>
                <p className="card-subtitle">{ phase }</p>
            </div>
            {
                isClicked &&
                <div className="card-content">
                        <div>

                        </div>
                        <button className="card-close" onClick={
                            () => {
                                handleClick()
                                handleCardOpen()
                            }
                        }>close</button>
                        <div className="card-details-container">
                            <h2 className="text-center">{props.contentTitle}</h2>
                            <p className="card-details">
                                <strong>Sponsors: </strong>
                                 {sponsors}
                            </p>
                            <p className="card-details"><strong>Mechanism: </strong>{mechanism}</p>
                            <p className="card-details"><strong>Institutions: </strong>{ institutions }</p>
                            <p className="card-details">
                                <strong>Details: </strong>{details}
                            </p>
                        </div>
                </div>
            }
        </>
    )
}