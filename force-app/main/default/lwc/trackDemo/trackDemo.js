import { LightningElement , track } from 'lwc';

export default class TrackDemo extends LightningElement {

   @track  fullName = {firstName: '' , lastName : ''};

 handleChange(event){
    const field = event.target.name;
     //window.alert(field)

    if (field === 'FirstName'){
        this.fullName.firstName = event.target.value;
    }
    else if (field === 'LastName'){
        this.fullName.lastName = event.target.value;
    }
 }
   
}