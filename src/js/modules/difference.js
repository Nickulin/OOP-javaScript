export default class Difference{
    constructor(oldOfficer, newOfficer, items){

        try{this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.oldCounter = 0;
            this.newCounter = 0;
            this.items = items;}
        catch(e){}
        
    }

    hideItems(hide){
        hide.querySelectorAll(this.items).forEach((item, i, arr)=>{
            if(i !== arr.length -1){
                item.style.display = 'none';
            }
        });
    }

    bindTriggers(officer, items, container){
        officer.querySelector('.plus').addEventListener('click', ()=>{
            if(container !== items.length -2){
                items[container].classList.add('animated');
                items[container].classList.add('slideInDown');
                items[container].style.display = 'flex';
               
                container ++;
            }else{
                items[container].classList.add('animated');
                items[container].classList.add('slideInDown');
                items[container].style.display = 'flex';                
                items[this.newItems.length -1].remove();
            }
        });
    }
    init(){
        try{}catch(e){
            this.hideItems(this.oldOfficer);
            this.hideItems(this.newOfficer);
            this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
            this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
        }        
    }
}