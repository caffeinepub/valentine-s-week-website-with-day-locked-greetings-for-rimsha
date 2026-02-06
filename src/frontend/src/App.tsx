import { useState } from 'react';
import { ValentineDayCard } from './components/ValentineDayCard';
import { AnniversaryGate } from './components/AnniversaryGate';
import { valentinesSchedule } from './lib/valentinesSchedule';
import { Heart } from 'lucide-react';

function App() {
  const [hasAccess, setHasAccess] = useState(false);

  // Show gate if access not granted
  if (!hasAccess) {
    return <AnniversaryGate onSuccess={() => setHasAccess(true)} />;
  }

  // Show main Valentine's Week interface after successful gate
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="fixed inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-pattern.dim_1024x1024.png)',
          backgroundSize: '256px 256px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/assets/generated/valentine-hero.dim_1600x600.png)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="w-8 h-8 text-romantic fill-romantic animate-pulse" />
                <Heart className="w-6 h-6 text-romantic fill-romantic animate-pulse delay-75" />
                <Heart className="w-4 h-4 text-romantic fill-romantic animate-pulse delay-150" />
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight">
                For My Dearest Rimsha
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light">
                A week of love, one day at a time
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
                Valentine's Week Journey
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each day brings a new message of love. Watch as they unlock throughout the week.
              </p>
            </div>

            {/* Day Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {valentinesSchedule.map((day) => (
                <ValentineDayCard key={day.id} day={day} />
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative mt-16 py-8 border-t border-border/50">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground">
              © 2026. Built with <Heart className="inline w-4 h-4 text-romantic fill-romantic" /> using{' '}
              <a 
                href="https://caffeine.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-romantic hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
