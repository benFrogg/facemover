import React from 'react';
import { Button } from './Button';
import '../../App.css';
import './heroSection.css';
import Proposal from './Proposal';
import Requirement from './Requirement';
import Design from './Design';
import Progress from './ProgressReport';
import vid from "../../img/bg_vid.mp4";
import UserGuide from './UserGuide';

function heroSection() {


    return (
        <div className='hero-bg'>
        <div className='hero-container' id="hero">
            <video src={console.log("test")} autoPlay loop muted />
            <h1>FaceMover Pte Ltd</h1>
            <p>Animating the image of your choice</p>
            <div className='hero-btns'>
                <UserGuide/>
            </div>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('test')}>WATCH PRODUCT DEMO <i className='far fa-play-circle' /></Button>
            </div>
            <div className='hero-btns'>
                <Proposal />
            </div>
            <div className='hero-btns'>
                <Requirement />
            </div>
            <div className='hero-btns'>
                <Design />
            </div>
            <div className='hero-btns'>
                <Progress />
            </div>
        </div>
        </div>
    );
}

export default heroSection;
