
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, MapPin, Users, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, getDay } from 'date-fns';
import { fr, enUS, es } from 'date-fns/locale';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguageStore, Language } from '@/i18n';
import { useTranslation } from '@/i18n/translations';
import { calendarEvents } from '@/data/calendarEvents';
import { useIsMobile } from '@/hooks/use-mobile';

// Floating Dots Background Component
const FloatingDots = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => {
        const size = 4 + Math.random() * 4;
        const animationDuration = 15 + Math.random() * 20;
        const left = Math.random() * 100;
        const animationDelay = Math.random() * -30;
        const opacity = 0.3 + Math.random() * 0.7;
        const color = [
          'bg-blue-400', 'bg-purple-400', 'bg-green-400', 
          'bg-yellow-400', 'bg-pink-400', 'bg-indigo-400'
        ][Math.floor(Math.random() * 6)];
        
        return (
          <div 
            key={i}
            className={`absolute rounded-full ${color}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              bottom: `-${size}px`,
              opacity: opacity,
              animation: `float ${animationDuration}s infinite linear`,
              animationDelay: `${animationDelay}s`
            }}
          />
        );
      })}
    </div>
  );
};

const Calendrier = () => {
  const { language } = useLanguageStore();
  const t = useTranslation(language);
  const locale = language === 'fr' ? fr : language === 'es' ? es : enUS;
  const isMobile = useIsMobile();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events] = useState(calendarEvents);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<typeof calendarEvents[0] | null>(null);
  const [showEventDialog, setShowEventDialog] = useState(false);
  
  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };
  
  // Get all days in the current month
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Get events for the current month
  const currentMonthEvents = events.filter(event => 
    isSameMonth(event.date, currentDate)
  );
  
  // Function to get events for a specific day
  const getEventsForDay = (day: Date) => {
    return events.filter(event => {
      // Check if the day is within the event's date range (inclusive of both start and end dates)
      const isWithinRange = 
        (day >= event.date && day <= event.endDate) || 
        isSameDay(day, event.date) ||
        isSameDay(day, event.endDate);
        
      return isWithinRange;
    });
  };
  
  // Get day of week index for the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const startDay = getDay(monthStart);

  // Handle event click
  const handleEventClick = (event: typeof calendarEvents[0]) => {
    setSelectedEvent(event);
    setShowEventDialog(true);
  };
  
  // Add a custom style for the keyframe animation
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float {
        0% { transform: translateY(0) rotate(0deg); }
        100% { transform: translateY(-1500px) rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        <section className="py-8 md:py-12 bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-white relative">
          <FloatingDots />
          <div className="container max-w-6xl relative z-10 px-4 md:px-6">
            <div className={cn(
              "text-center mb-8 md:mb-12 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-reboot-dark">{t.calendarTitle}</h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">{t.calendarSubtitle}</p>
            </div>
            
            <div className={cn(
              "bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              {/* Calendar header */}
              <div className="flex items-center justify-between p-3 md:p-4 border-b">
                <Button variant="ghost" size="icon" onClick={prevMonth}>
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <h2 className="text-lg md:text-xl font-semibold">
                  {format(currentDate, 'MMMM yyyy', { locale })}
                </h2>
                
                <Button variant="ghost" size="icon" onClick={nextMonth}>
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Calendar grid */}
              <div className="p-2 md:p-4">
                {/* Day names */}
                <div className="grid grid-cols-7 mb-2">
                  {/* Use locale-specific day names */}
                  {Array.from({ length: 7 }).map((_, index) => {
                    const dayNames = language === 'fr' 
                      ? ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
                      : language === 'es'
                      ? ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
                      : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                    return (
                      <div key={index} className="text-center text-xs md:text-sm font-medium text-gray-500 py-1 md:py-2">
                        {isMobile ? dayNames[index].charAt(0) : dayNames[index]}
                      </div>
                    );
                  })}
                </div>
                
                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-1">
                  {/* Empty cells for days before the start of the month */}
                  {Array.from({ length: startDay }).map((_, index) => (
                    <div key={`empty-start-${index}`} className="aspect-square p-0.5 md:p-1" />
                  ))}
                  
                  {/* Actual month days */}
                  {monthDays.map((day, index) => {
                    const dayEvents = getEventsForDay(day);
                    const hasEvents = dayEvents.length > 0;
                    
                    return (
                      <div 
                        key={index} 
                        className={cn(
                          "aspect-square p-0.5 md:p-1 relative rounded-md transition-all hover:bg-gray-50",
                          hasEvents && "font-semibold"
                        )}
                      >
                        <div className="h-full flex flex-col">
                          <span className="text-xs md:text-sm text-right p-0.5 md:p-1">
                            {format(day, 'd')}
                          </span>
                          
                          {hasEvents && (
                            <div className="flex-1 flex flex-col gap-0.5 md:gap-1 overflow-hidden">
                            {isMobile ? (
                              // On mobile, just show colored dots for events
                              <div className="flex flex-wrap gap-0.5 mt-0.5">
                                {dayEvents.slice(0, 3).map(event => (
                                  <div 
                                    key={event.id}
                                    className="w-1.5 h-1.5 rounded-full bg-reboot-blue"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleEventClick(event);
                                    }}
                                  />
                                ))}
                                {dayEvents.length > 3 && (
                                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                )}
                              </div>
                            ) : (
                              // On desktop, show event names
                              dayEvents.map(event => (
                                <Button 
                                  key={event.id}
                                  variant="ghost" 
                                  className="h-auto py-1 px-1 text-xs justify-start truncate bg-reboot-blue/10 hover:bg-reboot-blue/20 text-reboot-blue"
                                  onClick={() => handleEventClick(event)}
                                >
                                  {event.title}
                                </Button>
                              ))
                            )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Upcoming events list */}
              <div className="border-t p-3 md:p-4">
                <h3 className="font-semibold mb-3">{format(currentDate, 'MMMM yyyy', { locale })} - {t.seeAllCamps}</h3>
                
                {currentMonthEvents.length > 0 ? (
                  <div className="space-y-2">
                    {currentMonthEvents
                      .sort((a, b) => a.date.getTime() - b.date.getTime())
                      .map(event => (
                        <div 
                          key={event.id} 
                          className="p-3 rounded-md border border-gray-100 hover:border-reboot-blue/30 transition-colors cursor-pointer"
                          onClick={() => handleEventClick(event)}
                        >
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                            <div>
                              <p className="font-medium">{event.title}</p>
                              <p className="text-xs md:text-sm text-gray-500">
                                {format(event.date,isMobile ? 'd MMM' : 'EEEE d MMMM', { locale })} - {format(event.endDate,  isMobile ? 'd MMM yyyy' :'EEEE d MMMM yyyy', { locale })}
                              </p>
                            </div>
                            <Button variant="outline" size="sm" className="mt-1 md:mt-0 w-full md:w-auto">
                              {t.seeAvailability}
                            </Button>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-4">{t.noStageYet}</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Event Dialog */}
      {selectedEvent && (
        <Dialog open={showEventDialog} onOpenChange={setShowEventDialog}>
          <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden max-w-[95vw] mx-auto">
            <div className="h-36 md:h-48 overflow-hidden relative">
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={() => setShowEventDialog(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4 md:p-6">
              <DialogHeader>
                <DialogTitle className="text-xl md:text-2xl">{selectedEvent.title}</DialogTitle>
                <div className="flex items-center text-gray-500 mt-2 text-sm md:text-base">
                  <CalendarIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="line-clamp-2">
                  {format(selectedEvent.date, isMobile ? 'd MMM' : 'EEEE d MMMM', { locale })} - {format(selectedEvent.endDate, isMobile ? 'd MMM yyyy' : 'EEEE d MMMM yyyy', { locale })}
                  </span>
                </div>
              </DialogHeader>
              
              <div className="mt-4">
                <p className="text-gray-700 mb-4 text-sm md:text-base">{selectedEvent.description}</p>
                
                <h4 className="font-semibold text-md md:text-lg mb-3">{t.seeAvailability}</h4>
                <div className="space-y-2">
                  <div className={cn(
                    "p-2 md:p-3 rounded-md border flex justify-between items-center",
                    selectedEvent.morningAvailable 
                      ? "border-green-200 bg-green-50" 
                      : "border-gray-200 bg-gray-50 opacity-50"
                  )}>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="text-sm md:text-base">{t.morning_9_12}</span>
                    </div>
                    {selectedEvent.morningAvailable && (
                      <Button size="sm" variant="outline" className="text-xs md:text-sm">
                        {t.registerNow}
                      </Button>
                    )}
                  </div>
                  
                  <div className={cn(
                    "p-2 md:p-3 rounded-md border flex justify-between items-center",
                    selectedEvent.afternoonAvailable 
                      ? "border-green-200 bg-green-50" 
                      : "border-gray-200 bg-gray-50 opacity-50"
                  )}>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="text-sm md:text-base">{t.afternoon_14_17}</span>
                    </div>
                    {selectedEvent.afternoonAvailable && (
                      <Button size="sm" variant="outline" className="text-xs md:text-sm">
                        {t.registerNow}
                      </Button>
                    )}
                  </div>
                  
                  <div className={cn(
                    "p-2 md:p-3 rounded-md border flex justify-between items-center",
                    selectedEvent.fullDayAvailable 
                      ? "border-green-200 bg-green-50" 
                      : "border-gray-200 bg-gray-50 opacity-50"
                  )}>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="text-sm md:text-base">{t.fullDay_9_17}</span>
                    </div>
                    {selectedEvent.fullDayAvailable && (
                      <Button size="sm" variant="outline" className="text-xs md:text-sm">
                        {t.registerNow}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button variant="outline" onClick={() => setShowEventDialog(false)}>
                  {t.closeModal}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
      
      <Footer/>
    </div>
  );
};

export default Calendrier;
