//INICIO DESFAIO SIMULADOR INTERACTIVO
let CostoServicio= 0;
let Carrito=0;

var SegComp = false



//Bienvenida Y pedida de usuario y contraseña

alert('Bienvenido a Entorno Agicola! \n \n Ingresa tu Usuario y Contraseña ')

let Usuario = prompt('Usuario')
let Contraseña = prompt('Contraseña ')

comprar();


function comprar(){

alert('Su carrito de compras en este momento es de  ' + Carrito + '  Pesos MXN'  )

let Servicio = prompt('Que tipo de servicio deseas contratar: \n \n 1. Suscripcion Anual -> 2800$ \n 2. Suscripcion Mensual \n 3. Publicacion en Revista \n 4. Difusion -> 500$')

while((Servicio !== '1') && (Servicio !== '2') && (Servicio !== '3') && (Servicio !== '4')){

        alert('Ingresa una respuesta de la lista')
        Servicio = prompt('Que tipo de servicio deseas contratar: \n \n 1. Suscripcion Anual -> 2800$ \n 2. Suscripcion Mensual \n 3. Publicacion en Revista \n 4. Difusion -> 500$')

} 

if(Servicio === '1'){

        Servicio = 'Suscripcion Anual'
        CostoServicio = 2800;

        alert('Se Agregaron a tu carrito  '+ CostoServicio + ' Pesos MXN')
        Carrito = Carrito + CostoServicio;

        //Seguir Compra
         SegComp = prompt('Deseas comprar Mas productos? \n  \n 1.SI    2.NO')

         if(SegComp === '1'){ comprar();}
         else{alert('Termino su compra \n  \n Su carrito de compras es de ' + Carrito + ' PESOS MXN  ' + '\n  \n Pase al apartado de pagar para continuar con el proceso')}

        }

        
if(Servicio === '2'){

        Servicio = 'Suscripcion Mensual'
        CostoServicio = 300;

        let mesNum = prompt('Cuantos Meses deseas contratar: \n  \n 1 -> 300$    2 -> 600$ \n 3 -> 900$    4 -> 1200$  \n 5 -> 1500$    6 -> 1800$  \n 7 -> 2100$    8 -> 2400$    \n 9 -> 2700$    10 -> 3000$  \n 11 -> 3300$ ')

        

        
        while((mesNum !== '1') && (mesNum !== '2') && (mesNum !== '3') && (mesNum !== '4')&& (mesNum !== '5')&& (mesNum !== '6')&& (mesNum !== '7')&& (mesNum !== '8')&& (mesNum !== '9')&& (mesNum !== '10') && (mesNum !== '11') && (mesNum !== 'esc')){

                alert('Tu opcion No esta en la lista \n \nO es mayor a 11 meses, Si requieres mas de 12 meses Adquiere la Suscripcion Anual')

                 mesNum = prompt('Cuantos Meses deseas contratar: \n  \n 1 -> 300$    2 -> 600$ \n 3 -> 900$    4 -> 1200$  \n 5 -> 1500$    6 -> 1800$  \n 7 -> 2100$    8 -> 2400$    \n 9 -> 2700$    10 -> 3000$  \n 11 -> 3300$ ')

                2
        }

        CostoServicio= CostoServicio*mesNum
        
        alert('Se Agregaron a tu carrito  '+ CostoServicio + ' Pesos MXN')
        Carrito = Carrito + CostoServicio;

        //Seguir Compra
         SegComp = prompt('Deseas comprar Mas productos? \n  \n 1.SI    2.NO')

         if(SegComp === '1'){ comprar();}
         else{alert('Termino su compra \n  \n Su carrito de compras es de ' + Carrito + ' PESOS MXN  ' + '\n  \n Pase al apartado de pagar para continuar con el proceso')}

        }

        
if(Servicio === '3'){

        Servicio = 'Publicacion en Revista'

        let CostoPagina = 0

        let Portada = 2000
        let Trasera = 2000
        let Central = 1500
        let OtraPag = 750

       

         let Pagina = prompt('En que pagina sera tu publicacion: \n 1. Portada -> 2000$ \n 2. Trasera -> 2000$ \n 3. Central -> 1500$ \n 4. Otra -> 750$')

        while((Pagina !== '1') && (Pagina !== '2') && (Pagina !== '3') && (Pagina !== '4')){

                alert('Ingresa una respuesta de la lista')
                Pagina = prompt('En que pagina sera tu publicacion: \n 1. Portada -> 2000$ \n 2. Trasera -> 2000$ \n 3. Central -> 1500$ \n 4. Otra -> 750$')
        }

                if(Pagina === '1'){CostoPagina = CostoPagina+ Portada}
                else if (Pagina === '2'){CostoPagina = CostoPagina+ Trasera}
                else if (Pagina === '3'){CostoPagina = CostoPagina+ Central}
                else if (Pagina === '4'){CostoPagina = CostoPagina+ OtraPag}

                alert('Se Agregaron a tu carrito  '+ CostoPagina + ' Pesos MXN')
                Carrito = Carrito + CostoPagina;
        
                //Seguir Compra
                 SegComp = prompt('Deseas comprar Mas productos? \n  \n 1.SI    2.NO')
        
                 if(SegComp === '1'){ comprar();}
                 else{alert('Termino su compra \n  \n Su carrito de compras es de ' + Carrito + ' PESOS MXN  ' + '\n  \n Pase al apartado de pagar para continuar con el proceso')}

        

       

        }

        
if(Servicio === '4'){

        Servicio = 'Suscripcion Anual'
        CostoServicio = 500;
        
        alert('Se Agregaron a tu carrito  '+ CostoServicio + ' Pesos MXN')
        Carrito = Carrito + CostoServicio;
        
        //Seguir Compra
        SegComp = prompt('Deseas comprar Mas productos? \n  \n 1.SI    2.NO')
        
        if(SegComp === '1'){ comprar();}
        else{alert('Termino su compra \n  \n Su carrito de compras es de ' + Carrito + ' PESOS MXN  ' + '\n  \n Pase al apartado de pagar para continuar con el proceso')}
        
                }
        
    }
