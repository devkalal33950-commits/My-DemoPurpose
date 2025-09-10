public class caseHandlerClass {

    //User should not allowed to have more than 100 cases assign to him.
     //object = Case ,  Event = Befor insert 
 

      public static void notAllowMoreThan100CaseToUser(List<Case> caseList){
             Set<Id> caseOwnerIds = New Set<Id>();
             for(Case ce:caseList){
               caseOwnerIds.add(ce.OwnerId);
             }    
     List<AggregateResult> aggResult=[ SELECT OwnerId, COUNT(Id) caseCount FROM Case WHERE OwnerId IN :caseOwnerIds GROUP BY OwnerId];
           
        }
    }