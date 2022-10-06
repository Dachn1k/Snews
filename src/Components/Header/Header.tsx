import './Header.css';

type HeaderProps = {
    children: React.ReactNode
}

const Header = ({children} : HeaderProps) => {
    return (
        <header>
            <div className='logo-title'>
                <div className='logo'></div>
                <h1>Snews</h1>
            </div>
            {children}
        </header>
    );
}

export default Header;