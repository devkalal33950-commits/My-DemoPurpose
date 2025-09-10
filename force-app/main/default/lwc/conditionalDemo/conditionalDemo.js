import { LightningElement , track} from 'lwc';

export default class ConditionalDemo extends LightningElement {

    @track onclickupdate = 'Show';
           myTitle = "Salesforce Noob";
     @track cardVisible = false;      

    handlechange(){
       const label = event.target.label;

       if (label ==="Show"){
           this.onclickupdate = "Hide";
           this.cardVisible = true;

       }
       else if (label=== "Hide"){
          this.onclickupdate = "Show";
          this.cardVisible = false;
       }


    }

}