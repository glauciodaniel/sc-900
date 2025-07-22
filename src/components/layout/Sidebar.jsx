import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  LayoutDashboard, 
  Shield, 
  Key, 
  Cloud, 
  Monitor, 
  BookOpen,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Circle
} from 'lucide-react'
import { cn } from '../../lib/utils'
import { useProgress } from '../../contexts/ProgressContext'

const Sidebar = ({ open, setOpen }) => {
  const location = useLocation()
  const { progress } = useProgress()
  const [expandedModules, setExpandedModules] = useState({})

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }))
  }

  const navigationItems = [
    {
      title: 'Início',
      href: '/',
      icon: Home
    },
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: LayoutDashboard
    },
    {
      title: 'Módulo 1: Fundamentos de Segurança',
      href: '/modulo1',
      icon: Shield,
      moduleId: 'module1',
      subItems: [
        { title: 'Introdução ao SC-900', href: '/modulo1/introducao' },
        { title: 'Responsabilidade Compartilhada', href: '/modulo1/responsabilidade-compartilhada' },
        { title: 'Defesa em Profundidade', href: '/modulo1/defesa-profundidade' },
        { title: 'Tríade CIA', href: '/modulo1/triade-cia' },
        { title: 'Modelo Zero Trust', href: '/modulo1/zero-trust' },
        { title: 'Criptografia', href: '/modulo1/criptografia' }
      ]
    },
    {
      title: 'Módulo 2: Identidade e Acesso',
      href: '/modulo2',
      icon: Key,
      moduleId: 'module2',
      subItems: [
        { title: 'Identidade como Perímetro', href: '/modulo2/identidade-perimetro' },
        { title: 'Autenticação vs Autorização', href: '/modulo2/autenticacao-autorizacao' },
        { title: 'Provedores de Identidade', href: '/modulo2/provedores-identidade' },
        { title: 'SSO e Federação', href: '/modulo2/sso-federacao' }
      ]
    },
    {
      title: 'Módulo 3: Microsoft Entra ID',
      href: '/modulo3',
      icon: Cloud,
      moduleId: 'module3',
      subItems: [
        { title: 'Visão Geral do Entra ID', href: '/modulo3/visao-geral' },
        { title: 'Tipos de Identidades', href: '/modulo3/tipos-identidades' },
        { title: 'Identidade Híbrida', href: '/modulo3/identidade-hibrida' }
      ]
    },
    {
      title: 'Módulo 4: Demonstrações Práticas',
      href: '/modulo4',
      icon: Monitor,
      moduleId: 'module4',
      subItems: [
        { title: 'Portal Microsoft Entra', href: '/modulo4/portal-entra' },
        { title: 'Gerenciamento de Identidades', href: '/modulo4/gerenciamento-identidades' }
      ]
    },
    {
      title: 'Recursos',
      href: '/recursos',
      icon: BookOpen
    }
  ]

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  const getTopicStatus = (moduleId, topicHref) => {
    const topicId = topicHref.split('/').pop()
    return progress.modules[moduleId]?.topics[topicId] || false
  }

  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 transform bg-background border-r border-border transition-transform duration-200 ease-in-out md:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-full flex-col overflow-y-auto py-4">
          <nav className="flex-1 space-y-1 px-3">
            {navigationItems.map((item) => (
              <div key={item.href}>
                <div className="flex items-center">
                  <Link
                    to={item.href}
                    className={cn(
                      "flex flex-1 items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <item.icon className="mr-3 h-4 w-4" />
                    {item.title}
                  </Link>
                  
                  {item.subItems && (
                    <button
                      onClick={() => toggleModule(item.moduleId)}
                      className="p-1 rounded hover:bg-accent"
                    >
                      {expandedModules[item.moduleId] ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>

                {/* Sub-items */}
                {item.subItems && expandedModules[item.moduleId] && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.subItems.map((subItem) => {
                      const isCompleted = getTopicStatus(item.moduleId, subItem.href)
                      return (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className={cn(
                            "flex items-center rounded-lg px-3 py-2 text-sm transition-colors",
                            isActive(subItem.href)
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {isCompleted ? (
                            <CheckCircle className="mr-2 h-3 w-3 text-green-500" />
                          ) : (
                            <Circle className="mr-2 h-3 w-3" />
                          )}
                          {subItem.title}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Progress summary */}
          <div className="border-t border-border p-4">
            <div className="text-sm text-muted-foreground mb-2">
              Progresso do Curso
            </div>
            <div className="space-y-2">
              {Object.entries(progress.modules).map(([moduleId, moduleData], index) => {
                const completedTopics = Object.values(moduleData.topics).filter(Boolean).length
                const totalTopics = Object.keys(moduleData.topics).length || 1
                const moduleProgress = (completedTopics / totalTopics) * 100

                return (
                  <div key={moduleId} className="flex items-center justify-between text-xs">
                    <span>Módulo {index + 1}</span>
                    <span className="font-medium">{Math.round(moduleProgress)}%</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar

