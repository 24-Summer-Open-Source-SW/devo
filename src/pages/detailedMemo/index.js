import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ReactMarkdown from'react-markdown';


import Header from '../../components/Header';
import MemoIssue from '../../components/detailedMemo/MemoIssue';
import MemoContent from '../../components/detailedMemo/MemoContent';
import MemoIcon from '../../components/MemoIcon';

// import Memo from '../../images/memo.png';

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
  let Name=localStorage.getItem('memoTitle');
  let Memo=localStorage.getItem('memoContents');
  let Issue=localStorage.getItem('memoIssue');
  const navigate=useNavigate()
  
  const deleteMemo = () => {
    localStorage.removeItem('memoTitle');
    localStorage.removeItem('memoContents');
    // 추가적으로 페이지를 리로드하거나 다른 동작을 수행할 수 있습니다.
    alert('메모가 삭제되었습니다.')
    navigate('/memo')
  };
  const mdIssueContents=`${Issue}`;

  return (
      <>
        <Container>
          <Header />
          <MemoContainer>
            <MemoIcon testName={Name}/>
            <MemoDetail>
              <p id='detailHeader'>issue</p>
              <ReactMarkdown>
                {mdIssueContents}
              </ReactMarkdown>
              <MemoIssue issueContent={Issue} />
              <MemoContent memoContent={Memo} />
              <MemoDeleteButton
                onClick={deleteMemo}
              >delete</MemoDeleteButton>
            </MemoDetail>
          </MemoContainer>
        </Container>
      </>
    );
  }
  
  export default DetailedMemo;
  