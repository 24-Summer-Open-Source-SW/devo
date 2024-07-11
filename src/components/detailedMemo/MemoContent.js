import styled from "styled-components";
const Content=styled.div`
  padding-top: 35px;
  padding-bottom: 35px;

  height: 20%;

  color: #2B7697;
  font-size: 35px;
`;
function MemoContent({ memoContent }){

    return(
        <>
            <Content>
                {memoContent}
            </Content>
        </>
    )
}

export default MemoContent;