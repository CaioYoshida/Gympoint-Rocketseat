module.exports = {
  dialect: 'postgres',
  host: '192.168.99.103',
  username: 'postgres',
  password: 'docker',
  database: 'gympoint',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
