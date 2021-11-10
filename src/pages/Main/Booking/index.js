import styled from "styled-components";
import TravelImage from "../../../Images/chartBackground.png";
import Bookingbutton from "../../../components/CenterButton";

const ImageContainer = styled.div`
  width: 100%;
  height: 70%;
  background-image: url(${TravelImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 3rem;
`;

function index() {
  return (
    <>
      <ImageContainer></ImageContainer>
      <Bookingbutton label="Avboka resa" />
    </>
  );
}

export default index;
