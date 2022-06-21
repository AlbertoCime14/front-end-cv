import React, { Fragment } from 'react'

const Footer = () => {
    return (
        <Fragment>
            <footer className="pt-4 pb-4 text-muted text-center d-print-none">
                <div className="container">
                    <div className="my-3">
                        <div className="h4">Alberto Cime</div>
                        <div className="footer-nav">
                            <nav role="navigation">
                                <ul className="nav justify-content-center">
                                    <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/in/alberto-orlando-cime-castellanos-4405b6225/" title="Linkedin"><i
                                        className="fab fa-linkedin"></i><span className="menu-title sr-only">Linkedin</span></a>
                                    </li>
                                    
                                   
                                    <li className="nav-item"><a className="nav-link" href="https://github.com/mercedes06" title="Github"><i
                                        className="fab fa-github"></i><span className="menu-title sr-only">Github</span></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="text-small">
                        <div className="mb-1">All rights reserved.</div>
                        <div>Design - <a>Alberto Cime</a></div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer