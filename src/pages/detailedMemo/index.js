import styled from 'styled-components';

import MemoIssue from '../../components/detailedMemo/MemoIssue';
import MemoContent from '../../components/detailedMemo/MemoContent';

import Memo from '../../images/memo.png';

const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex-wrap: wrap;
  gap: 5vw;
`;
const Header=styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right:25px;
  padding-left: 25px;

  color: black;
  font-size: 35px;
  font-weight: 700;
  background-color: #D4D4D4;
  border-radius: 50px;
`;
const MemoContainer=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  padding: 60px;

  width: 100%;
  `;
const MemoImage=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  flex-wrap: wrap;
  gap: 2vw;
  
  color: black;
  font-weight: 700;
  font-size: 35px;

  img{
    width: 175px;
    height: 175px;
  }
  `;
const MemoDetail=styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  flex-wrap: wrap;
  gap: 20px;

  width: 60%;
  
  color: #2B7697;
  font-size: 35px;
  background-color: #C1EBFE;
  border-radius: 35px;

  #detailHeader{
    color: black;
    font-size: 35px;
    font-weight: 700;
  }
`;

const MemoDeleteButton=styled.button`
  margin: auto 0 0 auto;

  padding-top: 15px;
  padding-bottom: 15px;
  padding-right:25px;
  padding-left: 25px;

  color: white;
  font-size: 35px;
  background-color: #EA596E;
  border-radius: 55px;

  width: 25%;

  &:hover{
    font-weight: bold;
    background-color: #BB4758;
    transition: all 0.2s;
  }
`;
function DetailedMemo() {
    return (
      <>
        <Container>
          <Header>Dev_Memo</Header>
          <MemoContainer>
            <MemoImage>
              <img src={Memo} />
              메모이름
            </MemoImage>
            <MemoDetail>
              <p id='detailHeader'>issue</p>  
              <MemoIssue content='issue test text 입니다~' />
              <MemoContent content='test text입니다~' />
              <MemoDeleteButton>delete</MemoDeleteButton>
            </MemoDetail>
          </MemoContainer>
        </Container>
      </>
    );
  }
  
  export default DetailedMemo;
  