import { LightningElement, wire, track } from 'lwc';
import getAccList from '@salesforce/apex/wireDemoClassAndComboBoxClass.getAccList';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Account Id', fieldName: 'Id' }
]
export default class WireDemo extends LightningElement {

    @track columns = columns;
    @track data = [];

    @wire(getAccList)

    wiredAcc({ data, error }) {

        if (data) {
            this.data = data;
        }
        else if (error) {
            console.log("Error occured")
        }

    }
}