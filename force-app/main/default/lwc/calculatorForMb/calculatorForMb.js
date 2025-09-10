import { LightningElement } from 'lwc';

export default class CalculatorForMb extends LightningElement {

    showCalculator;
    Di1;
    Di2;

    showcalci(event)
    {
        this.showCalculator= true;
    }
    hidecalci(event){
        this.showCalculator= false;

    }
    getdig1(event)
    {
         this.Di1 = event.target.value;
    }
    getdig2(event)
    {
         this.Di2= event.target.value;
    }
}