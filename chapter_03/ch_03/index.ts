// Do Not Edit The Code Below
interface Man {
    title: string;
    weight: number;
    age: number;
}

interface Bird {
    canFly: boolean;
}

interface Superman extends Man, Bird {
    bodyType: "Iron",
    origin: "Krypton"
}