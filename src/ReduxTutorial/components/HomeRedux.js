import React from 'react'
import './style.css';
const HomeRedux = (props) => {
    console.warn('props',props.cardData);
  return (
    <div>
        <div className='add-to-cart'>
           <span>{props.cardData.length}</span>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNfPNaVLi8TXavysWOun7J4C09lnfQztluo2WNpRvDA&s'/>
        </div>
        <div className='cart-wrapper'>
            <div className='img-wrapper item'>
                <img src='https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlc3xlbnwwfHwwfHx8MA%3D%3D'/>
            </div>
            <div className='text-wrapper item'>
            <span>
                I-phone</span>   
                <span>
                Price : $1000.00</span>   
            </div>
            <div className='btn-wrapper item'>
            <button onClick={()=>props.addToCartHandler(
                {
                    price:1000,
                    name:'i phone 14'
                }
            )}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default HomeRedux