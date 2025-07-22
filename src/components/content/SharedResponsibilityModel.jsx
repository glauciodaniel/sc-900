import { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import Infographic from './Infographic'

const SharedResponsibilityModel = () => {
  const [selectedService, setSelectedService] = useState('saas')
  const [hoveredItem, setHoveredItem] = useState(null)

  const services = {
    saas: {
      name: 'SaaS (Software as a Service)',
      example: 'Microsoft 365, Salesforce',
      color: 'bg-blue-500',
      description: 'Aplicações completas fornecidas pela nuvem'
    },
    paas: {
      name: 'PaaS (Platform as a Service)',
      example: 'Azure App Service, Heroku',
      color: 'bg-green-500',
      description: 'Plataforma de desenvolvimento e deployment'
    },
    iaas: {
      name: 'IaaS (Infrastructure as a Service)',
      example: 'Azure VMs, AWS EC2',
      color: 'bg-purple-500',
      description: 'Infraestrutura virtualizada sob demanda'
    }
  }

  const responsibilities = [
    {
      id: 'data',
      name: 'Dados e Informações',
      customer: { saas: true, paas: true, iaas: true },
      description: 'Classificação, proteção e governança dos dados'
    },
    {
      id: 'devices',
      name: 'Dispositivos (Mobile e PCs)',
      customer: { saas: true, paas: true, iaas: true },
      description: 'Gerenciamento e segurança dos endpoints'
    },
    {
      id: 'accounts',
      name: 'Contas e Identidades',
      customer: { saas: true, paas: true, iaas: true },
      description: 'Gerenciamento de usuários e controle de acesso'
    },
    {
      id: 'identity',
      name: 'Infraestrutura de Identidade',
      customer: { saas: false, paas: true, iaas: true },
      description: 'Diretórios, federação e serviços de identidade'
    },
    {
      id: 'applications',
      name: 'Aplicações',
      customer: { saas: false, paas: true, iaas: true },
      description: 'Aplicações customizadas e suas configurações'
    },
    {
      id: 'network',
      name: 'Controles de Rede',
      customer: { saas: false, paas: false, iaas: true },
      description: 'Firewalls, segmentação e controles de tráfego'
    },
    {
      id: 'os',
      name: 'Sistema Operacional',
      customer: { saas: false, paas: false, iaas: true },
      description: 'Patches, configurações e hardening do SO'
    },
    {
      id: 'physical',
      name: 'Hosts Físicos',
      customer: { saas: false, paas: false, iaas: false },
      description: 'Servidores físicos e infraestrutura de hardware'
    },
    {
      id: 'datacenter',
      name: 'Rede Física',
      customer: { saas: false, paas: false, iaas: false },
      description: 'Infraestrutura de rede do datacenter'
    },
    {
      id: 'facility',
      name: 'Datacenter Físico',
      customer: { saas: false, paas: false, iaas: false },
      description: 'Instalações físicas, energia e refrigeração'
    }
  ]

  const getResponsibilityColor = (item, service) => {
    if (item.customer[service]) {
      return 'bg-orange-500 text-white'
    } else {
      return 'bg-blue-500 text-white'
    }
  }

  const getResponsibilityLabel = (item, service) => {
    return item.customer[service] ? 'Cliente' : 'Microsoft'
  }

  return (
    <Infographic
      title="Modelo de Responsabilidade Compartilhada"
      description="Entenda como as responsabilidades de segurança são divididas entre Microsoft e cliente nos diferentes modelos de serviço em nuvem."
      category="Fundamentos"
      difficulty="Básico"
      estimatedTime="8 min"
    >
      <div className="space-y-6">
        {/* Service Type Selector */}
        <div className="flex flex-wrap gap-3 justify-center">
          {Object.entries(services).map(([key, service]) => (
            <button
              key={key}
              onClick={() => setSelectedService(key)}
              className={`px-4 py-2 rounded-lg border-2 transition-all ${
                selectedService === key
                  ? `${service.color} text-white border-transparent`
                  : 'bg-background border-border hover:border-primary'
              }`}
            >
              <div className="font-semibold">{service.name}</div>
              <div className="text-xs opacity-80">{service.example}</div>
            </button>
          ))}
        </div>

        {/* Selected Service Description */}
        <Card className="bg-muted/30">
          <CardContent className="p-4">
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">
                {services[selectedService].name}
              </h3>
              <p className="text-muted-foreground">
                {services[selectedService].description}
              </p>
              <Badge variant="outline" className="mt-2">
                Exemplo: {services[selectedService].example}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Responsibility Matrix */}
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="inline-flex items-center px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium">
                🏢 Responsabilidade do Cliente
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">
                ☁️ Responsabilidade da Microsoft
              </div>
            </div>
          </div>

          {responsibilities.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="flex-1">
                <div className="font-medium">{item.name}</div>
                {hoveredItem === item.id && (
                  <div className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </div>
                )}
              </div>
              <div className="ml-4">
                <Badge 
                  className={getResponsibilityColor(item, selectedService)}
                >
                  {getResponsibilityLabel(item, selectedService)}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Key Insights */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-3 flex items-center">
              💡 Insights Importantes
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>SaaS:</strong> Microsoft gerencia quase tudo, cliente foca em dados e acesso
              </div>
              <div>
                <strong>PaaS:</strong> Responsabilidade compartilhada na camada de aplicação
              </div>
              <div>
                <strong>IaaS:</strong> Cliente tem mais controle e responsabilidades
              </div>
              <div>
                <strong>Sempre do Cliente:</strong> Dados, dispositivos e identidades
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real World Examples */}
        <Card>
          <CardContent className="p-4">
            <h4 className="font-semibold mb-3">🌍 Exemplos Práticos</h4>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-muted/50 rounded-lg">
                <strong>Cenário:</strong> Empresa usando Microsoft 365 (SaaS)
                <br />
                <strong>Microsoft:</strong> Mantém servidores, aplicações, patches de segurança
                <br />
                <strong>Cliente:</strong> Gerencia usuários, permissões, classificação de dados
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <strong>Cenário:</strong> Aplicação web no Azure App Service (PaaS)
                <br />
                <strong>Microsoft:</strong> Infraestrutura, SO, runtime
                <br />
                <strong>Cliente:</strong> Código da aplicação, configurações, dados
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <strong>Cenário:</strong> VM no Azure (IaaS)
                <br />
                <strong>Microsoft:</strong> Hardware físico, hypervisor, rede física
                <br />
                <strong>Cliente:</strong> SO, aplicações, rede virtual, dados
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Infographic>
  )
}

export default SharedResponsibilityModel

