import React, {useState}from 'react'
import Card from './Card'
import { useGetProductsQuery } from "../../Redux/productsApi";
import Styles from './Feature.module.css'
import { Link } from 'react-router-dom';



function Feature() {

  const { data, error, isLoading } = useGetProductsQuery();
  const [visibleCount, setVisibleCount] = useState(10);

  if (isLoading) {
    return <div><div id='loader'>
      Loading...</div></div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  const displayedItems = data.products.slice(0, visibleCount).map((item) => (<Link to= '/productdetails'>
    <Card
      key={item.id}
      imageUrl={item.thumbnail}
      title={item.title}
      category={item.category}
      price={item.price}
      discountPercentage={item.discountPercentage}
    />
    </Link>
  ));

  return (
    
       
          
            <div> 
              <h4 className={Styles.Feat_txt1}>Featured Products</h4>    
              <h3 className={Styles.Feat_txt2}>BESTSELLER PRODUCTS</h3>  
              <p className={Styles.Feat_txt3}>Problems trying to resolve the conflict between </p>            
              <div className={Styles.feature_card_container}>
                   {displayedItems}
              </div>

              {
                visibleCount < data.products.length && (
                  <button onClick={handleLoadMore} className={Styles.load}>
                    LOAD MORE PRODUCTS
                  </button>
                )
              }       
            </div>   
          
       
             
    

  )
}

export default Feature