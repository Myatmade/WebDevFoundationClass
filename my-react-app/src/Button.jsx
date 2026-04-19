import viteLogo from "./assets/vite.svg";

function Button({ src, text, link, isImg = true, svg }) {
  console.log(src, text, link);
  return (
    <a href={link} target="_blank">
      {isImg ? <img className="logo" src={src} alt="" /> : svg}
      {text}
    </a>
  );
}

export default Button;

// object destructing
// let person ={
//     name: "Erika",
//     age: 30,
// };

// let {name, age} = person;
// console.log(name);

// ternary operator
// condtion ? true : false
