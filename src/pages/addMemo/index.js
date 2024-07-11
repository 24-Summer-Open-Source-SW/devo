import styled from "styled-components";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Header from "../../components/Header";

function AddMemo() {
    const [values, setValues] = useState({
        title:'',
        contents:'',
    })

    let navigate = useNavigate()

    const handleChange =(e)=>{
        const {name, value} = e.target;
        setValues((prevValues)=>({
            ...prevValues,
            [name]:value,
        }))
    }

    const  handleSubmit =()=>{
        navigate('/')
    }

  return (
    <>
        <Wrapper>
            <Link to={'/'}>
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
                <InputWrap>
                <TitleInput
                    id={'title'}
                    name={'title'}
                    value={values.title}
                    onChange={handleChange}
                    placeholder={'메모장 이름을 입력해 주세요.'}/>
                </InputWrap>
                <InputWrap>
                    <ContentsInput
                        id={'contents'}
                        name={'contents'}
                        value={values.contents}
                        onChange={handleChange}
                        placeholder={'메모장 내용을 입력해 주세요.'}/>
                </InputWrap>
                <BtnBox>
                    <AddBtn onClick={handleSubmit}>
                        ADD
                    </AddBtn>
                </BtnBox>
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
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;
    
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



const ContentsBox = styled.div`
    width: 1031px;
    height: 641px;
    background: #30BEFB4D;
    border-radius: 35px;
    padding: 20px;
    text-align: center;
`



const IssueBox = styled.div`
    margin: 20px;
    padding: 20px;
    background: white;
    width: 949px;
    border-radius: 35px;
    text-align: left;
    p{
        font-size: 35px;
        font-weight: 800;
        margin: 2px;
    }
`


const BtnBox = styled.div`
    display: flex;
    justify-content: end;
    padding: 20px;
    
`

const AddBtn = styled.button`
    background: #30BEFB;
    width: 145px;
    height: 54px;
    border-radius: 35px;
    font-size: 35px;
    font-weight: 700;
    color: white;
    
    


`
const InputWrap = styled.div`

`

const TitleInput = styled.input`
    width: 949px;
    height: 65px;
    border-radius: 35px ;
    border: solid 5px #6CD3FF;
    margin-top: 20px;
    margin-bottom: 20px;
    background: #EDF9FF;
    color: #2B7697;
    font-size: 35px;
    font-weight: 400;
    outline: none;
    padding-left: 16px;
`
const ContentsInput = styled.textarea`
    width: 949px;
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
`