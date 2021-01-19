
class Xmen{
    constructor (name, power){
        this.name = name;
        this.power = power;
    }

describe(){
    return ` ${this.name} has ${this.power}.`;
    }
}

class Team {
    constructor (name) {
        this.name = name
        this.xmens = [];
    }

addXmen(xmen){
    if (xmen instanceof Xmen){
        this.xmens.push(xmen);
    } else {
      throw new Error(` You can only add an instrance of Xmen. Arguement is not a Xmen: ${xmen}`);
    }
}
describe() {
    return `${this.name} has ${this.xmens.length} xmens.`; 
  }
}

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }

    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch(selection) {
                case '1':
                    this.createTeam();
                    break;
                    case '2':
                    this.viewTeam();
                    break;
                    case '3':
                    this.deleteTeam();
                    break;
                    case '4':
                    this.displayTeams();
                    break;
                default:
                    selection = 0;
            }
             selection = this.showMainMenuOptions();
         }
            
          alert('Goodbye!');
        }
       
        showMainMenuOptions(){
            return prompt(`
            0) exit
            1) create new xmen
            2) view xmen
            3) delete xmen
            4) display all xmen`
            );
        }

        showTeamMenuOptions(teamInfo){
            return prompt(`
            0) back
            1) create xmen
            2) delete xmen
            ----------------------
            ${teamInfo}
            `);
            
             }
    
    displayTeams(){
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++) {
           teamString += i + ') ' + this.teams[i].name + '\n';
    }
    alert(teamString);
}
    deleteTeam(){
        let index = prompt('Enter the index of the xmen you wish to delete:');
        if(index > -1 && index < this.teams.length){
            this.teams.splice(index, 1);
        }
    }
   
    createTeam() {
        let name = prompt('Enter name for new xmen:'); 
        this.teams.push(new Team(name));
    }

    viewTeam() {
        let index = prompt(' Enter the index of the xmen you wish to view: ');
        if (index > -1 && index < this.teams.length){
            this.selectedTeam = this.teams[index];
            let description = ' Team Name: ' + this.selectedTeam.name + '\n';

            for (let i = 0; i < this.selectedTeam.xmens.length; i++) {
            description += i + ') ' + this.selectedTeam.xmens[i].name
             + ' - ' + this.selectedTeam.xmens[i].position + '\n';
            }

         let selection = this.showTeamMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createXmen();
                    break;
                case '2':
                    this.deleteXmen();
            }
        }
    }

    createXmen(){
        let name = prompt('Enter name for new Xmen:');
        let position = prompt('Enter power for new Xmen:');
        this.selectedTeam.xmens.push(new Xmen(name, power));
    }
    
    deleteXmen(){
    let index = prompt('Enter the index of the Xmen you wish to delete:');
    if(index > -1 && index < this.selectedTeam.xmens.length){
        this.selectedTeam.xmens.splice(index, 1);
    }

    }
}
        
    let menu = new Menu();
    menu.start();



    



