import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldAlert, Search, FileCheck, Presentation, Menu, X, GoalIcon, ContactRoundIcon, DnaIcon, ActivityIcon, BookOpenCheckIcon, BiohazardIcon } from 'lucide-react';

function EbookCard({ icon, title, description, link, status }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative bg-slate-900/70 border border-white/10 
                 rounded-2xl p-8 backdrop-blur-xl
                 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]
                 transition-all"
    >
      {status && (
        <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full 
                         bg-purple-500/20 text-purple-300 uppercase tracking-widest">
          {status}
        </span>
      )}

      <div className="mb-6 w-14 h-14 flex items-center justify-center 
                      rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-white mb-3">
        {title}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed mb-6 text-justify hyphens-auto">
        {description}
      </p>

      {link ? (
        <a
          href={link}
          target="_blank"
          className="text-purple-400 hover:text-purple-300 
                     font-medium transition"
        >
          Baixar e-book →
        </a>
      ) : (
        <span className="text-slate-500 text-sm italic">
          Disponível em breve
        </span>
      )}
    </motion.div>
  )
}


// --- COMPONENTE DO CARD RESPONSIVO ---
function ServiceCard({ icon, title, description }) {
  return (
    <motion.div 
      className="relative min-h-[350px] w-full group [perspective:1000px]"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl">
        
        {/* LADO A: FRENTE */}
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center rounded-2xl bg-slate-900 border border-white/10 text-white [backface-visibility:hidden] p-6">
          <div className="text-purple-500 mb-6 p-4 rounded-full bg-purple-500/5 border border-purple-500/20">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-center tracking-tight leading-tight">{title}</h3>
          <div className="absolute bottom-4 text-[10px] uppercase tracking-widest text-slate-500 opacity-50">
            Toque para saber mais
          </div>
        </div>

        {/* LADO B: VERSO */}
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-purple-600 p-6 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center border border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
          <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-purple-100 opacity-80">
            Detalhes
          </h4>
          <p className="text-sm sm:text-base leading-relaxed font-medium text-justify hyphens-auto">
            {description}
          </p>
        </div>
        
      </div>
    </motion.div>
  );
}

