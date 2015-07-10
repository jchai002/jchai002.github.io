
//logic, backend

var iron_man = {
    name: "Iron Man",
    health: 100,
    energy: 100,
    attack: 15,
    defense: 5,
    speed: 10
}

var hulk = {
    name: "The Hulk",
    health: 120,
    energy: 80,
    attack:20,
    defense:10,
    speed: 7
}

//doesn't work
// function display_hulk() {
//     return "health: " + hulk.health + "<br>energy" + hulk.energy
// }
// function display_iron_man() {
//    getElementById("#iron_man").innerHTML=  "health: " + iron_man.health + "<br>energy" + iron_man.energy
// }

function attack(self,enemy) {
    
    if ((Math.ceil(Math.random()*self.speed)) >= (Math.ceil(Math.random()*enemy.speed))) {
    var dmg = (Math.ceil(Math.random()*self.attack)) + self.attack - (Math.ceil(Math.random()*enemy.defense));
        enemy.health -= dmg
        if (enemy.health < 0) {
            return (enemy.name + " has lost!")
        }
        else {
            return (self.name + " hits " + enemy.name + " for " + dmg + " damage!! <br>" + enemy.name + " currently has: " + enemy.health + " health")
        }
    }
    else {
        return(enemy.name + " has dodged " + self.name + "'s attack!!")
    }
}

function heal(self) {
    if (self.energy > 0) {
        self.energy -= 20;
        var heal_amt = 20 + (Math.ceil(Math.random()*20))
        self.health += heal_amt;
        return (self.name + " healed " + heal_amt + " health! <br>" + self.name + " currently has: " + self.health + " health")
    }
    else {
        return ("Energy depleted, healing failed!")
    }
    
}


// animation, frontend

$(document).ready(function() {
    $('.attack_iron').click(function() {
        $('.ironman').animate({left:'+=450px'},200);
        $('.ironman').animate({left:'-=450px'},200);
        $('.attack_iron').fadeOut(10);
        $('.heal_iron').fadeOut(10);
        $('.attack_hulk').fadeIn(10);
        $('.heal_hulk').fadeIn(10);
    });
});

$(document).ready(function() {
    $('.attack_hulk').click(function() {
        $('.hulk').animate({left:'-=450px'},200);
        $('.hulk').animate({left:'+=450px'},200);
        $('.attack_hulk').fadeOut(10);
        $('.heal_hulk').fadeOut(10);
        $('.attack_iron').fadeIn(10);
        $('.heal_iron').fadeIn(10);
    });
});

$(document).ready(function() {
    $('.heal_iron').click(function() {
        $('.ironman').fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
        $('.attack_iron').fadeOut(10);
        $('.heal_iron').fadeOut(10);
        $('.attack_hulk').fadeIn(10);
        $('.heal_hulk').fadeIn(10);
    });
});

$(document).ready(function() {
    $('.heal_hulk').click(function() {
        $('.hulk').fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
        $('.attack_hulk').fadeOut(10);
        $('.heal_hulk').fadeOut(10);
        $('.attack_iron').fadeIn(10);
        $('.heal_iron').fadeIn(10);
    });
});

       $(document).ready(function() { 
        var obj = document.createElement("audio"); 
        obj.setAttribute("src", "hulkhit.mp3")
        $.get(); 

        $(".attack_hulk").click(function() { 
            obj.play(); 
        }); 
    }); 

        $(document).ready(function() { 
        var obj = document.createElement("audio"); 
        obj.setAttribute("src", "Ironmanhit.mp3")
        $.get(); 

        $(".attack_iron").click(function() { 
            obj.play(); 
        }); 
    }); 

           $(document).ready(function() { 
        var obj = document.createElement("audio"); 
        obj.setAttribute("src", "heal.mp3")
        $.get(); 

        $(".heal_iron").click(function() { 
            obj.play(); 
        }); 
    }); 
              $(document).ready(function() { 
        var obj = document.createElement("audio"); 
        obj.setAttribute("src", "heal.mp3")
        $.get(); 

        $(".heal_hulk").click(function() { 
            obj.play(); 
        }); 
    }); 