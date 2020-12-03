import { useState, useEffect } from 'react'
import axios from 'axios';

const useApiData = (tvMazeData) => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        (async (tvMazeData) => {
            const response = await axios.get(
                `https://api.tvmaze.com/shows/${tvMazeData}/cast`
            );
            setApiData(response.Data);
        })(tvMazeData);
    }, [tvMazeData]);

    return apiData;
}

export default useApiData;