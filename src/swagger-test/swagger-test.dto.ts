type TagAsUnion = 'UNION_TAG1' | 'UNION_TAG2';
export enum TagAsEnum {
    Tag1 = 'ENUM_TAG1',
    Tag2 = 'ENUM_TAG2',
}

export class ResponseDto {
    numberField!: number;

    /**
     * this description is parsed from jsdoc comment
     * @example 'example value from jsdoc'
     */
    fieldWithJsDoc!: string;

    enumTag!: TagAsEnum;
    nestedDefinedAsInterface!: {
        /**
         * TS union not worked properly with @nestjs/swagger plugin, use enum instead
         */
        jsDocNotWorking: number;

        unionTagsNotWorking: TagAsUnion[];
    };
    nestedDefinedAsClass!: NestedObjectAsSeparateClass;
}

class NestedObjectAsSeparateClass {
    /**
     * jsdoc working when nested object described as separate class
     */
    jsDocWorking!: number;

    /**
     * jsdoc working but union not represented as enum in swagger. Resolution: not using Union at all
     */
    unionNotTagsWorking!: TagAsUnion[];
}

export class RequestBodyDto {
    name!: string;
    optional?: number;
    mayBeNull!: number | null;
}
