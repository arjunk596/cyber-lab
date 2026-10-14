import '../Sass/Header.scss'
import Logo from '../Assets/Logo.png'
import { Minus, Plus, X } from 'lucide-react'

const Header = () => {
  const { minimize, maximize, close } = window.api.winCtrl
  return (
    <header>
      <div className="branding">
        <div className="logo"><img src={Logo} alt="logo" /></div>
        <span className='title'>CRCE Cyber Lab</span>
      </div>
      <div className="window-ctrl">
        <button
          type="button"
          className="win-ctrl-btn minimize"
          title='Minimize'
          aria-label="Minimize"
          onClick={() => minimize()}
        >
          <Minus size={12} />
        </button>

        <button
          type="button"
          className="win-ctrl-btn maximize"
          title='Maximize'
          aria-label="Maximize"
          onClick={() => maximize()}
        >
          <Plus size={12} />
        </button>

        <button
          type="button"
          className="win-ctrl-btn close"
          title='Close'
          aria-label="Close"
          onClick={() => close()}
        >
          <X size={12} />
        </button>

      </div>
    </header>
  )
}


export default Header
