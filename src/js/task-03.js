const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const gallery = document.querySelector('#gallery')
gallery.classList.add('list-item')
gallery.style.display = 'flex';

const makeGallery = images => {
  return images.map(image => {
    let newElementString = '';
    const galleryList = `<li class = 'galery-item'><img width = '400px' height = '250px' src="${image.url}" alt="${image.alt}"></li>`;
    return newElementString += galleryList
  })
}

const imageRefs = makeGallery(images)

gallery.insertAdjacentHTML('afterbegin', imageRefs)
