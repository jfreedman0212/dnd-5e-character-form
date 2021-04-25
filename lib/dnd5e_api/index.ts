export type ApiReference = Readonly<{
    index: string;
    name: string;
    url: string;
}>;

export type ResourceList = Readonly<{
    count: number;
    results: ApiReference[];
}>;

export type Choice = Readonly<{
    choose: number;
    type: string;
    from: ApiReference[];
}>;

export type AbilityBonus = Readonly<{
    bonus: number;
    ability_score: ApiReference;
}>;

export type Race = Readonly<{
    index: string;
    name: string;
    speed: number;
    ability_bonuses: AbilityBonus[];
    alignment: string;
    age: string;
    size: string;
    size_description: string;
    starting_proficiencies: ApiReference[];
    languages: ApiReference[];
    // language_options?
    language_desc: string;
    traits: ApiReference[];
    // trait_options?
    subraces: ApiReference[];
    url: string;
}>;

export type Trait = Readonly<{
    index: string;
    races: ApiReference[];
    subraces: ApiReference[];
    name: string;
    desc: string[];
    proficiencies: ApiReference[];
    proficiency_choices: Choice[];
    url: string;
}>;
