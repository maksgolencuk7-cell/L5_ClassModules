export class Lesson {
    #topic;    
    #duration;   
    #isOnline;    
    constructor(topic, duration, isOnline) {
        this.#topic = topic;
        this.#duration = duration;
        this.#isOnline = isOnline;
    }
    get topic() { return this.#topic; }
    set topic(value) { this.#topic = value; }
    get duration() { return this.#duration; }
    set duration(value) { this.#duration = value; }
    get isOnline() { return this.#isOnline; }
    set isOnline(value) { this.#isOnline = value; }
    show() {
        console.log(`Тема: ${this.#topic}, Длительность: ${this.#duration} мин., Онлайн: ${this.#isOnline}`);
    }
    delete() {
        this.#topic = null;
        this.#duration = null;
        this.#isOnline = null;
        console.log("Объект удален (поля обнулены).");
    }
    copy() {
        return this;
    }
    #makeInteractive() {
        this.#isOnline = true;
        console.log("Урок переведен в интерактивный (онлайн) формат.");
    }
    startInteractive() {
        this.#makeInteractive();
    }
    static clone(lessonInstance) {
        return new Lesson(lessonInstance.topic, lessonInstance.duration, lessonInstance.isOnline);
    }
}
