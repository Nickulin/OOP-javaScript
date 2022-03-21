import MainSlider from "./modules/sliders/slider-main";
import MiniSlider from "./modules/sliders/slider-mini";
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';
import Form from "./modules/form";
import Accordion from "./modules/sliders/accordion";
import Download from "./modules/dowload";

window.addEventListener("DOMContentLoaded", ()=>{
    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render();

    const modulesPageSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
    modulesPageSlider.render();

    new VideoPlayer('.showup .play', '.overlay', '.close').init();
    new VideoPlayer('.module__video-item .play', '.overlay', '.close').init();

    new Accordion('.plus').init();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider', 
        prev: '.showup__prev', 
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider', 
        prev: '.modules__info-btns .slick-prev', 
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider', 
        prev: '.feed__slider .slick-prev', 
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active',
        animate: false,
        autoplay: true
    });
    feedSlider.init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init(); // в Difference don't use super
    new Form('.form').init(); 
    
    new Download('.download').init();

})