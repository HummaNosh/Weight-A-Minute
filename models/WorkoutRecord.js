const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WorkoutRecord extends Model {};

WorkoutRecord.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATE,
            get() {return moment(this.getDataValue('date')).format('DD/MM/YYYY h:mm:ss')}
        },
        length: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'WorkoutRecord'
    }
);

module.exports = WorkoutRecord;