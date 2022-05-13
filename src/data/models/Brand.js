module.exports = (sequelize, dataTypes) => {
    let alias = 'Brand';
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
    const Brand = sequelize.define(alias, cols); 

    Brand.associate=((models)=>{
        
        Brand.hasMany(models.Product,
            {
                as: "products",
                foreignKey: "brand_id"
            }
        )

    })


    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (User)
 
    return Brand
};