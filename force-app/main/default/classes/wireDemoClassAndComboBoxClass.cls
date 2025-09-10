public class wireDemoClassAndComboBoxClass {
    
    @AuraEnabled   //(cacheable=true)//
    
    public static List<Account> getAccList(){
        
       List<Account> accDetails = [Select Id , Name from Account];
        return accDetails;
    }

}