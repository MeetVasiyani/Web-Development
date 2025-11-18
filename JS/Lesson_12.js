const newElement = document.createElement("h2");
newElement.textContent = "Hello World";
newElement.id = "second";

console.log(newElement)

const element = document.getElementById("first");
// element.before(newElement);
element.after(newElement);

const new2 = document.createElement('h3');
new2.textContent = 'Happy Diwali';
new2.id = 'third';
// new2.className = 'diwali';
// new2.className += ' holi';
new2.classList.add('diwali')
new2.classList.add('holi')

new2.style.backgroundColor = 'red'
new2.style.fontSize = '30px';

new2.setAttribute('hello',"ji")

element.before(new2)
console.log(new2.getAttribute('hello'));

// const list = document.createElement("li")
// list.textContent = "Milk"

// const list1 = document.createElement("li")
// list1.textContent = "Cake"

// const list2 = document.createElement("li")
// list2.textContent = "Halwa"

// const list3 = document.createElement("li")
// list3.textContent = "Paneer"

// const unele = document.getElementById('listing')

// unele.append(list,list1);
// unele.prepend(list2);

// unele.children[1].after(list3);

const unele = document.getElementById('listing')
const fragment = document.createDocumentFragment();

foods = ["Milk","Halwa","Tofu","Tea"];

for(let food of foods){
    const list = document.createElement('li');
    list.textContent = food;
    fragment.append(list);
}
unele.append(fragment)

const s1 = document.getElementById("first")
s1.remove();

const month = document.getElementById("ten");
console.log(month);

const lister = document.createElement('li');
lister.textContent = 'May';

// lister.innerHTML = '<h2>May</h2>';


month.insertAdjacentElement("afterbegin",lister)