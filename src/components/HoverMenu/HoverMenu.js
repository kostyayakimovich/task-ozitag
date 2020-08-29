import React from 'react';
import "./style.scss";

const HoverMenu = ({ setIsElementHasChild, secondChildElementsMenu }) => {
  return (
    <>
      <section className="hover_menu">
        <nav className="hover_menu_navigation" onMouseLeave={() => setIsElementHasChild(false)}>
          <ul className="menu" id="menu" >
            {secondChildElementsMenu.map(el => {
              return (
                <li className="item_menu_hover"
                  key={typeof (el) === "object" ? el.value : el}
                >
                  {typeof (el) === "object" ?
                    el.children ? (
                      [...el.value, ...el.children].map(item =>
                        <p key={item} className="item_menu_hover">{item}</p>)) : <p>{el.value}</p>
                    :
                    <p className="item_menu_hover">{el}</p>}

                </li>
              )
            })}
          </ul>
        </nav>
      </section>
    </>
  );
};

export default HoverMenu;