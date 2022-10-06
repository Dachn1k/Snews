import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { REFRESH_ADDTOPAGE } from '../../types/addToPageTypes';
import { pageActionsTypes } from '../../types/pageTypes';
import './PaginationBar.css';

const ArrowRight = () => {
    
    const dispatch = useDispatch();
    const addToPage_ = useTypedSelector(state => state.addToPage);

    return (
        <button onClick={() => {
            dispatch({type: REFRESH_ADDTOPAGE, payload: addToPage_ + 5});
            dispatch({type: pageActionsTypes.SELECT_PAGE, payload: addToPage_ + 5 + 1});
        }}>{'>>'}</button>
    );
}

export default ArrowRight;