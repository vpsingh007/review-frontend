import { useState, useEffect } from 'react';
import { listSearch } from '../../actions/blog';
import Async from 'react-select/async';
import Router from 'next/router';
const SearchBox = ({ hideBanner }) => {
    const [values, setValues] = useState({
        city: undefined,
        search: undefined,
        results: [],
        searched: false,
        message: ''
    });
    const [query, setQuery] = useState('');
    const[selectedOption,setSelectedOption] = useState('');
    const { city, search, results, searched, message } = values;

    const searchSubmit = e => {
        e.preventDefault();
        listSearch({ search }).then(data => {
            if (data) {
                setValues({ ...values, results: data, searched: true, message: `${data.length} blogs found` });
            }
        })
            .catch(err => console.log(err));
    };

    const handleChange = name => e => {
        // console.log(e.target.value);
        setValues({ ...values, [name]: e.target.value, searched: false, results: [] });
    };

    const searchedBlogs = (results = []) => {
        return (
            <div className="jumbotron bg-white">
                {message && <p className="pt-4 text-muted font-italic">{message}</p>}
                <datalist id="datalistOptions">
                    {results.map((blog, i) => {
                        return (
                            <option key={i} value={blog.title}>
                                {blog.title}
                            </option>
                        );
                    })}
                </datalist>

            </div>
        );
    };
    // api to be changed , debounce to be added
    const loadOptions = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await res.json();
        if (data.meals) {
            return data.meals
        }
        return []

    };

    const onDropdownChange=(item)=>{
        setSelectedOption(item);
        Router.push('/property/'+(item.name||'shipra-apartments'))
    }
    const SearchIcon = props => {
        return (
            <span className="material-symbols-outlined mx-2">
                search
            </span>
        );
    };
    const searchForm = () => (
        <form onSubmit={searchSubmit} className="mx-auto">
            <div className="row">
                <div className="select col-md-3">
                    <select name='city' className="form-select form-select-sm bdr-r-0 h-44" onChange={handleChange('city')} aria-label=".form-select-sm example">
                        <option defaultValue>City</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Noida">Noida</option>
                        <option value="Gurugram">Gurugram</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="col-md-7 p-1">
                    <Async noOptionsMessage={() => 'There are no such properties yet'}
                        onInputChange={(value) => setQuery(value)}
                        loadOptions={loadOptions}
                        getOptionLabel={(e) => e.strMeal}
                        getOptionValue={(e) => e.strMeal}
                        components={{ DropdownIndicator: SearchIcon }}
                        value={selectedOption}
                        onChange={(selectedItem)=>{onDropdownChange(selectedItem)}}
                        instanceId="unique"
                        placeholder="Search the localities/builder or Apartments"
                    />
                </div>

                <div className="button col-md-2">
                    <button className="btn btn-block text-white bdr-r-0 h-44" type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        Search
                    </button>
                </div>
            </div>
        </form>
    );

    return (
        <div className="container-fluid">
            {!hideBanner && <h2 className='title_color text-center mt-3'>India's largest reviews site</h2>}
            <div className="pt-3 pb-5 search-box mx-auto">{searchForm()}</div>
            <style>{`.try{
                height:100px;
            }`}</style>
        </div>
    );
};

export default SearchBox;
