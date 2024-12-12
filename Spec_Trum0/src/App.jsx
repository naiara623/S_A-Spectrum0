import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './index.css'; // Seu arquivo CSS global


// Componentes das páginas
import Boas_Vindas from './pages/Boas_Vindas';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Tela_Profissional from "./pages/Tela_Profissional";
import Tela_Perfil from "./pages/Tela_Perfil";
import Tela_Informacoes from "./pages/Tela_Informacoes";
import Tela_Principal from "./pages/Tela_Principal";
import Esqueci_A_Senha from "./pages/Esqueci_A_Senha";

import Estrategia1 from "./estrategias/Estrategia1";
import Estrategia2 from "./estrategias/Estrategia2";
import Estrategia3 from "./estrategias/Estrategia3";
import Estrategia4 from "./estrategias/Estrategia4";

import Comunicacao4 from "./estrategias/sub_estrategias1/Comunicacao4";
import EspaçosTranquilos2 from "./estrategias/sub_estrategias1/EspaçosTranquilos2";
import MúsicaOuRuídoBranco6 from "./estrategias/sub_estrategias1/MúsicaOuRuídoBranco6";
import Planejamento3 from "./estrategias/sub_estrategias1/Planejamento3";
import ProtetoresAuriculares from "./estrategias/sub_estrategias1/ProtetoresAuriculares1";
import TécnicasDeRelaxamento5 from "./estrategias/sub_estrategias1/TécnicasDeRelaxamento5";
import TreinamentoDeDessensibilização7 from "./estrategias/sub_estrategias1/TreinamentoDeDessensibilização7";

import DividirEmEtapas4 from "./estrategias/sub_estrategias2/DividirEmEtapas4";
import HistóriasSociais5 from "./estrategias/sub_estrategias2/HistóriasSociais5";
import IntroduzirFlexibilidadeGradualmente8 from "./estrategias/sub_estrategias2/IntroduzirFlexibilidadeGradualmente8";
import ManterElementosConstantes3 from "./estrategias/sub_estrategias2/ManterElementosConstantes3";
import ObjetosDeConforto10 from "./estrategias/sub_estrategias2/ObjetosDeConforto10";
import PreparaçãoAntecipada1 from "./estrategias/sub_estrategias2/PreparaçãoAntecipada1";
import ReforçoPositivo7 from "./estrategias/sub_estrategias2/ReforçoPositivo7";
import SuporteEmocional9 from "./estrategias/sub_estrategias2/SuporteEmocional9";
import TécnicasDeRelaxamento6 from "./estrategias/sub_estrategias2/TécnicasDeRelaxamento6";
import VisualizaçãoERoteiros2 from "./estrategias/sub_estrategias2/VisualizaçãoERoteiros2";

import FlexibilidadeGradual7 from "./estrategias/subEstrategias3/FlexibilidadeGradual7"
import HistoriasSociais from "./estrategias/subEstrategias3/HistoriasSociais";
import ItensDeConforto from "./estrategias/subEstrategias3/ItensDeConforto";
import MapasEAplicativosDeNavegacao2 from "./estrategias/subEstrategias3/MapasEAplicativosDeNavegacao2"
import PreparacaoAntecipada1 from "./estrategias/subEstrategias3/PreparacaoAntecipada1"
import ReforcoPositivo8 from "./estrategias/subEstrategias3/ReforcoPositivo8"
import RotasAlternativasConhecidas4 from "./estrategias/subEstrategias3/RotasAlternativasConhecidas4"
import TecnicasDeRelaxamento5 from "./estrategias/subEstrategias3/TecnicasDeRelaxamento5"
import TreinamentoDeSituacoes10 from "./estrategias/subEstrategias3/TreinamentoDeSituacoes10"
import SuporteEmocional10 from "./estrategias/subEstrategias3/SuporteEmocional10";

