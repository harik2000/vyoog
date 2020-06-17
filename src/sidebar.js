import React, { Component } from "react";
import styled from "styled-components";

const dashboardItems = [
    {
        id: 1,
        name: "Dashboard"
    },
    {
        id: 2,
        name: "Service Alerts"
    },
    {
        id: 3,
        name: "Customer Tickets"
    },
    {
        id: 4,
        name: "Archive"
    },
    {
        id: 5,
        name: "Library"
    },
    {
        id: 6,
        name: "Deliveries"
    }
];


class Sidebar extends Component {
    render() {
        return (
           <SidebarContainer>
               <SidebarMenu>
                   <MenuLogo>
                   Vyoog
                   </MenuLogo>                
                
                    {dashboardItems.map((postData) => {
                        return(
                            <SidebarMenuItem key={postData.id}>
                                <SidebarMenuItemLabel>{postData.name}</SidebarMenuItemLabel>
                            </SidebarMenuItem>
                        );
                    })}
                </SidebarMenu>
            </SidebarContainer>
        );
    }
}

 
const SidebarContainer = styled.div`
        height: 100vh;
        width: 270px;
        background-color: #252529;
        color: #fff;
        display: flex;
        flex-direction: column;
        font-family: "Roboto", sans-serif;
`;
 
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
        font-size: 18px;
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
        height: 40px;
        width: 100%;
        align-items: center;
        padding-left: 30px;
        &:hover {
        background: rgba(255, 255, 255, 0.05);
        box-shadow: inset 3px 0 0 0 #ffffff;
        cursor: pointer;
}
`;
 
const SidebarMenuItemLabel = styled.p`
        font-family: "Open Sans", sans-serif;
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.3;
        text-align: left;
        padding: 12px 0px;
        margin-left: 20px;
        margin-top: 15px;
        color: #ffffff;
`;


export default Sidebar;