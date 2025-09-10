import { LightningElement , api } from 'lwc';

export default class ChildApiFebEx extends LightningElement {

    @api itemName="This is child component";

    @api handleChangeValue(){
        this.itemName="This is changed";
    }
}