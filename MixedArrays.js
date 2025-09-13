/* Task 1: Create the Profile. Write code to create a profile array containing the
required elements. Fill the array with data for one fictional user profile. Remember
to include all the elements (user name, age, subscription status, user’s location,
user’s hobbies). */

let profileArray = ["Lindsay", 47, false, {City: "Saint Louis"}, hobbyArray = ["dancing", "building blocks", "paddleboarding"]];

/*Task 2: Access and Log Profile Details. Use console.log() to access and display
the foll[owing:
● The user’s name.
● The second hobby from the hobbies array.*/

console.log(profileArray[0], hobbyArray[1]);

/*Task 3: Modify the Profile. Make the following updates:
● Update the user’s age to a new value.
● Add a new hobby to the hobbies array. */

profileArray = ["Lindsay", 49, false, {City: "Saint Louis"}, hobbyArray = ["dancing", "building blocks", "paddleboarding", "swimming"]];

/*Task 4: Display the Updated Profile. Log the entire updated profile to verify the
changes. */

console.log(profileArray);

