import React from 'react'
import './ProductDisplay.css'
const ProductDisplay = (props) => {
    const {product}=props;
  return (
    <div className='productDisplay'>
    <div className="productDisplay-left">
<div className="product-img-list">
    <img src={product.image} alt="" />
     <img src={product.image} alt="" />
      <img src={product.image} alt="" />
       <img src={product.image} alt="" />
</div>
    </div>
    <div className="productDisplay-right">
<img src={product.image} alt=
    </div>
    </div>
  )
}

export default ProductDisplay