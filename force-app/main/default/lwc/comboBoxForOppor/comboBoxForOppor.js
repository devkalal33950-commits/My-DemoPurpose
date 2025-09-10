import { LightningElement, track } from 'lwc';
import getoppoList from '@salesforce/apex/OppoCombodemoClass.getoppoList';

export default class ComboBoxForOppor extends LightningElement {
    @track oppovalue = '';
    @track oppoOptions = [];
    oppId=''
    OppCloseDate=''

    get getOpporunity() {
    return this.oppoOptions

    }

    connectedCallback() {

        getoppoList()
            .then(result => {
                console.log(result)
                let arr = []
                for (var i = 0; i < result.length; i++) {
                    arr.push({ label: result[i].Name, value:result[i].Id})
                }
                this.oppoOptions =arr
                console.log(JSON.stringify(this.oppoOptions))
            })
            
    }
    handelchange(event) {
        this.oppovalue = event.detail.value;
        console.log(this.oppovalue)
    }
}