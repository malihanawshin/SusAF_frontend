import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu,
    SidebarLink, SideBtnWrapper, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
        <Icon onClick = {toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to = '/' onClick = {toggle}> Add impact </SidebarLink>
                <SidebarLink to = '/viewSusAF' onClick = {toggle}> View impacts </SidebarLink>
                
            </SidebarMenu>
        </SidebarWrapper>
        <SideBtnWrapper>
            <SidebarRoute to = '/connectWallet'> Connect Wallet </SidebarRoute>
        </SideBtnWrapper>
    </SidebarContainer>
  )
}

export default Sidebar