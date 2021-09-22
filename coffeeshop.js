class Customer {
    constructor(){
        this.transactions=[]
        this.discountThreshold = 1000
    }
    addTransaction(amount){
        this.transactions.amount
    }
    getTransaction(){
        return this.transactions
    }
    getTotalSpent(){
        let sum = 0
        this.transactions.forEach(transaction=>{
            sum += transaction
        })
    }
    isEligableForDiscount(){
        return this.getTotalSpent() >= this.discountThreshold
    }
    
}

const customer1 = new Customer()
