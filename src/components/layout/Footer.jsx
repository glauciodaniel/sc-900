import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Course Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">SC-900</h3>
            <p className="text-sm text-muted-foreground">
              Curso completo sobre Fundamentos de Segurança, Conformidade e Identidade da Microsoft.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Duração: 4 horas</span>
              <span>•</span>
              <span>Primeira de 3 aulas</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Glossário
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Simulados
                </a>
              </li>
            </ul>
          </div>

          {/* Microsoft Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Recursos Microsoft</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://learn.microsoft.com/pt-br/certifications/security-compliance-and-identity-fundamentals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center"
                >
                  Certificação SC-900
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.microsoft.com/pt-br/azure/active-directory/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center"
                >
                  Documentação Entra ID
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://portal.azure.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center"
                >
                  Portal Azure
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Contato</h4>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Curso SC-900. Material educacional baseado na documentação oficial da Microsoft.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span className="text-xs text-muted-foreground">
              Versão 1.0
            </span>
            <span className="text-xs text-muted-foreground">
              Atualizado em Janeiro 2024
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

