import React from 'react'

const Intro = ({username}) => {
    return (
        
            <div className="shadow-1-strong bg-white my-5" id="intro">
                <div className="bg-info text-white">
                    <div className="cover bg-image"><img src="/../../resources/images/header-background.jpg" />
                        <div className="mask" style={{backgroundColor:'rgba(0, 0, 0, 0.7)', backdropfilter: 'blur(2px)'}}>
                            <div className="text-center p-5">
                                <div className="avatar p-1"><img className="img-thumbnail shadow-2-strong" src="https://apinodejs-353918.uw.r.appspot.com/api_v1/user/imageProfile" width="160"
                                    height="160" />
                                </div>
                                <div className="header-bio mt-3">
                                    <div data-aos-delay="0">
                                        <h2 className="h1">{username}</h2>
                                        <p>Jr. Systems Engineer</p>
                                    </div>
                                    <div className="header-social mb-3 d-print-none" data-aos-delay="200">
                                        <nav role="navigation">
                                            <ul className="nav justify-content-center">
                                                <li className="nav-item"><a className="nav-link" target="__blank" href="https://www.linkedin.com/in/alberto-orlando-cime-castellanos-4405b6225/"
                                                    title="Twitter"><i className="fab fa-linkedin"></i><span
                                                        className="menu-title sr-only">Linkedin</span></a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="d-print-none"><a className="btn btn-outline-light btn-lg shadow-sm mt-1 me-3" target="__blank"
                                        href="/../../resources/images/CV_ALBERTO_CIME_CASTELLANOS_english.pdf" data-aos-delay="700">Download CV</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Intro