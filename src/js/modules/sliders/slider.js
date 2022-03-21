export default class Slider {
    constructor({container = null, 
                 btns = null, 
                 next = null, 
                 prev = null,
                 activeClass ='',
                 animate,
                 autoplay } = {}){
        this.container = document.querySelector(container);
        try{ this.slides = this.container.children;}catch(e){}       
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);       
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
    }
}