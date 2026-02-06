// gallery generation script
const galleryContainer = document.querySelector('.gallery');
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // add your image paths here

function createGallery() {
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = 'Gallery Image';
        galleryContainer.appendChild(imgElement);
    });
}

document.addEventListener('DOMContentLoaded', createGallery);