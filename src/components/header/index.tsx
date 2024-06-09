import { HeaderContainer, HeaderContent } from './styles'

import logo from '@/assets/logo.svg'
import leftEffect from '@/assets/left-effect.svg'
import rightEffect from '@/assets/right-effect.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img className="left" src={leftEffect} alt="" />
      <HeaderContent>
        <img src={logo} alt="" />
      </HeaderContent>
      <img className="right" src={rightEffect} alt="" />
      <div className="middle-blur"></div>
    </HeaderContainer>
  )
}
