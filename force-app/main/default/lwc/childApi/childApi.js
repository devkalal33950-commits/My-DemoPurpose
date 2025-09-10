import { LightningElement,api } from 'lwc';

export default class ChildApi extends LightningElement {

   @api myTitle = "Salesforce Noob";

   @api handleChangeValue(){
       this.myTitle ="I'm getting called by Parent , after clicking of button"
   }

}