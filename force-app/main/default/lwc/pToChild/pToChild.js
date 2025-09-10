import { LightningElement,api } from 'lwc';

export default class PToChild extends LightningElement {
   @api counter=0;

   @api maximizeCounter(){
    this.counter +=100;
   }
}