import Layout from '../components/Layout'
import Link from 'next/link'
import Head from 'next/head'
import SearchBox from '../components/shared/SearchBox';
import RecentlyAddedReviews from '../components/reviews/RecentlyAddedReviews';
import Button from 'react-bootstrap/Button'
import PopupContext from '../components/context/popupContext';
import { useContext } from 'react';
import PropertyHomePage from '../components/property/PropertyHomePage';
import { addProperty } from '../actions/propertyAction';
import { getCookie, isAuth } from '../actions/auth';
import { listAllProperties } from '../actions/propertyAction';
const Index = ({properties}) => {
    // console.log(properties);
    const value = useContext(PopupContext);
    const { setIsPopupOpen, setPopupData } = value;
    const submitProperty = (values) => {
        const token = getCookie('token');
        const { propertyName, sector, city } = values;
        const property = { propertyname: propertyName, sector, city };
        addProperty(property, token).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data)
            }
        });
    }
    const createPopup = () => {
        const popupdata = {
            heading: "Add Property",
            onSubmit: (values) => { submitProperty(values) },
            buttons: ['Close', 'Add Property'],
            formData: [{ fieldHeading: 'Property Type', fieldName: 'propertyType', fieldType: 'dropdown', options: [{ name: 'Outdoor', value: 'outdoor' }, { name: 'Flats', value: 'flats' }], initialValue: '' },
            { fieldHeading: 'Property Name', fieldName: 'propertyName', fieldType: 'text', initialValue: '' },
            { fieldHeading: 'Sector', fieldName: 'sector', fieldType: 'text', initialValue: '' },
            { fieldHeading: 'City', fieldName: 'city', fieldType: 'text', initialValue: '' },
            { fieldHeading: 'State', fieldName: 'state', fieldType: 'dropdown', initialValue: '', options: stateOptions }]
        }
        setPopupData(popupdata)
        setIsPopupOpen(true);
    }
    return (
        <div>
            <Head>
                <title>India's Largest Review Site</title>
            </Head>
            <Layout>
                <SearchBox />
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                        <a href="/properties/ace-city"><h2 class="pt-3 pb-3 font-weight-bold">Ace City</h2></a>
                        <a href="/properties/trident-embassy"><h2 class="pt-3 pb-3 font-weight-bold">trident-embassy </h2></a>
                        <a href="/properties/supertech"><h2 class="pt-3 pb-3 font-weight-bold">supertech </h2></a>
                            {isAuth() && <Button onClick={createPopup} variant="primary">Add a Property</Button>}
                            <PropertyHomePage allProperties={properties} />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

const stateOptions = [
    {
        "value": "Andaman & Nicobar",
        "name": "Andaman & Nicobar"
    },
    {
        "value": "Andhra Pradesh",
        "name": "Andhra Pradesh"
    },
    {
        "value": "Arunachal Pradesh",
        "name": "Arunachal Pradesh"
    },
    {
        "value": "Assam",
        "name": "Assam"
    },
    {
        "value": "Bihar",
        "name": "Bihar"
    },
    {
        "value": "Chandigarh",
        "name": "Chandigarh"
    },
    {
        "value": "Chhattisgarh",
        "name": "Chhattisgarh"
    },
    {
        "value": "Dadra & Nagar Haveli",
        "name": "Dadra & Nagar Haveli"
    },
    {
        "value": "Daman & Diu",
        "name": "Daman & Diu"
    },
    {
        "value": "Delhi",
        "name": "Delhi"
    },
    {
        "value": "Goa",
        "name": "Goa"
    },
    {
        "value": "Gujarat",
        "name": "Gujarat"
    },
    {
        "value": "Haryana",
        "name": "Haryana"
    },
    {
        "value": "Himachal Pradesh",
        "name": "Himachal Pradesh"
    },
    {
        "value": "Jammu & Kashmir",
        "name": "Jammu & Kashmir"
    },
    {
        "value": "Jharkhand",
        "name": "Jharkhand"
    },
    {
        "value": "Karnataka",
        "name": "Karnataka"
    },
    {
        "value": "Kerala",
        "name": "Kerala"
    },
    {
        "value": "Lakshadweep",
        "name": "Lakshadweep"
    },
    {
        "value": "Madhya Pradesh",
        "name": "Madhya Pradesh"
    },
    {
        "value": "Maharashtra",
        "name": "Maharashtra"
    },
    {
        "value": "Manipur",
        "name": "Manipur"
    },
    {
        "value": "Meghalaya",
        "name": "Meghalaya"
    },
    {
        "value": "Mizoram",
        "name": "Mizoram"
    },
    {
        "value": "Nagaland",
        "name": "Nagaland"
    },
    {
        "value": "Orissa",
        "name": "Orissa"
    },
    {
        "value": "Pondicherry",
        "name": "Pondicherry"
    },
    {
        "value": "Punjab",
        "name": "Punjab"
    },
    {
        "value": "Rajasthan",
        "name": "Rajasthan"
    },
    {
        "value": "Sikkim",
        "name": "Sikkim"
    },
    {
        "value": "Tamil Nadu",
        "name": "Tamil Nadu"
    },
    {
        "value": "Tripura",
        "name": "Tripura"
    },
    {
        "value": "Uttar Pradesh",
        "name": "Uttar Pradesh"
    },
    {
        "value": "Uttaranchal",
        "name": "Uttaranchal"
    },
    {
        "value": "West Bengal",
        "name": "West Bengal"
    }
]

export default Index
Index.getInitialProps = () => {
    let skip = 0;
    let limit = 2;
    return listAllProperties(skip, limit).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                properties: data
            };
        }
    });
};