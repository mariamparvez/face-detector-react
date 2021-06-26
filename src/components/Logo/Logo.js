import React from 'react';
import 'tachyons';
import logo from './logo.png';
import Tilt from 'react-tilt';

const Logo = () => {
    return(
        <div style=
        {{
            overflow: 'hidden',
            position: 'fixed',
            top: 0,
            width: '100%',
       }}>
            <Tilt className="Tilt br1 shadow-1" options={{ max : 25 }} style=
            {{ 
                height: 120, 
                width: 120,
                margin: '4rem'
            }} >
                <div className="Tilt-inner">
                    <img src={logo} alt='logo' style=
                    {{ 
                        margin: '0',
                        display: 'block',
                        textAlign: 'center'
                    }}/>
                </div>
            </Tilt>
        </div>
    )
}; export default Logo;