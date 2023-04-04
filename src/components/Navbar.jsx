import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBell, faSun } from '@fortawesome/free-solid-svg-icons'

const styles = {
    navbarWrapper: `fixed top-0 z-50 px-2 sm:px-4 py-2.5 w-full z-20 border-b-default border-gray-600 bg-primary`,
    navbarContainer: `flex flex-wrap items-center justify-between mx-auto`,
    navbarLogoImage: `h-6 mr-3 sm:h-9`,
    navbarLogoText: `self-center text-xl font-semibold whitespace-nowrap dark:text-white`,
    navbarButton: `hover:shadow-md rounded-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`,
    navbarIconButton: `dark:bg-primary px-3.5 py-2 rounded-full hover:bg-blue-700 hover:shadow-md `
}

const Navbar = () => {
    return (
 
        <nav className={styles.navbarWrapper}>
            <div className={styles.navbarContainer}>
                <a href="_https/index.html" className="flex items-center">
                    {/* <img src="_https/index.html" className={styles.navbarLogoImage} alt="Developers Chain Logo" /> */}
                    <span className={styles.navbarLogoText}>
                        Developers Chain
                    </span>
                </a>
               
                    
                <div className='flex gap-2'>
                <button
                    type='button'
                    className={styles.navbarIconButton}
                    >
                    <FontAwesomeIcon icon={faSun} />
                </button>
                <button
                    type='button'
                    className={styles.navbarIconButton}
                    >
                    <FontAwesomeIcon icon={faBell} />
                </button>   
                <button
                    type="button"
                    className={styles.navbarButton}
                >
                    
                    Get started
                </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
