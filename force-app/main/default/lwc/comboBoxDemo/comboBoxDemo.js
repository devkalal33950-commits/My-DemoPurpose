import { LightningElement , track } from 'lwc';
import getAccList from '@salesforce/apex/wireDemoClassAndComboBoxClass.getAccList';

export default class ComboBoxDemo extends LightningElement {
    @track value = '';
    @track  accoptions=[];

    get getAccounts() {
        return this.accoptions;
    }


    connectedCallback() {
        getAccList()
            .then(result =>{
            let arr = [];
            for (var i = 0; i< result.length; i++) {
                arr.push({
                    label: result[i].Name,
                    value: result[i].Id })
            }
            this.accoptions = arr;
        })

    }
        handelchange(event) {
        this.value = event.detail.value;
    }
}