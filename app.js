const cargar = document.querySelector('#cargar')

addEventListener('submit', cargarDatos = (e) =>{
    e.preventDefault();
    datosCargados();
} 
)

datosCargados = () => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => iterator(json))
} 
iterator = (json) => {
    data = json;
    const ul = document.createElement("ul");
    data.forEach(element => {
 
        ul.innerHTML += `
        <li>
        <h2>${element.title}</h2>
        <p>${element.body}
        </li>
    `
    ul.classList.add = 'container'
        
    });
    
    console.log(ul)
    let comentarios = document.querySelector('.comentarios')
comentarios.appendChild(ul)
    
}

