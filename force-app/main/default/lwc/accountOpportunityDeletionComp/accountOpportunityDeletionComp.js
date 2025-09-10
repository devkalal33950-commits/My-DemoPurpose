import { LightningElement, wire, track } from 'lwc';
import getAccountsWithOpportunities from '@salesforce/apex/accOppoDelClass.getAccountsWithOpportunities';
import deleteAccount from '@salesforce/apex/accOppoDelClass.deleteAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const COLUMNS = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Number of Opportunities', fieldName: 'OpportunityCount', type: 'number' },
    { type: 'button', label: 'Actions', typeAttributes: {
        label: 'Delete', name: 'delete', title: 'Delete', disabled: { fieldName: 'disableDelete' }, variant: 'destructive'
    }}
];

export default class AccountTable extends LightningElement {
    @track accounts = [];
    columns = COLUMNS;

    @wire(getAccountsWithOpportunities)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data.map(account => ({
                ...account,
                OpportunityCount: account.Opportunities ? account.Opportunities.length : 0,
                disableDelete: (account.Opportunities && account.Opportunities.length <= 1)
            }));
        } else if (error) {
            console.error(error);
        }
    }

    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const accountId = event.detail.row.Id;

        if (actionName === 'delete') {
            this.deleteAccount(accountId);
        }
    }

    deleteAccount(accountId) {
        deleteAccount({ accountId })
            .then(() => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Success',
                    message: 'Account deleted successfully',
                    variant: 'success'
                }));
                return refreshApex(this.wiredAccounts);
            })
            .catch(error => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Error',
                    message: error.body.message,
                    variant: 'error'
                }));
            });
    }
}