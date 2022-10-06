import { useDispatch } from 'react-redux';
import { GET_INPUT_VALUE } from '../../types/inputValueTypes';
import './Header.css';

const Search = () => {
    
    const dispatch = useDispatch();

    const getValue = (e: any) => {
        dispatch({type: GET_INPUT_VALUE, payload: e.target.value});
    }

    return (
        <div className="search">
            <input type="text" placeholder='Search...' onChange={getValue}/>
            <div>
                <div className='search_icon'></div>
            </div>
        </div>
    )
}

export default Search;