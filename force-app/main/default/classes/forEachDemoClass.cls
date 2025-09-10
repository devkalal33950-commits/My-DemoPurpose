public class forEachDemoClass {
    
    @AuraEnabled(cacheable=true)    
    public static List<Account> accList (){
        List<Account> aList = [Select Id,Name from Account];
        return aList;
    }

}