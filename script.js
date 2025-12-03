// Start menu toggle
const startBtn = document.getElementById('startBtn');
const startMenu = document.getElementById('startMenu');

startBtn.addEventListener('click', () => {
  startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
});

// Close window
document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('myWindow').style.display = 'none';
});

// Drag window
const win = document.getElementById('myWindow');
const titleBar = win.querySelector('.title-bar');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

titleBar.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - win.offsetLeft;
  offsetY = e.clientY - win.offsetTop;
  win.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    win.style.left = (e.clientX - offsetX) + 'px';
    win.style.top = (e.clientY - offsetY) + 'px';
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  win.style.cursor = 'grab';
});
