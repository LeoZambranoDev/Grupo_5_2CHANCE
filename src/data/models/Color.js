module.exports = (sequelize, dataTypes) => {
    let alias = 'Color';
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
        timestamps: false
        
    }
    const Color = sequelize.define(alias, cols, config); 

    Color.associate=((models)=>{
        
        Color.hasMany(models.Product,
            {
                as: "products",
                foreignKey: "color_id"
            }
        )

    })


    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Color)
 
    return Color
};