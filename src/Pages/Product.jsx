import React from 'react'
import Breadcrums from '../Components/Breadcrums/Breadcrums';

const Product = () => {
  const {all_product}= useContext(ShopContext);
  const [productId]=useParams();
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product