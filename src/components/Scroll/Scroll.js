import React from 'react';

const Scroll = (props) => {
    return ( 
        <div style={{overflowY: 'scroll', height: '42rem'}} id='resScroll'>
            {props.children}
        </div>
     );
}
 
export default Scroll;