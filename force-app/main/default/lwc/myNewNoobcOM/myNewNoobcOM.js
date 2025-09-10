import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class MyComponent extends LightningElement {

    myTitle =  "Salesforce Noob";

    //1st function

    handleClick(){
        this.showToast()
    }
    //2nd Function
    showToast() {
        const event = new ShowToastEvent({
            title: 'Show Toast Demo',
            message:
                'Showing Show Toast.',
            variant :'error',
        });
        this.dispatchEvent(event);
    }
}