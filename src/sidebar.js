import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Collapse from 'react-bootstrap/Collapse'
import VyoogLogo from './vyoog.png'
import './sidebar.css'
import HamburgerMenu from "react-hamburger-menu"
import db from "./base";
import firebase from 'firebase';


function Sidebar(){
    const [data, setData] = React.useState([]);

    const [open, setOpen] = React.useState(false);

    const [collapse, setCollapse] = React.useState({});

    useEffect(() => {
        db.collection("dashboard")
        .get()
        .then(querySnapshot => {
         console.log(data)
         setData(querySnapshot.docs.map(doc => doc.data())); 
      });
     }, [])

    function handleClick(id) {
        setCollapse(prevState => ({...prevState, [id]: !prevState[id]}))
    }
    function handleHamburgerClick(){
        setOpen(prevState => !prevState)
    }
    return (
        <div id="SideBarContainer" className={open ? 'slideIn' : 'slideOut'}>
            <SidebarMenu>

                <HamburgerMenu
                    isOpen={!open}
                    menuClicked={()=>handleHamburgerClick()}
                    width={22}
                    height={18}
                    strokeWidth={2}
                    rotate={0}
                    color='white'
                    borderRadius={0}
                    animationDuration={0.4}
                    className="menu"
                />

                <MenuLogo>
                    <img src={VyoogLogo} alt="Vyoog Logo" className="vyooglogo"/>
                    <div className="VyoogTitle">Vyoog</div>
                </MenuLogo>                
                
                {data.map((postData) => {
                    return(
                        <div key = {postData.title} className="Menu">
                            <SidebarMenuItem 
                                onClick={() => handleClick(postData.title)}
                            >
                                    <SidebarMenuItemLabel>{postData.title}</SidebarMenuItemLabel>
                            </SidebarMenuItem>
                            <Collapse in={collapse[postData.title]}>

                                <CollapsedText>
                                    {postData.subtitles.map((subtitle) => {
                                        return(
                                            <Subtitle>
                                                {subtitle}
                                            </Subtitle>
                                        );
                                    })}
                                </CollapsedText>
                            </Collapse>
                        </div>
                    );
                })}
                      <button onClick={() => firebase.auth().signOut()}>Sign out</button>

            </SidebarMenu>
        </div>
    );
}

 
const SidebarMenu = styled.ul`
        display: flex;
        align-items: left;
        flex-direction: column;
        list-style: none;
        width: 100%;
        padding-left: 0px;
`;
 
const MenuLogo = styled.div`
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 16px;
        font-size: 22px;
        line-height: 1.5;
        font-weight: 600;
        height: 45px;
        color: #fff;
        margin: 30px 30px 30px 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid #2e2e33;
`;
 
const SidebarMenuItem = styled.li`
        display: flex;
        height: 50px;
        width: 100%;
        align-items: center;
        padding-left: 30px;
        padding-top: 10px;
        &:hover {
        background: rgba(255, 255, 255, 0.05);
        box-shadow: inset 3px 0 0 0 #ffffff;
        cursor: pointer;
}
`;
 
const SidebarMenuItemLabel = styled.p`
        font-family: "Open Sans", sans-serif;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.3;
        text-align: left;
        padding: 0px 0px;
        margin-left: 15px;
        margin-top: 0px;
        color: #ffffff;
`;

const CollapsedText = styled.div`
    text-align: left;
    background-color: rgba(255, 255, 255, 0.1);
`;

const Subtitle = styled.div`
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 60px;
    &:hover {
        color: rgba(255, 255, 255, 1);
        cursor: pointer;
    }
`;
export default Sidebar;