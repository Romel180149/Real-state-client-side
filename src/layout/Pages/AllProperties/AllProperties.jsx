
import PropertyCard from "../../Shared/PropertyCard/PropertyCard";
import CommonHeading from "../../Shared/CommonHeading/CommonHeading";
import useProperty from "../../../hooks/useProperty";
import { useState } from "react";
import { Helmet } from "react-helmet";

const AllProperties = () => {
    const [allProperties] = useProperty();
    const [verifiedProperties, setVerifiedProperties] = useState(
        allProperties.filter((property) => property.verification_status === 'Verified')
    );
    // const [searchText, setSearchText] = useState('');
    // const [sortValue, setSortValue] = useState('');

    // Search condition
    const handleSearch = (e) => {
        const searchText = e.target.value;
        // setSearchText(searchText);

        // Update verifiedProperties based on the search text
        if (searchText !== '' && searchText !== 'all') {
            const filteredProperties = allProperties.filter((data) => {
                const titleMatches = data.Property_title.toLowerCase().includes(searchText.toLowerCase());
                return titleMatches;
            });
            setVerifiedProperties(filteredProperties);
        } else {
            setVerifiedProperties(allProperties.filter((property) => property.verification_status === 'Verified'));
        }
    };

    // Sort condition
    const handleSort = (e) => {
        const selectedSortValue = e.target.value;
        // setSortValue(selectedSortValue);

        // Sort verifiedProperties based on the selected option
        let sortedProperties = verifiedProperties.slice();
        if (selectedSortValue === 'descending') {
            sortedProperties = sortedProperties.sort((a, b) => b.Max_price - a.Max_price);
        } else if (selectedSortValue === 'ascending') {
            sortedProperties = sortedProperties.sort((a, b) => a.Min_price - b.Min_price);
        }

        setVerifiedProperties(sortedProperties);
    };

    return (
        <>
            <Helmet>
                <title>Bery | All Properties</title>
            </Helmet>
            <div className="hero h-[513px]" style={{ backgroundImage: 'url(https://i.ibb.co/5YrgV3F/bg-1.png)' }}>
                <div className="hero-overlay bg-black bg-opacity-70"></div>
                <div className="hero-content text-center text-white -content">
                    <div className="max-w-[600px]">
                        <p className="karla-font text-[18px]">Our Properties</p>
                        <h1 className="mb-5 text-[68px] font-semibold lora-font">All of our properties</h1>
                        <p className="mb-5 px-[74px] karla-font text-[18px]">Huge number of propreties availabe here for buy and sell also you can find here co-living property as you like</p>
                    </div>
                </div>
            </div>
            <div className="mb-[120px] mt-[60px]">
                <CommonHeading
                    subHeading={'Admin Verified'}
                    heading={'All Properties'}
                ></CommonHeading>
                {/* Search and sort section */}
                <div className="max-w-[600px] mx-auto mb-[80px] px-5 md:px-0">
                    <form >
                        <div className="flex">
                            <ul>
                                <select
                                    className="flex-nowrap min-w-[120px] z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
                                    name="sortBy"
                                    onChange={handleSort}
                                >
                                    <option value="sort">Sort By Price</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending </option>
                                </select>
                            </ul>
                            <div className="relative w-full rounded-lg">
                                <input
                                    name="search"
                                    type="search"
                                    id="search-dropdown"
                                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-r-lg"
                                    placeholder="Search by Property title"
                                    onChange={handleSearch}
                                />
                                <button
                                    type="submit"
                                    className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#b39359] rounded-r-lg border border-[#b39359] hover:bg-[#0b2c3d] focus:ring-4 focus:outline-none">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="max-w-[1320px] mx-auto grid grid-cols-1  md:grid-cols-3 justify-between gap-10 px-5 md:px-0">
                    {
                        verifiedProperties.map(property => (
                            <PropertyCard
                                key={property._id}
                                PropertyInfo={property}
                            ></PropertyCard>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default AllProperties;