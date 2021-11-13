import React from "react";
import { StyledChart, NavLink } from "./chartCss";
import { useHistory } from "react-router-dom";
import BookingButton from "../../../components/CenterButton";
import { useLocalStorage } from "../../../components/localStorage";

function Index() {
  const history = useHistory();
  const [getExtras, setGetExtras] = useLocalStorage("extras", "car");

  console.log(getExtras);

  const chartInfo = [
    "Extra:",
    `${getExtras.baby ? " 1 Bilbarnstol," : ""}
    ${getExtras.animals ? "1 Husdjur," : ""}
    ${getExtras.wheelchair ? "1 Rullstol." : ""}`,

    "Rabatt 10%",
    "Totalt: 360 kr",
  ];

  return (
    <StyledChart>
      <div className="chart">
        {getExtras.car ? (
          <React.Fragment>
            <h3>Du har valt guldpaketet!</h3>
            <img src={getExtras.car} alt="chartPic" />
            {chartInfo.map((info, i) => (
              <ul key={i}>
                <li>{info}</li>
              </ul>
            ))}
          </React.Fragment>
        ) : (
          <h3>Din varukorg är tom</h3>
        )}
      </div>

      <NavLink to="/booking">
        <BookingButton
          label="Bekräfta bokning"
          onClick={() => history.push("/booking")}
        />
      </NavLink>
    </StyledChart>
  );
}

export default Index;
