import { gql, useMutation } from "@apollo/client";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import PageTitle from "../components/PageTitle";
import { FatLink } from "../components/shared";
import Routes from "../routes";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled(FatLink)`
  font-size: 9px;
  margin-top: 10px;
  text-align: center;
`;

function SignUp() {
  const history = useHistory();

  const CREATE_ACCOUNT_MUTATION = gql`
    mutation createAccount(
      $firstName: String!
      $lastName: String
      $username: String!
      $email: String!
      $password: String!
    ) {
      createAccount(
        firstName: $firstName
        lastName: $lastName
        username: $username
        email: $email
        password: $password
      ) {
        ok
        error
      }
    }
  `;

  const onCompleted = (data) => {
    const { username, password } = getValues();
    const {
      createAccount: { ok },
    } = data;
    if (!ok) {
      return;
    }
    history.push(Routes.home, {
      message: "Account created. Please log in.",
      username,
      password,
    });
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const { register, handleSubmit, formState, getValues } = useForm({
    mode: "onChange",
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: {
        firstName: data.firstname,
        lastname: data.lastname,
        username: data.username,
        password: data.password,
        email: data.email,
      },
    });
  };
  return (
    <AuthLayout>
      <PageTitle title="Sign up" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <Subtitle>
            Sign up to see photos and videos from your friends.
          </Subtitle>
        </HeaderContainer>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register("firstname", {
              required: "First Name is required.",
            })}
            type="text"
            placeholder="First Name"
          />
          <Input
            {...register("lastname")}
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          <Input
            {...register("email", {
              required: "Email is required.",
            })}
            name="email"
            type="text"
            placeholder="Email"
          />
          <Input
            {...register("username", {
              required: "Username is required.",
            })}
            name="username"
            type="text"
            placeholder="Username"
          />
          <Input
            {...register("password", {
              required: "Password is required.",
            })}
            name="password"
            type="password"
            placeholder="Password"
          />
          <Button
            type="submit"
            value={loading ? "Loading..." : "Sign up"}
            disabled={!formState.isValid || loading}
          />
        </form>
      </FormBox>
      <BottomBox cta="Have an account?" linkText="Log in" link={Routes.home} />
    </AuthLayout>
  );
}
export default SignUp;
