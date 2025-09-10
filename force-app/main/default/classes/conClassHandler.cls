public class conClassHandler {
    
    // 08 prevents user to delete contact which is associated with the any account. When user tries to delete associated contact,
    //User will be presented with the error "Contact associated with account cannot be deleted"
    // object = COntact , Event = Before delete
    
    public static void noAssociatedConDeletion (List <Contact> conList){
        if(!conList.isEmpty()){
            for(Contact con: conList){
                if(con.AccountId!= null){
                    con.addError('Contact associated with account cannot be deleted');
                }
            }
        }
    }
    
    //11) If Account has more than 2 Contacts show error 'You cannot create more than 2 contacts for this account'
    //object = Contact , Event = Before Insert
    
    public static void noMoreThanTwoCon (List <Contact> conList){
        if(!conList.isEmpty()){
            Set<Id> accIds = New Set<Id>();
            for(Contact con : conList){
                if(con.AccountId != null){
                    accIds.add(con.AccountId);
                }                
            }
            Map<Id,Integer> countmap = New Map<Id,Integer>();
            List<Account> accList = [SELECT Id,(SELECT Id FROM Contacts) FROM Account WHERE Id IN: accIds];
            for(Account acc: accList){
                Integer count = acc.Contacts.Size();
                countmap.put(acc.Id , count);
            }
            
            for(Contact co: conList){
                if(co.AccountId!= null && countmap.get(co.AccountId) >= 2){
                    co.addError('You cannot create more than 2 contacts for this account');
                }
            }
            
        }
    }
    
    
 
    //29) Get the sum of all amount from contact on that related account whenever contact inserted, updated, deleted & undeleted.
//Create custom field "Amount" on contact & "Total Amount" on Account if it is required========
 //object = Contact, Eent = After I,U,D,Ud
 
    /*public static void sumOfAmntOfConOnRelAcc (List<Contact>conList){
        if(!conList.isEmpty()){
        Set<Id> accIds = New Set <Id>();
        for(Contact con: conList){  
            if(con.AccountId != Null){
                accIds.add(con.AccountId);
            }
        }
        
        List<Account> accList =  New List<Account>();
        List<AggregateResult> result = [SELECT AccountId ii, sum(Amount__c)Total FROM Contact WHERE AccountId IN:accIds GROUP BY AccountId];
        for(AggregateResult res: result){
            Account acc = New Account ();
            acc.Id = (Id)res.get('ii');
            acc.Total_Amount__c = (Decimal)res.get('Total');
                accList.add(acc);        
        }
        if(!accList.isEmpty()){
            Update accList;
        }
    }
    } */
    
    //30) Get the min, max, avg, sum of amount from contact on that related account whenever contact inserted, updated, deleted & undeleted
    // object = Contact , Event = After (inserted, updated, deleted, undeleted)
    
    public static void getContAmountOnAcc (List<Contact> conList){
        if(!conList.isEmpty()){
            Set<Id> accIds =  new Set<Id>();
            for(Contact con: conList){
                if(con.AccountId != null){
                    accIds.add(con.AccountId);
                }
            }
            
            List<Account> accList = new List<Account>();
            List<AggregateResult> agr = [SELECT AccountId ii , sum(Amount__c) total , min(Amount__c)minval , max(Amount__c) maxval ,
                                         avg(Amount__c)avgval FROM Contact WHERE AccountId IN: accIds GROUP BY AccountId];
            
            for(AggregateResult res : agr){
                Account acc = new Account ();
                acc.Id = (Id)res.get('ii');
                acc.Total_Amount__c = (Decimal)res.get('total');
              
                acc.Description = (Decimal)res.get('avgval')+''+ 'is the avg val'+' Min Value ='+ (Decimal)res.get('minval') +''+ 'is the min val'+
                    				'Max Value => '+ (Decimal)res.get('maxval')+''+ 'is the max val';
                accList.add(acc);                
            }
            if(!accList.isEmpty()){
                Update accList;
            }
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
}