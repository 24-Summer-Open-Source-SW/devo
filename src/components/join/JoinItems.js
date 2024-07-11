import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";
import { useState } from "react";

function JoinItems() {
  const [id, setId] = useState("");
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleJoin = () => {
    if (id === "" || url === "") {
      alert("모든 칸을 채워주세요.");
      return;
    }

    // localStorage에 회원가입 정보 저장
    localStorage.setItem("id", id);
    localStorage.setItem("url", url);

    // localStorage에 저장된 내용을 콘솔로그로 출력
    console.log("localStorage에 저장된 내용:");
    console.log("id:", localStorage.getItem("id"));
    console.log("url:", localStorage.getItem("url"));

    // 회원가입 완료 후 페이지 이동
    navigate("/");
  };

  return (
    <>
      <JoinBox>
        <InputBox>
          <p>ID</p>
          <InputArea
            id="inputArea"
            type="text"
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <p>URL</p>
          <InputArea
            id="inputArea"
            type="text"
            placeholder="repository issue URL을 입력해주세요."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </InputBox>
        <ButtonBox>
          <JoinButton onClick={handleJoin}>
            <IconsBox>
              <BsCheckCircleFill />
            </IconsBox>
            <TextBox>Submit!</TextBox>
          </JoinButton>
        </ButtonBox>
      </JoinBox>
    </>
  );
}

export default JoinItems;

const JoinBox = styled.div`
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
  align-items: center;
`;

const JoinButton = styled.button`
  display: flex;
  flex-direction: row;
  row-gap: 1px;
  justify-content: center;
  color: black;
  border: none;
  cursor: pointer;
  width: 350px;
  height: 65px;
  &:hover {
    color: #0056b3;
  }
`;

const IconsBox = styled.div`
  margin-top: 2px;
  font-size: 35px;
  font-weight: 700;
`;

const TextBox = styled.div`
  margin-left: 1rem;
  font-size: 35px;
  font-weight: 700;
`;
