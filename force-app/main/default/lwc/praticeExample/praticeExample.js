import { LightningElement } from 'lwc';

export default class PraticeExample extends LightningElement {
    signVar=false;
    logVar=false;

    onSignHandler(){
        this.signVar=true;
        this.logVar=false;

    }
    onLogHandler()
    {
        this.logVar=true;
        this.signVar=false;

    }
}