import { AutoComplete, Button } from "antd";
import { useState } from "react";

const TypeAhead = ({onSelect, defaultValue}) => {
    const [options, setOptions] = useState([]);

    const getMovieList = async (query) => {
        if (!query) return;
        try {
            const data = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=9a3cb9dfa9766a01f14b910fa0f1ac4a&language=en-US&include_adult=false&query=${query}`,
                {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const response = await data.json();
            const optionsData = response?.results?.map((movie) => ({ value: movie?.title, label: movie?.title }));
            setOptions(optionsData);
            console.log(response?.results, "optionsData", optionsData);

        } catch (error) {
            console.error(error);
        }
    };

    // const debounce = (func, wait) => {
    //   let timeout;
    //   return function executedFunction(...args) {
    //     const later = () => {
    //       clearTimeout(timeout);
    //       func(...args);
    //     };

    //     clearTimeout(timeout);
    //     timeout = setTimeout(later, wait);
    //   };
    // };

    const debounce = (func, delay) => {
        let debounceTimer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    };
    const handleSearch = debounce((value) => getMovieList(value), 500);

    // const onSelect = (value) => {
    //     console.log("select val",value)
    // }

    return (
        <>
            <AutoComplete
                style={{
                    width: 200,
                }}
                onSearch={handleSearch}
                placeholder="input here"
                options={options}
                onSelect={onSelect}
                defaultValue={defaultValue}
            />
        </>
    );
};
export default TypeAhead;
