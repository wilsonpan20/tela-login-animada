import React,{useState,useEffect} from "react";
import {
  Container,
  ContainerLogin,
  StyledInput,
  StyledAvatar,
  ContainerButton,
  StyledButton,
  StyledLink,
  ContainerImage,
  StyledImage,
  StyledTitle,} from './styles';
import Avatar from '../../assets/avatar.png'
import SignInImage from '../../assets/signin.png'


 function Dashboard(props){
    const [animation,setAnimation]= useState(false)

    const goToDashboard = ()=>{
        setAnimation(true)
        setTimeout(()=>{
            props.history.push('/dashboard')

        },1500)
    }
    
    return(
    <Container>
        <ContainerLogin>
     <StyledAvatar animate={animation} src={Avatar}alt="avatar"/>
      <StyledInput type="email" placeholder="E-mail"/>
      <StyledInput type="password" placeholder="password"/>
      <ContainerButton>
       <StyledButton onClick={goToDashboard}>Login</StyledButton>
       <StyledButton>Cancel</StyledButton>
      </ContainerButton>
      <StyledLink to="/sign-up">Não tem conta? Clique aqui!</StyledLink>
        </ContainerLogin>
        <ContainerImage>
            <StyledImage src={SignInImage}/>
            <StyledTitle>Login</StyledTitle>
        </ContainerImage>
       
    </Container>

    )
} 


export default Dashboard;