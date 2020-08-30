import React, { useCallback, useState, useEffect } from 'react';
import Burger from '../../assets/images/Burger-menu-icon.png';
import BurgerClose from '../../assets/images/Burger-menu-close.png';
import Chevron from "../../assets/images/chevron.png";
import { itemsMenu } from './menuData';
import HoverMenu from "../HoverMenu";
import "./style.scss";

const Header = () => {
  const [isElementHasChild, setIsElementHasChild] = useState(false);
  const [secondChildElementsMenu, setSecondChildElementsMenu] = useState([]);
  const [isBurger, setIsBurger] = useState(true);
  const [isChevronDown, setIsChevronDown] = useState(true);
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

  const handleClickChevron = useCallback((el) => {
    const firstValue = [];
    for (let key in itemsMenu) {
      if (key === el) {
        firstValue.push(itemsMenu[key].children)
      }
    }
    isChevronDown ? setIsChevronDown(false) : setIsChevronDown(true);
  }, [isChevronDown]);

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
          /> </div>
        {/*descktop*/}
        <nav className="header_navigation">
          <ul className="menu" id="menu">
            {mainElementsMenu.map(el => (
              <li className="item_menu"
                key={el.value} onMouseOver={() => checkMainElementMenu(el.value)}
              >
                {el.value}
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
      {!isBurger && <nav className="burger_header_navigation">
        <ul className="burger_menu" id="burger_menu">
          {mainElementsMenu.map(el => (
            <li className="burger_item_menu"
              key={el.value}
            >
              <div className="burger_menu_block">
                <div>{el.value}</div>

                {el.children && <img className={isChevronDown ? "chevron_img" : "chevron_img_rotate"}
                  onClick={() => handleClickChevron(el.value)}
                  src={Chevron}
                  alt="chevron"
                />}</div>

              {el.children ? el.children.map(item =>
                <div className="burger_menu_block" key={item.value}>
                  <div className="burger_first_child"> <p>{item.value}</p>
                    {item.children ? item.children.map(itemCh => (
                      <p key={itemCh} className="burger_second_child" >{itemCh}</p>
                    )) : null}
                  </div>
                  {item.children && <img className={isChevronDown ? "chevron_img" : "chevron_img_rotate"}
                    onClick={() => handleClickChevron(el.value)}
                    src={Chevron}
                    alt="chevron"
                  />}
                </div>) : null}
            </li>
          ))}
        </ul>
      </nav>}
    </>

  );
};

export default Header;