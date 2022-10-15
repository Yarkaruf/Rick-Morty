import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [character, SetCharater] = useState({
    info: {
      count: 0,
      next: '',
      pages: 0,
    },
    results: [
      {
        id: 0,
        name: '',
        status: '',
        species: '',
      }
    ]
  });
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then(res => res.json())
      .then(
        (result) => {
          SetCharater(result);
        }
      )
  }, []);
  console.log(character)
  return (
    <main>
      <label>
        <input type='text' placeholder='Найти персонажа' />
      </label>
      <div className={styles.Character_filter}>
        <span>Всего персонажей:</span>
      </div>
      <ul>
        {character.results.map((value, index) => {
          return (
            <li key={index}>{value.name}</li>
          )
        })}
      </ul>
    </main>
  )
}

export default Home
