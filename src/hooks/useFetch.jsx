import { useEffect, useState } from "react"; // Importing necessary hooks from React
import { fetchDataFromApi } from "../utils/api"; // Importing the function to fetch data from the API

// Custom hook for fetching data from an API
const useFetch = (url) => {
    // State variables to hold data, loading state, and error state
    const [data, setData] = useState(null); // Initialize data state to null
    const [loading, setLoading] = useState(null); // Initialize loading state to null
    const [error, setError] = useState(null); // Initialize error state to null

    // Effect hook to fetch data when the URL changes
    useEffect(() => {
        setLoading("loading..."); // Set loading state to indicate data is being fetched
        setData(null); // Reset data state
        setError(null); // Reset error state

        // Fetch data from the API using the provided URL
        fetchDataFromApi(url)
            .then((res) => {
                setLoading(false); // Set loading state to false when data is successfully fetched
                setData(res); // Set data state with the fetched data
            })
            .catch((err) => {
                setLoading(false); // Set loading state to false in case of an error
                setError("Something went wrong!"); // Set error state with a generic error message
            });
    }, [url]); // Dependency array ensures the effect runs when the URL changes

    // Return an object containing data, loading state, and error state
    return { data, loading, error };
};

export default useFetch; // Export the custom hook for use in other components
