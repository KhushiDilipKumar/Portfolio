class Computer{
    constructor(name)
    {
        this.name = name;
    }
    run()
    {
        console.log("The computer is now running");
    } 
}

class Macbook extends Computer{
    constructor(name,company)
    {
       super(name)
       this.company = company 
    }
    logIn()
    {
        console.log("You are logged into a Macbook "+this.name)
    }
}

const macbook_air = new Macbook('Air','Apple');
macbook_air.logIn()
macbook_air.run()