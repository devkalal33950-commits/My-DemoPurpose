import { LightningElement } from 'lwc';

export default class ApiDecorator extends LightningElement {

    handleClick(){
        this.template.querySelector("c-child-api").handleChangeValue();
    }





}