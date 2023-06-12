function Footer() {
    const footerYear = new Date().getFullYear()

    return (
        <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
            <div>
            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%"></stop>                            <stop id="stop2" stopColor="rgba(74.952, 136.069, 255, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M17.9,-36C17.9,-27.8,9,-13.9,9.6,-6.3C10.2,1.4,20.2,2.9,22.4,4.9C24.7,6.9,19.3,9.5,15.4,12.7C11.6,15.9,9.3,19.8,5.2,23.9C1.1,28,-4.8,32.2,-11.6,33.2C-18.4,34.1,-26.1,31.7,-27.2,26C-28.3,20.4,-22.7,11.4,-19.8,5.3C-16.9,-0.9,-16.8,-4.2,-17.3,-10C-17.9,-15.7,-19.2,-23.8,-16.4,-30.7C-13.6,-37.6,-6.8,-43.3,1,-45C8.9,-46.6,17.8,-44.1,17.9,-36Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" stroke="url(#sw-gradient)"></path>              
            </svg>

            <p>Copyright &copy; {footerYear}. All rights reserved.</p>
            </div>

        </footer>
    )
}

export default Footer;