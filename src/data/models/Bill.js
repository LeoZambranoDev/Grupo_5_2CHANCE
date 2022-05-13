module.exports = (sequelize, dataTypes) => {
    let alias = 'Bill';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        }
    };
    let config = {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        paranoid:true
    }
    const Bill = sequelize.define(alias, cols, config); 

    Bill.associate=((models)=>{
        
        Bill.belongsTo(models.User,
            {
                as: "user",
                foreignKey: "user_id",
            }
        )

    })


    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Bill)
 
    return Bill
};