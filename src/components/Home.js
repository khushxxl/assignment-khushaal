/* eslint-disable no-unused-expressions */
import './Home.css'
import {
  Button,
  TextField,
  TableCell,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import { useRef, useState } from 'react'

const Home = () => {
  const myData = (firstName, lastName, email) => {
    return { firstName, lastName, email }
  }

  const firstNameRef = useRef('')
  const lastNameRef = useRef('')
  const emailRef = useRef('')

  const searchRef = useRef('')

  const [data, setData] = useState([])

  const [searchData, setSearchData] = useState('')

  const [searchResult, setSearchResult] = useState([])

  const searchObserver = (searchData) => {
    setSearchData(searchRef.current.value)
    if (searchData !== '') {
      const newDataList = data.filter((data) => {
        return Object.values(data)
          .join('')
          .toLowerCase()
          .includes(searchRef.current.value.toLowerCase())
      })
      setSearchResult(newDataList)
    } else {
      setSearchResult(data)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      if (
        !firstNameRef.current.value ||
        !lastNameRef.current.value ||
        !emailRef.current.value
      )
        return alert('Fill all fields before submitting')

      const newData = [...data]

      newData.push(
        myData(
          firstNameRef.current.value,
          lastNameRef.current.value,
          emailRef.current.value,
        ),
      )

      setData(newData)
      console.log(data)

      firstNameRef === ''
      lastNameRef === ''
      emailRef === ''
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="home">
      <div>
        <p className="title">Search It </p>
      </div>

      <form action="" className="form">
        <div className="textFields">
          <div className="single">
            <TextField
              id="filled-basic"
              label="First Name"
              placeholder="First Name"
              variant="filled"
              className="textfield"
              inputRef={firstNameRef}
            />
          </div>

          <div className="single">
            <TextField
              inputRef={lastNameRef}
              id="filled-basic"
              label="Last Name"
              variant="filled"
              className="textfield"
              placeholder="Last Name"
            />
          </div>

          <div className="single">
            <TextField
              inputRef={emailRef}
              id="filled-basic"
              label="Email-id"
              variant="filled"
              className="textfield"
              placeholder="Email-id"
            />
          </div>
        </div>
        <div className="button">
          <Button type="submit" onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </div>
      </form>

      {/* Search Data  */}

      <div className="single">
        <TextField
          inputRef={searchRef}
          id="filled-basic"
          label="Search Data"
          variant="filled"
          className="textfield"
          placeholder="Search"
          value={searchData}
          onChange={searchObserver}
        />
      </div>

      <div className="table-div">
        <TableContainer className="table">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className="">
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {data.map((data) => (
                <TableRow>
                  <TableCell>{data.firstName}</TableCell>
                  <TableCell>{data.lastName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                </TableRow>
              ))} */}
              {searchData < 1
                ? data.map((data) => (
                    <TableRow>
                      <TableCell>{data.firstName}</TableCell>
                      <TableCell>{data.lastName}</TableCell>
                      <TableCell>{data.email}</TableCell>
                    </TableRow>
                  ))
                : searchResult.map((data) => (
                    <TableRow>
                      <TableCell>{data.firstName}</TableCell>
                      <TableCell>{data.lastName}</TableCell>
                      <TableCell>{data.email}</TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default Home
