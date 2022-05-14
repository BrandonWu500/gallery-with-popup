let cars = [];
for (let i = 1; i < 10; i++) {
  cars.push(i);
}

const container = document.querySelector('.container');
const gallery = document.createElement('ul');
gallery.classList.add('gallery');
cars.forEach((idx) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = `car-images/car-${idx}.jpg`;
  img.alt = `car ${idx}`;
  img.classList.add('car-img');
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const selectedImg = document.createElement('img');
    selectedImg.src = img.src;
    selectedImg.alt = img.alt;
    selectedImg.classList.add('selected-img');
    overlay.append(selectedImg);
    container.prepend(overlay);
    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
  li.append(img);
  gallery.prepend(li);
});

container.append(gallery);
