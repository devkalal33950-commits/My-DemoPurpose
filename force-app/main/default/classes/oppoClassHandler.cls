public class oppoClassHandler {
    //10) Update Account Rating to Hot on account when opportunity stage equals 'closed Won'
    // object = Opportunity , Event = Afetr insert , After Update
    
    public static void updateAccRatingOnOppStageClosedWon(List<Opportunity> optyList , Map <Id , Opportunity> oldOppoMap){
        if(!optyList.isEmpty()){
            Set<Id> accIds = New Set<Id>();
            
            for(Opportunity opty : optyList){
                if(opty.AccountId != Null && opty.StageName != null  && opty.StageName =='closed Won'){
                    accIds.add(opty.AccountId);
                }
            }
            
            if(!accIds.isEmpty()){
                List<Account> accList = [SELECT Id, Rating FROM Account WHERE Id IN:accIds];
                for(Account acc: accList){
                    acc.Rating = 'Hot';
                }
                if(!accList.isEmpty()){
                Update accList;
               }
            }
            
        }
    } 

}