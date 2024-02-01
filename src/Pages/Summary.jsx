import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiHelper from '../Api/ApiHelper';
import Header from '../Components/Header';

const Summary = () => {
    const { id } = useParams();
    const [summary, setSummary] = useState(null); // Initialize summary state as null

    const { getData } = ApiHelper();
    const [data, setData] = useState([]);

    const getDetails = async () => {
        try {
            const method = "get";
            const response = await getData(method);
            const responseData = response.data;
            setData(responseData);
            console.log(responseData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDetails(); // Fetch data when component mounts
    }, []);

    useEffect(() => {
        // Update summary state after data is fetched
        if (data.length > 0 && id) {
            const ID = parseInt(id);
            const sData = data.find(item => item.show.id === ID);
            setSummary(sData);
        }
    }, [data, id]); // Execute when data or id changes

    console.log(summary);

    const htmlText = `${summary ? summary.show.summary : "Loading..."}`;

    return (
        <div className='h-[100%] flex flex-col items-center justify-between gap-10 pb-4'>
            <Header />
            {(summary && summary.show.image) ? <img className='w-[225px] rounded-lg' src={summary.show.image.original}/> : ""}
            <div className='w-[100%] h-auto pb-10 flex flex-col items-center gap-[50px]'>
                <h1 className='text-3xl font-semibold text-yellow-700'>Summary || {summary ? summary.show.name : "Loading..."}</h1>
                <div className="text-[20px] w-[80%] text-justify bg-yellow-50 p-5 rounded-xl border-4 shadow-yellow-300 shadow-xl border-yellow-400" dangerouslySetInnerHTML={{ __html: htmlText }} />
            </div>
        </div>
    );
};

export default Summary;
