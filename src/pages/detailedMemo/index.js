import styled from 'styled-components';

import Header from '../../components/Header';
import MemoIssue from '../../components/detailedMemo/MemoIssue';
import MemoContent from '../../components/detailedMemo/MemoContent';

import Memo from '../../images/memo.png';

const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
  
  
  p{
    color: black;
    font-weight: 700;
    font-size: 35px;
  }

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

  width: 75%;
  
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

  /* width: 20%; */

  &:hover{
    font-weight: bold;
    background-color: #BB4758;
    transition: all 0.2s;
  }
`;
function DetailedMemo() {
  let testName=localStorage.getItem('memoTitle');
  let testMemo=localStorage.getItem('memoContents');  
  return (
      <>
        <Container>
          <Header />
          <MemoContainer>
            <MemoImage>
              <img src={Memo} />
              <p>{testName}</p>
            </MemoImage>
            <MemoDetail>
              <p id='detailHeader'>issue</p>  
              <MemoIssue issueContent='issue test text 입니다~' />
              <MemoContent memoContent={testMemo} />
              <MemoDeleteButton>delete</MemoDeleteButton>
            </MemoDetail>
          </MemoContainer>
        </Container>
      </>
    );
  }
  
  export default DetailedMemo;
  