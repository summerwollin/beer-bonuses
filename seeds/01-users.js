
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),

    knex('users').insert({
      email: "user1@example.com",
      name: 'Dwayne Johnson',
      password_hash: 'password'
    })

  );
};
