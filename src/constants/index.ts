import { Employee } from "@/store";

export const US_STATES: readonly { name: string; abbreviation: string }[] = [
  { name: "Alabama", abbreviation: "AL" },
  { name: "Alaska", abbreviation: "AK" },
  { name: "Arizona", abbreviation: "AZ" },
  { name: "Arkansas", abbreviation: "AR" },
  { name: "California", abbreviation: "CA" },
  { name: "Colorado", abbreviation: "CO" },
  { name: "Connecticut", abbreviation: "CT" },
  { name: "Delaware", abbreviation: "DE" },
  { name: "Florida", abbreviation: "FL" },
  { name: "Georgia", abbreviation: "GA" },
  { name: "Hawaii", abbreviation: "HI" },
  { name: "Idaho", abbreviation: "ID" },
  { name: "Illinois", abbreviation: "IL" },
  { name: "Indiana", abbreviation: "IN" },
  { name: "Iowa", abbreviation: "IA" },
  { name: "Kansas", abbreviation: "KS" },
  { name: "Kentucky", abbreviation: "KY" },
  { name: "Louisiana", abbreviation: "LA" },
  { name: "Maine", abbreviation: "ME" },
  { name: "Maryland", abbreviation: "MD" },
  { name: "Massachusetts", abbreviation: "MA" },
  { name: "Michigan", abbreviation: "MI" },
  { name: "Minnesota", abbreviation: "MN" },
  { name: "Mississippi", abbreviation: "MS" },
  { name: "Missouri", abbreviation: "MO" },
  { name: "Montana", abbreviation: "MT" },
  { name: "Nebraska", abbreviation: "NE" },
  { name: "Nevada", abbreviation: "NV" },
  { name: "New Hampshire", abbreviation: "NH" },
  { name: "New Jersey", abbreviation: "NJ" },
  { name: "New Mexico", abbreviation: "NM" },
  { name: "New York", abbreviation: "NY" },
  { name: "North Carolina", abbreviation: "NC" },
  { name: "North Dakota", abbreviation: "ND" },
  { name: "Ohio", abbreviation: "OH" },
  { name: "Oklahoma", abbreviation: "OK" },
  { name: "Oregon", abbreviation: "OR" },
  { name: "Pennsylvania", abbreviation: "PA" },
  { name: "Rhode Island", abbreviation: "RI" },
  { name: "South Carolina", abbreviation: "SC" },
  { name: "South Dakota", abbreviation: "SD" },
  { name: "Tennessee", abbreviation: "TN" },
  { name: "Texas", abbreviation: "TX" },
  { name: "Utah", abbreviation: "UT" },
  { name: "Vermont", abbreviation: "VT" },
  { name: "Virginia", abbreviation: "VA" },
  { name: "Washington", abbreviation: "WA" },
  { name: "West Virginia", abbreviation: "WV" },
  { name: "Wisconsin", abbreviation: "WI" },
  { name: "Wyoming", abbreviation: "WY" },
];

export const DEPARTMENTS: readonly string[] = [
  "Engineering",
  "Marketing",
  "Sales",
  "Human Resources",
];

export const COLUMNS: { key: string; label: string }[] = [
  {
    key: "firstName",
    label: "First Name",
  },
  {
    key: "lastName",
    label: "Last Name",
  },
  {
    key: "startDate",
    label: "Start Date",
  },
  {
    key: "dateOfBirth",
    label: "Date of Birth",
  },
  {
    key: "department",
    label: "Department",
  },
  {
    key: "street",
    label: "Street",
  },
  {
    key: "city",
    label: "City",
  },
  {
    key: "state",
    label: "State",
  },
  {
    key: "zipCode",
    label: "Zip Code",
  },
];

export const INITIAL_EMPLOYEES: Employee[] = [
  {
    id: "1",
    firstName: "Alice",
    lastName: "Smith",
    dateOfBirth: "1985/02/15",
    startDate: "2018/03/01",
    street: "456 Elm St",
    city: "Springfield",
    state: "IL",
    zipCode: 62701,
    department: "Marketing",
  },
  {
    id: "2",
    firstName: "Bob",
    lastName: "Johnson",
    dateOfBirth: "1992/06/22",
    startDate: "2021/07/15",
    street: "789 Oak St",
    city: "Metropolis",
    state: "NY",
    zipCode: 10001,
    department: "Engineering",
  },
  {
    id: "3",
    firstName: "Charlie",
    lastName: "Brown",
    dateOfBirth: "1988/11/30",
    startDate: "2019/01/10",
    street: "321 Pine St",
    city: "Gotham",
    state: "NJ",
    zipCode: 70015,
    department: "Sales",
  },
  {
    id: "4",
    firstName: "Diana",
    lastName: "Prince",
    dateOfBirth: "1995/04/25",
    startDate: "2020/05/20",
    street: "654 Maple St",
    city: "Star City",
    state: "CA",
    zipCode: 90210,
    department: "Human Resources",
  },
  {
    id: "5",
    firstName: "Ethan",
    lastName: "Hunt",
    dateOfBirth: "1980/09/12",
    startDate: "2017/12/05",
    street: "987 Cedar St",
    city: "Central City",
    state: "TX",
    zipCode: 73301,
    department: "Sales",
  },
  {
    id: "6",
    firstName: "Fiona",
    lastName: "Shrek",
    dateOfBirth: "1993/03/03",
    startDate: "2022/08/30",
    street: "135 Birch St",
    city: "Smallville",
    state: "KS",
    zipCode: 66002,
    department: "Marketing",
  },
  {
    id: "7",
    firstName: "George",
    lastName: "Jetson",
    dateOfBirth: "1975/12/01",
    startDate: "2015/11/11",
    street: "246 Spruce St",
    city: "Future City",
    state: "FL",
    zipCode: 33101,
    department: "Engineering",
  },
  {
    id: "8",
    firstName: "Hannah",
    lastName: "Montana",
    dateOfBirth: "1991/07/07",
    startDate: "2023/01/01",
    street: "369 Walnut St",
    city: "Hogwarts",
    state: "MA",
    zipCode: 21015,
    department: "Marketing",
  },
  {
    id: "9",
    firstName: "Ian",
    lastName: "Malcolm",
    dateOfBirth: "1982/05/15",
    startDate: "2016/09/09",
    street: "159 Cherry St",
    city: "Jurassic Park",
    state: "OR",
    zipCode: 97001,
    department: "Engineering",
  },
  {
    id: "10",
    firstName: "Jasmine",
    lastName: "Aladdin",
    dateOfBirth: "1994/08/18",
    startDate: "2021/04/04",
    street: "753 Peach St",
    city: "Agrabah",
    state: "NV",
    zipCode: 89501,
    department: "Sales",
  },
];
