const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ExerciseRecord extends Model {}

ExerciseRecord.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    unit: {
      type: DataTypes.STRING(2),
      allowNull: false,
      validate: {
        isKGorLB(value) {
          if (value !== "kg" && value !== "lb") {
            throw new Error("This is not a valid unit");
          }
        },
      },
    },
    reps1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reps2: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    reps3: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    reps4: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    reps5: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight1: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight2: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight3: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight4: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight5: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "ExerciseRecord",
  }
);

module.exports = ExerciseRecord;
