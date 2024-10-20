import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductHd from '../Components/ProductHd';
import ProductDisplay from '../Components/ProductDisplay';
import ProductDesc from '../Components/ProductDesc';
import Cart from './Cart';

const Product = () => {
  const {all_products}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_products.find((e)=>e.id==Number(productId));
  if (!product) {
    return <div className="text-center">Product not found.</div>;
  }
  return (
   <section className='max_padd_container py-28'>
    <div>
     <ProductHd product={product}/> 
     <ProductDisplay product={product}/>
     <ProductDesc/>
     
    </div>
   </section>
  )
}

export default Product