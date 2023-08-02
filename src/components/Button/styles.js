import styled from 'styled-components'

export const Container = styled.button`
width:100%;
background-color: ${({theme}) => theme.COLORS.ORANGE};
color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
box-shadow: 2px -2px 0 0  rgba(0,0,0,0.5);
height: 56px;
border:0px;
padding:0 16px;
margin-top:16px;
border-radius:10px;
font-weight:500;
opacity: 0.8;
  transition: 1s;

&:hover{
  opacity: 1;
  transition: 1s;
}
&:disabled{
  opacity: 0.5;
}

`