
// Calendar events for the application
// All events are 5-day workshops (Monday-Friday)

export const calendarEvents = [
  // Original events
  {
    id: "event-1",
    title: "Minecraft & Programmation",
    date: new Date(2025, 5, 3), // June 3, 2025 (Monday)
    endDate: new Date(2025, 5, 7), // June 7, 2025 (Friday)
    campId: "1",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Apprends à programmer en créant des mondes et des jeux dans Minecraft.",
    morningAvailable: true,
    afternoonAvailable: true,
    fullDayAvailable: true
  },
  {
    id: "event-2",
    title: "Création de Jeux Vidéo",
    date: new Date(2025, 5, 10), // June 10, 2025 (Monday)
    endDate: new Date(2025, 5, 14), // June 14, 2025 (Friday)
    campId: "2",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Crée ton propre jeu vidéo et apprends les bases de la programmation ludique.",
    morningAvailable: true,
    afternoonAvailable: false,
    fullDayAvailable: false
  },
  {
    id: "event-3",
    title: "Robotique & IA",
    date: new Date(2025, 5, 17), // June 17, 2025 (Monday)
    endDate: new Date(2025, 5, 21), // June 21, 2025 (Friday)
    campId: "3",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Découvre la robotique et l'intelligence artificielle à travers des projets amusants.",
    morningAvailable: false,
    afternoonAvailable: true,
    fullDayAvailable: true
  },
  {
    id: "event-4",
    title: "Développement Web",
    date: new Date(2025, 5, 24), // June 24, 2025 (Monday)
    endDate: new Date(2025, 5, 28), // June 28, 2025 (Friday)
    campId: "4",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Initie-toi au développement web et crée ton premier site internet.",
    morningAvailable: true,
    afternoonAvailable: true,
    fullDayAvailable: true
  },
  {
    id: "event-5",
    title: "Python pour débutants",
    date: new Date(2025, 6, 1), // July 1, 2025 (Monday)
    endDate: new Date(2025, 6, 5), // July 5, 2025 (Friday)
    campId: "5",
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcb0c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Apprends les bases de Python, le langage de programmation utilisé par les professionnels.",
    morningAvailable: true,
    afternoonAvailable: true,
    fullDayAvailable: false
  },
  {
    id: "event-6",
    title: "Électronique & Arduino",
    date: new Date(2025, 6, 8), // July 8, 2025 (Monday)
    endDate: new Date(2025, 6, 12), // July 12, 2025 (Friday)
    campId: "6",
    image: "https://images.unsplash.com/photo-1553406830-ef409b4a6598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Explore l'électronique et la programmation avec Arduino dans ce stage pratique.",
    morningAvailable: false,
    afternoonAvailable: true,
    fullDayAvailable: true
  },
  {
    id: "event-7",
    title: "Minecraft & Programmation",
    date: new Date(2025, 6, 15), // July 15, 2025 (Monday)
    endDate: new Date(2025, 6, 19), // July 19, 2025 (Friday)
    campId: "1",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Apprends à programmer en créant des mondes et des jeux dans Minecraft.",
    morningAvailable: true,
    afternoonAvailable: false,
    fullDayAvailable: true
  },
  {
    id: "event-8",
    title: "Création de Jeux Vidéo",
    date: new Date(2025, 6, 22), // July 22, 2025 (Monday)
    endDate: new Date(2025, 6, 26), // July 26, 2025 (Friday)
    campId: "2",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Crée ton propre jeu vidéo et apprends les bases de la programmation ludique.",
    morningAvailable: true,
    afternoonAvailable: true,
    fullDayAvailable: true
  },
  {
    id: "event-9",
    title: "Développement Web",
    date: new Date(2025, 7, 5), // August 5, 2025 (Monday)
    endDate: new Date(2025, 7, 9), // August 9, 2025 (Friday)
    campId: "4",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Initie-toi au développement web et crée ton premier site internet.",
    morningAvailable: true,
    afternoonAvailable: true,
    fullDayAvailable: false
  },
  {
    id: "event-10",
    title: "Robotique & IA",
    date: new Date(2025, 7, 12), // August 12, 2025 (Monday)
    endDate: new Date(2025, 7, 16), // August 16, 2025 (Friday)
    campId: "3",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Découvre la robotique et l'intelligence artificielle à travers des projets amusants.",
    morningAvailable: false,
    afternoonAvailable: true,
    fullDayAvailable: true
  },
  {
    id: "event-11",
    title: "Python pour débutants",
    date: new Date(2025, 7, 19), // August 19, 2025 (Monday)
    endDate: new Date(2025, 7, 23), // August 23, 2025 (Friday)
    campId: "5",
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcb0c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Apprends les bases de Python, le langage de programmation utilisé par les professionnels.",
    morningAvailable: true,
    afternoonAvailable: true,
    fullDayAvailable: true
  },
  {
    id: "event-12",
    title: "Électronique & Arduino",
    date: new Date(2025, 7, 26), // August 26, 2025 (Monday)
    endDate: new Date(2025, 7, 30), // August 30, 2025 (Friday)
    campId: "6",
    image: "https://images.unsplash.com/photo-1553406830-ef409b4a6598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Explore l'électronique et la programmation avec Arduino dans ce stage pratique.",
    morningAvailable: true,
    afternoonAvailable: false,
    fullDayAvailable: true
  },
  
  // New additional events
  {
    id: "event-13",
    title: "Dessin et Animation 2D",
    date: new Date(2025, 3, 8), // April 8, 2025 (Monday)
    endDate: new Date(2025, 3, 12), // April 12, 2025 (Friday)
    campId: "7",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Apprends à dessiner et animer tes propres personnages en 2D à l'aide d'outils numériques.",
    morningAvailable: true,
    afternoonAvailable: true,
    fullDayAvailable: true
  },
  {
    id: "event-14",
    title: "Cybersécurité pour Ados",
    date: new Date(2025, 3, 15), // April 15, 2025 (Monday)
    endDate: new Date(2025, 3, 19), // April 19, 2025 (Friday)
    campId: "8",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Découvre les bases de la cybersécurité et apprends à protéger tes informations en ligne.",
    morningAvailable: true,
    afternoonAvailable: true,
    fullDayAvailable: false
  },
  {
    id: "event-15",
    title: "App Mobile avec React Native",
    date: new Date(2025, 3, 22), // April 22, 2025 (Monday)
    endDate: new Date(2025, 3, 26), // April 26, 2025 (Friday)
    campId: "9",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Crée ta propre application mobile et découvre le développement multi-plateforme.",
    morningAvailable: false,
    afternoonAvailable: true,
    fullDayAvailable: true
  },
  {
    id: "event-16",
    title: "Modélisation 3D & Blender",
    date: new Date(2025, 4, 6), // May 6, 2025 (Monday)
    endDate: new Date(2025, 4, 10), // May 10, 2025 (Friday)
    campId: "10",
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Apprends à modéliser en 3D et à créer des scènes impressionnantes avec Blender.",
    morningAvailable: true,
    afternoonAvailable: false,
    fullDayAvailable: true
  },
  {
    id: "event-17",
    title: "Musique Numérique",
    date: new Date(2025, 4, 13), // May 13, 2025 (Monday)
    endDate: new Date(2025, 4, 17), // May 17, 2025 (Friday)
    campId: "11",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Compose ta propre musique à l'aide d'outils numériques et découvre la production audio.",
    morningAvailable: true,
    afternoonAvailable: true,
    fullDayAvailable: true
  },
  {
    id: "event-18",
    title: "Cryptomonnaie & Blockchain",
    date: new Date(2025, 4, 27), // May 27, 2025 (Monday) 
    endDate: new Date(2025, 4, 31), // May 31, 2025 (Friday)
    campId: "12",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Découvre le fonctionnement des cryptomonnaies et de la technologie blockchain.",
    morningAvailable: false,
    afternoonAvailable: true,
    fullDayAvailable: false
  },
  {
    id: "event-19",
    title: "Jeux Vidéo avec Unity",
    date: new Date(2025, 8, 2), // September 2, 2025 (Monday)
    endDate: new Date(2025, 8, 6), // September 6, 2025 (Friday)
    campId: "13",
    image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Crée ton propre jeu vidéo en 3D avec le moteur de jeu Unity.",
    morningAvailable: true,
    afternoonAvailable: false,
    fullDayAvailable: true
  },
  {
    id: "event-20",
    title: "Sciences des Données",
    date: new Date(2025, 8, 16), // September 16, 2025 (Monday)
    endDate: new Date(2025, 8, 20), // September 20, 2025 (Friday)
    campId: "14",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Découvre comment analyser des données et créer des visualisations pertinentes.",
    morningAvailable: true,
    afternoonAvailable: true,
    fullDayAvailable: true
  }
];
