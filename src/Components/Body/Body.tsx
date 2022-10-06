type BodyProps = {
    children: React.ReactNode
}

const Body = ({ children } : BodyProps) => {
    return (
        <main>
            {children}
        </main>
    );
}

export default Body;