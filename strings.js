// // Strings as Data Type

// let a= 'Hello';
// let b= "World";
// let c=`There`;

// let length= a.length;
// console.log({length});

// console.log('item', a[2]); //index notation; looking for an item in a particular index position. It is not obligatory to use item word in console brack( it is just for clarification)
// console.log('index', a.indexOf('e')); // looking for index  number of an item . Note: It is not mandatory to use index word in console brackets


// // `` signs used on C are called template literals
// //Strings are primitive data type; they obejects bcs they have properties and methods
// // we count lenght of string start with 1 and the indexing of character starting with 0



// let greet = a +" "+ b; // You add strings btn + signs to add space btn words
// console.log({ greet });

// let salamu= ` ${a} ${b}. I love code!`; // string concatenation using template literal and $ sign 
// console.log({salamu});



class LanguageLearningSystem {
    constructor(targetLanguage, proficiencyLevel) {
        this.targetLanguage = targetLanguage;
        this.proficiencyLevel = proficiencyLevel;
        this.exercises = {};
        this.quizzes = {};
        this.progress = 0; // Progress tracking
        this.resources = {
            Beginner: ["Textbook: Beginner's Guide to " + targetLanguage, "Online course: Introduction to " + targetLanguage],
            Intermediate: ["Intermediate " + targetLanguage + " Grammar Workbook", "Conversation Practice: " + targetLanguage]
        };
    }

    addExercise(topic, exercise) {
        if (!(topic in this.exercises)) {
            this.exercises[topic] = [];
        }
        this.exercises[topic].push(exercise);
    }

    addQuiz(topic, quiz) {
        if (!(topic in this.quizzes)) {
            this.quizzes[topic] = [];
        }
        this.quizzes[topic].push(quiz);
    }

    trackProgress() {
        // Logic to track progress based on completed exercises and quizzes
        // Increment progress for each completed exercise or quiz
        this.progress++;
    }

    recommendResources() {
        // Logic to recommend additional resources based on proficiency level and progress
        if (this.proficiencyLevel === "Beginner" && this.progress < 3) {
            return this.resources.Beginner;
        } else if (this.proficiencyLevel === "Intermediate" && this.progress < 6) {
            return this.resources.Intermediate;
        } else {
            return [];
        }
    }

    takeExercise(topic) {
        // Logic to take an exercise and evaluate if passed or not
        // For simplicity, assume passing if any exercise is attempted
        this.trackProgress();
        console.log("You completed the exercise on " + topic);
    }

    takeQuiz(topic) {
        // Logic to take a quiz and evaluate if passed or not
        // For simplicity, assume passing if any quiz is attempted
        this.trackProgress();
        console.log("You completed the quiz on " + topic);
    }

    upgradeProficiencyLevel() {
        // Logic to upgrade proficiency level if passed certain criteria
        if (this.progress >= 6) {
            if (this.proficiencyLevel === "Beginner") {
                this.proficiencyLevel = "Intermediate";
                console.log("Congratulations! You have been upgraded to Intermediate level.");
            } else {
                console.log("You are already at the highest proficiency level.");
            }
        }
    }
}

// Example usage:

const learner = new LanguageLearningSystem("French", "Beginner");

learner.addExercise("Vocabulary", "Match the French words with their meanings.");
learner.addExercise("Grammar", "Fill in the blanks with the correct verb forms.");
learner.addQuiz("Vocabulary", "Multiple-choice quiz on common French words.");
learner.addQuiz("Grammar", "Conjugation quiz for regular French verbs.");

learner.takeExercise("Vocabulary");
learner.takeQuiz("Grammar");

console.log("Recommended resources:", learner.recommendResources());

learner.upgradeProficiencyLevel();
learner.upgradeProficiencyLevel(); // Trying to upgrade again

console.log("Current proficiency level:", learner.proficiencyLevel);





