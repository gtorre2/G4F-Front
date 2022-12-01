import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ProductcontrollerApi {

    protected basePath = 'https://localhost:8080/';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * 
     * @summary Cria um produto
     * @param product Produto
     */
    public createUsingPOST(product: models.Product, extraHttpRequestParams?: any): Observable<models.Product> {
        return this.createUsingPOSTWithHttpInfo(product, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Deleta uma lista de produtos
     * @param products Produtos
     */
    public deleteAllUsingDELETE(products: Array<models.Product>, extraHttpRequestParams?: any): Observable<models.Product> {
        return this.deleteAllUsingDELETEWithHttpInfo(products, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Deletar um produto pelo ID
     * @param id Id do produto
     */
    public deleteUsingDELETE(id: number, extraHttpRequestParams?: any): Observable<models.Product> {
        return this.deleteUsingDELETEWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Encontra um produto pelo ID
     * @param id Id do Produto
     */
    public findUsingGET(id: number, extraHttpRequestParams?: any): Observable<models.Product> {
        return this.findUsingGETWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary busca todos os produtos com paginação
     * @param page page
     * @param count count
     * @param order order
     * @param sort sort
     */
    public getAllPaginatedUsingGET(page?: number, count?: number, order?: string, sort?: string, extraHttpRequestParams?: any): Observable<models.PageProduct> {
        return this.getAllPaginatedUsingGETWithHttpInfo(page, count, order, sort, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary getAll
     */
    public getAllUsingGET(extraHttpRequestParams?: any): Observable<models.IterableProduct> {
        return this.getAllUsingGETWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Busca produtos pela descricao
     * @param descricao Descrição do produto
     */
    public searchByDescricaoUsingGET(descricao: string, extraHttpRequestParams?: any): Observable<Array<models.Product>> {
        return this.searchByDescricaoUsingGETWithHttpInfo(descricao, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Busca produtos por nome ou pela descricao paginando a consulta
     * @param nomeOrDescricao Nome ou descrição do produto
     * @param page page
     * @param count count
     * @param order order
     * @param sort sort
     */
    public searchByNomeOrDescricaoPaginatedUsingGET(nomeOrDescricao: string, page?: number, count?: number, order?: string, sort?: string, extraHttpRequestParams?: any): Observable<models.PageProduct> {
        return this.searchByNomeOrDescricaoPaginatedUsingGETWithHttpInfo(nomeOrDescricao, page, count, order, sort, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Busca produtos por nome ou pela descricao
     * @param nomeOrDescricao Nome ou descrição do produto
     */
    public searchByNomeOrDescricaoUsingGET(nomeOrDescricao: string, extraHttpRequestParams?: any): Observable<Array<models.Product>> {
        return this.searchByNomeOrDescricaoUsingGETWithHttpInfo(nomeOrDescricao, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Busca produtos pelo nome
     * @param nome Nome do produto
     */
    public searchByNomeUsingGET(nome: string, extraHttpRequestParams?: any): Observable<Array<models.Product>> {
        return this.searchByNomeUsingGETWithHttpInfo(nome, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Atualiza produto
     * @param product Produto
     */
    public updateUsingPUT(product: models.Product, extraHttpRequestParams?: any): Observable<models.Product> {
        return this.updateUsingPUTWithHttpInfo(product, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Cria um produto
     * 
     * @param product Produto
     */
    public createUsingPOSTWithHttpInfo(product: models.Product, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/product';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); 
        if (product === null || product === undefined) {
            throw new Error('Required parameter product was null or undefined when calling createUsingPOST.');
        }
        let consumes: string[] = [
            'application/json'
        ];
        let produces: string[] = [
            '*/*'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: product == null ? '' : JSON.stringify(product),
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });

        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Deleta uma lista de produtos
     * 
     * @param products Produtos
     */
    public deleteAllUsingDELETEWithHttpInfo(products: Array<models.Product>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/product/';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON());
        if (products === null || products === undefined) {
            throw new Error('Required parameter products was null or undefined when calling deleteAllUsingDELETE.');
        }
        let consumes: string[] = [
            'application/json'
        ];
        let produces: string[] = [
            '*/*'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            body: products == null ? '' : JSON.stringify(products), 
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Deletar um produto pelo ID
     * 
     * @param id Id do produto
     */
    public deleteUsingDELETEWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/product/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); 
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE.');
        }
        let consumes: string[] = [
            'application/json'
        ];

        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Encontra um produto pelo ID
     * 
     * @param id Id do Produto
     */
    public findUsingGETWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/product/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); 
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findUsingGET.');
        }
        let consumes: string[] = [
            'application/json'
        ];

        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * busca todos os aparelhos com paginação
     * 
     * @param page page
     * @param count count
     * @param order order
     * @param sort sort
     */
    public getAllPaginatedUsingGETWithHttpInfo(page?: number, count?: number, order?: string, sort?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/product';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); 
        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }

        if (count !== undefined) {
            queryParameters.set('count', <any>count);
        }

        if (order !== undefined) {
            queryParameters.set('order', <any>order);
        }

        if (sort !== undefined) {
            queryParameters.set('sort', <any>sort);
        }

        let consumes: string[] = [
            'application/json'
        ];

        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * getAll
     * 
     */
    public getAllUsingGETWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/product/findAll';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); 
        let consumes: string[] = [
            'application/json'
        ];

        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Busca produtos pela descricao
     * 
     * @param descricao Descrição do produto
     */
    public searchByDescricaoUsingGETWithHttpInfo(descricao: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/product/descricao/${descricao}'
                    .replace('${' + 'descricao' + '}', String(descricao));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON());
        if (descricao === null || descricao === undefined) {
            throw new Error('Required parameter descricao was null or undefined when calling searchByDescricaoUsingGET.');
        }
        let consumes: string[] = [
            'application/json'
        ];

        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Busca produtos por nome ou pela descricao paginando a consulta
     * 
     * @param nomeOrDescricao Nome ou descrição do produto
     * @param page page
     * @param count count
     * @param order order
     * @param sort sort
     */
    public searchByNomeOrDescricaoPaginatedUsingGETWithHttpInfo(nomeOrDescricao: string, page?: number, count?: number, order?: string, sort?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/product/nomeOrDescricaoPaginated/${nomeOrDescricao}'
                    .replace('${' + 'nomeOrDescricao' + '}', String(nomeOrDescricao));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON());
        if (nomeOrDescricao === null || nomeOrDescricao === undefined) {
            throw new Error('Required parameter nomeOrDescricao was null or undefined when calling searchByNomeOrDescricaoPaginatedUsingGET.');
        }
        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }

        if (count !== undefined) {
            queryParameters.set('count', <any>count);
        }

        if (order !== undefined) {
            queryParameters.set('order', <any>order);
        }

        if (sort !== undefined) {
            queryParameters.set('sort', <any>sort);
        }

        let consumes: string[] = [
            'application/json'
        ];

        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Busca produtos por nome ou pela descricao
     * 
     * @param nomeOrDescricao Nome ou descrição do produto
     */
    public searchByNomeOrDescricaoUsingGETWithHttpInfo(nomeOrDescricao: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/product/nomeOrDescricao/${nomeOrDescricao}'
                    .replace('${' + 'nomeOrDescricao' + '}', String(nomeOrDescricao));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); 
        if (nomeOrDescricao === null || nomeOrDescricao === undefined) {
            throw new Error('Required parameter nomeOrDescricao was null or undefined when calling searchByNomeOrDescricaoUsingGET.');
        }
        let consumes: string[] = [
            'application/json'
        ];

        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Busca produtos pelo nome
     * 
     * @param nome Nome do produto
     */
    public searchByNomeUsingGETWithHttpInfo(nome: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/product/nome/${nome}'
                    .replace('${' + 'nome' + '}', String(nome));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); 
        if (nome === null || nome === undefined) {
            throw new Error('Required parameter nome was null or undefined when calling searchByNomeUsingGET.');
        }
        let consumes: string[] = [
            'application/json'
        ];

        let produces: string[] = [
            '*/*'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Atualiza produto
     * 
     * @param product Produto
     */
    public updateUsingPUTWithHttpInfo(product: models.Product, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/product';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON());
        if (product === null || product === undefined) {
            throw new Error('Required parameter product was null or undefined when calling updateUsingPUT.');
        }
        let consumes: string[] = [
            'application/json'
        ];

        let produces: string[] = [
            '*/*'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: product == null ? '' : JSON.stringify(product), 
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
