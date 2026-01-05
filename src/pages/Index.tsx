import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-orange animate-gradient-shift bg-[length:200%_200%] glow-purple" />
              <h1 className="text-2xl font-bold">ZENT</h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'tokenomics', 'dashboard', 'docs', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium hover:text-primary transition-colors capitalize"
                >
                  {section === 'home' ? 'Home' : 
                   section === 'about' ? 'About' :
                   section === 'tokenomics' ? 'Tokenomics' :
                   section === 'dashboard' ? 'Dashboard' :
                   section === 'docs' ? 'Documentation' : 'Contact'}
                </button>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-gradient-purple to-gradient-pink glow-purple">
              Launch App
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-purple/30 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-pink/30 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-orange/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-1.5s' }} />
        </div>
        
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full glass border border-primary/30 mb-6 animate-scale-in">
            <span className="text-sm font-medium text-primary">Zenith Entry Network</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-orange bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
            ZENT
          </h2>
          <p className="text-3xl md:text-4xl font-semibold mb-8 text-foreground/80">
            Transparency That Pays
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Revolutionary project on Solana with transparent revenue distribution. 
            70% to holders, 30% for ecosystem development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-gradient-purple to-gradient-pink glow-purple text-lg px-8"
              onClick={() => scrollToSection('about')}
            >
              Learn More
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 hover:bg-primary/10 text-lg px-8"
              onClick={() => scrollToSection('dashboard')}
            >
              <Icon name="BarChart3" className="mr-2" size={20} />
              Dashboard
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-16 animate-fade-in">
            About Project
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Shield',
                title: 'Transparency',
                description: 'Full transparency of all transactions and revenue distribution through public Dashboard'
              },
              {
                icon: 'Zap',
                title: 'Solana',
                description: 'Built on Solana blockchain — fast transactions and minimal fees'
              },
              {
                icon: 'TrendingUp',
                title: 'Fair Model',
                description: '70% of all trading fees are distributed directly to token holders'
              }
            ].map((feature, i) => (
              <Card 
                key={i}
                className="glass p-8 border-primary/20 hover:border-primary/40 transition-all hover:glow-purple animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-gradient-purple to-gradient-pink flex items-center justify-center mb-6 glow-purple">
                  <Icon name={feature.icon as any} size={28} className="text-white" />
                </div>
                <h4 className="text-2xl font-semibold mb-4">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tokenomics" className="min-h-screen flex items-center py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-16 animate-fade-in">
            Tokenomics
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="glass p-8 border-primary/20">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-semibold">To Holders</h4>
                  <span className="text-4xl font-bold text-gradient-purple">70%</span>
                </div>
                <Progress value={70} className="h-3 mb-4" />
                <p className="text-muted-foreground">
                  The majority of all trading fees are distributed directly to token holders
                </p>
              </Card>
              
              <Card className="glass p-8 border-secondary/20">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-semibold">Buyback & Partnerships</h4>
                  <span className="text-4xl font-bold text-gradient-pink">30%</span>
                </div>
                <Progress value={30} className="h-3 mb-4" />
                <p className="text-muted-foreground">
                  30% goes to token buyback and strategic partnerships development
                </p>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="glass p-6 border-accent/20 text-center">
                  <Icon name="Users" className="mx-auto mb-2 text-gradient-blue" size={32} />
                  <p className="text-sm text-muted-foreground mb-1">Holders</p>
                  <p className="text-2xl font-bold">12,847</p>
                </Card>
                <Card className="glass p-6 border-accent/20 text-center">
                  <Icon name="Coins" className="mx-auto mb-2 text-gradient-orange" size={32} />
                  <p className="text-sm text-muted-foreground mb-1">In Circulation</p>
                  <p className="text-2xl font-bold">5.2M</p>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-orange blur-3xl opacity-30 animate-pulse-glow" />
              <Card className="glass p-12 border-primary/30 relative z-10">
                <div className="relative w-full aspect-square">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="url(#gradient1)"
                      strokeWidth="40"
                      strokeDasharray="351.86 502.65"
                      transform="rotate(-90 100 100)"
                      className="glow-purple"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="url(#gradient2)"
                      strokeWidth="40"
                      strokeDasharray="150.8 702.71"
                      strokeDashoffset="-351.86"
                      transform="rotate(-90 100 100)"
                      className="glow-pink"
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#9b87f5" />
                        <stop offset="100%" stopColor="#D946EF" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F97316" />
                        <stop offset="100%" stopColor="#0EA5E9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-sm text-muted-foreground mb-2">Distribution</p>
                    <p className="text-4xl font-bold">70/30</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="dashboard" className="min-h-screen flex items-center py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-4 animate-fade-in">
            Dashboard
          </h3>
          <p className="text-center text-muted-foreground mb-16">
            Real-time Transparency
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Fees', value: '$247,892', icon: 'DollarSign', color: 'purple' },
              { label: 'Distributed to Holders', value: '$173,524', icon: 'TrendingUp', color: 'pink' },
              { label: 'Buyback', value: '$52,057', icon: 'ArrowUpCircle', color: 'orange' },
              { label: 'Partnerships', value: '$22,311', icon: 'Handshake', color: 'blue' }
            ].map((stat, i) => (
              <Card 
                key={i}
                className={`glass p-6 border-primary/20 animate-fade-in glow-${stat.color}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon name={stat.icon as any} className="text-muted-foreground" size={24} />
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary animate-pulse-glow">
                    Live
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="revenue" className="space-y-8">
            <TabsList className="glass border border-primary/20 p-1">
              <TabsTrigger value="revenue" className="data-[state=active]:bg-primary/20">
                Revenue Dynamics
              </TabsTrigger>
              <TabsTrigger value="distribution" className="data-[state=active]:bg-primary/20">
                Distribution
              </TabsTrigger>
              <TabsTrigger value="holders" className="data-[state=active]:bg-primary/20">
                Holders
              </TabsTrigger>
            </TabsList>

            <TabsContent value="revenue">
              <Card className="glass p-8 border-primary/20">
                <div className="h-64 flex items-end justify-between gap-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-gradient-to-t from-gradient-purple to-gradient-pink rounded-t-lg glow-purple animate-fade-in transition-all hover:scale-105"
                        style={{ 
                          height: `${height}%`,
                          animationDelay: `${i * 0.05}s`
                        }}
                      />
                      <span className="text-xs text-muted-foreground">{i + 1}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="distribution">
              <Card className="glass p-8 border-primary/20">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Holders (70%)</span>
                      <span className="text-sm text-muted-foreground">$173,524</span>
                    </div>
                    <Progress value={70} className="h-4" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Buyback (20%)</span>
                      <span className="text-sm text-muted-foreground">$52,057</span>
                    </div>
                    <Progress value={20} className="h-4" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Партнерства (10%)</span>
                      <span className="text-sm text-muted-foreground">$22,311</span>
                    </div>
                    <Progress value={10} className="h-4" />
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="holders">
              <Card className="glass p-8 border-primary/20">
                <div className="space-y-4">
                  {[
                    { address: '7Xj9...kL2p', balance: '1,247,892', percent: '24.1%' },
                    { address: '9Kp3...mN4q', balance: '892,441', percent: '17.2%' },
                    { address: '2Lm8...vB7r', balance: '654,789', percent: '12.6%' },
                    { address: '5Rt1...xY9s', balance: '431,256', percent: '8.3%' },
                    { address: '8Wp6...zC3t', balance: '289,134', percent: '5.6%' }
                  ].map((holder, i) => (
                    <div 
                      key={i}
                      className="flex items-center justify-between p-4 glass rounded-lg border border-primary/10 animate-fade-in"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gradient-purple to-gradient-pink flex items-center justify-center">
                          <span className="font-bold text-sm">{i + 1}</span>
                        </div>
                        <div>
                          <p className="font-mono text-sm">{holder.address}</p>
                          <p className="text-xs text-muted-foreground">{holder.percent} of total</p>
                        </div>
                      </div>
                      <p className="font-semibold">{holder.balance} ZENT</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="docs" className="min-h-screen flex items-center py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-5xl font-bold text-center mb-16 animate-fade-in">
            Documentation
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: 'FileText', title: 'Whitepaper', description: 'Complete project description and technical architecture' },
              { icon: 'Code', title: 'API Docs', description: 'Documentation for developers and integrators' },
              { icon: 'BookOpen', title: 'Guides', description: 'Step-by-step instructions for users' },
              { icon: 'Shield', title: 'Audit Report', description: 'Smart contract security audit report' }
            ].map((doc, i) => (
              <Card 
                key={i}
                className="glass p-8 border-primary/20 hover:border-primary/40 transition-all cursor-pointer hover:glow-purple animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Icon name={doc.icon as any} className="mb-4 text-primary" size={32} />
                <h4 className="text-xl font-semibold mb-2">{doc.title}</h4>
                <p className="text-muted-foreground mb-4">{doc.description}</p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                  Open
                  <Icon name="ExternalLink" className="ml-2" size={16} />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="text-5xl font-bold mb-8 animate-fade-in">
            Contact
          </h3>
          <p className="text-xl text-muted-foreground mb-12">
            Join our community and stay updated
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { icon: 'Send', name: 'Telegram', color: 'blue' },
              { icon: 'Twitter', name: 'Twitter', color: 'blue' },
              { icon: 'MessageCircle', name: 'Discord', color: 'purple' },
              { icon: 'Github', name: 'GitHub', color: 'foreground' }
            ].map((social, i) => (
              <Button 
                key={i}
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Icon name={social.icon as any} className="mr-2" size={20} />
                {social.name}
              </Button>
            ))}
          </div>
          <Card className="glass p-8 border-primary/20">
            <p className="text-sm text-muted-foreground">
              Email: contact@zent.network
            </p>
          </Card>
        </div>
      </section>

      <footer className="border-t border-primary/20 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2024 ZENT. All rights reserved.</p>
          <p className="mt-2">Transparency That Pays</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;