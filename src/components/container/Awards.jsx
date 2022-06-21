import React from 'react'

const Awards = ({ awards = [] }) => {
  return (
    <div className="shadow-1-strong bg-white my-5 p-5" id="awards">
      <div className="education-section">
        <h2 className="h2 fw-light mb-4">Awards</h2>

        {
          awards.map((award, index) => {

            return (

              <div key={index} className="timeline">
                <div className="timeline-card timeline-card-success" data-aos-delay="0">
                  <div className="timeline-head px-4 pt-3">

                    <div className="h5"> {award.award}</div>
                  </div>

                </div>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Awards