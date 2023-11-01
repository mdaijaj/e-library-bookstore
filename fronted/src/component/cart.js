import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../App.css'



const Cart = () => {
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(null)
    const navigate = useNavigate();
    const [counter, setCount] = useState(1)
    const [totalAmount, setTotalamount]=useState(1)

    let deliverycharge = 50
    let taxAmount = 0
    let count = 0

    const getAllRest = async () => {
        const response = await axios.get('/api/cart_list');
        console.log("response4", response)
        setCart(response.data.data)
        let amount=0;
        let totalamount=response.data.data.map((item)=> amount+=item.price)
        console.log("totalamount", totalamount)
        setTotalamount(totalamount[totalamount.length-1])
        return response
    }



    const itemDetails = async (id) => {
        let statue = false
        console.log("aijaj", id)
        const response = await axios.put(`/api/removeToCart/${id}`, {
            cartStatus: statue,
        });
        console.log("response3", response)
        setCart([response.data.result])
        return response
    }

    const increament = (counter) => {
        setCount(counter + 1)
        setTotalamount(totalAmount* counter)

    }
    const decreament = (counter) => {
        setCount(counter - 1)
        setTotalamount(totalAmount* counter)

    }
    const gatewayPayment = () => {
        navigate('/payment')
    }
    const users = localStorage.setItem("itemscart", cart.length)

    useEffect(() => {
        getAllRest()
    }, [])

    return (
        <>
            <h2> cart list Item</h2>
            <div className="container">
                <ul className="row list-ul">
                    {loading ? "please wait data is loading" : ""}
                    {console.log("cart", cart)}
                    {
                        cart?.map((rest => {
                            {/* totalAmount=totalAmount+rest.price */}
                            { console.log("rest", rest) }
                            return (
                                <>
                                    {/* <div className="" style={{textDecoration: "none", border: "3px solid green"}}> */}
                                    <div className="col-8 li-list">
                                        <div className="row">
                                            <div className="col-6 d-flex justify-content-center">
                                                <img src="https://i.pinimg.com/474x/d2/b0/10/d2b01052124d637b98d00d0e595b8965.jpg"
                                                    width="40" height="30"
                                                    onClick={() => itemDetails(rest._id)} />
                                                <div className="card" style={{ width: "200px", borderRadius: "20px" }}>
                                                    <img className="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap" />
                                                </div>
                                            </div>
                                            <div className="col-6" style={{ textAlign: "left", color: "black" }}>
                                                <h3 className="card-title">{rest.description}</h3>
                                                <p className="card-text">{`ISBN: ${rest.ISBN}`}</p>
                                                <p className="card-text">{`price: ${rest.price}`}</p>
                                                <p className="card-text">
                                                    <button onClick={() => decreament(counter)}> - </button> {`Quantity: ${counter} `} <button onClick={() => increament(counter)}> + </button>
                                                </p>
                                                <p className="card-text">{`language: ${rest.language}`}</p>
                                                <p className="card-text">   {`publisher: ${rest.publisher}`}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }))
                    }
                </ul>
            </div>
            <div className="amount">
                <h1>Payment Information</h1>
                <div className="amount">
                    <h5>Total Item: {cart ? cart.length : ""} </h5>
                    <h5>Net Amount: {totalAmount} </h5>
                    <h5>Tax:  {totalAmount * 18 / 100}</h5>
                    <h5>Delivery Charge:  {deliverycharge} </h5>
                    <h5>Total Amount: {totalAmount + deliverycharge + totalAmount * 18 / 100} </h5><br />
                    <button className="btn btn-success" onClick={gatewayPayment}>Payment</button>
                </div>
            </div>
        </>
    );
};

export default Cart;