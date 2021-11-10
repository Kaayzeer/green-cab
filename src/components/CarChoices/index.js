import styled from "styled-components";
import { CarChoiceData } from "../CarChoiceData";
import ReactDOM from "react-dom";

const ModalBackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #081c15;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  button {
    position: absolute;
    bottom: 9rem;
    width: 108px;
    height: 45px;
    letter-spacing: 0.08rem;
    border-radius: 35px;
    border: 1px solid ${(props) => props.theme.boxShadow};
    box-shadow: 1px 5px 2px -3px ${(props) => props.theme.boxShadow};
  }
`;

const Modal = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid ${(props) => props.theme.body};
  border-radius: 16px;
  background: #dcead0;
  opacity: 0.7;
  backdrop-filter: blur(7px);

  form {
    margin-top: 10%;
    margin-bottom: 10%;
    padding: 0.2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
  }

  .img {
    width: 40%;
    margin: 0.3rem 0rem;

    img {
      width: 130px;
    }
  }
  .input {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;

    label {
      text-align: left;
      font-family: "cantarell";
      font-weight: lighter;
      color: #081c15;
    }

    input {
      margin: 0.4rem;
    }
  }
`;

function Index({ handleClose }) {
  return ReactDOM.createPortal(
    <ModalBackDrop>
      <Modal>
        <form>
          {CarChoiceData.map((data) => (
            <>
              <div className="img">
                <img src={data.pic} alt=""></img>
              </div>
              <div className="input">
                <label for="animals">
                  {data.animals}
                  <input type="checkbox" id="animals" name="animals" />
                </label>
                <label for="wheelchair">
                  {data.wheelchair}
                  <input type="checkbox" id="wheelchair" name="wheelchair" />
                </label>
                <label for="baby">
                  {data.baby}
                  <input type="checkbox" id="baby" name="baby" />
                </label>
              </div>
            </>
          ))}
        </form>
      </Modal>
      <button onClick={handleClose}>Välj</button>
    </ModalBackDrop>,
    document.body
  );
}

export default Index;
