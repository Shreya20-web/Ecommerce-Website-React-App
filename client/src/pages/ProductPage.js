import React, { useEffect, useState } from 'react'
import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import {mobile} from '../Responsive'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethod'
import {useDispatch} from "react-redux"
import { addProduct } from '../redux/cartRedux'

const Container = styled.div``

const Wrapper = styled.div`
padding: 50px;
display: flex;

${mobile({ padding: "10px", flexDirection:"column" })}
`

const ImgContainer = styled.div`
flex:1;
`

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;

${mobile({ height: "40vh" })}
`

const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;

${mobile({ padding: "10px" })}
`

const Title = styled.h1`
font-weight: 300;
`

const Desc = styled.p`
margin: 20px 0px;
`

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`

const FilterContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
margin: 30px 0px;

${mobile({ width: "100%" })}
`

const Filter = styled.div`
display: flex;
align-items: center;
`

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
border: 1px solid black;
`

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;

${mobile({ width: "100%" })}
`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
border: 1px solid black;
border-radius: 10px;
padding: 5px;
`

const Amount = styled.span`
width: 30px;
height: 30px;
/* border-radius: 10px; */
/* border: 1px solid teal; */
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`

const Button = styled.button`
padding: 15px;
border: 2px solid black;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #f8f4f4;
}
`

const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {

    const getProduct = (async () => {
      try{

        const res = await publicRequest.get("/products/find/"+id);
        setProduct(res.data);
      }catch(err){}
    })
    getProduct();
  },[id])

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
        <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
            </Desc>
            <Price>$ {product.price}</Price>

            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    {product.color?.map((c) => (

                      <FilterColor color={c} key={c} onClick={()=>setColor(c)} />
                    ))}
                    
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize onChange={(e)=>setSize(e.target.value)}>

                    {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove 
                    style={{cursor: 'pointer'}} 
                    onClick={()=>handleQuantity("dec")} />
                    <Amount>{quantity}</Amount>
                    <Add 
                    style={{cursor: 'pointer'}} 
                    onClick={()=>handleQuantity("inc")} />
                </AmountContainer>
                <Button onClick={handleClick}>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductPage
// "https://i.ibb.co/S6qMxwr/jean.jpg"
