import { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Shield, Users, Smartphone, Monitor, Database, Network, Building, CheckCircle, XCircle } from 'lucide-react'
import Infographic from './Infographic'

const ZeroTrustModel = () => {
  const [selectedPillar, setSelectedPillar] = useState('identity')
  const [selectedPrinciple, setSelectedPrinciple] = useState('never-trust')

  const principles = {
    'never-trust': {
      name: 'Never Trust (Nunca Confie)',
      description: 'Não confie automaticamente em nada dentro ou fora do perímetro da rede',
      color: 'bg-red-500',
      icon: XCircle,
      examples: [
        'Não confiar apenas na localização da rede',
        'Questionar todas as solicitações de acesso',
        'Tratar rede interna como não confiável',
        'Validar continuamente o contexto de segurança'
      ]
    },
    'always-verify': {
      name: 'Always Verify (Sempre Verifique)',
      description: 'Verifique explicitamente usando todos os dados disponíveis',
      color: 'bg-blue-500',
      icon: CheckCircle,
      examples: [
        'Autenticação multifator obrigatória',
        'Verificação contínua de identidade',
        'Análise de comportamento do usuário',
        'Validação de integridade do dispositivo'
      ]
    },
    'least-privilege': {
      name: 'Least Privilege (Menor Privilégio)',
      description: 'Limite o acesso do usuário com acesso Just-In-Time e Just-Enough',
      color: 'bg-green-500',
      icon: Shield,
      examples: [
        'Acesso mínimo necessário para a função',
        'Revisões periódicas de permissões',
        'Acesso temporário quando apropriado',
        'Segmentação baseada em necessidade'
      ]
    }
  }

  const pillars = {
    identity: {
      name: 'Identidades',
      icon: Users,
      color: 'bg-purple-500',
      description: 'Usuários, serviços e dispositivos que acessam recursos',
      technologies: [
        'Microsoft Entra ID',
        'Conditional Access',
        'Privileged Identity Management',
        'Identity Protection'
      ],
      controls: [
        'Autenticação multifator (MFA)',
        'Políticas de acesso condicional',
        'Monitoramento de identidades privilegiadas',
        'Detecção de anomalias comportamentais'
      ]
    },
    devices: {
      name: 'Dispositivos',
      icon: Smartphone,
      color: 'bg-orange-500',
      description: 'Endpoints que se conectam aos recursos corporativos',
      technologies: [
        'Microsoft Intune',
        'Windows Autopilot',
        'Microsoft Defender for Endpoint',
        'Compliance Policies'
      ],
      controls: [
        'Gerenciamento de dispositivos móveis (MDM)',
        'Políticas de conformidade',
        'Proteção contra ameaças avançadas',
        'Criptografia de dispositivos'
      ]
    },
    applications: {
      name: 'Aplicações',
      icon: Monitor,
      color: 'bg-blue-500',
      description: 'Software e serviços que processam dados corporativos',
      technologies: [
        'Azure App Service',
        'Microsoft Defender for Cloud Apps',
        'Application Proxy',
        'API Management'
      ],
      controls: [
        'Controle de acesso a aplicações',
        'Monitoramento de atividades suspeitas',
        'Proteção de APIs',
        'Shadow IT discovery'
      ]
    },
    data: {
      name: 'Dados',
      icon: Database,
      color: 'bg-green-500',
      description: 'Informações que precisam ser protegidas',
      technologies: [
        'Microsoft Purview',
        'Azure Information Protection',
        'Data Loss Prevention',
        'Microsoft Defender for Cloud'
      ],
      controls: [
        'Classificação e rotulagem de dados',
        'Prevenção contra perda de dados (DLP)',
        'Criptografia em trânsito e em repouso',
        'Governança de dados'
      ]
    },
    infrastructure: {
      name: 'Infraestrutura',
      icon: Building,
      color: 'bg-indigo-500',
      description: 'Recursos de computação, armazenamento e rede',
      technologies: [
        'Azure Security Center',
        'Azure Sentinel',
        'Azure Policy',
        'Azure Resource Manager'
      ],
      controls: [
        'Configuração segura por padrão',
        'Monitoramento contínuo de segurança',
        'Gestão de vulnerabilidades',
        'Controles de acesso baseados em função'
      ]
    },
    network: {
      name: 'Rede',
      icon: Network,
      color: 'bg-teal-500',
      description: 'Conectividade entre recursos e usuários',
      technologies: [
        'Azure Firewall',
        'Network Security Groups',
        'Azure Front Door',
        'Azure VPN Gateway'
      ],
      controls: [
        'Segmentação de rede',
        'Inspeção de tráfego',
        'Proteção DDoS',
        'Conectividade segura'
      ]
    }
  }

  const currentPrinciple = principles[selectedPrinciple]
  const currentPillar = pillars[selectedPillar]
  const PrincipleIcon = currentPrinciple.icon
  const PillarIcon = currentPillar.icon

  return (
    <Infographic
      title="Modelo Zero Trust - Nunca Confie, Sempre Verifique"
      description="Estratégia de segurança que assume violação e verifica explicitamente cada transação, aplicando o princípio do menor privilégio."
      category="Arquitetura"
      difficulty="Intermediário"
      estimatedTime="12 min"
    >
      <div className="space-y-6">
        {/* Zero Trust Diagram */}
        <div className="text-center mb-6">
          <img 
            src="/src/assets/zero_trust_model.png" 
            alt="Diagrama do Modelo Zero Trust"
            className="mx-auto max-w-full h-auto rounded-lg border border-border"
          />
        </div>

        {/* Principles Section */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">🎯 Princípios Fundamentais</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {Object.entries(principles).map(([key, principle]) => {
                const Icon = principle.icon
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedPrinciple(key)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedPrinciple === key
                        ? `${principle.color} text-white border-transparent`
                        : 'bg-background border-border hover:border-primary'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon className="h-5 w-5" />
                      <span className="font-semibold text-sm">{principle.name}</span>
                    </div>
                    <p className="text-xs opacity-90">{principle.description}</p>
                  </button>
                )
              })}
            </div>

            {/* Selected Principle Details */}
            <Card className={`border-l-4 ${currentPrinciple.color.replace('bg-', 'border-')}`}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 rounded-full ${currentPrinciple.color} text-white`}>
                    <PrincipleIcon className="h-4 w-4" />
                  </div>
                  <h4 className="font-semibold">{currentPrinciple.name}</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentPrinciple.examples.map((example, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                      {example}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Pillars Section */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">🏛️ Seis Pilares de Proteção</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
              {Object.entries(pillars).map(([key, pillar]) => {
                const Icon = pillar.icon
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedPillar(key)}
                    className={`p-3 rounded-lg border-2 transition-all text-center ${
                      selectedPillar === key
                        ? `${pillar.color} text-white border-transparent`
                        : 'bg-background border-border hover:border-primary'
                    }`}
                  >
                    <Icon className="h-6 w-6 mx-auto mb-2" />
                    <span className="text-xs font-medium">{pillar.name}</span>
                  </button>
                )
              })}
            </div>

            {/* Selected Pillar Details */}
            <Card className={`border-l-4 ${currentPillar.color.replace('bg-', 'border-')}`}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-full ${currentPillar.color} text-white`}>
                    <PillarIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{currentPillar.name}</h4>
                    <p className="text-muted-foreground">{currentPillar.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">🛠️ Tecnologias Microsoft</h5>
                    <div className="space-y-2">
                      {currentPillar.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="mr-2 mb-2">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3">🔒 Controles de Segurança</h5>
                    <ul className="space-y-1 text-sm">
                      {currentPillar.controls.map((control, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {control}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Traditional vs Zero Trust Comparison */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">⚖️ Tradicional vs Zero Trust</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-red-600 flex items-center">
                  <XCircle className="h-4 w-4 mr-2" />
                  Modelo Tradicional (Perímetro)
                </h4>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm">
                    <strong>Confia na localização:</strong> "Se está dentro da rede, é confiável"
                  </div>
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm">
                    <strong>Perímetro rígido:</strong> Firewall como principal defesa
                  </div>
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm">
                    <strong>Acesso amplo:</strong> Uma vez dentro, acesso a muitos recursos
                  </div>
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm">
                    <strong>Verificação única:</strong> Autenticação apenas no login inicial
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-green-600 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Modelo Zero Trust
                </h4>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm">
                    <strong>Nunca confia:</strong> "Verificar sempre, independente da localização"
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm">
                    <strong>Perímetro flexível:</strong> Múltiplas camadas de segurança
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm">
                    <strong>Menor privilégio:</strong> Acesso mínimo necessário para cada tarefa
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm">
                    <strong>Verificação contínua:</strong> Monitoramento e validação constantes
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Journey */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">🚀 Jornada de Implementação</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  1
                </div>
                <h4 className="font-semibold mb-2">Avaliar</h4>
                <p className="text-sm text-muted-foreground">
                  Inventário de ativos, usuários e fluxos de dados
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  2
                </div>
                <h4 className="font-semibold mb-2">Pilotar</h4>
                <p className="text-sm text-muted-foreground">
                  Implementar controles em grupos pequenos
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  3
                </div>
                <h4 className="font-semibold mb-2">Expandir</h4>
                <p className="text-sm text-muted-foreground">
                  Escalar para toda a organização
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  4
                </div>
                <h4 className="font-semibold mb-2">Otimizar</h4>
                <p className="text-sm text-muted-foreground">
                  Monitorar, ajustar e melhorar continuamente
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Infographic>
  )
}

export default ZeroTrustModel

