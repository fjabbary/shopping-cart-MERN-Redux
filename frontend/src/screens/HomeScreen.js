import Product from '../components/Product'
import './HomeScreen.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { getProducts as listProducts } from '../redux/actions/productActions'

function HomeScreen() {

    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts)
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())

    }, [dispatch])

    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Lastest Products</h2>
            <div className="homescreen__products">
                {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : products.map(item => <Product key={item._id} product={item} />)}
            </div>
        </div>
    )
}

export default HomeScreen
