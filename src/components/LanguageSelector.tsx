
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Language, useLanguageStore } from '@/i18n';

type LanguageSelectorProps = {
  className?: string;
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className }) => {
  const { language, setLanguage } = useLanguageStore();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className={`flex items-center gap-1.5 px-2 ${className}`}>
          <Globe className="h-4 w-4" />
          <span className="uppercase">{language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-24 animate-scale-in">
        <DropdownMenuItem 
          className="cursor-pointer" 
          onClick={() => handleLanguageChange('fr')}
        >
          Français
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="cursor-pointer" 
          onClick={() => handleLanguageChange('en')}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="cursor-pointer" 
          onClick={() => handleLanguageChange('es')}
        >
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
