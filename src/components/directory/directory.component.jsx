import React from 'react';
import './directory.style.scss';
import sections from './directory.data';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: sections
        }
    }

    render () {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, id, imageUrl, size}) => (
                        <MenuItem title={title} id={id} imageUrl={imageUrl} size={size}/>
                    ))
                }
                </div>
        )
    }
}

export default Directory;