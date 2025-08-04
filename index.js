class hero {
    name;
    age;
    type;
    atack;

    constructor(name, age, type, atack) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.atack = atack;
    }

    descrever(){
        console.log(`O ${this.type} atacou usando ${this.atack}`)
    }
}

const Mago = new hero ('Gandalf', 3000, 'Mago', 'usou magia');
const Guerreiro = new hero ('Hercules', 50, 'Guerreiro', 'usou espada');
const Monge = new hero ('Tifu', 120 , 'Monge', 'usou artes marciais');
const Ninja = new hero ('Kakashi', 30, 'Ninja', 'usou shuriken');

console.log(Mago);
Mago.descrever();

console.log(Guerreiro);
Guerreiro.descrever();

console.log(Monge);
Monge.descrever();

console.log(Ninja);
Ninja.descrever();

