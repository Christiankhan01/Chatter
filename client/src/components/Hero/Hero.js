import React from 'react';
import '../Hero/Hero.css';
import Typing from 'react-typing-animation';
import { useHistory } from 'react-router-dom';
import chatLogo from '../../images/chatLogo.png';
import joinImg from '../../images/joinImg.png';

const Hero = () => {

    const history = useHistory();

    const routeChange = () => {
        let path = `join`;
        history.push(path);
    }

    function closeTab() {
        window.open("", '_self').window.close();

    }
    
    return (

        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                    <img className="" img-fluid = "true" src={ chatLogo } alt="Chat Logo" width="300" height="250" />
                </div>
            </div>
            <div className="">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <Typing speed={ 150 }>
                            <Typing.Delay ms={ 500 } />
                            <h4>Welcome to Chatter! <br /><br /></h4>
                        </Typing>
                        <p className="text-nowrap p-font"> A place to chat with your friends with no registration required! <br /><br /> Simply Enter a name and create or join a room!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-6 ">
                        <img title = "No Signup Required!" text-center="true" className="pixelated" src = {joinImg} alt = "Join Image" width="200" height="350" />
                    </div>
                    <div className="col-sm-6 col-md-6 ">
                        <h1>Image</h1>
                    </div>
                </div>
                <br/>
                <button className="button-hero" onClick={ routeChange }>Enter</button>

            </div>
        </div>


    )
}

export default Hero; 
