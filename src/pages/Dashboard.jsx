import { Link } from 'react-router-dom'
import { 
  Clock, 
  BookOpen, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Target,
  Calendar,
  Award
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Progress } from '../components/ui/progress'
import { useProgress } from '../contexts/ProgressContext'

const Dashboard = () => {
  const { progress, calculateOverallProgress } = useProgress()
  const overallProgress = calculateOverallProgress()

  const modules = [
    {
      id: 'module1',
      title: 'Módulo 1: Fundamentos de Segurança',
      href: '/modulo1',
      topics: 6,
      duration: '60 min',
      description: 'Conceitos essenciais de segurança cibernética'
    },
    {
      id: 'module2', 
      title: 'Módulo 2: Identidade e Acesso',
      href: '/modulo2',
      topics: 4,
      duration: '60 min',
      description: 'Autenticação, autorização e SSO'
    },
    {
      id: 'module3',
      title: 'Módulo 3: Microsoft Entra ID',
      href: '/modulo3', 
      topics: 3,
      duration: '60 min',
      description: 'Visão geral e tipos de identidades'
    },
    {
      id: 'module4',
      title: 'Módulo 4: Demonstrações Práticas',
      href: '/modulo4',
      topics: 2,
      duration: '60 min',
      description: 'Portal e gerenciamento prático'
    }
  ]

  const getModuleProgress = (moduleId) => {
    const module = progress.modules[moduleId]
    if (!module) return 0
    
    const topics = Object.values(module.topics)
    if (topics.length === 0) return 0
    
    const completedTopics = topics.filter(Boolean).length
    return (completedTopics / topics.length) * 100
  }

  const stats = [
    {
      label: 'Progresso Geral',
      value: `${Math.round(overallProgress)}%`,
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    {
      label: 'Tempo Estudado',
      value: `${Math.round(progress.timeSpent / 60)}h ${progress.timeSpent % 60}m`,
      icon: Clock,
      color: 'text-green-600'
    },
    {
      label: 'Módulos Concluídos',
      value: `${Object.values(progress.modules).filter(m => m.completed).length}/4`,
      icon: CheckCircle,
      color: 'text-purple-600'
    },
    {
      label: 'Meta Diária',
      value: '30 min',
      icon: Target,
      color: 'text-orange-600'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 md:ml-64">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard do Curso</h1>
        <p className="text-muted-foreground">
          Acompanhe seu progresso no curso SC-900 e continue sua jornada de aprendizado
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progress Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            Progresso Geral do Curso
          </CardTitle>
          <CardDescription>
            Você completou {Math.round(overallProgress)}% do curso SC-900
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={overallProgress} className="mb-4" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Iniciado</span>
            <span>{Math.round(overallProgress)}% concluído</span>
            <span>Certificação</span>
          </div>
        </CardContent>
      </Card>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {modules.map((module) => {
          const moduleProgress = getModuleProgress(module.id)
          const isCompleted = progress.modules[module.id]?.completed || false
          
          return (
            <Card key={module.id} className="module-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{module.title}</CardTitle>
                    <CardDescription className="mb-3">
                      {module.description}
                    </CardDescription>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {module.duration}
                      </span>
                      <span className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {module.topics} tópicos
                      </span>
                    </div>
                  </div>
                  {isCompleted && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Concluído
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progresso</span>
                    <span>{Math.round(moduleProgress)}%</span>
                  </div>
                  <Progress value={moduleProgress} />
                </div>
                <Button asChild className="w-full">
                  <Link to={module.href}>
                    {moduleProgress > 0 ? 'Continuar' : 'Começar'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Próximas Atividades
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div>
                <p className="font-medium">Revisar Tríade CIA</p>
                <p className="text-sm text-muted-foreground">Módulo 1 - Conceitos fundamentais</p>
              </div>
              <Button size="sm" variant="outline">
                Revisar
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div>
                <p className="font-medium">Praticar no Portal Entra</p>
                <p className="text-sm text-muted-foreground">Módulo 4 - Demonstrações</p>
              </div>
              <Button size="sm" variant="outline">
                Praticar
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="mr-2 h-5 w-5" />
              Preparação para Certificação
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
              <Award className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Microsoft SC-900</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Fundamentos de Segurança, Conformidade e Identidade
              </p>
              <Button asChild>
                <Link to="/recursos">
                  Ver Recursos de Estudo
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard

