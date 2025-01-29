function gitlover(name, surname,date) {
    console.log(name, surname,date)
    }
    //I like it
    
    gitlover('Antonia', "Git", 'date');
    
    //Rebase testing1
    //test2
    //love+1
    //joy

    function gitExplorer(firstName, lastName, joinDate) {
        const fullName = `${firstName} ${lastName}`;
        const daysSinceJoin = Math.floor((new Date() - new Date(joinDate)) / (1000 * 60 * 60 * 24));
        console.log(`Welcome, ${fullName}! You've been exploring Git for ${daysSinceJoin} days.`);
    }