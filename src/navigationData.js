import user from "./userInformation.json";

export const navData = [
  {
    id: 1,
    text: "Home",
    link: "http://localhost:3000/home",
  },
  {
    id: 2,
    text: "virTUL",
    link: "https://virtul.p.lodz.pl/virtul/",
  },
  {
    id: 3,
    text: "Plany zajęć",
    link: "http://localhost:3000/timetable",
  },
  {
    id: 4,
    text: `Dane personalne ${user.indexNumber}`,
    link: "http://localhost:3000/personalData",
  },
  {
    id: 5,
    text: "Dane ogólne",
    link: "http://localhost:3000/generalData",
  },
  {
    id: 6,
    text: "Karta ocen",
    link: "http://localhost:3000/grades",
  },
  {
    id: 7,
    text: "Przedmioty obieralne",
    link: "http://localhost:3000/electiveCourses",
  },
  {
    id: 8,
    text: "Opłaty",
    link: "http://localhost:3000/payments",
  },
  {
    id: 9,
    text: "Badania lekarskie",
    link: "http://localhost:3000/medicalExamination",
  },
  {
    id: 10,
    text: "ECTS Programy Studiów",
    link: "https://programy.p.lodz.pl/ectslabel-web/",
  },
  {
    id: 11,
    text: "Samorząd Studencki PŁ",
    link: "http://samorzad.p.lodz.pl/",
  },
];
