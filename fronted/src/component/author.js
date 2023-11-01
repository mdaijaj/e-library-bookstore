import { useEffect, useState } from 'react';
import '../App.css'
import Loader from './loader'
import { useNavigate } from 'react-router-dom';


const Authors = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [author_data, setAuthor_data] = useState([])

    const apiCall = async () => {
        const res = await fetch('/api/allUsers');
        const result = await res.json()
        setAuthor_data(result.data)
    }

    const authorDetails = (id) => {
        console.log("aijaj", id)
        navigate(`/author_details/${id}`)
    }



    useEffect(() => {
        apiCall();
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [])


    return (
        <>
            {console.log("author_data", author_data)}
            <div class="container">
                <div>
                    {isLoading ? <Loader /> : <div>Your content here</div>}
                </div>

                <div class="row">
                    {author_data?.map((menu, index) => (
                        <div class="col-md-4" style={{ padding: "25px" }}>
                            <div class="card">
                                <div class="card-block">
                                    <h4 class="card-title">{`${menu.first_name} ${menu.last_name}`}</h4>
                                    <p class="card-text">{`Email: ${menu.email}`}</p>
                                    <p class="card-text">{`mobile: ${menu.mobile}`}</p>
                                    <button className="btn btn-primary" onClick={() => authorDetails(menu._id)}>BookStore</button>

                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
};

export default Authors;