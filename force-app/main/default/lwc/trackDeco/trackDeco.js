import { LightningElement , track } from 'lwc';

export default class TrackDeco extends LightningElement {

    @track FullName = {firstname:"" , lastname : ""};

    handlechange(event){
     const field = event.target.name;
     

     if(field === 'firstname'){
        this.FullName.firstname = event.target.value;
     }
     else if
     (field === 'lastname'){
        this.FullName.lastname = event.target.value;
     }
    }




}