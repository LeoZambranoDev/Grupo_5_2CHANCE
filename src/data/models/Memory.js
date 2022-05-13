module.exports = (sequelize, dataTypes) => {
    let alias = 'Memory';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: true
        }
    };
    let config = {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        paranoid:true
    }
    const Memory = sequelize.define(alias, cols);

    Memory.associate=((models)=>{
        
        Memory.hasMany(models.Product,
            {
                as: "products",
                foreignKey: "memory_id",
            }
        )

    })


    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (memory)
 
    return Memory
};