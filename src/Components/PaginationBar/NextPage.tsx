import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { REFRESH_ADDTOPAGE } from '../../types/addToPageTypes';
import { pageActionsTypes } from '../../types/pageTypes';
import './PaginationBar.css';

const NextPage = () => {

    const dispatch = useDispatch();
    const currentPage_ = useTypedSelector(state => state.page);
    const addToPage_ = useTypedSelector(state => state.addToPage);

    const setNextPage = () => {
        dispatch({type: pageActionsTypes.NEXT_PAGE, payload: 0});
        if (currentPage_ % 5 == 0) {
            dispatch({type: REFRESH_ADDTOPAGE, payload: addToPage_ + 5});
        }
    }

    return (
        <button onClick={setNextPage}>{'>'}</button>
    );
}

export default NextPage;