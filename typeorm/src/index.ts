import "reflect-metadata";
import { createConnection } from "typeorm";
import { Parent, Child } from "./entity/User";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const child = new Child();
    child.name = "tom"
    await connection.manager.save(child);

    const user = new Parent();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    user.child = [child]
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const userRespository = connection.getRepository(Parent);
    const users = await userRespository.find({ where: { id: 1 }, relations: ['child'] });
    console.log("Loaded users: ", users,user.child);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
