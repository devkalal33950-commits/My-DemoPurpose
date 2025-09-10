public class accHandlerClass {
    
  // 1) Write a trigger on Account,by which if the owner tries to delete the records, it can be deleted.But for other
  //user who is not owner, then it must be prevented.Show error message:"Sorry, you do not have permission to delete record.
  //Only owner can deleted"      
  // object = Account , Event= Before delete

    public static void preventRecordDeletionByOtherThanOwner(List<Account> acList){
        if(!acList.isEmpty()){
        for(Account acc:acList){
            if(acc.OwnerId!=UserInfo.getUserId()){
                acc.addError('Sorry, you do not have permission to delete record.Only owner can deleted');
               }
            }
        }
    } 

    //09 9) Create related contact when Account is created
    //object = Account , Event = After Insert
   
    public static void creatRelatedConRecord(List <Account> accList){
        if(!accList.isEmpty()){
         List<Contact> coList = New List<Contact> ();
            for(Account acc: accList){
                Contact co = New Contact();
                co.AccountId = acc.Id;
                co.LastName = acc.Name+''+'Contact';
                coList.add(co);                
            }
            if(!coList.isEmpty()){
            Insert coList;
            }
        }
    }

    //13) If there is a account having more than one contacts can not be delete
    //object = Account , Event= Before Delete
    
    public static void avoidAccDeletion (List<Account> accList){
        if(!accList.isEmpty()){
        Set<Id> accIds = New Set<Id>();
        for(Account acc: accList){
            accIds.add(acc.Id);
        }
        
         List<Account> acList =[SELECT Id ,(SELECT Id FROM Contacts) FROM Account WHERE Id IN: accIds];
          Integer Count=0;              
        for(Account ac: acList){
             Count = ac.Contacts.Size();
            
            if(Count >= 1){
                ac.addError('Can not Delete');
            }
        }
      }
    }
    
    //19) When user change the phone number on account object then same phone should be update to all the related contacts.
    //object = Account , Event = After Update
    
    public static void changeRelConPhone (List<Account> accList , Map<Id,Account> accOldMap){
        Map<Id,String> accMap = new Map<Id,String>();
     
        for(Account acc: accList){
            if(acc.Phone != Null && acc.Phone != accOldMap.get(acc.Id).Phone){
               accMap.put(acc.Id,acc.Phone);
                
            }
        }
        
        if(!accMap.isEmpty()){
        List<Contact> conList = [SELECT Id,AccountId FROM Contact WHERE AccountId IN:accMap.keySet()];
        for(Contact con: conList){
            
            con.Phone = accMap.get(con.AccountId);
            
        }
        if(!conList.isEmpty()){
            Update conList;
        }
    }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

}