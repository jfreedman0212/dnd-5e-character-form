import { Container, ContainerModule } from "inversify";
import TYPES from "./types";
import CharacterService from "./services/CharacterService";
import { ICharacterService, Prisma } from "./interfaces";
import { PrismaClient } from ".prisma/client";

const thirdPartyDependencies = new ContainerModule((bind) => {
    bind<Prisma>(TYPES.Prisma).toConstantValue(new PrismaClient());
});

const applicationDependencies = new ContainerModule((bind) => {
    bind<ICharacterService>(TYPES.CharacterService).to(CharacterService);
});

/**
 * Global instance of the DI Container, contains all dependencies needed for the app.
 * Should only be used by server-side code!
 */
const container = new Container();

container.load(thirdPartyDependencies, applicationDependencies);

export default container;
