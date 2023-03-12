import React from 'react';
import { BsFillMouseFill } from 'react-icons/bs';
import './Home.css';
import Product from './Product.js';

const product = {
    name:'Tarot Egipcio Iluminarte',
    image:[{ url:'https://velassahumeriosymas.com.ar/wp-content/uploads/2021/02/TAROT-EGIPCIO.jpeg' }],
    price:'$ 1.860',
    _id:'Cartas',
};

const Home = () => {
    return (
        <>
            <div className='banner'>
                <p>Bienvenidos a nuestra tienda virtual</p>
                <h1>Despertar del Buho</h1>
                <a href='#container'>
                    <button type="button" class="btn btn-success btn-lg">Scrol <BsFillMouseFill />
                    </button>
                </a>
            </div>

            <h2 className='homeHeading'>Productos destacados</h2>

            <div className='container' id='container'>
                <Product product={product} />
            </div>
        </>
    );
};

export default Home;