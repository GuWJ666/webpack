import React,{Component} from 'react';
import config from './config.json';

import styles from  './Greeter.css';//导入css文件

// var config = require('./config.json');
// module.exports = function(){
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
// }

class Greeter extends Component{
    render(){
        return (
            <div className={styles.root}>
                {config.greetText}
                <div className={styles.cell}></div>
            </div>
        )
    }
}

export default Greeter