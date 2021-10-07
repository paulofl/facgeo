import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { GetStaticProps } from 'next';
import { api } from '../services/api';

import { Container, Title, Form, Select, CheckClient, SearchButton } from '../styles/pages/Home'

type FederativeUnit = {
  description: string,
  value: string,
}

type States = {
  states: FederativeUnit[],
}

type Citys = {
  name: string,
  id: number
}

type Plan = {
  id: number,
  description: string,
  commercialName: string,
  // classification: string,
  // ansRegister: string,
  // active: string,
  // ansName: string,
  // cover: string,
  // abrangency: string,
  // planDesc: string,
  // showPlanDesc: boolean,
}

type HomeProps = {
  plans: Plan[];
}

const Home: React.FC<HomeProps> = (props) => {
  const [isClient, setIsClient] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState('Plano (obrigatório)');
  const [statesAvailables, setStatesAvailables] = useState([]);
  const [specialtiesAvailables, setSpecialtiesAvailables] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState('TODOS');
  const [establishmentsAvailables, setEstablishmentsAvailables] = useState([]);
  const [selectedEstablishment, setSelectedEstablishment] = useState('TODOS');
  const [selectedFederativeUnit, setSelectedFederativeUnit] = useState('TODOS');
  const [citiesAvailables, setCitiesAvailables] = useState([]);
  const [selectedCity, setSelectedCity] = useState('TODOS');
  const [districtsAvailables, setDistrictsAvailables] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('TODOS');


  const getStates = async () => {
    const { data }  = await api.get('home/FindPrestadores', {
        params: {
            campoIdCliente: 'on',
            IdBeneficiario: '',
            SelectedPlanoId: selectedPlanId,
            SelectedEstadoId: '',
            SelectedCidadeId: '',
            SelectedBairroId: '',
            SelectedEspecialidadeId: '',
            SelectedTipoEstabelecimentoId: '',
            Cnpj: '',
            SelectedEndereco: '',
            RegistroProfissional: '',
            NomePrestador: '',
            NomeMedico: '',
            PageNumber: 1,
            ShowSearchResults: false,
        }
    })

    const states = data.AvailableUnidadesFederativas.map(state => {
      return {
        description: state.Descricao,
        value: state.Valor,
      }
    })

    const specialties = data.AvailableEspecialidades.map(specialty => {
      return {
        description: specialty.Descricao,
        id: specialty.Id,
      }
    })

    const establishments = data.AvailableTiposEstabelecimentos.map(establishment => {
      return {
        description: establishment.Valor.Descricao,
        id: establishment.Valor.CodTipoEstabelecimento,
      }
    })

    setStatesAvailables(states)
    setSpecialtiesAvailables(specialties)
    setEstablishmentsAvailables(establishments)
  }

  useEffect(() => {
    if(selectedPlanId !== 'Plano (obrigatório)') getStates()
  }, [selectedPlanId])

  const getCities = async () => {
    const { data }  = await api.get('home/FindPrestadores', {
        params: {
            campoIdCliente: 'on',
            IdBeneficiario: '',
            SelectedPlanoId: selectedPlanId,
            SelectedEstadoId: selectedFederativeUnit,
            SelectedCidadeId: '',
            SelectedBairroId: '',
            SelectedEspecialidadeId: '',
            SelectedTipoEstabelecimentoId: '',
            Cnpj: '',
            SelectedEndereco: '',
            RegistroProfissional: '',
            NomePrestador: '',
            NomeMedico: '',
            PageNumber: 1,
            ShowSearchResults: false,
        }
    })

    const citys = data.AvailableCidadesDoEstado.map(city => {
      return {
        name: city.Nome,
        id: city.Id,
      }
    })

    setCitiesAvailables(citys)
  }

  useEffect(() => {
    if(selectedFederativeUnit !== 'TODOS') getCities()
  }, [selectedFederativeUnit])

  const getDistricts = async () => {
    const { data }  = await api.get('home/FindPrestadores', {
        params: {
            campoIdCliente: 'on',
            IdBeneficiario: '',
            SelectedPlanoId: selectedPlanId,
            SelectedEstadoId: selectedFederativeUnit,
            SelectedCidadeId: selectedCity,
            SelectedBairroId: '',
            SelectedEspecialidadeId: '',
            SelectedTipoEstabelecimentoId: '',
            Cnpj: '',
            SelectedEndereco: '',
            RegistroProfissional: '',
            NomePrestador: '',
            NomeMedico: '',
            PageNumber: 1,
            ShowSearchResults: false,
        }
    })

    const district = data.AvailableBairros.map(district => {
      return {
        name: district.Nome,
        id: district.Id,
      }
    })

    setDistrictsAvailables(district)
  }

  useEffect(() => {
    if(selectedCity !== 'TODOS') getDistricts()
  }, [selectedCity])

  function toggleIsClient(){
    setIsClient(!isClient);
  }

  function handleSelectPlan(plan){
    setSelectedPlanId(plan)
  }

  function handleSelectFederativeUnit(uf){
    setSelectedFederativeUnit(uf)
  }

  function handleSelectCity(city){
    setSelectedCity(city)
  }

  function handleSelectDistrict(district){
    setSelectedDistrict(district)
  }

  function handleSelectSpecialty(specialty){
    setSelectedSpecialty(specialty)
  }

  function handleSelectEstablishment(establishment){
    setSelectedEstablishment(establishment)
  }

  return (
    <Container>
      <Head>
        <title>Facgeo</title>
      </Head>

      <Title>
        <img src="/icon.png" alt="Facgeo" />
        <p>Faça sua busca</p>
      </Title>

      <CheckClient>
          <input type="radio" id="client" onChange={() =>toggleIsClient()} checked={isClient}/>
          <label htmlFor="client">Sou cliente</label>
          <input type="radio" id="notClient" onChange={() =>toggleIsClient()} checked={!isClient}/>
          <label htmlFor="notClient">Não sou cliente</label>
      </CheckClient>

      <Form>
        {isClient && (
          <div>
            <input
              placeholder="Número da carteira ou CPF"
            />
            <button type="submit">Buscar Plano</button>
          </div>
        )}

        <Select>
          <label htmlFor="choosePlan">Selecione um plano</label>
          <select name="plan" id="choosePlan" onChange={plan => handleSelectPlan(plan.target.value)}>
            <option>Plano (obrigatório)</option>
            {props.plans.map((plan) => {
                return(
                    <option key={plan.id} value={plan.id}>{plan.description}</option>
                )
            })}
          </select>
        </Select>

        {selectedPlanId !== 'Plano (obrigatório)' && (
          <Select>
            <label htmlFor="choosePlan">Selecione um estado</label>
            <select name="state" id="chooseState" onChange={uf => handleSelectFederativeUnit(uf.target.value)}>
              <option>Todos</option>
                {statesAvailables.map((state) => {
                    return(
                        <option key={state.value} value={state.value}>{state.description}</option>
                    )
              })}
            </select>
          </Select>
        )}

        {selectedFederativeUnit !== 'TODOS' && (
          <Select>
            <label htmlFor="chooseCity">Selecione uma cidade</label>
            <select name="city" id="chooseCity" onChange={city => handleSelectCity(city.target.value)}>
              <option>Todos</option>
                {citiesAvailables.map((city) => {
                    return(
                        <option key={city.id} value={city.id}>{city.name}</option>
                    )
              })}
            </select>
          </Select>
        )}

        {selectedCity !== 'TODOS' && (
          <Select>
            <label htmlFor="chooseDistrict">Selecione um bairro</label>
            <select name="district" id="chooseDistrict" onChange={district => handleSelectDistrict(district.target.value)}>
              <option>Todos</option>
                {districtsAvailables.map((district) => {
                    return(
                        <option key={district.id} value={district.id}>{district.name}</option>
                    )
              })}
            </select>
          </Select>
        )}

        {selectedPlanId !== 'Plano (obrigatório)' && (
          <Select>
            <label htmlFor="chooseSpecialty">Selecione uma especialidade / serviço</label>
            <select name="specialty" id="chooseSpecialty" onChange={specialty => handleSelectSpecialty(specialty.target.value)}>
              <option>Todas</option>
                {specialtiesAvailables.map((specialty) => {
                    return(
                        <option key={specialty.id} value={specialty.id}>{specialty.description}</option>
                    )
              })}
            </select>
          </Select>
        )}

        {selectedPlanId !== 'Plano (obrigatório)' && (
          <Select>
            <label htmlFor="chooseEstablishment">Selecione um tipo de estabelecimento</label>
            <select name="establishment" id="chooseEstablishment" onChange={establishment => handleSelectEstablishment(establishment.target.value)}>
              <option>Todos</option>
                {establishmentsAvailables.map((establishment) => {
                    return(
                        <option key={establishment.id} value={establishment.id}>{establishment.description}</option>
                    )
              })}
            </select>
          </Select>
        )}

      </Form>
      <SearchButton>
        <button>Limpar Campos</button>
        <Link href="/providers">
          <button disabled={selectedPlanId === 'Plano (obrigatório)'}>Buscar</button>
        </Link>
      </SearchButton>
    </Container>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (props) => {
  const { data } = await api.get('home/planos')

  const plans = data.map(plan => {
    return {
      id: plan.Id,
      description: plan.Descricao,
      commercialName: plan.NomeComercial,
      ansRegister: plan.RegistroAns,
      classification: plan.Classificacao,
      active: plan.Situacao,
      ansName: plan.NomeAns,
      cover: plan.Cobertura,
      abrangency: plan.Abrangencia,
      planDesc: plan.DescPlano,
      showPlanDesc: plan.ExibeDescPlano,
    }
  })

  return {
    props: {
      plans,
    },
    revalidate: 60 * 60 * 12,
  }
}
