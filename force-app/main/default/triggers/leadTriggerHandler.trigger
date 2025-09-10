trigger leadTriggerHandler on Lead (before insert , before update) {

    //06
    
    if(Trigger.isBefore){
        if(Trigger.isUpdate || Trigger.isInsert){
            leadClassHandler.noBlankIndustry(Trigger.New);
        }
        
    }

}