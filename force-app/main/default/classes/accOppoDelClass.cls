// Apex class to fetch accounts and handle deletions
public with sharing class accOppoDelClass {
    // Fetch accounts with related opportunities
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsWithOpportunities() {
        return [
            SELECT Id, Name, (SELECT Id FROM Opportunities) 
            FROM Account
        ];
    }

    // Delete an account if it has more than one opportunity
    @AuraEnabled
    public static void deleteAccount(Id accountId) {
        Account acc = [SELECT Id, (SELECT Id FROM Opportunities) FROM Account WHERE Id = :accountId];
        if (acc.Opportunities.size() > 1) {
            delete acc;
        } else {
            throw new AuraHandledException('Cannot delete account with only one opportunity');
        }
    }

    // Delete all opportunities related to an account
    @AuraEnabled
    public static void deleteOpportunities(Id accountId) {
        List<Opportunity> opps = [SELECT Id FROM Opportunity WHERE AccountId = :accountId];
        if (opps.size() > 1) {
            delete opps;
        } else {
            throw new AuraHandledException('Cannot delete the only opportunity of an account');
        }
    }
}