import { Sequelize } from 'sequelize';
import { Category } from './Category.js';

const opts = {
  define: {
    freezeTableName: true,
  },
};

const sequelize = new Sequelize('catalogItemsDB', 'Kristina Pochtovaya', '28Kris2021', {
  dialect: 'mysql',
  host: 'localhost',
}, opts);
export const Products = sequelize.define('Products', {
  categoryId: {
    foreignKey: true,
    type: Sequelize.DataTypes.INTEGER,
  },
  category: {
    type: Sequelize.DataTypes.STRING,
    references: {
      model: Category,
      key: 'id',
    },
  },
  description: {
    type: Sequelize.DataTypes.STRING,
  },
  imgAlt: {
    type: Sequelize.DataTypes.STRING,
  },
  imgTitle: {
    type: Sequelize.DataTypes.STRING,
  },
  image: {
    type: Sequelize.DataTypes.TEXT('long'),
  },
  price: {
    type: Sequelize.DataTypes.DECIMAL(10, 2),
  },
  counter: {
    type: Sequelize.DataTypes.INTEGER,
  },
  inStock: {
    type: Sequelize.DataTypes.BOOLEAN,
  },
},
{
  tableName: 'Products',
});

sequelize.sync();

export default Products;
