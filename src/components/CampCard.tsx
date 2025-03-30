
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Language } from '@/i18n';
import { useTranslation } from '@/i18n/translations';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { calendarEvents } from '@/data/calendarEvents';
import { addDays, format } from 'date-fns';
import { fr, enUS, es } from 'date-fns/locale';
import { Camp } from '@/data/camps';

type CampCardProps = {
  camp: Camp;
  className?: string;
  language: Language;
  style?: React.CSSProperties;
};

const CampCard: React.FC<CampCardProps> = ({ camp, className, language, style }) => {
  const t = useTranslation(language);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);
  const locale = language === 'fr' ? fr : language === 'es' ? es : enUS;

  // Find all calendar events for this camp
  const campEvents = calendarEvents.filter(event => event.camp.id === camp.id);

  const handleViewCamp = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDetailsDialog(true);
  };

  return (
    <>
      <div 
        className={cn(
          "rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 card-hover h-full flex flex-col",
          className
        )}
        style={style}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={camp.image} 
            alt={t[camp.title]}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-reboot-yellow px-3 py-1 rounded-full text-xs font-semibold text-reboot-dark">
            {camp.ageMin + " - " + camp.ageMax + " " + t.years}
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold mb-2 text-reboot-dark">{t[camp.title]}</h3>
          <p className="text-gray-600 mb-4 flex-1">{t[camp.description]}</p>

          <div className="grid grid-cols-3 gap-2 mb-4 text-sm text-gray-500">
            <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
              <Calendar className="h-4 w-4 mb-1" />
              <span>{camp.ageMin + " - " + camp.ageMax + " " + t.years}</span>
              <span className="text-xs text-gray-400">{t.ageRange}</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
              <Clock className="h-4 w-4 mb-1" />
              <span>{campEvents.length}</span>
              <span className="text-xs text-gray-400">{t.nextEvent}</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-gray-50 rounded-md">
              <Users className="h-4 w-4 mb-1" />
              <span>{camp.maxStudents}</span>
              <span className="text-xs text-gray-400">{t.maxStudents}</span>
            </div>
          </div>

          <Button onClick={handleViewCamp} className="w-full">
            {t.viewCamp}
          </Button>
        </div>
      </div>

      {/* Camp Details Dialog */}
      <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
        <DialogContent className="max-w-4xl p-0 overflow-y-auto overflow-x-hidden" style={{maxWidth: '96%', maxHeight: '96%', borderRadius: '0.75rem'}}>
          <div className="h-60 overflow-hidden relative">
            <img 
              src={camp.image} 
              alt={t[camp.title]}
              className="w-full h-full object-cover"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={() => setShowDetailsDialog(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="absolute bottom-4 left-6">
              <h2 className="text-3xl font-bold text-white">{t[camp.title]}</h2>
              <div className="flex space-x-4 mt-2">
                <div className="bg-white/20 px-3 py-1 rounded-full text-sm text-white backdrop-blur-sm">
                  {camp.ageMin + " - " + camp.ageMax + " " + t.years}
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-sm text-white backdrop-blur-sm">
                  Max: {camp.maxStudents} {t.maxStudents}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{t.discoverCamps}</h3>
                <p className="text-gray-600 mb-6">{t[camp.description]}</p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">{t.included}</h4>
                  <ul className="space-y-2 list-disc pl-5 text-gray-600">
                    <li>{t.materials}</li>
                    <li>{t.smallGroups}</li>
                    <li>{t.certificate}</li>
                    <li>{t.snacks}</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">{t.availableDates}</h3>
                {campEvents.length > 0 ? (
                  <div className="space-y-3 max-h-72 overflow-y-auto pr-2">
                    {campEvents.map((event,k) => (
                      <div 
                        key={k}
                        className="border border-gray-100 rounded-lg p-4 hover:border-reboot-blue/30 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-medium">{format(event.date, 'MMMM yyyy', { locale })}</h5>
                            <p className="text-sm text-gray-500">
                              {format(event.date, 'EEEE d', { locale })} - {format(addDays(event.date, event.duration), 'EEEE d', { locale })}
                            </p>
                          </div>
                          <Button asChild size="sm" variant="outline">
                            <Link to="/calendrier">
                              {t.seeAvailability}
                            </Link>
                          </Button>
                        </div>
                        
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          <div className={cn(
                            "text-xs p-2 rounded text-center",
                            event.morningAvailable ? "bg-green-50 text-green-700" : "bg-gray-50 text-gray-400 line-through"
                          )}>
                            {t.morning_9_12}
                          </div>
                          <div className={cn(
                            "text-xs p-2 rounded text-center",
                            event.afternoonAvailable ? "bg-green-50 text-green-700" : "bg-gray-50 text-gray-400 line-through"
                          )}>
                            {t.afternoon_14_17}
                          </div>
                          <div className={cn(
                            "text-xs p-2 rounded text-center",
                            event.fullDayAvailable ? "bg-green-50 text-green-700" : "bg-gray-50 text-gray-400 line-through"
                          )}>
                            {t.fullDay_9_17}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="border border-gray-200 rounded-lg p-8 text-center text-gray-500 italic">
                    {t.noStageYet}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="p-6 pt-0 flex justify-end">
            <Button asChild variant="outline" onClick={() => setShowDetailsDialog(false)}>
              <Link to="/contact">
                {t.contact}
              </Link>
            </Button>
          </div>
          
          {/* <div className="p-6 pt-0 flex justify-end">
            <Button asChild variant="outline" onClick={() => setShowDetailsDialog(false)}>
              <Link to="/calendrier">
                {t.calendar}
              </Link>
            </Button>
          </div> */}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CampCard;
