
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
            <p>ADD memo</p>
          </AddBtn>
        </Link>
        <Link to={"/memo"}>
          <MainBtn>
            <p>Dev_memo</p>
          </MainBtn>
        </Link>
        <LogoutBtn onClick={handleLogout}>
          <p>Logout</p>
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
const LogoutBtn = styled.div`
    background:#EA596E;
    color: white;
    padding: 10px;
    width:250px;
    height: 65px;
    border-radius: 30px;
    text-align: center;
    p{
        font-weight: 800;
        font-size: 35px;
        padding: 5px;
    }
`

const MainBtn = styled.div`
    background:#D4D4D4;
    padding: 10px;
    width:250px;
    height: 65px;
    border-radius: 30px;
    text-align: center;
    p{
        font-weight: 800;
        font-size: 35px;
        padding: 5px;
    }

`

const AddBtn = styled.div`
    background:#30BEFB;
    padding: 10px;
    width:250px;
    height: 65px;
    border-radius: 30px;
    text-align: center;
    color: white;
    p{
        font-weight: 800;
        font-size: 35px;
        padding: 5px;
    }

`
