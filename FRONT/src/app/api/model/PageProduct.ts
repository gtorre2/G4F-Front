
import * as models from './models';

export interface PageProduct {
    content?: Array<models.Product>;

    first?: boolean;

    last?: boolean;

    number?: number;

    numberOfElements?: number;

    size?: number;

    sort?: models.Sort;

    totalElements?: number;

    totalPages?: number;

}
