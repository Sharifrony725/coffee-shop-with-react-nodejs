
const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const details = form.details.value;
        const category = form.category.value;
        const photo = form.photo.value;

        const newCoffee = {name, chef, supplier, details, category, photo};

        // send data to the server
        fetch('http://localhost:5000/coffee', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(newCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              alert("Coffee Added Successfully");
              form.reset();
            }
          });
    }
    return (
      <div className="bg-[#F4F3F0] w-1/2 mx-auto p-5">
        <h2 className="text-5xl font-bold my-7 text-center">Add New Coffee</h2>
        <form onSubmit={handleAddCoffee}>
          <div className="form-control w-1/2 mx-auto">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-1/2 mx-auto">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
              placeholder="Enter coffee Chef"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-1/2 mx-auto">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee Supplier"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-1/2 mx-auto">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee Details"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-1/2 mx-auto">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee Category"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-1/2 mx-auto">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter coffee Photo URL"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-1/2 mx-auto">
            <button className="btn btn-primary my-5">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    );
};

export default AddCoffee;