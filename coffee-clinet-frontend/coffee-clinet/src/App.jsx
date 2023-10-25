
import './App.css'
import { useLoaderData } from "react-router-dom";
import CoffeeCard from './components/CoffeeCard';
function App() {

const coffees = useLoaderData();
console.log(coffees);

  return (
    <div className="m-5">
      <h2 className="text-center my-5 text-3xl">All Coffees</h2>
      <div className='grid md:grid-cols-2 gap-5 '>
        {coffees.map((coffee) => (
          <CoffeeCard coffee={coffee} key={coffee._id}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App
