import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";



function AddMemo() {
    const [memoTitle, setMemoTitle] = useState('')
    const [memoContents, setMemoContents] =useState('')
    let navigate = useNavigate()

    const handleTitle = (e)=>{
        setMemoTitle(e.target.value)
    }

    const handleContents =(e)=>{
        setMemoContents(e.target.value)
    }

    const  handleSubmit =()=>{
        navigate('/memo')
        localStorage.setItem('memoTitle', memoTitle);
        localStorage.setItem('memoContents', memoContents);
    }

  return (
    <>
        <Wrapper>
            <Link to={'/memo'}>
                <MainBtn>
                    <p>
                        Dev_memo
                    </p>
                </MainBtn>
            </Link>
        </Wrapper>
        <Container>
            <ContentsBox>
                <IssueBox>
                    <p>이슈 내용</p>
                    <p>이슈 내용</p>
                    <p>이슈 내용</p>
                    <p>이슈 내용</p>
                </IssueBox>
                <TitleInput
                    onChange={handleTitle}
                    placeholder={'메모장 이름을 입력해 주세요.'}/>
                <ContentsInput
                    onChange={handleContents}
                    placeholder={'메모장 내용을 입력해 주세요.'}/>
                <AddBtn onClick={handleSubmit}>
                    add
                </AddBtn>
            </ContentsBox>
        </Container>
    </>
  );
}

export default AddMemo;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 60px;
`;
const Container = styled.div`
    display: flex;
    justify-content: center;
    /* flex-wrap: wrap;
    gap: 2vw; */
    
`;
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
`;
const ContentsBox = styled.div`
    width: 1031px;
    height: 641px;
    background: #30BEFB4D;
    border-radius: 35px;
    padding: 35px;

    align-items: center;
    justify-content: space-between;

    /* flex-wrap: wrap;
    gap: 1vw; */
`;
const IssueBox = styled.div`
    padding: 20px;
    width: 100%;
    background: white;
    border-radius: 35px;
    text-align: left;
    p{
        font-size: 35px;
        font-weight: 800;
        margin: 2px;
    }
`;
const AddBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: auto 0 0 auto;
    padding-right: 40px;
    padding-left: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    
    color: white;
    font-size: 35px;
    font-weight: 700;
    
    background: #30BEFB;
    border-radius: 35px;
    border: none;
`;

const TitleInput = styled.input`
    width: 100%;

    border-radius: 35px ;
    border: solid 5px #6CD3FF;
    padding: 15px;

    background: #EDF9FF;
    color: #2B7697;
    font-size: 35px;
    font-weight: 400;
    outline: none;
    padding-left: 16px;
`;
const ContentsInput = styled.textarea`
    width: 100%;
    min-height: 147px ;
    border-radius: 35px ;
    border: solid 5px #6CD3FF;
    margin-bottom: 20px;
    background: #EDF9FF;
    color: #2B7697;
    font-size: 35px;
    font-weight: 400;
    outline: none;
    padding-left: 16px;
    resize: none;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;  
    scrollbar-width: none;
`;