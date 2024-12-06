import react from 'react';
import './App.css';
const Footer = () => {
    return (
        <div className="text">
            &copy; {new Date().getFullYear()} Harshal Jadhav: Thanks for visiting my page :)
        </div>
    );
}

export default Footer;