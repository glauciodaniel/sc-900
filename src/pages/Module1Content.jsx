import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Progress } from '../components/ui/progress'
import { 
  BookOpen, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Shield,
  Users,
  Lock,
  Eye,
  Layers,
  Target
} from 'lucide-react'
import SharedResponsibilityModel from '../components/content/SharedResponsibilityModel'
import CIATriad from '../components/content/CIATriad'
import ZeroTrustModel from '../components/content/ZeroTrustModel'
import { useProgress } from '../contexts/ProgressContext'

const Module1Content = () => {
  const location = useLocation()
  const { markTopicComplete } = useProgress()

  const topics = [
    {
      id: 'introducao',
      title: 'Introdução ao SC-900',
      duration: '10 min',
      path: '/modulo1/introducao',
      description: 'Visão geral da certificação e objetivos do curso'
    },
    {
      id: 'responsabilidade-compartilhada',
      title: 'Responsabilidade Compartilhada',
      duration: '15 min',
      path: '/modulo1/responsabilidade-compartilhada',
      description: 'Como responsabilidades são divididas entre provedor e cliente'
    },
    {
      id: 'defesa-profundidade',
      title: 'Defesa em Profundidade',
      duration: '10 min',
      path: '/modulo1/defesa-profundidade',
      description: 'Estratégia de múltiplas camadas de segurança'
    },
    {
      id: 'triade-cia',
      title: 'Tríade CIA',
      duration: '15 min',
      path: '/modulo1/triade-cia',
      description: 'Confidencialidade, Integridade e Disponibilidade'
    },
    {
      id: 'zero-trust',
      title: 'Modelo Zero Trust',
      duration: '15 min',
      path: '/modulo1/zero-trust',
      description: 'Nunca confie, sempre verifique'
    },
    {
      id: 'criptografia',
      title: 'Conceitos de Criptografia',
      duration: '10 min',
      path: '/modulo1/criptografia',
      description: 'Fundamentos de criptografia e proteção de dados'
    }
  ]

  const getCurrentTopicIndex = () => {
    return topics.findIndex(topic => location.pathname.includes(topic.id))
  }

  const currentIndex = getCurrentTopicIndex()
  const currentTopic = topics[currentIndex]
  const nextTopic = topics[currentIndex + 1]
  const prevTopic = topics[currentIndex - 1]

  const handleTopicComplete = () => {
    if (currentTopic) {
      markTopicComplete('module1', currentTopic.id)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 md:ml-64">
      <div className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
          <Link to="/" className="hover:text-foreground">Início</Link>
          <span>/</span>
          <Link to="/modulo1" className="hover:text-foreground">Módulo 1</Link>
          {currentTopic && (
            <>
              <span>/</span>
              <span className="text-foreground">{currentTopic.title}</span>
            </>
          )}
        </div>
        <h1 className="text-3xl font-bold mb-2">Módulo 1: Fundamentos de Segurança</h1>
        <p className="text-muted-foreground">
          Conceitos essenciais de segurança cibernética, modelos de responsabilidade e estratégias de defesa
        </p>
      </div>

      <Routes>
        <Route path="/" element={<Module1Overview topics={topics} />} />
        <Route path="/introducao" element={<IntroducaoSC900 />} />
        <Route path="/responsabilidade-compartilhada" element={<ResponsabilidadeCompartilhada />} />
        <Route path="/defesa-profundidade" element={<DefesaProfundidade />} />
        <Route path="/triade-cia" element={<TriadeCIA />} />
        <Route path="/zero-trust" element={<ZeroTrust />} />
        <Route path="/criptografia" element={<Criptografia />} />
      </Routes>

      {/* Navigation Footer */}
      {currentTopic && (
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div>
              {prevTopic && (
                <Button asChild variant="outline">
                  <Link to={prevTopic.path}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {prevTopic.title}
                  </Link>
                </Button>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <Button onClick={handleTopicComplete} variant="outline">
                <CheckCircle className="mr-2 h-4 w-4" />
                Marcar como Concluído
              </Button>
              
              {nextTopic && (
                <Button asChild>
                  <Link to={nextTopic.path}>
                    {nextTopic.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Module 1 Overview Component
const Module1Overview = ({ topics }) => {
  return (
    <div className="space-y-8">
      {/* Module Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            Progresso do Módulo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={33} className="mb-4" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>2 de 6 tópicos concluídos</span>
            <span>33% completo</span>
          </div>
        </CardContent>
      </Card>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic, index) => (
          <Card key={topic.id} className="module-card card-hover">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{topic.title}</CardTitle>
                  <CardDescription className="mb-3">
                    {topic.description}
                  </CardDescription>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {topic.duration}
                    </span>
                    <Badge variant="outline">
                      Tópico {index + 1}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link to={topic.path}>
                  Estudar Tópico
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Learning Objectives */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="mr-2 h-5 w-5" />
            Objetivos de Aprendizagem
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Ao final deste módulo, você será capaz de:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Explicar conceitos fundamentais de segurança
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Descrever o modelo de responsabilidade compartilhada
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Identificar estratégias de defesa em profundidade
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Competências desenvolvidas:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Aplicar princípios da tríade CIA
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Implementar modelo Zero Trust
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Utilizar conceitos de criptografia
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Individual Topic Components
const IntroducaoSC900 = () => (
  <div className="space-y-8">
    <Card>
      <CardHeader>
        <CardTitle>Introdução à Certificação SC-900</CardTitle>
        <CardDescription>
          Compreenda os objetivos e o escopo da certificação Microsoft SC-900
        </CardDescription>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <p>
          A certificação Microsoft SC-900 (Security, Compliance, and Identity Fundamentals) é uma certificação 
          de nível fundamental que valida conhecimentos básicos sobre conceitos de segurança, conformidade e identidade.
        </p>
        
        <h3>Público-alvo</h3>
        <ul>
          <li>Profissionais de TI iniciantes</li>
          <li>Estudantes interessados em segurança</li>
          <li>Profissionais de negócios que trabalham com tecnologia</li>
          <li>Qualquer pessoa interessada em fundamentos de segurança</li>
        </ul>

        <h3>Domínios do Exame</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Conceitos de Segurança (10-15%)</h4>
              <p className="text-sm text-muted-foreground">
                Fundamentos de segurança, conformidade e identidade
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Identidade e Acesso (25-30%)</h4>
              <p className="text-sm text-muted-foreground">
                Soluções de gerenciamento de identidade da Microsoft
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Segurança Microsoft (25-30%)</h4>
              <p className="text-sm text-muted-foreground">
                Capacidades das soluções de segurança da Microsoft
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Conformidade (25-30%)</h4>
              <p className="text-sm text-muted-foreground">
                Soluções de conformidade da Microsoft
              </p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  </div>
)

const ResponsabilidadeCompartilhada = () => (
  <div className="space-y-8">
    <Card>
      <CardHeader>
        <CardTitle>Modelo de Responsabilidade Compartilhada</CardTitle>
        <CardDescription>
          Entenda como as responsabilidades de segurança são divididas entre provedor de nuvem e cliente
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-6">
          O modelo de responsabilidade compartilhada define claramente quais aspectos de segurança são 
          responsabilidade do provedor de nuvem (Microsoft) e quais são responsabilidade do cliente.
        </p>
      </CardContent>
    </Card>
    
    <SharedResponsibilityModel />
  </div>
)

const DefesaProfundidade = () => (
  <div className="space-y-8">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Layers className="mr-2 h-5 w-5" />
          Defesa em Profundidade
        </CardTitle>
        <CardDescription>
          Estratégia de segurança em múltiplas camadas para proteção abrangente
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p>
          A defesa em profundidade é uma estratégia que utiliza múltiplas camadas de segurança para proteger 
          informações e sistemas. Se uma camada falhar, outras camadas continuam fornecendo proteção.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { layer: 'Física', description: 'Controle de acesso físico aos datacenters', icon: '🏢' },
            { layer: 'Identidade', description: 'Autenticação e autorização de usuários', icon: '👤' },
            { layer: 'Perímetro', description: 'Firewalls e proteção DDoS', icon: '🛡️' },
            { layer: 'Rede', description: 'Segmentação e controles de tráfego', icon: '🌐' },
            { layer: 'Computação', description: 'Proteção de VMs e containers', icon: '💻' },
            { layer: 'Aplicação', description: 'Segurança no código e APIs', icon: '📱' },
            { layer: 'Dados', description: 'Criptografia e classificação', icon: '📊' }
          ].map((item, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="font-semibold mb-1">{item.layer}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
)

const TriadeCIA = () => (
  <div className="space-y-8">
    <Card>
      <CardHeader>
        <CardTitle>Tríade CIA</CardTitle>
        <CardDescription>
          Os três pilares fundamentais da segurança da informação
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-6">
          A tríade CIA representa os três princípios fundamentais que devem ser considerados 
          em qualquer estratégia de segurança da informação.
        </p>
      </CardContent>
    </Card>
    
    <CIATriad />
  </div>
)

const ZeroTrust = () => (
  <div className="space-y-8">
    <Card>
      <CardHeader>
        <CardTitle>Modelo Zero Trust</CardTitle>
        <CardDescription>
          Estratégia de segurança baseada no princípio "nunca confie, sempre verifique"
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-6">
          O Zero Trust é um modelo de segurança que assume que não há perímetro de rede tradicional 
          e que todas as solicitações devem ser verificadas antes de conceder acesso.
        </p>
      </CardContent>
    </Card>
    
    <ZeroTrustModel />
  </div>
)

const Criptografia = () => (
  <div className="space-y-8">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Lock className="mr-2 h-5 w-5" />
          Conceitos de Criptografia
        </CardTitle>
        <CardDescription>
          Fundamentos de criptografia e proteção de dados
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p>
          A criptografia é a prática de proteger informações através da codificação, 
          tornando-as ilegíveis para pessoas não autorizadas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Criptografia Simétrica</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Usa a mesma chave para criptografar e descriptografar</li>
                <li>• Mais rápida que a assimétrica</li>
                <li>• Exemplo: AES (Advanced Encryption Standard)</li>
                <li>• Ideal para grandes volumes de dados</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Criptografia Assimétrica</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Usa par de chaves (pública e privada)</li>
                <li>• Mais segura para troca de chaves</li>
                <li>• Exemplo: RSA, ECC</li>
                <li>• Ideal para autenticação e assinaturas</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">Aplicações na Microsoft</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Azure Key Vault:</strong> Gerenciamento seguro de chaves e segredos
              </div>
              <div>
                <strong>BitLocker:</strong> Criptografia de disco completo
              </div>
              <div>
                <strong>TLS/SSL:</strong> Proteção de dados em trânsito
              </div>
              <div>
                <strong>Azure Information Protection:</strong> Classificação e proteção de documentos
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  </div>
)

export default Module1Content

