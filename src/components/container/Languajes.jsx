import React from 'react'

const Languajes = ({ languajes = [] }) => {
    return (
        <div className="shadow-1-strong bg-white my-5 p-5" id="languajes">
            <div className="skills-section">
                <h2 className="h2 fw-light mb-4">Languajes</h2>
                <div className="education-section">
                    

                    {
                        languajes.map((languaje, index) => {

                            return (

                                <div key={index} className="timeline">
                                    <div className="timeline-card timeline-card-success" data-aos-delay="0">
                                        <div className="timeline-head px-4 pt-3">

                                            <div className="h5"> {languaje.Languaje}</div>
                                        </div>

                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Languajes