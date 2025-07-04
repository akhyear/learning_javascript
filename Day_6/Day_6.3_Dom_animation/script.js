const dave = document.getElementById('discoDave');

function toggleBounce() {
  console.log('Bounce button clicked');
  dave.classList.remove('spin', 'color-party');
  dave.classList.toggle('bounce');
}

function toggleSpin() {
  console.log('Spin button clicked');
  dave.classList.remove('bounce', 'color-party');
  dave.classList.toggle('spin');
}

function toggleColorChange() {
  console.log('Color Party button clicked');
  dave.classList.remove('bounce', 'spin');
  dave.classList.toggle('color-party');
}