/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const /** {String} */ APP_ID = "134b43c8";
const /** {String} */ API_KEY = "91b6a89d4cefb9a69d15e198404f2311";
const /** {String} */ TYPE = "public";

/**
 * @param {Array} queries Query array
 * @param {Function} successCallback Success callback function
 */

export const fetchData = async function (queries, successCallback) {
    const /** {String} */  query = queries
        .map(q => q.join('='))
        .join('&')
        .replace(/ /g, "%20")
        .replace(/\+/g, "%2B");

    const /** {String} */  url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

    try {
        const /** {Object} */  response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            successCallback(data);
        } else {
            console.error(`Error: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
};

