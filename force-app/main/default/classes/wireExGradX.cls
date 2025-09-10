public with sharing class wireExGradX {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> accList(string xyz){
        string queryFetch='%'+xyz+'%';
        List<Account> accL = [select Id,Name,Industry from Account where Name Like :queryFetch];
        return accL;
    }     
}