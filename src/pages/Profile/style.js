import styled from 'styled-components'

export const Container = styled.div`
width:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



>header{
  width: 100%;
  height: 144px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  align-items: center;
  padding: 0 124px;

  svg{
    color:${({ theme }) => theme.COLORS.GRAY_100};
    font-size:24px;
  }


}
`;
export const Form = styled.form`
max-width:340px;
margin:30px  auto 0;

>div:nth-child(3){
  margin-top: 24px;
}
`;

export const Avatar = styled.div`
position: relative;
margin:-124px   auto 32px;

>img{
width:186px;
height: 186px;
border:4px solid ${({theme})=>theme.COLORS.ORANGE};
border-radius:50%;
};
>label{
  width:48px;
  height: 48px;
  background-color: ${({theme})=>theme.COLORS.ORANGE};
  border-radius:50%;
  display:flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 7px;
  right: 7px;
 transition:500ms;
  cursor: pointer;
  &:hover{
  transform: rotate(45deg);
  
}
  input{
    display: none;
  };
  svg{
    width: 20px;
    height:20px;
    color:${({theme})=>theme.COLORS.BACKGROUND_800}
  }
};

`;