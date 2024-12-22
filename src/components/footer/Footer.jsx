import React from 'react'
import {Link} from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
<footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Toka</h1>
        <ul className="footer__list">
            <li>
                <Link to="/about" className="footer__link">About</Link>
            </li>

            <li>
                <Link to="/projects" className="footer__link">Projects</Link>
            </li>

            <li>
                <Link to="/contact" className="footer__link">Contact</Link>
            </li>
            
        </ul>

       <span className="footer__copy">&#169; Toka_Mohsen. All rights reserved</span>
    </div>
</footer>
  )
}

export default Footer
