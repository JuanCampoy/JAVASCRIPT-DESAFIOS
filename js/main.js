let servicios = []
let cantidadCarrito = 0


class Servicio{
    constructor(id, nombre, precio, img, descrip ){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.img = img
        this.descrip = descrip
    }

    desplegarTarjeta(){
         
     
        const card = `
        <div class="tarjeta-servicio rounded-3" > 
            <h3>${this.nombre}</h3>
            <p>${this.descrip}</p>
            <img src="${this.img}" alt="imagen Suscripcion Anual">
            <button id=${this.id} class='btn btn-outline-success botonCompra'>Comprar</button>
            
            
      </div>
        `
        const container = document.getElementById('tarjetaServ')
        container.innerHTML += card
    }

    aumentarCarrito(){
        const botonServ = document.getElementById(this.id)
        console.log(botonServ)
        botonServ.addEventListener("click", () => aumentarCarrito())

        
    }

}

let prod1 = new Servicio('001', 'Suscripcion Anual', 2800, './assets/img/page-servicios/sub-anual.png','Anuncia tu negocio en nuestra pagina web durante 365 dias')
let prod2 = new Servicio('002', 'Suscripcion Mensual', 300, './assets/img/page-servicios/sub-mensual.png','Anuncia tu negocio en nuestra pagina web durante 30 dias o los meses que necesites')
let prod3 = new Servicio('003', 'Publicacion en Revista', 700, './assets/img/page-servicios/pagina-revista.png','Publica acerca de algo de tu interes en nuestra revista fisica y web')
let prod4 = new Servicio('004', 'Difusion', 500, './assets/img/page-servicios/difusion.png','Anunciate en la seccion de difusiones y en nuestras redes sociales y pagina web')


servicios.push(prod1, prod2, prod3, prod4)

servicios.forEach(e => {
    e.desplegarTarjeta()
}) 

servicios.forEach(e => {
    e.aumentarCarrito()
})

function aumentarCarrito() {

    
    cantidadCarrito += 1;

    const cantidadCarritoJSON = JSON.stringify(cantidadCarrito)

  localStorage.setItem('CarritoCantidad' ,cantidadCarritoJSON)  

    document.getElementById("carrito").innerHTML = "Carrito =" + cantidadCarritoJSON;


    console.log(cantidadCarritoJSON)
}


