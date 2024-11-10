//Styled
import styled from "styled-components";

//Components
import News from "../components/News.component";
import Banner from "../components/Banner.component";

const AllNewsPage = () => {
  return (
    <StyledWrapper>
      <News />
      <Banner />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin-top: 100px;
  padding-top: 57px;
`;

export default AllNewsPage;
