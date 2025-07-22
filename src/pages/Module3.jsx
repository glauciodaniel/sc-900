import { Routes, Route } from 'react-router-dom'

const Module3 = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:ml-64">
      <h1 className="text-3xl font-bold mb-6">Módulo 3: Microsoft Entra ID</h1>
      <Routes>
        <Route path="/" element={<Module3Overview />} />
        <Route path="/visao-geral" element={<div>Visão Geral do Microsoft Entra ID</div>} />
        <Route path="/tipos-identidades" element={<div>Tipos de Identidades no Entra ID</div>} />
        <Route path="/identidade-hibrida" element={<div>Identidade Híbrida</div>} />
      </Routes>
    </div>
  )
}

const Module3Overview = () => {
  return (
    <div>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda sobre o Microsoft Entra ID, seus tipos de identidades e como implementar 
        soluções de identidade híbrida.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Conteúdo será expandido nas próximas fases */}
      </div>
    </div>
  )
}

export default Module3

