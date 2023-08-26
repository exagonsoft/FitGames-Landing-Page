import { useContext } from "react";
import { Context } from "../Context/MainContext";

const eng = {
  nav_home: "Home",
  nav_about: "About",
  nav_gallery: "Gallery",
  nav_plans: "Plans",
  nav_trainers: "Trainers",
  nav_contact: "Contact",
  hero_hastag: "#100DaysOfWorkouts",
  hero_title: "Join The Legends Of Fitness",
  hero_text:
    "Transform at our Fitness Club: Top-notch facilities, expert trainers, and a thriving community await. Start your journey to a better you today!",
  hero_link_button: "Get Started",
  programs_tittle: "Programs",
  learnMore: "Learn More"
};

const des = {
  nav_home: "Heim",
  nav_about: "Um",
  nav_gallery: "Galerie",
  nav_plans: "Pläne",
  nav_trainers: "Sportschuhe",
  nav_contact: "Kontakt",
  hero_hastag: "#100TageTraining",
  hero_title: "Treten Sie den Legends of Fitness bei",
  hero_text:
    "Verwandeln Sie sich in unserem Fitnessclub: Erstklassige Einrichtungen, erfahrene Trainer und eine lebendige Community erwarten Sie. Beginnen Sie noch heute Ihre Reise zu einem besseren Ich!",
  hero_link_button: "Loslegen",
  programs_tittle: "Programme",
  learnMore: "Erfahren Sie mehr"
};

export const GetText = (field) => {
  const { currentLang } = useContext(Context);
  let fieldValue = "";

  switch (currentLang) {
    case "des":
      fieldValue = des[field];
      break;
    case "eng":
      fieldValue = eng[field];
      break;

    default:
      break;
  }

  return fieldValue;
};
