const img = document.querySelector('img');

const newGifBtn = document.querySelector('#new-gif');
newGifBtn.addEventListener('click', getGIF);

function getGIF() {
    const imgURL = 'http://api.giphy.com/v1/gifs/translate?api_key=rj975r52zrOqbpR5LBS4M68C4ZzRW5Xu&s=programming&weirdness=10'
    let newImg = fetch(imgURL, {
        mode: 'cors'
      });
    
    newImg
    .then(response => response.json())
    .then(response => {
        if (response.meta.status === 200) {
            const gifUrl = response.data.images.downsized.url;
            img.src = gifUrl;
        }
    });
    
}