import {add, sub, mul, div} from './util/math.js'; // Importo un modulo esterno e in particolare una sua funzione.

/**
 * Funsione ad uso dimostrativo:
 *  - La funzione è esportata dal modulo e utilizza al suo interno la funzione "add" precedentemente importata.
 * 
 * @param  {} a primo valore
 * @param  {} b secondo valore
 */
export function callAdd (a, b) {
  // Viene usata la funzione "parseInt()" su ogni parametro per convertire il valore in formato numerico.
  // Si rende necessario questo cast perchè i value dei tag INPUT non sono tipizzati ma solo stringhe.
  return add (parseInt (a), parseInt (b));
}
export function callSub (a, b) {
  // Viene usata la funzione "parseInt()" su ogni parametro per convertire il valore in formato numerico.
  // Si rende necessario questo cast perchè i value dei tag INPUT non sono tipizzati ma solo stringhe.
  return sub (parseInt (a), parseInt (b));
}
export function callMul (a, b) {
  // Viene usata la funzione "parseInt()" su ogni parametro per convertire il valore in formato numerico.
  // Si rende necessario questo cast perchè i value dei tag INPUT non sono tipizzati ma solo stringhe.
  return mul (parseInt (a), parseInt (b));
}
export function callDiv (a, b) {
  // Viene usata la funzione "parseInt()" su ogni parametro per convertire il valore in formato numerico.
  // Si rende necessario questo cast perchè i value dei tag INPUT non sono tipizzati ma solo stringhe.
  return div (parseInt (a), parseInt (b));
}

export function addItem(){
  const ul = document.getElementById("myList");
  const li = document.createElement("li");
  li.setAttribute('id', 'mylist-item');
  li.appendChild(document.createTextNode('Elemento lista'));
  ul.appendChild(li);
}
export function removeItem(){
  const ul = document.getElementById("myList");
  const item = document.getElementById('mylist-item');
  ul.removeChild(item);
}


export function addImage(){
  const img = document.createElement("Img");
  img.src="https://www.addlance.com/blog/wp-content/uploads/2019/04/immagini-da-scaricare.jpg";
  img.setAttribute("id", "myimage");
  document.getElementById("myImage-container").appendChild(img);
}



export const trovaFilm = () => {
  const promiseFetch = fetch(
    'http://www.omdbapi.com/?s=%27blade%20runner%27&apikey=4fb63998'
  );

promiseFetch
.then (
    res => {
        if (res) return res.json();
    }
)
.then (resjson => {
    
  resjson.Search.forEach(stampa);
    })

.catch (err => {
    console.error (err);
})
};
const stampa = (item) =>{
  console.log(item.Title);
  console.log(item.Year);
}





































//TODO: callAdd arrow function version

export function addListElements () {
  for (let index = 1; index < 5; index++) {
    const node = document.createElement ('LI'); // Create a <li> node
    const textnode = document.createTextNode ('Elemento' + index); // Create a text node
    node.appendChild (textnode); // Append the text to <li>
    document.getElementById ('myList').appendChild (node); // Append <li> to <ul> with id="myList"
  } 
}

export function removeListElements() {
    const domElement = document.getElementById('myList');
    while (domElement.hasChildNodes()) {  
        domElement.removeChild(domElement.firstChild);
      }
}
