import { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Shield, Eye, Zap, Lock, Users, Database } from 'lucide-react'
import Infographic from './Infographic'

const CIATriad = () => {
  const [selectedPillar, setSelectedPillar] = useState('confidentiality')
  const [hoveredThreat, setHoveredThreat] = useState(null)

  const pillars = {
    confidentiality: {
      name: 'Confidencialidade',
      icon: Lock,
      color: 'bg-blue-500',
      description: 'Garantir que informações sejam acessíveis apenas por pessoas autorizadas',
      principle: 'Quem pode VER?',
      examples: [
        'Criptografia de dados em trânsito e em repouso',
        'Controles de acesso baseados em funções (RBAC)',
        'Classificação e rotulagem de dados',
        'Políticas de compartilhamento seguro'
      ],
      threats: [
        { name: 'Vazamento de dados', impact: 'Alto', description: 'Exposição não autorizada de informações sensíveis' },
        { name: 'Espionagem', impact: 'Alto', description: 'Interceptação de comunicações confidenciais' },
        { name: 'Acesso não autorizado', impact: 'Médio', description: 'Usuários acessando dados sem permissão' },
        { name: 'Engenharia social', impact: 'Médio', description: 'Manipulação para obter informações confidenciais' }
      ],
      controls: [
        'Autenticação multifator (MFA)',
        'Criptografia AES-256',
        'Políticas de acesso condicional',
        'Data Loss Prevention (DLP)'
      ]
    },
    integrity: {
      name: 'Integridade',
      icon: Shield,
      color: 'bg-green-500',
      description: 'Assegurar que dados não sejam alterados de forma não autorizada',
      principle: 'Quem pode MODIFICAR?',
      examples: [
        'Assinaturas digitais e certificados',
        'Controle de versão e auditoria',
        'Checksums e hashing',
        'Backup e recuperação de dados'
      ],
      threats: [
        { name: 'Modificação maliciosa', impact: 'Alto', description: 'Alteração não autorizada de dados críticos' },
        { name: 'Corrupção de dados', impact: 'Alto', description: 'Perda de integridade por falhas técnicas' },
        { name: 'Ataques man-in-the-middle', impact: 'Médio', description: 'Interceptação e modificação de dados em trânsito' },
        { name: 'Insider threats', impact: 'Médio', description: 'Funcionários alterando dados maliciosamente' }
      ],
      controls: [
        'Assinaturas digitais',
        'Logs de auditoria',
        'Controle de mudanças',
        'Backup imutável'
      ]
    },
    availability: {
      name: 'Disponibilidade',
      icon: Zap,
      color: 'bg-orange-500',
      description: 'Garantir que sistemas e dados estejam acessíveis quando necessário',
      principle: 'QUANDO pode acessar?',
      examples: [
        'Redundância e alta disponibilidade',
        'Balanceamento de carga',
        'Planos de continuidade de negócios',
        'Monitoramento proativo de sistemas'
      ],
      threats: [
        { name: 'Ataques DDoS', impact: 'Alto', description: 'Sobrecarga intencional de sistemas' },
        { name: 'Falhas de hardware', impact: 'Alto', description: 'Indisponibilidade por problemas técnicos' },
        { name: 'Desastres naturais', impact: 'Médio', description: 'Eventos que afetam infraestrutura física' },
        { name: 'Falhas de software', impact: 'Médio', description: 'Bugs ou problemas de configuração' }
      ],
      controls: [
        'Redundância geográfica',
        'Load balancers',
        'Monitoramento 24/7',
        'Planos de DR/BC'
      ]
    }
  }

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'Alto': return 'bg-red-100 text-red-800'
      case 'Médio': return 'bg-yellow-100 text-yellow-800'
      case 'Baixo': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const currentPillar = pillars[selectedPillar]
  const PillarIcon = currentPillar.icon

  return (
    <Infographic
      title="Tríade CIA - Pilares da Segurança da Informação"
      description="Os três princípios fundamentais que formam a base de qualquer estratégia de segurança da informação."
      category="Fundamentos"
      difficulty="Básico"
      estimatedTime="10 min"
    >
      <div className="space-y-6">
        {/* CIA Triangle Visualization */}
        <div className="relative">
          <div className="flex justify-center mb-8">
            <div className="relative w-80 h-80">
              {/* Triangle Background */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <polygon
                  points="100,20 20,160 180,160"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-border"
                />
                <text x="100" y="15" textAnchor="middle" className="text-sm font-semibold fill-current">
                  SEGURANÇA
                </text>
              </svg>
              
              {/* Pillar Buttons */}
              <button
                onClick={() => setSelectedPillar('confidentiality')}
                className={`absolute top-8 left-1/2 transform -translate-x-1/2 p-4 rounded-full transition-all ${
                  selectedPillar === 'confidentiality' 
                    ? 'bg-blue-500 text-white scale-110' 
                    : 'bg-background border-2 border-blue-500 text-blue-500 hover:bg-blue-50'
                }`}
              >
                <Lock className="h-6 w-6" />
              </button>
              
              <button
                onClick={() => setSelectedPillar('integrity')}
                className={`absolute bottom-8 left-8 p-4 rounded-full transition-all ${
                  selectedPillar === 'integrity' 
                    ? 'bg-green-500 text-white scale-110' 
                    : 'bg-background border-2 border-green-500 text-green-500 hover:bg-green-50'
                }`}
              >
                <Shield className="h-6 w-6" />
              </button>
              
              <button
                onClick={() => setSelectedPillar('availability')}
                className={`absolute bottom-8 right-8 p-4 rounded-full transition-all ${
                  selectedPillar === 'availability' 
                    ? 'bg-orange-500 text-white scale-110' 
                    : 'bg-background border-2 border-orange-500 text-orange-500 hover:bg-orange-50'
                }`}
              >
                <Zap className="h-6 w-6" />
              </button>
              
              {/* Labels */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center">
                <div className="text-sm font-medium">Confidencialidade</div>
              </div>
              <div className="absolute bottom-16 left-2 text-center">
                <div className="text-sm font-medium">Integridade</div>
              </div>
              <div className="absolute bottom-16 right-2 text-center">
                <div className="text-sm font-medium">Disponibilidade</div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Pillar Details */}
        <Card className={`border-l-4 ${currentPillar.color.replace('bg-', 'border-')}`}>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-3 rounded-full ${currentPillar.color} text-white`}>
                <PillarIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{currentPillar.name}</h3>
                <p className="text-muted-foreground">{currentPillar.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <Eye className="h-4 w-4 mr-2" />
                  Pergunta-chave
                </h4>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <strong className="text-lg">{currentPillar.principle}</strong>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Controles Principais
                </h4>
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

        {/* Examples */}
        <Card>
          <CardContent className="p-4">
            <h4 className="font-semibold mb-3 flex items-center">
              <Database className="h-4 w-4 mr-2" />
              Exemplos Práticos de {currentPillar.name}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentPillar.examples.map((example, index) => (
                <div key={index} className="p-3 bg-muted/30 rounded-lg text-sm">
                  {example}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Threats and Risks */}
        <Card>
          <CardContent className="p-4">
            <h4 className="font-semibold mb-3">⚠️ Principais Ameaças à {currentPillar.name}</h4>
            <div className="space-y-2">
              {currentPillar.threats.map((threat, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  onMouseEnter={() => setHoveredThreat(threat.name)}
                  onMouseLeave={() => setHoveredThreat(null)}
                >
                  <div className="flex-1">
                    <div className="font-medium">{threat.name}</div>
                    {hoveredThreat === threat.name && (
                      <div className="text-sm text-muted-foreground mt-1">
                        {threat.description}
                      </div>
                    )}
                  </div>
                  <Badge className={getImpactColor(threat.impact)}>
                    {threat.impact}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Real World Scenario */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-3">🌍 Cenário Real: Vazamento de Dados</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <strong className="text-red-800">Confidencialidade Comprometida:</strong>
                <br />Dados pessoais de clientes expostos publicamente
              </div>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <strong className="text-yellow-800">Integridade em Risco:</strong>
                <br />Possível alteração maliciosa dos dados expostos
              </div>
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <strong className="text-orange-800">Disponibilidade Afetada:</strong>
                <br />Sistema pode ser desligado para investigação
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <strong className="text-blue-800">Lição:</strong> Um incidente pode afetar múltiplos pilares da CIA. 
              A segurança efetiva requer proteção equilibrada dos três aspectos.
            </div>
          </CardContent>
        </Card>
      </div>
    </Infographic>
  )
}

export default CIATriad

