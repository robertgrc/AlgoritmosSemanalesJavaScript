//* Haz un reloj que en tiempo real vaya mostrando la hora cada segundo
//* Solo puedes usar el objeto date para conseguir la hora por primera vez pero no para actualizar la hora
//* Ejemplos: let mi_reloj = new Reloj()
//* mi_reloj.encender();
//* Ejemplo    14:20:16
//* Ejemplo    14:20:17
//* Ejemplo    14:20:18

function Reloj() {
  this.hora = new Date();
  this.mostrarHora = function () {
    const horas = this.hora.getHours().toString().padStart(2, "0");
    const minutos = this.hora.getMinutes().toString().padStart(2, "0");
    const segundos = this.hora.getSeconds().toString().padStart(2, "0");
    console.log(`${horas}:${minutos}:${segundos}`);
  };
  this.encender = function () {
    this.mostrarHora();
    const self = this; // Almacenamos una referencia a "this"
    this.intervalo = setInterval(function () {
      self.hora.setSeconds(self.hora.getSeconds() + 1); // Actualizamos la hora
      self.mostrarHora();
    }, 1000); // Cada segundo
  };
  this.apagar = function () {
    clearInterval(this.intervalo);
  };
}

const mi_reloj = new Reloj();
mi_reloj.encender();
