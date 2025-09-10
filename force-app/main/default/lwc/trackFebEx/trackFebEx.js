import { LightningElement,track } from 'lwc';

export default class TrackFebEx extends LightningElement {

   @track devobj = {
    FirstName:'',
    LastName:''

   } 

    changeHandler(event){
       

        if(event.target.label=='FirstName'){
            this.devobj.FirstName=event.target.value;
        }
        else 
            this.devobj.LastName=event.target.value;
        }

    }