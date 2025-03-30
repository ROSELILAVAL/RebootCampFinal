import Bureautique from "./assets/campAssets/Bureautique.jpg";
import DigitalArt from "./assets/campAssets/DigitalArt.jpg";
import flstudio from "./assets/campAssets/flstudio.png";
import Minecraft from "./assets/campAssets/Minecraft.jpg";
import IA from "./assets/campAssets/IA.jpg";
import LapinCretin from "./assets/campAssets/LapinCretin.jpg";
import LegoRobot from "./assets/campAssets/LegoRobot.jpg";
import montage from "./assets/campAssets/montage.jpg";
import Personnage from "./assets/campAssets/Personnage.jpg";
import Scratch from "./assets/campAssets/Scratch.jpg";
import Lovable from "./assets/campAssets/lovable.jpg";

export type Camp = {
  id: number;
  title: string;
  ageMin: number;
  ageMax: number;
  description: string;
  image: string;
  maxStudents: number;
};

export const camps: Camp[] = [
    {
      id: 0,
      title: "campSiteWebTitle",
      description: "campSiteWebDescription",
      image: Lovable,
      maxStudents: 12,
      ageMin: 13,
      ageMax: 18
    },
    {
      id: 1,
      title: "campMinecraftTitle",
      description: "campMinecraftDescription",
      image: Minecraft,
      maxStudents: 12,
      ageMin: 7,
      ageMax: 14
    },
    {
      id: 2,
      title: "campIABaseTitle",
      description: "campIABaseDescription",
      image: IA,
      maxStudents: 12,
      ageMin: 7,
      ageMax: 14
    },
    {
      id: 3,
      title: "campDigitalArtTitle",
      description: "campDigitalArtDescription",
      image: DigitalArt,
      maxStudents: 12,
      ageMin: 12,
      ageMax: 18
    },
    {
      id: 4,
      title: "campScratchMovieTitle",
      description: "campScratchMovieDescription",
      image: Scratch,
      maxStudents: 12,
      ageMin: 7,
      ageMax: 14
    },
    {
      id: 5,
      title: "campScratchVideoGameTitle",
      description: "campScratchVideoGameDescription",
      image: Scratch,
      maxStudents: 12,
      ageMin: 7,
      ageMax: 14
    },
    {
      id: 6,
      title: "campTiktokTitle",
      description: "campTiktokDescription",
      image: montage,
      maxStudents: 12,
      ageMin: 7,
      ageMax: 12
    },
    {
      id: 7,
      title: "campLegoRobotTitle",
      description: "campLegoRobotDescription",
      image: LegoRobot,
      maxStudents: 12,
      ageMin: 7,
      ageMax: 10
    },
    {
      id: 8,
      title: "campLapinCretinTitle",
      description: "campLapinCretinDescription",
      image: LapinCretin,
      maxStudents: 12,
      ageMin: 7,
      ageMax: 10
    },
    {
      id: 9,
      title: "campIAToolTitle",
      description: "campIAToolDescription",
      image: IA,
      maxStudents: 12,
      ageMin: 13,
      ageMax: 18
    },
    {
      id: 10,
      title: "campAnimatedCharacterTitle",
      description: "campAnimatedCharacterDescription",
      image: Personnage,
      maxStudents: 12,
      ageMin: 12,
      ageMax: 18
    },
    {
      id: 11,
      title: "campflStudioTitle",
      description: "campflStudioDescription",
      image: flstudio,
      maxStudents: 12,
      ageMin: 13,
      ageMax: 18
    },
    {
      id: 12,
      title: "campBureautiqueTitle",
      description: "campBureautiqueDescription",
      image: Bureautique,
      maxStudents: 12,
      ageMin: 6,
      ageMax: 9
    },
  ];