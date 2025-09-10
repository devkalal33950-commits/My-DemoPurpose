import { LightningElement,api } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';

export default class RecordForm extends LightningElement {

   @api objectApiName 
   fields = ACCOUNT_NAME;




}