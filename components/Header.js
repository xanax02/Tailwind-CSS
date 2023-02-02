import Image from 'next/image'
import HeaderItem from './HeaderItem'

const Header = () => {
  return (
    <header>
      <div>
        {/* <HeaderItem title='Home' Icon /> */}
      </div>
      <Image src="https://links.papareact.com/ua6" 
        width={200}
        height={200}
      />
    </header>
  )
}

export default Header
