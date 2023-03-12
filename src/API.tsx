interface EmployeeType {
    name: string,
    profileImg: string,
    designation: string,
    amount: string,
    taskPending: Number,
    taskTotal: Number,
    decrease?: Boolean,
    percentage: Number
}

export const EmployeeData: EmployeeType[] = [
    {
      
      name: "Jane Smith",
      profileImg: "./imgs/employee/employee1.jpg",
      designation: "Sales manager - France",
      amount: "$3490.00",
      taskPending: 3,
      taskTotal: 6,
      percentage: 60
    },
    {
      name: "Nadeem Isac",
      profileImg: "./imgs/employee/employee2.jpg",
      designation: "Sales manager - France",
      amount: "$490.00",
      taskPending: 3,
      taskTotal: 16,
      decrease: true,
      percentage: 30
    },
    {
      name: "John K.",
      profileImg: "./imgs/employee/employee3.jpg",
      designation: "Sales manager - France",
      amount: "$3490.00",
      taskPending: 1,
      taskTotal: 24,
      percentage: 70

    }
  ]


  interface countriesType {
      flag: string,
      countryName: string,
      followers: string
  }

  export const Countries: countriesType[] = [
    {
      flag: './imgs/flags/belgium.svg',
      countryName: 'Belgium',
      followers: '7.5k'
    },
    {
      flag: './imgs/flags/france.svg',
      countryName: 'France',
      followers: '6.5k'
    },
    {
      flag: './imgs/flags/Germany.svg',
      countryName: 'germany',
      followers: '5k'
    },
    {
      flag: './imgs/flags/usa.svg',
      countryName: 'USA',
      followers: '7k'
    }
  ]