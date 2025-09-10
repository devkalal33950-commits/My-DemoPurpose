import { LightningElement } from 'lwc';

export default class ApiFebEx extends LightningElement {

    onClickHandler(){
        this.template.querySelector("c-child-api-feb-ex").handleChangeValue();
    }
}