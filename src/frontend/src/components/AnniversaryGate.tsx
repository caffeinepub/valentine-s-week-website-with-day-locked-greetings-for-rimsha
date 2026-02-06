import { useState } from 'react';
import { Heart, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { validateAnniversaryDate } from '@/lib/anniversaryGate';

interface AnniversaryGateProps {
  onSuccess: () => void;
}

export function AnniversaryGate({ onSuccess }: AnniversaryGateProps) {
  const [dateInput, setDateInput] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Simulate a brief validation delay for better UX
    setTimeout(() => {
      if (validateAnniversaryDate(dateInput)) {
        onSuccess();
      } else {
        setError('Incorrect date. Please try again.');
        setDateInput('');
      }
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="fixed inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-pattern.dim_1024x1024.png)',
          backgroundSize: '256px 256px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Gate Content */}
      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <div className="bg-card border border-border rounded-2xl shadow-2xl p-8 space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-romantic/20 rounded-full blur-xl" />
              <div className="relative bg-romantic/10 p-4 rounded-full">
                <Lock className="w-8 h-8 text-romantic" />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Enter Our Anniversary Date
            </h1>
            <p className="text-muted-foreground text-sm">
              To access this special Valentine's Week journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="anniversary-date" className="text-sm font-medium">
                Anniversary Date
              </Label>
              <Input
                id="anniversary-date"
                type="text"
                value={dateInput}
                onChange={(e) => {
                  setDateInput(e.target.value);
                  setError('');
                }}
                disabled={isSubmitting}
                className="text-center text-lg"
                autoFocus
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <p className="text-sm text-destructive text-center font-medium">
                  {error}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={!dateInput.trim() || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Heart className="w-4 h-4 mr-2 animate-pulse" />
                  Checking...
                </>
              ) : (
                <>
                  <Heart className="w-4 h-4 mr-2" />
                  Continue
                </>
              )}
            </Button>
          </form>

          {/* Decorative hearts */}
          <div className="flex justify-center gap-2 pt-4">
            <Heart className="w-3 h-3 text-romantic/40 fill-romantic/40" />
            <Heart className="w-4 h-4 text-romantic/60 fill-romantic/60" />
            <Heart className="w-3 h-3 text-romantic/40 fill-romantic/40" />
          </div>
        </div>
      </div>
    </div>
  );
}
