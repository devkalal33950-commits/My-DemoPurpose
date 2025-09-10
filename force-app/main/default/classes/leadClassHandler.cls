public class leadClassHandler {
    
    //On Lead object if 'Industry' field is blank then throw error while inserting & updating record.
    //object = Lead , Event= before insert , before update
    
    public static void noBlankIndustry (List <Lead> lList){
        if(!lList.isEmpty()){
            for(Lead l: lList){
                if(l.Industry == null){
                    l.addError('Industry should not be blank');
                }
            }
        }
    }
    
    
}