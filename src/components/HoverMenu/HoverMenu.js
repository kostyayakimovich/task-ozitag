import React from 'react';
import "./style.scss";

const HoverMenu = ({ setIsElementHasChild, secondChildElementsMenu }) => {

  return (
    <>
      <section className="hover_menu">
        <nav className="hover_menu_navigation" onMouseLeave={() => setIsElementHasChild(false)}>
          <ul className="menu" id="menu" >
            {secondChildElementsMenu.map(el => (
              <li className="item_menu_hover"
                key={el}
              >
                {Array.isArray(el) ? el.map(item =>
                  item.children ?
                    <div key={item.value} className="el_menu_hover">{item.value}
                      {item.children.map(elChildren =>
                        <p key={elChildren} className="el_menu_hover_child">{elChildren}</p>)}
                    </div>
                    : <div key={item.value} className="el_menu_hover">
                      {item.value}
                    </div>)
                  : null
                }
              </li>
            ))
            }
          </ul>
        </nav>
      </section>
    </>
  );
};

export default HoverMenu;