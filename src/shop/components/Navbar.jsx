import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import React from 'react';

const Container = styled.div`
`

const Wrapper = styled.div`
  height:60px;
  padding:10px 20px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  ${mobile({ padding: "10px 0px" ,height: "50px"})}
`

const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center;
`

const Center = styled.div`
  flex:1;
  text-align:center;
`

const Right = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  ${mobile({ padding: "0 20px 0 0"})}
`

const Language = styled.span`
  font-size: 14px;
  cursor:pointer;
  ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({ width: "60px" })}
`

const Logo = styled.h1`
  font-weight: bold;
  font-size: 36px;
  ${mobile({ fontSize: "24px" })}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const UserInfo = styled.span`
  ${mobile({ display: 'none'})}
`

const UserInfoMobile = styled.span`
  height: 30px;
  width: 30px;
  font-weight: bold;
  border-radius: 50%;
  margin-right:10px;
  display: none;
  background-color: #fcf5f5;
  ${mobile({ 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  })}
`



const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity)
  const username = useSelector(state => state.user.currentUser?.username)

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <Search style={{color:"gray", fontSize:16}}></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Link to='/'>
            <Logo>
                VKTR.
            </Logo>
          </Link>
        </Center> 
        <Right>
          {!username ?
            <>
              <Link to = '/register'>
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to = '/login'>
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
            :
            <>
              <UserInfo>Hello, {username}</UserInfo>
              <UserInfoMobile>{username[0].toUpperCase()}</UserInfoMobile>
              <Link to = '/cart'>
                <MenuItem>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </MenuItem>
              </Link>
            </>
          }
        </Right>

      </Wrapper>
    </Container>
  )
}

export default Navbar