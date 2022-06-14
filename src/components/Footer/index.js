import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, 
    FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, 
    SocialIcons, SocialIconLink} from './FooterElements'
import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
      }

  return (
    <> 
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About us </FooterLinkTitle>
                        <FooterLink to = '/info'>How it works</FooterLink>
                        
                        <FooterLink to = '/info'>Terms of Service</FooterLink>  
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Contact us </FooterLinkTitle>
                        <FooterLink to = '/info'>Contact</FooterLink>
                        <FooterLink to = '/info'>Support</FooterLink>
                        <FooterLink to = '/info'>Sponsorships</FooterLink> 
                    </FooterLinkItems> 
                </FooterLinksWrapper> 
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> Features </FooterLinkTitle>
                        <FooterLink to = '/'>Add impact</FooterLink>
                        <FooterLink to = '/viewSusAF'>View impacts</FooterLink>
                        
                    </FooterLinkItems> 
                </FooterLinksWrapper> 
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to = '/' onClick = {toggleHome}>
                        Sustainability Awareness Framework
                    </SocialLogo>
                    <WebsiteRights> Sustainability Awareness Framework © {new Date().getFullYear()}. All rights reserved.</WebsiteRights>
                    
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    </>
  )
}

export default Footer