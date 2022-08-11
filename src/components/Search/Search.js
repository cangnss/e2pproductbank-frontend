import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import "./Search.css"
import { useProducts } from '../../context';

const Search = () => {
    
    return (
        <section className='search' id='search'>
            <div className='search-items'>
                <TextField type="text" placeholder='Ürün ara...' size='small' sx={{ width: "20rem"}}></TextField>
            </div>    
        </section>
    );
}

export default Search;