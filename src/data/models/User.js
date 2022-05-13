module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        firstName: {
            type: dataTypes.STRING(45),
            allowNull: true
        },
        lastName: {
            type: dataTypes.STRING(45),
            allowNull: true
        },
        nick: {
            type: dataTypes.STRING(45),
            allowNull: false,
            unique:true
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false,
            unique:true
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false,
            unique:true
        },
        address: {
            type: dataTypes.STRING(60),
            allowNull: true
        },
        image: {
            type: dataTypes.STRING(60),
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
    const User = sequelize.define(alias, cols, config); 

    User.associate=((models)=>{
        
        
        User.belongsTo(models.Type,
            {
                as: "type",
                foreignKey: "type_id",
            }
        ),


        User.belongsToMany(models.Product,
            {
                as: "products",
                through: 'users_has_products',
                foreignKey: "user_id",
                otherKey: "product_id",
                timestamps:false
            }
        )
        User.hasMany(models.Bill,
            {
                as: "bills",
                foreignKey: "user_id",
            }
        )





    })


    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (User)
 
    return User
};