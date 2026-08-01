// ================= PROFILE INFORMATION =================

let student = {
    name: "Edlawit Tsegaye",
    department: "Software Engineering",
    goal: "Full-Stack Developer"
};


// ================= SKILLS =================

let skills = [
    {
        name: "HTML",
        level: "Beginner"
    },
    {
        name: "CSS",
        level: "Beginner"
    },
    {
        name: "JavaScript",
        level: "Learning"
    },
    {
        name: "React",
        level: "Learning"
    },
    {
        name: "Spring Boot",
        level: "Learning"
    }
];


// ================= DISPLAY SKILLS =================

let skillsContainer = document.getElementById("skillsContainer");

for (let i = 0; i < skills.length; i++) {

    let skillCard = document.createElement("div");

    skillCard.className = "box";

    skillCard.innerHTML =
        "<h3>" + skills[i].name + "</h3>" +
        "<p>" + skills[i].level + "</p>";

    skillsContainer.appendChild(skillCard);
}


// ================= SHOW GOAL =================

function showGoal() {

    alert(
        "My goal is to become a professional Full-Stack Developer."
    );

}


// ================= CONTACT BUTTON =================

function showMessage() {

    alert(
        "Thank you for visiting my portfolio! " +
        "You can contact me through my email or GitHub."
    );

}



// ================= CONSOLE INFORMATION =================

console.log("Welcome to my portfolio!");

console.log("Name:", student.name);

console.log("Department:", student.department);

console.log("Goal:", student.goal);

console.log("Skills:", skills);
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}