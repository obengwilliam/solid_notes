package main

import (
	"fmt"
)

type Employee struct {
	FirstName  string
	LastName   string
	DaysWorked int
}

func (e *Employee) calculatePay() int {
	const amountPerHour int = 10
	return amountPerHour * e.reportHours()
}

func (e *Employee) save() *Employee {
	fmt.Printf(e.FirstName, e.LastName)
	return e
}

func (e *Employee) reportHours() int {

	const numberOfHoursInADay = 24
	return e.DaysWorked * numberOfHoursInADay
}

func main() {

	employee := &Employee{FirstName: "William", LastName: "obeng", DaysWorked: 40}

	employee.calculatePay()
	employee.save()
}
