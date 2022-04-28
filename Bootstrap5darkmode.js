/*
 * Bootstrap5darkmode.js
 * v0.0.1
 * https://github.com/DaulerPalhares/bootstrap-5-DarkMode/
 * GNU General Public License v3.0
 */

var DarkModeSwitcher = (function () {

  //--Variables for configuration--//
  let SwicherID = 'lightSwitch';
  let FaSunIconClass = 'fa-sun-o'
  let FaMoonIconClass = 'fa-moon-o'

  //Search in the element for the buttom/link to be used as switch
  let lightSwitch = document.getElementById(SwicherID);

  if (!lightSwitch) {
    throw new Error('Required an element with ID:' + SwicherID);
    return;
  }

  /**
   * @function toggleIcon
   * @summary: toggle between the sun and the moon icon
   */
  function toggleIcon() {
    lightSwitch.firstChild.classList.toggle(FaMoonIconClass);
    lightSwitch.firstChild.classList.toggle(FaSunIcon);
  }

  /**
   * @function darkmode
   * @summary: changes the theme to 'dark mode' and save settings to local stroage.
   * Basically, replaces/toggles every CSS class that has '-light' class with '-dark'
   */
  function darkMode() {
    toggleIcon();

    //find all elements that contains -light
    document.querySelectorAll("[class*='-light']").forEach((element) => {
      element.className = element.className.replace(/-light/g, "-dark");
    });
    document.body.classList.add("bg-dark");

    //Changes the text-color
    if (document.body.classList.contains("text-dark")) {
      document.body.classList.replace("text-dark", "text-light");
    } else {
      document.body.classList.add("text-light");
    }

    // Tables
    var tables = document.querySelectorAll("table");
    for (var i = 0; i < tables.length; i++) {
      // add table-dark class to each table
      tables[i].classList.add("table-dark");
    }

    ChangeBlueColorsDark();
    ChangeIndigoColorsDark();
    ChangePurpleColorsDark();
    ChangePinkColorsDark();
    ChangeRedColorsDark();
    ChangeOrangeColorsDark();
    ChangeYellowColorsDark();
    ChangeGreenColorsDark();
    ChangeTealColorsDark();
    ChangeCyanColorsDark();
    ChangeGrayColorsDark();

    //Save in the localstorage for loading the page
    localStorage.setItem(SwicherID, "dark");
  }

  function ChangeBlueColorsDark() {
    document.querySelectorAll("[class*='blue-100']").forEach((element) => {
      element.className = element.className.replace(/blue-100/g, "blue-900");
    });
    document.querySelectorAll("[class*='blue-200']").forEach((element) => {
      element.className = element.className.replace(/blue-200/g, "blue-800");
    });
    document.querySelectorAll("[class*='blue-300']").forEach((element) => {
      element.className = element.className.replace(/blue-300/g, "blue-700");
    });
    document.querySelectorAll("[class*='blue-400']").forEach((element) => {
      element.className = element.className.replace(/blue-400/g, "blue-600");
    });
  }

  function ChangeIndigoColorsDark() {
    document.querySelectorAll("[class*='indigo-100']").forEach((element) => {
      element.className = element.className.replace(/indigo-100/g, "indigo-900");
    });
    document.querySelectorAll("[class*='indigo-200']").forEach((element) => {
      element.className = element.className.replace(/indigo-200/g, "indigo-800");
    });
    document.querySelectorAll("[class*='indigo-300']").forEach((element) => {
      element.className = element.className.replace(/indigo-300/g, "indigo-700");
    });
    document.querySelectorAll("[class*='indigo-400']").forEach((element) => {
      element.className = element.className.replace(/indigo-400/g, "indigo-600");
    });
  }

  function ChangePurpleColorsDark() {
    document.querySelectorAll("[class*='purple-100']").forEach((element) => {
      element.className = element.className.replace(/purple-100/g, "purple-900");
    });
    document.querySelectorAll("[class*='purple-200']").forEach((element) => {
      element.className = element.className.replace(/purple-200/g, "purple-800");
    });
    document.querySelectorAll("[class*='purple-300']").forEach((element) => {
      element.className = element.className.replace(/purple-300/g, "purple-700");
    });
    document.querySelectorAll("[class*='purple-400']").forEach((element) => {
      element.className = element.className.replace(/purple-400/g, "purple-600");
    });
  }

  function ChangePinkColorsDark() {
    document.querySelectorAll("[class*='pink-100']").forEach((element) => {
      element.className = element.className.replace(/pink-100/g, "pink-900");
    });
    document.querySelectorAll("[class*='pink-200']").forEach((element) => {
      element.className = element.className.replace(/pink-200/g, "pink-800");
    });
    document.querySelectorAll("[class*='pink-300']").forEach((element) => {
      element.className = element.className.replace(/pink-300/g, "pink-700");
    });
    document.querySelectorAll("[class*='pink-400']").forEach((element) => {
      element.className = element.className.replace(/pink-400/g, "pink-600");
    });
  }

  function ChangeRedColorsDark() {
    document.querySelectorAll("[class*='red-100']").forEach((element) => {
      element.className = element.className.replace(/red-100/g, "red-900");
    });
    document.querySelectorAll("[class*='red-200']").forEach((element) => {
      element.className = element.className.replace(/red-200/g, "red-800");
    });
    document.querySelectorAll("[class*='red-300']").forEach((element) => {
      element.className = element.className.replace(/red-300/g, "red-700");
    });
    document.querySelectorAll("[class*='red-400']").forEach((element) => {
      element.className = element.className.replace(/red-400/g, "red-600");
    });
  }

  function ChangeOrangeColorsDark() {
    document.querySelectorAll("[class*='orange-100']").forEach((element) => {
      element.className = element.className.replace(/orange-100/g, "orange-900");
    });
    document.querySelectorAll("[class*='orange-200']").forEach((element) => {
      element.className = element.className.replace(/orange-200/g, "orange-800");
    });
    document.querySelectorAll("[class*='orange-300']").forEach((element) => {
      element.className = element.className.replace(/orange-300/g, "orange-700");
    });
    document.querySelectorAll("[class*='orange-400']").forEach((element) => {
      element.className = element.className.replace(/orange-400/g, "orange-600");
    });
  }

  function ChangeYellowColorsDark() {
    document.querySelectorAll("[class*='yellow-100']").forEach((element) => {
      element.className = element.className.replace(/yellow-100/g, "yellow-900");
    });
    document.querySelectorAll("[class*='yellow-200']").forEach((element) => {
      element.className = element.className.replace(/yellow-200/g, "yellow-800");
    });
    document.querySelectorAll("[class*='yellow-300']").forEach((element) => {
      element.className = element.className.replace(/yellow-300/g, "yellow-700");
    });
    document.querySelectorAll("[class*='yellow-400']").forEach((element) => {
      element.className = element.className.replace(/yellow-400/g, "yellow-600");
    });
  }

  function ChangeGreenColorsDark() {
    document.querySelectorAll("[class*='green-100']").forEach((element) => {
      element.className = element.className.replace(/green-100/g, "green-900");
    });
    document.querySelectorAll("[class*='green-200']").forEach((element) => {
      element.className = element.className.replace(/green-200/g, "green-800");
    });
    document.querySelectorAll("[class*='green-300']").forEach((element) => {
      element.className = element.className.replace(/green-300/g, "green-700");
    });
    document.querySelectorAll("[class*='green-400']").forEach((element) => {
      element.className = element.className.replace(/green-400/g, "green-600");
    });
  }

  function ChangeTealColorsDark() {
    document.querySelectorAll("[class*='teal-100']").forEach((element) => {
      element.className = element.className.replace(/teal-100/g, "teal-900");
    });
    document.querySelectorAll("[class*='teal-200']").forEach((element) => {
      element.className = element.className.replace(/teal-200/g, "teal-800");
    });
    document.querySelectorAll("[class*='teal-300']").forEach((element) => {
      element.className = element.className.replace(/teal-300/g, "teal-700");
    });
    document.querySelectorAll("[class*='teal-400']").forEach((element) => {
      element.className = element.className.replace(/teal-400/g, "teal-600");
    });
  }

  function ChangeCyanColorsDark() {
    document.querySelectorAll("[class*='cyan-100']").forEach((element) => {
      element.className = element.className.replace(/cyan-100/g, "cyan-900");
    });
    document.querySelectorAll("[class*='cyan-200']").forEach((element) => {
      element.className = element.className.replace(/cyan-200/g, "cyan-800");
    });
    document.querySelectorAll("[class*='cyan-300']").forEach((element) => {
      element.className = element.className.replace(/cyan-300/g, "cyan-700");
    });
    document.querySelectorAll("[class*='cyan-400']").forEach((element) => {
      element.className = element.className.replace(/cyan-400/g, "cyan-600");
    });
  }

  function ChangeGrayColorsDark() {
    document.querySelectorAll("[class*='gray-100']").forEach((element) => {
      element.className = element.className.replace(/gray-100/g, "gray-900");
    });
    document.querySelectorAll("[class*='gray-200']").forEach((element) => {
      element.className = element.className.replace(/gray-200/g, "gray-800");
    });
    document.querySelectorAll("[class*='gray-300']").forEach((element) => {
      element.className = element.className.replace(/gray-300/g, "gray-700");
    });
    document.querySelectorAll("[class*='gray-400']").forEach((element) => {
      element.className = element.className.replace(/gray-400/g, "gray-600");
    });
  }

  /**
   * @function lightmode
   * @summary: changes the theme to 'light mode' and save settings to local stroage.
   */
  function lightMode() {
    toggleIcon();

    document.querySelectorAll("[class*='-dark']").forEach((element) => {
      element.className = element.className.replace(/-dark/g, "-light");
    });

    document.body.classList.add("bg-light");

    if (document.body.classList.contains("text-light")) {
      document.body.classList.replace("text-light", "text-dark");
    } else {
      document.body.classList.add("text-dark");
    }

    // Tables
    var tables = document.querySelectorAll("table");
    for (var i = 0; i < tables.length; i++) {
      if (tables[i].classList.contains("table-dark")) {
        tables[i].classList.remove("table-dark");
      }
    }

    ChangeBlueColorsLight();
    ChangeIndigoColorsLight();
    ChangePurpleColorsLight();
    ChangePinkColorsLight();
    ChangeRedColorsLight();
    ChangeOrangeColorsLight();
    ChangeYellowColorsLight();
    ChangeGreenColorsLight();
    ChangeTealColorsLight();
    ChangeCyanColorsLight();
    ChangeGrayColorsLight();

    localStorage.setItem(SwicherID, "light");
  }

  function ChangeBlueColorsLight() {
    document.querySelectorAll("[class*='blue-900']").forEach((element) => {
      element.className = element.className.replace(/blue-900/g, "blue-100");
    });
    document.querySelectorAll("[class*='blue-800']").forEach((element) => {
      element.className = element.className.replace(/blue-800/g, "blue-200");
    });
    document.querySelectorAll("[class*='blue-700']").forEach((element) => {
      element.className = element.className.replace(/blue-700/g, "blue-300");
    });
    document.querySelectorAll("[class*='blue-600']").forEach((element) => {
      element.className = element.className.replace(/blue-600/g, "blue-400");
    });
  }

  function ChangeIndigoColorsLight() {
    document.querySelectorAll("[class*='indigo-900']").forEach((element) => {
      element.className = element.className.replace(/indigo-900/g, "indigo-100");
    });
    document.querySelectorAll("[class*='indigo-800']").forEach((element) => {
      element.className = element.className.replace(/indigo-800/g, "indigo-200");
    });
    document.querySelectorAll("[class*='indigo-700']").forEach((element) => {
      element.className = element.className.replace(/indigo-700/g, "indigo-300");
    });
    document.querySelectorAll("[class*='indigo-600']").forEach((element) => {
      element.className = element.className.replace(/indigo-600/g, "indigo-400");
    });
  }

  function ChangePurpleColorsLight() {
    document.querySelectorAll("[class*='purple-900']").forEach((element) => {
      element.className = element.className.replace(/purple-900/g, "purple-100");
    });
    document.querySelectorAll("[class*='purple-800']").forEach((element) => {
      element.className = element.className.replace(/purple-800/g, "purple-200");
    });
    document.querySelectorAll("[class*='purple-700']").forEach((element) => {
      element.className = element.className.replace(/purple-700/g, "purple-300");
    });
    document.querySelectorAll("[class*='purple-600']").forEach((element) => {
      element.className = element.className.replace(/purple-600/g, "purple-400");
    });
  }

  function ChangePinkColorsLight() {
    document.querySelectorAll("[class*='pink-900']").forEach((element) => {
      element.className = element.className.replace(/pink-900/g, "pink-100");
    });
    document.querySelectorAll("[class*='pink-800']").forEach((element) => {
      element.className = element.className.replace(/pink-800/g, "pink-200");
    });
    document.querySelectorAll("[class*='pink-700']").forEach((element) => {
      element.className = element.className.replace(/pink-700/g, "pink-300");
    });
    document.querySelectorAll("[class*='pink-600']").forEach((element) => {
      element.className = element.className.replace(/pink-600/g, "pink-400");
    });
  }

  function ChangeRedColorsLight() {
    document.querySelectorAll("[class*='red-900']").forEach((element) => {
      element.className = element.className.replace(/red-900/g, "red-100");
    });
    document.querySelectorAll("[class*='red-200']").forEach((element) => {
      element.className = element.className.replace(/red-200/g, "red-800");
    });
    document.querySelectorAll("[class*='red-300']").forEach((element) => {
      element.className = element.className.replace(/red-300/g, "red-700");
    });
    document.querySelectorAll("[class*='red-400']").forEach((element) => {
      element.className = element.className.replace(/red-400/g, "red-600");
    });
  }

  function ChangeOrangeColorsLight() {
    document.querySelectorAll("[class*='orange-900']").forEach((element) => {
      element.className = element.className.replace(/orange-900/g, "orange-100");
    });
    document.querySelectorAll("[class*='orange-800']").forEach((element) => {
      element.className = element.className.replace(/orange-800/g, "orange-200");
    });
    document.querySelectorAll("[class*='orange-700']").forEach((element) => {
      element.className = element.className.replace(/orange-700/g, "orange-300");
    });
    document.querySelectorAll("[class*='orange-600']").forEach((element) => {
      element.className = element.className.replace(/orange-600/g, "orange-400");
    });
  }

  function ChangeYellowColorsLight() {
    document.querySelectorAll("[class*='yellow-900']").forEach((element) => {
      element.className = element.className.replace(/yellow-900/g, "yellow-100");
    });
    document.querySelectorAll("[class*='yellow-800']").forEach((element) => {
      element.className = element.className.replace(/yellow-800/g, "yellow-200");
    });
    document.querySelectorAll("[class*='yellow-700']").forEach((element) => {
      element.className = element.className.replace(/yellow-700/g, "yellow-300");
    });
    document.querySelectorAll("[class*='yellow-600']").forEach((element) => {
      element.className = element.className.replace(/yellow-600/g, "yellow-400");
    });
  }

  function ChangeGreenColorsLight() {
    document.querySelectorAll("[class*='green-900']").forEach((element) => {
      element.className = element.className.replace(/green-900/g, "green-100");
    });
    document.querySelectorAll("[class*='green-800']").forEach((element) => {
      element.className = element.className.replace(/green-800/g, "green-200");
    });
    document.querySelectorAll("[class*='green-700']").forEach((element) => {
      element.className = element.className.replace(/green-700/g, "green-300");
    });
    document.querySelectorAll("[class*='green-600']").forEach((element) => {
      element.className = element.className.replace(/green-600/g, "green-400");
    });
  }

  function ChangeTealColorsLight() {
    document.querySelectorAll("[class*='teal-900']").forEach((element) => {
      element.className = element.className.replace(/teal-900/g, "teal-100");
    });
    document.querySelectorAll("[class*='teal-800']").forEach((element) => {
      element.className = element.className.replace(/teal-800/g, "teal-200");
    });
    document.querySelectorAll("[class*='teal-700']").forEach((element) => {
      element.className = element.className.replace(/teal-700/g, "teal-300");
    });
    document.querySelectorAll("[class*='teal-600']").forEach((element) => {
      element.className = element.className.replace(/teal-600/g, "teal-400");
    });
  }

  function ChangeCyanColorsLight() {
    document.querySelectorAll("[class*='cyan-900']").forEach((element) => {
      element.className = element.className.replace(/cyan-900/g, "cyan-100");
    });
    document.querySelectorAll("[class*='cyan-800']").forEach((element) => {
      element.className = element.className.replace(/cyan-800/g, "cyan-200");
    });
    document.querySelectorAll("[class*='cyan-700']").forEach((element) => {
      element.className = element.className.replace(/cyan-700/g, "cyan-300");
    });
    document.querySelectorAll("[class*='cyan-600']").forEach((element) => {
      element.className = element.className.replace(/cyan-600/g, "cyan-400");
    });
  }

  function ChangeGrayColorsLight() {
    document.querySelectorAll("[class*='gray-900']").forEach((element) => {
      element.className = element.className.replace(/gray-900/g, "gray-100");
    });
    document.querySelectorAll("[class*='gray-800']").forEach((element) => {
      element.className = element.className.replace(/gray-800/g, "gray-200");
    });
    document.querySelectorAll("[class*='gray-700']").forEach((element) => {
      element.className = element.className.replace(/gray-700/g, "gray-300");
    });
    document.querySelectorAll("[class*='gray-600']").forEach((element) => {
      element.className = element.className.replace(/gray-600/g, "gray-400");
    });
  }

  /**
   * @function onToggleMode
   * @summary: the event handler attached to the switch. calling @darkMode or @lightMode depending on the checked state.
   */
  function onToggleMode() {
    var moon = lightSwitch.firstChild.classList.contains(FaMoonIconClass);
    var sun = lightSwitch.firstChild.classList.contains(FaSunIconClass);

    if (moon) {
      darkMode();
    } else if (sun) {
      lightMode();
    } else {
      throw new Error('Required an element with ID:' + SwicherID + 'and a fa icon with on of theses class:' + FaSunIconClass + ' or '+ FaMoonIconClass);
    }
  }

  /**
   * @function getSystemDefaultTheme
   * @summary: get system default theme by media query
   */
  function getSystemDefaultTheme() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      return "dark";
    }
    return "light";
  }

  /**
   * @function setup
   * @summary: Initialize the switcher based on the settings in the localStorage if exists.
   */
  function setup() {
    var settings = localStorage.getItem(SwicherID);
    if (settings == null) {
      settings = getSystemDefaultTheme();
    }

    if (settings == "dark") {
      toggleIcon()
    }

    lightSwitch.addEventListener("click", onToggleMode);
    onToggleMode();
  }
});

module.exports = DarkModeSwitcher;
