// ==UserScript==
// @name         Pando-five9-number-search
// @namespace    alder_util
// @version      1.2
// @description  Grabes the phone number from the five9 script and then searches it.
// @author       Jeremy Bloom
// @updateURL    https://github.com/shadow4027/cc-scripts/blob/main/user_scripts/pando_search_five9_number_search.js?raw=true
// @homepageURL  https://github.com/shadow4027
// @match        https://alder.pandolink.com/customer/search
// @icon         https://www.google.com/s2/favicons?domain=alder.pando.com
// @grant GM.addValueChangeListener
// @grant GM.getValue
// @grant GM.setValue
// ==/UserScript==

(function() {
    'use strict';
        unsafeWindow.fill_number_box_search = async function() {
        let phone_number = await GM.getValue("Five9PhoneNumber", null);
        console.log("clicked");
        if (phone_number) {
            document.querySelector("#PhoneNumber").value = phone_number;
            document.querySelector("#search-customer-button").click();
        }
    };

    function setAttributes(el, attrs) {
        for(var key in attrs) {
          el.setAttribute(key, attrs[key]);
        }
      }

      if (document.querySelector("#five9-number-search")) {
          console.log("button exists");
      }
      else{
          let search_button_container = document.querySelector("#search-customer-button").parentElement;
          let five9_search_button = document.createElement("div");
          setAttributes(five9_search_button, {"id": "five9-number-search", "class": "btn btn-primary advanced-search-buttons"});
          five9_search_button.innerText = "five9 search";
          search_button_container.appendChild(five9_search_button);
          document.querySelector("#five9-number-search").addEventListener("click", unsafeWindow.fill_number_box_search);
      }
      //for debugging
      //unsafeWindow.GMsetter = function (value) {GM.setValue("Five9PhoneNumber", value);};
})();