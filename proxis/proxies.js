/*objeto persona con tres propiedades que se intercepta  por medio de un proxy donde luego se va buscar las propiedades 
del objeto persona y se mostrara con un console.og con sus valores
*/
const persona = {
	nombre : "david",
	apellido : "leon",
	edad : 22 
}
const handler = {
      get(target, property) {
        console.log(`Property ${property} ha sido leido.`);
        return target[property];
    }
}
const proxyUser = new Proxy(persona, handler);

console.log(proxyUser.nombre);
console.log(proxyUser.apellido);
console.log(proxyUser.edad);

/*objeto auto con tres propiedades que se intercepta  por medio de un proxy donde luego se va buscar las propiedades 
del objeto persona y se mostrara con un console.og con sus valores
*/
const auto = {
	nombre : "mazda",
	modelo : "2020",
	precio: 45.5556
}
const handler1 = {
      get(target, property) {
        console.log(` ${property}`);
        return target[property];
    }
}
const proxyAutos = new Proxy(auto, handler1);

console.log(proxyAutos.nombre);
console.log(proxyAutos.modelo);
console.log(proxyAutos.precio);

/*objeto animal con tres propiedades sin valores que se intercepta  por medio de un proxy donde luego se va buscar las propiedades 
del objeto persona se le agregaran los valores y se mostrara en la consola
*/
const animal = {
	name : "",
	raza : "",
	edad : ""
}

const handler2 = {
	get(target, property){
		console.log(`${property}`)
		return target[property];
	}
}
const proxyAnimal = new Proxy(animal, handler);

animal.name = "perro";
animal.raza = "pitbul";
animal.edad = "3 años";


console.log(proxyAnimal.name);
console.log(proxyAnimal.raza);
console.log(proxyAnimal.edad);

/*objeto colores con una propiedad que se intercepta  por medio de un proxy donde luego se va buscar las propiedades 
del objeto colores y se mostrara en consola
*/
const colores ={
	name : "amarillo ,azul, rojo",

}

const handler3 = {
	get(target, property){
		console.log(`${property}`)
		return target[property];
	}
}
const proxiColores = new Proxy(colores, handler3);

console.log(proxiColores.name)



/*objeto meses con tres propiedades que se intercepta  por medio de un proxy donde luego se va buscar las propiedades 
del objeto meses y se mostrara con un consola con sus valores
*/

const meses ={
	name : "febrero",
	dias : "28"
}

const handler4 = {
	get(target, property){
		console.log(property)
		return target[property];
	}
}

const proxiMeses = new Proxy(meses, handler4)

console.log(proxiMeses.name);
console.log(proxiMeses.dias);

/*objeto paises con una propiedad que tiene como valor un array que va ser recorrido por un array 
y se intercepta  por medio de un proxy donde luego se va buscar 
la propiedad
del objeto pais y se mostrara en consola con sus valores
*/
const paises = {
	pais : ["alemania","belgica","china","francia"]
}

const handler5 = {
	get(target, property){
		for (var i = 0; i < property.length; i++) {
			console.log(property[i])
			return target[property];
		}
	}
}

const proxipais = new Proxy(paises,handler5);
console.log(proxipais.pais);

/*objeto pc con una propiedad sin valores que se intercepta  por medio de un proxy donde luego se va buscar las propiedades 
del objeto pc se le agregaran los valores y se mostrara en la consola
*/
const pc = {
	names : ""
}

const handler6 ={
	get(target, property){
	console.log(property)
    return target[property];
  }
}

var proxyPcs = new Proxy(pc, handler6);

pc.name = "dell ,toshiba , lenovo ,hp";

console.log(proxyPcs.name)

/*objeto ropa con tres propiedades sin valores que se intercepta  por medio de un proxy donde luego se va buscar las propiedades 
del objeto ropa se le agregaran los valores y se mostrara en la consola
*/
const ropa = {
    marca : []

}

const handler7 = {
	get(target, property){
		console.log(property);
		return target[property];
	}
}

var proxiropa = new Proxy(ropa, handler7);

ropa.marca = ["nike","adidas"];

console.log(proxiropa.marca);

/*objeto tenis con una propiedad que se intercepta  por medio de un proxy donde luego se va buscar las propiedades 
del objeto tenis y se mostrara con en consola
*/

const tenis ={
	tenis : "nike , gucci"
}

const handler8 = {
	get(target, property){
		console.log(property)
		return target[property];
	}
}

const proxitenis = new Proxy(tenis, handler8)

console.log(proxitenis.tenis);

/*objeto tv con una propiedad que se intercepta  por medio de un proxy donde luego se va buscar las propiedades 
del objeto tv y se mostrara en consola
*/

const tv ={
	name : "samsung , callenge, elgi"
}

const handler9 = {
	get(target, property){
		console.log(property)
		return target[property];
	}
}

const proxiTVS = new Proxy(tv, handler9)

console.log(proxiTVS.name);



