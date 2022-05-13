module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        name: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(60),
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
    const Product = sequelize.define(alias, cols, config); 

    Product.associate=((models)=>{
        
        
        Product.belongsToMany(models.User,
            {
                    as: "users",
                    through: 'users_has_products',
                    foreignKey: "product_id",
                    otherKey: "user_id",
                    timestamps:false
            }
        )
        Product.belongsTo(models.Color,
            {
                    as: "color",
                    foreignKey: "color_id",
            }
        )


        Product.belongsTo(models.Brand,
            {
                    as: "brand",
                    foreignKey: "brand_id",
            }
        )


        Product.belongsTo(models.Memory,
            {
                    as: "memory",
                    foreignKey: "memory_id",
            }
        )
        
        
        Product.belongsTo(models.Ram,
            {
                    as: "ram",
                    foreignKey: "ram_id",
            }
        )
        
        
        Product.belongsTo(models.Category,
            {
                    as: "category",
                    foreignKey: "category_id",
            }
        )
    })


    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (User)
 
    return Product
};