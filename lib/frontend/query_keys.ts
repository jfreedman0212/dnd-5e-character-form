/**
 * Represents a source to make a request to.
 */
export enum QuerySource {
    DND_5E_SRD = "dnd5e",
    BACKEND = "backend"
}

export type QueryKey = [{ readonly source: QuerySource }, ...(string | number)[]];

type QueryKeyFn = (key: string | number) => QueryKey;

type QueryKeys = Readonly<{
    classes: QueryKey;
    races: QueryKey;
    alignments: QueryKey;
    abilityScores: QueryKey;
    trait: QueryKeyFn;
    class: QueryKeyFn;
    race: QueryKeyFn;
}>;

/**
 * Represents all possible query keys to be used by the application
 */
export const queryKeys: QueryKeys = {
    classes: [{ source: QuerySource.DND_5E_SRD }, "classes"],
    races: [{ source: QuerySource.DND_5E_SRD }, "races"],
    alignments: [{ source: QuerySource.DND_5E_SRD }, "alignments"],
    abilityScores: [{ source: QuerySource.DND_5E_SRD }, "ability-scores"],
    trait: (key) => {
        return [{ source: QuerySource.DND_5E_SRD }, "traits", key];
    },
    class: (key) => {
        return [{ source: QuerySource.DND_5E_SRD }, "classes", key];
    },
    race: (key) => {
        return [{ source: QuerySource.DND_5E_SRD }, "races", key];
    }
};
