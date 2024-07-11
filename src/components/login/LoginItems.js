import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { BsCaretRightFill } from "react-icons/bs";
import Join from "../../pages/join";

function LoginItems() {
    const navigate = useNavigate();
  
    const handleLogin = () => {
      const inputValue = document.querySelector('#inputArea').value;
      if (inputValue.trim() === '') {
        alert('ID를 입력해주세요.');
      } else {
        // 로그인 기록 저장
        localStorage.setItem('loginId', inputValue);
        console.log("localStorage에 저장된 내용:");
        console.log("id:", localStorage.getItem("id"));
        console.log('로그인 기록이 저장되었습니다.');
        navigate('/memo'); // 로그인 성공 시 홈페이지로 이동
      }
    };
  
    const handleGotoJoin = () => {
      navigate('/join'); // 회원가입창으로 이동
    };

  return (
    <>
      <LoginBox>
        <InputBox>
          <p>ID</p>
          <InputArea id="inputArea" type="text" placeholder="ID를 입력해주세요" />
        </InputBox>
        <ButtonBox>
          <LoginButton onClick={handleLogin}>Login</LoginButton>
        </ButtonBox>
        <LinkBox>
          <GoToSignupButton onClick={handleGotoJoin}>
            <IconsBox>
              <BsCaretRightFill />
            </IconsBox>
            <TextBox>Go to Signup</TextBox>
          </GoToSignupButton>
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
  margin-top: 9rem;
  p {
    font-weight: 900;
    font-size: 35px;
  }
`;

const InputArea = styled.input`
  padding: 8px 17px;
  background-color: #ededed;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  width: 400px;
  height: 65px;

  outline: none;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem;
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
    background-color: #30BEFB;
  }
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  gap:3vw;
  margin-top: 8rem;
  text-align: center;
`;

const GoToSignupButton = styled.button`
  color: black;
  font-size: 35px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  padding: 1px;
  &:hover{
    color:#30BEFB;
  }
`;

const IconsBox = styled.div`
  margin-top: 2px;
  font-size: 35px;
  font-weight: 700;
`;

const TextBox = styled.div`
  margin-left: 0.5rem;
  font-size: 35px;
  font-weight: 700;
`;