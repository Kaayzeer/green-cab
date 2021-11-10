import styled from "styled-components";
import TravelImage from "../../../Images/chartBackground.png";
import Bookingbutton from "../../../components/CenterButton";

const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  background-image: url(${TravelImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 3rem;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10%;
  margin-bottom: 2rem;

  p {
    font-family: "Helvetica Neue";
    letter-spacing: 0.02rem;
    padding: 0.15rem;
  }

  p:nth-child(1) {
    margin-bottom: 1rem;
  }

  p:nth-child(2) {
    margin-bottom: 0.2rem;
  }
`;

function index() {
  return (
    <>
      <ImageContainer></ImageContainer>
      <Info>
        <p>Din gröna taxi anländer om ca 5 minuter</p>
        <p>Beräknad ankomsttid till slutdestination är 17:59</p>
        <p>trevlig resa!</p>
      </Info>
      <Bookingbutton label="Avboka resa" />
    </>
  );
}

export default index;
