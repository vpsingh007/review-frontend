import Link from 'next/link';
import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { listSearch } from '../../actions/blog';

const SearchBox = ({hideBanner}) => {
    const [values, setValues] = useState({
        city: undefined,
        search: undefined,
        results: [],
        searched: false,
        message: ''
    });

    const { city, search, results, searched, message } = values;

    const searchSubmit = e => {
        e.preventDefault();
        listSearch({ search }).then(data => {
            if(data) {
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
                <div className="input col-md-7">
                    <input type='text' name='search' className="form-control bdr-r-0 h-44" onChange={handleChange('search')} list="datalistOptions" id="exampleDataList" placeholder="Type your property name..." />
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
            {!hideBanner && <h2 className='title_color text-center mt-3'>India's largest reviews site</h2> }
            <div className="pt-3 pb-5 search-box mx-auto">{searchForm()}</div>            
        </div>
    );
};

export default SearchBox;
