import { useEffect, useState } from "react";
import React from "react";
import Books from "./books";

const FilterPage = ({ data, data1 }) => {

  const [filterdata, setFilterdata] = useState([...data1]);
  const [author, setAuthor] = useState([])
  const [inputData, setInputData] = useState(null)

  console.log("initial", filterdata)

  let name, value;
  const handleInput = (e) => {
    name = e.target.name
    value = e.target.value
    setInputData({ ...inputData, [name]: value })  //[] dynamic data for
  }

  const apiCall = async () => {
    const res = await fetch('/api/allUsers');
    const result = await res.json()
    setAuthor(result.data)
  }

  const searchApi = () => {
    const result = data1.filter((item) =>
      (item.genre == inputData.genre) ||
      (item.authorId == inputData.author)
    );
    console.log("result", inputData)
    setFilterdata(result)
  }

  useEffect(() => {
    apiCall()
    setFilterdata(data1)
  }, [data1])

  return (
    <>
      <div className="mb-2 row" style={{ backgroundColor: "gray", padding: "10px" }}>
        <div className="col-sm-2">
          <label> Select Genre</label>
          <select className="form-select" id="genre" onChange={handleInput} name="genre" aria-label="select example">
            <option selected>Genre</option>
            <option value="fiction">Fiction</option>
            <option value="nonfiction">Nonfiction</option>
            <option value="literature">Literature</option>
            <option value="horror">Horror</option>
            <option value="narative">Narative</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
          </select>
        </div>

        <div className="col-sm-2">
          <label> Author List </label>
          <select className="form-select" id="author" onChange={handleInput} name="author" aria-label="select example">
            <option value="">Select an author</option>
            {author.map((option) => (
              <option key={option._id} value={option._id}>
                {`${option.first_name} ${option.last_name}`}
              </option>
            ))}
          </select>
        </div>

        <div className="col-sm-2">
          <button onClick={searchApi}>
            Apply
          </button>
        </div>
      </div>
      {console.log("filterdata", filterdata)}
      {filterdata.length ? (<Books data={filterdata} homedata={data1} />)
        : "No Data Found"
      }
    </>
  );
}

export default FilterPage;



