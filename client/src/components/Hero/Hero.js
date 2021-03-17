import React from 'react';
import '../Hero/Hero.css';
import Typing from 'react-typing-animation';
import { useHistory } from 'react-router-dom';
import chatLogo from '../../images/chatLogo.png';


const Hero = () => {

    const history = useHistory();

    const routeChange = () => {
        let path = `join`;
        history.push(path);
    }

    return (

        <>
            <div className="row">
                <div className=" text-center  col-12 col-sm-12 col-md-12">
                    <img className="" img-fluid="true" src={ chatLogo } alt="Chat Logo" width="300" height="250" />
                </div>


                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="text-center">
                        <Typing speed={ 150 }>
                            <Typing.Delay ms={ 500 } />
                            <h4>Welcome to Chatter! </h4>
                            <br /><br />
                        </Typing>
                        <p className="p-font"> A place to chat with your friends with<mark className="blue" > no registration required!</mark> <br /><br /> Simply Enter a name and create or join a room!</p>
                        <button className="button-hero text-center" onClick={ routeChange }>Enter</button>
                    </div>
                </div>

                
                    

            </div>
        </>


    )
}

export default Hero; 
