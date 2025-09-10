import { LightningElement, track } from 'lwc';

export default class LeaveTracker extends LightningElement {
    @track employeeName = '';
    @track startDate = '';
    @track endDate = '';
    @track leaves = [];

    handleInputChange(event) {
        const { name, value } = event.target;
        this[name] = value;
    }

    handleSubmit() {
        const newLeave = {
            id: this.leaves.length + 1,
            name: this.employeeName,
            startDate: this.startDate,
            endDate: this.endDate
        };
        this.leaves = [...this.leaves, newLeave];
        this.clearForm();
    }

    clearForm() {
        this.employeeName = '';
        this.startDate = '';
        this.endDate = '';
    }
}