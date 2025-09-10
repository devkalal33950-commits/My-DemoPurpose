import { LightningElement,api } from 'lwc';
import {ShowToastEvent}  from 'lightning/platformShowToastEvent';
import LAST_NAME     from '@salesforce/schema/Contact.LastName';
import LEAD_OBJECT     from '@salesforce/schema/Lead';
import LEAD_NAME       from '@salesforce/schema/Lead.Name';
import LEAD_PHONE      from '@salesforce/schema/Lead.Phone';
import LEAD_EMAIL      from '@salesforce/schema/Lead.Email';
import LEAD_LSOURCE    from '@salesforce/schema/Lead.LeadSource';
import LEAD_RATING     from '@salesforce/schema/Lead.Rating';



export default class RecordEditForm extends LightningElement {
    @api objectApiName
     
    lastname=LAST_NAME

     leadName      = LEAD_NAME;
     leadPhone     = LEAD_PHONE;
     leadEmail     = LEAD_EMAIL;
     leadSource    = LEAD_LSOURCE;
     leadRating    = LEAD_RATING;
     LeadId        ="Created Lead Id will be displayed here";
    
    
     handleSuccess(event){
        console.log(this.objectApiName)
         this.LeadId = event.detail.Id;
      console.log(this.LeadId )
        const events = new ShowToastEvent({
            title    : "Successfull",
            message  : "Lead Created",
            variant  : "success"
        });

        this.dispatchEvent(events);
     }
}