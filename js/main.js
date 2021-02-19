var $image = document.querySelector('img');

var data = {
  direction: 'east'
};

document.addEventListener('keydown', function (event) {
  var key = event.key;
  if (key === 'ArrowDown') {
    $image.className = 'south';
    data.direction = 'south';
  } else if (key === 'ArrowUp') {
    $image.className = 'north';
    data.direction = 'north';
  } else if (key === 'ArrowLeft') {
    $image.className = 'west';
    data.direction = 'west';
  } else if (key === 'ArrowRight') {
    $image.className = 'east';
    data.direction = 'east';
  }
});
