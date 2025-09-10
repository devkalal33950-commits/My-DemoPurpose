import { LightningElement , api} from 'lwc';

export default class ChildComp extends LightningElement {

@api itemName = "Sslesforce Noob";

      @api changeValue(){
        this.itemName= "Changed Value"
      } 

}