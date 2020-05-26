// const greeter = require('./Greeter.js');
// document.querySelector('#root').appendChild(greeter());

import React from "react";
import {render} from "react-dom";
import Greeter from "./Greeter";
import Sass from "./sass"

import './main.css';//导入css文件

render([<Greeter />,<Sass />],document.getElementById('root'));
// render(<Sass />,document.getElementById('root'));