// function handleClick() {
//     const ele = document.getElementById('first')
//     ele.textContent = 'Strike is coming'
// }

// const ele = document.getElementById('first');

// overrides so of no use for simultaneous actions
// ele.onclick = function handleClick() {
//     ele.style.backgroundColor = 'pink';
// }

// ele.onclick = function handleClick() {
//     ele.textContent = 'Strike is coming'
// }

// ele.addEventListener('click',()=>{
//     ele.textContent = 'Strike is coming';
// })

// ele.addEventListener('click',()=>{
//     ele.style.color = 'pink';
// })

// ele.addEventListener('dblclick',()=>{
//     ele.style.color = 'pink';
// })

// ele.addEventListener('mouseenter',()=>{
//     ele.style.color = 'pink';
// })
// ele.addEventListener('mouseleave',()=>{
//     ele.style.color = 'white';
// })

// const child1 = document.getElementById('child1');
// child1.addEventListener('click',()=>{
//     child1.textContent = 'I am clicked';
// })

function handleClick(e){
    e.target.textContent = 'I am clicked';
    parent.removeEventListener('click',handleClick)
}

const parent = document.getElementById('parent');
parent.addEventListener('click',handleClick)

// for(let child of parent.children){
//     child.addEventListener('click',()=>{
//     child.textContent = 'I am clicked';
// })
// }

const grandparent = document.getElementById('grandparent');
grandparent.addEventListener('click',(e)=>{
    console.log(e.target)
    // console.log('Grandparent is clicked');
});

// const parent = document.getElementById('parent');
// parent.addEventListener('click',(e)=>{
//     console.log(e);
//     console.log('Parent is clicked');
// },);

// const child = document.getElementById('child');
// child.addEventListener('click',(e)=>{
//     console.log(e);
//     console.log('child is clicked');
// })

// capture phase on hai: Top se down aaoge: Us time pe event ko trigger kar diya jaayega
// capture phase off hai: Event hai usko down to up(Bubbling phase bolte hai, tab trigger kiya jaayega)