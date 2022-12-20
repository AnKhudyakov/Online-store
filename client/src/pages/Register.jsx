import styled from "styled-components";
import { mobile } from "../responsive";
import { useForm } from "react-hook-form";
import { userRequest } from "../requestMethods";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/bNjGCCz/mbair-m2.png") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  flex: 1;
  margin: 20px 10px 0px 0px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const MyLink = styled(Link)`
  flex: 1;
  text-align: center;
  margin: 20px 10px 0px 0px;
  width: 40%;
  padding: 15px 20px;
  color: white;
  text-decoration: none;
  background-color: teal;
`;

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const makeRequest = async (e) => {
    try {
      console.log(e);
      const res = await userRequest.post("auth/register", {
        username: e.username,
        email: e.email,
        password: e.password,
      });
      // history.push("/success", {
      //   stripeData: res.data,
      //   products: cart,
      // });
    } catch {}
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit(makeRequest)}>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input
            placeholder="username"
            {...register("username", {
              required: true,
            })}
          />
          {errors.username && errors.username.type == "required" && (
            <p>Please enter you username...</p>
          )}
          <Input
            placeholder="email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && errors.email.type == "required" && (
            <p>Please enter you email...</p>
          )}
          <Input
            placeholder="password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && errors.password.type == "required" && (
            <p>Please enter you email...</p>
          )}
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
          <MyLink to="/">BACK TO MAIN</MyLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
