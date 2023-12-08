window.onload = function() {
  const canvas = document.getElementById('laserLightCanvas');
  const ctx = canvas.getContext('2d');

  // Set the canvas size to fill the window
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function drawLaserLight() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the laser light pattern
    // This is a placeholder. You'll need to replace this with your own code
    // that generates a dynamic lattice pattern of laser light.
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // Redraw the laser light pattern every 60th of a second
  setInterval(drawLaserLight, 1000 / 60);
};
