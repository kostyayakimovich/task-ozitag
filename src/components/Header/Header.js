import React, { useCallback, useState } from 'react';
import Burger from '../../assets/images/Burger-menu-icon.png';
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import BurgerClose from '../../assets/images/Burger-menu-close.png';
import { itemsMenu } from './menuData';
import HoverMenu from "../HoverMenu";
import "./style.scss";

const Header = () => {
  const [isElementHasChild, setIsElementHasChild] = useState(false);
  const [secondChildElementsMenu, setSecondChildElementsMenu] = useState([]);
  const [isBurger, setIsBurger] = useState(true);
  const mainElementsMenu = [];

  for (let key in itemsMenu) {
    mainElementsMenu.push(itemsMenu[key])
  }

  const checkMainElementMenu = useCallback((element) => {
    const firstValue = [];
    for (let key in itemsMenu) {
      if (key === element && itemsMenu[key].children) {
        setIsElementHasChild(true);
        for (let firstChildKey in itemsMenu[key]) {
          firstValue.push((itemsMenu[key])[firstChildKey]);
        }
        setSecondChildElementsMenu(firstValue);
      } else if (key === element && !itemsMenu[key].children) {
        setIsElementHasChild(false);
      }
    }
  }, []);

  const handleClickBurger = useCallback((element) => {
    isBurger ? setIsBurger(false) : setIsBurger(true)
  }, [isBurger]);

  return (
    <>
      <header className="header">
        <div className="burger"  >
          <img onClick={handleClickBurger}
            className="buger_img"
            id="imgBurger"
            src={isBurger ? Burger : BurgerClose}
            alt="icon burger"
          /> </div>
        <nav className="header_navigation">
          <ul className="menu" id="menu">
            {mainElementsMenu.map(el => (
              <li className="item_menu"
                key={el.value} onMouseOver={() => checkMainElementMenu(el.value)}
              >
                <a className="link_item_menu" href={`#${el.value}`}>{el.value}</a>
              </li>
            ))}
          </ul>
        </nav>
        <h1 className="logo">OZITAG</h1>
      </header>
      {isElementHasChild && isBurger && <HoverMenu
        setIsElementHasChild={setIsElementHasChild}
        secondChildElementsMenu={secondChildElementsMenu}
      />}

      {!isBurger && <BurgerMenu
        mainElementsMenu={mainElementsMenu}
        setIsBurger={setIsBurger} />}
    </>

  );
};

export default Header;