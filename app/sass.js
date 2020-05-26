import React,{Component} from 'react';
import config  from  './config.json';

import sass from './sass.scss';

class Sass extends Component{
    render(){
        return (
            <div className={sass.wrapper}>
                <div className={sass.header}>
                    <div className={sass.cell1}></div>
                    <div className={sass.cell2}></div>
                    <div className={sass.cell3}></div>
                    <div className={sass.cell4}></div>
                    <div className={sass.cell5}></div>
                </div>
                <div className={sass.section}>{config.sassText}</div>
                <div className={sass.footer}></div>
            </div>
        )
    }
}

export default Sass;