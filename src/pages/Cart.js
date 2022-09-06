import React from 'react'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {mobile} from '../Responsive'

const Container = styled.div``

const Wrapper = styled.div`
padding: 20px;

${mobile({ padding: "10px" })}
`

const Title = styled.h1`
font-weight: 300;
text-align: center;
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === 'filled' && 'none'};
background-color: ${props=>props.type === 'filled' ? "black" : "transparent"};
color: ${props=>props.type === 'filled' && 'white'};
`

const TopTexts = styled.div`
${mobile({ display: "none" })}
`

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;

${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
flex: 3;
`

const Product = styled.div`
display: flex;
justify-content: space-between;

${mobile({ flexDirection: "column" })}
`
const ProductDetail = styled.div`
flex: 2;
display: flex;
`

const Image = styled.img`
width: 200px;
`

const Detail = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const ProductAmountCotainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`

const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;

${mobile({ margin: "5px 15px" })}
`

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;

${mobile({ marginBottom: "20px" })}
`

const Hr = styled.hr`
background-color: #eee;
height: 1px;
border: none;
`

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=> props.type==='total' && '500'};
font-size: ${props=> props.type==='total' && '24px'};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const SummaryButton = styled.button`
width: 100%;
background-color: black;
color: white;
font-weight: 600;
padding: 10px;
`


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Whishlist(0)</TopText>
            </TopTexts>
            <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                    <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                        <Detail>
                            <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                            <ProductId><b>ID:</b>93813718293</ProductId>
                            <ProductColor color='black' />
                            <ProductSize><b>Size:</b> 37.5</ProductSize>
                        </Detail>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountCotainer>
                            <Add style={{cursor: 'pointer'}} />
                            <ProductAmount>2</ProductAmount>
                            <Remove style={{cursor: 'pointer'}} />
                        </ProductAmountCotainer>
                        <ProductPrice>$ 30</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr />
                <Product>
                    <ProductDetail>
                    <Image src="data:image/jpeg;base64,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" />
                        <Detail>
                            <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                            <ProductId><b>ID:</b>93813718293</ProductId>
                            <ProductColor color='gray' />
                            <ProductSize><b>Size:</b> M</ProductSize>
                        </Detail>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountCotainer>
                            <Add style={{cursor: 'pointer'}} />
                            <ProductAmount>1</ProductAmount>
                            <Remove style={{cursor: 'pointer'}} />
                        </ProductAmountCotainer>
                        <ProductPrice>$ 20</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -5.00</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type='total'>
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>$ 80.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryButton>PLACE ORDER</SummaryButton>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
// 2:28:58 