import styled from "styled-components";
import {Link} from "react-router-dom";


function Header() {

    return (
        <Wrapper>
                <BtnBox>
                    <Link to={'/addmemo'}>
                        <AddBtn>
                            <p>
                                ADD memo
                            </p>
                        </AddBtn>
                    </Link>
                    <Link to={'/'}>
                        <MainBtn>
                            <p>
                                Dev_memo
                            </p>
                        </MainBtn>
                    </Link>
                    <LogoutBtn>
                        <p>
                            Logout
                        </p>
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
