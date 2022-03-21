export default class Accordion {
    constructor(btns){
        this.btns = document.querySelectorAll(btns);
    }

    init(){
        this.btns.forEach(btn=>{
            btn.addEventListener('click', ()=>{
               const sibling = btn.parentNode.nextElementSibling;
               sibling.classList.toggle('msg');           
               sibling.style.marginTop = '20px';           
            })
        })
        
    }   
}