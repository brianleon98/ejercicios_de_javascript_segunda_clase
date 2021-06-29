//esta promesa va mostrar 2 mensajes aunque no allan fallos en el codigo
 promesa1 =  new Promise(function(resolve, reject){
	 console.log("hola que hace");
	 reject("ups algo fallo");
	 resolve();
})
promesa1.then(()=>{
	console.log("lo hiciste");
}).catch(mensaje=>{
	console.error(mensaje);
});
/* en esta promesa se esta haciendo un if else que esta haciendo una comparacion,
 si esta es verdadera se ejecuta resolve si no el metodo reject mostrando que ah habido un error en la comparacion o que nos es igual*/
let promesa2 = new Promise(function(resolve, reject){
	var saludo = "juan";
  if (saludo == "pedro") {
    resolve("se hizo");
  } else {
  	reject("no se hizo");
   }
 });

promesa2.then(resolve => console.log(resolve)).catch(error => console.error(error));

/* en esta promesa hay un array que sera recorrido por un for en el que tenemos los metodos resolve y reject y si todo sale bien for 
se ejecutara resolve , pero como hay un error en el for se ejecutara reject con un mensaje diciendo de error
*/
let promesa3 = new Promise(function(resolve, reject){
    var array = ["lunes","martes","viernes"];

    for (var i = 10; i <array.length; i++) {
        resolve(array[i]);
    }
    reject("hay un error");
});

promesa3.then(resolve => console.log(resolve)).catch(error => console.error(error))

/*en esta promesa se esta haciendo una comparacion con un if de que si el resultado de 2 * 2 es 4 se ejecutara el metodo resolve
y si no reject con un mensaje de que el resultado no es 4
*/
let promesa4 = new Promise(function(resolve,reject){
	var resultado = 2 * 2 ;
    if (resultado == 4) {
    	resolve(resultado);
    } else {
    	reject("el resultado no es 4");
    }

});

promesa4.then(resolve => console.log(resolve)).catch(error => console.log(error));
/*en esta promesa se esta haciendo otra comparacion con un if else donde se ejecutara un reject mostrando une error porque cuando hizo 
la comparacion con la variable pc habia otro nombre
*/
let promesa5 = new Promise(function(resolve, reject){
	var pc = "dell";
	if (pc == "lenovo") {
		resolve("el computador es "+" "+pc);
	} else {
		reject(`hay otra marca de computador y es : ${pc}`)
	}
});

promesa5.then(resolve => console.log(resolve)).catch(error => console.log(error));
/*en esta promesa se esta retornando una funcion y dentro de el hay un if else que esta haciendo una comparacion 
de que si lo que le entra por parametro es igual alo que se compara se ejecuta resolve si no reject
*/
function raza(name) {
	return new Promise(function(resolve,reject){
		if (name == "pastorAleman") {
			resolve(`la raza es : ${name}`)
		} else {
			reject(`hay otra raza y es : ${name}`)
		}
	})
};

raza("pastorAleman").then(resolve => console.log(resolve)).catch(error => console.log(error));
/* en esta promesa se hace una comparacion de que si la variable p es igual a un string se ejecuta la promesa con un mensaje
pero como lo que hay en la variable p es un entero se ejecuta el metodo reject mostrando un mensaje en pantalla 
diciendo de un error
*/

let promise7 = new Promise(function(resolve, reject){
	var p = 7;
	if (p === "7") {
		resolve("los datos son iguales")

	} else {
		reject(" error hay un dato tipo ENTERO en la variable p")
	}
});

promise7.then(resolve => console.log(resolve)).catch(error => console.error(error));

/*promesa que hace una comparacion de que si lo que hay en la variable s se nejecuta la promesa y muestra true si  no el metodo
reject nostramdo de que hay un false en la variable s
*/
var promise8 = new Promise(function(resolve,reject){
    var s = false ;
    if (s == true) {
    	resolve(s);
    }else{
      reject("error hay un false en la variable esta vacia")
    }
    
});
promise8.then(resolve => console.log(resolve)).catch(error => console.error(error));
/*promesa que compara si lo que hay en la variabkle h es una suma pues se ejecuta la promesa y hace una operacion suma pero
si loq ue hay en la variable h no es igual a suma la promesa falla  se ejecuta reject
*/
var promise9 = new Promise(function(resolve,reject){
	var h = "resta";
	if (h == "suma") {
		reject(resultado = 2 + 5);
	} else {
		reject("error no se pudo hacer la suma");
	}
});

promise9.then(reject => console.log(reject)).catch(error =>console.error(error));

/*promesa que compara si lo que hay en la variable z
 es un string con la palabra divicion pues se ejecuta la promesa y hace una operacion division pero
si loq ue hay en la variable z no es igual a un string con la palabra division la promesa falla y  se ejecuta reject
*/
var z = "division";
let promise10 = new Promise(function(resolve,reject){
    if (z == "division") {
    	resolve(resultado = 123 / 3);
    } else {
    	reject("error nombre de la operacion en la variable Z no es division");
    }
});

promise10.then(reject => console.log(reject)).catch(error => console.error(error))







