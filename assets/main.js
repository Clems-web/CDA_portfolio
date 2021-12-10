import "./css/style.scss";
import {cubeCrea} from './js/cube.js';
import VanillaTilt from 'vanilla-tilt';

let cubeContainer = document.getElementById('firstCubeContainer');
cubeContainer.append(new cubeCrea('#4e9f1e', '#38ff03'));

let cubeContainer2 = document.getElementById('secondCubeContainer');
cubeContainer2.append(new cubeCrea('#FF00FFBF', '#FF00FFFF'));

let cubeContainer3 = document.getElementById('thirdCubeContainer');
cubeContainer3.append(new cubeCrea('#28dee6', '#00FFFFFF'));





const presentation = document.querySelector(".js-tilt");
VanillaTilt.init(presentation);
presentation.addEventListener("tiltChange", callback);