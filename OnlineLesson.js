import { Lesson } from './Lesson.js';
export class OnlineLesson extends Lesson {
    #platform; 
    constructor(topic, duration, isOnline, platform) {
        super(topic, duration, isOnline);
        this.#platform = platform;
    }
    get platform() { return this.#platform; }
    set platform(value) { this.#platform = value; }
    show() {
        super.show();
        console.log(`Платформа: ${this.#platform}`);
    }
    static clone(lessonInstance) {
        return new OnlineLesson(
            lessonInstance.topic,
            lessonInstance.duration,
            lessonInstance.isOnline,
            lessonInstance.platform
        );
    }
}
