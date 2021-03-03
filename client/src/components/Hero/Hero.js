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

        <>
            <div className="row">

                <div className=" text-center  col-12 col-sm-12 col-md-12">
                    <img className="" img-fluid="true" src={ chatLogo } alt="Chat Logo" width="300" height="250" />
                </div>


                <div className="col-sm-12 col-md-4 col-lg-6">
                    <div className="text-margin">
                        <Typing speed={ 150 }>
                            <Typing.Delay ms={ 500 } />
                            <h4>Welcome to Chatter! </h4>
                            <br /><br />
                        </Typing>
                        <p className="p-font"> A place to chat with your friends with<mark className="blue" > no registration required!</mark> <br /><br /> Simply Enter a name and create or join a room!</p>
                        <button className="button-hero" onClick={ routeChange }>Enter</button>
                    </div>
                </div>

                
                    <div className="col-sm-8 col-md-4 col-lg-3 text-center">
                        <img title="No Signup Required!" text-center="true" className="pixelated" src={ joinImg } alt="Join Image" width="200" height="350" />
                    </div>

                    <div className="col-sm-8 col-md-3 col-lg-3 text-center">
                        <img title="No Signup Required!" text-center="true" className="pixelated" src={ joinImg } alt="Join Image" width="200" height="350" />
                    </div>
                
                <br />

                <div className="">

                </div>
            </div>
        </>


    )
}

export default Hero; 
