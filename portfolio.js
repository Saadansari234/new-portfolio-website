const header = document.getElementById("header");
let arrowup= document.getElementById("arrow-up");
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) { // Adjust this value as needed
        header.style.backgroundColor = "white"; // Change to the desired color
        header.style.boxShadow= "10px 10px 40px hsla(0, 0%, 0%, 0.1); "
    } else {
        header.style.backgroundColor = 'transparent'; // Reset to the initial color
    }

    if (window.scrollY < 150) { // Adjust this value as needed
        header.style.backgroundColor = 'none'; // Reset to the initial color
        header.style.boxShadow= "none"
        
    } else {
        header.style.backgroundColor = "white"; // Change to the desired color
        header.style.boxShadow= "10px 10px 40px hsla(0, 0%, 0%, 0.1);"
    }

    if (window.scrollY > 500) {
        arrowup.style.display="block"
    }

    if (window.scrollY < 400) {
        arrowup.style.display="none"

    }

});



//onclick event listener

// function skillsbtn(){
//     let skill= document.getElementById("skills-btn")
//     let tools= document.getElementById("tools-btn")

//     if (tools.style.backgroundColor==="white") {
//         tools.style.backgroundColor="#e38445"
//         tools.style.color="#2b2b2b"
//         skill.style.backgroundColor="white"
//     }else if (skill.style.backgroundColor==="white") {
//         skill.style.backgroundColor="#e38445"
//         skill.style.color="#2b2b2b"
//         tools.style.backgroundColor="white"
//     }
// }

let toggleButtonClicked = true;

function toggleBackground() {
    const skillsButton = document.getElementById("skills-btn");
    const toolsButton = document.getElementById("tools-btn");

    if (toggleButtonClicked) {
        // Switch to the "tools" button background
        skillsButton.style.backgroundColor = "white";
        toolsButton.style.backgroundColor = "#e38445"; // Change to your desired color
        skillsButton.style.color="#2b2b2b"
        toolsButton.style.color = "white";
    } else {
        // Switch to the "skills" button background
        skillsButton.style.backgroundColor = ""; // Change to your desired color
        toolsButton.style.backgroundColor = "";
        toolsButton.style.color=""
        skillsButton.style.color=""
    }

    // Toggle the state
    toggleButtonClicked = !toggleButtonClicked;
}


