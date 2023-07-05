import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import profile1 from "../../image/profile1.png"


function SendCheck() {
    return (
        
        <Body>
            <Wrap>
            <div className="Title">
                <Phone>010-3302-1234</Phone>
                <Bal> 나의 잔액은: 3,000 BEANS </Bal>
            </div>
                <Alertbx>
                   <Profile><ProfileImg src={profile1} alt="redbean"/></Profile>
                   <div className="text">
                   <p>010-2222-1234님께</p>
                   <p className="price">1000</p>
                   <p>BEANS를 이체합니다.</p>
                   </div>
                </Alertbx>

            <Back>뒤로가기</Back>
      
            </Wrap>
        </Body>
    );
}

export default SendCheck;



const Body = styled.div`
background-color:#432C20;
text-align:center;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
/* overflow-y :hidden; */

`;

const Wrap =styled.div`


`;

const Phone = styled.div`
font-size:26px;
color:#F6F290;
/* padding-top:114px; */
text-align:center;

`;

const Addr =  styled(Phone)`
font-size:14px;
padding-top:10px;
padding-bottom:102px;
`;


const Bal = styled.div`
 padding:10px;
 color:#F6F290;
 font-weight:800px; 
 text-align:center;
 font-size:14px;
 margin-bottom:54px;

`;



const Alertbx =styled.div`
width:320px;
height:320px;
background-color:#F6F290;
margin:0 auto;
border-radius : 10px;
margin-bottom:90px;
padding:32px;

.qr{
    font-size:20px;
    font-weight:bold;
    padding-top:112px;
    margin-bottom:34px;
    
}

.al1{
  line-height:20px;
  color:#F06A24;
}

p{
    font-size:14px;
    margin:10px;
  
}

.price{
    font-size:20px;
    font-weight:800;
}

.text{
    margin-top:32px;
}
`;



const Profile = styled.div`
width:140px;
height:140px;
border-radius:100%;
border:2px solid #F06A24; 
text-align:center;
margin:0 auto;
padding-top:32px;
padding-bottom:38px;
position:relative;

`;

const ProfileImg = styled.img`
width:100px;
height:100px;
line-height:100px;
position:absolute;
top:20px; left:20px;
`;


const Back =styled.div`
width:110px;
height:46px;
border-radius:30px;
background-color:#F6F290;
border:0;
text-align:center;
margin:0 auto;
line-height:46px;
margin-top:10px;
color:#432C20;
font-size:14px;
font-weight:800;
/* margin-bottom:154px; */


`;