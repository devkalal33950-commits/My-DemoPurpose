import { LightningElement, track,wire } from 'lwc';
import accList from '@salesforce/apex/forEachDemoClass.accList'

export default class ForEachLoop extends LightningElement {

    @track data = [];

    @wire (accList)
        myAccounts;
}