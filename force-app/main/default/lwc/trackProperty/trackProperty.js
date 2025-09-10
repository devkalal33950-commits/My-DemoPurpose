import { LightningElement , track } from 'lwc';

export default class TrackProperty extends LightningElement {

    myName="Salesforce Z2H"

    changeHandler(event){
        this.myName= event.target.value
    }

    @track address={
        city:'Pune',
        Code:12345,
        Country:'India'
    }
    trackHandler(event){
        this.address.city = event.target.value

    }

    
}