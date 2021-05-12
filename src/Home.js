import {useState} from 'react';

const Home = () => {
    const [count, setCount] = useState(0)
    return ( 
        <div className="home">
            <h2>Homepage {count}</h2>
            <button onClick={_ => setCount(count + 1)}>click me</button>
        </div>
     );
}
 
export default Home;