import styled from "styled-components";
import JoinItems from "../../components/join/JoinItems";

function Join() {
    return (
      <>
        <MainBox>
          <ServiceTitle>
            Devo
          </ServiceTitle>
          <ServiceIntro>
            developer_memo.
          </ServiceIntro>
          <JoinItems/>
        </MainBox>
      </>
    );
  }
  
  export default Join;
  
  const ServiceTitle =styled.div`
  display: flex;
  text-align: center;
  margin-top: 5rem;
  font-size: 75px;
  font-weight: 900;
  `

  const ServiceIntro =styled.div`
  display: flex;
  text-align: center;
  margin: 2rem;
  font-size: 35px;
  font-weight: 500;
  `

  const MainBox = styled.div`
  margin-top: 15rem;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  `