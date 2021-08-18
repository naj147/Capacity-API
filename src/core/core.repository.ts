import {FilterQuery} from "mongoose";

export interface Repostiory < Type, TypeDocument > {
    findOne(filterQuery : FilterQuery < TypeDocument >): Promise < Type >;
    find(filterQuery : FilterQuery < TypeDocument >): Promise < Type[] >;
    create(object : Type): Promise < Type >;
    findOneAndUpdate(filterQuery : FilterQuery < TypeDocument >, object : Partial < Type >): Promise < Type >;
}
