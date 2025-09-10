import { LightningElement } from 'lwc';

export default class ParentCardNewapi extends LightningElement {

    changeClick(){
        this.template.querySelector("c-child-comp").changeValue();
    }
}