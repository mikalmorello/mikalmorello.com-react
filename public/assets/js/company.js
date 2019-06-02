"use strict";

/* COMPANY */
(function () {
  // VARIABLES
  var body = document.getElementsByTagName('body')[0],
      logo = document.getElementsByClassName('header__brand')[0];
  var company = window.location.hash.substring(1),
      companyDiv = document.createElement("div"); // FUNCTIONS

  function setCompany(companyName) {
    companyDiv.classList.add('header__company');
    companyDiv.innerHTML = "\n          <span class=\"header__company-sign\">+ </span>\n          <img class=\"header__company-logo\" src=\"/assets/images/company/".concat(company, ".svg\" alt=\"").concat(company, "\" />\n        ");
    logo.appendChild(companyDiv);
  }

  switch (company) {
    case 'harvard':
      body.classList.add('body--harvard');
      setCompany(company);
      break;

    case 'mit':
      body.classList.add('body--mit');
      setCompany(company);
      break;

    case 'edx':
      body.classList.add('body--edx');
      setCompany(company);
      break;

    case 'hbsp':
      body.classList.add('body--hbsp');
      setCompany(company);
      break;

    case 'wgbh':
      body.classList.add('body--wgbh');
      setCompany(company);
      break;

    case 'massart':
      body.classList.add('body--massart');
      setCompany(company);
      break;

    default:
      break;
  }
})();