import { useEffect, useState } from "react";
import React from "react";
import yelp from "../api/yelp";
 export default () =>{
    const [results, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    const searchAPI = async (searchTerm) => {
      try {
        const response = await yelp.get('/search', {
          params: {
            limit: 50,
            term: searchTerm,
            location: 'jan jose'
          }
        });
        setResult(response.data.businesses);
      } catch (error) {
        setErrorMessage('Some thing went wrong');
      }
    }
    useEffect(() => {
      searchAPI('bun bo')
    }, []);
     return [searchAPI, results, errorMessage]
 }