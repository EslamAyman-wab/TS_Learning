const user: {
    readonly username: string,
    age: number,
    website?: string,
    skills: {
        frontEnd: string[],
        backEnd: string[]
    }
} = {
    username: "Elzero",
    age: 40,
    website: "Elzero.org",
    skills: {
        frontEnd: ["HTML", "CSS", "JS"],
        backEnd: ["PHP", "Python"]
    }
}

// We Need To Remove Error From This Edits
user.username;
user.age = 40;
user.skills.backEnd.push("Javascript");