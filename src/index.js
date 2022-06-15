console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
        //console.log(responce)
    .then(data => {console.log(data)
    
        const dogList = document.getElementById('dog-image-container');
        data.message.forEach(dog => {
            const img = document.createElement('img');
            img.src = dog;
            dogList.appendChild(img);
        })
    })
    .catch(error => console.log(error))
})