public with sharing class wireFebExClass {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(string keyword){
        string value='%'+keyword+'%';

        List<Account>getAccList=[SELECT Id,Name FROM Account WHERE Name LIKE:value];
        return getAccList;

    }
}