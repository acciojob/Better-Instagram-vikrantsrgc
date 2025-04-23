// //your code here
// // Get all the draggable elements
// const images = document.querySelectorAll('.image');

// // Add event listeners to each draggable element
// images.forEach(image => {
//   image.addEventListener('dragstart', dragStart);
//   image.addEventListener('dragover', dragOver);
//   image.addEventListener('drop', drop);
//   image.addEventListener('dragenter', dragEnter);
//   image.addEventListener('dragleave', dragLeave);
// });

// let draggedItem = null;

// // Handle the dragstart event
// function dragStart(e) {
//   draggedItem = e.target;  // Store the dragged element
//   setTimeout(() => {
//     e.target.style.visibility = 'hidden';  // Make the dragged item invisible temporarily
//   }, 0);
// }

// // Prevent the default behavior (to allow dropping)
// function dragOver(e) {
//   e.preventDefault();
// }

// // Add a visual cue when an item is being dragged over another
// function dragEnter(e) {
//   e.preventDefault();
//   e.target.classList.add('selected');
// }

// // Remove the visual cue when the dragged item leaves the target area
// function dragLeave(e) {
//   e.target.classList.remove('selected');
// }

// // Swap the items when the dragged item is dropped onto another
// function drop(e) {
//   e.preventDefault();
  
//   // If the dragged item is not the same as the target item
//   if (draggedItem !== e.target) {
//     // Swap the text content
//     const draggedText = draggedItem.textContent;
//     draggedItem.textContent = e.target.textContent;
//     e.target.textContent = draggedText;
//   }

//   // Reset visibility and remove the selected visual cue
//   draggedItem.style.visibility = 'visible';
//   e.target.classList.remove('selected');
// }
