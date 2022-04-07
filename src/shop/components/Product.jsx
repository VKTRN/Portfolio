import React         from 'react';
import styled        from "styled-components";
import {addProduct } from "../redux/cartRedux";
import {useDispatch} from 'react-redux'
import {Add} from "@material-ui/icons";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: flex-end;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`

const InfoContent = styled.div`
  display: flex;
  align-items: center;
  text-align: end;
  justify-content: space-between;
  overflow:hidden;
  flex:1;
  padding: 0 1rem;
`

const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: end;
`

const TextContainer = styled.div`
   flex-grow: 1;
   overflow: hidden;
`

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  margin-top: 1rem;
  max-width:80%;
  max-height:80%;
  z-index: 2;
`;

const Icon = styled.div`
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  border-radius: 50%;
  background-color: rgba(0,0,0,.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgba(0,0,0,.4);
    transform: scale(1.1);
  }
`

const Product = ({item}) => {

  const handleClick = (item) => {
    dispatch(addProduct({...item, quantity: 1}))
  }
  const dispatch = useDispatch()

  return (
    <Container>
      <Circle/>
      <Image src={item.image} />
      <Info href={`/product/${item.id}`}>
        <InfoContent>
          <Icon>
            <Add onClick = {() => {handleClick(item)}}/>
          </Icon>
          <TextContainer>
            <div>$ {item.price}</div>
            <Title>{item.title}</Title>
          </TextContainer>
        </InfoContent>
      </Info>
    </Container>
  )
}

export default Product