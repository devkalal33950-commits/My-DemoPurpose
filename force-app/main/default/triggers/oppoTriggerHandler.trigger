trigger oppoTriggerHandler on Opportunity (after insert , after update) {

    //10 
    if(Trigger.isAfter){
        if(Trigger.isInsert || Trigger.isUpdate){
            oppoClassHandler.updateAccRatingOnOppStageClosedWon(Trigger.new , Trigger.OldMap);
        }
        
    }
}