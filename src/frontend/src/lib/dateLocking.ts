export function isUnlocked(unlockDate: Date): boolean {
  const now = new Date();
  return now >= unlockDate;
}

export function getUnlockLabel(unlockDate: Date): string {
  const now = new Date();
  
  if (now >= unlockDate) {
    return 'Available Now';
  }
  
  const options: Intl.DateTimeFormatOptions = { 
    month: 'short', 
    day: 'numeric' 
  };
  
  const dateStr = unlockDate.toLocaleDateString('en-US', options);
  return `Unlocks on ${dateStr}`;
}
