import { useState } from 'react';
import Button from './Button'
import NavOverlay from './NavOverlay.js'

import styles from './header.module.css';

const Header = ({children}) => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    return <header className={styles.header}>
        <Button 
            label="Menu" 
            clickHandler={() => {
                setMenuVisible(true);
            }}
        />
        {isMenuVisible && <NavOverlay closeHandler={() => {setMenuVisible(false);}}/>}
    </header>
}
export default Header