import { LightningElement } from 'lwc';

export default class ParentChildCommunication extends LightningElement {
    startCounter= 0;

    handleChange(event){
        this.startCounter=parseInt(event.target.value);
    }

    handleMaxCounter(){
         this.template.querySelector('c-p-to-child').maximizeCounter();
    }
}