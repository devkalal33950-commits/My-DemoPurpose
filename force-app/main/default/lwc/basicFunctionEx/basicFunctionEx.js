import { LightningElement } from 'lwc';

export default class BasicFunctionEx extends LightningElement {

    myComp="this is my first basic component"; 

    onClickHandler(){
         window.alert("I am clicked");
         
    }
       
}