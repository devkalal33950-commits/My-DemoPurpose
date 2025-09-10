public class ContactComboBoxClass {
    @AuraEnabled     
    public static List<Contact> getconList(){
        
       List<Contact> conDetails = [Select Id , Name from Contact];
        return conDetails;
    }

}