import { LightningElement } from 'lwc';

export default class ParentExLwc extends LightningElement {
    valueCount = 0;

    handleDecrease(){
        this.valueCount--;
    }
    handleIncrease(){
        this.valueCount++;
    }
}