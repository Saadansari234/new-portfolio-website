
const header = document.getElementById("header");
let arrowup= document.getElementById("arrow-up");
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) { // Adjust this value as needed
        header.style.backgroundColor = "white"; // Change to the desired color
        header.style.boxShadow= "10px 10px 40px black; "
    } else {
        header.style.backgroundColor = 'transparent'; // Reset to the initial color
    }

    

    if (window.scrollY > 400) {
        arrowup.style.display="block"
    }

    

});



//onclick event listener

let toggleButtonClicked = true;


function toggleBackground() {
    const skillsBtn = document.getElementById("skills-btn");
    const toolsBtn = document.getElementById("tools-btn");
    const skillNames = document.querySelectorAll(".skill-name")
    const toolsNames= document.querySelectorAll(".tools-name") 
    const skillImages= document.querySelectorAll(".skill-image")
    const toolsImages= document.querySelectorAll(".tools-image")
 

    if (toggleButtonClicked) {
        // Switch to the "tools" button background
        skillsBtn.style.backgroundColor = "white";
        toolsBtn.style.backgroundColor = "#e38445"; // Change to your desired color
        skillsBtn.style.color="#2b2b2b"
        toolsBtn.style.color = "white";

        // this is the function to show skills and tools bar
        skillImages.forEach(image => image.style.display = "none");
        toolsImages.forEach(image => image.style.display = "block");
        skillNames.forEach(name => name.style.display = "none");
        toolsNames.forEach(name => name.style.display = "block");
        

    } else {
        // Switch to the "skills" button background
        skillsBtn.style.backgroundColor = ""; // Change to your desired color
        toolsBtn.style.backgroundColor = "";
        toolsBtn.style.color=""
        skillsBtn.style.color=""
     
        // this is the function to show skills and tools bar
 
        skillImages.forEach(image => image.style.display = "");
            toolsImages.forEach(image => image.style.display = "");
            toolsNames.forEach(name => name.style.display = "");
            skillNames.forEach(name => name.style.display = "");
       

    }

    // Toggle the state
    toggleButtonClicked = !toggleButtonClicked;




}


