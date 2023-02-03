type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() };
}

// let customer = getCustomer(0);
// if (customer !== null && customer !== undefined)
//     console.log(customer.birthday);


// Optional property access operator

// let customer = getCustomer(0);
// console.log(customer?.birthday);

let customer = getCustomer(1);

console.log(customer?.birthday?.getFullYear());


// Optional element access operator
// customers?.[0]

// Optional call operator
let log: any = null;
log?.('a');