import React from 'react';
import HotBrand from './HotBrand/index'
import Matches from './matches';
import Enrollment from './Enrollment';

const Home = () =>{
    return(
        <div className="bck_blue">
            <HotBrand/>
            <Matches/>
            <Enrollment/>
        </div>
    )
}

export default Home;