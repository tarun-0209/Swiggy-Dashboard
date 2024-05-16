import React from "react";
import ReactDOM from "react-dom/client";

//React Elements
// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Namaste React"
// );
// console.log(heading);

// //JSX=(HTML/XML like) -> Transpiled to HTML by Parcel's "Babel"/
// const jsxheading = <h1 id="heading">Namaste React using JSX</h1>;
// console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// //root.render(heading)
// root.render(jsxheading);


/*React Components(start with camptal letter)
1- class based components - OLD
2- functional components - NEW*/

//react functional component - js function which returns some piece of jsx code
const HeadingComponent1 = ()=> {
    return <h1 className="first">First react component</h1>
}

const HeadingComponent2 = () => <h1 className="second">second react component</h1>;

const HeadingComponent3 = () => (
    <h1 className="third">third react component</h1>
);

const num = 2903;
const title = [<h1>react element  {num+num}</h1>,<HeadingComponent1/>]

//component composition
const ABC = ()=>(
    <div id="container">
        <HeadingComponent1/>
        <HeadingComponent2/>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {num}
        <h2>{6+9}</h2>
        <h3>check console{console.log("we can run JS code inside a component by using {} brackets")}</h3>
        {title}

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <HeadingComponent3/>
        <HeadingComponent3></HeadingComponent3>
        {HeadingComponent3()}
        <h2>HELLO</h2>
    </div>
);

//rendering component
root.render(<ABC/>);

    











