import React from 'react';
import useApiData from './useApiData';
import './TvMazeDataList.css';

const TvMazeDataList = ({ TvMazeData }) => {
    const apiData = useApiData( TvMazeData);

    return(
        <div className='TvMazeDataList'>
        {apiData.map((tvMazeRecord) => (
            <div className='card'>
                <img 
                width='250px' 
                height='270px' 
                src={tvMazeRecord.character.image.medium} 
                className='picture' 
                alt={tvMazeRecord.character.name} 
                />
                <div className='text'>
                    <h2>{tvMazeRecord.character.name}</h2>
                </div>
                <div className='info'>
                    <div className='data'>
                        <div className='value'>
                            {tvMazeRecord.person.birthday}
                        </div>
                    </div>
                    <div className='data border'>
                        <div className='value'>{tvMazeRecord.person.country.nama} </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
    );
};

export default TvMazeDataList;