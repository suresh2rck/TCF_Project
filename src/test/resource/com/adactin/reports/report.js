$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 2,
  "name": "AdactIn Hotel End to End to test case",
  "description": "",
  "id": "adactin-hotel-end-to-end-to-test-case",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AdactInTesting"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "User able to select the hotel booking",
  "description": "",
  "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User able to select the location",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User able to select the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User able to select the Room type",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User able to select the Number of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User able to select \u0027\u003cCheckindate\u003e\u0027 in the Checkin date box",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User able to select \u0027\u003cCheckoutdate\u003e\u0027 in the checkout date box",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User able to click the search button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User able to logout the application",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking;",
  "rows": [
    {
      "cells": [
        "Checkindate",
        "Checkoutdate"
      ],
      "line": 24,
      "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking;;1"
    },
    {
      "cells": [
        "04/08/2019",
        "02/08/2019"
      ],
      "line": 25,
      "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 299700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User able to launch the Browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User able to launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter the username \u0027suresh2rck\u0027 in Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter the password \u0027QEK8DR\u0027 in Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click the signin Button in Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Verify the username \u0027Hello suresh2rck!\u0027 displayed in the header",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_launch_the_application()"
});
formatter.result({
  "duration": 4333569400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suresh2rck",
      "offset": 25
    }
  ],
  "location": "AdactinStepDef.user_enter_the_username_mahesathya_in_Login_Page(String)"
});
formatter.result({
  "duration": 192895500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QEK8DR",
      "offset": 25
    }
  ],
  "location": "AdactinStepDef.user_enter_the_password_in_Login_Page(String)"
});
formatter.result({
  "duration": 170005300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_Click_the_signin_Button_in_Login_Page()"
});
formatter.result({
  "duration": 2633483700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello suresh2rck!",
      "offset": 26
    }
  ],
  "location": "AdactinStepDef.user_Verify_the_username_Hello_mahesathya_displayed_in_the_header(String)"
});
formatter.result({
  "duration": 25118700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User able to select the hotel booking",
  "description": "",
  "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AdactInTesting"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User able to select the location",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User able to select the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User able to select the Room type",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User able to select the Number of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User able to select \u002704/08/2019\u0027 in the Checkin date box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User able to select \u002702/08/2019\u0027 in the checkout date box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User able to click the search button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User able to logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_select_the_location()"
});
formatter.result({
  "duration": 143517200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_select_the_hotel()"
});
formatter.result({
  "duration": 166511500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_select_the_Room_type()"
});
formatter.result({
  "duration": 161958400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_select_the_Number_of_rooms()"
});
formatter.result({
  "duration": 130613700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "04/08/2019",
      "offset": 21
    }
  ],
  "location": "AdactinStepDef.user_able_to_select_in_the_Checkin_date_box(String)"
});
formatter.result({
  "duration": 178416800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02/08/2019",
      "offset": 21
    }
  ],
  "location": "AdactinStepDef.user_able_to_select_in_the_checkout_date_box(String)"
});
formatter.result({
  "duration": 235420500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_click_the_search_button()"
});
formatter.result({
  "duration": 118428100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_logout_the_application()"
});
formatter.result({
  "duration": 347776200,
  "status": "passed"
});
formatter.after({
  "duration": 572900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "User able to select the hotel booking and verify the name",
  "description": "",
  "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking-and-verify-the-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "User able to select the location",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User able to select the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User able to select the Room type",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User able to select the Number of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User able to select \u0027\u003cCheckindate\u003e\u0027 in the Checkin date box",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User able to select \u0027\u003cCheckoutdate\u003e\u0027 in the checkout date box",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User able to select the adult counts",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User able to click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User able to verify the hotelname as given",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User able to logout the application",
  "keyword": "And "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking-and-verify-the-name;",
  "rows": [
    {
      "cells": [
        "Checkindate",
        "Checkoutdate"
      ],
      "line": 41,
      "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking-and-verify-the-name;;1"
    },
    {
      "cells": [
        "04/08/2019",
        "06/08/2019"
      ],
      "line": 42,
      "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking-and-verify-the-name;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 90900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User able to launch the Browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User able to launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter the username \u0027suresh2rck\u0027 in Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter the password \u0027QEK8DR\u0027 in Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click the signin Button in Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Verify the username \u0027Hello suresh2rck!\u0027 displayed in the header",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_launch_the_application()"
});
formatter.result({
  "duration": 200516300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suresh2rck",
      "offset": 25
    }
  ],
  "location": "AdactinStepDef.user_enter_the_username_mahesathya_in_Login_Page(String)"
});
formatter.result({
  "duration": 161748500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QEK8DR",
      "offset": 25
    }
  ],
  "location": "AdactinStepDef.user_enter_the_password_in_Login_Page(String)"
});
formatter.result({
  "duration": 139496700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_Click_the_signin_Button_in_Login_Page()"
});
formatter.result({
  "duration": 460669100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello suresh2rck!",
      "offset": 26
    }
  ],
  "location": "AdactinStepDef.user_Verify_the_username_Hello_mahesathya_displayed_in_the_header(String)"
});
formatter.result({
  "duration": 64474500,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "User able to select the hotel booking and verify the name",
  "description": "",
  "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking-and-verify-the-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AdactInTesting"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User able to select the location",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User able to select the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User able to select the Room type",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User able to select the Number of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User able to select \u002704/08/2019\u0027 in the Checkin date box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User able to select \u002706/08/2019\u0027 in the checkout date box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User able to select the adult counts",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User able to click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User able to verify the hotelname as given",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User able to logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_select_the_location()"
});
formatter.result({
  "duration": 159523300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_select_the_hotel()"
});
formatter.result({
  "duration": 159722100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_select_the_Room_type()"
});
formatter.result({
  "duration": 152935600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_select_the_Number_of_rooms()"
});
formatter.result({
  "duration": 138708700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "04/08/2019",
      "offset": 21
    }
  ],
  "location": "AdactinStepDef.user_able_to_select_in_the_Checkin_date_box(String)"
});
formatter.result({
  "duration": 188144600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06/08/2019",
      "offset": 21
    }
  ],
  "location": "AdactinStepDef.user_able_to_select_in_the_checkout_date_box(String)"
});
formatter.result({
  "duration": 198443700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_select_the_adult_counts()"
});
formatter.result({
  "duration": 146480400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_click_the_search_button()"
});
formatter.result({
  "duration": 471736700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_verify_the_hotelname_as_given()"
});
formatter.result({
  "duration": 33826000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_logout_the_application()"
});
formatter.result({
  "duration": 292385600,
  "status": "passed"
});
formatter.after({
  "duration": 83400,
  "status": "passed"
});
});