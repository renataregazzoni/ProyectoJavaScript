const user = "renata01";
const pass = "pass123";

intentos = 3;

for (let i = 0 ; i < 3 ; i++ ){

    let u = prompt("Ingrese su usuario");
    let p = prompt("Ingrese su contraseña");

 if (u == user && p == pass) {
    alert("Bienvenido a su cuenta");
    break;
}

intentos --; 
alert("Usuario y/o contraseña incorrectos. Te quedan "+intentos+" intentos");
 }

if (intentos <= 0 ){
    alert("Usuario bloqueado");
}


 


  let producto = prompt("Elegi tu producto") 
  let totalAPagar = Number
  
  switch (producto) {
    case "1":
        totalAPagar = 2000
        alert(totalAPagar);
        break;
    
    case "2":
        totalAPagar = 3000
        alert(totalAPagar);   
        break;
   
    case "3":  
        totalAPagar = 5000
        alert(totalAPagar);
        break;
    default:
        break;
  }


  function despedir(){
    let nombre = "renata"
    let alerta = alert("Gracias por tu compra " + nombre + "!")  
    return alerta
  }
  despedir()









