import { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('Someone');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ["Reku", "Oliver", "Beni"];
        const int = Math.floor(Math.random()* 3);
        setName(names[int]);
    }

    const handleClick = () => {
        setCount(count + 1);
        setCount(count + 1);
        console.log(count);
    }
    
    const handleClick2 = () => {
        console.log("Clicked it")
    }
    
    return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <button onClick={handleNameChange}> Change name! </button>
        <button onClick={handleClick}> Count click </button>
    </main>
)
}

export default Content