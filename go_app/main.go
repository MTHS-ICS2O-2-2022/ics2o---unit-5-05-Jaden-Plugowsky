// Created by: Jaden Plugowsky
// Created on: May 2023
//
// This program takes three user-given triangle sides and calculates which type of triangle the sides make up: Isosceles, Scalene, Equilateral, or Right

package main

import (
	"fmt"
	"math"
)

var sideA float64
var sideB float64
var sideC float64
var angleA float64
var angleB float64
var angleC float64
var angleTotal float64
var angleTotalString string
var angleTotalSymbol string

func main() {
	// This function takes three user-given triangle sides and calculates which type of triangle the sides make up: Isosceles, Scalene, Equilateral, or Right
	// Input
	fmt.Println("This program takes three user-gives triangle sides and calculates which type of triangle the sides make up.")
	fmt.Println("These sides are: Isosceles, Scalene, Equilateral, and Right.")
	fmt.Println("\nEnter side A of the triangle: ")
	fmt.Scanln(&sideA)
	fmt.Println("\nEnter side B: ")
	fmt.Scanln(&sideB)
	fmt.Println("\nEnter side C: ")
	fmt.Scanln(&sideC)

	// Process
	// Calculations
	angleA = math.Acos((math.Pow(sideB, 2)+math.Pow(sideC, 2)-math.Pow(sideA, 2))/(2*sideB*sideC)) * (180 / math.Pi)
	angleB = math.Acos((math.Pow(sideC, 2)+math.Pow(sideA, 2)-math.Pow(sideB, 2))/(2*sideC*sideA)) * (180 / math.Pi)
	angleC = math.Acos((math.Pow(sideA, 2)+math.Pow(sideB, 2)-math.Pow(sideC, 2))/(2*sideA*sideB)) * (180 / math.Pi)
	angleTotal = angleA + angleB + angleC
	angleTotalString = fmt.Sprintf("%v", math.Round(angleTotal))
	angleTotalSymbol = angleTotalString + "°"

	// Filtering
	if angleA != 0 && angleB != 0 && angleC != 0 {
		if angleTotal == 180 || angleTotal == 179.99999999999997 {
			if angleA == 90 || angleB == 90 || angleC == 90 {
				fmt.Println("\nThis triangle is a Right triangle.")
			} else if angleA == angleC && angleB == angleC && angleA == angleB || sideA == sideC && sideB == sideC && sideA == sideB {
				fmt.Println("\nThis triangle is Equilateral.")
			} else if angleA == angleC || angleB == angleC || angleA == angleB || sideA == sideC || sideB == sideC || sideA == sideB {
				fmt.Println("\nThis triangle is Isosceles.")
			} else if angleA != angleC && angleB != angleC && angleA != angleB || sideA != sideC || sideB != sideC || sideA != sideB {
				fmt.Println("\nThis triangle is Scalene.")
			} else {
				fmt.Println("\nThis is not a triangle.")
			}
		} else {
			fmt.Println("\nThis is not a triangle, as sides do not calculate angles which add up to 180 degrees total.")
		}
	} else {
		fmt.Println("\nThis is not a triangle; at least one of the angles is equal to 0.")
	}

	// Output
	fmt.Println("Angle A:", math.Round(angleA), "Angle B:", math.Round(angleB), "Angle C:", math.Round(angleC), "Angles added together:", angleTotalSymbol)

	fmt.Println("\nDone.")
}
