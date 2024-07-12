import { Link } from 'react-router-dom';
import styled from "styled-components";
import Memo from '../images/memo.png';

const Wrap = styled.div`
    display: flex;
    justify-content: start;
    //flex-direction: column;
    //align-items: center;
    margin-top: 40px;
    margin-left: 40px;
    flex-wrap: wrap;
`

const MemoImage=styled.div`
  //gap: 2vw;
    text-align: center;
  p{
      margin-top: 15px;
      margin-left: -10px;
    color: black;
    font-weight: 700;
    font-size: 35px;
      max-width: 175px;
      
  }

  img{
    width: 175px;
    height: 175px;
  }
  `;

function MemoIcon({testName}){

    return(
        <Wrap>
            <Link to='/detailedMemo'>
                <MemoImage>
                <img src={Memo} />
                <p>{testName}</p>
                </MemoImage>
            </Link>
        </Wrap>
    )
}

export default MemoIcon;