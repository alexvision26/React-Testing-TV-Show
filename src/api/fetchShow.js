import React, { useEffect, useState } from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';

// export const [show, setShow] = useState(null);
// export const [seasons, setSeasons] = useState([]);


export const fetchShow = () => {
    return axios
    .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
        return res;
        // setShow(res.data);
        // setSeasons(formatSeasons(res.data._embedded.episodes));
    }).catch(err => {
        return err;
    })
};
