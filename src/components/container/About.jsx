import React from 'react'

const About = ({summary=[], contact=[]}) => {
    //console.log(summary[0].Description);
    return (
        <div className="shadow-1-strong bg-white my-5 p-5" id="about">
            <div className="about-section">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="h2 fw-light mb-4">About Me</h2>
                        <p>{summary.Description}.</p>
                    </div>
                    <div className="col-md-5 offset-lg-1">
                        <div className="row mt-2">
                            <h2 className="h2 fw-light mb-4">Bio</h2>
                            <div className="col-sm-5">
                                <div className="pb-2 fw-bolder"><i className="far fa-calendar-alt pe-2 text-muted"
                                    style={{width:'24px', opacity:'0.85'}}></i> Birth</div>
                            </div>
                            <div className="col-sm-7">
                                <div className="pb-2">{contact.Birth}</div>
                            </div>
                            <div className="col-sm-5">
                                <div className="pb-2 fw-bolder"><i className="far fa-envelope pe-2 text-muted"
                                    style={{width:'24px', opacity:'0.85'}}></i> Email</div>
                            </div>
                            <div className="col-sm-7">
                                <div className="pb-2">{contact.Email}</div>
                            </div>
                            <div className="col-sm-5">
                                <div className="pb-2 fw-bolder"><i className="fas fa-phone pe-2 text-muted"
                                    style={{width:'24px', opacity:'0.85'}}></i> Phone</div>
                            </div>
                            <div className="col-sm-7">
                                <div className="pb-2">{contact.Phone}</div>
                            </div>
                            <div className="col-sm-5">
                                <div className="pb-2 fw-bolder"><i className="fas fa-map-marker-alt pe-2 text-muted"
                                    style={{width:'24px', opacity:'0.85'}}></i> Address</div>
                            </div>
                            <div className="col-sm-7">
                                <div className="pb-2">{contact.Address}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About