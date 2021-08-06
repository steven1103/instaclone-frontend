import styled from "styled-components";
import { BaseBox } from "../shared";

const TopBox = styled(BaseBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px 40px 25px 40px;
  margin-bottom: 10px;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
  }
`;

function FormBox({ children }) {
    return <TopBox>{children}</TopBox>
}

export default FormBox;