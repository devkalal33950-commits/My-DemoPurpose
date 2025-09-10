public class OppoCombodemoClass {
    
    @AuraEnabled     
    public static List<Opportunity> getoppoList(){
        
       List<Opportunity> oppoDetails = [Select Id , Name,CloseDate from Opportunity];
        return oppoDetails;
    }

}