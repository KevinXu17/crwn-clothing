import React from 'react';
import './menu-item.style.scss';

const MenuItem = ({title, id, imageUrl, size}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} 
    className= {`menu-item ${size}`}>
    <div className="content">
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
    </div>
</div>
)

export default MenuItem;