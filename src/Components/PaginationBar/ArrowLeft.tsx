import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { REFRESH_ADDTOPAGE } from '../../types/addToPageTypes';
import { pageActionsTypes } from '../../types/pageTypes';
import './PaginationBar.css';

const ArrowLeft = () => {

    const dispatch = useDispatch();
    const currentPage_ = useTypedSelector(state => state.page);
    const addToPage_ = useTypedSelector(state => state.addToPage);

    if (addToPage_ > 0 || currentPage_ > 5) {
        return (
            <button onClick={() => {
                dispatch({type: REFRESH_ADDTOPAGE, payload: addToPage_ - 5});
                dispatch({type: pageActionsTypes.SELECT_PAGE, payload: addToPage_});
            }}>{'<<'}</button>
        );
    }
    return (
        <button disabled>{'<<'}</button>
    );
}

export default ArrowLeft;