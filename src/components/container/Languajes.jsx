import React from 'react'

const Languajes = () => {
    return (
        <div className="shadow-1-strong bg-white my-5 p-5" id="languajes">
            <div className="skills-section">
                <h2 className="h2 fw-light mb-4">Languajes</h2>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3"><span className="fw-bolder">Spanish</span>
                            <div className="progress my-2 rounded" style={{height: '20px'}}>
                                <div className="progress-bar bg-info" role="progressbar"
                                    data-aos-delay="400" data-aos-anchor=".skills-section" style={{width: '100%'}} aria-valuenow="10"
                                    aria-valuemin="0" aria-valuemax="10">Native</div>
                            </div>
                        </div>
                        <div className="mb-3"><span className="fw-bolder">English</span>
                            <div className="progress my-2 rounded" style={{height: '20px'}}>
                                <div className="progress-bar bg-info" role="progressbar"
                                    data-aos-delay="400" data-aos-anchor=".skills-section" style={{width: '60%'}} aria-valuenow="60"
                                    aria-valuemin="0" aria-valuemax="60">B1</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Languajes