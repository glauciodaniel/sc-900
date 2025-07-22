import { Routes, Route } from 'react-router-dom'

const Module4 = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:ml-64">
      <h1 className="text-3xl font-bold mb-6">Módulo 4: Demonstrações Práticas no Microsoft Entra</h1>
      <Routes>
        <Route path="/" element={<Module4Overview />} />
        <Route path="/portal-entra" element={<div>Navegando pelo Portal Microsoft Entra</div>} />
        <Route path="/gerenciamento-identidades" element={<div>Gerenciamento de Identidades no Entra ID</div>} />
      </Routes>
    </div>
  )
}

const Module4Overview = () => {
  return (
    <div>
      <p className="text-lg text-muted-foreground mb-8">
        Demonstrações práticas do Microsoft Entra ID, incluindo navegação no portal 
        e gerenciamento de identidades.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Conteúdo será expandido nas próximas fases */}
      </div>
    </div>
  )
}

export default Module4

