/*una clase con atributos, el metodo get que va obtener el valor de la suma de dos numeros y el otro metodo set 
que va actualizar los numeros ah sumar en cada una una de la variables para dar una nuevo resultado
*/
class operacion{

	constructor(n1, n2){
		this.n1 = n1;
		this.n2 = n2;
	}

	get (){
	return this.resultado = this.n1 +  this.n2;
		
}

	set(n1, n2){
		this.n1 = n1;
		this.n2 = n2;
	}

}
var suma = new operacion( 2 , 30);
var mostrar = suma.get();
console.log(mostrar);

suma.set(7,9);
var mostrar1 = suma.get();
console.log(mostrar1);

/*una funcion con get que va obtener los resultados de una resta y mas abajo una funcion set que va actualizar los valores
de los parametros y sacara un nuevo resultado
*/

function get(n1,n2) {
	console.log(resultado = n1 - n2) ;
}

function set(n1,n2) {
	console.log(resultado = n2 - n1)
}
set(7,5);
get(45,3);

/* un objeto con propiedades y un metod get que va traer los datos de cada propiedad en el objeto
*/
var persona = {
	name : "david",
	apellido : "rios",
    lenguajes : ["castellano","ingles","matematicas"],
    get(){
    	console.log( `${this.name} ${this.lenguajes}`)
    }
}
persona.get();
/* un objeto con propiedades y un metodo set que va actualizar los valores del array lenguajes por medio de nuevos valores
que le entran por parametros
*/
var persona = {
	name : "david",
	apellido : "rios",
    lenguajes : [],
    set(nuevos){
    	this.lenguajes = nuevos;
    	console.log( `${this.name} ${this.lenguajes}`)
    }
}
persona.set("java php javascript");
/*funcion con get que mustra el valor de la raiz cuadradad de un numero
*/
function get1(n) {
	 resultado = Math.sqrt(n);
	console.log(resultado) ;
}
/* funcion set  que hace una raiz cuadrada y actualiza el resultado de lo que le entra por parametro
*/
function set2(n) {
	console.log(resultado = Math.sqrt(n))
}
set2(70);
get1(25);

/*una clase con atributos, y el metodo get que va obtener el valor de la division de dos numeros y el otro metodo set 
que va actualizar los numeros ah dividivir en cada una una de la atributos para dar una nuevo resultado
*/
class division{

	constructor(n1, n2){
		this.n1 = n1;
		this.n2 = n2;
	}

	get2 (){
	return this.resultado = this.n1 /  this.n2;
		
}

	set3(n1, n2){
		this.n1 = n1;
		this.n2 = n2;
	}

}
var div = new division( 2 , 30);
var mostrar = div.get2();
console.log(mostrar);

div.set3(7,9);
var mostrar1 = div.get2();
console.log(mostrar1);


/*una clase con atributos, y el metodo get que va obtener el valor de la multiplicasion de dos numeros y el otro metodo set 
que va actualizar los numeros ah multiplicar en cada una una de los atributos para dar una nuevo resultado
*/
class multiplicasion{

	constructor(n1, n2){
		this.n1 = n1;
		this.n2 = n2;
	}

	get3 (){
	return this.resultado = this.n1 *  this.n2;
		
}

	set4(n1, n2){
		this.n1 = n1;
		this.n2 = n2;
	}

}
var multi = new multiplicasion( 23 , 30);
var mostrar = multi.get3();
console.log(mostrar);

multi.set4(70,9);
var mostrar1 = multi.get3();
console.log(mostrar1);

/*un objeto llamado fruta que tiene propiedades y un metod get que va traer los valores de cada propiedad
*/

var fruta = {
	name : "fresa",
    edad: "2 meses",
    get4(){
    	console.log( `${this.name} ${this.edad}`)
    }
}
fruta.get4();

/*UN OBJETO CON PRODIEDADES Y EL UN METODO SET QUE VA ACTUALIZAR EL VALOR QUE TIENE LA PROPIEDAD EDAD POR MEDIO DE LOS DATOS 
QUE LE ESTAN ENTRANDO POR PARAMETRO 
*/
var otraFruta = {
	name : "mango",
	edad : "2 dias",
    set5(nuevo){
    	this.edad = nuevo;
    	console.log( `${this.name} ${this.edad}`)
    }
}
otraFruta.set5("4 dias");

/*UN OBJETO CON PRODIEDADES Y EL UN METODO GET QUE VA TRAER EL VALOR QUE TIENE CADA PROPIEDAD LA PROPIEDAD  
*/
var animal = {
	name : "perro",
	raza : "pitbull",
    get5(){
    	console.log( `${this.name} ${this.raza}`)
    }
}
animal.get5();
/*UN OBJETO CON PRODIEDADES Y EL UN METODO SET QUE VA ACTUALIZAR EL VALOR QUE TIENE LA PROPIEDAD EDAD POR MEDIO DE LOS DATOS 
QUE LE ESTAN ENTRANDO POR PARAMETRO 
*/
var animal = {
	name : "gato",
	edad : "4 años",
    set(tiempo){
    	this.edad = tiempo;
    	console.log( `${this.name} ${this.edad}`)
    }
}
animal.set("5 años");

/*un objeto llamado ciudad que tiene propiedades y un metodo get que va traer los valores de cada propiedad
*/
var ciudad = {
	name : "manizales",
	pais : "colombia",
    get6(){
    	console.log( `${this.name} ${this.pais}`)
    }
}
ciudad.get6();

/*un objeto que va remplazar los valores name por medio de un metodo set 
*/
var ciudad1 = {
	name : "boston",
	pais : "ee.uu",
    set7(nuevo){
    	this.name = nuevo;
    	console.log( `${this.name} ${this.pais}`)
    }
}
ciudad1.set7("california");
/*un objeto llamado fruta que tiene propiedades y un metod get que va traer los valores de cada propiedad
*/
var ropa = {
	name : "nike",
	hecho : "EE.UU",
    get7(){
    	console.log( `${this.name} ${this.hecho}`)
    }
}
ropa.get7();

/*un objeto que va remplazar los valores de cada propiedad por medio de un metodo set 
*/
var tennis = {
	name : "adidas",
	h : "tailandia",
    set8(x,p){
    	this.name = x;
    	this.hecho = p;
    	console.log( `${this.name} ${this.hecho}`)
    }
}
tennis.set8("gucci","EE.UU");

