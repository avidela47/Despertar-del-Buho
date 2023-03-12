import React from "react";
import logo from "../../../images/logo.png";
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter, BsMailbox } from 'react-icons/bs';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { GiRotaryPhone } from 'react-icons/gi';
import "./Footer.css";

const Footer = () => {
    return (
        <footer id="footer">

            <div className='leftFooter'>
                <h4>Contacto</h4>
                <div><FaMapMarkedAlt className='map' />
                    <address className='address'>Despertar del Buho <br />Cordoba Capital - Argentina <br /> CP 5000
                    </address><br />
                    <a href='https://api.whatsapp.com/send?phone=3512890110&text=Hola' className='map2'><GiRotaryPhone className='map' /><br />+54 351 2890110
                    </a><br /><br />
                    <a href='mailito:despertardelbuho@gmail.com' className='map2'><BsMailbox className='map' /><br />despertardelbuho@gmail.com
                    </a>
                </div>
            </div>

            <div className="midFooter">
                <img src={logo} alt="logo" />
                <h1>DESPERTAR DEL BUHO</h1>
                <p>La alta calidad es nuestra primera prioridad</p>
                <br />
                
            </div>

            <div className="rightFooter">
                <h4>Seguinos en redes</h4>
                <div className='rightFooter'>
                    <a className='text-white' href="http://facebook.com/despertardelbuho">
                        <BsFacebook className='fs-4' />
                    </a>Facebook
                    <a className='text-white' href="http://instagram.com/despertardelbuhook">
                        <BsInstagram className='fs-4' />
                    </a>Instagram
                    <a className='text-white' href="http://twitter.com/despertardelbuhook">
                        <BsTwitter className='fs-4' />
                    </a>Twitter
                    <a className='text-white' href="http://yoytube.com/despertardelbuhook">
                        <BsYoutube className='fs-4' />
                    </a>Youtube
                </div>
            </div>
        </footer>
    );
};

export default Footer;
