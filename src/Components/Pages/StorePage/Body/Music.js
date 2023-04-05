import { Button } from 'react-bootstrap';
import Format from './Format';
import './Music.css';


const productsArr = [

    {

        title: 'Colors',
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        price: 100,
        id: 1,

    },

    {

        title: 'Black and white Colors',
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        price: 50,
        id: 11,

    },

    {

        title: 'Yellow and Black Colors',
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        price: 70,
        id: 111,

    },

    {

        title: 'Blue Color',
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        price: 100,
        id: 1111,

    }

]

const Music = () => {
    const MusicItem = productsArr.map((item) => (<Format title={item.title} imageUrl={item.imageUrl} price={item.price} id={item.id} key={item.id}/>));
    return (
        <>
            <div className='container mt-4'>
                <div className='row d-flex justify-content-center align-items-center'>
                    
                        {MusicItem}
                    
                </div>
                <Button className='ButtonToCart' variant="primary">See the cart</Button>{' '}
            </div>



        </>
    )

}

export default Music;
