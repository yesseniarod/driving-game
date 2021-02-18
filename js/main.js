var $image = document.querySelector('img');

document.addEventListener('keydown', function (event) {
  var key = event.key;
  if (key === 'ArrowDown') {
    $image.className = 'south';
  } else if (key === 'ArrowUp') {
    $image.className = 'north';
  } else if (key === 'ArrowLeft') {
    $image.className = 'west';
  } else if (key === 'ArrowRight') {
    $image.className = 'east';
  }
});
