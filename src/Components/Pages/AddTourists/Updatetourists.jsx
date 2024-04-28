const Updatetourists = () => {
  return (
    <div>
      <div>
        <div className=" bg-slate-200 rounded-xl w-4/5 mx-auto mt-5 p-5 ">
          <h2 className="text-xl md:text-3xl my-3 text-center border-b-2 pb-3 border-rose-500">
            Update Tourists spot
          </h2>

          <form className=" space-y-3">
            <div>
              <p className=" text-xl font-semibold">
                {" "}
                Tourists spot photo url :
              </p>
              <input
                className=" input input-bordered w-full"
                type="text"
                name="img"
                placeholder="https://i.ibb.co/qmygyvy/a10logo.png"
                id=""
              />
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className=" text-xl font-semibold"> Tourists spot name :</p>
                <input
                  className=" input input-bordered w-full"
                  type="text"
                  name="spotName"
                  placeholder="Enter tourists spot name"
                  id=""
                />
              </div>
              <div>
                <p className=" text-xl font-semibold"> Country Name :</p>
                <select
                  className="input input-bordered w-full"
                  id="season"
                  name="country"
                >
                  <option value="">Select countey</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Cambodia">Cambodia</option>
                </select>
              </div>
              <div>
                <p className=" text-xl font-semibold"> Location :</p>
                <input
                  className=" input input-bordered w-full"
                  type="text"
                  name="location"
                  placeholder="Enter location"
                  id=""
                />
              </div>
              <div>
                <p className=" text-xl font-semibold">Description :</p>
                <input
                  className=" input input-bordered w-full"
                  type="text"
                  name="desc"
                  placeholder="short description"
                  id=""
                />
              </div>
              <div>
                <p className=" text-xl font-semibold">Average cost :</p>
                <input
                  className=" input input-bordered w-full"
                  type="number"
                  name="cost"
                  placeholder="average cost like-2000"
                  id=""
                />
              </div>
              <div>
                <p className=" text-xl font-semibold"> seasonality :</p>
                <select
                  className="input input-bordered w-full"
                  id="season"
                  name="season"
                >
                  <option value="summer">Summer</option>
                  <option value="autumn">Autumn</option>
                  <option value="winter">Winter</option>
                  <option value="spring">Spring</option>
                </select>
              </div>
              <div>
                <p className=" text-xl font-semibold"> Travel time:</p>
                <select
                  className="input input-bordered w-full"
                  id="season"
                  name="season"
                >
                  <option value="summer"> 7 days</option>
                  <option value="autumn">15 days</option>
                  <option value="winter"> 20 days</option>
                  <option value="spring">1 month</option>
                </select>
              </div>

              <div>
                <p className=" text-xl font-semibold">
                  Tota Visitors Per Year :
                </p>
                <input
                  className=" input input-bordered w-full"
                  type="number"
                  name="peryear"
                  placeholder="Tota Visitors Per Year like-1000"
                  id=""
                />
              </div>
              <div>
                <p className=" text-xl font-semibold">User Email :</p>
                <input
                  className=" input input-bordered w-full"
                  type="text"
                  name="email"
                  placeholder="enter user email"
                  id=""
                />
              </div>
              <div>
                <p className=" text-xl font-semibold">User Name :</p>
                <input
                  className=" input input-bordered w-full"
                  type="text"
                  name="name"
                  placeholder="enter user name"
                  id=""
                />
              </div>
            </div>
            <input
              className=" btn btn-outline btn-success w-full"
              type="submit"
              value="Add"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updatetourists;
