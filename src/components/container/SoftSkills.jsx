import React from 'react'

const SoftSkills = () => {
    return (
        <div className="shadow-1-strong bg-white my-5 p-5" id="soft_skills">
            <div className="skills-section">
                <h2 className="h2 fw-light mb-4">Soft Skills</h2>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3"><span className="fw-bolder">HTML</span>
                            <div className="progress my-2 rounded" style={{ height: '20px' }}>
                                <div className="progress-bar bg-info" role="progressbar" data-aos-delay="100"
                                    data-aos-anchor=".skills-section" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0"
                                    aria-valuemax="100">Master</div>
                            </div>
                        </div>
                        <div className="mb-3"><span className="fw-bolder">CSS</span>
                            <div className="progress my-2 rounded" style={{ height: '20px' }}>
                                <div className="progress-bar bg-info" role="progressbar" data-aos-delay="200"
                                    data-aos-anchor=".skills-section" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0"
                                    aria-valuemax="100">Expert</div>
                            </div>
                        </div>
                        
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SoftSkills