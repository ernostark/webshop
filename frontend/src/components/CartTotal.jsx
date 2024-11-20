import React, { useContext } from 'react'
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {

  const {currency, delivery_fee, getCartAmount} = useContext(ShopContext);

  return (
    <div className='w-full '>

      <div className='text-2xl'>
        <Title text1={'KOSÁR'} text2={'ÖSSZESÍTÉS'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Részösszeg</p>
          <p>{getCartAmount()} {currency}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Szállítási költség</p>
          <p>{delivery_fee} {currency}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <b>Összesen</b>
          <b>{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee} {currency}</b>
        </div>
      </div>
      
    </div>
  )
}

export default CartTotal
