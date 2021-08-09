import React, { useState, useEffect } from 'react';
import styles from './CountryPicker.module.css';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, SetFetchCountries] = useState([]);
    
    useEffect(()=> {
        const fetchAPI = async () => {
            SetFetchCountries(await fetchCountries());
        }     

        fetchAPI();
    }, [SetFetchCountries]);

    return (
        <div>
            <FormControl className={styles.fromControl}>
                <NativeSelect defaultValue="" onChange={(event) => handleCountryChange(event.target.value)}>
                    <option value="">Global</option>
                    {fetchedCountries.map((country, i) =>
                        <option key={i} value={country}>{country}</option>    
                    )}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
