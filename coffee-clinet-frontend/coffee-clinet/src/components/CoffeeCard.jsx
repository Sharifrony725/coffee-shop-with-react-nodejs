import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, supplier, details, category, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        })        
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="max-w-[300px] max-h-[300px]">
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <div>
            <h2>
              <span className="text-xl font-bold">Name: </span>
              {name}
            </h2>
            <h2>
              <span className="text-xl font-bold">Supplier: </span>
              {supplier}
            </h2>
            <h2>
              <span className="text-xl font-bold">Category: </span>
              {category}
            </h2>
            <h2>
              <span className="text-xl font-bold">Chef: </span>
              {chef}
            </h2>
            <h2>
              <span className="text-xl font-bold">Details: </span>
              {details}
            </h2>
          </div>
          <div className="flex mt-5">
            <button className="btn btn-primary btn-sm mx-2">View</button>
            <Link to={`updatecoffee/${_id}`}>
              <button className="btn btn-info btn-sm mx-2">Edit</button>
            </Link>
            <button
              className="btn btn-warning btn-sm"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
