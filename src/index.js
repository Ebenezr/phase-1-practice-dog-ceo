console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
 //challenge 1   
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
//challenge 2
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
        //console.log(responce)
    .then(data => {console.log(data)
    
        const dogListUl = document.getElementById('dog-breeds');
        data.message.forEach(dog => {
            const img = document.createElement('img');
            const list = document.createElement('li');
            img.src = dog;
            list.appendChild(img);
            dogListUl.appendChild(list);
        })
    })
    .catch(error => console.log(error))
})