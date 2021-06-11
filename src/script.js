import axios from 'axios';

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

async function getResponse(quantityContent) {
  const promiseBekon = await axios.get('https://baconipsum.com/api/', {
    params: {
      type: 'all-meat',
      paras: quantityContent,

    },
  });

  const promisePicsum = await axios.get('https://picsum.photos/v2/list', {
    params: {
      limit: quantityContent,
      width: 100,
    },
  });

  const contentBekon = promiseBekon.data;
  const contentPicsum = promisePicsum.data;

  const parentClass = document.getElementsByClassName('container');
  const parent = parentClass[0];

  let yellowColor;

  for (let i = 0; i < quantityContent; i += 1) {
    if (i % 2 === 0) {
      yellowColor = '';
    } else {
      yellowColor = 'yellow_block';
    }
    const element = document.createElement('div');
    element.classList.add('container_content');
    element.style.marginRight = '20px';
    element.innerHTML = `<div class="container_content_top"><div class="container_content_top_square ${yellowColor}"></div><h6>ABOUT SUPER LOGO</h6><div class="container_content_top_rectangle  ${yellowColor}"></div></div><div class="container_content_bottom"><div class="container_content_bottom_image"><img src="${contentPicsum[i].download_url}"></div><div class="container_content_bottom_text"><p>${contentBekon[i]}</p><a>Read more...</a></div></div>`;
    parent.appendChild(element);
  }
}

document.addEventListener('DOMContentLoaded', getResponse(12));
