import { LightningElement, wire, track } from 'lwc';
import getAccountss from '@salesforce/apex/wireFebExClass.getAccounts';

const showColumn=[
    {label: 'Account Name',fieldName: 'Name'},
    {label: 'Account Id',fieldName: 'Id'}   
];
export default class WireFebEx extends LightningElement {

    newcolumns=showColumn;
    accounts;
    key='';
    
    changeHandler(event){
         this.key=event.target.value;

    }

    @wire(getAccountss,{keyword:'$key'})    
      mywiredAcc({data,error}){

        if(data){
            this.accounts=data;
      }
      else if(error){
          console.log(error);
      }

    }
}