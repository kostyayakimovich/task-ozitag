import React, { useCallback, useState, useEffect } from 'react';
import Burger from '../../assets/images/Burger-menu-icon.png';
import BurgerClose from '../../assets/images/Burger-menu-close.png';
import { itemsMenu } from './menuData';
import HoverMenu from "../HoverMenu";
import "./style.scss";

const Header = () => {
  const [isElementHasChild, setIsElementHasChild] = useState(false);
  const [secondChildElementsMenu, setSecondChildElementsMenu] = useState([]);
  const [isBurger, setIsBurger] = useState(true);
  const mainElementsMenu = [];
  const valueElementsMenu = [];

  for (let key in itemsMenu) {
    mainElementsMenu.push(key)
    valueElementsMenu.push(itemsMenu[key]);
  }
  const checkMainElementMenu = useCallback((element) => {
    const firstValue = [];
    for (let key in itemsMenu) {
      if (key === element && typeof (itemsMenu[key]) === "object") {
        setIsElementHasChild(true);
        for (let firstChildKey in itemsMenu[key]) {
          firstValue.push((itemsMenu[key])[firstChildKey]);
        }
        setSecondChildElementsMenu(firstValue);
      } else if (key === element && typeof (itemsMenu[key]) === "string") {
        setIsElementHasChild(false);
      }
    }
  }, []);

  const handleClickBurger = useCallback((element) => {
    isBurger ? setIsBurger(false) : setIsBurger(true)
  }, [isBurger]);

  useEffect(() => {
  }, [isElementHasChild]);

  return (

    <>
      <header className="header">
        <div className="burger"  >
          <img onClick={handleClickBurger}
            className="buger_img"
            id="imgBurger"
            src={isBurger ? Burger : BurgerClose}
            alt="icon burger"
          />
        </div>
        <nav className="header_navigation">
          <ul className="menu" id="menu">
            {mainElementsMenu.map(el => (
              <li className="item_menu"
                key={el} onMouseOver={() => checkMainElementMenu(el)}
              >
                {el}
              </li>
            ))}

          </ul>
        </nav>
      </header>
      {isElementHasChild && <HoverMenu
        setIsElementHasChild={setIsElementHasChild}
        secondChildElementsMenu={secondChildElementsMenu}
      />}
    </>

  );
};

export default Header;