import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Clock, 
  Users, 
  Award, 
  BookOpen,
  Shield,
  Key,
  Cloud,
  Monitor,
  CheckCircle,
  Star
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

const Home = () => {
  const modules = [
    {
      id: 1,
      title: "Fundamentos de Segurança",
      description: "Conceitos essenciais de segurança cibernética, modelos de responsabilidade e defesa em profundidade.",
      icon: Shield,
      duration: "60 min",
      topics: 6,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Identidade e Acesso",
      description: "Autenticação, autorização, provedores de identidade e conceitos de SSO.",
      icon: Key,
      duration: "60 min",
      topics: 4,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Microsoft Entra ID",
      description: "Visão geral do Entra ID, tipos de identidades e identidade híbrida.",
      icon: Cloud,
      duration: "60 min",
      topics: 3,
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Demonstrações Práticas",
      description: "Navegação no portal e gerenciamento prático de identidades.",
      icon: Monitor,
      duration: "60 min",
      topics: 2,
      color: "bg-orange-500"
    }
  ]

  const features = [
    {
      icon: BookOpen,
      title: "Conteúdo Abrangente",
      description: "Material completo baseado na documentação oficial da Microsoft"
    },
    {
      icon: Users,
      title: "Exemplos Reais",
      description: "Casos práticos e analogias para facilitar o entendimento"
    },
    {
      icon: Award,
      title: "Preparação para Certificação",
      description: "Conteúdo alinhado com os objetivos do exame SC-900"
    },
    {
      icon: Clock,
      title: "Aprendizado Flexível",
      description: "Estude no seu próprio ritmo com progresso salvo automaticamente"
    }
  ]

  const stats = [
    { label: "Horas de Conteúdo", value: "4h" },
    { label: "Módulos", value: "4" },
    { label: "Tópicos", value: "15" },
    { label: "Demonstrações", value: "2" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg hero-pattern">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Certificação Microsoft SC-900
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Fundamentos de Segurança, Conformidade e Identidade
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Domine os conceitos essenciais de segurança cibernética e prepare-se para a certificação Microsoft SC-900 
              com conteúdo abrangente e exemplos práticos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/dashboard">
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/recursos">
                  Ver Recursos
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Módulos do Curso
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quatro módulos estruturados para uma compreensão completa dos fundamentos de segurança
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {modules.map((module) => (
              <Card key={module.id} className="module-card card-hover group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${module.color} text-white`}>
                      <module.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        Módulo {module.id}: {module.title}
                      </CardTitle>
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
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {module.description}
                  </CardDescription>
                  <Button asChild className="w-full group-hover:bg-primary/90">
                    <Link to={`/modulo${module.id}`}>
                      Acessar Módulo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher este curso?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvido com foco na qualidade do aprendizado e preparação efetiva para a certificação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto text-center p-8 md:p-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="h-6 w-6 text-yellow-500 fill-current" />
                  <Star className="h-6 w-6 text-yellow-500 fill-current" />
                  <Star className="h-6 w-6 text-yellow-500 fill-current" />
                  <Star className="h-6 w-6 text-yellow-500 fill-current" />
                  <Star className="h-6 w-6 text-yellow-500 fill-current" />
                </div>
              </div>
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Pronto para começar sua jornada?
              </CardTitle>
              <CardDescription className="text-lg mb-8">
                Junte-se a milhares de profissionais que já se certificaram com a Microsoft. 
                Comece hoje mesmo e transforme sua carreira em segurança cibernética.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/dashboard">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Iniciar Curso Agora
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/recursos">
                    Ver Recursos Gratuitos
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Home

