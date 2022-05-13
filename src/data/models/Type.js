module.exports = (sequelize, dataTypes) => {
    let alias = 'Type';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        paranoid:true
    }
    const Type = sequelize.define(alias, cols); 

    Type.associate=((models)=>{
        
        Type.hasMany(models.User,
            {
                as: "users",
                foreignKey: "movie_id",
            }
        )

    })


    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Type)
 
    return Type
};