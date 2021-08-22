const App = () => {
    // let product = { name: 'pear', cost: 2, inStock: 7 };
    // let {name, inStock} = product;
    // let item = {name, inStock}
    
    // const handler = () => alert(`name: ${item.name} instock: ${item.inStock}`);

    const handler = () => alert(`hello world`);
    //
    let a = [1,2,3,4];
    const handler = index => alert(`button: ${e.target.getAttributeNames('button: ${index}')}`);
    let list = a.map((item, index) => {
        return <MyButton index = {index} key={index} onClick={handler(index)}>Click Me</MyButton>;
    });
    return <>{list}</>;
};

const MyButton = ({ onClick }) => {
    let {Button} = ReactBootStrap;
    return <Button onClick={props.onClick}>Click Me</Button>;
};

props.onClick

// ================
ReactDom.render(<App />, document.getElementById('root'));