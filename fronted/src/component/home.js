import { useEffect, useState } from "react";
import React from "react";
import FilterPage from './filter'


const Home = () => {
  const [book_data, setbook_data] = useState([])


  const apiCall = async () => {
    const res = await fetch('/api/getall_books');
    const result = await res.json()
    setbook_data(result.data)

  }

  useEffect(() => {
    apiCall()
  }, [])

  const updateData = (data) => {
    console.log("kkkk", data)
    setbook_data(data)
  }

  return (
    <>
      <div className="home">
        <h1>welcomes users to the bookstore. </h1>
      </div>

      {console.log("book_data", book_data)}
      <FilterPage data1={book_data} data={updateData} />

    </>
  );
}

export default Home;



