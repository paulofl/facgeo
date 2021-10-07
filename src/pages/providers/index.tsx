import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Head from 'next/head'

import { Container, Header, Issues, ProviderInfo } from '../../styles/pages/Providers'
import Link from 'next/link'

const MedicalProvider: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Resultados</title>
      </Head>

      <Header>
        <img src="/icon.png" alt="Facgeo" />
        <p>Resultados da busca</p>
        <Link href="/">
          <a>
            <FiChevronLeft size={16} />
            Voltar
          </a>
        </Link>
      </Header>

        <ProviderInfo>
          <a>
            <div>
              <strong>HOSPITAL METROPOLITANO SA</strong>
              <span>CNPJ 32.402.414/0001-33</span>

              <ul>
                <li>
                  <span>Radiologia</span>
                </li>
                <li>
                  <span>Ultrasonografia</span>
                </li>
                <li>
                  <span>Ressonancia</span>
                </li>
              </ul>

              <div>
                <p>AVENIDA ELDES SCHERRER SOUZA, 488, CIVIT II, SERRA - ES, CEP: 29168060</p>
                <p><strong>(27) 3346-2010</strong></p>
                <p><strong>(27) 3346-2010</strong></p>
              </div>
            </div>
            <FiChevronRight size={20} />
          </a>
        </ProviderInfo>

      <Issues>
        <a>
        <p>Nenhum Prestador encontrado</p>
            <FiChevronRight size={20} />
        </a>
      </Issues>
    </Container>
  )
}

export default MedicalProvider;
