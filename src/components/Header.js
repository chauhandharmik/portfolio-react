import React from 'react';
import back from '../images/f1.jpg'
import './header.css'

const myStyle = {
    'backgroundImage' : `url( ${back} )`,
    'height' : '75vh',
    'backgroundSize' : 'cover'
}
class Header extends React.Component
{
   
    render()
    {
        return(
            <header style={myStyle}>
                <h1 className="title">
                    Dharmik chauhan
                </h1>
                <p>
                    hello this is my portfolio site
                </p>
                <a href="findout.js">Find out More</a>
            </header>
        );
    }
    
    
};

export default Header;
