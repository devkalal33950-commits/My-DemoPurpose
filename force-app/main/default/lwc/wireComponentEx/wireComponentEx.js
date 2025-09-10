import { LightningElement , track, wire } from 'lwc';
import getAccList from "@salesforce/apex/accHandlerClass.getAccList";


const  columns=[
   
        { label : 'Account Id', fieldName : 'Id'},
        {label : 'Account Name' , fieldName : 'Name'}

]

export default class WireComponentEx extends LightningElement {

@track
data = [];

@track 
columns = columns;

@wire (getAccList)



fetchedAccounts ({data,error}){

    if(data){
        this.data = data;  
    }
    else if (error){
        console.log("Error" + error)
    }
}

}