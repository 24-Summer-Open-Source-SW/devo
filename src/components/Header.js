import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 로컬 스토리지에 저장된 로그인 이력 삭제
    localStorage.removeItem("loginId");
    console.log("로그인 이력이 삭제되었습니다.");
    console.log("현재 로그인 ID:", localStorage.getItem("loginId"));
    // "/" 경로로 이동
    navigate("/");
  };

  return (
    <Wrapper>
      <BtnBox>
        <Link to={"/memo/add"}>
          <AddBtn>
            ADD memo
          </AddBtn>
        </Link>
        <Link to={"/memo"}>
          <MainBtn>
            Dev_memo
          </MainBtn>
        </Link>
        <LogoutBtn onClick={handleLogout}>
          Logout
        </LogoutBtn>
      </BtnBox>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 60px;
`
const BtnBox =styled.div`
    display: flex;
    gap: 250px;
`
const LogoutBtn = styled.button`
  background:#EA596E;
  color: white;
  width:250px;
  height: 65px;
  border-radius: 30px;
  text-align: center;
  font-weight: 800;
  font-size: 35px;

`

const MainBtn = styled.button`
  background:#D4D4D4;
  width:250px;
  height: 65px;
  border-radius: 30px;
  text-align: center;
  font-weight: 800;
  font-size: 35px;
`

const AddBtn = styled.button`
  background:#30BEFB;
  color: white;
  width:250px;
  height: 65px;
  border-radius: 30px;
  text-align: center;
  font-weight: 800;
  font-size: 35px;

`
