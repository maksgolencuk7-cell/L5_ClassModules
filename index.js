mport { OnlineLesson } from './OnlineLesson.js';
const lessons = [
    new OnlineLesson("Введение в JS", 90, true, "Zoom"),
    new OnlineLesson("Массивы и объекты", 120, false, "Google Meet")
];
console.log("--- Первый урок ---");
lessons[0].show();
console.log("\n--- Второй урок ---");
lessons[1].show();
const cloned = OnlineLesson.clone(lessons[0]);
console.log("\nКлон === оригинал?", cloned === lessons[0]); 
