import React, { useState, useEffect } from 'react'
import ApiHelper from '../Api/ApiHelper';
import Header from '../Components/Header';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const { getData } = ApiHelper();
    const [data, setData] = useState([]);

    const getDetails = async () => {
        try {
            const method = "get";
            const Response = await getData(method);
            var Data = Response.data;
            setData(Data);
            console.log(Data);
        } catch (e) {
            console.log(e);
        }


    };

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <div className='w-[100%] h-[100%] pb-10 flex flex-col items-center gap-[50px] bg-yellow-100 '>
            <Header />
            <div className='w-[95%] flex flex-col items-center gap-[16px]'>
                <h1 className='text-[30px] text-yellow-700 font-semibold'>Show Details</h1>
                <div class="flex flex-col w-full p-2 bg-white rounded-xl border-yellow-400 border-4">
                    <div class="-m-1.5 overflow-x-auto rounded-xl border-yellow-400 shadow-yellow-400 shadow-sm">
                        <div class="p-1 min-w-full inline-block align-middle">
                            <div class="overflow-hidden">
                                <table class="min-w-full divide-y divide-yellow-200 dark:divide-yellow-700 border border-yellow-900">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-start text-lg font-bold text-gray-500 uppercase">Sr. No.</th>
                                            <th scope="col" class="px-6 py-3 text-start text-lg font-bold text-gray-500 uppercase">URL</th>
                                            <th scope="col" class="px-6 py-3 text-start text-lg font-bold text-gray-500 uppercase">Name</th>
                                            <th scope="col" class="px-6 py-3 text-start text-lg font-bold text-gray-500 uppercase">Genres</th>
                                            <th scope="col" class="px-6 py-3 text-start text-lg font-bold text-gray-500 uppercase">Language</th>
                                            <th scope="col" class="px-6 py-3 text-end text-lg font-bold text-gray-500 uppercase">Summary</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-yellow-200 dark:divide-yellow-700">
                                        {data.map((d, i) => (
                                            <tr key={i} class="hover:bg-yellow-300 hover:font-bold font-semibold">
                                                <td class="px-6 py-4 whitespace-nowrap text-base text-gray-800 ">{i + 1}</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-base text-gray-800 ">
                                                    <a href={d.show.url} target="_blank"className="text-blue-500 truncate inline-block max-w-52">
                                                        {d.show.url}
                                                    </a>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-base text-gray-800 ">{d.show.name}</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-base text-gray-800 ">{d.show.genres}</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-base text-gray-800 ">{d.show.language}</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-base font-medium">
                                                    <NavLink to={`summary/${d.show.id}`} className="btn">View</NavLink>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home