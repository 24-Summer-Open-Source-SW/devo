import { Link } from 'react-router-dom';
import styled from "styled-components";
import Memo from '../images/memo.png';

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

function MemoIcon({testName}){

    return(
        <>
            <Link to='/detailedMemo'>
                <MemoImage>
                <img src={Memo} />
                <p>{testName}</p>
                </MemoImage>
            </Link>
        </>
    )
}

export default MemoIcon;