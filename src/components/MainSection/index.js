import React from 'react'

import {MainContainer, MainBg, MainContent, MainH1,
    MainP, MainBtnWrapper, NavBtnLink} from './MainElements'



const MainSection = () => {
  return (
    <MainContainer>
        
        <MainContent>
            <MainH1>Distributed Circular Economy </MainH1>
            <MainP>Give your products a new life</MainP>

            <MainBtnWrapper>
                <NavBtnLink to = '/connectWallet' primary = 'true' dark = 'true'>Connect Wallet</NavBtnLink>
            </MainBtnWrapper>
        </MainContent>
    </MainContainer>
  )
}

export default MainSection