import styled from 'styled-components';

const Content=styled.div`
  padding: 25px;

  font-size: 35px;
  background-color: #F9FDFF;
  border-radius: 35px;
`;

function MemoIssue({content}){

    return(
        <>
            <Content>
                {content}
            </Content>
        </>
    )
}

export default MemoIssue;