let A = [1, 2, 3];
let B = A.unshift(3); // B = 4 which is the length of the array
// using Spread opererator > 3,1,2,3
B = [0, ...A, 4]; // 0,3,1,2,3,4 as it is now adding in each of the items in the array
const f1 = () => 1;
const f2 = () => 2;
const f3 = () => 3;
console.log(a() + 1 === b()); // ?
// B = [f1, f2, f3]
// let [a, b] = B // a = f1()
// a() = 1
// b() = 2

//Destructuring Object
let color = "red";
let width = 200;
let height = 300;
// or  onClick = width =>console.log(width); // ? 
let props = { color, width, height }; // shorthand for let props = {color:color, width:width, height:height}
// shorthand for props = {color:color, widht: width, height:height}
const onClick = ({ width }) => {
  console.log(width);
};
onClick(props); // this will pull out width from props
// const onMove = ({props})=>{console.log(`${props.color, props.width, props.height})}
// const onMove = ({color})=>{console.log(`color is ${color})}
// onMove(props) // will just pick out color