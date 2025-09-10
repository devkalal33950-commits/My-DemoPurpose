import { LightningElement } from 'lwc';

export default class ChildCompoCommunication extends LightningElement {

    handleSubtract(){
        this.dispatchEvent(new CustomEvent ('substaction'));
    }
    handleAdd(){
        this.dispatchEvent(new CustomEvent('addition'));
    }
    handlemutiply(event){
        const valueForMultiply= event.target.value;
        

        this.dispatchEvent (new CustomEvent ('multiply' , {

            detail:valueForMultiply

        }))      
    }
}