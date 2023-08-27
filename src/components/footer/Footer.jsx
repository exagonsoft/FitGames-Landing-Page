import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/fglogo.png";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./footer.css"

const Footer = () => {
  const actualYear = new Date().getFullYear(); 
  return (
    <footer>
        <div className="container footer-container">
            <article>
                <Link to="/#" className="logo">
                  <img src={Logo} alt="logo" />
                </Link>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto in molestiae saepe perferendis dicta odio laboriosam incidunt! Dolor, magni voluptate.
                </p>
                <div className="footer-socials">
                    <a href='https://linkedin.com/' target='_blank' rel='noreferrer noopener'>{<FaLinkedin />}</a>
                    <a href='https://facebook.com/' target='_blank' rel='noreferrer noopener'>{<FaFacebook />}</a>
                    <a href='https://instagram.com/' target='_blank' rel='noreferrer noopener'>{<FaInstagram />}</a>
                    <a href='https://twitter.com/' target='_blank' rel='noreferrer noopener'>{<FaTwitter />}</a>
                </div>
            </article>
            <article className='footer-permalinks'>
                <h4>Permalinks</h4>
                <Link to='/about/#'>About</Link>
                <Link to='/plans/#'>Plans</Link>
                <Link to='/trainers/#'>Trainers</Link>
                <Link to='/gallery/#'>Gallery</Link>
                <Link to='/contact/#'>Contact</Link>
            </article>
            <article className='footer-permalinks'>
                <h4>Insights</h4>
                <Link to='/s'>Blog</Link>
                <Link to='/s'>Case Studies</Link>
                <Link to='/s'>Events</Link>
                <Link to='/s'>Comunities</Link>
                <Link to='/s'>FAQs</Link>
            </article>
            <article className='footer-permalinks'>
                <h4>Get  in Touch</h4>
                <Link to='/contact'>Contact</Link>
                <Link to='/s'>Support</Link>
            </article>
        </div>
        <div className="footer-copyrights">
            <small>{`2017 - ${actualYear}`} FlexSport &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer