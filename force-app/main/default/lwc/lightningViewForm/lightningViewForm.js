import { LightningElement , api} from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
import ACCOUNT_RATING from '@salesforce/schema/Account.Rating';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';

export default class LightningViewForm extends LightningElement {
       
    
    accountName = ACCOUNT_NAME ;
    accountPhone = ACCOUNT_PHONE;
    accountRating = ACCOUNT_RATING;
    accountIndustry = ACCOUNT_INDUSTRY;

    @api recordId ;
    @api objectApiName;


    }