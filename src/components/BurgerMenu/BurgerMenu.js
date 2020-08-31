import React, { useState } from 'react';
import Chevron from "../../assets/images/chevron.png";
import "./style.scss";

const BurgerMenu = ({ mainElementsMenu, setIsBurger }) => {
  const [isMenuOpen, setMenuState] = useState({});
  const [isParentOpen, setParentState] = useState({});

  const handleParentClick = (index, value) => {
    setParentState({ [index]: !value })
  }

  const handleChevronClick = (index, value) => {
    setMenuState({ [index]: !value })
  }
  return (

    <>
      <nav className="burger_header_navigation">
        <ul className="burger_menu" id="burger_menu">
          {mainElementsMenu.map((el, index) => (
            <li className="burger_item_menu"
              key={el.value}

            >
              <div className="burger_menu_block"  >
                <div onClick={() => setIsBurger(true)}>
                  <a className="link_burger_menu" href={`#${el.value}`}>{el.value}
                  </a>
                </div>
                {el.children &&
                  <img className={isParentOpen[index] ? "chevron_img" : "chevron_img_rotate"}
                    onClick={() => handleParentClick(index, isParentOpen[index])}
                    src={Chevron}
                    alt="chevron"
                  />}</div>

              {el.children && isParentOpen[index] ? el.children.map((item, index) =>
                <div className="burger_menu_block" key={item.value} >
                  <div className="burger_first_child">
                    <a className="link_burger_menu" href={`#${item.value}`}>{item.value}
                    </a>
                    {item.children && isMenuOpen[index] ? item.children.map(itemCh => (
                      <div key={itemCh} className="burger_second_child"
                        onClick={() => setIsBurger(true)}>
                        <a className="link_burger_menu" href={`#${itemCh}`}>{itemCh}</a>
                      </div>
                    )) : null}
                  </div>
                  {item.children &&
                    <img className={isMenuOpen[index] ? "chevron_img" : "chevron_img_rotate"}
                      onClick={() => handleChevronClick(index, isMenuOpen[index])}
                      src={Chevron}
                      alt="chevron"
                    />}
                </div>) : null}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default BurgerMenu;