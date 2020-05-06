import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer"/>
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input type="text" placeholder="Digíte o nome do repositório"/>

      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/36697618?s=460&u=3735fbb1e017ede55de036f1e4c191751d96ae89&v=4"
          alt="Leandro Guezin Jr"
        />
        <div>
          <strong>Guezin/GoStack</strong>
          <p>Bootcamp da rocketseat</p>
        </div>

        <FiChevronRight size={20}/>
      </a>

      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/36697618?s=460&u=3735fbb1e017ede55de036f1e4c191751d96ae89&v=4"
          alt="Leandro Guezin Jr"
        />
        <div>
          <strong>Guezin/GoStack</strong>
          <p>Bootcamp da rocketseat</p>
        </div>

        <FiChevronRight size={20}/>
      </a>

      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/36697618?s=460&u=3735fbb1e017ede55de036f1e4c191751d96ae89&v=4"
          alt="Leandro Guezin Jr"
        />
        <div>
          <strong>Guezin/GoStack</strong>
          <p>Bootcamp da rocketseat</p>
        </div>

        <FiChevronRight size={20}/>
      </a>
    </Repositories>
  </>
)

export default Dashboard
