// import Link from 'next/link';
// import renderHTML from 'react-render-html';
import Router from 'next/router';
import { useState } from 'react';
import { fetchSearchData } from '../../services/propertyAction';
// import { listSearch } from '../../services/blog';

interface SearchBoxProps  {
    heading: boolean
}

const SearchBox = ({ heading }: SearchBoxProps) => {
    const [isSuggestionBoxVisible, setIsSuggestionBoxVisible] = useState(false);
    const [values, setValues] = useState({
        city: undefined,
        search: undefined,
        results: [],
        searched: false,
        message: ''
    });

    const handleChange = async (value: string) => {
        if(value.length > 1) {
            const response = await fetchSearchData(value);
            // console.log("response search", response.property);
            setValues({...values, results: response.property});
            setIsSuggestionBoxVisible(true);
        }
    };

    const searchSubmit = (property) => {
        // console.log("Clicked the property..", property.propertyname)
        Router.push(`/property/${property.slug}`);
        setIsSuggestionBoxVisible(false);
    }

    const searchForm = () => (
        <form onSubmit={searchSubmit} className="mx-auto">
            <div className="row">
                <div className="select col-md-3">
                    <select name='city' className="radius-zero form-select form-select-sm bdr-r-0 h-44" aria-label=".form-select-sm example">
                        <option defaultValue={"city"}>City</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Noida">Noida</option>
                        <option value="Gurugram">Gurugram</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="position-relative input col-md-7">
                    <input type='text' name='search' className="radius-zero form-control bdr-r-0 h-44" onChange={(event) => handleChange(event.target.value)} placeholder="Type your property name..." autoComplete='off' />
                    {isSuggestionBoxVisible && (
                        <div>
                            {values.results.length > 0 ? <ul className="suggestions bg-white">
                            {values.results?.map((property, index) => {
                                console.log("inside map", property);

                                return (
                                    
                                    <li key={index} onClick={() => searchSubmit(property)}>
                                        {property.propertyname}                                        
                                    </li>
                                                           
                                );
                            })}
                        </ul> : (
                            <div className="no-suggestions bg-white">
                                <em>No property found, Please search other property name.</em>
                            </div>
                        )
                    }
                        </div>
                    )}
                    
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
