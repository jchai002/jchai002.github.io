
// var rotation = 0;

// jQuery.fn.rotate = function(degrees) {
//     $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
//                  '-moz-transform' : 'rotate('+ degrees +'deg)',
//                  '-ms-transform' : 'rotate('+ degrees +'deg)',
//                  'transform' : 'rotate('+ degrees +'deg)'});
//     return $(this);
// };


$(document).ready(function() {
    $('.attack_iron').click(function() {
    	$(".ironman").attr('src',"punch.gif");
        $('.ironman').animate({left:'+=450px'},200);
        $('.ironman').animate({left:'-=450px'},200);
       	$(".ironman").attr('src',"ironman.gif");

    });
});

$(document).ready(function() {
    $('.attack_hulk').click(function() {
        $('.hulk').animate({left:'-=450px'},200);
        $('.hulk').animate({left:'+=450px'},200);

    });
});

$(document).ready(function() {
    $('.heal_iron').click(function() {
        $('.ironman').fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
    });
});

$(document).ready(function() {
    $('.heal_hulk').click(function() {
        $('.hulk').fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
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

//logic

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
    speed: 8
}

function attack(self,enemy) {
    if ((Math.ceil(Math.random()*self.speed)) >= (Math.ceil(Math.random()*enemy.speed))) {
    enemy.health -= (self.attack - enemy.defense);
        if (enemy.health < 0) {
            return (enemy.name + " has lost!")
        }
        else {
            return (self.name + " hits " + enemy.name + " for " + (self.attack - enemy.defense) + " damage!! <br>" + enemy.name + " currently has: " + enemy.health + " health")
        }
    }
    else {
        return(enemy.name + " has dodged " + self.name + "'s attack!!")
    }
}

function heal(self) {
    if (self.energy > 0) {
        self.energy -= 20;
        self.health += 20;
        return (self.name + " healed 20 health! <br>" + self.name + " currently has: " + self.health + " health")
    }
    else {
        return ("Energy depleted, healing failed!")
    }
    
}