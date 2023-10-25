
import { useLoaderData } from 'react-router-dom';
const UpdateCoffee = () => {

    const coffee = useLoaderData();
    
    console.log(coffee);
    return (
        <div>
            <h2>Update Coffee</h2>
        </div>
    );
};

export default UpdateCoffee;