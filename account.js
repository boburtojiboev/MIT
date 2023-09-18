const moment = require('moment');

class Account {
    #amount;
    #account_id;

    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }
    tellMeBalance() {
        console.log(`Sizning hisobingizdaqi qoldiq: ${this.#amount}$`);
        return this.amount;
    }

    withdrowMoney(amount) {
        if (this.#amount > amount) {
            this.#amount -= amount;
            console.log(`Hisobingizdan ${amount}$ yechildi va qoldiq ${this.#amount}$`);
        }else {
            console.log(`Sizning hisobingizda mablag yetarli emas: ${this.#amount}$`);
        }
    }

    makeDeposit(amount) {
        this.#amount += amount;
        console.log(`Hisobingiz toldirildi, hisobingizda ${this.#amount}$ mavjud`);
    }

    giveMeDetails() {
        console.log(`Salom hurmatli ${this.name} sizning hisibingiz ${this.#amount}$ga teng,`);
        console.log(`Hisob raqamingiz:`, this.#account_id);
    }

    static tellMeAboutClass() {
        console.log(`Bu class accountlarni yasashda hizmat qiladi`);
    }

    static tellMeTime() {
        console.log(`Hozirgi vaqt: ${moment().format("YYYYMMDD HH:mm:ss")}`);
    }

}
module.exports = Account