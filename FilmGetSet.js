var Film = {
    title: 'Cheese in the trap',
    duration: 116,
    country: 'South Korea',
    principalProducer: 'Kim Je Young',
    screenwriter: 'Kim Joon Ah',
    releaseYear: 2018,

    set staff(value){
        var staffNames = value.split(' ');
        this.principalProducer = staffNames[0];
        this.screenwriter = staffNames[1];
    }
};

Object.defineProperty(Film, 'staff', {
    get: function(){
        return this.principalProducer + '\n' + this.screenwriter;
    }
});

alert(Film.staff)
Film.staff = '김제영 김준아'
alert(Film.staff)
