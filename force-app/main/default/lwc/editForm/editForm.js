import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
import ACCOUNT_RATING from '@salesforce/schema/Account.Rating';

export default class EditForm extends LightningElement {

    AccountApiName = ACCOUNT_OBJECT ;
    fieldName =  ACCOUNT_NAME;
    phoneField =  ACCOUNT_PHONE;
    ratingField = ACCOUNT_RATING;
    AccountId  = " ";

    handleSuccess(event){ 

        this.AccountId =  event.detail.id;
        console.log(' this.AccountId '+ this.AccountId )

        this.showToast();
    }

    showToast() {
        const event = new ShowToastEvent({
            title: 'Get Help',
            message:
                'Salesforce documentation is available in the app. Click ? in the upper-right corner.',
        });
        this.dispatchEvent(event);
    }
 
    }