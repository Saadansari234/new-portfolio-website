
const header = document.getElementById("header");
let arrowup= document.getElementById("arrow-up");
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) { // Adjust this value as needed
        header.style.backgroundColor = "hsl(0, 0%, 100%)"; // Change to the desired color
        header.style.boxShadow= "0px 0.1rem 0.4rem rgba(0, 0, 0, 0.511) "
    } else {
        header.style.backgroundColor = 'transparent'; // Reset to the initial color
        header.style.boxShadow= ""
    }

    

    if (window.scrollY > 500) {
        arrowup.style.opacity= "1"
    }else{
        arrowup.style.opacity= "0"
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
        skillsBtn.style.backgroundColor = "hsl(0, 0%, 100%)";
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


// we create a document object model of my work section 
const mywork_outerdiv=document.querySelector(".mywork-outerdiv")

let mywork_array=[];

function myworkObject(innerimg,title,description,link1,link2,link1img,link2img){
  let myWork={
    innerimg: innerimg,
    title: title,
    description: description,
    link1: link1,
    link2:link2,
    link1img: link1img,
    link2img:link2img,

  }

  return mywork_array.push(myWork)
}

myworkObject("images/myskillspic/pic1.jpg","new project",
"Numquam facere consectetur nobis debitis, velit voluptatem eaque a","#","#","images/icons/link1.svg","images/icons/link2.svg")

myworkObject("images/myskillspic/pic1.jpg","new project",
"Numquam facere consectetur nobis debitis, velit voluptatem eaque a","#","#","images/icons/link1.svg","images/icons/link2.svg")

myworkObject("images/myskillspic/pic1.jpg","new project",
"Numquam facere consectetur nobis debitis, velit voluptatem eaque a","#","#","images/icons/link1.svg","images/icons/link2.svg")

myworkObject("images/myskillspic/pic1.jpg","new project",
"Numquam facere consectetur nobis debitis, velit voluptatem eaque a","#","#","images/icons/link1.svg","images/icons/link2.svg")

myworkObject("images/myskillspic/pic1.jpg","new project",
"Numquam facere consectetur nobis debitis, velit voluptatem eaque a","#","#","images/icons/link1.svg","images/icons/link2.svg")

myworkObject("images/myskillspic/pic1.jpg","new project",
"Numquam facere consectetur nobis debitis, velit voluptatem eaque a","#","#","images/icons/link1.svg","images/icons/link2.svg")

for(let i=0; i<mywork_array.length;i++){
  
    // mywork_imag.src= mywork_array[i].innerimg;
    // mywork_title.innerHTML= mywork_array[i].title;
    // mywork_description.innerHTML= mywork_array[i].description;
    // mywork_link1_img.src=mywork_array[i].link1img;
    // mywork_link2_img.src=mywork_array[i].link2img;
  
  
//   mywork_content.innerHTML= innerdiv();

// Create a new "mywork-content" div for each item
const newMyWorkContent = document.createElement("div");
newMyWorkContent.classList.add("mywork-content");

// Create and set the inner elements for this mywork-content div
const newMyWorkImage = document.createElement("img");
newMyWorkImage.classList.add("mywork-imag");
newMyWorkImage.src = mywork_array[i].innerimg;
newMyWorkImage.alt = "My Work Image";

const newMyWorkTextContent = document.createElement("div");
newMyWorkTextContent.classList.add("mywork-text-content");

const newMyWorkTitle = document.createElement("div");
newMyWorkTitle.classList.add("mywork-title");
newMyWorkTitle.innerHTML = mywork_array[i].title;

const newMyWorkDescription = document.createElement("div");
newMyWorkDescription.classList.add("mywork-description");
newMyWorkDescription.innerHTML = mywork_array[i].description;

const newMyWorkLinks = document.createElement("div");
newMyWorkLinks.classList.add("mywork-links");

const newMyWorkLink1 = document.createElement("a");
newMyWorkLink1.classList.add("mywork-link1");
newMyWorkLink1.href = mywork_array[i].link1;

const newMyWorkLink1Img = document.createElement("img");
newMyWorkLink1Img.classList.add("mywork-link1-img");
newMyWorkLink1Img.src = mywork_array[i].link1img;
newMyWorkLink1Img.alt = "Link 1 Image";

const newMyWorkLink2 = document.createElement("a");
newMyWorkLink2.classList.add("mywork-link2");
newMyWorkLink2.href = mywork_array[i].link2;

const newMyWorkLink2Img = document.createElement("img");
newMyWorkLink2Img.classList.add("mywork-link2-img");
newMyWorkLink2Img.src = mywork_array[i].link2img;
newMyWorkLink2Img.alt = "Link 2 Image";

// Append the inner elements to the new mywork-content div
newMyWorkLink1.appendChild(newMyWorkLink1Img);
newMyWorkLink2.appendChild(newMyWorkLink2Img);
newMyWorkLinks.appendChild(newMyWorkLink1);
newMyWorkLinks.appendChild(newMyWorkLink2);
newMyWorkTextContent.appendChild(newMyWorkTitle);
newMyWorkTextContent.appendChild(newMyWorkDescription);
newMyWorkTextContent.appendChild(newMyWorkLinks);
newMyWorkContent.appendChild(newMyWorkImage);
newMyWorkContent.appendChild(newMyWorkTextContent);

// Append the new mywork-content div to the parent container
mywork_outerdiv.appendChild(newMyWorkContent);

}