import CompanheiroDeApoio2 from "./estrategias/subEstrategias4/CompanheiroDeApoio2"
import ComunicacaoPrevia7 from "./estrategias/subEstrategias4/ComunicacaoPrevia7"
import EspacosDeRefugio3 from "./estrategias/subEstrategias4/EspacosDeRefugio3"
import FeedbackPositivo11 from "./estrategias/subEstrategias4/FeedbackPositivo11"
import HorariosMenosMovimentados5 from "./estrategias/subEstrategias4/HorariosMenosMovimentados5"
import InteressesEspeciais10 from "./estrategias/subEstrategias4/InteressesEspeciais10"
import PlanejamentoAntecipado1 from "./estrategias/subEstrategias4/PlanejamentoAntecipado1"
import ProtetoresAuriculares4 from "./estrategias/subEstrategias4/ProtetoresAuriculares4"
import RotinaEPrevisibilidade9 from "./estrategias/subEstrategias4/RotinaEPrevisibilidade9"
import TecnicasDeRelaxamento6 from "./estrategias/subEstrategias4/TecnicasDeRelaxamento6"
import TempoLimitado8 from "./estrategias/subEstrategias4/TempoLimitado8"
import Editar_Perfil from "./pages/Editar_Perfil";
import Calendario from "./pages/Calendario";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Boas_Vindas />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mudarsenha" element={<Esqueci_A_Senha />} />
        <Route path="/perfildeusuario" element={<Tela_Perfil />} />
        <Route path="/teladeinformacoes" element={<Tela_Informacoes />} />
        <Route path="/perfildeprofissional" element={<Tela_Profissional />} />
        <Route path="/telaprincipal" element={<Tela_Principal />} />
        <Route path="/ediatarperfil" element={<Editar_Perfil />} />
        <Route path="/calendario" element={<Calendario />} />
        
        <Route path="/estrategia1" element={<Estrategia1 />} />
        <Route path="/estrategia2" element={<Estrategia2 />} />
        <Route path="/estrategia3" element={<Estrategia3 />} />
        <Route path="/estrategia4" element={<Estrategia4 />} />

        <Route path="/Comunicacao4" element={<Comunicacao4 />} />
        <Route path="/EspaçosTranquilos2" element={<EspaçosTranquilos2 />} />
        <Route path="/MúsicaOuRuídoBranco6" element={<MúsicaOuRuídoBranco6 />} />
        <Route path="/Planejamento3" element={<Planejamento3 />} />
        <Route path="/ProtetoresAuriculares" element={<ProtetoresAuriculares />} />
        <Route path="/TécnicasDeRelaxamento5" element={<TécnicasDeRelaxamento5 />} />
        <Route path="/TreinamentoDeDessensibilização7" element={<TreinamentoDeDessensibilização7 />} />

        <Route path="/DividirEmEtapas4" element={<DividirEmEtapas4 />} />
        <Route path="/HistóriasSociais5" element={<HistóriasSociais5 />} />
        <Route path="/IntroduzirFlexibilidadeGradualmente8" element={<IntroduzirFlexibilidadeGradualmente8 />} />
        <Route path="/ManterElementosConstantes3" element={<ManterElementosConstantes3 />} />
        <Route path="/ObjetosDeConforto10" element={<ObjetosDeConforto10 />} />
        <Route path="/PreparaçãoAntecipada1" element={<PreparacaoAntecipada1 />} />
        <Route path="/ReforçoPositivo7" element={<ReforçoPositivo7 />} />
        <Route path="/SuporteEmocional9" element={<SuporteEmocional9 />} />
        <Route path="/TécnicasDeRelaxamento6" element={<TécnicasDeRelaxamento6 />} />
        <Route path="/VisualizaçãoERoteiros2" element={<VisualizaçãoERoteiros2 />} />

        <Route path="/FlexibilidadeGradual7" element={<FlexibilidadeGradual7 />} />
        <Route path="/HistoriasSociais" element={<HistoriasSociais />} />
        <Route path="/ItensDeConforto" element={<ItensDeConforto />} />
        <Route path="/MapasEAplicativosDeNavegacao2" element={<MapasEAplicativosDeNavegacao2 />} />
        <Route path="/PreparacaoAntecipada1" element={<PreparacaoAntecipada1 />} />
        <Route path="/ReforcoPositivo8" element={<ReforcoPositivo8 />} />
        <Route path="/RotasAlternativasConhecidas4" element={<RotasAlternativasConhecidas4 />} />
        <Route path="/SuporteEmocional10" element={<SuporteEmocional10 />} />
        <Route path="/TecnicasDeRelaxamento5" element={<TecnicasDeRelaxamento5 />} />
        <Route path="/TreinamentoDeSituacoes10" element={<TreinamentoDeSituacoes10 />} />

        <Route path="/CompanheiroDeApoio2" element={<CompanheiroDeApoio2 />} />
        <Route path="/ComunicacaoPrevia7" element={<ComunicacaoPrevia7 />} />
        <Route path="/EspacosDeRefugio3" element={<EspacosDeRefugio3 />} />
        <Route path="/FeedbackPositivo11" element={<FeedbackPositivo11 />} />
        <Route path="/HorariosMenosMovimentados5" element={<HorariosMenosMovimentados5 />} />
        <Route path="/InteressesEspeciais10" element={<InteressesEspeciais10 />} />
        <Route path="/PlanejamentoAntecipado1" element={<PlanejamentoAntecipado1 />} />
        <Route path="/ProtetoresAuriculares4" element={<ProtetoresAuriculares4 />} />
        <Route path="/RotinaEPrevisibilidade9" element={<RotinaEPrevisibilidade9 />} />
        <Route path="/TecnicasDeRelaxamento6" element={<TecnicasDeRelaxamento6 />} />
        <Route path="/TempoLimitado8" element={<TempoLimitado8 />} />
      
        
      </Routes>
    </Router>
  );
}

export default App;