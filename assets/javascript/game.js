//Define the needed variables for the game
// console.log ('is html reading me')
$(document).ready(function() 

{
var lightSide= 1;
var lightSideHealth;
var lightSideSaber;
var darkSide = 2;
var darkSideHealth;
var darkSideSaber; 
var attack;
var saber;
var win;
var loss;

// Provide instructions for game play

// LightSide Character is selected for battle


    $(document).on('click', '#one', function()
{
// When first character is selected fade character out in character section
    console.log('yo yoda');
    $(this).hide("#one");
// Fade in selected character to Battle area for light side
    $("#batone").append('<img src="assets/images/Yoda.jpeg" width="150" height="150" />' );
    lightSideHealth = (Math.floor(Math.random() * 250));
    $(".badge-light").text(lightSideHealth);
// Generate a random number for Lightside player health between (100 - 250)

// Fade in selected character to Battle area for Dark side if battle character 1 is populated (light side)
    if("#batone" == true)
    {
    $("#battwo").append('<img src="assets/images/Yoda.jpeg" width="150" height="150"/>');
    darkSideHealth = (Math.floor(Math.random() * 250));
    $(".badge-dark").text(darkSideHealth);
    //elseif (!"#batwo" === false), alert("You Are Ready for Battle. Click 'OK' to Continue.")
    }
}); 



    $(document).on('click', '#two', function()
{
// When first character is selected fade character out in character section
    console.log('Whatever solo');
    $(this).hide("#two");
// Fade in selected character to Battle area for light side
    $("#batone").append('<img src="assets/images/Han Solo.jpeg" width="150" height="150" />' );
// Generate a random number for Lightside player health between (100 - 250)
    lightSideHealth = (Math.floor(Math.random() * 250));
    $(".badge-light").text(lightSideHealth);
// Fade in selected character to Battle area for Dark side if battle character 1 is populated (light side)
    if ("#batone" == true)
    $("#battwo").append('<img src="assets/images/Han Solo.jpeg" width="150" height="150"/>');
    darkSideHealth = (Math.floor(Math.random() * 250));
    $(".badge-dark").text(darkSideHealth);
    //else alert("You Are Ready for Battle. Click 'OK' to Continue.");
}); 

    $(document).on('click', '#three', function()
{
// When first character is selected fade character out in character section
    console.log('damn ewoks');
    $(this).hide("#three");
// Fade in selected character to Battle area for light side
    $("#batone").append('<img src="assets/images/ewok.jpeg" width="150" height="150" />' );
// Generate a random number for Lightside player health between (100 - 250)
    lightSideHealth = (Math.floor(Math.random() * 250));
    $(".badge-light").text(lightSideHealth);
// Fade in selected character to Battle area for Dark side if battle character 1 is populated (light side)
    if ("#batone" == true)
    $("#battwo").append('<img src="assets/images/ewok.jpeg" width="150" height="150"/>');
    darkSideHealth = (Math.floor(Math.random() * 250));
    $(".badge-dark").text(darkSideHealth);
    //else  alert("You Are Ready for Battle. Click 'OK' to Continue.");
}); 

    $(document).on('click', '#four', function()
{
// When first character is selected fade character out in character section
    console.log('evil evil man');
    $(this).hide("#four");
// Fade in selected character to Battle area for light side
    $("#batone").append('<img src="assets/images/Sidious.jpeg" width="150" height="150" />' );
// Generate a random number for Lightside player health between (100 - 250)
    lightSideHealth = (Math.floor(Math.random() * 250));
    $(".badge-light").text(lightSideHealth);
// Fade in selected character to Battle area for Dark side if battle character 1 is populated (light side)
    if ("#batone" == true)
    $("#battwo").append('<img src="assets/images/Sidious.jpeg" width="150" height="150"/>');
    darkSideHealth = (Math.floor(Math.random() * 250));
    $(".badge-dark").text(darkSideHealth);
    //else  alert("You Are Ready for Battle. Click 'OK' to Continue.");
}); 
// Attack button is clicked to begin battle
$(document).on('click', '.btn-danger', function()

{
// When first character is selected fade character out in character section
    console.log('is the button working')
// Randomly pick Light or Dark side for battle strike
attack = (Math.floor(Math.random() * 3));
saber = (Math.floor(Math.random() * 25));
var dSH2;
var lSH2;

console.log(attack);
console.log(saber);

        if (attack = lightSide)
    { 
        dSH2 = (darkSideHealth - saber);
        console.log(dSH2);
        $('.badge-dark').text(dSH2);
    }
      else
    {    
        lSH2 = (lightSideHealth - saber);
        console.log(lSH2);
        $('.badge-light').text(lSH2);
    }
        
    if (dSH2 <= 0)
    {    
        $('#wins').append("<h2> YOU HAVE DEFEATED YOUR ENEMY FORCES! </h2>");
    }
    else
    {
        $('#losses').append("<h2> YOU BEEN DESTROYED BY YOUR ENEMY! </h2>");
    }
}
// Generate a random number for Lightside player health between (100 - 250)
// Generate a random lightsabre number (10 - 25)

// Darkside Character is selected for battle


// Generate a random number for Darkside player health 100 - 250
// Generate a random lightsabre number (10 - 25)



// If player 1 (light side); reduce health of Player 2 (dark side)
// If player 2 (dark side); reduce health of Player 1 (light side)

// Game over
// When a player reach 0 health game is over and winner is declared
// Looser image is faded away
// Next click will rest the game for new player selection

// Game over
// Functions for the game
)});