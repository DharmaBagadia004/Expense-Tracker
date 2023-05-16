import React from "react";
import avatar from "../../avatar.png"
import { menuItems } from "../../utils/menuItems";
import { signout } from "../../utils/icons"; 
import '../../Styles/Navigation.css'

function Navigation({active,setActive}){
    console.log(active)
    return(
        <div className="Navigation">
            <div className="user-icon">
                <img src={avatar} className="user-image" />
                <div className="text">
                    <h2 className="user-name">Mike</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => { 
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': 'menu-ele'}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </div>
    )
}

export default Navigation