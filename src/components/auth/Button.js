import styled from "styled-components";

const SButton = styled.input`
  border: none;
  margin-top: 12px;
  background-color: #ededed;
  color: black;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  width: 100%;
  border-radius: 5px;
  background: #ededed;
  opacity: ${(props) => (props.disabled ? "0.2" : "1")};
`;

function Button(props) {
  return <SButton {...props} />;
}

export default Button;
