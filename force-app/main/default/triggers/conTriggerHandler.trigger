trigger conTriggerHandler on Contact (before insert , before delete , after insert , after update , after delete , after undelete) {

    
     
    if(Trigger.isBefore){
       
        //08
        if(Trigger.isdelete){
            conClassHandler.noAssociatedConDeletion(Trigger.old);
        }
        
        //11
        if(Trigger.isInsert){
            conClassHandler.noMoreThanTwoCon(Trigger.New);
        }
        
        
        
    }
    
    
    if(Trigger.isAfter){
        
        /*29
        
        if(Trigger.isInsert || Trigger.isUpdate || Trigger.isDelete || Trigger.isUndelete){
            conClassHandler.sumOfAmntOfConOnRelAcc(Trigger.new);
        }
    }*/
        
        //30
         if(Trigger.isAfter){      
               
        if(Trigger.isInsert || Trigger.isUpdate || Trigger.isDelete || Trigger.isUndelete){
            conClassHandler.getContAmountOnAcc(Trigger.new);
        }
         }
    }
 
        
    
    
    
    
  

}