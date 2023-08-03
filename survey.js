const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  
  rl.question('What\'s an activity you like doing?', (activity) => {
    
    rl.question('What do you listen to while doing that?', (listen) => {
  
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (mealType) => {
        
        rl.question('What\'s your favourite thing to eat for that meal?', (meal) => {
          
          rl.question('Which sport is your absolute favourite?', (sport) => {
            
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superPower) => {
              console.log(`Thank you for taking part in this survey: We have compiled your answers as below: \n Your name/nickname is ${name}. You like ${activity} & While ${activity}ing, you like to listen to ${listen}. Your favourite meal is ${mealType} and you like to eat ${meal} for that meal. ${sport} is your absolute favourite sport. As you have mentioned you are amazing at ${superPower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});