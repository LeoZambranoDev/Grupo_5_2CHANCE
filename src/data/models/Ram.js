module.exports = (sequelize, dataTypes) => {
    let alias = 'Ram';
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
        timestamps: false
       
    }
    const Ram = sequelize.define(alias, cols, config);

    Ram.associate=((models)=>{
        
        Ram.hasMany(models.Product,
            {
                as: "products",
                foreignKey: "ram_id"
            }
        )

    })


    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (ram)
 
    return Ram
};