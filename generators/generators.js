 /*funcion que se le agrega el aterisco para que sea una funcion generadora que tiene un for 
 y un yiel para pausar y reanudar el generador 
le agregamos el metodo .next
 para ranudar la ejecucion cada vez que la llamemos
 */
 function* generador1(n){
	for (var i = 0; i < n; i++) {
		yield console.log([i])
	}	
}
const generator = generador1(4);

generator.next();
generator.next();

/*funcion que se le agrega el aterisco para que sea una funcion generadora que tiene un for que va recorrer un array 
y un yiel que va pausar y reanudar el generador
 le agregamos el metodo .next
 para ranudar la ejecucion cada vez que la llamemos
 */
var array = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
function* generador2(n){
	for (var i = 0; i <= n; i++) {
		yield console.log(array[i])
	}	
}
const generator2 = generador2(6);

generator2.next();
generator2.next();
generator2.next();
generator2.next();
generator2.next();
generator2.next();
generator2.next();

/*funcion que se le agrega el aterisco para que sea una funcion generadora, tiene un for que va recorrer un array 
y un yiel que va pausar y reanudar el generador
 le agregamos el metodo .next
 para reanudar la ejecucion cada vez que la llamemos
 */
var array1 = ["dell","lenovo","hp"];
function* generador3(n){
  for (var i = 0; i <= n; i++) {
		yield console.log(array1[i])
	}	
}
const generad = generador3(2);
generad.next();
generad.next();


/* a esta funcion  se le agrego el aterisco para que sea una funcion generadora
tiene un for que va mostrar this.saludo un numero de veses 
y un yiel que va pausar y reanudar el generador
 le agregamos el metodo .next
 para reanudar la ejecucion cada vez que la llamemos
 */
this.saludo = "hola que mas";
function* generador4(n){
  for (var i = 0; i <= n; i++) {
	  console.log(this.saludo)
	  yield
	}	
}
const genera = generador4(7);
genera.next();
genera.next();
genera.next();



/*a esta funcion se le agrego el aterisco para que sea una funcion generadora, tiene un for que tiene un limite de ejecucion
qie se le dio por parametro , va ser una suma 
y un yiel que va pausar y reanudar el generador
 le agregamos el metodo .next
 para reanudar la ejecucion cada vez que la llamemos
 */
function* generador5(n){
  for (var i = 0; i <= n; i++) {
	  console.log (resultado = i + i );
	  yield
	}	
}
const gene = generador5(5);
gene.next();
gene.next();
gene.next();
gene.next();


/*a esta funcion se le agrego el aterisco para que sea una funcion generadora, tiene un for que tiene un limite de ejecucion
que se le dio por parametro , va ser una multiplicacion 
y un yiel que va pausar y reanudar el generador
 le agregamos el metodo .next
 para reanudar la ejecucion cada vez que la llamemos
 */
function* generador6(n){
  for (var i = 0; i <= n; i++) {
	  console.log (resultado = i * i );
	  yield
	}	
}
const gen = generador6(5);
gen.next();
gen.next();
gen.next();
gen.next();
gen.next();

/*a esta funcion se le agrego el aterisco para que sea una funcion generadora, tiene un for que tiene un limite de ejecucion
que se le dio por parametro , va ser una resta
y un yiel que va pausar y reanudar el generador
 le agregamos el metodo .next
 para reanudar la ejecucion cada vez que la llamemos
 */
function* generador7(n){
  for (var i = 0; i <= n; i++) {
	  console.log (resultado = n - i );
	  yield
	}	
}
const genera7 = generador7(5);
genera7.next();
genera7.next();
genera7.next();
genera7.next();


/*a esta funcion se le agrego el aterisco para que sea una funcion generadora, tiene un for que tiene un limite de ejecucion
que se le dio por parametro , va ser una division
y un yiel que va pausar y reanudar el generador
 le agregamos el metodo .next
 para reanudar la ejecucion cada vez que la llamemos
 */
function* generador8(n){
  for (var i = 0; i <= n; i++) {
  	  var z = 35 ;
	  console.log (resultado = z / i );
	  yield
	}	
}
const gen8 = generador8(4);
gen8.next();
gen8.next();
gen8.next();
gen8.next();

/*funcion que se le agrega el aterisco para que sea una funcion generadora, tiene un for que va recorrer un array 
y un yiel que va pausar y reanudar el generador
 le agregamos el metodo .next
 para reanudar la ejecucion cada vez que la llamemos
 */

var animal = ["perro","gato","vaca"];
function* generador9(n){
  for (var i = 0; i <= n; i++) {
		yield console.log(animal[i])
	}	
}
const generad9 = generador9(2);
generad9.next();
generad9.next();
generad9.next();

/*funcion que se le agrega el aterisco para que sea una funcion generadora, tiene un for que va recorrer un array 
y un yiel que va pausar y reanudar el generador
 le agregamos el metodo .next
 para reanudar la ejecucion cada vez que la llamemos
 */
var pais = ["belgica","españa","francia"];
function* generador10(n){
  for (var i = 0; i <= n; i++) {
		yield console.log(pais[i])
	}	
}
const generadDiez = generador10(2);
generadDiez.next();
generadDiez.next();
generadDiez.next();






