import React, {Components} from 'react';
import airbnb_img from '../Images/airbnb_1.png';
import '../style.css';
export default function Navbar(){
    return(
        <nav><img src={airbnb_img} alt="image" className='nav--logo' /></nav>    
    )
}

