import React from 'react';  
import './Header.css';

const Header = ({ projectsRef, contactRef }) => {
return (
<div className="main">
    <div className="Ahmed">Ahmed Huossein</div>
<nav>
<div>About</div>
<div onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>
    Projects
</div>
<div onClick={() =>contactRef.current.scrollIntoView({behavior: 'smooth'})}>
    Contact
    </div>
</nav>
</div>



);


}
export default Header;