const sequelize = require("../config/connection");
const {
  User,
  WorkoutRecord,
  ExerciseBank,
  ExerciseRecord,
} = require("../models");

const userData = require("./userData.json");
const workoutData = require("./workoutData.json");
const exerciseBankData = require("./exerciseBankData.json");
const exerciseRecordData = require("./exerciseRecordData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  //   for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.fl/oor(Math.random() * users.length)].id,
  //   });
  // }

  // This doesn't create date data - which we will need.
  const workout = await WorkoutRecord.bulkCreate(workoutData);
  const exBank = await ExerciseBank.bulkCreate(exerciseBankData);
  const exRecord = await ExerciseRecord.bulkCreate(exerciseRecordData);
  // sets, unit, reps 1 - 5, weight 1 - 5, workout id, exercise id
// workouts: workout 1, exercises x 4


  //   for (const project of projectData) {
  //     await Project.create({
  //       ...project,
  //       user_id: users[Math.floor(Math.random() * users.length)].id,
  //     });
  //   }

  process.exit(0);
};

seedDatabase();
  
//   const SeedDatabase = async () => {
//   const historyInfo = await History.bulkCreate(HistoryData, {
//     individualHooks: true,
//     returning: true,
//   });
// }
// seedDatabase()
// SeedDatabase();