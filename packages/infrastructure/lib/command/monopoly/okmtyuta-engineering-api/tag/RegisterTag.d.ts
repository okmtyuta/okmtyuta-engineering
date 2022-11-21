import { Tag } from "@okmtyuta-engineering/library/lib/db/typeorm/entity/Tag";
import { RegisterTagDto } from "./dto/RegisterTag.dto";
interface RegisterTagResult {
    tag: Tag;
}
interface IRegisterTag {
    execute(params: RegisterTagDto): Promise<RegisterTagResult>;
}
export declare class RegisterTag implements IRegisterTag {
    execute(params: RegisterTagDto): Promise<RegisterTagResult>;
}
export {};
