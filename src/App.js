import React from 'react';
import { FunnelChart, Funnel, LabelList, Tooltip } from 'recharts';
import activeUsersImg from './assets/marketing1.jpg';
import funnelImg from './assets/marketing2.jpg';

const data = [
  { value: 400, name: 'Visitantes' },
  { value: 300, name: 'Cliques' },
  { value: 100, name: 'Conversões' }
];

function App() {
  const activeNow = 17;
  const totalToday = 153;

  return (
    <div className="dashboard">
      <h1>Dashboard de Marketing</h1>
      
      <div className="card">
        <h2>Usuários Ativos Agora: {activeNow}</h2>
        <img src={activeUsersImg} alt="Usuários ativos" style={{ width: '100%', marginTop: '1rem' }} />
      </div>

      <div className="card">
        <h2>Usuários no Dia: {totalToday}</h2>
      </div>

      <div className="card funnel">
        <h2>Funil de Páginas</h2>
        <FunnelChart width={400} height={250}>
          <Tooltip />
          <Funnel dataKey="value" data={data} isAnimationActive>
            <LabelList position="right" fill="#f1f5f9" stroke="none" dataKey="name" />
          </Funnel>
        </FunnelChart>
        <img src={funnelImg} alt="Funil" />
      </div>
    </div>
  );
}

export default App;
