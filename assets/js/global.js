/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

/**
 * Add event on multiple elements
 * @param {NodeList} $elements 
 * @param {String} eventType Event type string 
 * @param {Function} callback Callback function
 */


window.addEventOnElements = ($elements, eventType, callback) => {
    for (const $element of $elements) {
        $element.addEventListener(eventType, callback);
    }
}