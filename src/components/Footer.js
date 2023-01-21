export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer-body wrapper fill-available">
                <div className="social-media">
                    <h3>Check us on Social Media</h3>
                    <ul className="footer-social list-none">
                        <li><a href="#facebook" role='button'>Facebook</a></li>
                        <li><a href="#instagram" role='button'>Instagram</a></li>
                        <li><a href="#pinterest" role='button'>Pinterest</a></li>
                        <li><a href="#tiktok" role='button'>TikTok</a></li>
                    </ul>
                </div>
                <div className="footer-navigation">
                <div>
                        <h3>Contact</h3>
                        <ul className="footer-nav list-none">
                            <li>New York</li>
                            <li><a href='mailto:office@littlelemon.com'>office@littlelemon.com</a></li>
                            <li>0740 000 000</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Navigation Links</h3>
                        <ul className="footer-nav list-none">
                            <li><a href="#Home" role='button'>Home</a></li>
                            <li><a href="#About" role='button'>About</a></li>
                            <li><a href="#Menu" role='button'>Menu</a></li>
                            <li><a href="#Order" role='button'>Order Online</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}