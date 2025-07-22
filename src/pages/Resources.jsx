import { 
  ExternalLink, 
  BookOpen, 
  FileText, 
  Video, 
  Download,
  Search,
  Award,
  Globe,
  Users
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'

const Resources = () => {
  const officialResources = [
    {
      title: "Documentação Oficial SC-900",
      description: "Guia completo da Microsoft para a certificação SC-900",
      url: "https://learn.microsoft.com/pt-br/certifications/security-compliance-and-identity-fundamentals/",
      icon: BookOpen,
      type: "Documentação"
    },
    {
      title: "Microsoft Entra ID Documentation",
      description: "Documentação técnica completa do Microsoft Entra ID",
      url: "https://docs.microsoft.com/pt-br/azure/active-directory/",
      icon: FileText,
      type: "Documentação"
    },
    {
      title: "Portal Azure",
      description: "Acesso ao portal oficial do Microsoft Azure",
      url: "https://portal.azure.com",
      icon: Globe,
      type: "Portal"
    },
    {
      title: "Microsoft Learn - SC-900",
      description: "Módulos de aprendizado gratuitos da Microsoft",
      url: "https://learn.microsoft.com/pt-br/training/paths/describe-concepts-of-security-compliance-identity/",
      icon: Video,
      type: "Curso Online"
    }
  ]

  const studyMaterials = [
    {
      title: "Glossário de Termos",
      description: "Definições de todos os termos técnicos do curso",
      icon: Search,
      internal: true
    },
    {
      title: "Resumos por Módulo",
      description: "Resumos executivos de cada módulo do curso",
      icon: FileText,
      internal: true
    },
    {
      title: "Infográficos",
      description: "Visualizações dos conceitos principais",
      icon: Download,
      internal: true
    },
    {
      title: "Simulados",
      description: "Questões práticas para testar conhecimento",
      icon: Award,
      internal: true
    }
  ]

  const communityResources = [
    {
      title: "Microsoft Tech Community",
      description: "Comunidade oficial da Microsoft para discussões técnicas",
      url: "https://techcommunity.microsoft.com/",
      icon: Users
    },
    {
      title: "Azure Friday",
      description: "Série de vídeos semanais sobre Azure e segurança",
      url: "https://azure.microsoft.com/pt-br/resources/videos/azure-friday/",
      icon: Video
    },
    {
      title: "Microsoft Security Blog",
      description: "Blog oficial com as últimas novidades em segurança",
      url: "https://www.microsoft.com/security/blog/",
      icon: BookOpen
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 md:ml-64">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Recursos de Estudo</h1>
        <p className="text-muted-foreground">
          Materiais complementares e recursos oficiais para aprofundar seus conhecimentos
        </p>
      </div>

      {/* Official Microsoft Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Globe className="mr-2 h-6 w-6 text-primary" />
          Recursos Oficiais Microsoft
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {officialResources.map((resource, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <resource.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {resource.type}
                      </Badge>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {resource.description}
                </CardDescription>
                <Button asChild className="w-full">
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    Acessar Recurso
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Study Materials */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <BookOpen className="mr-2 h-6 w-6 text-primary" />
          Materiais de Estudo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studyMaterials.map((material, index) => (
            <Card key={index} className="card-hover text-center">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-3">
                  <material.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{material.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {material.description}
                </CardDescription>
                <Button variant="outline" className="w-full">
                  {material.internal ? 'Em Breve' : 'Acessar'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Community Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Users className="mr-2 h-6 w-6 text-primary" />
          Recursos da Comunidade
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityResources.map((resource, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <resource.icon className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {resource.description}
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    Visitar
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Reference */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Award className="mr-2 h-6 w-6 text-primary" />
          Referência Rápida
        </h2>
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardHeader>
            <CardTitle>Informações da Certificação SC-900</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">90 min</div>
                <div className="text-sm text-muted-foreground">Duração do Exame</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">40-60</div>
                <div className="text-sm text-muted-foreground">Número de Questões</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">700</div>
                <div className="text-sm text-muted-foreground">Pontuação Mínima</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">$99</div>
                <div className="text-sm text-muted-foreground">Preço do Exame (USD)</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="font-semibold mb-3">Domínios do Exame:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>• Conceitos de segurança, conformidade e identidade (10-15%)</div>
                <div>• Capacidades das soluções de gerenciamento de identidade e acesso da Microsoft (25-30%)</div>
                <div>• Capacidades das soluções de segurança da Microsoft (25-30%)</div>
                <div>• Capacidades das soluções de conformidade da Microsoft (25-30%)</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default Resources

