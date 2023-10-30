'use client'

import { Menu, MenuItem} from "@szhsin/react-menu";
import Link from "next/link";
import "@szhsin/react-menu/dist/index.css";
import '../Css/menu.css'

const MenuComponent = () => {
    return(
        <ul className="flex items-center h-full">
            <li className="h-full">
                <Menu menuButton={
                    <button type="button" className="menu-items h-full" >
                        <span >Our Games</span>
                        <img src='/assets/images/header/angle-arrow-down.svg' alt='arrow-down' style={{width:"12px", height:"8px"}}/>
                    </button>
                } menuStyle={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #032146',borderRadius:0,padding:0}}
                >
                    <MenuItem className="customMenuItem"><Link href="/rummy.html" className="items">Rummy</Link></MenuItem>
                    <MenuItem className="customMenuItem"><Link href="/fantasysports.html" className="items">Fantasy</Link></MenuItem>
                    <MenuItem className="customMenuItem"><Link href="poker.html" className="items">Poker</Link></MenuItem>
                    <MenuItem className="customMenuItem"><Link href="/carrom.html" className="items">Carrom</Link></MenuItem>
                    <MenuItem className="customMenuItem"><Link href="/pool.html" className="items">Pool</Link></MenuItem>
                    <MenuItem className="customMenuItem"><Link href="/callbreak.html" className="items">Call Break</Link></MenuItem>
                </Menu>
                
            </li>

            <li className="relative link-separator"><span></span></li>

            <li className="h-full">
                <Menu menuButton={
                    <button type="button" className="menu-items h-full">
                        <span >Bonuses & Vouchers</span>
                        <img src='/assets/images/header/angle-arrow-down.svg' alt='arrow-down'  loading='lazy' style={{width:"12px", height:"8px"}}/>
                    </button>
                } menuStyle={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #032146',borderRadius:0,padding:0}}>
                    <MenuItem className="customMenuItem"><Link href="rummybonus.html" className="items">Bonus Offers</Link></MenuItem>
                    <MenuItem className="customMenuItem"><Link href="regular_player_bonus.html" className="items">Pseudo Bonus</Link></MenuItem>
                    <MenuItem className="customMenuItem"><Link href="a23-welcome-bonus.html" className="items">Welcome Bonus</Link></MenuItem>
                    <MenuItem className="customMenuItem"><Link href="gift.html" className="items">Vouchers</Link></MenuItem>
                </Menu>
            </li>

            <li className="relative link-separator"><span></span></li>

            <li className="h-full">
                <Menu menuButton={
                    <button type="button" className="menu-items h-full" >
                        <span >More</span>
                        <img src='/assets/images/header/angle-arrow-down.svg' alt='arrow-down'  loading='lazy' style={{width:"12px", height:"8px"}}/>
                    </button>
                } menuStyle={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #032146',borderRadius:0,padding:0}}>
                    
                    <MenuItem className="customMenuItem"><Link href="acepoints.html" className="items">Loyalty Program</Link></MenuItem>
                    <MenuItem className="customMenuItem"><Link href="responsiblegaming.html" className="items">Responsible Gaming</Link></MenuItem>
                    <MenuItem className="customMenuItem"><Link href="referAndEarn.html" className="items">Refer & Earn</Link></MenuItem>
                    <MenuItem className="customMenuItem"><Link href="tds.html" className="items">TDS</Link></MenuItem>
                </Menu>
            </li>

            <li className="relative link-separator"><span></span></li>

            <li className="h-full">
                <Menu menuButton={
                    <button type="button" className="menu-items h-full" >
                        <span >The Company</span>
                        <img src='/assets/images/header/angle-arrow-down.svg' alt='arrow-down'  loading='lazy' style={{width:"12px", height:"8px"}}/>
                    </button>
                } menuStyle={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #032146',borderRadius:0,padding:0}}>
                    
                    <MenuItem className="customMenuItem"><Link href="aboutus.html" className="items">About Us</Link></MenuItem>
                    <MenuItem className="customMenuItem"><Link href="/blog/" className="items">Blog</Link></MenuItem>
                    <MenuItem className="customMenuItem"><Link href="faqs.html" className="items">FAQ</Link></MenuItem>
                    <MenuItem className="customMenuItem"><Link href="contactus.html" className="items">Contact Us</Link></MenuItem>
                </Menu>
            </li>
        </ul>
    )
}
export default MenuComponent