import { LightningElement , api } from 'lwc';

import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_RATING from'@salesforce/schema/Account.Rating';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
import ACCOUNT_OWNERSHIP from '@salesforce/schema/Account.Ownership';

export default class RecordViewFormLWC extends LightningElement {


    
    accountName = ACCOUNT_NAME;
    accountRating = ACCOUNT_RATING;
    accountPhone = ACCOUNT_PHONE;
    accountOwnership = ACCOUNT_OWNERSHIP;


    @api recordId;
    @api objectApiName;


}