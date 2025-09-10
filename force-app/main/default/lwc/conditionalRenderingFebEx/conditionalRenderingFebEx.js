import { LightningElement } from 'lwc';

export default class ConditionalRenderingFebEx extends LightningElement {

    onClicked= 'Show';
    ShowMe='After Clicking on Show Button';
    cardVisible=false;

    onClickHandler(event){
        const myLabel=event.target.label;

        if(myLabel ==='Show' ){
            this.onClicked='Hide';
            this.cardVisible=true;
         }
         else if(myLabel==='Hide'){
            this.onClicked='Show';
            this.cardVisible=false;

         }
         
    }
}