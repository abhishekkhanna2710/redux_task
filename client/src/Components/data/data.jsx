import React, { useState, useEffect } from 'react';

const Data = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    const fetchData = () => {
        setIsLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/comments?_page=${pageNumber}&_limit=80`)
            .then((res) => res.json())
            .then((newData) => {
                setData((prevData) => [...prevData, ...newData]);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [pageNumber]);

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollHeight - scrollTop === clientHeight && !isLoading) {
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {data.map((e) => (
                <div key={e.id}>
                    <p>{e.id}</p>
                    <h4>{e.name}</h4>
                    <h5>{e.email}</h5>
                    <p>{e.body}</p>
                </div>
            ))}
            {isLoading && <p>Loading...</p>}
        </div>
    );
};

export default Data;
