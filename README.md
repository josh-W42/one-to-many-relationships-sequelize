# one-to-many-relationships-sequelize
A personal reference of one-to-many table relationships in sequelize.

## What's new in this repo?

- Here we address how to create associations between tables.
- As a refresher, we can one-to-one, one-to-many and many-to-many relationships. Here we look at one to many.

## What's new in the setup?

- 1:Many associations between relational database models.

### First let's create two models:

After creating a new database, we create two models.
```
sequelize model:create --name user --attributes firstName:string,lastName:string,age:integer,email:string
```

What's important to note in the command bellow is the userId attribute. It must look exactly like the user model, same spelling / capitalization.

The userId will be the exact id of one user already created.

```
sequelize model:create --name pet --attributes name:string,species:string,description:text,userId:integer
```

### Then create associations inside the new model files: (do this before migrating)

You'll see in the models file we have these associate static methods.

In the pet.js model:
```js
static associate(models) {
    // define association here
    // Each pet has one user.
    models.pet.belongsTo(models.user);
}
```
To create an association we grab the current model (pet) and assign the belongsTo association (sequalize docs for 1:Many associations) to the user model.

In the user.js model:
```js
static associate(models) {
    // define association here
    // Each user has many pets.
    models.user.hasMany(models.pet);
}
```

Here we do something similar; the user model has a 1:Many association with pet model. We specify this association by using the hasMany association.
