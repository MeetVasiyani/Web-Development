//cutom react
// const React = {
//     createElement : function(tag,attributes,children){
//         const ele = document.createElement(tag);
//         ele.textContent = children;
//         for (const key in attributes) {
//             if(key == 'style'){
//                 Object.assign(ele.style,attributes.style)
//             }
//             else{
//                 ele[key] = attributes[key];
//             }
//         }
//         return ele;
//     }
// }

// const ReactDOM = {
//     render : function(parent,child){
//         parent.append(child);
//     }
// }
// const ReactDOM = {
//     render: function (reactElement, root) {
//         const ele = document.createElement(reactElement.type);
//         const { props } = reactElement;
//         for (const key in props) {
//                 if (key == 'style') {
//                     Object.assign(ele.style, props.style)
//                 }
//                 else if (key == 'children') {
//                     ele.textContent = props[key];
//                 }
//                 else {
//                     ele[key] = props[key];
//                 }
//         }
//         root.append(ele);
//     }
// }

// const React = {
//     createElement: function (type, props, ...children) {
//         return {
//             type: type,
//             props: {
//                 ...props,
//                 children: children
//             },
//         }
//     }
// }
const ele1 = React.createElement('h1', { className: "element", id: "first", style: { fontSize: '30px', backgroundColor: 'Orange', color: 'white' } }, 'Hello Coder Army');
const ele2 = React.createElement('h2', { className: "element", id: "second", style: { fontSize: '20px', backgroundColor: 'Pink', color: 'green' } }, 'Strike is Launched');
const div = React.createElement('div',null,ele1,ele2);


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div);

// console.log(ele1)
// const ele1 = document.createElement('h1');
// ele1.textContent = 'Hello coder army';
// ele1.className = 'element';
// ele1.id = 'first';
// ele1.style.fontSize = '30px';
// ele1.style.backgroundColor = 'Orange';

// const ele2 = document.createElement('h2');
// ele2.textContent = 'Strike launched';
// ele2.className = 'element';
// ele2.id = 'second';
// ele2.style.fontSize = '40px';
// ele2.style.backgroundColor = 'pink';
// ele2.style.color = 'green';

//Original React

// const root = document.getElementById('root');
// ReactDOM.render(ele1, root);
// ReactDOM.render(ele2, root);