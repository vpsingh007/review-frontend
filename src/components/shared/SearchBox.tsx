// import Link from 'next/link';
// import renderHTML from 'react-render-html';
import { useState } from 'react';
// import { listSearch } from '../../services/blog';

interface SearchBoxProps  {
    heading: boolean
}

const SearchBox = ({ heading }: SearchBoxProps) => {
    const [values, setValues] = useState({
        city: undefined,
        search: undefined,
        results: [],
        searched: false,
        message: ''
    });

    // const { city, search, results, searched, message } = values;
    // const { message } = values;

    const searchSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // listSearch({ search }).then((data:any) => {
        //     if(data) {
        //         setValues({ ...values, results: data, searched: true, message: `${data.length} blogs found` });
        //     }
        // })
        // .catch((err: any) => console.log(err));
    };

    const handleChange = (name: string) => (e: { target: { value: any; }; }) => {
        // console.log(e.target.value);
        setValues({ ...values, [name]: e.target.value, searched: false, results: [] });
    };

    // const searchedBlogs = (results = []) => {
    //     return (
    //         <div className="jumbotron bg-white">
    //             {message && <p className="pt-4 text-muted font-italic">{message}</p>}
    //             <datalist id="datalistOptions">
    //             {results.map((blog:any, i) => {
    //                 return (
    //                     <option key={i} value={blog.title}>
    //                     {blog.title}
    //                     </option>                        
    //                 );
    //             })}
    //             </datalist>
                    
    //         </div>
    //     );
    // };

    const searchForm = () => (
        <form onSubmit={searchSubmit} className="mx-auto">
            <div className="row">
                <div className="select col-md-3">
                    <select name='city' className="radius-zero form-select form-select-sm bdr-r-0 h-44" onChange={handleChange('city')} aria-label=".form-select-sm example">
                        <option defaultValue={"city"}>City</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Noida">Noida</option>
                        <option value="Gurugram">Gurugram</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="input col-md-7">
                    <input type='text' name='search' className="radius-zero form-control bdr-r-0 h-44" onChange={handleChange('search')} list="datalistOptions" id="exampleDataList" placeholder="Type your property name..." />
                    <datalist id="datalistOptions">
                    {/* {results.map((blog, i) => {
                        return (
                            <option key={i} value={blog.title}>
                            {blog.title}
                            </option>                        
                        );
                    })} */}
                    </datalist>
                    </div>

                <div className="button col-md-2">
                    <button className="radius-zero btn btn-block text-white bdr-r-0 h-44" type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                        Search
                    </button>
                </div>
            </div>
        </form>
    );

    return (
        <div className="container-fluid search-box-bg">
            {heading && <h2 className='title_color text-center mt-3'>India&lsquo;s largest reviews site</h2> }
            <div className="pt-4 pb-4 search-box mx-auto">{searchForm()}</div>

            <style jsx>{`
                .search-box-bg {
                    background: #f8f9fa;
                }
            `}</style>            
        </div>
    );
};

export default SearchBox;
