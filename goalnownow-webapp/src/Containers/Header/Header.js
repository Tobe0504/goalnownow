import React, { useState } from "react";
import classes from "./Header.module.css";
import goalNowNowLogo from "../../Assets/Images/goalNowNowLogo.svg";
import { v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFutbol,
  faStar,
  faNewspaper,
  faArrowAltCircleDown,
} from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../../Components/Dropdown/Dropdown";
import { countries } from "../../Utilities/countries";

// Description
// This component basically houses the top section nav of the web app

const Header = () => {
  //   Utils
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const stringDate = date.toString().split(" ");
  const gmt = stringDate[stringDate.length - 5];

  const activeHandler = (route) => {
    const activeNav = navItems.map((data) => {
      if (route.includes(data.route)) {
        return { ...data, isActive: true };
      }
      return { ...data, isActive: false };
    });
    setNavItems(activeNav);

    console.log(navItems);
  };

  // States
  const [navItems, setNavItems] = useState([
    {
      id: v4(),
      title: "Scores",
      icon: <FontAwesomeIcon icon={faFutbol} />,
      isActive: false,
      route: "/scores",
    },
    {
      id: v4(),
      title: "Favourites",
      icon: <FontAwesomeIcon icon={faStar} />,
      isActive: false,
      route: "/favourites",
    },
    {
      id: v4(),
      title: "Sports News",
      icon: <FontAwesomeIcon icon={faNewspaper} />,
      isActive: false,
      route: "/news",
    },
    {
      id: v4(),
      title: "Get the app",
      icon: <FontAwesomeIcon icon={faArrowAltCircleDown} />,
      isActive: false,
      route: "/get-the-app",
    },
  ]);

  const [country, setCountry] = useState("");
  const [currentTime, setCurrentTime] = useState(
    `${hour} : ${minute} (${gmt})`
  );

  //   navigation
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div>
        <img src={goalNowNowLogo} alt="GoalNowNow Logo" />
      </div>
      <div>
        {navItems.map((data) => {
          return (
            <Link
              key={data.id}
              onClick={() => {
                activeHandler(window.location.href);
              }}
              to={data.route}
              className={
                window.location.href.includes(data.route) &&
                `${classes.activeNav}`
              }
            >
              {window.location.href.includes(data.route) && (
                <div className={classes.activeIndicator}></div>
              )}
              <div className={classes.navItem}>
                <div>{data.icon}</div>
                <div>{data.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
      <div>
        <div>
          <Dropdown
            selected={country}
            setSelected={setCountry}
            options={countries.map((data) => {
              return (
                <div className={classes.countryDropdownContainer}>
                  <img
                    alt={data.name}
                    src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${data.code}.svg`}
                    className={classes.hmm}
                  />
                  <span>{data.code}</span>
                </div>
              );
            })}
            title="Country"
          />
        </div>
        <div>
          <Dropdown selected={currentTime} setSelected={setCurrentTime} />
        </div>
      </div>
    </div>
  );
};

export default Header;
