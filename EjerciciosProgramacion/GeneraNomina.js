//* Escribe un programa que genere la nómina (bien desglosada) de un empleado según las siguientes condiciones:

//* • por parametros se pasa numero (1 - Prog. junior, 2 - Prog. senior, 3 - Jefe de proyecto), los días que ha estado de viaje visitando clientes durante el mes y su estado civil (1 - Soltero, 2 - Casado).

//*• El sueldo base según el cargo es de 950, 1200 y 1600 euros según si se trata de un prog. junior, un prog. senior o un jefe de proyecto respectivamente.

//* • Por cada día de viaje visitando clientes se pagan 30 euros extra en concepto de dietas. Al sueldo neto hay que restarle el IRPF, que será de un 25% en caso de estar soltero y un 20% en caso de estar casado.

function GenerarNomina(numero, diasViaje, estadoCivil) {
  let dietas = 0;
  let sueldoBruto = 0;
  let retencion = 0;

  switch (numero) {
    case 1:
      let sueldoJunior = 950;
      console.log(`Sueldo Base: ${sueldoJunior}`);
      dietas = diasViaje * 30;
      console.log(`Dietas ${diasViaje} viajes: ${dietas}`);
      sueldoBruto = sueldoJunior + dietas;
      console.log(`SueldoBruto:${sueldoBruto}`);
      if (estadoCivil === "soltero") {
        retencion = sueldoBruto * 0.25;
      } else {
        retencion = sueldoBruto * 0.2;
      }
      console.log(`Retencion:${retencion}`);
      console.log(`Sueldo Neto: ${sueldoBruto - retencion}`);
      break;
    case 2:
      let sueldoSenior = 1200;
      console.log(`Sueldo Base ${sueldoSenior}`);
      dietas = diasViaje * 30;
      console.log(`Dietas ${diasViaje} viajes: ${dietas}`);
      sueldoBruto = sueldoSenior + dietas;
      console.log(`SueldoBruto:${sueldoBruto}`);
      if (estadoCivil === "soltero") {
        retencion = sueldoBruto * 0.25;
      } else {
        retencion = sueldoBruto * 0.2;
      }
      console.log(`Retencion:${retencion}`);
      console.log(`Sueldo Neto: ${sueldoBruto - retencion}`);
      break;

    case 3:
      let sueldoJefeProyecto = 1600;
      console.log(`Sueldo Base ${sueldoJefeProyecto}`);
      dietas = diasViaje * 30;
      console.log(`Dietas ${diasViaje} viajes: ${dietas}`);
      sueldoBruto = sueldoJefeProyecto + dietas;
      console.log(`SueldoBruto:${sueldoBruto}`);
      if (estadoCivil === "soltero") {
        retencion = sueldoBruto * 0.25;
      } else {
        retencion = sueldoBruto * 0.2;
      }
      console.log(`Retencion:${retencion}`);
      console.log(`Sueldo Neto: ${sueldoBruto - retencion}`);
      break;

    default:
      console.log("Fuera de rango solo se aceptan 1-2-3");
  }
}

GenerarNomina(1, 5, "soltero");
GenerarNomina(3, 5, "casado");
