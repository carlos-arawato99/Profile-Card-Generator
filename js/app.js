var contenido = document.querySelector('#contenido')
function traer() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        console.log(data.results[0])
        contenido.innerHTML = `
    
<div class="row">
<div class="col-4 offset-4">
    <div class="card">
        <img class="card-img-top" src="http://lorempixel.com/600/300" alt="">
        <div class="card-body text-center">
            <img class="avatar rounded-circle" src="${data.results[0].picture.large}" alt="Bologna">
            <h4 class="card-title">${data.results[0].name.first} ${data.results[0].name.last}</h4>
            <h6 class="card-subtitle mb-2 text-muted">Famous Actor</h6>
            <p class="card-text"></p>
            <a href="#" class="btn btn-info">Follow</a>
            <a href="#" class="btn btn-outline-info">Message</a>
        </div>
    </div>
</div>
</div>
        `
    })
}

