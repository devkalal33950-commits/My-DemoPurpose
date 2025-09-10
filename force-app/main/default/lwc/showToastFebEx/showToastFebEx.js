import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';;

export default class ShowToastFebEx extends LightningElement {

    onClickHandler(){
        this.showToaster();
    }
 
    showToaster(){
        const event=new ShowToastEvent({
            title: 'Show Toast Demo',
            message: 'Its Done',
            variant: 'success'
        })
        this.dispatchEvent(event);
    }
}