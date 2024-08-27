//Intersection used to combine two or more interfaces
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}


type User = Identity & Contact;

let user: User = {
    id: 100,
    name: "ambika",
    email: "ambika@example.com",
    phone: "983837373"
};

type User1 = Identity & Contact & BusinessPartner;

let user1: User1 = {
    id: 100,
    name: "preethi",
    email: "preethi@example.com",
    phone:  "466778888",
    credit: 1000
};


console.log(`user: ${user.id},${user.email},${user.name},${user.phone}`);
console.log(`user1: ${user1.id},${user1.email},${user1.name},${user1.phone},${user1.credit}`);



