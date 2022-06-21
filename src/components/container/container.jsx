import React, { useEffect, useState } from 'react';
import axios from "axios";
import Intro from './Intro';
import About from './About';
import SoftSkills from './SoftSkills';
import HardSkills from './HardSkills';
import Languajes from './Languajes';
import Experience from './Experience';
import Education from './Education';
import Awards from './Awards'


const Container = () => {
    const [dataCV, setData] = useState([]);
    const getData = async () => {
        const { data } = await axios.get(`https://apinodejs-353918.uw.r.appspot.com/api_v1/user/infoCv`);
        setData(data.dataCV);
    };

    useEffect(() => {
        getData();
      }, []);


    return (

        <div className="page-content">
            <div className="container">
                <Intro 
                    username={dataCV.name} 
                />
                <About
                    summary={dataCV.summary} 
                    contact={dataCV.contact} 
                />
                <Experience
                    experiences={dataCV.experience} />
                <SoftSkills 
                    softskills={dataCV.soft_skills}
                />
                <HardSkills 
                    hardskills={dataCV.hards_skills}
                />
                <Languajes
                    languajes = {dataCV.languajes}
                />
                <Awards 
                    awards={dataCV.awards}
                />
                <Education 
                    education={dataCV.education}
                />


            </div>
        </div>

    )
}

export default Container