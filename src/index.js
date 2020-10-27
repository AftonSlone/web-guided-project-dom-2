console.log("project is up");

// :point_right: TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector("#launchButton");
const confirmButton = document.querySelector("#confirmButton");
const cancelButton = document.querySelector("#cancelButton");

// B- MESSAGES
const successMessage = document.querySelector("h1.success");
const failureMessage = document.querySelector("h1.failure");

// C- MODAL
const modal = document.querySelector(".modal");

// :point_right: TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
//  B- The DOM's element.onclick attribute
launchButton.onclick = function (event) {
  //   console.log("about to smash the old school method");
  // future code that should run when the user clicks
};

//  C- element.addEventListener('click', callback)
launchButton.addEventListener("click", function (event) {
  //   console.log("the better way to add future functionality");
});

launchButton.addEventListener("click", function (event) {
  //   console.log("the better way to add future functionality AGAIN");
});

document.addEventListener("click", function (event) {
  //   console.log("clicking the document");
  if (event.target === launchButton) {
    console.log("clicked the launch button");
  } else {
    console.log("you clicked somewhere else");
  }
});

Array.from(document.links).forEach(function (link) {
  link.addEventListener("click", function (event) {
    console.log(
      `disrupting the default behavior of "${event.target.textContent}" link`
    );
    event.preventDefault();
  });
});

// :point_right: TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.

function launch(event) {
  modal.classList.remove("off");
  successMessage.classList.add("off");
  failureMessage.classList.add("off");
}

launchButton.addEventListener("click", launch);

// :point_right: TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.

confirmButton.addEventListener("click", (event) => {
  modal.classList.add("off");
  successMessage.classList.remove("off");
});

// :point_right: TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.

cancelButton.addEventListener("click", function (event) {
  modal.classList.add("off");
  failureMessage.classList.remove("off");
});

// :point_right: TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.

document.addEventListener("keydown", (e) => {
  modal.classList.add("off");
});

// :point_right: TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target :dart: of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.
Array.from(document.all).forEach(elem => elem.addEventListener('click', event => {
    console.log('🎯 target:        ', event.target)
    console.log('🧭 current target:', event.currentTarget)
    console.log('\n')
  }))
  
  modal.addEventListener('click', event => {
    console.log('stopping propagation in its tracks!')
    event.stopPropagation()
  })

// :point_right: TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {}

function closeModal() {}

function killReports() {}

// :point_right: TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
