import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lock, Unlock, Heart } from 'lucide-react';
import { isUnlocked, getUnlockLabel } from '../lib/dateLocking';
import type { ValentineDay } from '../lib/valentinesSchedule';

interface ValentineDayCardProps {
  day: ValentineDay;
}

export function ValentineDayCard({ day }: ValentineDayCardProps) {
  const unlocked = isUnlocked(day.unlockDate);
  
  return (
    <Card className={`relative overflow-hidden transition-all duration-300 ${
      unlocked 
        ? 'shadow-romantic hover:shadow-romantic-lg border-romantic/20' 
        : 'opacity-75 hover:opacity-90'
    }`}>
      {/* Icon decoration */}
      <div className="absolute top-4 right-4 opacity-10">
        <div 
          className="w-16 h-16 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/generated/valentine-week-icons.dim_1024x1024.png)',
            backgroundPosition: `${(day.iconIndex % 4) * -64}px ${Math.floor(day.iconIndex / 4) * -64}px`,
            backgroundSize: '256px 256px'
          }}
        />
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl md:text-2xl font-display flex items-center gap-2">
              {day.name}
              {unlocked ? (
                <Unlock className="w-5 h-5 text-romantic" />
              ) : (
                <Lock className="w-5 h-5 text-muted-foreground" />
              )}
            </CardTitle>
            <CardDescription className="mt-1">
              {day.date}
            </CardDescription>
          </div>
          <Badge 
            variant={unlocked ? "default" : "secondary"}
            className={unlocked ? "bg-romantic text-white" : ""}
          >
            {unlocked ? "Unlocked" : getUnlockLabel(day.unlockDate)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        {unlocked ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-romantic">
              <Heart className="w-4 h-4 fill-romantic" />
              <span className="text-sm font-medium">Message for you</span>
            </div>
            <p className="text-foreground leading-relaxed">
              {day.message}
            </p>
          </div>
        ) : (
          <div className="relative">
            <div className="blur-sm select-none pointer-events-none">
              <p className="text-muted-foreground">
                A special message awaits you on this beautiful day...
              </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground font-medium">
                  {getUnlockLabel(day.unlockDate)}
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
