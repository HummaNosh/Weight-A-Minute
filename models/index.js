const User = require('./User');
const WorkoutRecord = require('./WorkoutRecord');
const ExerciseBank = require('./ExerciseBank');
const ExerciseRecord = require('./ExerciseRecord');

WorkoutRecord.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

ExerciseRecord.belongsTo(WorkoutRecord, {
    foreignKey: "workout_id",
    onDelete: "CASCADE"
});

ExerciseRecord.belongsTo(ExerciseBank, {
    foreignKey: "bank_id",
    onDelete: "CASCADE"
});

// Signup.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(Signup, {
//   foreignKey: 'user_id'
// });

module.exports = {User, WorkoutRecord, ExerciseBank, ExerciseRecord};
