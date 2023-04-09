import { useParams } from "react-router-dom";
import { productsArr } from "./Body/Music"; // named import
import "./ProductSpecificPage.css";
import ContainerTop from "./ContainerTop";
import { Badge } from "react-bootstrap";

const ProductSpecificPage = (props) => {
  let { selectedItemId } = useParams(); //return produt id converted into object by using destructuring we get it in id
  //variable use to destructure should be same as use in Route ,specified after :
  console.log(selectedItemId);
  console.log(productsArr);

  let productDetail = productsArr.find(
    (product) => product.id == selectedItemId
  );
  
  console.log(productDetail.title);

  return (
    <>
      <ContainerTop />
      <div className="individualproduct">
        <h1>Review:</h1>
        <h2 className="title">{productDetail.title}</h2>
        <img
          src={productDetail.imageUrl}
          className="cart-img"
          alt="ProductImg"
        />
        <div className="description">
        <div>${productDetail.price}</div>
        <div className="review">Quality:<Badge bg="success">
        5 STAR
      </Badge>{' '}</div>
      </div>
      </div>
    </>
  );
};

export default ProductSpecificPage;
