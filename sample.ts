let Name = "Harish";
console.log("Name");
console.log(typeof (Name));


//function
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(2, 3));

//If else loop

var age: number = 18;

if (age >= 18) {
    console.log("Eligible for voting");
} else {
    console.log("Not eligible for voting");
}


//Using interfaces.

interface House {
    rooms: number,
    color: string,
    price: number,
    isForSale: boolean,
    owner: string,
    address: string,
    details(): void;

}


const Myhouse: House = {
    rooms: 3,
    color: "Red",
    price: 1000000,
    isForSale: true,
    owner: "Harish",
    address: "123 Main St",
    details(): void {
        console.log("Details of the house");
    }

}

//Calling function to access interfaces
Myhouse.details();
console.log(Myhouse.color);




