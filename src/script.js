function next(n) {
  const image1 = document.getElementById('image_1');
  const image2 = document.getElementById('image_2');
  const image3 = document.getElementById('image_3');

  if (n === 1) {
    image1.style.display = 'block';
    image2.style.display = 'none';
    image3.style.display = 'none';
  }
  if (n === 2) {
    image1.style.display = 'none';
    image2.style.display = 'block';
    image3.style.display = 'none';
  }
  if (n === 3) {
    image1.style.display = 'none';
    image2.style.display = 'none';
    image3.style.display = 'block';
  }
}

window.next = next;
