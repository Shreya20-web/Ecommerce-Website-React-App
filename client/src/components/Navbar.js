import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive'
import {useSelector} from "react-redux"

// const Container = styled.div`
// height: 80px;
// `

// const Wrapper = styled.div`
// padding-top:10px;
// padding-left:20px;
// padding-right:20px;
// justify-content: space-between;
// display:flex;
// align-items: center;
// `

// const Left = styled.div`
// flex:1;
// display: flex;
// align-items: center;
// padding-bottom: 40px;
// `
// const Language = styled.span`
// font-size:14px;
// cursor: pointer;
// `

// const SearchContainer = styled.div`
// border: 0.5px solid lightgray;
// display: flex;
// align-items: center;
// margin-left: 25px;
// padding: 5px;
// `

// const Input = styled.input`
// border: none;
// `

// const Center = styled.div`
// flex:1;
// text-align: center;
// padding-bottom: 40px;
// `

// const Logo = styled.h1`
// font-weight: bold;
// font-size: 40px;
// `
// const Right = styled.div`
// flex:1;
// display: flex;
// align-items: center;
// justify-content: flex-end;
// padding-bottom: 40px;
// `

// const MenuItem = styled.div`
// font-size: 14px;
// cursor: pointer;
// margin-left: 25px;
// `

const Container = styled.div`
  height: 70px;
  font-weight: bold;

  ${mobile({height:'50px', marginBottom: '20px'})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

// const Input = styled.input`
//   border: none;

//   ${mobile({ width: "50px" })};
// `;

const Center = styled.div`
  flex: 1;
  text-align: center;
  text-decoration: none;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: black;

  ${mobile({ fontSize: "24px", marginLeft: '40px'})};
`;

const Right = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.li`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color: black;
  list-style: none;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <input 
            className='input' 
            type='text' 
            placeholder='Search'/>
            <Search style={{color:'gray', fontSize:16}} />
          </SearchContainer>
        </Left>
        <Center>
          <NavLink to='/'>
          <Logo>ZARA</Logo>
          </NavLink>
        </Center>
        <Right>
          <NavLink to='/register'>
          <MenuItem>REGISTER</MenuItem>
          </NavLink>
          <NavLink to='/login'>
          <MenuItem>SIGN IN</MenuItem>
          </NavLink>
          <MenuItem>
          <Link to='/cart'>
          <Badge badgeContent={quantity} color="primary" overlap="rectangular">
              <ShoppingCartOutlined style={{color: 'black'}} />
            </Badge>
          </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
