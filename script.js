// Changes the text of the paragraph with ID "intro-text"
function changeText() {
    const paragraph = document.getElementById("intro-text");
    paragraph.textContent = "My name is Joy am a Doctor by profession with a speciality in children. I am a pediatrician at Kenyatta hospital headquaters";
  }
  
  // Changes the background color of the body
  function changeColor() {
    document.body.style.backgroundColor = "#f5f5dc"; // light beige
  }
  
  // Adds a new box element to the box-container div
  function addBox() {
    const boxContainer = document.getElementById("box-container");
  
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    newBox.textContent = "I'm a new box!";
    boxContainer.appendChild(newBox);
  }
  
  // Removes the last box in the box-container div
  function removeBox() {
    const boxContainer = document.getElementById("box-container");
    const lastBox = boxContainer.lastElementChild;
    if (lastBox) {
      boxContainer.removeChild(lastBox);
    }
  }
  