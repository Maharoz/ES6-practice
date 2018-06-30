const team ={
    members:['Jane','Bill'],
    teamName:'Super Squad',
    teamSummary:function(){

        return this.members.map((member)=>{
           return `${member} is on team ${this.teamName}`;

        });

    }
};

console.log(team.teamSummary());


//output [ 'Jane is on team Super Squad', 'Bill is on team Super Squad' ]