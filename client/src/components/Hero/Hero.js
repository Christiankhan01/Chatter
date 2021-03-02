import React from 'react';
import '../Hero/Hero.css';
import Typing from 'react-typing-animation';
import {useHistory} from 'react-router-dom';  

const Hero = () => {
    
    const history = useHistory(); 
    
    const routeChange = () => {
        let path = `join`; 
        history.push(path); 
    }
    
    function closeTab()  {
        window.open("", '_self').window.close();

    }
    return (

        <div className="container  ">
            <div className="center  ">
                <div className="row ">
                    <div className="col-12 col-sm-12 col-md-6">
                        <Typing speed={150}>
                        <Typing.Delay ms={500} />
                            <h4>Welcome to Chatter! <br /><br /></h4>
                        </Typing>
                        <p> A place to chat with your friends with no registration required! <br /><br /> Simply Enter a name and create or join a room!</p>
                    </div>

                    <div className="col-12 col-sm-12 col-md-3">
                        <h1>Image</h1>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3">
                        <h1>Image</h1>
                    </div>
                </div>
                <button color="link" onClick={routeChange}>Enter</button>
                
            </div>
        </div>


    )
}

export default Hero; 
