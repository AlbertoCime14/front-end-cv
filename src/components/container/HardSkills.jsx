import React from 'react'

const HardSkills = ({ hardskills = [] }) => {
    return (
        <div className="shadow-1-strong bg-white my-5 p-5" id="hard_skills">
            <div className="skills-section">
                <h2 className="h2 fw-light mb-4">Hard Skills</h2>
                <div className="row">
                    <div className="col-md-12">

                        {
                            hardskills.map((hardskill, index) => {

                                return (

                                    <div key={index} className="mb-3"><span className="fw-bolder">{hardskill.Nameskill}</span>
                                        <div className="progress my-2 rounded" style={{ height: '20px' }}>
                                            <div className="progress-bar bg-info" role="progressbar" data-aos-delay="100"
                                                data-aos-anchor=".skills-section" style={{ width: `${hardskill.porcent}` }} aria-valuenow="95" aria-valuemin="0"
                                                aria-valuemax="100">{hardskill.level}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

export default HardSkills