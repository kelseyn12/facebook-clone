import { Avatar } from '@mui/material';
import React from 'react';
import './SidebarRow.css';

function SidebarRow({ src, Icon, title }) {
  return (
    <div className='sidebarRow'>
        {src && <Avatar src={src} />}
        {/*if there is a src then render out avatar//*/}
        {Icon && <Icon />} 
        {/*if passed in an Icon.. only then will we render out Icon. 
        Can pass component (icon) as a prop, but have to use capital letter*/}

        <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow;