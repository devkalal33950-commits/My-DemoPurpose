import { LightningElement , track} from 'lwc';
import getconList from '@salesforce/apex/ContactComboBoxClass.getconList';

export default class ContactComboBoxDemo extends LightningElement {
@track contactId='';
@track newOptions =[];


get selectOptions(){
    return this.newOptions;

}

connectedCallback(){
    getconList()
    .then(result =>{
        let arr=[]
        for(var i=0; i < result.length ; i++ ){
            arr.push({label: result[i].Name , value: result[i].Id})
        }
        this.newOptions = arr;
    })
}

handleChange(event){
    this.contactId = event.detail.value;
}

}