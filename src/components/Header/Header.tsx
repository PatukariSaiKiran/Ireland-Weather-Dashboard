import "./Header.css";

function Header() {
    return(
        <header className="header">
            <div className="header-logo">
                <span className="logo-icon">☁️</span>
                <h1>Ireland Weather Dashboard</h1>
            </div>

            <p className="header-subtitle">
                Real-time weather and 7-day forecast for Ireland locations
            </p>
        </header>
    );
}

export default Header;