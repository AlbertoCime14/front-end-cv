import React from 'react'

const Education = ({education=[]}) => {
  return (
    <div className="shadow-1-strong bg-white my-5 p-5" id="education">
        <div className="education-section">
          <h2 className="h2 fw-light mb-4">Education</h2>
          <div className="timeline">
            <div className="timeline-card timeline-card-success" data-aos-delay="0">
              <div className="timeline-head px-4 pt-3">
                <div className="h5">{education.Carrer} <span className="text-muted h6">from {education.UniversityName}</span> </div>
              </div>
              <div className="timeline-body px-4 pb-4">
                <div className="text-muted text-small mb-3">{education.Generation}</div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Education