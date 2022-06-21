import React,{Fragment} from 'react'

const Experience = ({ experiences = [] }) => {
    //console.log( experiences.responsabilities);
    return (
        <div className="shadow-1-strong bg-white my-5 p-5" id="experience">
            <div className="work-experience-section">
                <h2 className="h2 fw-light mb-4">Work Experience</h2>
                <div className="timeline">
                    {
                        experiences.map((experience, index) => {

                            return (
                                <div className="timeline-card timeline-card-info" data-aos-delay="0" key={index}>
                                    <div className="timeline-head px-4 pt-3">
                                        <div className="h5">{experience.Position} <span className="text-muted h6">at {experience.company}</span></div>
                                    </div>
                                    <div className="timeline-body px-4 pb-4">
                                        <div className="text-muted text-small mb-3">{experience.TimeWork}</div>

                                        <ul>
                                            {   
                                                
                                                experience.responsabilities.map((responsability, key) => {
                                                    const index = key+1;
                                                    
                                                    return (
                                                        <div key={key}>
                                                            <li key={key}>
                                                               {responsability.Responsibility} 
                                                                
                                                            </li>
                                                        </div>
                                                    )
                                                    
                                                })
                                            }

                                        </ul>

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

export default Experience