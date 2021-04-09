import fixHeader from "./modules/fixHeader";
import nav from "./modules/nav";
import slider from "./modules/slider";

document.addEventListener('DOMContentLoaded', () =>{
    fixHeader('.page_header');
    nav();
    slider('#main-slider','#second-slider');
})