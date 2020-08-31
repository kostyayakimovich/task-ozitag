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
                    <div key={item.value} className="el_menu_hover">
                      <a className="link_menu" href={`#${item.value}`}>{item.value}</a>
                      {item.children.map(elChildren =>
                        <div key={elChildren} className="el_menu_hover_child">
                          <a className="link_menu" href={`#${elChildren}`}>{elChildren}</a>
                        </div>)}
                    </div>
                    : <div key={item.value} className="el_menu_hover">
                      <a className="link_menu" href={`#${item.value}`}>{item.value}</a>
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