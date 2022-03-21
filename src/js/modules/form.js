export default class Form{
    constructor(form){
        this.forms = document.querySelectorAll(form);
        this.inputs = document.querySelectorAll('input');
        this.message={
            loading: 'laoding',
            success: 'succes',
            failure: 'failure'
        }
        this.path = './assets/question.php';
    }

    async postData(url, data){
        const res = await fetch(url, {
            method: 'POST',
            body: data
        })

        return await res.text();
    }

    clearItem(){
        this.inputs.forEach(item=>{
            item.value = '';
        })
    }
    maskNumber(){
        let setCursorPosition = (pos, elem) => {
            elem.focus();
            
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                let range = elem.createTextRange();
    
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };
    
        function createMask(event){
            let matrix = '+1 (___) ___-____',
                i=0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');
    
            if (def.length >= val.length){
                val = def;
            }
    
            this.value = matrix.replace(/./g, function(a){
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });        
    
            if(event.type === 'blur'){
                if(this.value.length === 2){
                    this.value = '';
                }
            }else{
                setCursorPosition(this.value.length, this);
            }
        }
    
        let inputs = document.querySelectorAll('[name="phone"]');
        inputs.forEach( input => {
            input.addEventListener( 'click', createMask);
            input.addEventListener( 'input', createMask);
            input.addEventListener( 'blur', createMask);
        });
    }

    checkTextInputs(){

        const txtInputs = document.querySelectorAll('[name="email"]');
    
        txtInputs.forEach(item =>{
            item.addEventListener('keypress', function(e){
                if(e.key.match(/[^a-z 0-9 @ \.]/ig)){
                    e.preventDefault();
                }
            })
        })
    }

   init(){
       this.maskNumber();
       this.checkTextInputs();
       this.forms.forEach(item=>{
           item.addEventListener('submit', (e)=>{

                e.preventDefault();

                let  statusMessage = document.createElement('div');
                     item.parentNode.appendChild(statusMessage);
                     statusMessage.textContent = this.message.loading; 

                let formData = new FormData(item);
                this.postData(this.path, formData)
                    .then(res=>{
                        console.log(res);
                        statusMessage.textContent = this.message.success; 
                    })
                    .catch(()=>{
                        statusMessage.textContent = this.message.failure; 
                    })
                    .finally(()=>{
                        setTimeout(()=>{
                            statusMessage.remove();
                            this.clearItem();
                        },2000);
                    });
           });
       });
   }
   
}