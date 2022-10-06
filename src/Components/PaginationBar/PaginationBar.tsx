import './PaginationBar.css';

type PaginationBarProps = {
    children: React.ReactNode
}

const PaginationBar = ({ children }: PaginationBarProps) => {
    return (
        <section className='pagination_bar'>{children}</section>
    );
}

export default PaginationBar;