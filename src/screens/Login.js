import {
  faFacebook,
  faFacebookF,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WhiteBox = styled.div`
  background-color: ffffff;
  width: 100%;
`;

const TopBox = styled(WhiteBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  border-radius:30px;
  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    input {
      width: 100%;
      border-radius: 5px;
      padding: 7px;
      background-color: white;
      border: 2px solid #2237f4;
      margin-top: 15px;
      height:40px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      &::placeholder {
        font-size: 16px;
        color:#2237f4;
        padding:5px;

      }
      &:last-child {
        border: none;
        margin-top: 12px;
        background-color:#2237f4;
        color: white;
        text-align: center;
        padding: 8px 
        font-weight: 600;
      }
    }
  }
`;

const BottomBox = styled(WhiteBox)`
  padding: 20px 0px;
  text-align: center;
  outline:none;
  a {
    font-weight: 600;
    color: #2237f4;
  }
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
  border-radius:30px;
  background-color:white;
  `;

const Separator = styled.div`
  margin: 20px 0px 30px 0px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  div {
    width: 100%;
    height: 1px;
    background-color: white;
  }
  span {
    margin: 0px 10px;
    font-weight: 600;
    color: #8e8e8e;
  }
`;

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const TextWrapperBig = styled.div`
    color: #2237f4;
    font-weight: 400;
    font-size: 100px;
    width:100%;
    margin-top:20px;
    font-family: Righteous, cursive;
    margin-bottom:5px;
    max-width:350px;
    text-align:center;
`

const TextWrapperSmall = styled.div`
    color:black;
    font-weight: 300;
    font-size: 30px;
    width:100%;
    font-family: roboto;
    margin-bottom:30px;
    max-width:350px;
`
function Login() {
  return (
    <Container>
        <TextWrapperBig>
          LOGIN
        </TextWrapperBig>
      <Wrapper>
        <TopBox>
          <form>
            <input type="text" placeholder="email"  />
            <input type="password" placeholder="password" />
            <input type="submit" />
          </form>
          <Separator>
            <div></div>
            <span>Or</span>
            <div></div>
          </Separator>
          <FacebookLogin>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>페이스북으로 로그인</span>
          </FacebookLogin>
        </TopBox>
      </Wrapper>
        <BottomBox>
          <span>계정이 없으신가요?</span> <a href="#">회원가입</a>
        </BottomBox>
    </Container>
  );
}
export default Login;
