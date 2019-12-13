import React from 'react';
import './Menu.css';

const menuItems =[
    
    {title:'Conferencia', link:'#event-presentation'},
    {title:'Invitados', link:'#guest'},
    {title:'Reservaciones', link:'#booking'},
]

const Menu = () =>{

    return(
        <section id="navbar" className="navbar">
            <div className="content-navbar container flex">
                <div className="logo">Web/Code/Camp</div>
                <div className="hamburguer-btn flex">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="main-nav flex">
                    {menuItems.map( (menuItem) =>{
                        return(
                            <a key={menuItem.title} href={menuItem.link}>{menuItem.title}</a>
                        );
                    })}
                   
                </div>
            </div>
	</section>
    );
}

export default Menu;