public class GradXEx15FebEx02 {
    
    //if leads annual rev is greater than $5000000 automatically create a task for lead owner with subject 'Follow up with High value lead'.
    //if the lead owner is changed a new task should be assigned to new owner.
    //ensure that duplicate tasks are not created.
    
    public static void createLead (List<Lead> lList){
        List<Task> tskList = New List<Task>(); 
        for(Lead l:lList){
            if(l.AnnualRevenue>=5000000){
                Task newTask =New Task();
                newTask.WhatId = l.Id;
                newTask.OwnerId=l.OwnerId;
                newTask.Subject='Follow up with High value lead';
                newTask.Status = 'In Progress';
                newTask.Priority='Normal';
                tskList.add(newTask);  
                system.debug('Record for task created');
            }
        }           
         if (!tskList.isEmpty()) {
            insert tskList;
        }
    }
    public static void assigneTask(List<Lead> lList , Map<Id,Lead>oldMaps){
        List<Task> tskList = New List<Task>();
        for(Lead l:lList){
            if(l.OwnerId!=UserInfo.getUserId() && l.OwnerId!=oldMaps.get(l.Id).OwnerId){
                Task newTask =New Task();
                newTask.OwnerId=l.OwnerId;
                newTask.WhatId = l.Id;
                newTask.Subject='Follow up with High value lead';
                newTask.Status = 'In Progress';
                newTask.Priority='Normal';
                tskList.add(newTask); 
                system.debug('Record for m2 created');
            }
        }
          if (!tskList.isEmpty()) {
            insert tskList;

        }
    }
    
    public static void avoidDuplicateTaskCreation(List<Lead>lList){
        Set<String> newString= new Set<String>();
        List<Task> tskList=[Select Id,Subject From Task where Subject ='Follow up with High value lead'];
        for(Task tsk:tskList){             
            tsk.addError('This task is aledy present');
            system.debug('Record for m3 created');
        }
    }
}