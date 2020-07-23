

const Component = (url) => {
    fetch(url)
    .then( response => response.json())
    .then( result => {
        let element = document.getElementById('content')
        element.innerHTML = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h3 class="card-title">${result.name}</h3>
            ${result.terrain ? `<h4 class="card-subtitle mb-2 text-muted">${result.terrain}</h4>` : ""}
            ${result.gravity ? `<h4 class="card-subtitle mb-2 text-muted">${result.gravity}</h4>` : ""}
            ${result.diameter ? `<h4 class="card-subtitle mb-2 text-muted">${result.diameter}</h4>` : ""}
            ${result.population ? `<h4 class="card-subtitle mb-2 text-muted">${result.population}</h4>` : ""}
            ${result.gender ? `<h4 class="card-subtitle mb-2 text-muted">${result.gender}</h4>` : ""}
            ${result.hair_color ? `<h4 class="card-subtitle mb-2 text-muted">${result.hair_color}</h4>` : ""}
            ${result.skin_color ? `<h4 class="card-subtitle mb-2 text-muted">${result.skin_color}</h4>` : ""}
            ${result.eye_color ? `<h4 class="card-subtitle mb-2 text-muted">${result.eye_color}</h4>` : ""}
            ${result.height ? `<h4 class="card-subtitle mb-2 text-muted">${result.height}</h4>` : ""}
            ${result.homeworld ? `<h4 class="card-subtitle mb-2 text-muted">${result.homeworld}</h4>` : ""}
            ${result.Especie ? `<h4 class="card-subtitle mb-2 text-muted">${result.Especie}</h4>` : ""}
            ${result.language ? `<h4 class="card-subtitle mb-2 text-muted">${result.language}</h4>` : ""}
            ${result.average_height ? `<h4 class="card-subtitle mb-2 text-muted">${result.average_height}</h4>` : ""}
            ${result.model ? `<h4 class="card-subtitle mb-2 text-muted">${result.model}</h4>` : ""}
            ${result.manufacturer ? `<h4 class="card-subtitle mb-2 text-muted">${result.manufacturer}</h4>` : ""}
            ${result.passengers ? `<h4 class="card-subtitle mb-2 text-muted">${result.passengers}</h4>` : ""}
           
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
        </div>
        `;
        console.log(result)
        
    })
    
    .catch(err => console.log(err))

}

export default Component
