// ==UserScript==
// @name         Pando-five9-number-search
// @namespace    alder_util
// @version      1.0
// @description  Grabes the phone number from the five9 script and then searches it. 
// @author       Jeremy Bloom
// @updateURL    https://github.com/shadow4027/cc-scripts/blob/main/user_scripts/pando_search_five9_number_search.js?raw=true   
// @homepageURL  https://github.com/shadow4027
// @match        https://alder.pandolink.com/customer/search
// @icon         https://www.google.com/s2/favicons?domain=alder.pando.com
// @grant GM_addValueChangeListener
// @grant GM-setValue
// ==/UserScript==

(function() {
    'use strict';

    // function setAttributes(el, attrs) {
    //     for(var key in attrs) {
    //       el.setAttribute(key, attrs[key]);
    //     }
    //   }
    window.pando_test_function = function (stringly) {
        return GM_setValue(stringly, false);
    }
    GM_addValueChangeListener("Five9PhoneNumber", function(name, old_value, new_value, remote) {
        // button nonsense. Don't worry about a thing. 
        // if (document.querySelector("#five9-number-search")) {
        //     console.log("button exists");
        // }
        // else{
        //     let search_button_container = document.querySelector("#search-customer-button").parentElement;
        //     let five0_search_button = document.createElement("button");
        //     setAttributes(five0_search_button, {"id": "five9-number-search", "class": "btn btn-primary advanced-search-buttons"});
        //     five0_search_button.innerText = "Phone number search";
        //     search_button_container.appendChild(five0_search_button);
        // }
        document.querySelector("#PhoneNumber").value = new_value;

    });
    
})();