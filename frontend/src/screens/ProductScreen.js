import './ProductScreen.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'

function ProductScreen({ match, history }) {

    const [qty, setQty] = useState(1)
    const dispatch = useDispatch();

    const getDetails = useSelector(state => state.getProductDetails)


    const { product, loading, error } = getDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id))
        }

    }, [dispatch, product, match])

    console.log(product)

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty))
        history.push('/cart')
    }

    return (

        <div className="productscreen">

            <div className="productscreen__left">
                <div className="left__image">
                    <img src={product ? product.imageUrl : null} alt="asd" />
                </div>
                <div className="left__info">
                    <p className="left__name">{product ? product.name : null}</p>
                    <p className="left__price">${product ? product.price : null}</p>
                    <p className="left__description">{product ? product.description : null}</p>
                </div>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>Price: <span>${product ? product.price : null}</span>   </p>
                    <p>Status: {product && product.countInStock > 0 ? <span>In Stock</span> : <span>Out of Stock</span>}</p>
                    <p>
                        Qty
                        <select value={qty} onChange={(e) => setQty(e.target.value)}>
                            {[...Array(product ? product.countInStock : 0).keys()].map(item => <option value={item + 1} key={item}>{item + 1}</option>)}
                        </select>
                    </p>

                    <p> <button type="button" onClick={addToCartHandler}>Add To Cart</button></p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
