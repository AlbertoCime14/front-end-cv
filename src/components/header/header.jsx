import React, { Fragment } from 'react'

const Header = () => {
    return (
        <Fragment>
            <header className="d-print-none">
                <div className="container text-center text-lg-left">
                    <div className="pt-4 clearfix">
                        <h1 className="site-title mb-0">Alberto Cime</h1>
                        <div className="site-nav">
                            <nav role="navigation">
                                <ul className="nav justify-content-center">
                                    <li className="nav-item"><a className="nav-link" href="#about" title="About"><span className="menu-title">Summary</span></a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="#experience" title="Experience"><span className="menu-title">Experience</span></a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="#soft_skills" title="Skills"><span className="menu-title">Soft Skills</span></a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="#hard_skills" title="Skills"><span className="menu-title">Hard Skills</span></a>
                                    </li>           
                                    <li className="nav-item"><a className="nav-link" href="#languajes" title="Experience"><span className="menu-title">Languajes</span></a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="#awards" title="Experience"><span className="menu-title">Awards</span></a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="#education" title="Education"><span className="menu-title">Education</span></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div >
            </header >
        </Fragment >
    )
}

export default Header