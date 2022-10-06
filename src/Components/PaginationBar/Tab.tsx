import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { pageActionsTypes } from '../../types/pageTypes';
import './PaginationBar.css';

type TabProps = {
    pageNumber: number,
}

const Tab = ({pageNumber}: TabProps) => {

    const dispatch = useDispatch();
    const currentPage_ = useTypedSelector(state => state.page);

    if (pageNumber == currentPage_) {
        return (
            <button style={{backgroundColor: 'rgb(0, 228, 161)', color: 'white'}} onClick={() => {
                dispatch({type: pageActionsTypes.SELECT_PAGE, payload: pageNumber});
            }}>{pageNumber}</button>
        )
    }
    return (
        <button onClick={() => {
            dispatch({type: pageActionsTypes.SELECT_PAGE, payload: pageNumber});
        }}>{pageNumber}</button>
    )
}

export default Tab;