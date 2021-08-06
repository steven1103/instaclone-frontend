import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseBox } from "../shared";

const StyledBottomBox = styled(BaseBox)`
  padding: 20px 0px;
  text-align: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 25px;
  a {
    font-weight: 600;
    margin-left: 5px;
    color: ${(props) => props.theme.accent};
  }
`;

function BottomBox({ cta, link, linkText }) {
  return (
    <StyledBottomBox>
      <span>{cta}</span>
      <Link to={link}>{linkText}</Link>
    </StyledBottomBox>
  );
}

export default BottomBox;
