import { Routes, Route } from 'react-router-dom'

const Module2 = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:ml-64">
      <h1 className="text-3xl font-bold mb-6">Módulo 2: Conceitos de Identidade e Acesso</h1>
      <Routes>
        <Route path="/" element={<Module2Overview />} />
        <Route path="/identidade-perimetro" element={<div>Identidade como Perímetro de Segurança</div>} />
        <Route path="/autenticacao-autorizacao" element={<div>Autenticação vs Autorização</div>} />
        <Route path="/provedores-identidade" element={<div>Provedores de Identidade e Federação</div>} />
        <Route path="/sso-federacao" element={<div>SSO e Federação</div>} />
      </Routes>
    </div>
  )
}

const Module2Overview = () => {
  return (
    <div>
      <p className="text-lg text-muted-foreground mb-8">
        Explore os conceitos fundamentais de identidade e acesso, incluindo autenticação, 
        autorização, provedores de identidade e federação.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Conteúdo será expandido nas próximas fases */}
      </div>
    </div>
  )
}

export default Module2

