import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    myName="Salesforce Z2H"

    changeHandler(event){
        this.myName= event.target.value
    }

    @track address={
        city:'Pune',
        Code:12345,
        Country:'India'
    }
    trackHandler(event){
        this.address.city = event.target.value

    }

    users=["Amit" ,"Lala " , "Shiv"]

    num1 = 10
    num2 = 20

    get firstName(){
        return this.users[2]
    }
    get multiply(){
        return this.num1 + this.num2
    }







}