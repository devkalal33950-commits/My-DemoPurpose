import { LightningElement, wire } from 'lwc';
import allData from '@salesforce/apex/wireExGradX.accList';

 


export default class WireGradxEx extends LightningElement {
 
    searchKey='';
     col =[
        {label:'Account Id', fieldName :'Id'},
        {label:'Name', fieldName :'Name'},
        {label:'Industry', fieldName :'Industry'}
    ];
    occurederror='';
    data='';

    onInputChange(event){
        this.searchKey= event.target.value;
        console.log('onInputChange worked');
    }
        
    ButtonClicked(){
        allData({xyz:this.searchKey})
        .then(result=>{
            this.data=result;   
            console.log('ButtonClicked data fetched');
        })
        .catch(error =>{
            this.occurederror=error;
            console.log('ButtonClicked error');
        });

    }

   
}