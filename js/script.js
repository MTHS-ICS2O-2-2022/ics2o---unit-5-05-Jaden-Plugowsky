// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";

function buttonOneClicked() {
  //This function does XXXX
  //Input through Textfields
  const example = parseFloat(document.getElementById("example").value)

  //Process
  const answer = example

  //Output
  document.getElementById("answer").innerHTML =
    "The answer is: " + answer.toFixed(2)
}
