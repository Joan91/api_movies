module.exports = function (sequelize , DataTypes){
    let alias = 'Movie';

    let cols = {
        id: {
          type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING(500),
      },
      rating: {
        type: DataTypes.DECIMAL(3, 1),
        allowNull: false
      },
      awards: {
        type: DataTypes.INTEGER(10),
        allowNull: false
      },
      release_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
        length: {
        type: DataTypes.INTEGER(10)
      },
      genre_id: {
        type: DataTypes.INTEGER(10).UNSIGNED
      },
    };
    let config = {
        tableName: 'movies',
      timestamps: true,
        underscored: true
    };
    const Movie = sequelize.define(alias, cols, config);

    Movie.associate = function(models) {
      Movie.belongsTo(models.Genre, {
        as: "genre",
        foreignKey: "genre_id"
      })
    }
    
    return Movie;
}