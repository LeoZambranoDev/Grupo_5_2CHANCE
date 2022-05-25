module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        status: {
            type: dataTypes.INTEGER(1),
            
        }
    };
    let config = {
        timestamps: true
        
    }
    const Cart = sequelize.define(alias, cols, config); 

    Cart.associate=((models)=>{
        
        Cart.belongsTo(models.User,
            {
                as: "user",
                foreignKey: "user_id"
            }
        )

        Cart.hasMany(models.Detail,
            {
                    as: "details",
                    foreignKey: "cart_id"
            }
        )

    })


    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Color)
 
    return Cart
};