//Styled
import styled from "styled-components";

//Components
import News from "../components/News.component";
import Banner from "../components/Banner.component";

const AllNewsPage = () => {
  return (
    <StyledWrapper>
      <News title="Усі новини" showButton={false} />
      <Banner />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding-top: 57px;
  @media (max-width: 768px) {
    padding-top: 90px;
  }
`;

export default AllNewsPage;
