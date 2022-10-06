import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { REFRESH_ADDTOPAGE } from '../../types/addToPageTypes';
import { pageActionsTypes } from '../../types/pageTypes';
import './PaginationBar.css';

const PreviousPage = () => {

    const dispatch = useDispatch();
    const currentPage_ = useTypedSelector(state => state.page);
    const addToPage_ = useTypedSelector(state => state.addToPage);
    
    const setPreviousPage = () => {
        dispatch({type: pageActionsTypes.PREVIOUS_PAGE, payload: 0});
        if ((currentPage_ - 1) % 5 == 0) {
            dispatch({type: REFRESH_ADDTOPAGE, payload: addToPage_ - 5});
        }
    }

    if (currentPage_ > 1) {
        return (
            <button onClick={setPreviousPage}>{'<'}</button>
        );    
    }
    return (
        <button disabled>{'<'}</button>
    );
}

export default PreviousPage;