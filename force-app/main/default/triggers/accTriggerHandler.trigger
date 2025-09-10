trigger accTriggerHandler on Account (after insert , before delete , after update) { 
      
    //09
    
    if(Trigger.isAfter){
        if(Trigger.isInsert){
            accHandlerClass.creatRelatedConRecord(Trigger.New);
        }
        
    }
    
    if(Trigger.isBefore){
      //13
        if(Trigger.isDelete){
            accHandlerClass.avoidAccDeletion(Trigger.Old);
        }
        
    }
    
    //19
    if(Trigger.isAfter){
        if(Trigger.isUpdate){
            accHandlerClass.changeRelConPhone(Trigger.New ,Trigger.OldMap);
        }
    }
 

}