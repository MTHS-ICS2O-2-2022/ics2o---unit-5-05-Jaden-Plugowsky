// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function calculatePressed() {
  //This function takes three user-given triangle sides and calculates which type of triangle the sides make up: Isosceles, Scalene, Equilateral, or Right
  //Input through Textfields
  const sideA = parseFloat(document.getElementById("sideA").value)
  const sideB = parseFloat(document.getElementById("sideB").value)
  const sideC = parseFloat(document.getElementById("sideC").value)
  const angleA =
    Math.acos((sideB ** 2 + sideC ** 2 - sideA ** 2) / (2 * sideB * sideC)) *
    (180 / Math.PI)
  const angleB =
    Math.acos((sideC ** 2 + sideA ** 2 - sideB ** 2) / (2 * sideC * sideA)) *
    (180 / Math.PI)
  const angleC =
    Math.acos((sideA ** 2 + sideB ** 2 - sideC ** 2) / (2 * sideA * sideB)) *
    (180 / Math.PI)
  const angleTotal = angleA + angleB + angleC

  //Process
  if (angleA != 0 && angleB != 0 && angleC != 0) {
    if (angleTotal == 180 || angleTotal == 180.00000000000003) {
      // Calculates Right Triangle
      if (angleA == 90 || angleB == 90 || angleC == 90) {
        document.getElementById("answer").innerHTML =
          "This triangle is a Right triangle."
      }
      // Calculates Equilateral
      else if (
        (angleA == angleC && angleB == angleC && angleA == angleB) ||
        (sideA == sideC && sideB == sideC && sideA == sideB)
      ) {
        document.getElementById("answer").innerHTML =
          "This triangle is Equilateral."
      }
      // Calculates Isosceles
      else if (
        angleA == angleC ||
        angleB == angleC ||
        angleA == angleB ||
        sideA == sideC ||
        sideB == sideC ||
        sideA == sideB
      ) {
        document.getElementById("answer").innerHTML =
          "This triangle is Isosceles."
      }
      // Calculates Scalene
      else if (
        (angleA != angleC && angleB != angleC && angleA != angleB) ||
        sideA != sideC ||
        sideB != sideC ||
        sideA != sideB
      ) {
        document.getElementById("answer").innerHTML =
          "This triangle is Scalene."
      } else {
        document.getElementById("answer").innerHTML = "This is not a triangle."
      }
    } else {
      document.getElementById("answer").innerHTML =
        "This is not a triangle, as sides do not calculate angles which add up to 180 degrees total."
    }
  } else {
    document.getElementById("answer").innerHTML =
      "This is not a triangle, as at least one of the angles is equal to 0."
  }

  //Output
  if (
    angleA != 0 &&
    angleB != 0 &&
    angleC != 0 &&
    (angleTotal == 180 || angleTotal == 180.00000000000003)
  ) {
    document.getElementById("data").innerHTML =
      "angleA: " +
      angleA.toFixed(3) +
      " angleB: " +
      angleB.toFixed(3) +
      " angleC: " +
      angleC.toFixed(3) +
      " Angles added together: " +
      angleTotal.toFixed(3)
  } else {
    document.getElementById("data").innerHTML = ""
  }
}
