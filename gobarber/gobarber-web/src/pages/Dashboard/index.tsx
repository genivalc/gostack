import React, { useState } from 'react';

import { Container, Header, HeaderContent, Profile, Content, Schedule, Calendar, NextAppointment,Section, Appointment } from './styles';
import { FiClock, FiPower } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/Auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectendDate] = useState(new Date());

  const { singOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />
          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={singOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>


      <Content>
        <Schedule>
          <h1>Horários agendados</h1>

          <p>
            <span>Hoje</span>
            <span>Dia 06 </span>
            <span>Segunda-feira </span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img src="https://avatars3.githubusercontent.com/u/36050566?s=460&u=155b5be9533e750d4d831415607b534fb8517a4f&v=4" alt="Genival NEto" />
              <strong>Genival Neto</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img src="https://avatars3.githubusercontent.com/u/36050566?s=460&u=155b5be9533e750d4d831415607b534fb8517a4f&v=4" alt=""/>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img src="https://avatars3.githubusercontent.com/u/36050566?s=460&u=155b5be9533e750d4d831415607b534fb8517a4f&v=4" alt=""/>
              </div>
            </Appointment>
          </Section>
          
          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img src="https://avatars3.githubusercontent.com/u/36050566?s=460&u=155b5be9533e750d4d831415607b534fb8517a4f&v=4" alt=""/>
              </div>
            </Appointment>
        </Section>
        
        </Schedule>

        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
