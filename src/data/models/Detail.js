module.exports = (sequelize, dataTypes) => {
    let alias = 'Detail';
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
        timestamps: false,
        paranoid:true
        
    }
    const Detail = sequelize.define(alias, cols, config); 

    Detail.associate=((models)=>{
        
        Detail.belongsTo(models.Product,
            {
                as: "product",
                foreignKey: "product_id"
            }
        )
        Detail.belongsTo(models.Cart,
            {
                as: "cart",
                foreignKey: "cart_id"
            }
        )

    })


    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Detail)
 
    return Detail
};