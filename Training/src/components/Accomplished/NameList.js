import React from 'react'
// import Person from './Person'

function NameList() {
  const names = ['Kiet', 'Minh', 'Kiet']
  // const persons = [
  //   {
  //     id: 1,
  //     name: 'Kiet',
  //     age: 20,
  //     skill: 'React'
  //   },
  //   {
  //     id: 2,
  //     name: 'Minh',
  //     age: 20,
  //     skill: '.NET'
  //   },
  //   {
  //     id: 3,
  //     name: 'Kiet',
  //     age: 20,
  //     skill: 'Svelte'
  //   }
  // ]
  // Create a list of JSX elements from an array of strings by using the map() method
  const nameList = names.map((name, index) => (
    <h2 key={index}>{index}-{name}</h2>
  ))

  return (
    <div>
      {
        nameList
      }
    </div>
  )
}

export default NameList