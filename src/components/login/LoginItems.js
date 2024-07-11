import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";

function LoginItems() {
  const navigate = useNavigate();

  const handleLogin = () => {
    const inputValue = document.querySelector('#inputArea').value;
    if (inputValue.trim() === '') {
      alert('ID를 입력해주세요.');
    } else {
      // 로그인 기록 저장 로직 추가
      console.log('로그인 기록이 저장되었습니다.');
      navigate('/addmemo'); // 로그인 성공 시 홈페이지로 이동
    }
  };

  return (
    <>
      <LoginBox>
        <InputBox>
          <p>ID</p>
          <InputArea id="inputArea" type="text" placeholder="아이디를 입력해주세요" />
        </InputBox>
        <ButtonBox>
          <LoginButton onClick={handleLogin}>Login</LoginButton>
        </ButtonBox>
        <LinkBox>
          <GoToSignupLink to="/join">
            <BiSolidRightArrow />
            Go to Signup
          </GoToSignupLink>
        </LinkBox>
      </LoginBox>
    </>
  );
}

export default LoginItems;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-top: 5rem;
  p {
    font-weight: 900;
    font-size: 35px;
  }
`;

const InputArea = styled.input`
  padding: 8px 12px;
  background-color: #ededed;
  border: #ededed;
  border-radius: 30px;
  font-size: 16px;
  width: 400px;
  height: 65px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`;

const LoginButton = styled.button`
  padding: 8px 16px;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 35px;
  font-weight: 700;
  cursor: pointer;
  width: 350px;
  height: 65px;
  &:hover {
    background-color: #0056b3;
  }
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8rem;
  text-align: center;
`;

const GoToSignupLink = styled(Link)`
  color: black;
  font-size: 35px;
  font-weight: 700;
`;