function App() {
  const [secaoAtiva, setSecaoAtiva] = useState('home');

  const animacaoEntrada = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4 }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      
      {/* Navbar Responsiva */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-4 md:gap-8">
          {['home', 'quem-somos', 'servicos', 'ebooks', 'contato'].map((item) => (
            <button 
              key={item}
              onClick={() => setSecaoAtiva(item)}
              className={`text-xs md:text-sm uppercase tracking-widest transition-all ${
                secaoAtiva === item ? 'text-purple-500 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.replace('-', ' ')}
            </button>
          ))}
        </div>
      </nav>

      {/* Área de Conteúdo */}
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <AnimatePresence mode="wait">
          
          {secaoAtiva === 'home' && (
            <motion.div key="home" {...animacaoEntrada} className="text-center space-y-6">
              {/* Contêiner da Imagem Responsiva */}
              <div className="flex justify-center mb-8">
                <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 animate-float">
                  <img 
                    src="logo_purpurasec-01.png" 
                    alt="Mascote PurpuraSec"
                    className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] animate-pulse-slow "
                  />
                </div>
              </div>
              {/*<h1 className="text-5xl md:text-7xl font-black text-white">
                Purpura<span className="text-purple-600">Sec</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Estratégia, análise e proteção para o seu ambiente digital.
              </p>*/}
            </motion.div>
          )}

          {secaoAtiva === 'quem-somos' && (
            <motion.div 
              key="sobre" 
              {...animacaoEntrada} 
              className="max-w-5xl mx-auto space-y-12 pb-20"
            >
              {/* Card Principal com Efeito de Vidro e Borda Brilhante */}
              <div className="relative group">
                {/* Brilho de fundo (Glow) */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                
                <div className="relative bg-slate-900/80 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl">
                  <header className="flex items-center gap-4 mb-8">
                    {/* <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/40">
                      <ShieldAlert className="text-purple-400 w-8 h-8" />
                    </div> 
                    */}
                    <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter">
                      QUEM <span className="text-purple-500">SOMOS</span>
                    </h2>
                  </header>

                  {/* Mude a div do Grid para garantir que ela ocupe a largura total e centralize */}
                  <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center w-full">
                    <div className="space-y-6 text-slate-300 text-lg leading-relaxed text-left max-w-3xl mx-auto">
                      <p className="text-slate-300 text-lg leading-relaxed text-justify">
                        Somos uma equipe apaixonada e dedicada ao estudo constante da cibersegurança. Antecipamos riscos para blindar operações em um mundo digital onde ameaças evoluem a cada segundo. Nossa missão é garantir que o seu negócio foque no crescimento, enquanto nós construímos a sua proteção digital.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            {/* BLOCO: NOSSO DIFERENCIAL - RESOLUÇÃO FINAL DE RESPONSIVIDADE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto px-4">
              <h3 className="col-span-full text-left text-xl font-bold text-white/50 uppercase tracking-widest ml-2 mb-4">
                Nosso Diferencial
              </h3>
              
              {/* Card DNA do negócio */}
              <div className="bg-slate-900/60 border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-6 hover:bg-slate-800 transition-all cursor-default group">
                {/* Ícone: Centralizado no mobile, alinhado à esquerda no PC */}
                <div className="w-16 h-16 shrink-0 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 border border-green-500/30 group-hover:scale-110 transition-transform">
                  <DnaIcon size={32} />
                </div>
                
                {/* Texto: Centralizado no mobile, alinhado à esquerda no PC */}
                <div className="text-center md:text-left">
                  <h4 className="text-white font-bold text-lg mb-2">DNA do negócio</h4>
                  <p className="text-slate-400 text-sm leading-relaxed text-justify md:text-left hyphens-auto">
                    Não aplicamos checklists genéricos. Analisamos o fluxo específico da sua empresa para criar camadas de proteção que fazem sentido para o seu setor.
                  </p>
                </div>
              </div>

              {/* Card Metodologia */}
              <div className="bg-slate-900/60 border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-6 hover:bg-slate-800 transition-all cursor-default group">
                <div className="w-16 h-16 shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 border border-blue-500/30 group-hover:scale-110 transition-transform">
                  <ActivityIcon size={32} />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-white font-bold text-lg mb-2">Além do Diagnóstico</h4>
                  <p className="text-slate-400 text-sm leading-relaxed text-justify md:text-left hyphens-auto">
                    Não entregamos apenas uma lista de problemas. Fornecemos um plano de ação técnico detalhado e acompanhamos a implementação das correções.
                  </p>
                </div>
              </div>

              {/* Card Apresentação */}
              <div className="bg-slate-900/60 border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-6 hover:bg-slate-800 transition-all cursor-default group">
                <div className="w-16 h-16 shrink-0 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 border border-yellow-500/30 group-hover:scale-110 transition-transform">
                  <BookOpenCheckIcon size={32} />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-white font-bold text-lg mb-2">Apresentação Técnica</h4>
                  <p className="text-slate-400 text-sm leading-relaxed text-justify md:text-left hyphens-auto">
                    Relatórios claros, objetivos e direcionados à tomada de decisão estratégica, facilitando o entendimento de riscos críticos.
                  </p>
                </div>
              </div>

              {/* Card Arsenal exclusivo */}
              <div className="bg-slate-900/60 border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-6 hover:bg-slate-800 transition-all cursor-default group">
                <div className="w-16 h-16 shrink-0 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 border border-red-500/30 group-hover:scale-110 transition-transform">
                  <BiohazardIcon size={32} />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-white font-bold text-lg mb-2">Arsenal Exclusivo</h4>
                  <p className="text-slate-400 text-sm leading-relaxed text-justify md:text-left hyphens-auto">
                    Utilizamos ferramentas desenvolvidas internamente para identificar vulnerabilidades que scanners comerciais costumam ignorar.
                  </p>
                </div>
              </div>
            </div>
            </motion.div>
          )}

          {secaoAtiva === 'servicos' && (
            <motion.div
              key="servicos"
              {...animacaoEntrada}
              className="flex flex-col items-center space-y-12"
            >
              <h2 className="text-4xl font-bold text-center text-white">
                Nossos Serviços
              </h2>

              {/* GRID DE SERVIÇOS: 1 coluna no mobile, 2 no PC */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto px-4">
                <ServiceCard 
                  icon={<Search size={40} />} 
                  title="Análise de Vulnerabilidades" 
                  description="Identificação sistemática de brechas em sistemas e redes via scanning de ativos, classificação de riscos pelo CVSS e entrega de planos de remediação técnicos."
                />
                <ServiceCard 
                  icon={<GoalIcon size={40} />} 
                  title="Pentest Avançado" 
                  description="Exercício de segurança ofensiva baseado em metodologias OWASP. Realizamos exploração real de falhas e testes de intrusão para validar sua defesa."
                />
                <ServiceCard 
                  icon={<FileCheck size={40} />} 
                  title="Auditoria & Conformidade" 
                  description="Análise detalhada de Gap Analysis e Data Mapping para adequação técnica à LGPD e normas ISO, focando na mitigação de riscos jurídicos."
                />
                <ServiceCard 
                  icon={<Presentation size={40} />} 
                  title="Palestras e Treinamentos" 
                  description="Capacitação focada em combater a Engenharia Social e elevar a cultura de cibersegurança da equipe com treinamentos práticos."
                />
              </div>
            </motion.div>
          )}
          {secaoAtiva === 'ebooks' && (
            <motion.div
              key="ebooks"
              {...animacaoEntrada}
              className="flex flex-col items-center space-y-12"
            >
              <h2 className="text-4xl font-bold text-center text-white">
                E-books & Conteúdos
              </h2>

              <p className="text-slate-400 max-w-2xl text-center">
                Conteúdos técnicos desenvolvidos pela PurpuraSec para disseminar
                conhecimento, fortalecer a cultura de segurança e apoiar decisões estratégicas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                              gap-8 w-full max-w-5xl mx-auto px-4">
                
                <EbookCard
                  icon={<BookOpenCheckIcon size={28} />}
                  title="Sua senha foi vazada?"
                  description="Como acontece, como descobrir e como se proteger"
                  link="ebook-suas-senhas.pdf"
                  status="Gratuito"
                />

                <EbookCard
                  icon={<Search size={28} />}
                  title="Ubuntu Seguro para Usuários"
                  description="Como proteger seu computador Linux no dia a dia"
                  link="#"
                  status="Em breve"
                />

                <EbookCard
                  icon={<ShieldAlert size={28} />}
                  title="Segurança da Informação para Empresas"
                  description="Guia estratégico para gestores entenderem riscos cibernéticos,
                              LGPD e tomada de decisão."
                  status="Em breve"
                />

              </div>
            </motion.div>
          )}

          {secaoAtiva === 'contato' && (
            <motion.div key="contato" {...animacaoEntrada} className="max-w-2xl mx-auto">
              <div className="bg-slate-900/50 border border-purple-500/20 rounded-3xl p-8 md:p-16 text-center shadow-2xl backdrop-blur-sm">
                <div className="inline-flex p-4 rounded-full bg-purple-500/10 text-purple-500 mb-6">
                  <ContactRoundIcon size={40} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pronto para se proteger?</h2>
                <p className="text-slate-400 mb-8 text-lg">
                  Inicie uma consultoria de segurança hoje mesmo e blinde seu patrimônio digital.
                </p>
                
                <a 
                  href="https://ig.me/m/purpurasec/" 
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/20"
                >
                  Entre em contato conosco
                </a>
                
                <div className="mt-10 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-center gap-6 text-sm text-slate-500 font-mono">
                  <span>📍 Rio de Janeiro, Brasil</span>
                  <span className="hidden md:inline">|</span>
                  <span>🔒 Conexão Criptografada</span>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  )
}

export default App