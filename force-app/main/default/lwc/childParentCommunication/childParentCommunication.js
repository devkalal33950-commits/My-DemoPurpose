import { LightningElement } from 'lwc';

export default class ChildParentCommunication extends LightningElement {

    countValue=0;

    handleDecrement(){
        this.countValue--;
    }
    handleIncrement(){
        this.countValue++;
    }
    handleMultiply(event){
        const multiplynumber = event.detail;
        this.countValue *= multiplynumber;

    }
}