// ==UserScript==
// @name         Pando-five9-number-search
// @namespace    alder_util
// @version      1.1
// @description  Grabes the phone number from the five9 script and then searches it. 
// @author       Jeremy Bloom
// @updateURL    https://github.com/shadow4027/cc-scripts/blob/main/user_scripts/pando_search_five9_number_search.js?raw=true   
// @homepageURL  https://github.com/shadow4027
// @match        https://alder.pandolink.com/customer/search
// @icon         https://www.google.com/s2/favicons?domain=alder.pando.com
// @grant GM.addValueChangeListener
// @grant GM.setValue
// ==/UserScript==

(function() {
    'use strict';

    function setAttributes(el, attrs) {
        for(var key in attrs) {
          el.setAttribute(key, attrs[key]);
        }
      }

      if (document.querySelector("#five9-number-search")) {
          console.log("button exists");
      }
      else{
          let search_button_container = document.querySelector("#search-customer-button").parentElement.parentElement;
          let five0_search_button = document.createElement("button");
          setAttributes(five0_search_button, {"id": "five9-number-search", "class": "btn btn-primary advanced-search-buttons"});
          five0_search_button.innerText = "Phone number search";
          search_button_container.appendChild(five0_search_button);
      }
      
    GM.addValueChangeListener("Five9PhoneNumber", function(name, old_value, new_value, remote) {

        document.querySelector("#PhoneNumber").value = new_value;

    });
})();