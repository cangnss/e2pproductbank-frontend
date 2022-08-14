import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import "./Search.css"
import { useProducts } from '../../context';
import { useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState();
    
    return (
        <section className='search' id='search' style={{ marginBottom:"2rem"}}>
            <div className='search-items'>
                <TextField type="text" placeholder='Ürün ara...' size='small' sx={{ width: "20rem"}} onChange={(e)=>{ setSearch(e.target.value)}}></TextField>
            </div>    
        </section>
    );
}

export default Search;