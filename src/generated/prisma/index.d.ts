
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Farmacia
 * 
 */
export type Farmacia = $Result.DefaultSelection<Prisma.$FarmaciaPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Modulo
 * 
 */
export type Modulo = $Result.DefaultSelection<Prisma.$ModuloPayload>
/**
 * Model Medicamento
 * 
 */
export type Medicamento = $Result.DefaultSelection<Prisma.$MedicamentoPayload>
/**
 * Model Progresso
 * 
 */
export type Progresso = $Result.DefaultSelection<Prisma.$ProgressoPayload>
/**
 * Model Avaliacao
 * 
 */
export type Avaliacao = $Result.DefaultSelection<Prisma.$AvaliacaoPayload>
/**
 * Model Questao
 * 
 */
export type Questao = $Result.DefaultSelection<Prisma.$QuestaoPayload>
/**
 * Model ResultadoAvaliacao
 * 
 */
export type ResultadoAvaliacao = $Result.DefaultSelection<Prisma.$ResultadoAvaliacaoPayload>
/**
 * Model Certificado
 * 
 */
export type Certificado = $Result.DefaultSelection<Prisma.$CertificadoPayload>
/**
 * Model Arquivo
 * 
 */
export type Arquivo = $Result.DefaultSelection<Prisma.$ArquivoPayload>
/**
 * Model Notificacao
 * 
 */
export type Notificacao = $Result.DefaultSelection<Prisma.$NotificacaoPayload>
/**
 * Model AtualizacaoRegulatoria
 * 
 */
export type AtualizacaoRegulatoria = $Result.DefaultSelection<Prisma.$AtualizacaoRegulatoriaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  FARMACEUTICO: 'FARMACEUTICO',
  BALCONISTA: 'BALCONISTA'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.farmacia`: Exposes CRUD operations for the **Farmacia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Farmacias
    * const farmacias = await prisma.farmacia.findMany()
    * ```
    */
  get farmacia(): Prisma.FarmaciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modulo`: Exposes CRUD operations for the **Modulo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modulos
    * const modulos = await prisma.modulo.findMany()
    * ```
    */
  get modulo(): Prisma.ModuloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicamento`: Exposes CRUD operations for the **Medicamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicamentos
    * const medicamentos = await prisma.medicamento.findMany()
    * ```
    */
  get medicamento(): Prisma.MedicamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progresso`: Exposes CRUD operations for the **Progresso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Progressos
    * const progressos = await prisma.progresso.findMany()
    * ```
    */
  get progresso(): Prisma.ProgressoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **Avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.AvaliacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questao`: Exposes CRUD operations for the **Questao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questaos
    * const questaos = await prisma.questao.findMany()
    * ```
    */
  get questao(): Prisma.QuestaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resultadoAvaliacao`: Exposes CRUD operations for the **ResultadoAvaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResultadoAvaliacaos
    * const resultadoAvaliacaos = await prisma.resultadoAvaliacao.findMany()
    * ```
    */
  get resultadoAvaliacao(): Prisma.ResultadoAvaliacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificado`: Exposes CRUD operations for the **Certificado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificados
    * const certificados = await prisma.certificado.findMany()
    * ```
    */
  get certificado(): Prisma.CertificadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arquivo`: Exposes CRUD operations for the **Arquivo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Arquivos
    * const arquivos = await prisma.arquivo.findMany()
    * ```
    */
  get arquivo(): Prisma.ArquivoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificacao`: Exposes CRUD operations for the **Notificacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacaos
    * const notificacaos = await prisma.notificacao.findMany()
    * ```
    */
  get notificacao(): Prisma.NotificacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atualizacaoRegulatoria`: Exposes CRUD operations for the **AtualizacaoRegulatoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AtualizacaoRegulatorias
    * const atualizacaoRegulatorias = await prisma.atualizacaoRegulatoria.findMany()
    * ```
    */
  get atualizacaoRegulatoria(): Prisma.AtualizacaoRegulatoriaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Farmacia: 'Farmacia',
    Categoria: 'Categoria',
    Modulo: 'Modulo',
    Medicamento: 'Medicamento',
    Progresso: 'Progresso',
    Avaliacao: 'Avaliacao',
    Questao: 'Questao',
    ResultadoAvaliacao: 'ResultadoAvaliacao',
    Certificado: 'Certificado',
    Arquivo: 'Arquivo',
    Notificacao: 'Notificacao',
    AtualizacaoRegulatoria: 'AtualizacaoRegulatoria'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "farmacia" | "categoria" | "modulo" | "medicamento" | "progresso" | "avaliacao" | "questao" | "resultadoAvaliacao" | "certificado" | "arquivo" | "notificacao" | "atualizacaoRegulatoria"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Farmacia: {
        payload: Prisma.$FarmaciaPayload<ExtArgs>
        fields: Prisma.FarmaciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FarmaciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FarmaciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload>
          }
          findFirst: {
            args: Prisma.FarmaciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FarmaciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload>
          }
          findMany: {
            args: Prisma.FarmaciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload>[]
          }
          create: {
            args: Prisma.FarmaciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload>
          }
          createMany: {
            args: Prisma.FarmaciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FarmaciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload>[]
          }
          delete: {
            args: Prisma.FarmaciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload>
          }
          update: {
            args: Prisma.FarmaciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload>
          }
          deleteMany: {
            args: Prisma.FarmaciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FarmaciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FarmaciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload>[]
          }
          upsert: {
            args: Prisma.FarmaciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload>
          }
          aggregate: {
            args: Prisma.FarmaciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarmacia>
          }
          groupBy: {
            args: Prisma.FarmaciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmaciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FarmaciaCountArgs<ExtArgs>
            result: $Utils.Optional<FarmaciaCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Modulo: {
        payload: Prisma.$ModuloPayload<ExtArgs>
        fields: Prisma.ModuloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          findFirst: {
            args: Prisma.ModuloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          findMany: {
            args: Prisma.ModuloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>[]
          }
          create: {
            args: Prisma.ModuloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          createMany: {
            args: Prisma.ModuloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>[]
          }
          delete: {
            args: Prisma.ModuloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          update: {
            args: Prisma.ModuloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          deleteMany: {
            args: Prisma.ModuloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>[]
          }
          upsert: {
            args: Prisma.ModuloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModuloPayload>
          }
          aggregate: {
            args: Prisma.ModuloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModulo>
          }
          groupBy: {
            args: Prisma.ModuloGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuloGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuloCountArgs<ExtArgs>
            result: $Utils.Optional<ModuloCountAggregateOutputType> | number
          }
        }
      }
      Medicamento: {
        payload: Prisma.$MedicamentoPayload<ExtArgs>
        fields: Prisma.MedicamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          findFirst: {
            args: Prisma.MedicamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          findMany: {
            args: Prisma.MedicamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>[]
          }
          create: {
            args: Prisma.MedicamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          createMany: {
            args: Prisma.MedicamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>[]
          }
          delete: {
            args: Prisma.MedicamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          update: {
            args: Prisma.MedicamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          deleteMany: {
            args: Prisma.MedicamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>[]
          }
          upsert: {
            args: Prisma.MedicamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          aggregate: {
            args: Prisma.MedicamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicamento>
          }
          groupBy: {
            args: Prisma.MedicamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicamentoCountArgs<ExtArgs>
            result: $Utils.Optional<MedicamentoCountAggregateOutputType> | number
          }
        }
      }
      Progresso: {
        payload: Prisma.$ProgressoPayload<ExtArgs>
        fields: Prisma.ProgressoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoPayload>
          }
          findFirst: {
            args: Prisma.ProgressoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoPayload>
          }
          findMany: {
            args: Prisma.ProgressoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoPayload>[]
          }
          create: {
            args: Prisma.ProgressoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoPayload>
          }
          createMany: {
            args: Prisma.ProgressoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgressoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoPayload>[]
          }
          delete: {
            args: Prisma.ProgressoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoPayload>
          }
          update: {
            args: Prisma.ProgressoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoPayload>
          }
          deleteMany: {
            args: Prisma.ProgressoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgressoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoPayload>[]
          }
          upsert: {
            args: Prisma.ProgressoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressoPayload>
          }
          aggregate: {
            args: Prisma.ProgressoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgresso>
          }
          groupBy: {
            args: Prisma.ProgressoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressoCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressoCountAggregateOutputType> | number
          }
        }
      }
      Avaliacao: {
        payload: Prisma.$AvaliacaoPayload<ExtArgs>
        fields: Prisma.AvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.AvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findMany: {
            args: Prisma.AvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          create: {
            args: Prisma.AvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          createMany: {
            args: Prisma.AvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvaliacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          delete: {
            args: Prisma.AvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          update: {
            args: Prisma.AvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvaliacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          upsert: {
            args: Prisma.AvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.AvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
          }
        }
      }
      Questao: {
        payload: Prisma.$QuestaoPayload<ExtArgs>
        fields: Prisma.QuestaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>
          }
          findFirst: {
            args: Prisma.QuestaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>
          }
          findMany: {
            args: Prisma.QuestaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>[]
          }
          create: {
            args: Prisma.QuestaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>
          }
          createMany: {
            args: Prisma.QuestaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>[]
          }
          delete: {
            args: Prisma.QuestaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>
          }
          update: {
            args: Prisma.QuestaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>
          }
          deleteMany: {
            args: Prisma.QuestaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>[]
          }
          upsert: {
            args: Prisma.QuestaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>
          }
          aggregate: {
            args: Prisma.QuestaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestao>
          }
          groupBy: {
            args: Prisma.QuestaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestaoCountArgs<ExtArgs>
            result: $Utils.Optional<QuestaoCountAggregateOutputType> | number
          }
        }
      }
      ResultadoAvaliacao: {
        payload: Prisma.$ResultadoAvaliacaoPayload<ExtArgs>
        fields: Prisma.ResultadoAvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultadoAvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoAvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultadoAvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoAvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.ResultadoAvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoAvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultadoAvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoAvaliacaoPayload>
          }
          findMany: {
            args: Prisma.ResultadoAvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoAvaliacaoPayload>[]
          }
          create: {
            args: Prisma.ResultadoAvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoAvaliacaoPayload>
          }
          createMany: {
            args: Prisma.ResultadoAvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResultadoAvaliacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoAvaliacaoPayload>[]
          }
          delete: {
            args: Prisma.ResultadoAvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoAvaliacaoPayload>
          }
          update: {
            args: Prisma.ResultadoAvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoAvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.ResultadoAvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResultadoAvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResultadoAvaliacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoAvaliacaoPayload>[]
          }
          upsert: {
            args: Prisma.ResultadoAvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoAvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.ResultadoAvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResultadoAvaliacao>
          }
          groupBy: {
            args: Prisma.ResultadoAvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultadoAvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultadoAvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<ResultadoAvaliacaoCountAggregateOutputType> | number
          }
        }
      }
      Certificado: {
        payload: Prisma.$CertificadoPayload<ExtArgs>
        fields: Prisma.CertificadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          findFirst: {
            args: Prisma.CertificadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          findMany: {
            args: Prisma.CertificadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>[]
          }
          create: {
            args: Prisma.CertificadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          createMany: {
            args: Prisma.CertificadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>[]
          }
          delete: {
            args: Prisma.CertificadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          update: {
            args: Prisma.CertificadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          deleteMany: {
            args: Prisma.CertificadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CertificadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>[]
          }
          upsert: {
            args: Prisma.CertificadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificadoPayload>
          }
          aggregate: {
            args: Prisma.CertificadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificado>
          }
          groupBy: {
            args: Prisma.CertificadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificadoCountArgs<ExtArgs>
            result: $Utils.Optional<CertificadoCountAggregateOutputType> | number
          }
        }
      }
      Arquivo: {
        payload: Prisma.$ArquivoPayload<ExtArgs>
        fields: Prisma.ArquivoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArquivoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArquivoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload>
          }
          findFirst: {
            args: Prisma.ArquivoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArquivoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload>
          }
          findMany: {
            args: Prisma.ArquivoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload>[]
          }
          create: {
            args: Prisma.ArquivoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload>
          }
          createMany: {
            args: Prisma.ArquivoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArquivoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload>[]
          }
          delete: {
            args: Prisma.ArquivoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload>
          }
          update: {
            args: Prisma.ArquivoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload>
          }
          deleteMany: {
            args: Prisma.ArquivoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArquivoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArquivoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload>[]
          }
          upsert: {
            args: Prisma.ArquivoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArquivoPayload>
          }
          aggregate: {
            args: Prisma.ArquivoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArquivo>
          }
          groupBy: {
            args: Prisma.ArquivoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArquivoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArquivoCountArgs<ExtArgs>
            result: $Utils.Optional<ArquivoCountAggregateOutputType> | number
          }
        }
      }
      Notificacao: {
        payload: Prisma.$NotificacaoPayload<ExtArgs>
        fields: Prisma.NotificacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findFirst: {
            args: Prisma.NotificacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findMany: {
            args: Prisma.NotificacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          create: {
            args: Prisma.NotificacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          createMany: {
            args: Prisma.NotificacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          delete: {
            args: Prisma.NotificacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          update: {
            args: Prisma.NotificacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          deleteMany: {
            args: Prisma.NotificacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          upsert: {
            args: Prisma.NotificacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          aggregate: {
            args: Prisma.NotificacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacao>
          }
          groupBy: {
            args: Prisma.NotificacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacaoCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoCountAggregateOutputType> | number
          }
        }
      }
      AtualizacaoRegulatoria: {
        payload: Prisma.$AtualizacaoRegulatoriaPayload<ExtArgs>
        fields: Prisma.AtualizacaoRegulatoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtualizacaoRegulatoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtualizacaoRegulatoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtualizacaoRegulatoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtualizacaoRegulatoriaPayload>
          }
          findFirst: {
            args: Prisma.AtualizacaoRegulatoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtualizacaoRegulatoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtualizacaoRegulatoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtualizacaoRegulatoriaPayload>
          }
          findMany: {
            args: Prisma.AtualizacaoRegulatoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtualizacaoRegulatoriaPayload>[]
          }
          create: {
            args: Prisma.AtualizacaoRegulatoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtualizacaoRegulatoriaPayload>
          }
          createMany: {
            args: Prisma.AtualizacaoRegulatoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtualizacaoRegulatoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtualizacaoRegulatoriaPayload>[]
          }
          delete: {
            args: Prisma.AtualizacaoRegulatoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtualizacaoRegulatoriaPayload>
          }
          update: {
            args: Prisma.AtualizacaoRegulatoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtualizacaoRegulatoriaPayload>
          }
          deleteMany: {
            args: Prisma.AtualizacaoRegulatoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtualizacaoRegulatoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtualizacaoRegulatoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtualizacaoRegulatoriaPayload>[]
          }
          upsert: {
            args: Prisma.AtualizacaoRegulatoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtualizacaoRegulatoriaPayload>
          }
          aggregate: {
            args: Prisma.AtualizacaoRegulatoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtualizacaoRegulatoria>
          }
          groupBy: {
            args: Prisma.AtualizacaoRegulatoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtualizacaoRegulatoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtualizacaoRegulatoriaCountArgs<ExtArgs>
            result: $Utils.Optional<AtualizacaoRegulatoriaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    farmacia?: FarmaciaOmit
    categoria?: CategoriaOmit
    modulo?: ModuloOmit
    medicamento?: MedicamentoOmit
    progresso?: ProgressoOmit
    avaliacao?: AvaliacaoOmit
    questao?: QuestaoOmit
    resultadoAvaliacao?: ResultadoAvaliacaoOmit
    certificado?: CertificadoOmit
    arquivo?: ArquivoOmit
    notificacao?: NotificacaoOmit
    atualizacaoRegulatoria?: AtualizacaoRegulatoriaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    progressos: number
    resultados: number
    certificados: number
    notificacoes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progressos?: boolean | UserCountOutputTypeCountProgressosArgs
    resultados?: boolean | UserCountOutputTypeCountResultadosArgs
    certificados?: boolean | UserCountOutputTypeCountCertificadosArgs
    notificacoes?: boolean | UserCountOutputTypeCountNotificacoesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResultadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultadoAvaliacaoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCertificadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificadoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
  }


  /**
   * Count Type FarmaciaCountOutputType
   */

  export type FarmaciaCountOutputType = {
    usuarios: number
  }

  export type FarmaciaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | FarmaciaCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * FarmaciaCountOutputType without action
   */
  export type FarmaciaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaCountOutputType
     */
    select?: FarmaciaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FarmaciaCountOutputType without action
   */
  export type FarmaciaCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    modulos: number
    medicamentos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulos?: boolean | CategoriaCountOutputTypeCountModulosArgs
    medicamentos?: boolean | CategoriaCountOutputTypeCountMedicamentosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountModulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuloWhereInput
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountMedicamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicamentoWhereInput
  }


  /**
   * Count Type ModuloCountOutputType
   */

  export type ModuloCountOutputType = {
    progressos: number
    avaliacoes: number
  }

  export type ModuloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progressos?: boolean | ModuloCountOutputTypeCountProgressosArgs
    avaliacoes?: boolean | ModuloCountOutputTypeCountAvaliacoesArgs
  }

  // Custom InputTypes
  /**
   * ModuloCountOutputType without action
   */
  export type ModuloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuloCountOutputType
     */
    select?: ModuloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuloCountOutputType without action
   */
  export type ModuloCountOutputTypeCountProgressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoWhereInput
  }

  /**
   * ModuloCountOutputType without action
   */
  export type ModuloCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }


  /**
   * Count Type AvaliacaoCountOutputType
   */

  export type AvaliacaoCountOutputType = {
    questoes: number
    resultados: number
  }

  export type AvaliacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questoes?: boolean | AvaliacaoCountOutputTypeCountQuestoesArgs
    resultados?: boolean | AvaliacaoCountOutputTypeCountResultadosArgs
  }

  // Custom InputTypes
  /**
   * AvaliacaoCountOutputType without action
   */
  export type AvaliacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvaliacaoCountOutputType
     */
    select?: AvaliacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvaliacaoCountOutputType without action
   */
  export type AvaliacaoCountOutputTypeCountQuestoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestaoWhereInput
  }

  /**
   * AvaliacaoCountOutputType without action
   */
  export type AvaliacaoCountOutputTypeCountResultadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultadoAvaliacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    farmaciaId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    farmaciaId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    farmaciaId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    farmaciaId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    farmaciaId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    farmaciaId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    farmaciaId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farmaciaId?: boolean
    farmacia?: boolean | User$farmaciaArgs<ExtArgs>
    progressos?: boolean | User$progressosArgs<ExtArgs>
    resultados?: boolean | User$resultadosArgs<ExtArgs>
    certificados?: boolean | User$certificadosArgs<ExtArgs>
    notificacoes?: boolean | User$notificacoesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farmaciaId?: boolean
    farmacia?: boolean | User$farmaciaArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farmaciaId?: boolean
    farmacia?: boolean | User$farmaciaArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farmaciaId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt" | "farmaciaId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmacia?: boolean | User$farmaciaArgs<ExtArgs>
    progressos?: boolean | User$progressosArgs<ExtArgs>
    resultados?: boolean | User$resultadosArgs<ExtArgs>
    certificados?: boolean | User$certificadosArgs<ExtArgs>
    notificacoes?: boolean | User$notificacoesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmacia?: boolean | User$farmaciaArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmacia?: boolean | User$farmaciaArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      farmacia: Prisma.$FarmaciaPayload<ExtArgs> | null
      progressos: Prisma.$ProgressoPayload<ExtArgs>[]
      resultados: Prisma.$ResultadoAvaliacaoPayload<ExtArgs>[]
      certificados: Prisma.$CertificadoPayload<ExtArgs>[]
      notificacoes: Prisma.$NotificacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
      farmaciaId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farmacia<T extends User$farmaciaArgs<ExtArgs> = {}>(args?: Subset<T, User$farmaciaArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    progressos<T extends User$progressosArgs<ExtArgs> = {}>(args?: Subset<T, User$progressosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resultados<T extends User$resultadosArgs<ExtArgs> = {}>(args?: Subset<T, User$resultadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadoAvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certificados<T extends User$certificadosArgs<ExtArgs> = {}>(args?: Subset<T, User$certificadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificacoes<T extends User$notificacoesArgs<ExtArgs> = {}>(args?: Subset<T, User$notificacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly farmaciaId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.farmacia
   */
  export type User$farmaciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    where?: FarmaciaWhereInput
  }

  /**
   * User.progressos
   */
  export type User$progressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progresso
     */
    select?: ProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progresso
     */
    omit?: ProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoInclude<ExtArgs> | null
    where?: ProgressoWhereInput
    orderBy?: ProgressoOrderByWithRelationInput | ProgressoOrderByWithRelationInput[]
    cursor?: ProgressoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressoScalarFieldEnum | ProgressoScalarFieldEnum[]
  }

  /**
   * User.resultados
   */
  export type User$resultadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoAvaliacao
     */
    select?: ResultadoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoAvaliacao
     */
    omit?: ResultadoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoAvaliacaoInclude<ExtArgs> | null
    where?: ResultadoAvaliacaoWhereInput
    orderBy?: ResultadoAvaliacaoOrderByWithRelationInput | ResultadoAvaliacaoOrderByWithRelationInput[]
    cursor?: ResultadoAvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultadoAvaliacaoScalarFieldEnum | ResultadoAvaliacaoScalarFieldEnum[]
  }

  /**
   * User.certificados
   */
  export type User$certificadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    where?: CertificadoWhereInput
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    cursor?: CertificadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificadoScalarFieldEnum | CertificadoScalarFieldEnum[]
  }

  /**
   * User.notificacoes
   */
  export type User$notificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    cursor?: NotificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Farmacia
   */

  export type AggregateFarmacia = {
    _count: FarmaciaCountAggregateOutputType | null
    _min: FarmaciaMinAggregateOutputType | null
    _max: FarmaciaMaxAggregateOutputType | null
  }

  export type FarmaciaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cnpj: string | null
    endereco: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FarmaciaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cnpj: string | null
    endereco: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FarmaciaCountAggregateOutputType = {
    id: number
    nome: number
    cnpj: number
    endereco: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FarmaciaMinAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    endereco?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FarmaciaMaxAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    endereco?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FarmaciaCountAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    endereco?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FarmaciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farmacia to aggregate.
     */
    where?: FarmaciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmacias to fetch.
     */
    orderBy?: FarmaciaOrderByWithRelationInput | FarmaciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmaciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmacias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmacias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Farmacias
    **/
    _count?: true | FarmaciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmaciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmaciaMaxAggregateInputType
  }

  export type GetFarmaciaAggregateType<T extends FarmaciaAggregateArgs> = {
        [P in keyof T & keyof AggregateFarmacia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarmacia[P]>
      : GetScalarType<T[P], AggregateFarmacia[P]>
  }




  export type FarmaciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmaciaWhereInput
    orderBy?: FarmaciaOrderByWithAggregationInput | FarmaciaOrderByWithAggregationInput[]
    by: FarmaciaScalarFieldEnum[] | FarmaciaScalarFieldEnum
    having?: FarmaciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmaciaCountAggregateInputType | true
    _min?: FarmaciaMinAggregateInputType
    _max?: FarmaciaMaxAggregateInputType
  }

  export type FarmaciaGroupByOutputType = {
    id: string
    nome: string
    cnpj: string
    endereco: string
    createdAt: Date
    updatedAt: Date
    _count: FarmaciaCountAggregateOutputType | null
    _min: FarmaciaMinAggregateOutputType | null
    _max: FarmaciaMaxAggregateOutputType | null
  }

  type GetFarmaciaGroupByPayload<T extends FarmaciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmaciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmaciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmaciaGroupByOutputType[P]>
            : GetScalarType<T[P], FarmaciaGroupByOutputType[P]>
        }
      >
    >


  export type FarmaciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarios?: boolean | Farmacia$usuariosArgs<ExtArgs>
    _count?: boolean | FarmaciaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmacia"]>

  export type FarmaciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["farmacia"]>

  export type FarmaciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["farmacia"]>

  export type FarmaciaSelectScalar = {
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    endereco?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FarmaciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cnpj" | "endereco" | "createdAt" | "updatedAt", ExtArgs["result"]["farmacia"]>
  export type FarmaciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Farmacia$usuariosArgs<ExtArgs>
    _count?: boolean | FarmaciaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FarmaciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FarmaciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FarmaciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Farmacia"
    objects: {
      usuarios: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cnpj: string
      endereco: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["farmacia"]>
    composites: {}
  }

  type FarmaciaGetPayload<S extends boolean | null | undefined | FarmaciaDefaultArgs> = $Result.GetResult<Prisma.$FarmaciaPayload, S>

  type FarmaciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FarmaciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FarmaciaCountAggregateInputType | true
    }

  export interface FarmaciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Farmacia'], meta: { name: 'Farmacia' } }
    /**
     * Find zero or one Farmacia that matches the filter.
     * @param {FarmaciaFindUniqueArgs} args - Arguments to find a Farmacia
     * @example
     * // Get one Farmacia
     * const farmacia = await prisma.farmacia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmaciaFindUniqueArgs>(args: SelectSubset<T, FarmaciaFindUniqueArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Farmacia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FarmaciaFindUniqueOrThrowArgs} args - Arguments to find a Farmacia
     * @example
     * // Get one Farmacia
     * const farmacia = await prisma.farmacia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmaciaFindUniqueOrThrowArgs>(args: SelectSubset<T, FarmaciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farmacia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaFindFirstArgs} args - Arguments to find a Farmacia
     * @example
     * // Get one Farmacia
     * const farmacia = await prisma.farmacia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmaciaFindFirstArgs>(args?: SelectSubset<T, FarmaciaFindFirstArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farmacia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaFindFirstOrThrowArgs} args - Arguments to find a Farmacia
     * @example
     * // Get one Farmacia
     * const farmacia = await prisma.farmacia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmaciaFindFirstOrThrowArgs>(args?: SelectSubset<T, FarmaciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Farmacias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farmacias
     * const farmacias = await prisma.farmacia.findMany()
     * 
     * // Get first 10 Farmacias
     * const farmacias = await prisma.farmacia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farmaciaWithIdOnly = await prisma.farmacia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FarmaciaFindManyArgs>(args?: SelectSubset<T, FarmaciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Farmacia.
     * @param {FarmaciaCreateArgs} args - Arguments to create a Farmacia.
     * @example
     * // Create one Farmacia
     * const Farmacia = await prisma.farmacia.create({
     *   data: {
     *     // ... data to create a Farmacia
     *   }
     * })
     * 
     */
    create<T extends FarmaciaCreateArgs>(args: SelectSubset<T, FarmaciaCreateArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Farmacias.
     * @param {FarmaciaCreateManyArgs} args - Arguments to create many Farmacias.
     * @example
     * // Create many Farmacias
     * const farmacia = await prisma.farmacia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FarmaciaCreateManyArgs>(args?: SelectSubset<T, FarmaciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Farmacias and returns the data saved in the database.
     * @param {FarmaciaCreateManyAndReturnArgs} args - Arguments to create many Farmacias.
     * @example
     * // Create many Farmacias
     * const farmacia = await prisma.farmacia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Farmacias and only return the `id`
     * const farmaciaWithIdOnly = await prisma.farmacia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FarmaciaCreateManyAndReturnArgs>(args?: SelectSubset<T, FarmaciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Farmacia.
     * @param {FarmaciaDeleteArgs} args - Arguments to delete one Farmacia.
     * @example
     * // Delete one Farmacia
     * const Farmacia = await prisma.farmacia.delete({
     *   where: {
     *     // ... filter to delete one Farmacia
     *   }
     * })
     * 
     */
    delete<T extends FarmaciaDeleteArgs>(args: SelectSubset<T, FarmaciaDeleteArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Farmacia.
     * @param {FarmaciaUpdateArgs} args - Arguments to update one Farmacia.
     * @example
     * // Update one Farmacia
     * const farmacia = await prisma.farmacia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FarmaciaUpdateArgs>(args: SelectSubset<T, FarmaciaUpdateArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Farmacias.
     * @param {FarmaciaDeleteManyArgs} args - Arguments to filter Farmacias to delete.
     * @example
     * // Delete a few Farmacias
     * const { count } = await prisma.farmacia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FarmaciaDeleteManyArgs>(args?: SelectSubset<T, FarmaciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farmacias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farmacias
     * const farmacia = await prisma.farmacia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FarmaciaUpdateManyArgs>(args: SelectSubset<T, FarmaciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farmacias and returns the data updated in the database.
     * @param {FarmaciaUpdateManyAndReturnArgs} args - Arguments to update many Farmacias.
     * @example
     * // Update many Farmacias
     * const farmacia = await prisma.farmacia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Farmacias and only return the `id`
     * const farmaciaWithIdOnly = await prisma.farmacia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FarmaciaUpdateManyAndReturnArgs>(args: SelectSubset<T, FarmaciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Farmacia.
     * @param {FarmaciaUpsertArgs} args - Arguments to update or create a Farmacia.
     * @example
     * // Update or create a Farmacia
     * const farmacia = await prisma.farmacia.upsert({
     *   create: {
     *     // ... data to create a Farmacia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farmacia we want to update
     *   }
     * })
     */
    upsert<T extends FarmaciaUpsertArgs>(args: SelectSubset<T, FarmaciaUpsertArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Farmacias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaCountArgs} args - Arguments to filter Farmacias to count.
     * @example
     * // Count the number of Farmacias
     * const count = await prisma.farmacia.count({
     *   where: {
     *     // ... the filter for the Farmacias we want to count
     *   }
     * })
    **/
    count<T extends FarmaciaCountArgs>(
      args?: Subset<T, FarmaciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmaciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Farmacia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FarmaciaAggregateArgs>(args: Subset<T, FarmaciaAggregateArgs>): Prisma.PrismaPromise<GetFarmaciaAggregateType<T>>

    /**
     * Group by Farmacia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FarmaciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmaciaGroupByArgs['orderBy'] }
        : { orderBy?: FarmaciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FarmaciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmaciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Farmacia model
   */
  readonly fields: FarmaciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Farmacia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FarmaciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Farmacia$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Farmacia$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Farmacia model
   */
  interface FarmaciaFieldRefs {
    readonly id: FieldRef<"Farmacia", 'String'>
    readonly nome: FieldRef<"Farmacia", 'String'>
    readonly cnpj: FieldRef<"Farmacia", 'String'>
    readonly endereco: FieldRef<"Farmacia", 'String'>
    readonly createdAt: FieldRef<"Farmacia", 'DateTime'>
    readonly updatedAt: FieldRef<"Farmacia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Farmacia findUnique
   */
  export type FarmaciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    /**
     * Filter, which Farmacia to fetch.
     */
    where: FarmaciaWhereUniqueInput
  }

  /**
   * Farmacia findUniqueOrThrow
   */
  export type FarmaciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    /**
     * Filter, which Farmacia to fetch.
     */
    where: FarmaciaWhereUniqueInput
  }

  /**
   * Farmacia findFirst
   */
  export type FarmaciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    /**
     * Filter, which Farmacia to fetch.
     */
    where?: FarmaciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmacias to fetch.
     */
    orderBy?: FarmaciaOrderByWithRelationInput | FarmaciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farmacias.
     */
    cursor?: FarmaciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmacias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmacias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farmacias.
     */
    distinct?: FarmaciaScalarFieldEnum | FarmaciaScalarFieldEnum[]
  }

  /**
   * Farmacia findFirstOrThrow
   */
  export type FarmaciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    /**
     * Filter, which Farmacia to fetch.
     */
    where?: FarmaciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmacias to fetch.
     */
    orderBy?: FarmaciaOrderByWithRelationInput | FarmaciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farmacias.
     */
    cursor?: FarmaciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmacias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmacias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farmacias.
     */
    distinct?: FarmaciaScalarFieldEnum | FarmaciaScalarFieldEnum[]
  }

  /**
   * Farmacia findMany
   */
  export type FarmaciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    /**
     * Filter, which Farmacias to fetch.
     */
    where?: FarmaciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmacias to fetch.
     */
    orderBy?: FarmaciaOrderByWithRelationInput | FarmaciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Farmacias.
     */
    cursor?: FarmaciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmacias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmacias.
     */
    skip?: number
    distinct?: FarmaciaScalarFieldEnum | FarmaciaScalarFieldEnum[]
  }

  /**
   * Farmacia create
   */
  export type FarmaciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Farmacia.
     */
    data: XOR<FarmaciaCreateInput, FarmaciaUncheckedCreateInput>
  }

  /**
   * Farmacia createMany
   */
  export type FarmaciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Farmacias.
     */
    data: FarmaciaCreateManyInput | FarmaciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Farmacia createManyAndReturn
   */
  export type FarmaciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * The data used to create many Farmacias.
     */
    data: FarmaciaCreateManyInput | FarmaciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Farmacia update
   */
  export type FarmaciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Farmacia.
     */
    data: XOR<FarmaciaUpdateInput, FarmaciaUncheckedUpdateInput>
    /**
     * Choose, which Farmacia to update.
     */
    where: FarmaciaWhereUniqueInput
  }

  /**
   * Farmacia updateMany
   */
  export type FarmaciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Farmacias.
     */
    data: XOR<FarmaciaUpdateManyMutationInput, FarmaciaUncheckedUpdateManyInput>
    /**
     * Filter which Farmacias to update
     */
    where?: FarmaciaWhereInput
    /**
     * Limit how many Farmacias to update.
     */
    limit?: number
  }

  /**
   * Farmacia updateManyAndReturn
   */
  export type FarmaciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * The data used to update Farmacias.
     */
    data: XOR<FarmaciaUpdateManyMutationInput, FarmaciaUncheckedUpdateManyInput>
    /**
     * Filter which Farmacias to update
     */
    where?: FarmaciaWhereInput
    /**
     * Limit how many Farmacias to update.
     */
    limit?: number
  }

  /**
   * Farmacia upsert
   */
  export type FarmaciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Farmacia to update in case it exists.
     */
    where: FarmaciaWhereUniqueInput
    /**
     * In case the Farmacia found by the `where` argument doesn't exist, create a new Farmacia with this data.
     */
    create: XOR<FarmaciaCreateInput, FarmaciaUncheckedCreateInput>
    /**
     * In case the Farmacia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmaciaUpdateInput, FarmaciaUncheckedUpdateInput>
  }

  /**
   * Farmacia delete
   */
  export type FarmaciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    /**
     * Filter which Farmacia to delete.
     */
    where: FarmaciaWhereUniqueInput
  }

  /**
   * Farmacia deleteMany
   */
  export type FarmaciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farmacias to delete
     */
    where?: FarmaciaWhereInput
    /**
     * Limit how many Farmacias to delete.
     */
    limit?: number
  }

  /**
   * Farmacia.usuarios
   */
  export type Farmacia$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Farmacia without action
   */
  export type FarmaciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    ordem: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    ordem: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    ordem: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    ordem: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    ordem: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    ordem?: true
  }

  export type CategoriaSumAggregateInputType = {
    ordem?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    ordem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    ordem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    ordem?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: string
    nome: string
    descricao: string
    ordem: number
    createdAt: Date
    updatedAt: Date
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    ordem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modulos?: boolean | Categoria$modulosArgs<ExtArgs>
    medicamentos?: boolean | Categoria$medicamentosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    ordem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    ordem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    ordem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "ordem" | "createdAt" | "updatedAt", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulos?: boolean | Categoria$modulosArgs<ExtArgs>
    medicamentos?: boolean | Categoria$medicamentosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      modulos: Prisma.$ModuloPayload<ExtArgs>[]
      medicamentos: Prisma.$MedicamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string
      ordem: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modulos<T extends Categoria$modulosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$modulosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicamentos<T extends Categoria$medicamentosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$medicamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'String'>
    readonly nome: FieldRef<"Categoria", 'String'>
    readonly descricao: FieldRef<"Categoria", 'String'>
    readonly ordem: FieldRef<"Categoria", 'Int'>
    readonly createdAt: FieldRef<"Categoria", 'DateTime'>
    readonly updatedAt: FieldRef<"Categoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.modulos
   */
  export type Categoria$modulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    where?: ModuloWhereInput
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    cursor?: ModuloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Categoria.medicamentos
   */
  export type Categoria$medicamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    where?: MedicamentoWhereInput
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    cursor?: MedicamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicamentoScalarFieldEnum | MedicamentoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Modulo
   */

  export type AggregateModulo = {
    _count: ModuloCountAggregateOutputType | null
    _avg: ModuloAvgAggregateOutputType | null
    _sum: ModuloSumAggregateOutputType | null
    _min: ModuloMinAggregateOutputType | null
    _max: ModuloMaxAggregateOutputType | null
  }

  export type ModuloAvgAggregateOutputType = {
    ordem: number | null
  }

  export type ModuloSumAggregateOutputType = {
    ordem: number | null
  }

  export type ModuloMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    conteudo: string | null
    ordem: number | null
    versao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    categoriaId: string | null
  }

  export type ModuloMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    conteudo: string | null
    ordem: number | null
    versao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    categoriaId: string | null
  }

  export type ModuloCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    conteudo: number
    ordem: number
    versao: number
    createdAt: number
    updatedAt: number
    categoriaId: number
    _all: number
  }


  export type ModuloAvgAggregateInputType = {
    ordem?: true
  }

  export type ModuloSumAggregateInputType = {
    ordem?: true
  }

  export type ModuloMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    conteudo?: true
    ordem?: true
    versao?: true
    createdAt?: true
    updatedAt?: true
    categoriaId?: true
  }

  export type ModuloMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    conteudo?: true
    ordem?: true
    versao?: true
    createdAt?: true
    updatedAt?: true
    categoriaId?: true
  }

  export type ModuloCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    conteudo?: true
    ordem?: true
    versao?: true
    createdAt?: true
    updatedAt?: true
    categoriaId?: true
    _all?: true
  }

  export type ModuloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modulo to aggregate.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modulos
    **/
    _count?: true | ModuloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuloMaxAggregateInputType
  }

  export type GetModuloAggregateType<T extends ModuloAggregateArgs> = {
        [P in keyof T & keyof AggregateModulo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModulo[P]>
      : GetScalarType<T[P], AggregateModulo[P]>
  }




  export type ModuloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuloWhereInput
    orderBy?: ModuloOrderByWithAggregationInput | ModuloOrderByWithAggregationInput[]
    by: ModuloScalarFieldEnum[] | ModuloScalarFieldEnum
    having?: ModuloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuloCountAggregateInputType | true
    _avg?: ModuloAvgAggregateInputType
    _sum?: ModuloSumAggregateInputType
    _min?: ModuloMinAggregateInputType
    _max?: ModuloMaxAggregateInputType
  }

  export type ModuloGroupByOutputType = {
    id: string
    titulo: string
    descricao: string
    conteudo: string
    ordem: number
    versao: string
    createdAt: Date
    updatedAt: Date
    categoriaId: string
    _count: ModuloCountAggregateOutputType | null
    _avg: ModuloAvgAggregateOutputType | null
    _sum: ModuloSumAggregateOutputType | null
    _min: ModuloMinAggregateOutputType | null
    _max: ModuloMaxAggregateOutputType | null
  }

  type GetModuloGroupByPayload<T extends ModuloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuloGroupByOutputType[P]>
            : GetScalarType<T[P], ModuloGroupByOutputType[P]>
        }
      >
    >


  export type ModuloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    conteudo?: boolean
    ordem?: boolean
    versao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoriaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    progressos?: boolean | Modulo$progressosArgs<ExtArgs>
    avaliacoes?: boolean | Modulo$avaliacoesArgs<ExtArgs>
    _count?: boolean | ModuloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modulo"]>

  export type ModuloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    conteudo?: boolean
    ordem?: boolean
    versao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoriaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modulo"]>

  export type ModuloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    conteudo?: boolean
    ordem?: boolean
    versao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoriaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modulo"]>

  export type ModuloSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    conteudo?: boolean
    ordem?: boolean
    versao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoriaId?: boolean
  }

  export type ModuloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "conteudo" | "ordem" | "versao" | "createdAt" | "updatedAt" | "categoriaId", ExtArgs["result"]["modulo"]>
  export type ModuloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    progressos?: boolean | Modulo$progressosArgs<ExtArgs>
    avaliacoes?: boolean | Modulo$avaliacoesArgs<ExtArgs>
    _count?: boolean | ModuloCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModuloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type ModuloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $ModuloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Modulo"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      progressos: Prisma.$ProgressoPayload<ExtArgs>[]
      avaliacoes: Prisma.$AvaliacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descricao: string
      conteudo: string
      ordem: number
      versao: string
      createdAt: Date
      updatedAt: Date
      categoriaId: string
    }, ExtArgs["result"]["modulo"]>
    composites: {}
  }

  type ModuloGetPayload<S extends boolean | null | undefined | ModuloDefaultArgs> = $Result.GetResult<Prisma.$ModuloPayload, S>

  type ModuloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuloCountAggregateInputType | true
    }

  export interface ModuloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Modulo'], meta: { name: 'Modulo' } }
    /**
     * Find zero or one Modulo that matches the filter.
     * @param {ModuloFindUniqueArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuloFindUniqueArgs>(args: SelectSubset<T, ModuloFindUniqueArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Modulo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuloFindUniqueOrThrowArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuloFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modulo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloFindFirstArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuloFindFirstArgs>(args?: SelectSubset<T, ModuloFindFirstArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modulo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloFindFirstOrThrowArgs} args - Arguments to find a Modulo
     * @example
     * // Get one Modulo
     * const modulo = await prisma.modulo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuloFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuloFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modulos
     * const modulos = await prisma.modulo.findMany()
     * 
     * // Get first 10 Modulos
     * const modulos = await prisma.modulo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduloWithIdOnly = await prisma.modulo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuloFindManyArgs>(args?: SelectSubset<T, ModuloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Modulo.
     * @param {ModuloCreateArgs} args - Arguments to create a Modulo.
     * @example
     * // Create one Modulo
     * const Modulo = await prisma.modulo.create({
     *   data: {
     *     // ... data to create a Modulo
     *   }
     * })
     * 
     */
    create<T extends ModuloCreateArgs>(args: SelectSubset<T, ModuloCreateArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modulos.
     * @param {ModuloCreateManyArgs} args - Arguments to create many Modulos.
     * @example
     * // Create many Modulos
     * const modulo = await prisma.modulo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuloCreateManyArgs>(args?: SelectSubset<T, ModuloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modulos and returns the data saved in the database.
     * @param {ModuloCreateManyAndReturnArgs} args - Arguments to create many Modulos.
     * @example
     * // Create many Modulos
     * const modulo = await prisma.modulo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modulos and only return the `id`
     * const moduloWithIdOnly = await prisma.modulo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuloCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Modulo.
     * @param {ModuloDeleteArgs} args - Arguments to delete one Modulo.
     * @example
     * // Delete one Modulo
     * const Modulo = await prisma.modulo.delete({
     *   where: {
     *     // ... filter to delete one Modulo
     *   }
     * })
     * 
     */
    delete<T extends ModuloDeleteArgs>(args: SelectSubset<T, ModuloDeleteArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Modulo.
     * @param {ModuloUpdateArgs} args - Arguments to update one Modulo.
     * @example
     * // Update one Modulo
     * const modulo = await prisma.modulo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuloUpdateArgs>(args: SelectSubset<T, ModuloUpdateArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modulos.
     * @param {ModuloDeleteManyArgs} args - Arguments to filter Modulos to delete.
     * @example
     * // Delete a few Modulos
     * const { count } = await prisma.modulo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuloDeleteManyArgs>(args?: SelectSubset<T, ModuloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modulos
     * const modulo = await prisma.modulo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuloUpdateManyArgs>(args: SelectSubset<T, ModuloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modulos and returns the data updated in the database.
     * @param {ModuloUpdateManyAndReturnArgs} args - Arguments to update many Modulos.
     * @example
     * // Update many Modulos
     * const modulo = await prisma.modulo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modulos and only return the `id`
     * const moduloWithIdOnly = await prisma.modulo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModuloUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Modulo.
     * @param {ModuloUpsertArgs} args - Arguments to update or create a Modulo.
     * @example
     * // Update or create a Modulo
     * const modulo = await prisma.modulo.upsert({
     *   create: {
     *     // ... data to create a Modulo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modulo we want to update
     *   }
     * })
     */
    upsert<T extends ModuloUpsertArgs>(args: SelectSubset<T, ModuloUpsertArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloCountArgs} args - Arguments to filter Modulos to count.
     * @example
     * // Count the number of Modulos
     * const count = await prisma.modulo.count({
     *   where: {
     *     // ... the filter for the Modulos we want to count
     *   }
     * })
    **/
    count<T extends ModuloCountArgs>(
      args?: Subset<T, ModuloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModuloAggregateArgs>(args: Subset<T, ModuloAggregateArgs>): Prisma.PrismaPromise<GetModuloAggregateType<T>>

    /**
     * Group by Modulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuloGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModuloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuloGroupByArgs['orderBy'] }
        : { orderBy?: ModuloGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModuloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Modulo model
   */
  readonly fields: ModuloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Modulo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    progressos<T extends Modulo$progressosArgs<ExtArgs> = {}>(args?: Subset<T, Modulo$progressosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avaliacoes<T extends Modulo$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, Modulo$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Modulo model
   */
  interface ModuloFieldRefs {
    readonly id: FieldRef<"Modulo", 'String'>
    readonly titulo: FieldRef<"Modulo", 'String'>
    readonly descricao: FieldRef<"Modulo", 'String'>
    readonly conteudo: FieldRef<"Modulo", 'String'>
    readonly ordem: FieldRef<"Modulo", 'Int'>
    readonly versao: FieldRef<"Modulo", 'String'>
    readonly createdAt: FieldRef<"Modulo", 'DateTime'>
    readonly updatedAt: FieldRef<"Modulo", 'DateTime'>
    readonly categoriaId: FieldRef<"Modulo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Modulo findUnique
   */
  export type ModuloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo findUniqueOrThrow
   */
  export type ModuloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo findFirst
   */
  export type ModuloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modulos.
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modulos.
     */
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Modulo findFirstOrThrow
   */
  export type ModuloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulo to fetch.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modulos.
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modulos.
     */
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Modulo findMany
   */
  export type ModuloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter, which Modulos to fetch.
     */
    where?: ModuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modulos to fetch.
     */
    orderBy?: ModuloOrderByWithRelationInput | ModuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modulos.
     */
    cursor?: ModuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modulos.
     */
    skip?: number
    distinct?: ModuloScalarFieldEnum | ModuloScalarFieldEnum[]
  }

  /**
   * Modulo create
   */
  export type ModuloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * The data needed to create a Modulo.
     */
    data: XOR<ModuloCreateInput, ModuloUncheckedCreateInput>
  }

  /**
   * Modulo createMany
   */
  export type ModuloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modulos.
     */
    data: ModuloCreateManyInput | ModuloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Modulo createManyAndReturn
   */
  export type ModuloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * The data used to create many Modulos.
     */
    data: ModuloCreateManyInput | ModuloCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Modulo update
   */
  export type ModuloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * The data needed to update a Modulo.
     */
    data: XOR<ModuloUpdateInput, ModuloUncheckedUpdateInput>
    /**
     * Choose, which Modulo to update.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo updateMany
   */
  export type ModuloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modulos.
     */
    data: XOR<ModuloUpdateManyMutationInput, ModuloUncheckedUpdateManyInput>
    /**
     * Filter which Modulos to update
     */
    where?: ModuloWhereInput
    /**
     * Limit how many Modulos to update.
     */
    limit?: number
  }

  /**
   * Modulo updateManyAndReturn
   */
  export type ModuloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * The data used to update Modulos.
     */
    data: XOR<ModuloUpdateManyMutationInput, ModuloUncheckedUpdateManyInput>
    /**
     * Filter which Modulos to update
     */
    where?: ModuloWhereInput
    /**
     * Limit how many Modulos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Modulo upsert
   */
  export type ModuloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * The filter to search for the Modulo to update in case it exists.
     */
    where: ModuloWhereUniqueInput
    /**
     * In case the Modulo found by the `where` argument doesn't exist, create a new Modulo with this data.
     */
    create: XOR<ModuloCreateInput, ModuloUncheckedCreateInput>
    /**
     * In case the Modulo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuloUpdateInput, ModuloUncheckedUpdateInput>
  }

  /**
   * Modulo delete
   */
  export type ModuloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
    /**
     * Filter which Modulo to delete.
     */
    where: ModuloWhereUniqueInput
  }

  /**
   * Modulo deleteMany
   */
  export type ModuloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modulos to delete
     */
    where?: ModuloWhereInput
    /**
     * Limit how many Modulos to delete.
     */
    limit?: number
  }

  /**
   * Modulo.progressos
   */
  export type Modulo$progressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progresso
     */
    select?: ProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progresso
     */
    omit?: ProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoInclude<ExtArgs> | null
    where?: ProgressoWhereInput
    orderBy?: ProgressoOrderByWithRelationInput | ProgressoOrderByWithRelationInput[]
    cursor?: ProgressoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressoScalarFieldEnum | ProgressoScalarFieldEnum[]
  }

  /**
   * Modulo.avaliacoes
   */
  export type Modulo$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Modulo without action
   */
  export type ModuloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modulo
     */
    select?: ModuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Modulo
     */
    omit?: ModuloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuloInclude<ExtArgs> | null
  }


  /**
   * Model Medicamento
   */

  export type AggregateMedicamento = {
    _count: MedicamentoCountAggregateOutputType | null
    _min: MedicamentoMinAggregateOutputType | null
    _max: MedicamentoMaxAggregateOutputType | null
  }

  export type MedicamentoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    principioAtivo: string | null
    formaFarmaceutica: string | null
    concentracao: string | null
    indicacoes: string | null
    contraindicacoes: string | null
    efeitosAdversos: string | null
    createdAt: Date | null
    updatedAt: Date | null
    categoriaId: string | null
  }

  export type MedicamentoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    principioAtivo: string | null
    formaFarmaceutica: string | null
    concentracao: string | null
    indicacoes: string | null
    contraindicacoes: string | null
    efeitosAdversos: string | null
    createdAt: Date | null
    updatedAt: Date | null
    categoriaId: string | null
  }

  export type MedicamentoCountAggregateOutputType = {
    id: number
    nome: number
    principioAtivo: number
    formaFarmaceutica: number
    concentracao: number
    indicacoes: number
    contraindicacoes: number
    efeitosAdversos: number
    createdAt: number
    updatedAt: number
    categoriaId: number
    _all: number
  }


  export type MedicamentoMinAggregateInputType = {
    id?: true
    nome?: true
    principioAtivo?: true
    formaFarmaceutica?: true
    concentracao?: true
    indicacoes?: true
    contraindicacoes?: true
    efeitosAdversos?: true
    createdAt?: true
    updatedAt?: true
    categoriaId?: true
  }

  export type MedicamentoMaxAggregateInputType = {
    id?: true
    nome?: true
    principioAtivo?: true
    formaFarmaceutica?: true
    concentracao?: true
    indicacoes?: true
    contraindicacoes?: true
    efeitosAdversos?: true
    createdAt?: true
    updatedAt?: true
    categoriaId?: true
  }

  export type MedicamentoCountAggregateInputType = {
    id?: true
    nome?: true
    principioAtivo?: true
    formaFarmaceutica?: true
    concentracao?: true
    indicacoes?: true
    contraindicacoes?: true
    efeitosAdversos?: true
    createdAt?: true
    updatedAt?: true
    categoriaId?: true
    _all?: true
  }

  export type MedicamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicamento to aggregate.
     */
    where?: MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicamentos to fetch.
     */
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicamentos
    **/
    _count?: true | MedicamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicamentoMaxAggregateInputType
  }

  export type GetMedicamentoAggregateType<T extends MedicamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicamento[P]>
      : GetScalarType<T[P], AggregateMedicamento[P]>
  }




  export type MedicamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicamentoWhereInput
    orderBy?: MedicamentoOrderByWithAggregationInput | MedicamentoOrderByWithAggregationInput[]
    by: MedicamentoScalarFieldEnum[] | MedicamentoScalarFieldEnum
    having?: MedicamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicamentoCountAggregateInputType | true
    _min?: MedicamentoMinAggregateInputType
    _max?: MedicamentoMaxAggregateInputType
  }

  export type MedicamentoGroupByOutputType = {
    id: string
    nome: string
    principioAtivo: string
    formaFarmaceutica: string
    concentracao: string
    indicacoes: string | null
    contraindicacoes: string | null
    efeitosAdversos: string | null
    createdAt: Date
    updatedAt: Date
    categoriaId: string
    _count: MedicamentoCountAggregateOutputType | null
    _min: MedicamentoMinAggregateOutputType | null
    _max: MedicamentoMaxAggregateOutputType | null
  }

  type GetMedicamentoGroupByPayload<T extends MedicamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicamentoGroupByOutputType[P]>
            : GetScalarType<T[P], MedicamentoGroupByOutputType[P]>
        }
      >
    >


  export type MedicamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    principioAtivo?: boolean
    formaFarmaceutica?: boolean
    concentracao?: boolean
    indicacoes?: boolean
    contraindicacoes?: boolean
    efeitosAdversos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoriaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicamento"]>

  export type MedicamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    principioAtivo?: boolean
    formaFarmaceutica?: boolean
    concentracao?: boolean
    indicacoes?: boolean
    contraindicacoes?: boolean
    efeitosAdversos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoriaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicamento"]>

  export type MedicamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    principioAtivo?: boolean
    formaFarmaceutica?: boolean
    concentracao?: boolean
    indicacoes?: boolean
    contraindicacoes?: boolean
    efeitosAdversos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoriaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicamento"]>

  export type MedicamentoSelectScalar = {
    id?: boolean
    nome?: boolean
    principioAtivo?: boolean
    formaFarmaceutica?: boolean
    concentracao?: boolean
    indicacoes?: boolean
    contraindicacoes?: boolean
    efeitosAdversos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoriaId?: boolean
  }

  export type MedicamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "principioAtivo" | "formaFarmaceutica" | "concentracao" | "indicacoes" | "contraindicacoes" | "efeitosAdversos" | "createdAt" | "updatedAt" | "categoriaId", ExtArgs["result"]["medicamento"]>
  export type MedicamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type MedicamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type MedicamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $MedicamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medicamento"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      principioAtivo: string
      formaFarmaceutica: string
      concentracao: string
      indicacoes: string | null
      contraindicacoes: string | null
      efeitosAdversos: string | null
      createdAt: Date
      updatedAt: Date
      categoriaId: string
    }, ExtArgs["result"]["medicamento"]>
    composites: {}
  }

  type MedicamentoGetPayload<S extends boolean | null | undefined | MedicamentoDefaultArgs> = $Result.GetResult<Prisma.$MedicamentoPayload, S>

  type MedicamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicamentoCountAggregateInputType | true
    }

  export interface MedicamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medicamento'], meta: { name: 'Medicamento' } }
    /**
     * Find zero or one Medicamento that matches the filter.
     * @param {MedicamentoFindUniqueArgs} args - Arguments to find a Medicamento
     * @example
     * // Get one Medicamento
     * const medicamento = await prisma.medicamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicamentoFindUniqueArgs>(args: SelectSubset<T, MedicamentoFindUniqueArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medicamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicamentoFindUniqueOrThrowArgs} args - Arguments to find a Medicamento
     * @example
     * // Get one Medicamento
     * const medicamento = await prisma.medicamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoFindFirstArgs} args - Arguments to find a Medicamento
     * @example
     * // Get one Medicamento
     * const medicamento = await prisma.medicamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicamentoFindFirstArgs>(args?: SelectSubset<T, MedicamentoFindFirstArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoFindFirstOrThrowArgs} args - Arguments to find a Medicamento
     * @example
     * // Get one Medicamento
     * const medicamento = await prisma.medicamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicamentos
     * const medicamentos = await prisma.medicamento.findMany()
     * 
     * // Get first 10 Medicamentos
     * const medicamentos = await prisma.medicamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicamentoWithIdOnly = await prisma.medicamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicamentoFindManyArgs>(args?: SelectSubset<T, MedicamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medicamento.
     * @param {MedicamentoCreateArgs} args - Arguments to create a Medicamento.
     * @example
     * // Create one Medicamento
     * const Medicamento = await prisma.medicamento.create({
     *   data: {
     *     // ... data to create a Medicamento
     *   }
     * })
     * 
     */
    create<T extends MedicamentoCreateArgs>(args: SelectSubset<T, MedicamentoCreateArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicamentos.
     * @param {MedicamentoCreateManyArgs} args - Arguments to create many Medicamentos.
     * @example
     * // Create many Medicamentos
     * const medicamento = await prisma.medicamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicamentoCreateManyArgs>(args?: SelectSubset<T, MedicamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicamentos and returns the data saved in the database.
     * @param {MedicamentoCreateManyAndReturnArgs} args - Arguments to create many Medicamentos.
     * @example
     * // Create many Medicamentos
     * const medicamento = await prisma.medicamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicamentos and only return the `id`
     * const medicamentoWithIdOnly = await prisma.medicamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medicamento.
     * @param {MedicamentoDeleteArgs} args - Arguments to delete one Medicamento.
     * @example
     * // Delete one Medicamento
     * const Medicamento = await prisma.medicamento.delete({
     *   where: {
     *     // ... filter to delete one Medicamento
     *   }
     * })
     * 
     */
    delete<T extends MedicamentoDeleteArgs>(args: SelectSubset<T, MedicamentoDeleteArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medicamento.
     * @param {MedicamentoUpdateArgs} args - Arguments to update one Medicamento.
     * @example
     * // Update one Medicamento
     * const medicamento = await prisma.medicamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicamentoUpdateArgs>(args: SelectSubset<T, MedicamentoUpdateArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicamentos.
     * @param {MedicamentoDeleteManyArgs} args - Arguments to filter Medicamentos to delete.
     * @example
     * // Delete a few Medicamentos
     * const { count } = await prisma.medicamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicamentoDeleteManyArgs>(args?: SelectSubset<T, MedicamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicamentos
     * const medicamento = await prisma.medicamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicamentoUpdateManyArgs>(args: SelectSubset<T, MedicamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicamentos and returns the data updated in the database.
     * @param {MedicamentoUpdateManyAndReturnArgs} args - Arguments to update many Medicamentos.
     * @example
     * // Update many Medicamentos
     * const medicamento = await prisma.medicamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicamentos and only return the `id`
     * const medicamentoWithIdOnly = await prisma.medicamento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medicamento.
     * @param {MedicamentoUpsertArgs} args - Arguments to update or create a Medicamento.
     * @example
     * // Update or create a Medicamento
     * const medicamento = await prisma.medicamento.upsert({
     *   create: {
     *     // ... data to create a Medicamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicamento we want to update
     *   }
     * })
     */
    upsert<T extends MedicamentoUpsertArgs>(args: SelectSubset<T, MedicamentoUpsertArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoCountArgs} args - Arguments to filter Medicamentos to count.
     * @example
     * // Count the number of Medicamentos
     * const count = await prisma.medicamento.count({
     *   where: {
     *     // ... the filter for the Medicamentos we want to count
     *   }
     * })
    **/
    count<T extends MedicamentoCountArgs>(
      args?: Subset<T, MedicamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicamentoAggregateArgs>(args: Subset<T, MedicamentoAggregateArgs>): Prisma.PrismaPromise<GetMedicamentoAggregateType<T>>

    /**
     * Group by Medicamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicamentoGroupByArgs['orderBy'] }
        : { orderBy?: MedicamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medicamento model
   */
  readonly fields: MedicamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medicamento model
   */
  interface MedicamentoFieldRefs {
    readonly id: FieldRef<"Medicamento", 'String'>
    readonly nome: FieldRef<"Medicamento", 'String'>
    readonly principioAtivo: FieldRef<"Medicamento", 'String'>
    readonly formaFarmaceutica: FieldRef<"Medicamento", 'String'>
    readonly concentracao: FieldRef<"Medicamento", 'String'>
    readonly indicacoes: FieldRef<"Medicamento", 'String'>
    readonly contraindicacoes: FieldRef<"Medicamento", 'String'>
    readonly efeitosAdversos: FieldRef<"Medicamento", 'String'>
    readonly createdAt: FieldRef<"Medicamento", 'DateTime'>
    readonly updatedAt: FieldRef<"Medicamento", 'DateTime'>
    readonly categoriaId: FieldRef<"Medicamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Medicamento findUnique
   */
  export type MedicamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamento to fetch.
     */
    where: MedicamentoWhereUniqueInput
  }

  /**
   * Medicamento findUniqueOrThrow
   */
  export type MedicamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamento to fetch.
     */
    where: MedicamentoWhereUniqueInput
  }

  /**
   * Medicamento findFirst
   */
  export type MedicamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamento to fetch.
     */
    where?: MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicamentos to fetch.
     */
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicamentos.
     */
    cursor?: MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicamentos.
     */
    distinct?: MedicamentoScalarFieldEnum | MedicamentoScalarFieldEnum[]
  }

  /**
   * Medicamento findFirstOrThrow
   */
  export type MedicamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamento to fetch.
     */
    where?: MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicamentos to fetch.
     */
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicamentos.
     */
    cursor?: MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicamentos.
     */
    distinct?: MedicamentoScalarFieldEnum | MedicamentoScalarFieldEnum[]
  }

  /**
   * Medicamento findMany
   */
  export type MedicamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamentos to fetch.
     */
    where?: MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicamentos to fetch.
     */
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicamentos.
     */
    cursor?: MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicamentos.
     */
    skip?: number
    distinct?: MedicamentoScalarFieldEnum | MedicamentoScalarFieldEnum[]
  }

  /**
   * Medicamento create
   */
  export type MedicamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Medicamento.
     */
    data: XOR<MedicamentoCreateInput, MedicamentoUncheckedCreateInput>
  }

  /**
   * Medicamento createMany
   */
  export type MedicamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicamentos.
     */
    data: MedicamentoCreateManyInput | MedicamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicamento createManyAndReturn
   */
  export type MedicamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Medicamentos.
     */
    data: MedicamentoCreateManyInput | MedicamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medicamento update
   */
  export type MedicamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Medicamento.
     */
    data: XOR<MedicamentoUpdateInput, MedicamentoUncheckedUpdateInput>
    /**
     * Choose, which Medicamento to update.
     */
    where: MedicamentoWhereUniqueInput
  }

  /**
   * Medicamento updateMany
   */
  export type MedicamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicamentos.
     */
    data: XOR<MedicamentoUpdateManyMutationInput, MedicamentoUncheckedUpdateManyInput>
    /**
     * Filter which Medicamentos to update
     */
    where?: MedicamentoWhereInput
    /**
     * Limit how many Medicamentos to update.
     */
    limit?: number
  }

  /**
   * Medicamento updateManyAndReturn
   */
  export type MedicamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * The data used to update Medicamentos.
     */
    data: XOR<MedicamentoUpdateManyMutationInput, MedicamentoUncheckedUpdateManyInput>
    /**
     * Filter which Medicamentos to update
     */
    where?: MedicamentoWhereInput
    /**
     * Limit how many Medicamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medicamento upsert
   */
  export type MedicamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Medicamento to update in case it exists.
     */
    where: MedicamentoWhereUniqueInput
    /**
     * In case the Medicamento found by the `where` argument doesn't exist, create a new Medicamento with this data.
     */
    create: XOR<MedicamentoCreateInput, MedicamentoUncheckedCreateInput>
    /**
     * In case the Medicamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicamentoUpdateInput, MedicamentoUncheckedUpdateInput>
  }

  /**
   * Medicamento delete
   */
  export type MedicamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter which Medicamento to delete.
     */
    where: MedicamentoWhereUniqueInput
  }

  /**
   * Medicamento deleteMany
   */
  export type MedicamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicamentos to delete
     */
    where?: MedicamentoWhereInput
    /**
     * Limit how many Medicamentos to delete.
     */
    limit?: number
  }

  /**
   * Medicamento without action
   */
  export type MedicamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
  }


  /**
   * Model Progresso
   */

  export type AggregateProgresso = {
    _count: ProgressoCountAggregateOutputType | null
    _avg: ProgressoAvgAggregateOutputType | null
    _sum: ProgressoSumAggregateOutputType | null
    _min: ProgressoMinAggregateOutputType | null
    _max: ProgressoMaxAggregateOutputType | null
  }

  export type ProgressoAvgAggregateOutputType = {
    progresso: number | null
  }

  export type ProgressoSumAggregateOutputType = {
    progresso: number | null
  }

  export type ProgressoMinAggregateOutputType = {
    id: string | null
    progresso: number | null
    concluido: boolean | null
    ultimoAcesso: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    moduloId: string | null
  }

  export type ProgressoMaxAggregateOutputType = {
    id: string | null
    progresso: number | null
    concluido: boolean | null
    ultimoAcesso: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    moduloId: string | null
  }

  export type ProgressoCountAggregateOutputType = {
    id: number
    progresso: number
    concluido: number
    ultimoAcesso: number
    createdAt: number
    updatedAt: number
    userId: number
    moduloId: number
    _all: number
  }


  export type ProgressoAvgAggregateInputType = {
    progresso?: true
  }

  export type ProgressoSumAggregateInputType = {
    progresso?: true
  }

  export type ProgressoMinAggregateInputType = {
    id?: true
    progresso?: true
    concluido?: true
    ultimoAcesso?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    moduloId?: true
  }

  export type ProgressoMaxAggregateInputType = {
    id?: true
    progresso?: true
    concluido?: true
    ultimoAcesso?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    moduloId?: true
  }

  export type ProgressoCountAggregateInputType = {
    id?: true
    progresso?: true
    concluido?: true
    ultimoAcesso?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    moduloId?: true
    _all?: true
  }

  export type ProgressoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progresso to aggregate.
     */
    where?: ProgressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progressos to fetch.
     */
    orderBy?: ProgressoOrderByWithRelationInput | ProgressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Progressos
    **/
    _count?: true | ProgressoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressoMaxAggregateInputType
  }

  export type GetProgressoAggregateType<T extends ProgressoAggregateArgs> = {
        [P in keyof T & keyof AggregateProgresso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgresso[P]>
      : GetScalarType<T[P], AggregateProgresso[P]>
  }




  export type ProgressoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressoWhereInput
    orderBy?: ProgressoOrderByWithAggregationInput | ProgressoOrderByWithAggregationInput[]
    by: ProgressoScalarFieldEnum[] | ProgressoScalarFieldEnum
    having?: ProgressoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressoCountAggregateInputType | true
    _avg?: ProgressoAvgAggregateInputType
    _sum?: ProgressoSumAggregateInputType
    _min?: ProgressoMinAggregateInputType
    _max?: ProgressoMaxAggregateInputType
  }

  export type ProgressoGroupByOutputType = {
    id: string
    progresso: number
    concluido: boolean
    ultimoAcesso: Date
    createdAt: Date
    updatedAt: Date
    userId: string
    moduloId: string
    _count: ProgressoCountAggregateOutputType | null
    _avg: ProgressoAvgAggregateOutputType | null
    _sum: ProgressoSumAggregateOutputType | null
    _min: ProgressoMinAggregateOutputType | null
    _max: ProgressoMaxAggregateOutputType | null
  }

  type GetProgressoGroupByPayload<T extends ProgressoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressoGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressoGroupByOutputType[P]>
        }
      >
    >


  export type ProgressoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    progresso?: boolean
    concluido?: boolean
    ultimoAcesso?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    moduloId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progresso"]>

  export type ProgressoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    progresso?: boolean
    concluido?: boolean
    ultimoAcesso?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    moduloId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progresso"]>

  export type ProgressoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    progresso?: boolean
    concluido?: boolean
    ultimoAcesso?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    moduloId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progresso"]>

  export type ProgressoSelectScalar = {
    id?: boolean
    progresso?: boolean
    concluido?: boolean
    ultimoAcesso?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    moduloId?: boolean
  }

  export type ProgressoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "progresso" | "concluido" | "ultimoAcesso" | "createdAt" | "updatedAt" | "userId" | "moduloId", ExtArgs["result"]["progresso"]>
  export type ProgressoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
  }
  export type ProgressoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
  }
  export type ProgressoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
  }

  export type $ProgressoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Progresso"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      modulo: Prisma.$ModuloPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      progresso: number
      concluido: boolean
      ultimoAcesso: Date
      createdAt: Date
      updatedAt: Date
      userId: string
      moduloId: string
    }, ExtArgs["result"]["progresso"]>
    composites: {}
  }

  type ProgressoGetPayload<S extends boolean | null | undefined | ProgressoDefaultArgs> = $Result.GetResult<Prisma.$ProgressoPayload, S>

  type ProgressoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressoCountAggregateInputType | true
    }

  export interface ProgressoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Progresso'], meta: { name: 'Progresso' } }
    /**
     * Find zero or one Progresso that matches the filter.
     * @param {ProgressoFindUniqueArgs} args - Arguments to find a Progresso
     * @example
     * // Get one Progresso
     * const progresso = await prisma.progresso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressoFindUniqueArgs>(args: SelectSubset<T, ProgressoFindUniqueArgs<ExtArgs>>): Prisma__ProgressoClient<$Result.GetResult<Prisma.$ProgressoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Progresso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressoFindUniqueOrThrowArgs} args - Arguments to find a Progresso
     * @example
     * // Get one Progresso
     * const progresso = await prisma.progresso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressoClient<$Result.GetResult<Prisma.$ProgressoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progresso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoFindFirstArgs} args - Arguments to find a Progresso
     * @example
     * // Get one Progresso
     * const progresso = await prisma.progresso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressoFindFirstArgs>(args?: SelectSubset<T, ProgressoFindFirstArgs<ExtArgs>>): Prisma__ProgressoClient<$Result.GetResult<Prisma.$ProgressoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progresso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoFindFirstOrThrowArgs} args - Arguments to find a Progresso
     * @example
     * // Get one Progresso
     * const progresso = await prisma.progresso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressoClient<$Result.GetResult<Prisma.$ProgressoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Progressos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Progressos
     * const progressos = await prisma.progresso.findMany()
     * 
     * // Get first 10 Progressos
     * const progressos = await prisma.progresso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressoWithIdOnly = await prisma.progresso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgressoFindManyArgs>(args?: SelectSubset<T, ProgressoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Progresso.
     * @param {ProgressoCreateArgs} args - Arguments to create a Progresso.
     * @example
     * // Create one Progresso
     * const Progresso = await prisma.progresso.create({
     *   data: {
     *     // ... data to create a Progresso
     *   }
     * })
     * 
     */
    create<T extends ProgressoCreateArgs>(args: SelectSubset<T, ProgressoCreateArgs<ExtArgs>>): Prisma__ProgressoClient<$Result.GetResult<Prisma.$ProgressoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Progressos.
     * @param {ProgressoCreateManyArgs} args - Arguments to create many Progressos.
     * @example
     * // Create many Progressos
     * const progresso = await prisma.progresso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressoCreateManyArgs>(args?: SelectSubset<T, ProgressoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Progressos and returns the data saved in the database.
     * @param {ProgressoCreateManyAndReturnArgs} args - Arguments to create many Progressos.
     * @example
     * // Create many Progressos
     * const progresso = await prisma.progresso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Progressos and only return the `id`
     * const progressoWithIdOnly = await prisma.progresso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgressoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgressoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Progresso.
     * @param {ProgressoDeleteArgs} args - Arguments to delete one Progresso.
     * @example
     * // Delete one Progresso
     * const Progresso = await prisma.progresso.delete({
     *   where: {
     *     // ... filter to delete one Progresso
     *   }
     * })
     * 
     */
    delete<T extends ProgressoDeleteArgs>(args: SelectSubset<T, ProgressoDeleteArgs<ExtArgs>>): Prisma__ProgressoClient<$Result.GetResult<Prisma.$ProgressoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Progresso.
     * @param {ProgressoUpdateArgs} args - Arguments to update one Progresso.
     * @example
     * // Update one Progresso
     * const progresso = await prisma.progresso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressoUpdateArgs>(args: SelectSubset<T, ProgressoUpdateArgs<ExtArgs>>): Prisma__ProgressoClient<$Result.GetResult<Prisma.$ProgressoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Progressos.
     * @param {ProgressoDeleteManyArgs} args - Arguments to filter Progressos to delete.
     * @example
     * // Delete a few Progressos
     * const { count } = await prisma.progresso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressoDeleteManyArgs>(args?: SelectSubset<T, ProgressoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progressos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Progressos
     * const progresso = await prisma.progresso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressoUpdateManyArgs>(args: SelectSubset<T, ProgressoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progressos and returns the data updated in the database.
     * @param {ProgressoUpdateManyAndReturnArgs} args - Arguments to update many Progressos.
     * @example
     * // Update many Progressos
     * const progresso = await prisma.progresso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Progressos and only return the `id`
     * const progressoWithIdOnly = await prisma.progresso.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProgressoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgressoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Progresso.
     * @param {ProgressoUpsertArgs} args - Arguments to update or create a Progresso.
     * @example
     * // Update or create a Progresso
     * const progresso = await prisma.progresso.upsert({
     *   create: {
     *     // ... data to create a Progresso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Progresso we want to update
     *   }
     * })
     */
    upsert<T extends ProgressoUpsertArgs>(args: SelectSubset<T, ProgressoUpsertArgs<ExtArgs>>): Prisma__ProgressoClient<$Result.GetResult<Prisma.$ProgressoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Progressos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoCountArgs} args - Arguments to filter Progressos to count.
     * @example
     * // Count the number of Progressos
     * const count = await prisma.progresso.count({
     *   where: {
     *     // ... the filter for the Progressos we want to count
     *   }
     * })
    **/
    count<T extends ProgressoCountArgs>(
      args?: Subset<T, ProgressoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Progresso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgressoAggregateArgs>(args: Subset<T, ProgressoAggregateArgs>): Prisma.PrismaPromise<GetProgressoAggregateType<T>>

    /**
     * Group by Progresso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProgressoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressoGroupByArgs['orderBy'] }
        : { orderBy?: ProgressoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgressoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Progresso model
   */
  readonly fields: ProgressoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Progresso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modulo<T extends ModuloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuloDefaultArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Progresso model
   */
  interface ProgressoFieldRefs {
    readonly id: FieldRef<"Progresso", 'String'>
    readonly progresso: FieldRef<"Progresso", 'Int'>
    readonly concluido: FieldRef<"Progresso", 'Boolean'>
    readonly ultimoAcesso: FieldRef<"Progresso", 'DateTime'>
    readonly createdAt: FieldRef<"Progresso", 'DateTime'>
    readonly updatedAt: FieldRef<"Progresso", 'DateTime'>
    readonly userId: FieldRef<"Progresso", 'String'>
    readonly moduloId: FieldRef<"Progresso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Progresso findUnique
   */
  export type ProgressoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progresso
     */
    select?: ProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progresso
     */
    omit?: ProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoInclude<ExtArgs> | null
    /**
     * Filter, which Progresso to fetch.
     */
    where: ProgressoWhereUniqueInput
  }

  /**
   * Progresso findUniqueOrThrow
   */
  export type ProgressoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progresso
     */
    select?: ProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progresso
     */
    omit?: ProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoInclude<ExtArgs> | null
    /**
     * Filter, which Progresso to fetch.
     */
    where: ProgressoWhereUniqueInput
  }

  /**
   * Progresso findFirst
   */
  export type ProgressoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progresso
     */
    select?: ProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progresso
     */
    omit?: ProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoInclude<ExtArgs> | null
    /**
     * Filter, which Progresso to fetch.
     */
    where?: ProgressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progressos to fetch.
     */
    orderBy?: ProgressoOrderByWithRelationInput | ProgressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progressos.
     */
    cursor?: ProgressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progressos.
     */
    distinct?: ProgressoScalarFieldEnum | ProgressoScalarFieldEnum[]
  }

  /**
   * Progresso findFirstOrThrow
   */
  export type ProgressoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progresso
     */
    select?: ProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progresso
     */
    omit?: ProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoInclude<ExtArgs> | null
    /**
     * Filter, which Progresso to fetch.
     */
    where?: ProgressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progressos to fetch.
     */
    orderBy?: ProgressoOrderByWithRelationInput | ProgressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progressos.
     */
    cursor?: ProgressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progressos.
     */
    distinct?: ProgressoScalarFieldEnum | ProgressoScalarFieldEnum[]
  }

  /**
   * Progresso findMany
   */
  export type ProgressoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progresso
     */
    select?: ProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progresso
     */
    omit?: ProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoInclude<ExtArgs> | null
    /**
     * Filter, which Progressos to fetch.
     */
    where?: ProgressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progressos to fetch.
     */
    orderBy?: ProgressoOrderByWithRelationInput | ProgressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Progressos.
     */
    cursor?: ProgressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progressos.
     */
    skip?: number
    distinct?: ProgressoScalarFieldEnum | ProgressoScalarFieldEnum[]
  }

  /**
   * Progresso create
   */
  export type ProgressoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progresso
     */
    select?: ProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progresso
     */
    omit?: ProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoInclude<ExtArgs> | null
    /**
     * The data needed to create a Progresso.
     */
    data: XOR<ProgressoCreateInput, ProgressoUncheckedCreateInput>
  }

  /**
   * Progresso createMany
   */
  export type ProgressoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Progressos.
     */
    data: ProgressoCreateManyInput | ProgressoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Progresso createManyAndReturn
   */
  export type ProgressoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progresso
     */
    select?: ProgressoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Progresso
     */
    omit?: ProgressoOmit<ExtArgs> | null
    /**
     * The data used to create many Progressos.
     */
    data: ProgressoCreateManyInput | ProgressoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Progresso update
   */
  export type ProgressoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progresso
     */
    select?: ProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progresso
     */
    omit?: ProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoInclude<ExtArgs> | null
    /**
     * The data needed to update a Progresso.
     */
    data: XOR<ProgressoUpdateInput, ProgressoUncheckedUpdateInput>
    /**
     * Choose, which Progresso to update.
     */
    where: ProgressoWhereUniqueInput
  }

  /**
   * Progresso updateMany
   */
  export type ProgressoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Progressos.
     */
    data: XOR<ProgressoUpdateManyMutationInput, ProgressoUncheckedUpdateManyInput>
    /**
     * Filter which Progressos to update
     */
    where?: ProgressoWhereInput
    /**
     * Limit how many Progressos to update.
     */
    limit?: number
  }

  /**
   * Progresso updateManyAndReturn
   */
  export type ProgressoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progresso
     */
    select?: ProgressoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Progresso
     */
    omit?: ProgressoOmit<ExtArgs> | null
    /**
     * The data used to update Progressos.
     */
    data: XOR<ProgressoUpdateManyMutationInput, ProgressoUncheckedUpdateManyInput>
    /**
     * Filter which Progressos to update
     */
    where?: ProgressoWhereInput
    /**
     * Limit how many Progressos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Progresso upsert
   */
  export type ProgressoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progresso
     */
    select?: ProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progresso
     */
    omit?: ProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoInclude<ExtArgs> | null
    /**
     * The filter to search for the Progresso to update in case it exists.
     */
    where: ProgressoWhereUniqueInput
    /**
     * In case the Progresso found by the `where` argument doesn't exist, create a new Progresso with this data.
     */
    create: XOR<ProgressoCreateInput, ProgressoUncheckedCreateInput>
    /**
     * In case the Progresso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressoUpdateInput, ProgressoUncheckedUpdateInput>
  }

  /**
   * Progresso delete
   */
  export type ProgressoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progresso
     */
    select?: ProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progresso
     */
    omit?: ProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoInclude<ExtArgs> | null
    /**
     * Filter which Progresso to delete.
     */
    where: ProgressoWhereUniqueInput
  }

  /**
   * Progresso deleteMany
   */
  export type ProgressoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progressos to delete
     */
    where?: ProgressoWhereInput
    /**
     * Limit how many Progressos to delete.
     */
    limit?: number
  }

  /**
   * Progresso without action
   */
  export type ProgressoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progresso
     */
    select?: ProgressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progresso
     */
    omit?: ProgressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressoInclude<ExtArgs> | null
  }


  /**
   * Model Avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    moduloId: string | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    moduloId: string | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    id: number
    titulo: number
    createdAt: number
    updatedAt: number
    moduloId: number
    _all: number
  }


  export type AvaliacaoMinAggregateInputType = {
    id?: true
    titulo?: true
    createdAt?: true
    updatedAt?: true
    moduloId?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    id?: true
    titulo?: true
    createdAt?: true
    updatedAt?: true
    moduloId?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    id?: true
    titulo?: true
    createdAt?: true
    updatedAt?: true
    moduloId?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacao to aggregate.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type AvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithAggregationInput | AvaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: AvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    id: string
    titulo: string
    createdAt: Date
    updatedAt: Date
    moduloId: string
    _count: AvaliacaoCountAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends AvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    moduloId?: boolean
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
    questoes?: boolean | Avaliacao$questoesArgs<ExtArgs>
    resultados?: boolean | Avaliacao$resultadosArgs<ExtArgs>
    _count?: boolean | AvaliacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    moduloId?: boolean
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    moduloId?: boolean
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectScalar = {
    id?: boolean
    titulo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    moduloId?: boolean
  }

  export type AvaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "createdAt" | "updatedAt" | "moduloId", ExtArgs["result"]["avaliacao"]>
  export type AvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
    questoes?: boolean | Avaliacao$questoesArgs<ExtArgs>
    resultados?: boolean | Avaliacao$resultadosArgs<ExtArgs>
    _count?: boolean | AvaliacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvaliacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
  }
  export type AvaliacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modulo?: boolean | ModuloDefaultArgs<ExtArgs>
  }

  export type $AvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avaliacao"
    objects: {
      modulo: Prisma.$ModuloPayload<ExtArgs>
      questoes: Prisma.$QuestaoPayload<ExtArgs>[]
      resultados: Prisma.$ResultadoAvaliacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      createdAt: Date
      updatedAt: Date
      moduloId: string
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type AvaliacaoGetPayload<S extends boolean | null | undefined | AvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$AvaliacaoPayload, S>

  type AvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface AvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacao'], meta: { name: 'Avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {AvaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvaliacaoFindUniqueArgs>(args: SelectSubset<T, AvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvaliacaoFindFirstArgs>(args?: SelectSubset<T, AvaliacaoFindFirstArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvaliacaoFindManyArgs>(args?: SelectSubset<T, AvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacao.
     * @param {AvaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends AvaliacaoCreateArgs>(args: SelectSubset<T, AvaliacaoCreateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacaos.
     * @param {AvaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvaliacaoCreateManyArgs>(args?: SelectSubset<T, AvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avaliacaos and returns the data saved in the database.
     * @param {AvaliacaoCreateManyAndReturnArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avaliacaos and only return the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvaliacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AvaliacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avaliacao.
     * @param {AvaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends AvaliacaoDeleteArgs>(args: SelectSubset<T, AvaliacaoDeleteArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacao.
     * @param {AvaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvaliacaoUpdateArgs>(args: SelectSubset<T, AvaliacaoUpdateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacaos.
     * @param {AvaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvaliacaoDeleteManyArgs>(args?: SelectSubset<T, AvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvaliacaoUpdateManyArgs>(args: SelectSubset<T, AvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos and returns the data updated in the database.
     * @param {AvaliacaoUpdateManyAndReturnArgs} args - Arguments to update many Avaliacaos.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avaliacaos and only return the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvaliacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, AvaliacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avaliacao.
     * @param {AvaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends AvaliacaoUpsertArgs>(args: SelectSubset<T, AvaliacaoUpsertArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoCountArgs>(
      args?: Subset<T, AvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacao model
   */
  readonly fields: AvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modulo<T extends ModuloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuloDefaultArgs<ExtArgs>>): Prisma__ModuloClient<$Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questoes<T extends Avaliacao$questoesArgs<ExtArgs> = {}>(args?: Subset<T, Avaliacao$questoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resultados<T extends Avaliacao$resultadosArgs<ExtArgs> = {}>(args?: Subset<T, Avaliacao$resultadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadoAvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Avaliacao model
   */
  interface AvaliacaoFieldRefs {
    readonly id: FieldRef<"Avaliacao", 'String'>
    readonly titulo: FieldRef<"Avaliacao", 'String'>
    readonly createdAt: FieldRef<"Avaliacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Avaliacao", 'DateTime'>
    readonly moduloId: FieldRef<"Avaliacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Avaliacao findUnique
   */
  export type AvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findUniqueOrThrow
   */
  export type AvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findFirst
   */
  export type AvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findFirstOrThrow
   */
  export type AvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findMany
   */
  export type AvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacaos to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao create
   */
  export type AvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avaliacao.
     */
    data: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
  }

  /**
   * Avaliacao createMany
   */
  export type AvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avaliacao createManyAndReturn
   */
  export type AvaliacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao update
   */
  export type AvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avaliacao.
     */
    data: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which Avaliacao to update.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao updateMany
   */
  export type AvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
  }

  /**
   * Avaliacao updateManyAndReturn
   */
  export type AvaliacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao upsert
   */
  export type AvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avaliacao to update in case it exists.
     */
    where: AvaliacaoWhereUniqueInput
    /**
     * In case the Avaliacao found by the `where` argument doesn't exist, create a new Avaliacao with this data.
     */
    create: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
    /**
     * In case the Avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
  }

  /**
   * Avaliacao delete
   */
  export type AvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which Avaliacao to delete.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao deleteMany
   */
  export type AvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacaos to delete
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to delete.
     */
    limit?: number
  }

  /**
   * Avaliacao.questoes
   */
  export type Avaliacao$questoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    where?: QuestaoWhereInput
    orderBy?: QuestaoOrderByWithRelationInput | QuestaoOrderByWithRelationInput[]
    cursor?: QuestaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestaoScalarFieldEnum | QuestaoScalarFieldEnum[]
  }

  /**
   * Avaliacao.resultados
   */
  export type Avaliacao$resultadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoAvaliacao
     */
    select?: ResultadoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoAvaliacao
     */
    omit?: ResultadoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoAvaliacaoInclude<ExtArgs> | null
    where?: ResultadoAvaliacaoWhereInput
    orderBy?: ResultadoAvaliacaoOrderByWithRelationInput | ResultadoAvaliacaoOrderByWithRelationInput[]
    cursor?: ResultadoAvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultadoAvaliacaoScalarFieldEnum | ResultadoAvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao without action
   */
  export type AvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
  }


  /**
   * Model Questao
   */

  export type AggregateQuestao = {
    _count: QuestaoCountAggregateOutputType | null
    _avg: QuestaoAvgAggregateOutputType | null
    _sum: QuestaoSumAggregateOutputType | null
    _min: QuestaoMinAggregateOutputType | null
    _max: QuestaoMaxAggregateOutputType | null
  }

  export type QuestaoAvgAggregateOutputType = {
    respostaCorreta: number | null
  }

  export type QuestaoSumAggregateOutputType = {
    respostaCorreta: number | null
  }

  export type QuestaoMinAggregateOutputType = {
    id: string | null
    enunciado: string | null
    respostaCorreta: number | null
    createdAt: Date | null
    updatedAt: Date | null
    avaliacaoId: string | null
  }

  export type QuestaoMaxAggregateOutputType = {
    id: string | null
    enunciado: string | null
    respostaCorreta: number | null
    createdAt: Date | null
    updatedAt: Date | null
    avaliacaoId: string | null
  }

  export type QuestaoCountAggregateOutputType = {
    id: number
    enunciado: number
    opcoes: number
    respostaCorreta: number
    createdAt: number
    updatedAt: number
    avaliacaoId: number
    _all: number
  }


  export type QuestaoAvgAggregateInputType = {
    respostaCorreta?: true
  }

  export type QuestaoSumAggregateInputType = {
    respostaCorreta?: true
  }

  export type QuestaoMinAggregateInputType = {
    id?: true
    enunciado?: true
    respostaCorreta?: true
    createdAt?: true
    updatedAt?: true
    avaliacaoId?: true
  }

  export type QuestaoMaxAggregateInputType = {
    id?: true
    enunciado?: true
    respostaCorreta?: true
    createdAt?: true
    updatedAt?: true
    avaliacaoId?: true
  }

  export type QuestaoCountAggregateInputType = {
    id?: true
    enunciado?: true
    opcoes?: true
    respostaCorreta?: true
    createdAt?: true
    updatedAt?: true
    avaliacaoId?: true
    _all?: true
  }

  export type QuestaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questao to aggregate.
     */
    where?: QuestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questaos to fetch.
     */
    orderBy?: QuestaoOrderByWithRelationInput | QuestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questaos
    **/
    _count?: true | QuestaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestaoMaxAggregateInputType
  }

  export type GetQuestaoAggregateType<T extends QuestaoAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestao[P]>
      : GetScalarType<T[P], AggregateQuestao[P]>
  }




  export type QuestaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestaoWhereInput
    orderBy?: QuestaoOrderByWithAggregationInput | QuestaoOrderByWithAggregationInput[]
    by: QuestaoScalarFieldEnum[] | QuestaoScalarFieldEnum
    having?: QuestaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestaoCountAggregateInputType | true
    _avg?: QuestaoAvgAggregateInputType
    _sum?: QuestaoSumAggregateInputType
    _min?: QuestaoMinAggregateInputType
    _max?: QuestaoMaxAggregateInputType
  }

  export type QuestaoGroupByOutputType = {
    id: string
    enunciado: string
    opcoes: string[]
    respostaCorreta: number
    createdAt: Date
    updatedAt: Date
    avaliacaoId: string
    _count: QuestaoCountAggregateOutputType | null
    _avg: QuestaoAvgAggregateOutputType | null
    _sum: QuestaoSumAggregateOutputType | null
    _min: QuestaoMinAggregateOutputType | null
    _max: QuestaoMaxAggregateOutputType | null
  }

  type GetQuestaoGroupByPayload<T extends QuestaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestaoGroupByOutputType[P]>
            : GetScalarType<T[P], QuestaoGroupByOutputType[P]>
        }
      >
    >


  export type QuestaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enunciado?: boolean
    opcoes?: boolean
    respostaCorreta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    avaliacaoId?: boolean
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questao"]>

  export type QuestaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enunciado?: boolean
    opcoes?: boolean
    respostaCorreta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    avaliacaoId?: boolean
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questao"]>

  export type QuestaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enunciado?: boolean
    opcoes?: boolean
    respostaCorreta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    avaliacaoId?: boolean
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questao"]>

  export type QuestaoSelectScalar = {
    id?: boolean
    enunciado?: boolean
    opcoes?: boolean
    respostaCorreta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    avaliacaoId?: boolean
  }

  export type QuestaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enunciado" | "opcoes" | "respostaCorreta" | "createdAt" | "updatedAt" | "avaliacaoId", ExtArgs["result"]["questao"]>
  export type QuestaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
  }
  export type QuestaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
  }
  export type QuestaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
  }

  export type $QuestaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Questao"
    objects: {
      avaliacao: Prisma.$AvaliacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      enunciado: string
      opcoes: string[]
      respostaCorreta: number
      createdAt: Date
      updatedAt: Date
      avaliacaoId: string
    }, ExtArgs["result"]["questao"]>
    composites: {}
  }

  type QuestaoGetPayload<S extends boolean | null | undefined | QuestaoDefaultArgs> = $Result.GetResult<Prisma.$QuestaoPayload, S>

  type QuestaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestaoCountAggregateInputType | true
    }

  export interface QuestaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Questao'], meta: { name: 'Questao' } }
    /**
     * Find zero or one Questao that matches the filter.
     * @param {QuestaoFindUniqueArgs} args - Arguments to find a Questao
     * @example
     * // Get one Questao
     * const questao = await prisma.questao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestaoFindUniqueArgs>(args: SelectSubset<T, QuestaoFindUniqueArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Questao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestaoFindUniqueOrThrowArgs} args - Arguments to find a Questao
     * @example
     * // Get one Questao
     * const questao = await prisma.questao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestaoFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoFindFirstArgs} args - Arguments to find a Questao
     * @example
     * // Get one Questao
     * const questao = await prisma.questao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestaoFindFirstArgs>(args?: SelectSubset<T, QuestaoFindFirstArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoFindFirstOrThrowArgs} args - Arguments to find a Questao
     * @example
     * // Get one Questao
     * const questao = await prisma.questao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestaoFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questaos
     * const questaos = await prisma.questao.findMany()
     * 
     * // Get first 10 Questaos
     * const questaos = await prisma.questao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questaoWithIdOnly = await prisma.questao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestaoFindManyArgs>(args?: SelectSubset<T, QuestaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Questao.
     * @param {QuestaoCreateArgs} args - Arguments to create a Questao.
     * @example
     * // Create one Questao
     * const Questao = await prisma.questao.create({
     *   data: {
     *     // ... data to create a Questao
     *   }
     * })
     * 
     */
    create<T extends QuestaoCreateArgs>(args: SelectSubset<T, QuestaoCreateArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questaos.
     * @param {QuestaoCreateManyArgs} args - Arguments to create many Questaos.
     * @example
     * // Create many Questaos
     * const questao = await prisma.questao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestaoCreateManyArgs>(args?: SelectSubset<T, QuestaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questaos and returns the data saved in the database.
     * @param {QuestaoCreateManyAndReturnArgs} args - Arguments to create many Questaos.
     * @example
     * // Create many Questaos
     * const questao = await prisma.questao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questaos and only return the `id`
     * const questaoWithIdOnly = await prisma.questao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestaoCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Questao.
     * @param {QuestaoDeleteArgs} args - Arguments to delete one Questao.
     * @example
     * // Delete one Questao
     * const Questao = await prisma.questao.delete({
     *   where: {
     *     // ... filter to delete one Questao
     *   }
     * })
     * 
     */
    delete<T extends QuestaoDeleteArgs>(args: SelectSubset<T, QuestaoDeleteArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Questao.
     * @param {QuestaoUpdateArgs} args - Arguments to update one Questao.
     * @example
     * // Update one Questao
     * const questao = await prisma.questao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestaoUpdateArgs>(args: SelectSubset<T, QuestaoUpdateArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questaos.
     * @param {QuestaoDeleteManyArgs} args - Arguments to filter Questaos to delete.
     * @example
     * // Delete a few Questaos
     * const { count } = await prisma.questao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestaoDeleteManyArgs>(args?: SelectSubset<T, QuestaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questaos
     * const questao = await prisma.questao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestaoUpdateManyArgs>(args: SelectSubset<T, QuestaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questaos and returns the data updated in the database.
     * @param {QuestaoUpdateManyAndReturnArgs} args - Arguments to update many Questaos.
     * @example
     * // Update many Questaos
     * const questao = await prisma.questao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questaos and only return the `id`
     * const questaoWithIdOnly = await prisma.questao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestaoUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Questao.
     * @param {QuestaoUpsertArgs} args - Arguments to update or create a Questao.
     * @example
     * // Update or create a Questao
     * const questao = await prisma.questao.upsert({
     *   create: {
     *     // ... data to create a Questao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questao we want to update
     *   }
     * })
     */
    upsert<T extends QuestaoUpsertArgs>(args: SelectSubset<T, QuestaoUpsertArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoCountArgs} args - Arguments to filter Questaos to count.
     * @example
     * // Count the number of Questaos
     * const count = await prisma.questao.count({
     *   where: {
     *     // ... the filter for the Questaos we want to count
     *   }
     * })
    **/
    count<T extends QuestaoCountArgs>(
      args?: Subset<T, QuestaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestaoAggregateArgs>(args: Subset<T, QuestaoAggregateArgs>): Prisma.PrismaPromise<GetQuestaoAggregateType<T>>

    /**
     * Group by Questao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestaoGroupByArgs['orderBy'] }
        : { orderBy?: QuestaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Questao model
   */
  readonly fields: QuestaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Questao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avaliacao<T extends AvaliacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvaliacaoDefaultArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Questao model
   */
  interface QuestaoFieldRefs {
    readonly id: FieldRef<"Questao", 'String'>
    readonly enunciado: FieldRef<"Questao", 'String'>
    readonly opcoes: FieldRef<"Questao", 'String[]'>
    readonly respostaCorreta: FieldRef<"Questao", 'Int'>
    readonly createdAt: FieldRef<"Questao", 'DateTime'>
    readonly updatedAt: FieldRef<"Questao", 'DateTime'>
    readonly avaliacaoId: FieldRef<"Questao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Questao findUnique
   */
  export type QuestaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questao to fetch.
     */
    where: QuestaoWhereUniqueInput
  }

  /**
   * Questao findUniqueOrThrow
   */
  export type QuestaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questao to fetch.
     */
    where: QuestaoWhereUniqueInput
  }

  /**
   * Questao findFirst
   */
  export type QuestaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questao to fetch.
     */
    where?: QuestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questaos to fetch.
     */
    orderBy?: QuestaoOrderByWithRelationInput | QuestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questaos.
     */
    cursor?: QuestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questaos.
     */
    distinct?: QuestaoScalarFieldEnum | QuestaoScalarFieldEnum[]
  }

  /**
   * Questao findFirstOrThrow
   */
  export type QuestaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questao to fetch.
     */
    where?: QuestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questaos to fetch.
     */
    orderBy?: QuestaoOrderByWithRelationInput | QuestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questaos.
     */
    cursor?: QuestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questaos.
     */
    distinct?: QuestaoScalarFieldEnum | QuestaoScalarFieldEnum[]
  }

  /**
   * Questao findMany
   */
  export type QuestaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questaos to fetch.
     */
    where?: QuestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questaos to fetch.
     */
    orderBy?: QuestaoOrderByWithRelationInput | QuestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questaos.
     */
    cursor?: QuestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questaos.
     */
    skip?: number
    distinct?: QuestaoScalarFieldEnum | QuestaoScalarFieldEnum[]
  }

  /**
   * Questao create
   */
  export type QuestaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Questao.
     */
    data: XOR<QuestaoCreateInput, QuestaoUncheckedCreateInput>
  }

  /**
   * Questao createMany
   */
  export type QuestaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questaos.
     */
    data: QuestaoCreateManyInput | QuestaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Questao createManyAndReturn
   */
  export type QuestaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * The data used to create many Questaos.
     */
    data: QuestaoCreateManyInput | QuestaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Questao update
   */
  export type QuestaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Questao.
     */
    data: XOR<QuestaoUpdateInput, QuestaoUncheckedUpdateInput>
    /**
     * Choose, which Questao to update.
     */
    where: QuestaoWhereUniqueInput
  }

  /**
   * Questao updateMany
   */
  export type QuestaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questaos.
     */
    data: XOR<QuestaoUpdateManyMutationInput, QuestaoUncheckedUpdateManyInput>
    /**
     * Filter which Questaos to update
     */
    where?: QuestaoWhereInput
    /**
     * Limit how many Questaos to update.
     */
    limit?: number
  }

  /**
   * Questao updateManyAndReturn
   */
  export type QuestaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * The data used to update Questaos.
     */
    data: XOR<QuestaoUpdateManyMutationInput, QuestaoUncheckedUpdateManyInput>
    /**
     * Filter which Questaos to update
     */
    where?: QuestaoWhereInput
    /**
     * Limit how many Questaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Questao upsert
   */
  export type QuestaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Questao to update in case it exists.
     */
    where: QuestaoWhereUniqueInput
    /**
     * In case the Questao found by the `where` argument doesn't exist, create a new Questao with this data.
     */
    create: XOR<QuestaoCreateInput, QuestaoUncheckedCreateInput>
    /**
     * In case the Questao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestaoUpdateInput, QuestaoUncheckedUpdateInput>
  }

  /**
   * Questao delete
   */
  export type QuestaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter which Questao to delete.
     */
    where: QuestaoWhereUniqueInput
  }

  /**
   * Questao deleteMany
   */
  export type QuestaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questaos to delete
     */
    where?: QuestaoWhereInput
    /**
     * Limit how many Questaos to delete.
     */
    limit?: number
  }

  /**
   * Questao without action
   */
  export type QuestaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
  }


  /**
   * Model ResultadoAvaliacao
   */

  export type AggregateResultadoAvaliacao = {
    _count: ResultadoAvaliacaoCountAggregateOutputType | null
    _avg: ResultadoAvaliacaoAvgAggregateOutputType | null
    _sum: ResultadoAvaliacaoSumAggregateOutputType | null
    _min: ResultadoAvaliacaoMinAggregateOutputType | null
    _max: ResultadoAvaliacaoMaxAggregateOutputType | null
  }

  export type ResultadoAvaliacaoAvgAggregateOutputType = {
    respostas: number | null
    pontuacao: number | null
  }

  export type ResultadoAvaliacaoSumAggregateOutputType = {
    respostas: number[]
    pontuacao: number | null
  }

  export type ResultadoAvaliacaoMinAggregateOutputType = {
    id: string | null
    pontuacao: number | null
    aprovado: boolean | null
    dataRealizacao: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    avaliacaoId: string | null
  }

  export type ResultadoAvaliacaoMaxAggregateOutputType = {
    id: string | null
    pontuacao: number | null
    aprovado: boolean | null
    dataRealizacao: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    avaliacaoId: string | null
  }

  export type ResultadoAvaliacaoCountAggregateOutputType = {
    id: number
    respostas: number
    pontuacao: number
    aprovado: number
    dataRealizacao: number
    createdAt: number
    updatedAt: number
    userId: number
    avaliacaoId: number
    _all: number
  }


  export type ResultadoAvaliacaoAvgAggregateInputType = {
    respostas?: true
    pontuacao?: true
  }

  export type ResultadoAvaliacaoSumAggregateInputType = {
    respostas?: true
    pontuacao?: true
  }

  export type ResultadoAvaliacaoMinAggregateInputType = {
    id?: true
    pontuacao?: true
    aprovado?: true
    dataRealizacao?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    avaliacaoId?: true
  }

  export type ResultadoAvaliacaoMaxAggregateInputType = {
    id?: true
    pontuacao?: true
    aprovado?: true
    dataRealizacao?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    avaliacaoId?: true
  }

  export type ResultadoAvaliacaoCountAggregateInputType = {
    id?: true
    respostas?: true
    pontuacao?: true
    aprovado?: true
    dataRealizacao?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    avaliacaoId?: true
    _all?: true
  }

  export type ResultadoAvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResultadoAvaliacao to aggregate.
     */
    where?: ResultadoAvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResultadoAvaliacaos to fetch.
     */
    orderBy?: ResultadoAvaliacaoOrderByWithRelationInput | ResultadoAvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultadoAvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResultadoAvaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResultadoAvaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResultadoAvaliacaos
    **/
    _count?: true | ResultadoAvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultadoAvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultadoAvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultadoAvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultadoAvaliacaoMaxAggregateInputType
  }

  export type GetResultadoAvaliacaoAggregateType<T extends ResultadoAvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateResultadoAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResultadoAvaliacao[P]>
      : GetScalarType<T[P], AggregateResultadoAvaliacao[P]>
  }




  export type ResultadoAvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultadoAvaliacaoWhereInput
    orderBy?: ResultadoAvaliacaoOrderByWithAggregationInput | ResultadoAvaliacaoOrderByWithAggregationInput[]
    by: ResultadoAvaliacaoScalarFieldEnum[] | ResultadoAvaliacaoScalarFieldEnum
    having?: ResultadoAvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultadoAvaliacaoCountAggregateInputType | true
    _avg?: ResultadoAvaliacaoAvgAggregateInputType
    _sum?: ResultadoAvaliacaoSumAggregateInputType
    _min?: ResultadoAvaliacaoMinAggregateInputType
    _max?: ResultadoAvaliacaoMaxAggregateInputType
  }

  export type ResultadoAvaliacaoGroupByOutputType = {
    id: string
    respostas: number[]
    pontuacao: number
    aprovado: boolean
    dataRealizacao: Date
    createdAt: Date
    updatedAt: Date
    userId: string
    avaliacaoId: string
    _count: ResultadoAvaliacaoCountAggregateOutputType | null
    _avg: ResultadoAvaliacaoAvgAggregateOutputType | null
    _sum: ResultadoAvaliacaoSumAggregateOutputType | null
    _min: ResultadoAvaliacaoMinAggregateOutputType | null
    _max: ResultadoAvaliacaoMaxAggregateOutputType | null
  }

  type GetResultadoAvaliacaoGroupByPayload<T extends ResultadoAvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultadoAvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultadoAvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultadoAvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], ResultadoAvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type ResultadoAvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    respostas?: boolean
    pontuacao?: boolean
    aprovado?: boolean
    dataRealizacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    avaliacaoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultadoAvaliacao"]>

  export type ResultadoAvaliacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    respostas?: boolean
    pontuacao?: boolean
    aprovado?: boolean
    dataRealizacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    avaliacaoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultadoAvaliacao"]>

  export type ResultadoAvaliacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    respostas?: boolean
    pontuacao?: boolean
    aprovado?: boolean
    dataRealizacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    avaliacaoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultadoAvaliacao"]>

  export type ResultadoAvaliacaoSelectScalar = {
    id?: boolean
    respostas?: boolean
    pontuacao?: boolean
    aprovado?: boolean
    dataRealizacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    avaliacaoId?: boolean
  }

  export type ResultadoAvaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "respostas" | "pontuacao" | "aprovado" | "dataRealizacao" | "createdAt" | "updatedAt" | "userId" | "avaliacaoId", ExtArgs["result"]["resultadoAvaliacao"]>
  export type ResultadoAvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
  }
  export type ResultadoAvaliacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
  }
  export type ResultadoAvaliacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    avaliacao?: boolean | AvaliacaoDefaultArgs<ExtArgs>
  }

  export type $ResultadoAvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResultadoAvaliacao"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      avaliacao: Prisma.$AvaliacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      respostas: number[]
      pontuacao: number
      aprovado: boolean
      dataRealizacao: Date
      createdAt: Date
      updatedAt: Date
      userId: string
      avaliacaoId: string
    }, ExtArgs["result"]["resultadoAvaliacao"]>
    composites: {}
  }

  type ResultadoAvaliacaoGetPayload<S extends boolean | null | undefined | ResultadoAvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$ResultadoAvaliacaoPayload, S>

  type ResultadoAvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResultadoAvaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultadoAvaliacaoCountAggregateInputType | true
    }

  export interface ResultadoAvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResultadoAvaliacao'], meta: { name: 'ResultadoAvaliacao' } }
    /**
     * Find zero or one ResultadoAvaliacao that matches the filter.
     * @param {ResultadoAvaliacaoFindUniqueArgs} args - Arguments to find a ResultadoAvaliacao
     * @example
     * // Get one ResultadoAvaliacao
     * const resultadoAvaliacao = await prisma.resultadoAvaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResultadoAvaliacaoFindUniqueArgs>(args: SelectSubset<T, ResultadoAvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__ResultadoAvaliacaoClient<$Result.GetResult<Prisma.$ResultadoAvaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResultadoAvaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResultadoAvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a ResultadoAvaliacao
     * @example
     * // Get one ResultadoAvaliacao
     * const resultadoAvaliacao = await prisma.resultadoAvaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResultadoAvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ResultadoAvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResultadoAvaliacaoClient<$Result.GetResult<Prisma.$ResultadoAvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResultadoAvaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoAvaliacaoFindFirstArgs} args - Arguments to find a ResultadoAvaliacao
     * @example
     * // Get one ResultadoAvaliacao
     * const resultadoAvaliacao = await prisma.resultadoAvaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResultadoAvaliacaoFindFirstArgs>(args?: SelectSubset<T, ResultadoAvaliacaoFindFirstArgs<ExtArgs>>): Prisma__ResultadoAvaliacaoClient<$Result.GetResult<Prisma.$ResultadoAvaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResultadoAvaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoAvaliacaoFindFirstOrThrowArgs} args - Arguments to find a ResultadoAvaliacao
     * @example
     * // Get one ResultadoAvaliacao
     * const resultadoAvaliacao = await prisma.resultadoAvaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResultadoAvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ResultadoAvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResultadoAvaliacaoClient<$Result.GetResult<Prisma.$ResultadoAvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResultadoAvaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoAvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResultadoAvaliacaos
     * const resultadoAvaliacaos = await prisma.resultadoAvaliacao.findMany()
     * 
     * // Get first 10 ResultadoAvaliacaos
     * const resultadoAvaliacaos = await prisma.resultadoAvaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultadoAvaliacaoWithIdOnly = await prisma.resultadoAvaliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResultadoAvaliacaoFindManyArgs>(args?: SelectSubset<T, ResultadoAvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadoAvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResultadoAvaliacao.
     * @param {ResultadoAvaliacaoCreateArgs} args - Arguments to create a ResultadoAvaliacao.
     * @example
     * // Create one ResultadoAvaliacao
     * const ResultadoAvaliacao = await prisma.resultadoAvaliacao.create({
     *   data: {
     *     // ... data to create a ResultadoAvaliacao
     *   }
     * })
     * 
     */
    create<T extends ResultadoAvaliacaoCreateArgs>(args: SelectSubset<T, ResultadoAvaliacaoCreateArgs<ExtArgs>>): Prisma__ResultadoAvaliacaoClient<$Result.GetResult<Prisma.$ResultadoAvaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResultadoAvaliacaos.
     * @param {ResultadoAvaliacaoCreateManyArgs} args - Arguments to create many ResultadoAvaliacaos.
     * @example
     * // Create many ResultadoAvaliacaos
     * const resultadoAvaliacao = await prisma.resultadoAvaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResultadoAvaliacaoCreateManyArgs>(args?: SelectSubset<T, ResultadoAvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResultadoAvaliacaos and returns the data saved in the database.
     * @param {ResultadoAvaliacaoCreateManyAndReturnArgs} args - Arguments to create many ResultadoAvaliacaos.
     * @example
     * // Create many ResultadoAvaliacaos
     * const resultadoAvaliacao = await prisma.resultadoAvaliacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResultadoAvaliacaos and only return the `id`
     * const resultadoAvaliacaoWithIdOnly = await prisma.resultadoAvaliacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResultadoAvaliacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ResultadoAvaliacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadoAvaliacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResultadoAvaliacao.
     * @param {ResultadoAvaliacaoDeleteArgs} args - Arguments to delete one ResultadoAvaliacao.
     * @example
     * // Delete one ResultadoAvaliacao
     * const ResultadoAvaliacao = await prisma.resultadoAvaliacao.delete({
     *   where: {
     *     // ... filter to delete one ResultadoAvaliacao
     *   }
     * })
     * 
     */
    delete<T extends ResultadoAvaliacaoDeleteArgs>(args: SelectSubset<T, ResultadoAvaliacaoDeleteArgs<ExtArgs>>): Prisma__ResultadoAvaliacaoClient<$Result.GetResult<Prisma.$ResultadoAvaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResultadoAvaliacao.
     * @param {ResultadoAvaliacaoUpdateArgs} args - Arguments to update one ResultadoAvaliacao.
     * @example
     * // Update one ResultadoAvaliacao
     * const resultadoAvaliacao = await prisma.resultadoAvaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResultadoAvaliacaoUpdateArgs>(args: SelectSubset<T, ResultadoAvaliacaoUpdateArgs<ExtArgs>>): Prisma__ResultadoAvaliacaoClient<$Result.GetResult<Prisma.$ResultadoAvaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResultadoAvaliacaos.
     * @param {ResultadoAvaliacaoDeleteManyArgs} args - Arguments to filter ResultadoAvaliacaos to delete.
     * @example
     * // Delete a few ResultadoAvaliacaos
     * const { count } = await prisma.resultadoAvaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResultadoAvaliacaoDeleteManyArgs>(args?: SelectSubset<T, ResultadoAvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResultadoAvaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoAvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResultadoAvaliacaos
     * const resultadoAvaliacao = await prisma.resultadoAvaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResultadoAvaliacaoUpdateManyArgs>(args: SelectSubset<T, ResultadoAvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResultadoAvaliacaos and returns the data updated in the database.
     * @param {ResultadoAvaliacaoUpdateManyAndReturnArgs} args - Arguments to update many ResultadoAvaliacaos.
     * @example
     * // Update many ResultadoAvaliacaos
     * const resultadoAvaliacao = await prisma.resultadoAvaliacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResultadoAvaliacaos and only return the `id`
     * const resultadoAvaliacaoWithIdOnly = await prisma.resultadoAvaliacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResultadoAvaliacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ResultadoAvaliacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadoAvaliacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResultadoAvaliacao.
     * @param {ResultadoAvaliacaoUpsertArgs} args - Arguments to update or create a ResultadoAvaliacao.
     * @example
     * // Update or create a ResultadoAvaliacao
     * const resultadoAvaliacao = await prisma.resultadoAvaliacao.upsert({
     *   create: {
     *     // ... data to create a ResultadoAvaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResultadoAvaliacao we want to update
     *   }
     * })
     */
    upsert<T extends ResultadoAvaliacaoUpsertArgs>(args: SelectSubset<T, ResultadoAvaliacaoUpsertArgs<ExtArgs>>): Prisma__ResultadoAvaliacaoClient<$Result.GetResult<Prisma.$ResultadoAvaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResultadoAvaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoAvaliacaoCountArgs} args - Arguments to filter ResultadoAvaliacaos to count.
     * @example
     * // Count the number of ResultadoAvaliacaos
     * const count = await prisma.resultadoAvaliacao.count({
     *   where: {
     *     // ... the filter for the ResultadoAvaliacaos we want to count
     *   }
     * })
    **/
    count<T extends ResultadoAvaliacaoCountArgs>(
      args?: Subset<T, ResultadoAvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultadoAvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResultadoAvaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoAvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResultadoAvaliacaoAggregateArgs>(args: Subset<T, ResultadoAvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetResultadoAvaliacaoAggregateType<T>>

    /**
     * Group by ResultadoAvaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoAvaliacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResultadoAvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultadoAvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: ResultadoAvaliacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResultadoAvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultadoAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResultadoAvaliacao model
   */
  readonly fields: ResultadoAvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResultadoAvaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultadoAvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    avaliacao<T extends AvaliacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvaliacaoDefaultArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResultadoAvaliacao model
   */
  interface ResultadoAvaliacaoFieldRefs {
    readonly id: FieldRef<"ResultadoAvaliacao", 'String'>
    readonly respostas: FieldRef<"ResultadoAvaliacao", 'Int[]'>
    readonly pontuacao: FieldRef<"ResultadoAvaliacao", 'Int'>
    readonly aprovado: FieldRef<"ResultadoAvaliacao", 'Boolean'>
    readonly dataRealizacao: FieldRef<"ResultadoAvaliacao", 'DateTime'>
    readonly createdAt: FieldRef<"ResultadoAvaliacao", 'DateTime'>
    readonly updatedAt: FieldRef<"ResultadoAvaliacao", 'DateTime'>
    readonly userId: FieldRef<"ResultadoAvaliacao", 'String'>
    readonly avaliacaoId: FieldRef<"ResultadoAvaliacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ResultadoAvaliacao findUnique
   */
  export type ResultadoAvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoAvaliacao
     */
    select?: ResultadoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoAvaliacao
     */
    omit?: ResultadoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which ResultadoAvaliacao to fetch.
     */
    where: ResultadoAvaliacaoWhereUniqueInput
  }

  /**
   * ResultadoAvaliacao findUniqueOrThrow
   */
  export type ResultadoAvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoAvaliacao
     */
    select?: ResultadoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoAvaliacao
     */
    omit?: ResultadoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which ResultadoAvaliacao to fetch.
     */
    where: ResultadoAvaliacaoWhereUniqueInput
  }

  /**
   * ResultadoAvaliacao findFirst
   */
  export type ResultadoAvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoAvaliacao
     */
    select?: ResultadoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoAvaliacao
     */
    omit?: ResultadoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which ResultadoAvaliacao to fetch.
     */
    where?: ResultadoAvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResultadoAvaliacaos to fetch.
     */
    orderBy?: ResultadoAvaliacaoOrderByWithRelationInput | ResultadoAvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResultadoAvaliacaos.
     */
    cursor?: ResultadoAvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResultadoAvaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResultadoAvaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResultadoAvaliacaos.
     */
    distinct?: ResultadoAvaliacaoScalarFieldEnum | ResultadoAvaliacaoScalarFieldEnum[]
  }

  /**
   * ResultadoAvaliacao findFirstOrThrow
   */
  export type ResultadoAvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoAvaliacao
     */
    select?: ResultadoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoAvaliacao
     */
    omit?: ResultadoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which ResultadoAvaliacao to fetch.
     */
    where?: ResultadoAvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResultadoAvaliacaos to fetch.
     */
    orderBy?: ResultadoAvaliacaoOrderByWithRelationInput | ResultadoAvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResultadoAvaliacaos.
     */
    cursor?: ResultadoAvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResultadoAvaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResultadoAvaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResultadoAvaliacaos.
     */
    distinct?: ResultadoAvaliacaoScalarFieldEnum | ResultadoAvaliacaoScalarFieldEnum[]
  }

  /**
   * ResultadoAvaliacao findMany
   */
  export type ResultadoAvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoAvaliacao
     */
    select?: ResultadoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoAvaliacao
     */
    omit?: ResultadoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which ResultadoAvaliacaos to fetch.
     */
    where?: ResultadoAvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResultadoAvaliacaos to fetch.
     */
    orderBy?: ResultadoAvaliacaoOrderByWithRelationInput | ResultadoAvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResultadoAvaliacaos.
     */
    cursor?: ResultadoAvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResultadoAvaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResultadoAvaliacaos.
     */
    skip?: number
    distinct?: ResultadoAvaliacaoScalarFieldEnum | ResultadoAvaliacaoScalarFieldEnum[]
  }

  /**
   * ResultadoAvaliacao create
   */
  export type ResultadoAvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoAvaliacao
     */
    select?: ResultadoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoAvaliacao
     */
    omit?: ResultadoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoAvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a ResultadoAvaliacao.
     */
    data: XOR<ResultadoAvaliacaoCreateInput, ResultadoAvaliacaoUncheckedCreateInput>
  }

  /**
   * ResultadoAvaliacao createMany
   */
  export type ResultadoAvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResultadoAvaliacaos.
     */
    data: ResultadoAvaliacaoCreateManyInput | ResultadoAvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResultadoAvaliacao createManyAndReturn
   */
  export type ResultadoAvaliacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoAvaliacao
     */
    select?: ResultadoAvaliacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoAvaliacao
     */
    omit?: ResultadoAvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to create many ResultadoAvaliacaos.
     */
    data: ResultadoAvaliacaoCreateManyInput | ResultadoAvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoAvaliacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResultadoAvaliacao update
   */
  export type ResultadoAvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoAvaliacao
     */
    select?: ResultadoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoAvaliacao
     */
    omit?: ResultadoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoAvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a ResultadoAvaliacao.
     */
    data: XOR<ResultadoAvaliacaoUpdateInput, ResultadoAvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which ResultadoAvaliacao to update.
     */
    where: ResultadoAvaliacaoWhereUniqueInput
  }

  /**
   * ResultadoAvaliacao updateMany
   */
  export type ResultadoAvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResultadoAvaliacaos.
     */
    data: XOR<ResultadoAvaliacaoUpdateManyMutationInput, ResultadoAvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which ResultadoAvaliacaos to update
     */
    where?: ResultadoAvaliacaoWhereInput
    /**
     * Limit how many ResultadoAvaliacaos to update.
     */
    limit?: number
  }

  /**
   * ResultadoAvaliacao updateManyAndReturn
   */
  export type ResultadoAvaliacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoAvaliacao
     */
    select?: ResultadoAvaliacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoAvaliacao
     */
    omit?: ResultadoAvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to update ResultadoAvaliacaos.
     */
    data: XOR<ResultadoAvaliacaoUpdateManyMutationInput, ResultadoAvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which ResultadoAvaliacaos to update
     */
    where?: ResultadoAvaliacaoWhereInput
    /**
     * Limit how many ResultadoAvaliacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoAvaliacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResultadoAvaliacao upsert
   */
  export type ResultadoAvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoAvaliacao
     */
    select?: ResultadoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoAvaliacao
     */
    omit?: ResultadoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoAvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the ResultadoAvaliacao to update in case it exists.
     */
    where: ResultadoAvaliacaoWhereUniqueInput
    /**
     * In case the ResultadoAvaliacao found by the `where` argument doesn't exist, create a new ResultadoAvaliacao with this data.
     */
    create: XOR<ResultadoAvaliacaoCreateInput, ResultadoAvaliacaoUncheckedCreateInput>
    /**
     * In case the ResultadoAvaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultadoAvaliacaoUpdateInput, ResultadoAvaliacaoUncheckedUpdateInput>
  }

  /**
   * ResultadoAvaliacao delete
   */
  export type ResultadoAvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoAvaliacao
     */
    select?: ResultadoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoAvaliacao
     */
    omit?: ResultadoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoAvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which ResultadoAvaliacao to delete.
     */
    where: ResultadoAvaliacaoWhereUniqueInput
  }

  /**
   * ResultadoAvaliacao deleteMany
   */
  export type ResultadoAvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResultadoAvaliacaos to delete
     */
    where?: ResultadoAvaliacaoWhereInput
    /**
     * Limit how many ResultadoAvaliacaos to delete.
     */
    limit?: number
  }

  /**
   * ResultadoAvaliacao without action
   */
  export type ResultadoAvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultadoAvaliacao
     */
    select?: ResultadoAvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultadoAvaliacao
     */
    omit?: ResultadoAvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoAvaliacaoInclude<ExtArgs> | null
  }


  /**
   * Model Certificado
   */

  export type AggregateCertificado = {
    _count: CertificadoCountAggregateOutputType | null
    _min: CertificadoMinAggregateOutputType | null
    _max: CertificadoMaxAggregateOutputType | null
  }

  export type CertificadoMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    codigo: string | null
    dataEmissao: Date | null
    dataValidade: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CertificadoMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    codigo: string | null
    dataEmissao: Date | null
    dataValidade: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CertificadoCountAggregateOutputType = {
    id: number
    titulo: number
    codigo: number
    dataEmissao: number
    dataValidade: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type CertificadoMinAggregateInputType = {
    id?: true
    titulo?: true
    codigo?: true
    dataEmissao?: true
    dataValidade?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CertificadoMaxAggregateInputType = {
    id?: true
    titulo?: true
    codigo?: true
    dataEmissao?: true
    dataValidade?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CertificadoCountAggregateInputType = {
    id?: true
    titulo?: true
    codigo?: true
    dataEmissao?: true
    dataValidade?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type CertificadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificado to aggregate.
     */
    where?: CertificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificados to fetch.
     */
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificados
    **/
    _count?: true | CertificadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificadoMaxAggregateInputType
  }

  export type GetCertificadoAggregateType<T extends CertificadoAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificado[P]>
      : GetScalarType<T[P], AggregateCertificado[P]>
  }




  export type CertificadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificadoWhereInput
    orderBy?: CertificadoOrderByWithAggregationInput | CertificadoOrderByWithAggregationInput[]
    by: CertificadoScalarFieldEnum[] | CertificadoScalarFieldEnum
    having?: CertificadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificadoCountAggregateInputType | true
    _min?: CertificadoMinAggregateInputType
    _max?: CertificadoMaxAggregateInputType
  }

  export type CertificadoGroupByOutputType = {
    id: string
    titulo: string
    codigo: string
    dataEmissao: Date
    dataValidade: Date
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: CertificadoCountAggregateOutputType | null
    _min: CertificadoMinAggregateOutputType | null
    _max: CertificadoMaxAggregateOutputType | null
  }

  type GetCertificadoGroupByPayload<T extends CertificadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificadoGroupByOutputType[P]>
            : GetScalarType<T[P], CertificadoGroupByOutputType[P]>
        }
      >
    >


  export type CertificadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    codigo?: boolean
    dataEmissao?: boolean
    dataValidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificado"]>

  export type CertificadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    codigo?: boolean
    dataEmissao?: boolean
    dataValidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificado"]>

  export type CertificadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    codigo?: boolean
    dataEmissao?: boolean
    dataValidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificado"]>

  export type CertificadoSelectScalar = {
    id?: boolean
    titulo?: boolean
    codigo?: boolean
    dataEmissao?: boolean
    dataValidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type CertificadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "codigo" | "dataEmissao" | "dataValidade" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["certificado"]>
  export type CertificadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CertificadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CertificadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CertificadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificado"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      codigo: string
      dataEmissao: Date
      dataValidade: Date
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["certificado"]>
    composites: {}
  }

  type CertificadoGetPayload<S extends boolean | null | undefined | CertificadoDefaultArgs> = $Result.GetResult<Prisma.$CertificadoPayload, S>

  type CertificadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificadoCountAggregateInputType | true
    }

  export interface CertificadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificado'], meta: { name: 'Certificado' } }
    /**
     * Find zero or one Certificado that matches the filter.
     * @param {CertificadoFindUniqueArgs} args - Arguments to find a Certificado
     * @example
     * // Get one Certificado
     * const certificado = await prisma.certificado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificadoFindUniqueArgs>(args: SelectSubset<T, CertificadoFindUniqueArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certificado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificadoFindUniqueOrThrowArgs} args - Arguments to find a Certificado
     * @example
     * // Get one Certificado
     * const certificado = await prisma.certificado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificadoFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoFindFirstArgs} args - Arguments to find a Certificado
     * @example
     * // Get one Certificado
     * const certificado = await prisma.certificado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificadoFindFirstArgs>(args?: SelectSubset<T, CertificadoFindFirstArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoFindFirstOrThrowArgs} args - Arguments to find a Certificado
     * @example
     * // Get one Certificado
     * const certificado = await prisma.certificado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificadoFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificados
     * const certificados = await prisma.certificado.findMany()
     * 
     * // Get first 10 Certificados
     * const certificados = await prisma.certificado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificadoWithIdOnly = await prisma.certificado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificadoFindManyArgs>(args?: SelectSubset<T, CertificadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certificado.
     * @param {CertificadoCreateArgs} args - Arguments to create a Certificado.
     * @example
     * // Create one Certificado
     * const Certificado = await prisma.certificado.create({
     *   data: {
     *     // ... data to create a Certificado
     *   }
     * })
     * 
     */
    create<T extends CertificadoCreateArgs>(args: SelectSubset<T, CertificadoCreateArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certificados.
     * @param {CertificadoCreateManyArgs} args - Arguments to create many Certificados.
     * @example
     * // Create many Certificados
     * const certificado = await prisma.certificado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificadoCreateManyArgs>(args?: SelectSubset<T, CertificadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificados and returns the data saved in the database.
     * @param {CertificadoCreateManyAndReturnArgs} args - Arguments to create many Certificados.
     * @example
     * // Create many Certificados
     * const certificado = await prisma.certificado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificados and only return the `id`
     * const certificadoWithIdOnly = await prisma.certificado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificadoCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Certificado.
     * @param {CertificadoDeleteArgs} args - Arguments to delete one Certificado.
     * @example
     * // Delete one Certificado
     * const Certificado = await prisma.certificado.delete({
     *   where: {
     *     // ... filter to delete one Certificado
     *   }
     * })
     * 
     */
    delete<T extends CertificadoDeleteArgs>(args: SelectSubset<T, CertificadoDeleteArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certificado.
     * @param {CertificadoUpdateArgs} args - Arguments to update one Certificado.
     * @example
     * // Update one Certificado
     * const certificado = await prisma.certificado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificadoUpdateArgs>(args: SelectSubset<T, CertificadoUpdateArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certificados.
     * @param {CertificadoDeleteManyArgs} args - Arguments to filter Certificados to delete.
     * @example
     * // Delete a few Certificados
     * const { count } = await prisma.certificado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificadoDeleteManyArgs>(args?: SelectSubset<T, CertificadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificados
     * const certificado = await prisma.certificado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificadoUpdateManyArgs>(args: SelectSubset<T, CertificadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificados and returns the data updated in the database.
     * @param {CertificadoUpdateManyAndReturnArgs} args - Arguments to update many Certificados.
     * @example
     * // Update many Certificados
     * const certificado = await prisma.certificado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Certificados and only return the `id`
     * const certificadoWithIdOnly = await prisma.certificado.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CertificadoUpdateManyAndReturnArgs>(args: SelectSubset<T, CertificadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Certificado.
     * @param {CertificadoUpsertArgs} args - Arguments to update or create a Certificado.
     * @example
     * // Update or create a Certificado
     * const certificado = await prisma.certificado.upsert({
     *   create: {
     *     // ... data to create a Certificado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificado we want to update
     *   }
     * })
     */
    upsert<T extends CertificadoUpsertArgs>(args: SelectSubset<T, CertificadoUpsertArgs<ExtArgs>>): Prisma__CertificadoClient<$Result.GetResult<Prisma.$CertificadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Certificados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoCountArgs} args - Arguments to filter Certificados to count.
     * @example
     * // Count the number of Certificados
     * const count = await prisma.certificado.count({
     *   where: {
     *     // ... the filter for the Certificados we want to count
     *   }
     * })
    **/
    count<T extends CertificadoCountArgs>(
      args?: Subset<T, CertificadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CertificadoAggregateArgs>(args: Subset<T, CertificadoAggregateArgs>): Prisma.PrismaPromise<GetCertificadoAggregateType<T>>

    /**
     * Group by Certificado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CertificadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificadoGroupByArgs['orderBy'] }
        : { orderBy?: CertificadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CertificadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificado model
   */
  readonly fields: CertificadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Certificado model
   */
  interface CertificadoFieldRefs {
    readonly id: FieldRef<"Certificado", 'String'>
    readonly titulo: FieldRef<"Certificado", 'String'>
    readonly codigo: FieldRef<"Certificado", 'String'>
    readonly dataEmissao: FieldRef<"Certificado", 'DateTime'>
    readonly dataValidade: FieldRef<"Certificado", 'DateTime'>
    readonly createdAt: FieldRef<"Certificado", 'DateTime'>
    readonly updatedAt: FieldRef<"Certificado", 'DateTime'>
    readonly userId: FieldRef<"Certificado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Certificado findUnique
   */
  export type CertificadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificado to fetch.
     */
    where: CertificadoWhereUniqueInput
  }

  /**
   * Certificado findUniqueOrThrow
   */
  export type CertificadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificado to fetch.
     */
    where: CertificadoWhereUniqueInput
  }

  /**
   * Certificado findFirst
   */
  export type CertificadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificado to fetch.
     */
    where?: CertificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificados to fetch.
     */
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificados.
     */
    cursor?: CertificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificados.
     */
    distinct?: CertificadoScalarFieldEnum | CertificadoScalarFieldEnum[]
  }

  /**
   * Certificado findFirstOrThrow
   */
  export type CertificadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificado to fetch.
     */
    where?: CertificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificados to fetch.
     */
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificados.
     */
    cursor?: CertificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificados.
     */
    distinct?: CertificadoScalarFieldEnum | CertificadoScalarFieldEnum[]
  }

  /**
   * Certificado findMany
   */
  export type CertificadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter, which Certificados to fetch.
     */
    where?: CertificadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificados to fetch.
     */
    orderBy?: CertificadoOrderByWithRelationInput | CertificadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificados.
     */
    cursor?: CertificadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificados.
     */
    skip?: number
    distinct?: CertificadoScalarFieldEnum | CertificadoScalarFieldEnum[]
  }

  /**
   * Certificado create
   */
  export type CertificadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificado.
     */
    data: XOR<CertificadoCreateInput, CertificadoUncheckedCreateInput>
  }

  /**
   * Certificado createMany
   */
  export type CertificadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificados.
     */
    data: CertificadoCreateManyInput | CertificadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificado createManyAndReturn
   */
  export type CertificadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * The data used to create many Certificados.
     */
    data: CertificadoCreateManyInput | CertificadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificado update
   */
  export type CertificadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificado.
     */
    data: XOR<CertificadoUpdateInput, CertificadoUncheckedUpdateInput>
    /**
     * Choose, which Certificado to update.
     */
    where: CertificadoWhereUniqueInput
  }

  /**
   * Certificado updateMany
   */
  export type CertificadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificados.
     */
    data: XOR<CertificadoUpdateManyMutationInput, CertificadoUncheckedUpdateManyInput>
    /**
     * Filter which Certificados to update
     */
    where?: CertificadoWhereInput
    /**
     * Limit how many Certificados to update.
     */
    limit?: number
  }

  /**
   * Certificado updateManyAndReturn
   */
  export type CertificadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * The data used to update Certificados.
     */
    data: XOR<CertificadoUpdateManyMutationInput, CertificadoUncheckedUpdateManyInput>
    /**
     * Filter which Certificados to update
     */
    where?: CertificadoWhereInput
    /**
     * Limit how many Certificados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificado upsert
   */
  export type CertificadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificado to update in case it exists.
     */
    where: CertificadoWhereUniqueInput
    /**
     * In case the Certificado found by the `where` argument doesn't exist, create a new Certificado with this data.
     */
    create: XOR<CertificadoCreateInput, CertificadoUncheckedCreateInput>
    /**
     * In case the Certificado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificadoUpdateInput, CertificadoUncheckedUpdateInput>
  }

  /**
   * Certificado delete
   */
  export type CertificadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
    /**
     * Filter which Certificado to delete.
     */
    where: CertificadoWhereUniqueInput
  }

  /**
   * Certificado deleteMany
   */
  export type CertificadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificados to delete
     */
    where?: CertificadoWhereInput
    /**
     * Limit how many Certificados to delete.
     */
    limit?: number
  }

  /**
   * Certificado without action
   */
  export type CertificadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificado
     */
    select?: CertificadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificado
     */
    omit?: CertificadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificadoInclude<ExtArgs> | null
  }


  /**
   * Model Arquivo
   */

  export type AggregateArquivo = {
    _count: ArquivoCountAggregateOutputType | null
    _avg: ArquivoAvgAggregateOutputType | null
    _sum: ArquivoSumAggregateOutputType | null
    _min: ArquivoMinAggregateOutputType | null
    _max: ArquivoMaxAggregateOutputType | null
  }

  export type ArquivoAvgAggregateOutputType = {
    tamanho: number | null
  }

  export type ArquivoSumAggregateOutputType = {
    tamanho: number | null
  }

  export type ArquivoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    caminho: string | null
    tipo: string | null
    tamanho: number | null
    entidadeTipo: string | null
    entidadeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArquivoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    caminho: string | null
    tipo: string | null
    tamanho: number | null
    entidadeTipo: string | null
    entidadeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArquivoCountAggregateOutputType = {
    id: number
    nome: number
    caminho: number
    tipo: number
    tamanho: number
    entidadeTipo: number
    entidadeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArquivoAvgAggregateInputType = {
    tamanho?: true
  }

  export type ArquivoSumAggregateInputType = {
    tamanho?: true
  }

  export type ArquivoMinAggregateInputType = {
    id?: true
    nome?: true
    caminho?: true
    tipo?: true
    tamanho?: true
    entidadeTipo?: true
    entidadeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArquivoMaxAggregateInputType = {
    id?: true
    nome?: true
    caminho?: true
    tipo?: true
    tamanho?: true
    entidadeTipo?: true
    entidadeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArquivoCountAggregateInputType = {
    id?: true
    nome?: true
    caminho?: true
    tipo?: true
    tamanho?: true
    entidadeTipo?: true
    entidadeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArquivoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arquivo to aggregate.
     */
    where?: ArquivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arquivos to fetch.
     */
    orderBy?: ArquivoOrderByWithRelationInput | ArquivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArquivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arquivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arquivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Arquivos
    **/
    _count?: true | ArquivoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArquivoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArquivoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArquivoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArquivoMaxAggregateInputType
  }

  export type GetArquivoAggregateType<T extends ArquivoAggregateArgs> = {
        [P in keyof T & keyof AggregateArquivo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArquivo[P]>
      : GetScalarType<T[P], AggregateArquivo[P]>
  }




  export type ArquivoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArquivoWhereInput
    orderBy?: ArquivoOrderByWithAggregationInput | ArquivoOrderByWithAggregationInput[]
    by: ArquivoScalarFieldEnum[] | ArquivoScalarFieldEnum
    having?: ArquivoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArquivoCountAggregateInputType | true
    _avg?: ArquivoAvgAggregateInputType
    _sum?: ArquivoSumAggregateInputType
    _min?: ArquivoMinAggregateInputType
    _max?: ArquivoMaxAggregateInputType
  }

  export type ArquivoGroupByOutputType = {
    id: string
    nome: string
    caminho: string
    tipo: string
    tamanho: number
    entidadeTipo: string
    entidadeId: string
    createdAt: Date
    updatedAt: Date
    _count: ArquivoCountAggregateOutputType | null
    _avg: ArquivoAvgAggregateOutputType | null
    _sum: ArquivoSumAggregateOutputType | null
    _min: ArquivoMinAggregateOutputType | null
    _max: ArquivoMaxAggregateOutputType | null
  }

  type GetArquivoGroupByPayload<T extends ArquivoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArquivoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArquivoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArquivoGroupByOutputType[P]>
            : GetScalarType<T[P], ArquivoGroupByOutputType[P]>
        }
      >
    >


  export type ArquivoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    caminho?: boolean
    tipo?: boolean
    tamanho?: boolean
    entidadeTipo?: boolean
    entidadeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["arquivo"]>

  export type ArquivoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    caminho?: boolean
    tipo?: boolean
    tamanho?: boolean
    entidadeTipo?: boolean
    entidadeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["arquivo"]>

  export type ArquivoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    caminho?: boolean
    tipo?: boolean
    tamanho?: boolean
    entidadeTipo?: boolean
    entidadeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["arquivo"]>

  export type ArquivoSelectScalar = {
    id?: boolean
    nome?: boolean
    caminho?: boolean
    tipo?: boolean
    tamanho?: boolean
    entidadeTipo?: boolean
    entidadeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArquivoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "caminho" | "tipo" | "tamanho" | "entidadeTipo" | "entidadeId" | "createdAt" | "updatedAt", ExtArgs["result"]["arquivo"]>

  export type $ArquivoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Arquivo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      caminho: string
      tipo: string
      tamanho: number
      entidadeTipo: string
      entidadeId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["arquivo"]>
    composites: {}
  }

  type ArquivoGetPayload<S extends boolean | null | undefined | ArquivoDefaultArgs> = $Result.GetResult<Prisma.$ArquivoPayload, S>

  type ArquivoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArquivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArquivoCountAggregateInputType | true
    }

  export interface ArquivoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Arquivo'], meta: { name: 'Arquivo' } }
    /**
     * Find zero or one Arquivo that matches the filter.
     * @param {ArquivoFindUniqueArgs} args - Arguments to find a Arquivo
     * @example
     * // Get one Arquivo
     * const arquivo = await prisma.arquivo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArquivoFindUniqueArgs>(args: SelectSubset<T, ArquivoFindUniqueArgs<ExtArgs>>): Prisma__ArquivoClient<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Arquivo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArquivoFindUniqueOrThrowArgs} args - Arguments to find a Arquivo
     * @example
     * // Get one Arquivo
     * const arquivo = await prisma.arquivo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArquivoFindUniqueOrThrowArgs>(args: SelectSubset<T, ArquivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArquivoClient<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arquivo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArquivoFindFirstArgs} args - Arguments to find a Arquivo
     * @example
     * // Get one Arquivo
     * const arquivo = await prisma.arquivo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArquivoFindFirstArgs>(args?: SelectSubset<T, ArquivoFindFirstArgs<ExtArgs>>): Prisma__ArquivoClient<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arquivo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArquivoFindFirstOrThrowArgs} args - Arguments to find a Arquivo
     * @example
     * // Get one Arquivo
     * const arquivo = await prisma.arquivo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArquivoFindFirstOrThrowArgs>(args?: SelectSubset<T, ArquivoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArquivoClient<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Arquivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArquivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Arquivos
     * const arquivos = await prisma.arquivo.findMany()
     * 
     * // Get first 10 Arquivos
     * const arquivos = await prisma.arquivo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arquivoWithIdOnly = await prisma.arquivo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArquivoFindManyArgs>(args?: SelectSubset<T, ArquivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Arquivo.
     * @param {ArquivoCreateArgs} args - Arguments to create a Arquivo.
     * @example
     * // Create one Arquivo
     * const Arquivo = await prisma.arquivo.create({
     *   data: {
     *     // ... data to create a Arquivo
     *   }
     * })
     * 
     */
    create<T extends ArquivoCreateArgs>(args: SelectSubset<T, ArquivoCreateArgs<ExtArgs>>): Prisma__ArquivoClient<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Arquivos.
     * @param {ArquivoCreateManyArgs} args - Arguments to create many Arquivos.
     * @example
     * // Create many Arquivos
     * const arquivo = await prisma.arquivo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArquivoCreateManyArgs>(args?: SelectSubset<T, ArquivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Arquivos and returns the data saved in the database.
     * @param {ArquivoCreateManyAndReturnArgs} args - Arguments to create many Arquivos.
     * @example
     * // Create many Arquivos
     * const arquivo = await prisma.arquivo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Arquivos and only return the `id`
     * const arquivoWithIdOnly = await prisma.arquivo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArquivoCreateManyAndReturnArgs>(args?: SelectSubset<T, ArquivoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Arquivo.
     * @param {ArquivoDeleteArgs} args - Arguments to delete one Arquivo.
     * @example
     * // Delete one Arquivo
     * const Arquivo = await prisma.arquivo.delete({
     *   where: {
     *     // ... filter to delete one Arquivo
     *   }
     * })
     * 
     */
    delete<T extends ArquivoDeleteArgs>(args: SelectSubset<T, ArquivoDeleteArgs<ExtArgs>>): Prisma__ArquivoClient<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Arquivo.
     * @param {ArquivoUpdateArgs} args - Arguments to update one Arquivo.
     * @example
     * // Update one Arquivo
     * const arquivo = await prisma.arquivo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArquivoUpdateArgs>(args: SelectSubset<T, ArquivoUpdateArgs<ExtArgs>>): Prisma__ArquivoClient<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Arquivos.
     * @param {ArquivoDeleteManyArgs} args - Arguments to filter Arquivos to delete.
     * @example
     * // Delete a few Arquivos
     * const { count } = await prisma.arquivo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArquivoDeleteManyArgs>(args?: SelectSubset<T, ArquivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arquivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArquivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Arquivos
     * const arquivo = await prisma.arquivo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArquivoUpdateManyArgs>(args: SelectSubset<T, ArquivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arquivos and returns the data updated in the database.
     * @param {ArquivoUpdateManyAndReturnArgs} args - Arguments to update many Arquivos.
     * @example
     * // Update many Arquivos
     * const arquivo = await prisma.arquivo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Arquivos and only return the `id`
     * const arquivoWithIdOnly = await prisma.arquivo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArquivoUpdateManyAndReturnArgs>(args: SelectSubset<T, ArquivoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Arquivo.
     * @param {ArquivoUpsertArgs} args - Arguments to update or create a Arquivo.
     * @example
     * // Update or create a Arquivo
     * const arquivo = await prisma.arquivo.upsert({
     *   create: {
     *     // ... data to create a Arquivo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Arquivo we want to update
     *   }
     * })
     */
    upsert<T extends ArquivoUpsertArgs>(args: SelectSubset<T, ArquivoUpsertArgs<ExtArgs>>): Prisma__ArquivoClient<$Result.GetResult<Prisma.$ArquivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Arquivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArquivoCountArgs} args - Arguments to filter Arquivos to count.
     * @example
     * // Count the number of Arquivos
     * const count = await prisma.arquivo.count({
     *   where: {
     *     // ... the filter for the Arquivos we want to count
     *   }
     * })
    **/
    count<T extends ArquivoCountArgs>(
      args?: Subset<T, ArquivoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArquivoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Arquivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArquivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArquivoAggregateArgs>(args: Subset<T, ArquivoAggregateArgs>): Prisma.PrismaPromise<GetArquivoAggregateType<T>>

    /**
     * Group by Arquivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArquivoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArquivoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArquivoGroupByArgs['orderBy'] }
        : { orderBy?: ArquivoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArquivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArquivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Arquivo model
   */
  readonly fields: ArquivoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Arquivo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArquivoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Arquivo model
   */
  interface ArquivoFieldRefs {
    readonly id: FieldRef<"Arquivo", 'String'>
    readonly nome: FieldRef<"Arquivo", 'String'>
    readonly caminho: FieldRef<"Arquivo", 'String'>
    readonly tipo: FieldRef<"Arquivo", 'String'>
    readonly tamanho: FieldRef<"Arquivo", 'Int'>
    readonly entidadeTipo: FieldRef<"Arquivo", 'String'>
    readonly entidadeId: FieldRef<"Arquivo", 'String'>
    readonly createdAt: FieldRef<"Arquivo", 'DateTime'>
    readonly updatedAt: FieldRef<"Arquivo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Arquivo findUnique
   */
  export type ArquivoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * Filter, which Arquivo to fetch.
     */
    where: ArquivoWhereUniqueInput
  }

  /**
   * Arquivo findUniqueOrThrow
   */
  export type ArquivoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * Filter, which Arquivo to fetch.
     */
    where: ArquivoWhereUniqueInput
  }

  /**
   * Arquivo findFirst
   */
  export type ArquivoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * Filter, which Arquivo to fetch.
     */
    where?: ArquivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arquivos to fetch.
     */
    orderBy?: ArquivoOrderByWithRelationInput | ArquivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arquivos.
     */
    cursor?: ArquivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arquivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arquivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arquivos.
     */
    distinct?: ArquivoScalarFieldEnum | ArquivoScalarFieldEnum[]
  }

  /**
   * Arquivo findFirstOrThrow
   */
  export type ArquivoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * Filter, which Arquivo to fetch.
     */
    where?: ArquivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arquivos to fetch.
     */
    orderBy?: ArquivoOrderByWithRelationInput | ArquivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arquivos.
     */
    cursor?: ArquivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arquivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arquivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arquivos.
     */
    distinct?: ArquivoScalarFieldEnum | ArquivoScalarFieldEnum[]
  }

  /**
   * Arquivo findMany
   */
  export type ArquivoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * Filter, which Arquivos to fetch.
     */
    where?: ArquivoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arquivos to fetch.
     */
    orderBy?: ArquivoOrderByWithRelationInput | ArquivoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Arquivos.
     */
    cursor?: ArquivoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arquivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arquivos.
     */
    skip?: number
    distinct?: ArquivoScalarFieldEnum | ArquivoScalarFieldEnum[]
  }

  /**
   * Arquivo create
   */
  export type ArquivoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * The data needed to create a Arquivo.
     */
    data: XOR<ArquivoCreateInput, ArquivoUncheckedCreateInput>
  }

  /**
   * Arquivo createMany
   */
  export type ArquivoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Arquivos.
     */
    data: ArquivoCreateManyInput | ArquivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Arquivo createManyAndReturn
   */
  export type ArquivoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * The data used to create many Arquivos.
     */
    data: ArquivoCreateManyInput | ArquivoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Arquivo update
   */
  export type ArquivoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * The data needed to update a Arquivo.
     */
    data: XOR<ArquivoUpdateInput, ArquivoUncheckedUpdateInput>
    /**
     * Choose, which Arquivo to update.
     */
    where: ArquivoWhereUniqueInput
  }

  /**
   * Arquivo updateMany
   */
  export type ArquivoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Arquivos.
     */
    data: XOR<ArquivoUpdateManyMutationInput, ArquivoUncheckedUpdateManyInput>
    /**
     * Filter which Arquivos to update
     */
    where?: ArquivoWhereInput
    /**
     * Limit how many Arquivos to update.
     */
    limit?: number
  }

  /**
   * Arquivo updateManyAndReturn
   */
  export type ArquivoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * The data used to update Arquivos.
     */
    data: XOR<ArquivoUpdateManyMutationInput, ArquivoUncheckedUpdateManyInput>
    /**
     * Filter which Arquivos to update
     */
    where?: ArquivoWhereInput
    /**
     * Limit how many Arquivos to update.
     */
    limit?: number
  }

  /**
   * Arquivo upsert
   */
  export type ArquivoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * The filter to search for the Arquivo to update in case it exists.
     */
    where: ArquivoWhereUniqueInput
    /**
     * In case the Arquivo found by the `where` argument doesn't exist, create a new Arquivo with this data.
     */
    create: XOR<ArquivoCreateInput, ArquivoUncheckedCreateInput>
    /**
     * In case the Arquivo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArquivoUpdateInput, ArquivoUncheckedUpdateInput>
  }

  /**
   * Arquivo delete
   */
  export type ArquivoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
    /**
     * Filter which Arquivo to delete.
     */
    where: ArquivoWhereUniqueInput
  }

  /**
   * Arquivo deleteMany
   */
  export type ArquivoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arquivos to delete
     */
    where?: ArquivoWhereInput
    /**
     * Limit how many Arquivos to delete.
     */
    limit?: number
  }

  /**
   * Arquivo without action
   */
  export type ArquivoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arquivo
     */
    select?: ArquivoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arquivo
     */
    omit?: ArquivoOmit<ExtArgs> | null
  }


  /**
   * Model Notificacao
   */

  export type AggregateNotificacao = {
    _count: NotificacaoCountAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  export type NotificacaoMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    mensagem: string | null
    lida: boolean | null
    tipo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type NotificacaoMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    mensagem: string | null
    lida: boolean | null
    tipo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type NotificacaoCountAggregateOutputType = {
    id: number
    titulo: number
    mensagem: number
    lida: number
    tipo: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type NotificacaoMinAggregateInputType = {
    id?: true
    titulo?: true
    mensagem?: true
    lida?: true
    tipo?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type NotificacaoMaxAggregateInputType = {
    id?: true
    titulo?: true
    mensagem?: true
    lida?: true
    tipo?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type NotificacaoCountAggregateInputType = {
    id?: true
    titulo?: true
    mensagem?: true
    lida?: true
    tipo?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type NotificacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacao to aggregate.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacaos
    **/
    _count?: true | NotificacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacaoMaxAggregateInputType
  }

  export type GetNotificacaoAggregateType<T extends NotificacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacao[P]>
      : GetScalarType<T[P], AggregateNotificacao[P]>
  }




  export type NotificacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithAggregationInput | NotificacaoOrderByWithAggregationInput[]
    by: NotificacaoScalarFieldEnum[] | NotificacaoScalarFieldEnum
    having?: NotificacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacaoCountAggregateInputType | true
    _min?: NotificacaoMinAggregateInputType
    _max?: NotificacaoMaxAggregateInputType
  }

  export type NotificacaoGroupByOutputType = {
    id: string
    titulo: string
    mensagem: string
    lida: boolean
    tipo: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: NotificacaoCountAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  type GetNotificacaoGroupByPayload<T extends NotificacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
        }
      >
    >


  export type NotificacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    mensagem?: boolean
    lida?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    mensagem?: boolean
    lida?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    mensagem?: boolean
    lida?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectScalar = {
    id?: boolean
    titulo?: boolean
    mensagem?: boolean
    lida?: boolean
    tipo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type NotificacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "mensagem" | "lida" | "tipo" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["notificacao"]>
  export type NotificacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacao"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      mensagem: string
      lida: boolean
      tipo: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["notificacao"]>
    composites: {}
  }

  type NotificacaoGetPayload<S extends boolean | null | undefined | NotificacaoDefaultArgs> = $Result.GetResult<Prisma.$NotificacaoPayload, S>

  type NotificacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacaoCountAggregateInputType | true
    }

  export interface NotificacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacao'], meta: { name: 'Notificacao' } }
    /**
     * Find zero or one Notificacao that matches the filter.
     * @param {NotificacaoFindUniqueArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificacaoFindUniqueArgs>(args: SelectSubset<T, NotificacaoFindUniqueArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificacaoFindUniqueOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificacaoFindFirstArgs>(args?: SelectSubset<T, NotificacaoFindFirstArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacaos
     * const notificacaos = await prisma.notificacao.findMany()
     * 
     * // Get first 10 Notificacaos
     * const notificacaos = await prisma.notificacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificacaoFindManyArgs>(args?: SelectSubset<T, NotificacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificacao.
     * @param {NotificacaoCreateArgs} args - Arguments to create a Notificacao.
     * @example
     * // Create one Notificacao
     * const Notificacao = await prisma.notificacao.create({
     *   data: {
     *     // ... data to create a Notificacao
     *   }
     * })
     * 
     */
    create<T extends NotificacaoCreateArgs>(args: SelectSubset<T, NotificacaoCreateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificacaos.
     * @param {NotificacaoCreateManyArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificacaoCreateManyArgs>(args?: SelectSubset<T, NotificacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notificacaos and returns the data saved in the database.
     * @param {NotificacaoCreateManyAndReturnArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notificacaos and only return the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notificacao.
     * @param {NotificacaoDeleteArgs} args - Arguments to delete one Notificacao.
     * @example
     * // Delete one Notificacao
     * const Notificacao = await prisma.notificacao.delete({
     *   where: {
     *     // ... filter to delete one Notificacao
     *   }
     * })
     * 
     */
    delete<T extends NotificacaoDeleteArgs>(args: SelectSubset<T, NotificacaoDeleteArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificacao.
     * @param {NotificacaoUpdateArgs} args - Arguments to update one Notificacao.
     * @example
     * // Update one Notificacao
     * const notificacao = await prisma.notificacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificacaoUpdateArgs>(args: SelectSubset<T, NotificacaoUpdateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificacaos.
     * @param {NotificacaoDeleteManyArgs} args - Arguments to filter Notificacaos to delete.
     * @example
     * // Delete a few Notificacaos
     * const { count } = await prisma.notificacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificacaoDeleteManyArgs>(args?: SelectSubset<T, NotificacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificacaoUpdateManyArgs>(args: SelectSubset<T, NotificacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos and returns the data updated in the database.
     * @param {NotificacaoUpdateManyAndReturnArgs} args - Arguments to update many Notificacaos.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notificacaos and only return the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notificacao.
     * @param {NotificacaoUpsertArgs} args - Arguments to update or create a Notificacao.
     * @example
     * // Update or create a Notificacao
     * const notificacao = await prisma.notificacao.upsert({
     *   create: {
     *     // ... data to create a Notificacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacao we want to update
     *   }
     * })
     */
    upsert<T extends NotificacaoUpsertArgs>(args: SelectSubset<T, NotificacaoUpsertArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoCountArgs} args - Arguments to filter Notificacaos to count.
     * @example
     * // Count the number of Notificacaos
     * const count = await prisma.notificacao.count({
     *   where: {
     *     // ... the filter for the Notificacaos we want to count
     *   }
     * })
    **/
    count<T extends NotificacaoCountArgs>(
      args?: Subset<T, NotificacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificacaoAggregateArgs>(args: Subset<T, NotificacaoAggregateArgs>): Prisma.PrismaPromise<GetNotificacaoAggregateType<T>>

    /**
     * Group by Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacaoGroupByArgs['orderBy'] }
        : { orderBy?: NotificacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacao model
   */
  readonly fields: NotificacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notificacao model
   */
  interface NotificacaoFieldRefs {
    readonly id: FieldRef<"Notificacao", 'String'>
    readonly titulo: FieldRef<"Notificacao", 'String'>
    readonly mensagem: FieldRef<"Notificacao", 'String'>
    readonly lida: FieldRef<"Notificacao", 'Boolean'>
    readonly tipo: FieldRef<"Notificacao", 'String'>
    readonly createdAt: FieldRef<"Notificacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Notificacao", 'DateTime'>
    readonly userId: FieldRef<"Notificacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notificacao findUnique
   */
  export type NotificacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findUniqueOrThrow
   */
  export type NotificacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findFirst
   */
  export type NotificacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findFirstOrThrow
   */
  export type NotificacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findMany
   */
  export type NotificacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacaos to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao create
   */
  export type NotificacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Notificacao.
     */
    data: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
  }

  /**
   * Notificacao createMany
   */
  export type NotificacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notificacao createManyAndReturn
   */
  export type NotificacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacao update
   */
  export type NotificacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Notificacao.
     */
    data: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
    /**
     * Choose, which Notificacao to update.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao updateMany
   */
  export type NotificacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
  }

  /**
   * Notificacao updateManyAndReturn
   */
  export type NotificacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacao upsert
   */
  export type NotificacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Notificacao to update in case it exists.
     */
    where: NotificacaoWhereUniqueInput
    /**
     * In case the Notificacao found by the `where` argument doesn't exist, create a new Notificacao with this data.
     */
    create: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
    /**
     * In case the Notificacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
  }

  /**
   * Notificacao delete
   */
  export type NotificacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter which Notificacao to delete.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao deleteMany
   */
  export type NotificacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacaos to delete
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to delete.
     */
    limit?: number
  }

  /**
   * Notificacao without action
   */
  export type NotificacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
  }


  /**
   * Model AtualizacaoRegulatoria
   */

  export type AggregateAtualizacaoRegulatoria = {
    _count: AtualizacaoRegulatoriaCountAggregateOutputType | null
    _min: AtualizacaoRegulatoriaMinAggregateOutputType | null
    _max: AtualizacaoRegulatoriaMaxAggregateOutputType | null
  }

  export type AtualizacaoRegulatoriaMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    fonte: string | null
    dataPublicacao: Date | null
    dataVigencia: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AtualizacaoRegulatoriaMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    fonte: string | null
    dataPublicacao: Date | null
    dataVigencia: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AtualizacaoRegulatoriaCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    fonte: number
    dataPublicacao: number
    dataVigencia: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AtualizacaoRegulatoriaMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    fonte?: true
    dataPublicacao?: true
    dataVigencia?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AtualizacaoRegulatoriaMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    fonte?: true
    dataPublicacao?: true
    dataVigencia?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AtualizacaoRegulatoriaCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    fonte?: true
    dataPublicacao?: true
    dataVigencia?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AtualizacaoRegulatoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtualizacaoRegulatoria to aggregate.
     */
    where?: AtualizacaoRegulatoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtualizacaoRegulatorias to fetch.
     */
    orderBy?: AtualizacaoRegulatoriaOrderByWithRelationInput | AtualizacaoRegulatoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtualizacaoRegulatoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtualizacaoRegulatorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtualizacaoRegulatorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AtualizacaoRegulatorias
    **/
    _count?: true | AtualizacaoRegulatoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtualizacaoRegulatoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtualizacaoRegulatoriaMaxAggregateInputType
  }

  export type GetAtualizacaoRegulatoriaAggregateType<T extends AtualizacaoRegulatoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateAtualizacaoRegulatoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtualizacaoRegulatoria[P]>
      : GetScalarType<T[P], AggregateAtualizacaoRegulatoria[P]>
  }




  export type AtualizacaoRegulatoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtualizacaoRegulatoriaWhereInput
    orderBy?: AtualizacaoRegulatoriaOrderByWithAggregationInput | AtualizacaoRegulatoriaOrderByWithAggregationInput[]
    by: AtualizacaoRegulatoriaScalarFieldEnum[] | AtualizacaoRegulatoriaScalarFieldEnum
    having?: AtualizacaoRegulatoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtualizacaoRegulatoriaCountAggregateInputType | true
    _min?: AtualizacaoRegulatoriaMinAggregateInputType
    _max?: AtualizacaoRegulatoriaMaxAggregateInputType
  }

  export type AtualizacaoRegulatoriaGroupByOutputType = {
    id: string
    titulo: string
    descricao: string
    fonte: string
    dataPublicacao: Date
    dataVigencia: Date | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: AtualizacaoRegulatoriaCountAggregateOutputType | null
    _min: AtualizacaoRegulatoriaMinAggregateOutputType | null
    _max: AtualizacaoRegulatoriaMaxAggregateOutputType | null
  }

  type GetAtualizacaoRegulatoriaGroupByPayload<T extends AtualizacaoRegulatoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtualizacaoRegulatoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtualizacaoRegulatoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtualizacaoRegulatoriaGroupByOutputType[P]>
            : GetScalarType<T[P], AtualizacaoRegulatoriaGroupByOutputType[P]>
        }
      >
    >


  export type AtualizacaoRegulatoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    fonte?: boolean
    dataPublicacao?: boolean
    dataVigencia?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["atualizacaoRegulatoria"]>

  export type AtualizacaoRegulatoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    fonte?: boolean
    dataPublicacao?: boolean
    dataVigencia?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["atualizacaoRegulatoria"]>

  export type AtualizacaoRegulatoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    fonte?: boolean
    dataPublicacao?: boolean
    dataVigencia?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["atualizacaoRegulatoria"]>

  export type AtualizacaoRegulatoriaSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    fonte?: boolean
    dataPublicacao?: boolean
    dataVigencia?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AtualizacaoRegulatoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "fonte" | "dataPublicacao" | "dataVigencia" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["atualizacaoRegulatoria"]>

  export type $AtualizacaoRegulatoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AtualizacaoRegulatoria"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descricao: string
      fonte: string
      dataPublicacao: Date
      dataVigencia: Date | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["atualizacaoRegulatoria"]>
    composites: {}
  }

  type AtualizacaoRegulatoriaGetPayload<S extends boolean | null | undefined | AtualizacaoRegulatoriaDefaultArgs> = $Result.GetResult<Prisma.$AtualizacaoRegulatoriaPayload, S>

  type AtualizacaoRegulatoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtualizacaoRegulatoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtualizacaoRegulatoriaCountAggregateInputType | true
    }

  export interface AtualizacaoRegulatoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AtualizacaoRegulatoria'], meta: { name: 'AtualizacaoRegulatoria' } }
    /**
     * Find zero or one AtualizacaoRegulatoria that matches the filter.
     * @param {AtualizacaoRegulatoriaFindUniqueArgs} args - Arguments to find a AtualizacaoRegulatoria
     * @example
     * // Get one AtualizacaoRegulatoria
     * const atualizacaoRegulatoria = await prisma.atualizacaoRegulatoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtualizacaoRegulatoriaFindUniqueArgs>(args: SelectSubset<T, AtualizacaoRegulatoriaFindUniqueArgs<ExtArgs>>): Prisma__AtualizacaoRegulatoriaClient<$Result.GetResult<Prisma.$AtualizacaoRegulatoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AtualizacaoRegulatoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtualizacaoRegulatoriaFindUniqueOrThrowArgs} args - Arguments to find a AtualizacaoRegulatoria
     * @example
     * // Get one AtualizacaoRegulatoria
     * const atualizacaoRegulatoria = await prisma.atualizacaoRegulatoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtualizacaoRegulatoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, AtualizacaoRegulatoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtualizacaoRegulatoriaClient<$Result.GetResult<Prisma.$AtualizacaoRegulatoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AtualizacaoRegulatoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtualizacaoRegulatoriaFindFirstArgs} args - Arguments to find a AtualizacaoRegulatoria
     * @example
     * // Get one AtualizacaoRegulatoria
     * const atualizacaoRegulatoria = await prisma.atualizacaoRegulatoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtualizacaoRegulatoriaFindFirstArgs>(args?: SelectSubset<T, AtualizacaoRegulatoriaFindFirstArgs<ExtArgs>>): Prisma__AtualizacaoRegulatoriaClient<$Result.GetResult<Prisma.$AtualizacaoRegulatoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AtualizacaoRegulatoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtualizacaoRegulatoriaFindFirstOrThrowArgs} args - Arguments to find a AtualizacaoRegulatoria
     * @example
     * // Get one AtualizacaoRegulatoria
     * const atualizacaoRegulatoria = await prisma.atualizacaoRegulatoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtualizacaoRegulatoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, AtualizacaoRegulatoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtualizacaoRegulatoriaClient<$Result.GetResult<Prisma.$AtualizacaoRegulatoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AtualizacaoRegulatorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtualizacaoRegulatoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AtualizacaoRegulatorias
     * const atualizacaoRegulatorias = await prisma.atualizacaoRegulatoria.findMany()
     * 
     * // Get first 10 AtualizacaoRegulatorias
     * const atualizacaoRegulatorias = await prisma.atualizacaoRegulatoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atualizacaoRegulatoriaWithIdOnly = await prisma.atualizacaoRegulatoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtualizacaoRegulatoriaFindManyArgs>(args?: SelectSubset<T, AtualizacaoRegulatoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtualizacaoRegulatoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AtualizacaoRegulatoria.
     * @param {AtualizacaoRegulatoriaCreateArgs} args - Arguments to create a AtualizacaoRegulatoria.
     * @example
     * // Create one AtualizacaoRegulatoria
     * const AtualizacaoRegulatoria = await prisma.atualizacaoRegulatoria.create({
     *   data: {
     *     // ... data to create a AtualizacaoRegulatoria
     *   }
     * })
     * 
     */
    create<T extends AtualizacaoRegulatoriaCreateArgs>(args: SelectSubset<T, AtualizacaoRegulatoriaCreateArgs<ExtArgs>>): Prisma__AtualizacaoRegulatoriaClient<$Result.GetResult<Prisma.$AtualizacaoRegulatoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AtualizacaoRegulatorias.
     * @param {AtualizacaoRegulatoriaCreateManyArgs} args - Arguments to create many AtualizacaoRegulatorias.
     * @example
     * // Create many AtualizacaoRegulatorias
     * const atualizacaoRegulatoria = await prisma.atualizacaoRegulatoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtualizacaoRegulatoriaCreateManyArgs>(args?: SelectSubset<T, AtualizacaoRegulatoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AtualizacaoRegulatorias and returns the data saved in the database.
     * @param {AtualizacaoRegulatoriaCreateManyAndReturnArgs} args - Arguments to create many AtualizacaoRegulatorias.
     * @example
     * // Create many AtualizacaoRegulatorias
     * const atualizacaoRegulatoria = await prisma.atualizacaoRegulatoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AtualizacaoRegulatorias and only return the `id`
     * const atualizacaoRegulatoriaWithIdOnly = await prisma.atualizacaoRegulatoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtualizacaoRegulatoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, AtualizacaoRegulatoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtualizacaoRegulatoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AtualizacaoRegulatoria.
     * @param {AtualizacaoRegulatoriaDeleteArgs} args - Arguments to delete one AtualizacaoRegulatoria.
     * @example
     * // Delete one AtualizacaoRegulatoria
     * const AtualizacaoRegulatoria = await prisma.atualizacaoRegulatoria.delete({
     *   where: {
     *     // ... filter to delete one AtualizacaoRegulatoria
     *   }
     * })
     * 
     */
    delete<T extends AtualizacaoRegulatoriaDeleteArgs>(args: SelectSubset<T, AtualizacaoRegulatoriaDeleteArgs<ExtArgs>>): Prisma__AtualizacaoRegulatoriaClient<$Result.GetResult<Prisma.$AtualizacaoRegulatoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AtualizacaoRegulatoria.
     * @param {AtualizacaoRegulatoriaUpdateArgs} args - Arguments to update one AtualizacaoRegulatoria.
     * @example
     * // Update one AtualizacaoRegulatoria
     * const atualizacaoRegulatoria = await prisma.atualizacaoRegulatoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtualizacaoRegulatoriaUpdateArgs>(args: SelectSubset<T, AtualizacaoRegulatoriaUpdateArgs<ExtArgs>>): Prisma__AtualizacaoRegulatoriaClient<$Result.GetResult<Prisma.$AtualizacaoRegulatoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AtualizacaoRegulatorias.
     * @param {AtualizacaoRegulatoriaDeleteManyArgs} args - Arguments to filter AtualizacaoRegulatorias to delete.
     * @example
     * // Delete a few AtualizacaoRegulatorias
     * const { count } = await prisma.atualizacaoRegulatoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtualizacaoRegulatoriaDeleteManyArgs>(args?: SelectSubset<T, AtualizacaoRegulatoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtualizacaoRegulatorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtualizacaoRegulatoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AtualizacaoRegulatorias
     * const atualizacaoRegulatoria = await prisma.atualizacaoRegulatoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtualizacaoRegulatoriaUpdateManyArgs>(args: SelectSubset<T, AtualizacaoRegulatoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtualizacaoRegulatorias and returns the data updated in the database.
     * @param {AtualizacaoRegulatoriaUpdateManyAndReturnArgs} args - Arguments to update many AtualizacaoRegulatorias.
     * @example
     * // Update many AtualizacaoRegulatorias
     * const atualizacaoRegulatoria = await prisma.atualizacaoRegulatoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AtualizacaoRegulatorias and only return the `id`
     * const atualizacaoRegulatoriaWithIdOnly = await prisma.atualizacaoRegulatoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AtualizacaoRegulatoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, AtualizacaoRegulatoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtualizacaoRegulatoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AtualizacaoRegulatoria.
     * @param {AtualizacaoRegulatoriaUpsertArgs} args - Arguments to update or create a AtualizacaoRegulatoria.
     * @example
     * // Update or create a AtualizacaoRegulatoria
     * const atualizacaoRegulatoria = await prisma.atualizacaoRegulatoria.upsert({
     *   create: {
     *     // ... data to create a AtualizacaoRegulatoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AtualizacaoRegulatoria we want to update
     *   }
     * })
     */
    upsert<T extends AtualizacaoRegulatoriaUpsertArgs>(args: SelectSubset<T, AtualizacaoRegulatoriaUpsertArgs<ExtArgs>>): Prisma__AtualizacaoRegulatoriaClient<$Result.GetResult<Prisma.$AtualizacaoRegulatoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AtualizacaoRegulatorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtualizacaoRegulatoriaCountArgs} args - Arguments to filter AtualizacaoRegulatorias to count.
     * @example
     * // Count the number of AtualizacaoRegulatorias
     * const count = await prisma.atualizacaoRegulatoria.count({
     *   where: {
     *     // ... the filter for the AtualizacaoRegulatorias we want to count
     *   }
     * })
    **/
    count<T extends AtualizacaoRegulatoriaCountArgs>(
      args?: Subset<T, AtualizacaoRegulatoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtualizacaoRegulatoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AtualizacaoRegulatoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtualizacaoRegulatoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AtualizacaoRegulatoriaAggregateArgs>(args: Subset<T, AtualizacaoRegulatoriaAggregateArgs>): Prisma.PrismaPromise<GetAtualizacaoRegulatoriaAggregateType<T>>

    /**
     * Group by AtualizacaoRegulatoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtualizacaoRegulatoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AtualizacaoRegulatoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtualizacaoRegulatoriaGroupByArgs['orderBy'] }
        : { orderBy?: AtualizacaoRegulatoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AtualizacaoRegulatoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtualizacaoRegulatoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AtualizacaoRegulatoria model
   */
  readonly fields: AtualizacaoRegulatoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AtualizacaoRegulatoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtualizacaoRegulatoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AtualizacaoRegulatoria model
   */
  interface AtualizacaoRegulatoriaFieldRefs {
    readonly id: FieldRef<"AtualizacaoRegulatoria", 'String'>
    readonly titulo: FieldRef<"AtualizacaoRegulatoria", 'String'>
    readonly descricao: FieldRef<"AtualizacaoRegulatoria", 'String'>
    readonly fonte: FieldRef<"AtualizacaoRegulatoria", 'String'>
    readonly dataPublicacao: FieldRef<"AtualizacaoRegulatoria", 'DateTime'>
    readonly dataVigencia: FieldRef<"AtualizacaoRegulatoria", 'DateTime'>
    readonly status: FieldRef<"AtualizacaoRegulatoria", 'String'>
    readonly createdAt: FieldRef<"AtualizacaoRegulatoria", 'DateTime'>
    readonly updatedAt: FieldRef<"AtualizacaoRegulatoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AtualizacaoRegulatoria findUnique
   */
  export type AtualizacaoRegulatoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtualizacaoRegulatoria
     */
    select?: AtualizacaoRegulatoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtualizacaoRegulatoria
     */
    omit?: AtualizacaoRegulatoriaOmit<ExtArgs> | null
    /**
     * Filter, which AtualizacaoRegulatoria to fetch.
     */
    where: AtualizacaoRegulatoriaWhereUniqueInput
  }

  /**
   * AtualizacaoRegulatoria findUniqueOrThrow
   */
  export type AtualizacaoRegulatoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtualizacaoRegulatoria
     */
    select?: AtualizacaoRegulatoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtualizacaoRegulatoria
     */
    omit?: AtualizacaoRegulatoriaOmit<ExtArgs> | null
    /**
     * Filter, which AtualizacaoRegulatoria to fetch.
     */
    where: AtualizacaoRegulatoriaWhereUniqueInput
  }

  /**
   * AtualizacaoRegulatoria findFirst
   */
  export type AtualizacaoRegulatoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtualizacaoRegulatoria
     */
    select?: AtualizacaoRegulatoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtualizacaoRegulatoria
     */
    omit?: AtualizacaoRegulatoriaOmit<ExtArgs> | null
    /**
     * Filter, which AtualizacaoRegulatoria to fetch.
     */
    where?: AtualizacaoRegulatoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtualizacaoRegulatorias to fetch.
     */
    orderBy?: AtualizacaoRegulatoriaOrderByWithRelationInput | AtualizacaoRegulatoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtualizacaoRegulatorias.
     */
    cursor?: AtualizacaoRegulatoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtualizacaoRegulatorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtualizacaoRegulatorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtualizacaoRegulatorias.
     */
    distinct?: AtualizacaoRegulatoriaScalarFieldEnum | AtualizacaoRegulatoriaScalarFieldEnum[]
  }

  /**
   * AtualizacaoRegulatoria findFirstOrThrow
   */
  export type AtualizacaoRegulatoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtualizacaoRegulatoria
     */
    select?: AtualizacaoRegulatoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtualizacaoRegulatoria
     */
    omit?: AtualizacaoRegulatoriaOmit<ExtArgs> | null
    /**
     * Filter, which AtualizacaoRegulatoria to fetch.
     */
    where?: AtualizacaoRegulatoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtualizacaoRegulatorias to fetch.
     */
    orderBy?: AtualizacaoRegulatoriaOrderByWithRelationInput | AtualizacaoRegulatoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtualizacaoRegulatorias.
     */
    cursor?: AtualizacaoRegulatoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtualizacaoRegulatorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtualizacaoRegulatorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtualizacaoRegulatorias.
     */
    distinct?: AtualizacaoRegulatoriaScalarFieldEnum | AtualizacaoRegulatoriaScalarFieldEnum[]
  }

  /**
   * AtualizacaoRegulatoria findMany
   */
  export type AtualizacaoRegulatoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtualizacaoRegulatoria
     */
    select?: AtualizacaoRegulatoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtualizacaoRegulatoria
     */
    omit?: AtualizacaoRegulatoriaOmit<ExtArgs> | null
    /**
     * Filter, which AtualizacaoRegulatorias to fetch.
     */
    where?: AtualizacaoRegulatoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtualizacaoRegulatorias to fetch.
     */
    orderBy?: AtualizacaoRegulatoriaOrderByWithRelationInput | AtualizacaoRegulatoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AtualizacaoRegulatorias.
     */
    cursor?: AtualizacaoRegulatoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtualizacaoRegulatorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtualizacaoRegulatorias.
     */
    skip?: number
    distinct?: AtualizacaoRegulatoriaScalarFieldEnum | AtualizacaoRegulatoriaScalarFieldEnum[]
  }

  /**
   * AtualizacaoRegulatoria create
   */
  export type AtualizacaoRegulatoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtualizacaoRegulatoria
     */
    select?: AtualizacaoRegulatoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtualizacaoRegulatoria
     */
    omit?: AtualizacaoRegulatoriaOmit<ExtArgs> | null
    /**
     * The data needed to create a AtualizacaoRegulatoria.
     */
    data: XOR<AtualizacaoRegulatoriaCreateInput, AtualizacaoRegulatoriaUncheckedCreateInput>
  }

  /**
   * AtualizacaoRegulatoria createMany
   */
  export type AtualizacaoRegulatoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AtualizacaoRegulatorias.
     */
    data: AtualizacaoRegulatoriaCreateManyInput | AtualizacaoRegulatoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AtualizacaoRegulatoria createManyAndReturn
   */
  export type AtualizacaoRegulatoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtualizacaoRegulatoria
     */
    select?: AtualizacaoRegulatoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AtualizacaoRegulatoria
     */
    omit?: AtualizacaoRegulatoriaOmit<ExtArgs> | null
    /**
     * The data used to create many AtualizacaoRegulatorias.
     */
    data: AtualizacaoRegulatoriaCreateManyInput | AtualizacaoRegulatoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AtualizacaoRegulatoria update
   */
  export type AtualizacaoRegulatoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtualizacaoRegulatoria
     */
    select?: AtualizacaoRegulatoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtualizacaoRegulatoria
     */
    omit?: AtualizacaoRegulatoriaOmit<ExtArgs> | null
    /**
     * The data needed to update a AtualizacaoRegulatoria.
     */
    data: XOR<AtualizacaoRegulatoriaUpdateInput, AtualizacaoRegulatoriaUncheckedUpdateInput>
    /**
     * Choose, which AtualizacaoRegulatoria to update.
     */
    where: AtualizacaoRegulatoriaWhereUniqueInput
  }

  /**
   * AtualizacaoRegulatoria updateMany
   */
  export type AtualizacaoRegulatoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AtualizacaoRegulatorias.
     */
    data: XOR<AtualizacaoRegulatoriaUpdateManyMutationInput, AtualizacaoRegulatoriaUncheckedUpdateManyInput>
    /**
     * Filter which AtualizacaoRegulatorias to update
     */
    where?: AtualizacaoRegulatoriaWhereInput
    /**
     * Limit how many AtualizacaoRegulatorias to update.
     */
    limit?: number
  }

  /**
   * AtualizacaoRegulatoria updateManyAndReturn
   */
  export type AtualizacaoRegulatoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtualizacaoRegulatoria
     */
    select?: AtualizacaoRegulatoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AtualizacaoRegulatoria
     */
    omit?: AtualizacaoRegulatoriaOmit<ExtArgs> | null
    /**
     * The data used to update AtualizacaoRegulatorias.
     */
    data: XOR<AtualizacaoRegulatoriaUpdateManyMutationInput, AtualizacaoRegulatoriaUncheckedUpdateManyInput>
    /**
     * Filter which AtualizacaoRegulatorias to update
     */
    where?: AtualizacaoRegulatoriaWhereInput
    /**
     * Limit how many AtualizacaoRegulatorias to update.
     */
    limit?: number
  }

  /**
   * AtualizacaoRegulatoria upsert
   */
  export type AtualizacaoRegulatoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtualizacaoRegulatoria
     */
    select?: AtualizacaoRegulatoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtualizacaoRegulatoria
     */
    omit?: AtualizacaoRegulatoriaOmit<ExtArgs> | null
    /**
     * The filter to search for the AtualizacaoRegulatoria to update in case it exists.
     */
    where: AtualizacaoRegulatoriaWhereUniqueInput
    /**
     * In case the AtualizacaoRegulatoria found by the `where` argument doesn't exist, create a new AtualizacaoRegulatoria with this data.
     */
    create: XOR<AtualizacaoRegulatoriaCreateInput, AtualizacaoRegulatoriaUncheckedCreateInput>
    /**
     * In case the AtualizacaoRegulatoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtualizacaoRegulatoriaUpdateInput, AtualizacaoRegulatoriaUncheckedUpdateInput>
  }

  /**
   * AtualizacaoRegulatoria delete
   */
  export type AtualizacaoRegulatoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtualizacaoRegulatoria
     */
    select?: AtualizacaoRegulatoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtualizacaoRegulatoria
     */
    omit?: AtualizacaoRegulatoriaOmit<ExtArgs> | null
    /**
     * Filter which AtualizacaoRegulatoria to delete.
     */
    where: AtualizacaoRegulatoriaWhereUniqueInput
  }

  /**
   * AtualizacaoRegulatoria deleteMany
   */
  export type AtualizacaoRegulatoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtualizacaoRegulatorias to delete
     */
    where?: AtualizacaoRegulatoriaWhereInput
    /**
     * Limit how many AtualizacaoRegulatorias to delete.
     */
    limit?: number
  }

  /**
   * AtualizacaoRegulatoria without action
   */
  export type AtualizacaoRegulatoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtualizacaoRegulatoria
     */
    select?: AtualizacaoRegulatoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtualizacaoRegulatoria
     */
    omit?: AtualizacaoRegulatoriaOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    farmaciaId: 'farmaciaId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FarmaciaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cnpj: 'cnpj',
    endereco: 'endereco',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FarmaciaScalarFieldEnum = (typeof FarmaciaScalarFieldEnum)[keyof typeof FarmaciaScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    ordem: 'ordem',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const ModuloScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    conteudo: 'conteudo',
    ordem: 'ordem',
    versao: 'versao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    categoriaId: 'categoriaId'
  };

  export type ModuloScalarFieldEnum = (typeof ModuloScalarFieldEnum)[keyof typeof ModuloScalarFieldEnum]


  export const MedicamentoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    principioAtivo: 'principioAtivo',
    formaFarmaceutica: 'formaFarmaceutica',
    concentracao: 'concentracao',
    indicacoes: 'indicacoes',
    contraindicacoes: 'contraindicacoes',
    efeitosAdversos: 'efeitosAdversos',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    categoriaId: 'categoriaId'
  };

  export type MedicamentoScalarFieldEnum = (typeof MedicamentoScalarFieldEnum)[keyof typeof MedicamentoScalarFieldEnum]


  export const ProgressoScalarFieldEnum: {
    id: 'id',
    progresso: 'progresso',
    concluido: 'concluido',
    ultimoAcesso: 'ultimoAcesso',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    moduloId: 'moduloId'
  };

  export type ProgressoScalarFieldEnum = (typeof ProgressoScalarFieldEnum)[keyof typeof ProgressoScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    moduloId: 'moduloId'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


  export const QuestaoScalarFieldEnum: {
    id: 'id',
    enunciado: 'enunciado',
    opcoes: 'opcoes',
    respostaCorreta: 'respostaCorreta',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    avaliacaoId: 'avaliacaoId'
  };

  export type QuestaoScalarFieldEnum = (typeof QuestaoScalarFieldEnum)[keyof typeof QuestaoScalarFieldEnum]


  export const ResultadoAvaliacaoScalarFieldEnum: {
    id: 'id',
    respostas: 'respostas',
    pontuacao: 'pontuacao',
    aprovado: 'aprovado',
    dataRealizacao: 'dataRealizacao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    avaliacaoId: 'avaliacaoId'
  };

  export type ResultadoAvaliacaoScalarFieldEnum = (typeof ResultadoAvaliacaoScalarFieldEnum)[keyof typeof ResultadoAvaliacaoScalarFieldEnum]


  export const CertificadoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    codigo: 'codigo',
    dataEmissao: 'dataEmissao',
    dataValidade: 'dataValidade',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type CertificadoScalarFieldEnum = (typeof CertificadoScalarFieldEnum)[keyof typeof CertificadoScalarFieldEnum]


  export const ArquivoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    caminho: 'caminho',
    tipo: 'tipo',
    tamanho: 'tamanho',
    entidadeTipo: 'entidadeTipo',
    entidadeId: 'entidadeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArquivoScalarFieldEnum = (typeof ArquivoScalarFieldEnum)[keyof typeof ArquivoScalarFieldEnum]


  export const NotificacaoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    mensagem: 'mensagem',
    lida: 'lida',
    tipo: 'tipo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type NotificacaoScalarFieldEnum = (typeof NotificacaoScalarFieldEnum)[keyof typeof NotificacaoScalarFieldEnum]


  export const AtualizacaoRegulatoriaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    fonte: 'fonte',
    dataPublicacao: 'dataPublicacao',
    dataVigencia: 'dataVigencia',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AtualizacaoRegulatoriaScalarFieldEnum = (typeof AtualizacaoRegulatoriaScalarFieldEnum)[keyof typeof AtualizacaoRegulatoriaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    farmaciaId?: StringNullableFilter<"User"> | string | null
    farmacia?: XOR<FarmaciaNullableScalarRelationFilter, FarmaciaWhereInput> | null
    progressos?: ProgressoListRelationFilter
    resultados?: ResultadoAvaliacaoListRelationFilter
    certificados?: CertificadoListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farmaciaId?: SortOrderInput | SortOrder
    farmacia?: FarmaciaOrderByWithRelationInput
    progressos?: ProgressoOrderByRelationAggregateInput
    resultados?: ResultadoAvaliacaoOrderByRelationAggregateInput
    certificados?: CertificadoOrderByRelationAggregateInput
    notificacoes?: NotificacaoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    farmaciaId?: StringNullableFilter<"User"> | string | null
    farmacia?: XOR<FarmaciaNullableScalarRelationFilter, FarmaciaWhereInput> | null
    progressos?: ProgressoListRelationFilter
    resultados?: ResultadoAvaliacaoListRelationFilter
    certificados?: CertificadoListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farmaciaId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    farmaciaId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type FarmaciaWhereInput = {
    AND?: FarmaciaWhereInput | FarmaciaWhereInput[]
    OR?: FarmaciaWhereInput[]
    NOT?: FarmaciaWhereInput | FarmaciaWhereInput[]
    id?: StringFilter<"Farmacia"> | string
    nome?: StringFilter<"Farmacia"> | string
    cnpj?: StringFilter<"Farmacia"> | string
    endereco?: StringFilter<"Farmacia"> | string
    createdAt?: DateTimeFilter<"Farmacia"> | Date | string
    updatedAt?: DateTimeFilter<"Farmacia"> | Date | string
    usuarios?: UserListRelationFilter
  }

  export type FarmaciaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarios?: UserOrderByRelationAggregateInput
  }

  export type FarmaciaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj?: string
    AND?: FarmaciaWhereInput | FarmaciaWhereInput[]
    OR?: FarmaciaWhereInput[]
    NOT?: FarmaciaWhereInput | FarmaciaWhereInput[]
    nome?: StringFilter<"Farmacia"> | string
    endereco?: StringFilter<"Farmacia"> | string
    createdAt?: DateTimeFilter<"Farmacia"> | Date | string
    updatedAt?: DateTimeFilter<"Farmacia"> | Date | string
    usuarios?: UserListRelationFilter
  }, "id" | "cnpj">

  export type FarmaciaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FarmaciaCountOrderByAggregateInput
    _max?: FarmaciaMaxOrderByAggregateInput
    _min?: FarmaciaMinOrderByAggregateInput
  }

  export type FarmaciaScalarWhereWithAggregatesInput = {
    AND?: FarmaciaScalarWhereWithAggregatesInput | FarmaciaScalarWhereWithAggregatesInput[]
    OR?: FarmaciaScalarWhereWithAggregatesInput[]
    NOT?: FarmaciaScalarWhereWithAggregatesInput | FarmaciaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Farmacia"> | string
    nome?: StringWithAggregatesFilter<"Farmacia"> | string
    cnpj?: StringWithAggregatesFilter<"Farmacia"> | string
    endereco?: StringWithAggregatesFilter<"Farmacia"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Farmacia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Farmacia"> | Date | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: StringFilter<"Categoria"> | string
    nome?: StringFilter<"Categoria"> | string
    descricao?: StringFilter<"Categoria"> | string
    ordem?: IntFilter<"Categoria"> | number
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeFilter<"Categoria"> | Date | string
    modulos?: ModuloListRelationFilter
    medicamentos?: MedicamentoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    ordem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modulos?: ModuloOrderByRelationAggregateInput
    medicamentos?: MedicamentoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    nome?: StringFilter<"Categoria"> | string
    descricao?: StringFilter<"Categoria"> | string
    ordem?: IntFilter<"Categoria"> | number
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeFilter<"Categoria"> | Date | string
    modulos?: ModuloListRelationFilter
    medicamentos?: MedicamentoListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    ordem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categoria"> | string
    nome?: StringWithAggregatesFilter<"Categoria"> | string
    descricao?: StringWithAggregatesFilter<"Categoria"> | string
    ordem?: IntWithAggregatesFilter<"Categoria"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
  }

  export type ModuloWhereInput = {
    AND?: ModuloWhereInput | ModuloWhereInput[]
    OR?: ModuloWhereInput[]
    NOT?: ModuloWhereInput | ModuloWhereInput[]
    id?: StringFilter<"Modulo"> | string
    titulo?: StringFilter<"Modulo"> | string
    descricao?: StringFilter<"Modulo"> | string
    conteudo?: StringFilter<"Modulo"> | string
    ordem?: IntFilter<"Modulo"> | number
    versao?: StringFilter<"Modulo"> | string
    createdAt?: DateTimeFilter<"Modulo"> | Date | string
    updatedAt?: DateTimeFilter<"Modulo"> | Date | string
    categoriaId?: StringFilter<"Modulo"> | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    progressos?: ProgressoListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
  }

  export type ModuloOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    conteudo?: SortOrder
    ordem?: SortOrder
    versao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoriaId?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    progressos?: ProgressoOrderByRelationAggregateInput
    avaliacoes?: AvaliacaoOrderByRelationAggregateInput
  }

  export type ModuloWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModuloWhereInput | ModuloWhereInput[]
    OR?: ModuloWhereInput[]
    NOT?: ModuloWhereInput | ModuloWhereInput[]
    titulo?: StringFilter<"Modulo"> | string
    descricao?: StringFilter<"Modulo"> | string
    conteudo?: StringFilter<"Modulo"> | string
    ordem?: IntFilter<"Modulo"> | number
    versao?: StringFilter<"Modulo"> | string
    createdAt?: DateTimeFilter<"Modulo"> | Date | string
    updatedAt?: DateTimeFilter<"Modulo"> | Date | string
    categoriaId?: StringFilter<"Modulo"> | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    progressos?: ProgressoListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
  }, "id">

  export type ModuloOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    conteudo?: SortOrder
    ordem?: SortOrder
    versao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoriaId?: SortOrder
    _count?: ModuloCountOrderByAggregateInput
    _avg?: ModuloAvgOrderByAggregateInput
    _max?: ModuloMaxOrderByAggregateInput
    _min?: ModuloMinOrderByAggregateInput
    _sum?: ModuloSumOrderByAggregateInput
  }

  export type ModuloScalarWhereWithAggregatesInput = {
    AND?: ModuloScalarWhereWithAggregatesInput | ModuloScalarWhereWithAggregatesInput[]
    OR?: ModuloScalarWhereWithAggregatesInput[]
    NOT?: ModuloScalarWhereWithAggregatesInput | ModuloScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Modulo"> | string
    titulo?: StringWithAggregatesFilter<"Modulo"> | string
    descricao?: StringWithAggregatesFilter<"Modulo"> | string
    conteudo?: StringWithAggregatesFilter<"Modulo"> | string
    ordem?: IntWithAggregatesFilter<"Modulo"> | number
    versao?: StringWithAggregatesFilter<"Modulo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Modulo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Modulo"> | Date | string
    categoriaId?: StringWithAggregatesFilter<"Modulo"> | string
  }

  export type MedicamentoWhereInput = {
    AND?: MedicamentoWhereInput | MedicamentoWhereInput[]
    OR?: MedicamentoWhereInput[]
    NOT?: MedicamentoWhereInput | MedicamentoWhereInput[]
    id?: StringFilter<"Medicamento"> | string
    nome?: StringFilter<"Medicamento"> | string
    principioAtivo?: StringFilter<"Medicamento"> | string
    formaFarmaceutica?: StringFilter<"Medicamento"> | string
    concentracao?: StringFilter<"Medicamento"> | string
    indicacoes?: StringNullableFilter<"Medicamento"> | string | null
    contraindicacoes?: StringNullableFilter<"Medicamento"> | string | null
    efeitosAdversos?: StringNullableFilter<"Medicamento"> | string | null
    createdAt?: DateTimeFilter<"Medicamento"> | Date | string
    updatedAt?: DateTimeFilter<"Medicamento"> | Date | string
    categoriaId?: StringFilter<"Medicamento"> | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
  }

  export type MedicamentoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    principioAtivo?: SortOrder
    formaFarmaceutica?: SortOrder
    concentracao?: SortOrder
    indicacoes?: SortOrderInput | SortOrder
    contraindicacoes?: SortOrderInput | SortOrder
    efeitosAdversos?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoriaId?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
  }

  export type MedicamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicamentoWhereInput | MedicamentoWhereInput[]
    OR?: MedicamentoWhereInput[]
    NOT?: MedicamentoWhereInput | MedicamentoWhereInput[]
    nome?: StringFilter<"Medicamento"> | string
    principioAtivo?: StringFilter<"Medicamento"> | string
    formaFarmaceutica?: StringFilter<"Medicamento"> | string
    concentracao?: StringFilter<"Medicamento"> | string
    indicacoes?: StringNullableFilter<"Medicamento"> | string | null
    contraindicacoes?: StringNullableFilter<"Medicamento"> | string | null
    efeitosAdversos?: StringNullableFilter<"Medicamento"> | string | null
    createdAt?: DateTimeFilter<"Medicamento"> | Date | string
    updatedAt?: DateTimeFilter<"Medicamento"> | Date | string
    categoriaId?: StringFilter<"Medicamento"> | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
  }, "id">

  export type MedicamentoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    principioAtivo?: SortOrder
    formaFarmaceutica?: SortOrder
    concentracao?: SortOrder
    indicacoes?: SortOrderInput | SortOrder
    contraindicacoes?: SortOrderInput | SortOrder
    efeitosAdversos?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoriaId?: SortOrder
    _count?: MedicamentoCountOrderByAggregateInput
    _max?: MedicamentoMaxOrderByAggregateInput
    _min?: MedicamentoMinOrderByAggregateInput
  }

  export type MedicamentoScalarWhereWithAggregatesInput = {
    AND?: MedicamentoScalarWhereWithAggregatesInput | MedicamentoScalarWhereWithAggregatesInput[]
    OR?: MedicamentoScalarWhereWithAggregatesInput[]
    NOT?: MedicamentoScalarWhereWithAggregatesInput | MedicamentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medicamento"> | string
    nome?: StringWithAggregatesFilter<"Medicamento"> | string
    principioAtivo?: StringWithAggregatesFilter<"Medicamento"> | string
    formaFarmaceutica?: StringWithAggregatesFilter<"Medicamento"> | string
    concentracao?: StringWithAggregatesFilter<"Medicamento"> | string
    indicacoes?: StringNullableWithAggregatesFilter<"Medicamento"> | string | null
    contraindicacoes?: StringNullableWithAggregatesFilter<"Medicamento"> | string | null
    efeitosAdversos?: StringNullableWithAggregatesFilter<"Medicamento"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Medicamento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Medicamento"> | Date | string
    categoriaId?: StringWithAggregatesFilter<"Medicamento"> | string
  }

  export type ProgressoWhereInput = {
    AND?: ProgressoWhereInput | ProgressoWhereInput[]
    OR?: ProgressoWhereInput[]
    NOT?: ProgressoWhereInput | ProgressoWhereInput[]
    id?: StringFilter<"Progresso"> | string
    progresso?: IntFilter<"Progresso"> | number
    concluido?: BoolFilter<"Progresso"> | boolean
    ultimoAcesso?: DateTimeFilter<"Progresso"> | Date | string
    createdAt?: DateTimeFilter<"Progresso"> | Date | string
    updatedAt?: DateTimeFilter<"Progresso"> | Date | string
    userId?: StringFilter<"Progresso"> | string
    moduloId?: StringFilter<"Progresso"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    modulo?: XOR<ModuloScalarRelationFilter, ModuloWhereInput>
  }

  export type ProgressoOrderByWithRelationInput = {
    id?: SortOrder
    progresso?: SortOrder
    concluido?: SortOrder
    ultimoAcesso?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    moduloId?: SortOrder
    user?: UserOrderByWithRelationInput
    modulo?: ModuloOrderByWithRelationInput
  }

  export type ProgressoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_moduloId?: ProgressoUserIdModuloIdCompoundUniqueInput
    AND?: ProgressoWhereInput | ProgressoWhereInput[]
    OR?: ProgressoWhereInput[]
    NOT?: ProgressoWhereInput | ProgressoWhereInput[]
    progresso?: IntFilter<"Progresso"> | number
    concluido?: BoolFilter<"Progresso"> | boolean
    ultimoAcesso?: DateTimeFilter<"Progresso"> | Date | string
    createdAt?: DateTimeFilter<"Progresso"> | Date | string
    updatedAt?: DateTimeFilter<"Progresso"> | Date | string
    userId?: StringFilter<"Progresso"> | string
    moduloId?: StringFilter<"Progresso"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    modulo?: XOR<ModuloScalarRelationFilter, ModuloWhereInput>
  }, "id" | "userId_moduloId">

  export type ProgressoOrderByWithAggregationInput = {
    id?: SortOrder
    progresso?: SortOrder
    concluido?: SortOrder
    ultimoAcesso?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    moduloId?: SortOrder
    _count?: ProgressoCountOrderByAggregateInput
    _avg?: ProgressoAvgOrderByAggregateInput
    _max?: ProgressoMaxOrderByAggregateInput
    _min?: ProgressoMinOrderByAggregateInput
    _sum?: ProgressoSumOrderByAggregateInput
  }

  export type ProgressoScalarWhereWithAggregatesInput = {
    AND?: ProgressoScalarWhereWithAggregatesInput | ProgressoScalarWhereWithAggregatesInput[]
    OR?: ProgressoScalarWhereWithAggregatesInput[]
    NOT?: ProgressoScalarWhereWithAggregatesInput | ProgressoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Progresso"> | string
    progresso?: IntWithAggregatesFilter<"Progresso"> | number
    concluido?: BoolWithAggregatesFilter<"Progresso"> | boolean
    ultimoAcesso?: DateTimeWithAggregatesFilter<"Progresso"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Progresso"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Progresso"> | Date | string
    userId?: StringWithAggregatesFilter<"Progresso"> | string
    moduloId?: StringWithAggregatesFilter<"Progresso"> | string
  }

  export type AvaliacaoWhereInput = {
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    id?: StringFilter<"Avaliacao"> | string
    titulo?: StringFilter<"Avaliacao"> | string
    createdAt?: DateTimeFilter<"Avaliacao"> | Date | string
    updatedAt?: DateTimeFilter<"Avaliacao"> | Date | string
    moduloId?: StringFilter<"Avaliacao"> | string
    modulo?: XOR<ModuloScalarRelationFilter, ModuloWhereInput>
    questoes?: QuestaoListRelationFilter
    resultados?: ResultadoAvaliacaoListRelationFilter
  }

  export type AvaliacaoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    moduloId?: SortOrder
    modulo?: ModuloOrderByWithRelationInput
    questoes?: QuestaoOrderByRelationAggregateInput
    resultados?: ResultadoAvaliacaoOrderByRelationAggregateInput
  }

  export type AvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    titulo?: StringFilter<"Avaliacao"> | string
    createdAt?: DateTimeFilter<"Avaliacao"> | Date | string
    updatedAt?: DateTimeFilter<"Avaliacao"> | Date | string
    moduloId?: StringFilter<"Avaliacao"> | string
    modulo?: XOR<ModuloScalarRelationFilter, ModuloWhereInput>
    questoes?: QuestaoListRelationFilter
    resultados?: ResultadoAvaliacaoListRelationFilter
  }, "id">

  export type AvaliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    moduloId?: SortOrder
    _count?: AvaliacaoCountOrderByAggregateInput
    _max?: AvaliacaoMaxOrderByAggregateInput
    _min?: AvaliacaoMinOrderByAggregateInput
  }

  export type AvaliacaoScalarWhereWithAggregatesInput = {
    AND?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    OR?: AvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Avaliacao"> | string
    titulo?: StringWithAggregatesFilter<"Avaliacao"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Avaliacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Avaliacao"> | Date | string
    moduloId?: StringWithAggregatesFilter<"Avaliacao"> | string
  }

  export type QuestaoWhereInput = {
    AND?: QuestaoWhereInput | QuestaoWhereInput[]
    OR?: QuestaoWhereInput[]
    NOT?: QuestaoWhereInput | QuestaoWhereInput[]
    id?: StringFilter<"Questao"> | string
    enunciado?: StringFilter<"Questao"> | string
    opcoes?: StringNullableListFilter<"Questao">
    respostaCorreta?: IntFilter<"Questao"> | number
    createdAt?: DateTimeFilter<"Questao"> | Date | string
    updatedAt?: DateTimeFilter<"Questao"> | Date | string
    avaliacaoId?: StringFilter<"Questao"> | string
    avaliacao?: XOR<AvaliacaoScalarRelationFilter, AvaliacaoWhereInput>
  }

  export type QuestaoOrderByWithRelationInput = {
    id?: SortOrder
    enunciado?: SortOrder
    opcoes?: SortOrder
    respostaCorreta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avaliacaoId?: SortOrder
    avaliacao?: AvaliacaoOrderByWithRelationInput
  }

  export type QuestaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestaoWhereInput | QuestaoWhereInput[]
    OR?: QuestaoWhereInput[]
    NOT?: QuestaoWhereInput | QuestaoWhereInput[]
    enunciado?: StringFilter<"Questao"> | string
    opcoes?: StringNullableListFilter<"Questao">
    respostaCorreta?: IntFilter<"Questao"> | number
    createdAt?: DateTimeFilter<"Questao"> | Date | string
    updatedAt?: DateTimeFilter<"Questao"> | Date | string
    avaliacaoId?: StringFilter<"Questao"> | string
    avaliacao?: XOR<AvaliacaoScalarRelationFilter, AvaliacaoWhereInput>
  }, "id">

  export type QuestaoOrderByWithAggregationInput = {
    id?: SortOrder
    enunciado?: SortOrder
    opcoes?: SortOrder
    respostaCorreta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avaliacaoId?: SortOrder
    _count?: QuestaoCountOrderByAggregateInput
    _avg?: QuestaoAvgOrderByAggregateInput
    _max?: QuestaoMaxOrderByAggregateInput
    _min?: QuestaoMinOrderByAggregateInput
    _sum?: QuestaoSumOrderByAggregateInput
  }

  export type QuestaoScalarWhereWithAggregatesInput = {
    AND?: QuestaoScalarWhereWithAggregatesInput | QuestaoScalarWhereWithAggregatesInput[]
    OR?: QuestaoScalarWhereWithAggregatesInput[]
    NOT?: QuestaoScalarWhereWithAggregatesInput | QuestaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Questao"> | string
    enunciado?: StringWithAggregatesFilter<"Questao"> | string
    opcoes?: StringNullableListFilter<"Questao">
    respostaCorreta?: IntWithAggregatesFilter<"Questao"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Questao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Questao"> | Date | string
    avaliacaoId?: StringWithAggregatesFilter<"Questao"> | string
  }

  export type ResultadoAvaliacaoWhereInput = {
    AND?: ResultadoAvaliacaoWhereInput | ResultadoAvaliacaoWhereInput[]
    OR?: ResultadoAvaliacaoWhereInput[]
    NOT?: ResultadoAvaliacaoWhereInput | ResultadoAvaliacaoWhereInput[]
    id?: StringFilter<"ResultadoAvaliacao"> | string
    respostas?: IntNullableListFilter<"ResultadoAvaliacao">
    pontuacao?: IntFilter<"ResultadoAvaliacao"> | number
    aprovado?: BoolFilter<"ResultadoAvaliacao"> | boolean
    dataRealizacao?: DateTimeFilter<"ResultadoAvaliacao"> | Date | string
    createdAt?: DateTimeFilter<"ResultadoAvaliacao"> | Date | string
    updatedAt?: DateTimeFilter<"ResultadoAvaliacao"> | Date | string
    userId?: StringFilter<"ResultadoAvaliacao"> | string
    avaliacaoId?: StringFilter<"ResultadoAvaliacao"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    avaliacao?: XOR<AvaliacaoScalarRelationFilter, AvaliacaoWhereInput>
  }

  export type ResultadoAvaliacaoOrderByWithRelationInput = {
    id?: SortOrder
    respostas?: SortOrder
    pontuacao?: SortOrder
    aprovado?: SortOrder
    dataRealizacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    avaliacaoId?: SortOrder
    user?: UserOrderByWithRelationInput
    avaliacao?: AvaliacaoOrderByWithRelationInput
  }

  export type ResultadoAvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_avaliacaoId?: ResultadoAvaliacaoUserIdAvaliacaoIdCompoundUniqueInput
    AND?: ResultadoAvaliacaoWhereInput | ResultadoAvaliacaoWhereInput[]
    OR?: ResultadoAvaliacaoWhereInput[]
    NOT?: ResultadoAvaliacaoWhereInput | ResultadoAvaliacaoWhereInput[]
    respostas?: IntNullableListFilter<"ResultadoAvaliacao">
    pontuacao?: IntFilter<"ResultadoAvaliacao"> | number
    aprovado?: BoolFilter<"ResultadoAvaliacao"> | boolean
    dataRealizacao?: DateTimeFilter<"ResultadoAvaliacao"> | Date | string
    createdAt?: DateTimeFilter<"ResultadoAvaliacao"> | Date | string
    updatedAt?: DateTimeFilter<"ResultadoAvaliacao"> | Date | string
    userId?: StringFilter<"ResultadoAvaliacao"> | string
    avaliacaoId?: StringFilter<"ResultadoAvaliacao"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    avaliacao?: XOR<AvaliacaoScalarRelationFilter, AvaliacaoWhereInput>
  }, "id" | "userId_avaliacaoId">

  export type ResultadoAvaliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    respostas?: SortOrder
    pontuacao?: SortOrder
    aprovado?: SortOrder
    dataRealizacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    avaliacaoId?: SortOrder
    _count?: ResultadoAvaliacaoCountOrderByAggregateInput
    _avg?: ResultadoAvaliacaoAvgOrderByAggregateInput
    _max?: ResultadoAvaliacaoMaxOrderByAggregateInput
    _min?: ResultadoAvaliacaoMinOrderByAggregateInput
    _sum?: ResultadoAvaliacaoSumOrderByAggregateInput
  }

  export type ResultadoAvaliacaoScalarWhereWithAggregatesInput = {
    AND?: ResultadoAvaliacaoScalarWhereWithAggregatesInput | ResultadoAvaliacaoScalarWhereWithAggregatesInput[]
    OR?: ResultadoAvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: ResultadoAvaliacaoScalarWhereWithAggregatesInput | ResultadoAvaliacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResultadoAvaliacao"> | string
    respostas?: IntNullableListFilter<"ResultadoAvaliacao">
    pontuacao?: IntWithAggregatesFilter<"ResultadoAvaliacao"> | number
    aprovado?: BoolWithAggregatesFilter<"ResultadoAvaliacao"> | boolean
    dataRealizacao?: DateTimeWithAggregatesFilter<"ResultadoAvaliacao"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ResultadoAvaliacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ResultadoAvaliacao"> | Date | string
    userId?: StringWithAggregatesFilter<"ResultadoAvaliacao"> | string
    avaliacaoId?: StringWithAggregatesFilter<"ResultadoAvaliacao"> | string
  }

  export type CertificadoWhereInput = {
    AND?: CertificadoWhereInput | CertificadoWhereInput[]
    OR?: CertificadoWhereInput[]
    NOT?: CertificadoWhereInput | CertificadoWhereInput[]
    id?: StringFilter<"Certificado"> | string
    titulo?: StringFilter<"Certificado"> | string
    codigo?: StringFilter<"Certificado"> | string
    dataEmissao?: DateTimeFilter<"Certificado"> | Date | string
    dataValidade?: DateTimeFilter<"Certificado"> | Date | string
    createdAt?: DateTimeFilter<"Certificado"> | Date | string
    updatedAt?: DateTimeFilter<"Certificado"> | Date | string
    userId?: StringFilter<"Certificado"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CertificadoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    codigo?: SortOrder
    dataEmissao?: SortOrder
    dataValidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CertificadoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codigo?: string
    AND?: CertificadoWhereInput | CertificadoWhereInput[]
    OR?: CertificadoWhereInput[]
    NOT?: CertificadoWhereInput | CertificadoWhereInput[]
    titulo?: StringFilter<"Certificado"> | string
    dataEmissao?: DateTimeFilter<"Certificado"> | Date | string
    dataValidade?: DateTimeFilter<"Certificado"> | Date | string
    createdAt?: DateTimeFilter<"Certificado"> | Date | string
    updatedAt?: DateTimeFilter<"Certificado"> | Date | string
    userId?: StringFilter<"Certificado"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "codigo">

  export type CertificadoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    codigo?: SortOrder
    dataEmissao?: SortOrder
    dataValidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: CertificadoCountOrderByAggregateInput
    _max?: CertificadoMaxOrderByAggregateInput
    _min?: CertificadoMinOrderByAggregateInput
  }

  export type CertificadoScalarWhereWithAggregatesInput = {
    AND?: CertificadoScalarWhereWithAggregatesInput | CertificadoScalarWhereWithAggregatesInput[]
    OR?: CertificadoScalarWhereWithAggregatesInput[]
    NOT?: CertificadoScalarWhereWithAggregatesInput | CertificadoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Certificado"> | string
    titulo?: StringWithAggregatesFilter<"Certificado"> | string
    codigo?: StringWithAggregatesFilter<"Certificado"> | string
    dataEmissao?: DateTimeWithAggregatesFilter<"Certificado"> | Date | string
    dataValidade?: DateTimeWithAggregatesFilter<"Certificado"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Certificado"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Certificado"> | Date | string
    userId?: StringWithAggregatesFilter<"Certificado"> | string
  }

  export type ArquivoWhereInput = {
    AND?: ArquivoWhereInput | ArquivoWhereInput[]
    OR?: ArquivoWhereInput[]
    NOT?: ArquivoWhereInput | ArquivoWhereInput[]
    id?: StringFilter<"Arquivo"> | string
    nome?: StringFilter<"Arquivo"> | string
    caminho?: StringFilter<"Arquivo"> | string
    tipo?: StringFilter<"Arquivo"> | string
    tamanho?: IntFilter<"Arquivo"> | number
    entidadeTipo?: StringFilter<"Arquivo"> | string
    entidadeId?: StringFilter<"Arquivo"> | string
    createdAt?: DateTimeFilter<"Arquivo"> | Date | string
    updatedAt?: DateTimeFilter<"Arquivo"> | Date | string
  }

  export type ArquivoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    caminho?: SortOrder
    tipo?: SortOrder
    tamanho?: SortOrder
    entidadeTipo?: SortOrder
    entidadeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArquivoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArquivoWhereInput | ArquivoWhereInput[]
    OR?: ArquivoWhereInput[]
    NOT?: ArquivoWhereInput | ArquivoWhereInput[]
    nome?: StringFilter<"Arquivo"> | string
    caminho?: StringFilter<"Arquivo"> | string
    tipo?: StringFilter<"Arquivo"> | string
    tamanho?: IntFilter<"Arquivo"> | number
    entidadeTipo?: StringFilter<"Arquivo"> | string
    entidadeId?: StringFilter<"Arquivo"> | string
    createdAt?: DateTimeFilter<"Arquivo"> | Date | string
    updatedAt?: DateTimeFilter<"Arquivo"> | Date | string
  }, "id">

  export type ArquivoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    caminho?: SortOrder
    tipo?: SortOrder
    tamanho?: SortOrder
    entidadeTipo?: SortOrder
    entidadeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArquivoCountOrderByAggregateInput
    _avg?: ArquivoAvgOrderByAggregateInput
    _max?: ArquivoMaxOrderByAggregateInput
    _min?: ArquivoMinOrderByAggregateInput
    _sum?: ArquivoSumOrderByAggregateInput
  }

  export type ArquivoScalarWhereWithAggregatesInput = {
    AND?: ArquivoScalarWhereWithAggregatesInput | ArquivoScalarWhereWithAggregatesInput[]
    OR?: ArquivoScalarWhereWithAggregatesInput[]
    NOT?: ArquivoScalarWhereWithAggregatesInput | ArquivoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Arquivo"> | string
    nome?: StringWithAggregatesFilter<"Arquivo"> | string
    caminho?: StringWithAggregatesFilter<"Arquivo"> | string
    tipo?: StringWithAggregatesFilter<"Arquivo"> | string
    tamanho?: IntWithAggregatesFilter<"Arquivo"> | number
    entidadeTipo?: StringWithAggregatesFilter<"Arquivo"> | string
    entidadeId?: StringWithAggregatesFilter<"Arquivo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Arquivo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Arquivo"> | Date | string
  }

  export type NotificacaoWhereInput = {
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    id?: StringFilter<"Notificacao"> | string
    titulo?: StringFilter<"Notificacao"> | string
    mensagem?: StringFilter<"Notificacao"> | string
    lida?: BoolFilter<"Notificacao"> | boolean
    tipo?: StringFilter<"Notificacao"> | string
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeFilter<"Notificacao"> | Date | string
    userId?: StringFilter<"Notificacao"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificacaoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    titulo?: StringFilter<"Notificacao"> | string
    mensagem?: StringFilter<"Notificacao"> | string
    lida?: BoolFilter<"Notificacao"> | boolean
    tipo?: StringFilter<"Notificacao"> | string
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeFilter<"Notificacao"> | Date | string
    userId?: StringFilter<"Notificacao"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificacaoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: NotificacaoCountOrderByAggregateInput
    _max?: NotificacaoMaxOrderByAggregateInput
    _min?: NotificacaoMinOrderByAggregateInput
  }

  export type NotificacaoScalarWhereWithAggregatesInput = {
    AND?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    OR?: NotificacaoScalarWhereWithAggregatesInput[]
    NOT?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notificacao"> | string
    titulo?: StringWithAggregatesFilter<"Notificacao"> | string
    mensagem?: StringWithAggregatesFilter<"Notificacao"> | string
    lida?: BoolWithAggregatesFilter<"Notificacao"> | boolean
    tipo?: StringWithAggregatesFilter<"Notificacao"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
    userId?: StringWithAggregatesFilter<"Notificacao"> | string
  }

  export type AtualizacaoRegulatoriaWhereInput = {
    AND?: AtualizacaoRegulatoriaWhereInput | AtualizacaoRegulatoriaWhereInput[]
    OR?: AtualizacaoRegulatoriaWhereInput[]
    NOT?: AtualizacaoRegulatoriaWhereInput | AtualizacaoRegulatoriaWhereInput[]
    id?: StringFilter<"AtualizacaoRegulatoria"> | string
    titulo?: StringFilter<"AtualizacaoRegulatoria"> | string
    descricao?: StringFilter<"AtualizacaoRegulatoria"> | string
    fonte?: StringFilter<"AtualizacaoRegulatoria"> | string
    dataPublicacao?: DateTimeFilter<"AtualizacaoRegulatoria"> | Date | string
    dataVigencia?: DateTimeNullableFilter<"AtualizacaoRegulatoria"> | Date | string | null
    status?: StringFilter<"AtualizacaoRegulatoria"> | string
    createdAt?: DateTimeFilter<"AtualizacaoRegulatoria"> | Date | string
    updatedAt?: DateTimeFilter<"AtualizacaoRegulatoria"> | Date | string
  }

  export type AtualizacaoRegulatoriaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    fonte?: SortOrder
    dataPublicacao?: SortOrder
    dataVigencia?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AtualizacaoRegulatoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AtualizacaoRegulatoriaWhereInput | AtualizacaoRegulatoriaWhereInput[]
    OR?: AtualizacaoRegulatoriaWhereInput[]
    NOT?: AtualizacaoRegulatoriaWhereInput | AtualizacaoRegulatoriaWhereInput[]
    titulo?: StringFilter<"AtualizacaoRegulatoria"> | string
    descricao?: StringFilter<"AtualizacaoRegulatoria"> | string
    fonte?: StringFilter<"AtualizacaoRegulatoria"> | string
    dataPublicacao?: DateTimeFilter<"AtualizacaoRegulatoria"> | Date | string
    dataVigencia?: DateTimeNullableFilter<"AtualizacaoRegulatoria"> | Date | string | null
    status?: StringFilter<"AtualizacaoRegulatoria"> | string
    createdAt?: DateTimeFilter<"AtualizacaoRegulatoria"> | Date | string
    updatedAt?: DateTimeFilter<"AtualizacaoRegulatoria"> | Date | string
  }, "id">

  export type AtualizacaoRegulatoriaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    fonte?: SortOrder
    dataPublicacao?: SortOrder
    dataVigencia?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AtualizacaoRegulatoriaCountOrderByAggregateInput
    _max?: AtualizacaoRegulatoriaMaxOrderByAggregateInput
    _min?: AtualizacaoRegulatoriaMinOrderByAggregateInput
  }

  export type AtualizacaoRegulatoriaScalarWhereWithAggregatesInput = {
    AND?: AtualizacaoRegulatoriaScalarWhereWithAggregatesInput | AtualizacaoRegulatoriaScalarWhereWithAggregatesInput[]
    OR?: AtualizacaoRegulatoriaScalarWhereWithAggregatesInput[]
    NOT?: AtualizacaoRegulatoriaScalarWhereWithAggregatesInput | AtualizacaoRegulatoriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AtualizacaoRegulatoria"> | string
    titulo?: StringWithAggregatesFilter<"AtualizacaoRegulatoria"> | string
    descricao?: StringWithAggregatesFilter<"AtualizacaoRegulatoria"> | string
    fonte?: StringWithAggregatesFilter<"AtualizacaoRegulatoria"> | string
    dataPublicacao?: DateTimeWithAggregatesFilter<"AtualizacaoRegulatoria"> | Date | string
    dataVigencia?: DateTimeNullableWithAggregatesFilter<"AtualizacaoRegulatoria"> | Date | string | null
    status?: StringWithAggregatesFilter<"AtualizacaoRegulatoria"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AtualizacaoRegulatoria"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AtualizacaoRegulatoria"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    farmacia?: FarmaciaCreateNestedOneWithoutUsuariosInput
    progressos?: ProgressoCreateNestedManyWithoutUserInput
    resultados?: ResultadoAvaliacaoCreateNestedManyWithoutUserInput
    certificados?: CertificadoCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    farmaciaId?: string | null
    progressos?: ProgressoUncheckedCreateNestedManyWithoutUserInput
    resultados?: ResultadoAvaliacaoUncheckedCreateNestedManyWithoutUserInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmacia?: FarmaciaUpdateOneWithoutUsuariosNestedInput
    progressos?: ProgressoUpdateManyWithoutUserNestedInput
    resultados?: ResultadoAvaliacaoUpdateManyWithoutUserNestedInput
    certificados?: CertificadoUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmaciaId?: NullableStringFieldUpdateOperationsInput | string | null
    progressos?: ProgressoUncheckedUpdateManyWithoutUserNestedInput
    resultados?: ResultadoAvaliacaoUncheckedUpdateManyWithoutUserNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    farmaciaId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmaciaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FarmaciaCreateInput = {
    id?: string
    nome: string
    cnpj: string
    endereco: string
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UserCreateNestedManyWithoutFarmaciaInput
  }

  export type FarmaciaUncheckedCreateInput = {
    id?: string
    nome: string
    cnpj: string
    endereco: string
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarios?: UserUncheckedCreateNestedManyWithoutFarmaciaInput
  }

  export type FarmaciaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UserUpdateManyWithoutFarmaciaNestedInput
  }

  export type FarmaciaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UserUncheckedUpdateManyWithoutFarmaciaNestedInput
  }

  export type FarmaciaCreateManyInput = {
    id?: string
    nome: string
    cnpj: string
    endereco: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmaciaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmaciaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateInput = {
    id?: string
    nome: string
    descricao: string
    ordem: number
    createdAt?: Date | string
    updatedAt?: Date | string
    modulos?: ModuloCreateNestedManyWithoutCategoriaInput
    medicamentos?: MedicamentoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: string
    nome: string
    descricao: string
    ordem: number
    createdAt?: Date | string
    updatedAt?: Date | string
    modulos?: ModuloUncheckedCreateNestedManyWithoutCategoriaInput
    medicamentos?: MedicamentoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulos?: ModuloUpdateManyWithoutCategoriaNestedInput
    medicamentos?: MedicamentoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulos?: ModuloUncheckedUpdateManyWithoutCategoriaNestedInput
    medicamentos?: MedicamentoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: string
    nome: string
    descricao: string
    ordem: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuloCreateInput = {
    id?: string
    titulo: string
    descricao: string
    conteudo: string
    ordem: number
    versao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutModulosInput
    progressos?: ProgressoCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutModuloInput
  }

  export type ModuloUncheckedCreateInput = {
    id?: string
    titulo: string
    descricao: string
    conteudo: string
    ordem: number
    versao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoriaId: string
    progressos?: ProgressoUncheckedCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutModuloInput
  }

  export type ModuloUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    versao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutModulosNestedInput
    progressos?: ProgressoUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    versao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    progressos?: ProgressoUncheckedUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type ModuloCreateManyInput = {
    id?: string
    titulo: string
    descricao: string
    conteudo: string
    ordem: number
    versao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoriaId: string
  }

  export type ModuloUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    versao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuloUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    versao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaId?: StringFieldUpdateOperationsInput | string
  }

  export type MedicamentoCreateInput = {
    id?: string
    nome: string
    principioAtivo: string
    formaFarmaceutica: string
    concentracao: string
    indicacoes?: string | null
    contraindicacoes?: string | null
    efeitosAdversos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutMedicamentosInput
  }

  export type MedicamentoUncheckedCreateInput = {
    id?: string
    nome: string
    principioAtivo: string
    formaFarmaceutica: string
    concentracao: string
    indicacoes?: string | null
    contraindicacoes?: string | null
    efeitosAdversos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoriaId: string
  }

  export type MedicamentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    principioAtivo?: StringFieldUpdateOperationsInput | string
    formaFarmaceutica?: StringFieldUpdateOperationsInput | string
    concentracao?: StringFieldUpdateOperationsInput | string
    indicacoes?: NullableStringFieldUpdateOperationsInput | string | null
    contraindicacoes?: NullableStringFieldUpdateOperationsInput | string | null
    efeitosAdversos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutMedicamentosNestedInput
  }

  export type MedicamentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    principioAtivo?: StringFieldUpdateOperationsInput | string
    formaFarmaceutica?: StringFieldUpdateOperationsInput | string
    concentracao?: StringFieldUpdateOperationsInput | string
    indicacoes?: NullableStringFieldUpdateOperationsInput | string | null
    contraindicacoes?: NullableStringFieldUpdateOperationsInput | string | null
    efeitosAdversos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaId?: StringFieldUpdateOperationsInput | string
  }

  export type MedicamentoCreateManyInput = {
    id?: string
    nome: string
    principioAtivo: string
    formaFarmaceutica: string
    concentracao: string
    indicacoes?: string | null
    contraindicacoes?: string | null
    efeitosAdversos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoriaId: string
  }

  export type MedicamentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    principioAtivo?: StringFieldUpdateOperationsInput | string
    formaFarmaceutica?: StringFieldUpdateOperationsInput | string
    concentracao?: StringFieldUpdateOperationsInput | string
    indicacoes?: NullableStringFieldUpdateOperationsInput | string | null
    contraindicacoes?: NullableStringFieldUpdateOperationsInput | string | null
    efeitosAdversos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicamentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    principioAtivo?: StringFieldUpdateOperationsInput | string
    formaFarmaceutica?: StringFieldUpdateOperationsInput | string
    concentracao?: StringFieldUpdateOperationsInput | string
    indicacoes?: NullableStringFieldUpdateOperationsInput | string | null
    contraindicacoes?: NullableStringFieldUpdateOperationsInput | string | null
    efeitosAdversos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressoCreateInput = {
    id?: string
    progresso?: number
    concluido?: boolean
    ultimoAcesso?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProgressosInput
    modulo: ModuloCreateNestedOneWithoutProgressosInput
  }

  export type ProgressoUncheckedCreateInput = {
    id?: string
    progresso?: number
    concluido?: boolean
    ultimoAcesso?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    moduloId: string
  }

  export type ProgressoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    ultimoAcesso?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressosNestedInput
    modulo?: ModuloUpdateOneRequiredWithoutProgressosNestedInput
  }

  export type ProgressoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    ultimoAcesso?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    moduloId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressoCreateManyInput = {
    id?: string
    progresso?: number
    concluido?: boolean
    ultimoAcesso?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    moduloId: string
  }

  export type ProgressoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    ultimoAcesso?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    ultimoAcesso?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    moduloId?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoCreateInput = {
    id?: string
    titulo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modulo: ModuloCreateNestedOneWithoutAvaliacoesInput
    questoes?: QuestaoCreateNestedManyWithoutAvaliacaoInput
    resultados?: ResultadoAvaliacaoCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateInput = {
    id?: string
    titulo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moduloId: string
    questoes?: QuestaoUncheckedCreateNestedManyWithoutAvaliacaoInput
    resultados?: ResultadoAvaliacaoUncheckedCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulo?: ModuloUpdateOneRequiredWithoutAvaliacoesNestedInput
    questoes?: QuestaoUpdateManyWithoutAvaliacaoNestedInput
    resultados?: ResultadoAvaliacaoUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduloId?: StringFieldUpdateOperationsInput | string
    questoes?: QuestaoUncheckedUpdateManyWithoutAvaliacaoNestedInput
    resultados?: ResultadoAvaliacaoUncheckedUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoCreateManyInput = {
    id?: string
    titulo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moduloId: string
  }

  export type AvaliacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduloId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestaoCreateInput = {
    id?: string
    enunciado: string
    opcoes?: QuestaoCreateopcoesInput | string[]
    respostaCorreta: number
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacao: AvaliacaoCreateNestedOneWithoutQuestoesInput
  }

  export type QuestaoUncheckedCreateInput = {
    id?: string
    enunciado: string
    opcoes?: QuestaoCreateopcoesInput | string[]
    respostaCorreta: number
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacaoId: string
  }

  export type QuestaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    opcoes?: QuestaoUpdateopcoesInput | string[]
    respostaCorreta?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateOneRequiredWithoutQuestoesNestedInput
  }

  export type QuestaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    opcoes?: QuestaoUpdateopcoesInput | string[]
    respostaCorreta?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacaoId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestaoCreateManyInput = {
    id?: string
    enunciado: string
    opcoes?: QuestaoCreateopcoesInput | string[]
    respostaCorreta: number
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacaoId: string
  }

  export type QuestaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    opcoes?: QuestaoUpdateopcoesInput | string[]
    respostaCorreta?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    opcoes?: QuestaoUpdateopcoesInput | string[]
    respostaCorreta?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacaoId?: StringFieldUpdateOperationsInput | string
  }

  export type ResultadoAvaliacaoCreateInput = {
    id?: string
    respostas?: ResultadoAvaliacaoCreaterespostasInput | number[]
    pontuacao: number
    aprovado: boolean
    dataRealizacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResultadosInput
    avaliacao: AvaliacaoCreateNestedOneWithoutResultadosInput
  }

  export type ResultadoAvaliacaoUncheckedCreateInput = {
    id?: string
    respostas?: ResultadoAvaliacaoCreaterespostasInput | number[]
    pontuacao: number
    aprovado: boolean
    dataRealizacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    avaliacaoId: string
  }

  export type ResultadoAvaliacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    respostas?: ResultadoAvaliacaoUpdaterespostasInput | number[]
    pontuacao?: IntFieldUpdateOperationsInput | number
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataRealizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResultadosNestedInput
    avaliacao?: AvaliacaoUpdateOneRequiredWithoutResultadosNestedInput
  }

  export type ResultadoAvaliacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    respostas?: ResultadoAvaliacaoUpdaterespostasInput | number[]
    pontuacao?: IntFieldUpdateOperationsInput | number
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataRealizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    avaliacaoId?: StringFieldUpdateOperationsInput | string
  }

  export type ResultadoAvaliacaoCreateManyInput = {
    id?: string
    respostas?: ResultadoAvaliacaoCreaterespostasInput | number[]
    pontuacao: number
    aprovado: boolean
    dataRealizacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    avaliacaoId: string
  }

  export type ResultadoAvaliacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    respostas?: ResultadoAvaliacaoUpdaterespostasInput | number[]
    pontuacao?: IntFieldUpdateOperationsInput | number
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataRealizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoAvaliacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    respostas?: ResultadoAvaliacaoUpdaterespostasInput | number[]
    pontuacao?: IntFieldUpdateOperationsInput | number
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataRealizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    avaliacaoId?: StringFieldUpdateOperationsInput | string
  }

  export type CertificadoCreateInput = {
    id?: string
    titulo: string
    codigo: string
    dataEmissao?: Date | string
    dataValidade: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCertificadosInput
  }

  export type CertificadoUncheckedCreateInput = {
    id?: string
    titulo: string
    codigo: string
    dataEmissao?: Date | string
    dataValidade: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CertificadoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCertificadosNestedInput
  }

  export type CertificadoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CertificadoCreateManyInput = {
    id?: string
    titulo: string
    codigo: string
    dataEmissao?: Date | string
    dataValidade: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CertificadoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ArquivoCreateInput = {
    id?: string
    nome: string
    caminho: string
    tipo: string
    tamanho: number
    entidadeTipo: string
    entidadeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArquivoUncheckedCreateInput = {
    id?: string
    nome: string
    caminho: string
    tipo: string
    tamanho: number
    entidadeTipo: string
    entidadeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArquivoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    entidadeTipo?: StringFieldUpdateOperationsInput | string
    entidadeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArquivoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    entidadeTipo?: StringFieldUpdateOperationsInput | string
    entidadeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArquivoCreateManyInput = {
    id?: string
    nome: string
    caminho: string
    tipo: string
    tamanho: number
    entidadeTipo: string
    entidadeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArquivoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    entidadeTipo?: StringFieldUpdateOperationsInput | string
    entidadeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArquivoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    caminho?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    tamanho?: IntFieldUpdateOperationsInput | number
    entidadeTipo?: StringFieldUpdateOperationsInput | string
    entidadeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoCreateInput = {
    id?: string
    titulo: string
    mensagem: string
    lida?: boolean
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificacoesInput
  }

  export type NotificacaoUncheckedCreateInput = {
    id?: string
    titulo: string
    mensagem: string
    lida?: boolean
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type NotificacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificacoesNestedInput
  }

  export type NotificacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificacaoCreateManyInput = {
    id?: string
    titulo: string
    mensagem: string
    lida?: boolean
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type NotificacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AtualizacaoRegulatoriaCreateInput = {
    id?: string
    titulo: string
    descricao: string
    fonte: string
    dataPublicacao: Date | string
    dataVigencia?: Date | string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtualizacaoRegulatoriaUncheckedCreateInput = {
    id?: string
    titulo: string
    descricao: string
    fonte: string
    dataPublicacao: Date | string
    dataVigencia?: Date | string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtualizacaoRegulatoriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    fonte?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataVigencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtualizacaoRegulatoriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    fonte?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataVigencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtualizacaoRegulatoriaCreateManyInput = {
    id?: string
    titulo: string
    descricao: string
    fonte: string
    dataPublicacao: Date | string
    dataVigencia?: Date | string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtualizacaoRegulatoriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    fonte?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataVigencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtualizacaoRegulatoriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    fonte?: StringFieldUpdateOperationsInput | string
    dataPublicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataVigencia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FarmaciaNullableScalarRelationFilter = {
    is?: FarmaciaWhereInput | null
    isNot?: FarmaciaWhereInput | null
  }

  export type ProgressoListRelationFilter = {
    every?: ProgressoWhereInput
    some?: ProgressoWhereInput
    none?: ProgressoWhereInput
  }

  export type ResultadoAvaliacaoListRelationFilter = {
    every?: ResultadoAvaliacaoWhereInput
    some?: ResultadoAvaliacaoWhereInput
    none?: ResultadoAvaliacaoWhereInput
  }

  export type CertificadoListRelationFilter = {
    every?: CertificadoWhereInput
    some?: CertificadoWhereInput
    none?: CertificadoWhereInput
  }

  export type NotificacaoListRelationFilter = {
    every?: NotificacaoWhereInput
    some?: NotificacaoWhereInput
    none?: NotificacaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProgressoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResultadoAvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farmaciaId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farmaciaId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farmaciaId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FarmaciaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmaciaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmaciaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    endereco?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ModuloListRelationFilter = {
    every?: ModuloWhereInput
    some?: ModuloWhereInput
    none?: ModuloWhereInput
  }

  export type MedicamentoListRelationFilter = {
    every?: MedicamentoWhereInput
    some?: MedicamentoWhereInput
    none?: MedicamentoWhereInput
  }

  export type ModuloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    ordem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    ordem?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    ordem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    ordem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    ordem?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type AvaliacaoListRelationFilter = {
    every?: AvaliacaoWhereInput
    some?: AvaliacaoWhereInput
    none?: AvaliacaoWhereInput
  }

  export type AvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuloCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    conteudo?: SortOrder
    ordem?: SortOrder
    versao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoriaId?: SortOrder
  }

  export type ModuloAvgOrderByAggregateInput = {
    ordem?: SortOrder
  }

  export type ModuloMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    conteudo?: SortOrder
    ordem?: SortOrder
    versao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoriaId?: SortOrder
  }

  export type ModuloMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    conteudo?: SortOrder
    ordem?: SortOrder
    versao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoriaId?: SortOrder
  }

  export type ModuloSumOrderByAggregateInput = {
    ordem?: SortOrder
  }

  export type MedicamentoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    principioAtivo?: SortOrder
    formaFarmaceutica?: SortOrder
    concentracao?: SortOrder
    indicacoes?: SortOrder
    contraindicacoes?: SortOrder
    efeitosAdversos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoriaId?: SortOrder
  }

  export type MedicamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    principioAtivo?: SortOrder
    formaFarmaceutica?: SortOrder
    concentracao?: SortOrder
    indicacoes?: SortOrder
    contraindicacoes?: SortOrder
    efeitosAdversos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoriaId?: SortOrder
  }

  export type MedicamentoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    principioAtivo?: SortOrder
    formaFarmaceutica?: SortOrder
    concentracao?: SortOrder
    indicacoes?: SortOrder
    contraindicacoes?: SortOrder
    efeitosAdversos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoriaId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ModuloScalarRelationFilter = {
    is?: ModuloWhereInput
    isNot?: ModuloWhereInput
  }

  export type ProgressoUserIdModuloIdCompoundUniqueInput = {
    userId: string
    moduloId: string
  }

  export type ProgressoCountOrderByAggregateInput = {
    id?: SortOrder
    progresso?: SortOrder
    concluido?: SortOrder
    ultimoAcesso?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    moduloId?: SortOrder
  }

  export type ProgressoAvgOrderByAggregateInput = {
    progresso?: SortOrder
  }

  export type ProgressoMaxOrderByAggregateInput = {
    id?: SortOrder
    progresso?: SortOrder
    concluido?: SortOrder
    ultimoAcesso?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    moduloId?: SortOrder
  }

  export type ProgressoMinOrderByAggregateInput = {
    id?: SortOrder
    progresso?: SortOrder
    concluido?: SortOrder
    ultimoAcesso?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    moduloId?: SortOrder
  }

  export type ProgressoSumOrderByAggregateInput = {
    progresso?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type QuestaoListRelationFilter = {
    every?: QuestaoWhereInput
    some?: QuestaoWhereInput
    none?: QuestaoWhereInput
  }

  export type QuestaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvaliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    moduloId?: SortOrder
  }

  export type AvaliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    moduloId?: SortOrder
  }

  export type AvaliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    moduloId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AvaliacaoScalarRelationFilter = {
    is?: AvaliacaoWhereInput
    isNot?: AvaliacaoWhereInput
  }

  export type QuestaoCountOrderByAggregateInput = {
    id?: SortOrder
    enunciado?: SortOrder
    opcoes?: SortOrder
    respostaCorreta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avaliacaoId?: SortOrder
  }

  export type QuestaoAvgOrderByAggregateInput = {
    respostaCorreta?: SortOrder
  }

  export type QuestaoMaxOrderByAggregateInput = {
    id?: SortOrder
    enunciado?: SortOrder
    respostaCorreta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avaliacaoId?: SortOrder
  }

  export type QuestaoMinOrderByAggregateInput = {
    id?: SortOrder
    enunciado?: SortOrder
    respostaCorreta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    avaliacaoId?: SortOrder
  }

  export type QuestaoSumOrderByAggregateInput = {
    respostaCorreta?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ResultadoAvaliacaoUserIdAvaliacaoIdCompoundUniqueInput = {
    userId: string
    avaliacaoId: string
  }

  export type ResultadoAvaliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    respostas?: SortOrder
    pontuacao?: SortOrder
    aprovado?: SortOrder
    dataRealizacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    avaliacaoId?: SortOrder
  }

  export type ResultadoAvaliacaoAvgOrderByAggregateInput = {
    respostas?: SortOrder
    pontuacao?: SortOrder
  }

  export type ResultadoAvaliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    pontuacao?: SortOrder
    aprovado?: SortOrder
    dataRealizacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    avaliacaoId?: SortOrder
  }

  export type ResultadoAvaliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    pontuacao?: SortOrder
    aprovado?: SortOrder
    dataRealizacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    avaliacaoId?: SortOrder
  }

  export type ResultadoAvaliacaoSumOrderByAggregateInput = {
    respostas?: SortOrder
    pontuacao?: SortOrder
  }

  export type CertificadoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    codigo?: SortOrder
    dataEmissao?: SortOrder
    dataValidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CertificadoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    codigo?: SortOrder
    dataEmissao?: SortOrder
    dataValidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CertificadoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    codigo?: SortOrder
    dataEmissao?: SortOrder
    dataValidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ArquivoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    caminho?: SortOrder
    tipo?: SortOrder
    tamanho?: SortOrder
    entidadeTipo?: SortOrder
    entidadeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArquivoAvgOrderByAggregateInput = {
    tamanho?: SortOrder
  }

  export type ArquivoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    caminho?: SortOrder
    tipo?: SortOrder
    tamanho?: SortOrder
    entidadeTipo?: SortOrder
    entidadeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArquivoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    caminho?: SortOrder
    tipo?: SortOrder
    tamanho?: SortOrder
    entidadeTipo?: SortOrder
    entidadeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArquivoSumOrderByAggregateInput = {
    tamanho?: SortOrder
  }

  export type NotificacaoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type NotificacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type NotificacaoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    mensagem?: SortOrder
    lida?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AtualizacaoRegulatoriaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    fonte?: SortOrder
    dataPublicacao?: SortOrder
    dataVigencia?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AtualizacaoRegulatoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    fonte?: SortOrder
    dataPublicacao?: SortOrder
    dataVigencia?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AtualizacaoRegulatoriaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    fonte?: SortOrder
    dataPublicacao?: SortOrder
    dataVigencia?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FarmaciaCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<FarmaciaCreateWithoutUsuariosInput, FarmaciaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: FarmaciaCreateOrConnectWithoutUsuariosInput
    connect?: FarmaciaWhereUniqueInput
  }

  export type ProgressoCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressoCreateWithoutUserInput, ProgressoUncheckedCreateWithoutUserInput> | ProgressoCreateWithoutUserInput[] | ProgressoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressoCreateOrConnectWithoutUserInput | ProgressoCreateOrConnectWithoutUserInput[]
    createMany?: ProgressoCreateManyUserInputEnvelope
    connect?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
  }

  export type ResultadoAvaliacaoCreateNestedManyWithoutUserInput = {
    create?: XOR<ResultadoAvaliacaoCreateWithoutUserInput, ResultadoAvaliacaoUncheckedCreateWithoutUserInput> | ResultadoAvaliacaoCreateWithoutUserInput[] | ResultadoAvaliacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResultadoAvaliacaoCreateOrConnectWithoutUserInput | ResultadoAvaliacaoCreateOrConnectWithoutUserInput[]
    createMany?: ResultadoAvaliacaoCreateManyUserInputEnvelope
    connect?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
  }

  export type CertificadoCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificadoCreateWithoutUserInput, CertificadoUncheckedCreateWithoutUserInput> | CertificadoCreateWithoutUserInput[] | CertificadoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutUserInput | CertificadoCreateOrConnectWithoutUserInput[]
    createMany?: CertificadoCreateManyUserInputEnvelope
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
  }

  export type NotificacaoCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificacaoCreateWithoutUserInput, NotificacaoUncheckedCreateWithoutUserInput> | NotificacaoCreateWithoutUserInput[] | NotificacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUserInput | NotificacaoCreateOrConnectWithoutUserInput[]
    createMany?: NotificacaoCreateManyUserInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type ProgressoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressoCreateWithoutUserInput, ProgressoUncheckedCreateWithoutUserInput> | ProgressoCreateWithoutUserInput[] | ProgressoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressoCreateOrConnectWithoutUserInput | ProgressoCreateOrConnectWithoutUserInput[]
    createMany?: ProgressoCreateManyUserInputEnvelope
    connect?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
  }

  export type ResultadoAvaliacaoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResultadoAvaliacaoCreateWithoutUserInput, ResultadoAvaliacaoUncheckedCreateWithoutUserInput> | ResultadoAvaliacaoCreateWithoutUserInput[] | ResultadoAvaliacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResultadoAvaliacaoCreateOrConnectWithoutUserInput | ResultadoAvaliacaoCreateOrConnectWithoutUserInput[]
    createMany?: ResultadoAvaliacaoCreateManyUserInputEnvelope
    connect?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
  }

  export type CertificadoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificadoCreateWithoutUserInput, CertificadoUncheckedCreateWithoutUserInput> | CertificadoCreateWithoutUserInput[] | CertificadoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutUserInput | CertificadoCreateOrConnectWithoutUserInput[]
    createMany?: CertificadoCreateManyUserInputEnvelope
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
  }

  export type NotificacaoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificacaoCreateWithoutUserInput, NotificacaoUncheckedCreateWithoutUserInput> | NotificacaoCreateWithoutUserInput[] | NotificacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUserInput | NotificacaoCreateOrConnectWithoutUserInput[]
    createMany?: NotificacaoCreateManyUserInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FarmaciaUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<FarmaciaCreateWithoutUsuariosInput, FarmaciaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: FarmaciaCreateOrConnectWithoutUsuariosInput
    upsert?: FarmaciaUpsertWithoutUsuariosInput
    disconnect?: FarmaciaWhereInput | boolean
    delete?: FarmaciaWhereInput | boolean
    connect?: FarmaciaWhereUniqueInput
    update?: XOR<XOR<FarmaciaUpdateToOneWithWhereWithoutUsuariosInput, FarmaciaUpdateWithoutUsuariosInput>, FarmaciaUncheckedUpdateWithoutUsuariosInput>
  }

  export type ProgressoUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressoCreateWithoutUserInput, ProgressoUncheckedCreateWithoutUserInput> | ProgressoCreateWithoutUserInput[] | ProgressoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressoCreateOrConnectWithoutUserInput | ProgressoCreateOrConnectWithoutUserInput[]
    upsert?: ProgressoUpsertWithWhereUniqueWithoutUserInput | ProgressoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressoCreateManyUserInputEnvelope
    set?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
    disconnect?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
    delete?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
    connect?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
    update?: ProgressoUpdateWithWhereUniqueWithoutUserInput | ProgressoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressoUpdateManyWithWhereWithoutUserInput | ProgressoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressoScalarWhereInput | ProgressoScalarWhereInput[]
  }

  export type ResultadoAvaliacaoUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResultadoAvaliacaoCreateWithoutUserInput, ResultadoAvaliacaoUncheckedCreateWithoutUserInput> | ResultadoAvaliacaoCreateWithoutUserInput[] | ResultadoAvaliacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResultadoAvaliacaoCreateOrConnectWithoutUserInput | ResultadoAvaliacaoCreateOrConnectWithoutUserInput[]
    upsert?: ResultadoAvaliacaoUpsertWithWhereUniqueWithoutUserInput | ResultadoAvaliacaoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResultadoAvaliacaoCreateManyUserInputEnvelope
    set?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
    disconnect?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
    delete?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
    connect?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
    update?: ResultadoAvaliacaoUpdateWithWhereUniqueWithoutUserInput | ResultadoAvaliacaoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResultadoAvaliacaoUpdateManyWithWhereWithoutUserInput | ResultadoAvaliacaoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResultadoAvaliacaoScalarWhereInput | ResultadoAvaliacaoScalarWhereInput[]
  }

  export type CertificadoUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificadoCreateWithoutUserInput, CertificadoUncheckedCreateWithoutUserInput> | CertificadoCreateWithoutUserInput[] | CertificadoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutUserInput | CertificadoCreateOrConnectWithoutUserInput[]
    upsert?: CertificadoUpsertWithWhereUniqueWithoutUserInput | CertificadoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificadoCreateManyUserInputEnvelope
    set?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    disconnect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    delete?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    update?: CertificadoUpdateWithWhereUniqueWithoutUserInput | CertificadoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificadoUpdateManyWithWhereWithoutUserInput | CertificadoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
  }

  export type NotificacaoUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificacaoCreateWithoutUserInput, NotificacaoUncheckedCreateWithoutUserInput> | NotificacaoCreateWithoutUserInput[] | NotificacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUserInput | NotificacaoCreateOrConnectWithoutUserInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutUserInput | NotificacaoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificacaoCreateManyUserInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutUserInput | NotificacaoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutUserInput | NotificacaoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProgressoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressoCreateWithoutUserInput, ProgressoUncheckedCreateWithoutUserInput> | ProgressoCreateWithoutUserInput[] | ProgressoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressoCreateOrConnectWithoutUserInput | ProgressoCreateOrConnectWithoutUserInput[]
    upsert?: ProgressoUpsertWithWhereUniqueWithoutUserInput | ProgressoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressoCreateManyUserInputEnvelope
    set?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
    disconnect?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
    delete?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
    connect?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
    update?: ProgressoUpdateWithWhereUniqueWithoutUserInput | ProgressoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressoUpdateManyWithWhereWithoutUserInput | ProgressoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressoScalarWhereInput | ProgressoScalarWhereInput[]
  }

  export type ResultadoAvaliacaoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResultadoAvaliacaoCreateWithoutUserInput, ResultadoAvaliacaoUncheckedCreateWithoutUserInput> | ResultadoAvaliacaoCreateWithoutUserInput[] | ResultadoAvaliacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResultadoAvaliacaoCreateOrConnectWithoutUserInput | ResultadoAvaliacaoCreateOrConnectWithoutUserInput[]
    upsert?: ResultadoAvaliacaoUpsertWithWhereUniqueWithoutUserInput | ResultadoAvaliacaoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResultadoAvaliacaoCreateManyUserInputEnvelope
    set?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
    disconnect?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
    delete?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
    connect?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
    update?: ResultadoAvaliacaoUpdateWithWhereUniqueWithoutUserInput | ResultadoAvaliacaoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResultadoAvaliacaoUpdateManyWithWhereWithoutUserInput | ResultadoAvaliacaoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResultadoAvaliacaoScalarWhereInput | ResultadoAvaliacaoScalarWhereInput[]
  }

  export type CertificadoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificadoCreateWithoutUserInput, CertificadoUncheckedCreateWithoutUserInput> | CertificadoCreateWithoutUserInput[] | CertificadoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificadoCreateOrConnectWithoutUserInput | CertificadoCreateOrConnectWithoutUserInput[]
    upsert?: CertificadoUpsertWithWhereUniqueWithoutUserInput | CertificadoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificadoCreateManyUserInputEnvelope
    set?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    disconnect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    delete?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    connect?: CertificadoWhereUniqueInput | CertificadoWhereUniqueInput[]
    update?: CertificadoUpdateWithWhereUniqueWithoutUserInput | CertificadoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificadoUpdateManyWithWhereWithoutUserInput | CertificadoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
  }

  export type NotificacaoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificacaoCreateWithoutUserInput, NotificacaoUncheckedCreateWithoutUserInput> | NotificacaoCreateWithoutUserInput[] | NotificacaoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUserInput | NotificacaoCreateOrConnectWithoutUserInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutUserInput | NotificacaoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificacaoCreateManyUserInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutUserInput | NotificacaoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutUserInput | NotificacaoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutFarmaciaInput = {
    create?: XOR<UserCreateWithoutFarmaciaInput, UserUncheckedCreateWithoutFarmaciaInput> | UserCreateWithoutFarmaciaInput[] | UserUncheckedCreateWithoutFarmaciaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFarmaciaInput | UserCreateOrConnectWithoutFarmaciaInput[]
    createMany?: UserCreateManyFarmaciaInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFarmaciaInput = {
    create?: XOR<UserCreateWithoutFarmaciaInput, UserUncheckedCreateWithoutFarmaciaInput> | UserCreateWithoutFarmaciaInput[] | UserUncheckedCreateWithoutFarmaciaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFarmaciaInput | UserCreateOrConnectWithoutFarmaciaInput[]
    createMany?: UserCreateManyFarmaciaInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutFarmaciaNestedInput = {
    create?: XOR<UserCreateWithoutFarmaciaInput, UserUncheckedCreateWithoutFarmaciaInput> | UserCreateWithoutFarmaciaInput[] | UserUncheckedCreateWithoutFarmaciaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFarmaciaInput | UserCreateOrConnectWithoutFarmaciaInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFarmaciaInput | UserUpsertWithWhereUniqueWithoutFarmaciaInput[]
    createMany?: UserCreateManyFarmaciaInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFarmaciaInput | UserUpdateWithWhereUniqueWithoutFarmaciaInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFarmaciaInput | UserUpdateManyWithWhereWithoutFarmaciaInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFarmaciaNestedInput = {
    create?: XOR<UserCreateWithoutFarmaciaInput, UserUncheckedCreateWithoutFarmaciaInput> | UserCreateWithoutFarmaciaInput[] | UserUncheckedCreateWithoutFarmaciaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFarmaciaInput | UserCreateOrConnectWithoutFarmaciaInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFarmaciaInput | UserUpsertWithWhereUniqueWithoutFarmaciaInput[]
    createMany?: UserCreateManyFarmaciaInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFarmaciaInput | UserUpdateWithWhereUniqueWithoutFarmaciaInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFarmaciaInput | UserUpdateManyWithWhereWithoutFarmaciaInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ModuloCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ModuloCreateWithoutCategoriaInput, ModuloUncheckedCreateWithoutCategoriaInput> | ModuloCreateWithoutCategoriaInput[] | ModuloUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutCategoriaInput | ModuloCreateOrConnectWithoutCategoriaInput[]
    createMany?: ModuloCreateManyCategoriaInputEnvelope
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
  }

  export type MedicamentoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<MedicamentoCreateWithoutCategoriaInput, MedicamentoUncheckedCreateWithoutCategoriaInput> | MedicamentoCreateWithoutCategoriaInput[] | MedicamentoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: MedicamentoCreateOrConnectWithoutCategoriaInput | MedicamentoCreateOrConnectWithoutCategoriaInput[]
    createMany?: MedicamentoCreateManyCategoriaInputEnvelope
    connect?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
  }

  export type ModuloUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ModuloCreateWithoutCategoriaInput, ModuloUncheckedCreateWithoutCategoriaInput> | ModuloCreateWithoutCategoriaInput[] | ModuloUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutCategoriaInput | ModuloCreateOrConnectWithoutCategoriaInput[]
    createMany?: ModuloCreateManyCategoriaInputEnvelope
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
  }

  export type MedicamentoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<MedicamentoCreateWithoutCategoriaInput, MedicamentoUncheckedCreateWithoutCategoriaInput> | MedicamentoCreateWithoutCategoriaInput[] | MedicamentoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: MedicamentoCreateOrConnectWithoutCategoriaInput | MedicamentoCreateOrConnectWithoutCategoriaInput[]
    createMany?: MedicamentoCreateManyCategoriaInputEnvelope
    connect?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ModuloUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ModuloCreateWithoutCategoriaInput, ModuloUncheckedCreateWithoutCategoriaInput> | ModuloCreateWithoutCategoriaInput[] | ModuloUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutCategoriaInput | ModuloCreateOrConnectWithoutCategoriaInput[]
    upsert?: ModuloUpsertWithWhereUniqueWithoutCategoriaInput | ModuloUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ModuloCreateManyCategoriaInputEnvelope
    set?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    disconnect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    delete?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    update?: ModuloUpdateWithWhereUniqueWithoutCategoriaInput | ModuloUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ModuloUpdateManyWithWhereWithoutCategoriaInput | ModuloUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
  }

  export type MedicamentoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<MedicamentoCreateWithoutCategoriaInput, MedicamentoUncheckedCreateWithoutCategoriaInput> | MedicamentoCreateWithoutCategoriaInput[] | MedicamentoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: MedicamentoCreateOrConnectWithoutCategoriaInput | MedicamentoCreateOrConnectWithoutCategoriaInput[]
    upsert?: MedicamentoUpsertWithWhereUniqueWithoutCategoriaInput | MedicamentoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: MedicamentoCreateManyCategoriaInputEnvelope
    set?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    disconnect?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    delete?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    connect?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    update?: MedicamentoUpdateWithWhereUniqueWithoutCategoriaInput | MedicamentoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: MedicamentoUpdateManyWithWhereWithoutCategoriaInput | MedicamentoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: MedicamentoScalarWhereInput | MedicamentoScalarWhereInput[]
  }

  export type ModuloUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ModuloCreateWithoutCategoriaInput, ModuloUncheckedCreateWithoutCategoriaInput> | ModuloCreateWithoutCategoriaInput[] | ModuloUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ModuloCreateOrConnectWithoutCategoriaInput | ModuloCreateOrConnectWithoutCategoriaInput[]
    upsert?: ModuloUpsertWithWhereUniqueWithoutCategoriaInput | ModuloUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ModuloCreateManyCategoriaInputEnvelope
    set?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    disconnect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    delete?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    connect?: ModuloWhereUniqueInput | ModuloWhereUniqueInput[]
    update?: ModuloUpdateWithWhereUniqueWithoutCategoriaInput | ModuloUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ModuloUpdateManyWithWhereWithoutCategoriaInput | ModuloUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
  }

  export type MedicamentoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<MedicamentoCreateWithoutCategoriaInput, MedicamentoUncheckedCreateWithoutCategoriaInput> | MedicamentoCreateWithoutCategoriaInput[] | MedicamentoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: MedicamentoCreateOrConnectWithoutCategoriaInput | MedicamentoCreateOrConnectWithoutCategoriaInput[]
    upsert?: MedicamentoUpsertWithWhereUniqueWithoutCategoriaInput | MedicamentoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: MedicamentoCreateManyCategoriaInputEnvelope
    set?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    disconnect?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    delete?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    connect?: MedicamentoWhereUniqueInput | MedicamentoWhereUniqueInput[]
    update?: MedicamentoUpdateWithWhereUniqueWithoutCategoriaInput | MedicamentoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: MedicamentoUpdateManyWithWhereWithoutCategoriaInput | MedicamentoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: MedicamentoScalarWhereInput | MedicamentoScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutModulosInput = {
    create?: XOR<CategoriaCreateWithoutModulosInput, CategoriaUncheckedCreateWithoutModulosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutModulosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type ProgressoCreateNestedManyWithoutModuloInput = {
    create?: XOR<ProgressoCreateWithoutModuloInput, ProgressoUncheckedCreateWithoutModuloInput> | ProgressoCreateWithoutModuloInput[] | ProgressoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: ProgressoCreateOrConnectWithoutModuloInput | ProgressoCreateOrConnectWithoutModuloInput[]
    createMany?: ProgressoCreateManyModuloInputEnvelope
    connect?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutModuloInput = {
    create?: XOR<AvaliacaoCreateWithoutModuloInput, AvaliacaoUncheckedCreateWithoutModuloInput> | AvaliacaoCreateWithoutModuloInput[] | AvaliacaoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutModuloInput | AvaliacaoCreateOrConnectWithoutModuloInput[]
    createMany?: AvaliacaoCreateManyModuloInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type ProgressoUncheckedCreateNestedManyWithoutModuloInput = {
    create?: XOR<ProgressoCreateWithoutModuloInput, ProgressoUncheckedCreateWithoutModuloInput> | ProgressoCreateWithoutModuloInput[] | ProgressoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: ProgressoCreateOrConnectWithoutModuloInput | ProgressoCreateOrConnectWithoutModuloInput[]
    createMany?: ProgressoCreateManyModuloInputEnvelope
    connect?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutModuloInput = {
    create?: XOR<AvaliacaoCreateWithoutModuloInput, AvaliacaoUncheckedCreateWithoutModuloInput> | AvaliacaoCreateWithoutModuloInput[] | AvaliacaoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutModuloInput | AvaliacaoCreateOrConnectWithoutModuloInput[]
    createMany?: AvaliacaoCreateManyModuloInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type CategoriaUpdateOneRequiredWithoutModulosNestedInput = {
    create?: XOR<CategoriaCreateWithoutModulosInput, CategoriaUncheckedCreateWithoutModulosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutModulosInput
    upsert?: CategoriaUpsertWithoutModulosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutModulosInput, CategoriaUpdateWithoutModulosInput>, CategoriaUncheckedUpdateWithoutModulosInput>
  }

  export type ProgressoUpdateManyWithoutModuloNestedInput = {
    create?: XOR<ProgressoCreateWithoutModuloInput, ProgressoUncheckedCreateWithoutModuloInput> | ProgressoCreateWithoutModuloInput[] | ProgressoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: ProgressoCreateOrConnectWithoutModuloInput | ProgressoCreateOrConnectWithoutModuloInput[]
    upsert?: ProgressoUpsertWithWhereUniqueWithoutModuloInput | ProgressoUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: ProgressoCreateManyModuloInputEnvelope
    set?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
    disconnect?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
    delete?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
    connect?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
    update?: ProgressoUpdateWithWhereUniqueWithoutModuloInput | ProgressoUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: ProgressoUpdateManyWithWhereWithoutModuloInput | ProgressoUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: ProgressoScalarWhereInput | ProgressoScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutModuloNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutModuloInput, AvaliacaoUncheckedCreateWithoutModuloInput> | AvaliacaoCreateWithoutModuloInput[] | AvaliacaoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutModuloInput | AvaliacaoCreateOrConnectWithoutModuloInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutModuloInput | AvaliacaoUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: AvaliacaoCreateManyModuloInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutModuloInput | AvaliacaoUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutModuloInput | AvaliacaoUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type ProgressoUncheckedUpdateManyWithoutModuloNestedInput = {
    create?: XOR<ProgressoCreateWithoutModuloInput, ProgressoUncheckedCreateWithoutModuloInput> | ProgressoCreateWithoutModuloInput[] | ProgressoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: ProgressoCreateOrConnectWithoutModuloInput | ProgressoCreateOrConnectWithoutModuloInput[]
    upsert?: ProgressoUpsertWithWhereUniqueWithoutModuloInput | ProgressoUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: ProgressoCreateManyModuloInputEnvelope
    set?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
    disconnect?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
    delete?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
    connect?: ProgressoWhereUniqueInput | ProgressoWhereUniqueInput[]
    update?: ProgressoUpdateWithWhereUniqueWithoutModuloInput | ProgressoUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: ProgressoUpdateManyWithWhereWithoutModuloInput | ProgressoUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: ProgressoScalarWhereInput | ProgressoScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutModuloNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutModuloInput, AvaliacaoUncheckedCreateWithoutModuloInput> | AvaliacaoCreateWithoutModuloInput[] | AvaliacaoUncheckedCreateWithoutModuloInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutModuloInput | AvaliacaoCreateOrConnectWithoutModuloInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutModuloInput | AvaliacaoUpsertWithWhereUniqueWithoutModuloInput[]
    createMany?: AvaliacaoCreateManyModuloInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutModuloInput | AvaliacaoUpdateWithWhereUniqueWithoutModuloInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutModuloInput | AvaliacaoUpdateManyWithWhereWithoutModuloInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutMedicamentosInput = {
    create?: XOR<CategoriaCreateWithoutMedicamentosInput, CategoriaUncheckedCreateWithoutMedicamentosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutMedicamentosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type CategoriaUpdateOneRequiredWithoutMedicamentosNestedInput = {
    create?: XOR<CategoriaCreateWithoutMedicamentosInput, CategoriaUncheckedCreateWithoutMedicamentosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutMedicamentosInput
    upsert?: CategoriaUpsertWithoutMedicamentosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutMedicamentosInput, CategoriaUpdateWithoutMedicamentosInput>, CategoriaUncheckedUpdateWithoutMedicamentosInput>
  }

  export type UserCreateNestedOneWithoutProgressosInput = {
    create?: XOR<UserCreateWithoutProgressosInput, UserUncheckedCreateWithoutProgressosInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressosInput
    connect?: UserWhereUniqueInput
  }

  export type ModuloCreateNestedOneWithoutProgressosInput = {
    create?: XOR<ModuloCreateWithoutProgressosInput, ModuloUncheckedCreateWithoutProgressosInput>
    connectOrCreate?: ModuloCreateOrConnectWithoutProgressosInput
    connect?: ModuloWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutProgressosNestedInput = {
    create?: XOR<UserCreateWithoutProgressosInput, UserUncheckedCreateWithoutProgressosInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressosInput
    upsert?: UserUpsertWithoutProgressosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressosInput, UserUpdateWithoutProgressosInput>, UserUncheckedUpdateWithoutProgressosInput>
  }

  export type ModuloUpdateOneRequiredWithoutProgressosNestedInput = {
    create?: XOR<ModuloCreateWithoutProgressosInput, ModuloUncheckedCreateWithoutProgressosInput>
    connectOrCreate?: ModuloCreateOrConnectWithoutProgressosInput
    upsert?: ModuloUpsertWithoutProgressosInput
    connect?: ModuloWhereUniqueInput
    update?: XOR<XOR<ModuloUpdateToOneWithWhereWithoutProgressosInput, ModuloUpdateWithoutProgressosInput>, ModuloUncheckedUpdateWithoutProgressosInput>
  }

  export type ModuloCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<ModuloCreateWithoutAvaliacoesInput, ModuloUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: ModuloCreateOrConnectWithoutAvaliacoesInput
    connect?: ModuloWhereUniqueInput
  }

  export type QuestaoCreateNestedManyWithoutAvaliacaoInput = {
    create?: XOR<QuestaoCreateWithoutAvaliacaoInput, QuestaoUncheckedCreateWithoutAvaliacaoInput> | QuestaoCreateWithoutAvaliacaoInput[] | QuestaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: QuestaoCreateOrConnectWithoutAvaliacaoInput | QuestaoCreateOrConnectWithoutAvaliacaoInput[]
    createMany?: QuestaoCreateManyAvaliacaoInputEnvelope
    connect?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
  }

  export type ResultadoAvaliacaoCreateNestedManyWithoutAvaliacaoInput = {
    create?: XOR<ResultadoAvaliacaoCreateWithoutAvaliacaoInput, ResultadoAvaliacaoUncheckedCreateWithoutAvaliacaoInput> | ResultadoAvaliacaoCreateWithoutAvaliacaoInput[] | ResultadoAvaliacaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: ResultadoAvaliacaoCreateOrConnectWithoutAvaliacaoInput | ResultadoAvaliacaoCreateOrConnectWithoutAvaliacaoInput[]
    createMany?: ResultadoAvaliacaoCreateManyAvaliacaoInputEnvelope
    connect?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
  }

  export type QuestaoUncheckedCreateNestedManyWithoutAvaliacaoInput = {
    create?: XOR<QuestaoCreateWithoutAvaliacaoInput, QuestaoUncheckedCreateWithoutAvaliacaoInput> | QuestaoCreateWithoutAvaliacaoInput[] | QuestaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: QuestaoCreateOrConnectWithoutAvaliacaoInput | QuestaoCreateOrConnectWithoutAvaliacaoInput[]
    createMany?: QuestaoCreateManyAvaliacaoInputEnvelope
    connect?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
  }

  export type ResultadoAvaliacaoUncheckedCreateNestedManyWithoutAvaliacaoInput = {
    create?: XOR<ResultadoAvaliacaoCreateWithoutAvaliacaoInput, ResultadoAvaliacaoUncheckedCreateWithoutAvaliacaoInput> | ResultadoAvaliacaoCreateWithoutAvaliacaoInput[] | ResultadoAvaliacaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: ResultadoAvaliacaoCreateOrConnectWithoutAvaliacaoInput | ResultadoAvaliacaoCreateOrConnectWithoutAvaliacaoInput[]
    createMany?: ResultadoAvaliacaoCreateManyAvaliacaoInputEnvelope
    connect?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
  }

  export type ModuloUpdateOneRequiredWithoutAvaliacoesNestedInput = {
    create?: XOR<ModuloCreateWithoutAvaliacoesInput, ModuloUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: ModuloCreateOrConnectWithoutAvaliacoesInput
    upsert?: ModuloUpsertWithoutAvaliacoesInput
    connect?: ModuloWhereUniqueInput
    update?: XOR<XOR<ModuloUpdateToOneWithWhereWithoutAvaliacoesInput, ModuloUpdateWithoutAvaliacoesInput>, ModuloUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type QuestaoUpdateManyWithoutAvaliacaoNestedInput = {
    create?: XOR<QuestaoCreateWithoutAvaliacaoInput, QuestaoUncheckedCreateWithoutAvaliacaoInput> | QuestaoCreateWithoutAvaliacaoInput[] | QuestaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: QuestaoCreateOrConnectWithoutAvaliacaoInput | QuestaoCreateOrConnectWithoutAvaliacaoInput[]
    upsert?: QuestaoUpsertWithWhereUniqueWithoutAvaliacaoInput | QuestaoUpsertWithWhereUniqueWithoutAvaliacaoInput[]
    createMany?: QuestaoCreateManyAvaliacaoInputEnvelope
    set?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
    disconnect?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
    delete?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
    connect?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
    update?: QuestaoUpdateWithWhereUniqueWithoutAvaliacaoInput | QuestaoUpdateWithWhereUniqueWithoutAvaliacaoInput[]
    updateMany?: QuestaoUpdateManyWithWhereWithoutAvaliacaoInput | QuestaoUpdateManyWithWhereWithoutAvaliacaoInput[]
    deleteMany?: QuestaoScalarWhereInput | QuestaoScalarWhereInput[]
  }

  export type ResultadoAvaliacaoUpdateManyWithoutAvaliacaoNestedInput = {
    create?: XOR<ResultadoAvaliacaoCreateWithoutAvaliacaoInput, ResultadoAvaliacaoUncheckedCreateWithoutAvaliacaoInput> | ResultadoAvaliacaoCreateWithoutAvaliacaoInput[] | ResultadoAvaliacaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: ResultadoAvaliacaoCreateOrConnectWithoutAvaliacaoInput | ResultadoAvaliacaoCreateOrConnectWithoutAvaliacaoInput[]
    upsert?: ResultadoAvaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput | ResultadoAvaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput[]
    createMany?: ResultadoAvaliacaoCreateManyAvaliacaoInputEnvelope
    set?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
    disconnect?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
    delete?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
    connect?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
    update?: ResultadoAvaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput | ResultadoAvaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput[]
    updateMany?: ResultadoAvaliacaoUpdateManyWithWhereWithoutAvaliacaoInput | ResultadoAvaliacaoUpdateManyWithWhereWithoutAvaliacaoInput[]
    deleteMany?: ResultadoAvaliacaoScalarWhereInput | ResultadoAvaliacaoScalarWhereInput[]
  }

  export type QuestaoUncheckedUpdateManyWithoutAvaliacaoNestedInput = {
    create?: XOR<QuestaoCreateWithoutAvaliacaoInput, QuestaoUncheckedCreateWithoutAvaliacaoInput> | QuestaoCreateWithoutAvaliacaoInput[] | QuestaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: QuestaoCreateOrConnectWithoutAvaliacaoInput | QuestaoCreateOrConnectWithoutAvaliacaoInput[]
    upsert?: QuestaoUpsertWithWhereUniqueWithoutAvaliacaoInput | QuestaoUpsertWithWhereUniqueWithoutAvaliacaoInput[]
    createMany?: QuestaoCreateManyAvaliacaoInputEnvelope
    set?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
    disconnect?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
    delete?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
    connect?: QuestaoWhereUniqueInput | QuestaoWhereUniqueInput[]
    update?: QuestaoUpdateWithWhereUniqueWithoutAvaliacaoInput | QuestaoUpdateWithWhereUniqueWithoutAvaliacaoInput[]
    updateMany?: QuestaoUpdateManyWithWhereWithoutAvaliacaoInput | QuestaoUpdateManyWithWhereWithoutAvaliacaoInput[]
    deleteMany?: QuestaoScalarWhereInput | QuestaoScalarWhereInput[]
  }

  export type ResultadoAvaliacaoUncheckedUpdateManyWithoutAvaliacaoNestedInput = {
    create?: XOR<ResultadoAvaliacaoCreateWithoutAvaliacaoInput, ResultadoAvaliacaoUncheckedCreateWithoutAvaliacaoInput> | ResultadoAvaliacaoCreateWithoutAvaliacaoInput[] | ResultadoAvaliacaoUncheckedCreateWithoutAvaliacaoInput[]
    connectOrCreate?: ResultadoAvaliacaoCreateOrConnectWithoutAvaliacaoInput | ResultadoAvaliacaoCreateOrConnectWithoutAvaliacaoInput[]
    upsert?: ResultadoAvaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput | ResultadoAvaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput[]
    createMany?: ResultadoAvaliacaoCreateManyAvaliacaoInputEnvelope
    set?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
    disconnect?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
    delete?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
    connect?: ResultadoAvaliacaoWhereUniqueInput | ResultadoAvaliacaoWhereUniqueInput[]
    update?: ResultadoAvaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput | ResultadoAvaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput[]
    updateMany?: ResultadoAvaliacaoUpdateManyWithWhereWithoutAvaliacaoInput | ResultadoAvaliacaoUpdateManyWithWhereWithoutAvaliacaoInput[]
    deleteMany?: ResultadoAvaliacaoScalarWhereInput | ResultadoAvaliacaoScalarWhereInput[]
  }

  export type QuestaoCreateopcoesInput = {
    set: string[]
  }

  export type AvaliacaoCreateNestedOneWithoutQuestoesInput = {
    create?: XOR<AvaliacaoCreateWithoutQuestoesInput, AvaliacaoUncheckedCreateWithoutQuestoesInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutQuestoesInput
    connect?: AvaliacaoWhereUniqueInput
  }

  export type QuestaoUpdateopcoesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AvaliacaoUpdateOneRequiredWithoutQuestoesNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutQuestoesInput, AvaliacaoUncheckedCreateWithoutQuestoesInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutQuestoesInput
    upsert?: AvaliacaoUpsertWithoutQuestoesInput
    connect?: AvaliacaoWhereUniqueInput
    update?: XOR<XOR<AvaliacaoUpdateToOneWithWhereWithoutQuestoesInput, AvaliacaoUpdateWithoutQuestoesInput>, AvaliacaoUncheckedUpdateWithoutQuestoesInput>
  }

  export type ResultadoAvaliacaoCreaterespostasInput = {
    set: number[]
  }

  export type UserCreateNestedOneWithoutResultadosInput = {
    create?: XOR<UserCreateWithoutResultadosInput, UserUncheckedCreateWithoutResultadosInput>
    connectOrCreate?: UserCreateOrConnectWithoutResultadosInput
    connect?: UserWhereUniqueInput
  }

  export type AvaliacaoCreateNestedOneWithoutResultadosInput = {
    create?: XOR<AvaliacaoCreateWithoutResultadosInput, AvaliacaoUncheckedCreateWithoutResultadosInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutResultadosInput
    connect?: AvaliacaoWhereUniqueInput
  }

  export type ResultadoAvaliacaoUpdaterespostasInput = {
    set?: number[]
    push?: number | number[]
  }

  export type UserUpdateOneRequiredWithoutResultadosNestedInput = {
    create?: XOR<UserCreateWithoutResultadosInput, UserUncheckedCreateWithoutResultadosInput>
    connectOrCreate?: UserCreateOrConnectWithoutResultadosInput
    upsert?: UserUpsertWithoutResultadosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResultadosInput, UserUpdateWithoutResultadosInput>, UserUncheckedUpdateWithoutResultadosInput>
  }

  export type AvaliacaoUpdateOneRequiredWithoutResultadosNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutResultadosInput, AvaliacaoUncheckedCreateWithoutResultadosInput>
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutResultadosInput
    upsert?: AvaliacaoUpsertWithoutResultadosInput
    connect?: AvaliacaoWhereUniqueInput
    update?: XOR<XOR<AvaliacaoUpdateToOneWithWhereWithoutResultadosInput, AvaliacaoUpdateWithoutResultadosInput>, AvaliacaoUncheckedUpdateWithoutResultadosInput>
  }

  export type UserCreateNestedOneWithoutCertificadosInput = {
    create?: XOR<UserCreateWithoutCertificadosInput, UserUncheckedCreateWithoutCertificadosInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificadosInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCertificadosNestedInput = {
    create?: XOR<UserCreateWithoutCertificadosInput, UserUncheckedCreateWithoutCertificadosInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificadosInput
    upsert?: UserUpsertWithoutCertificadosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCertificadosInput, UserUpdateWithoutCertificadosInput>, UserUncheckedUpdateWithoutCertificadosInput>
  }

  export type UserCreateNestedOneWithoutNotificacoesInput = {
    create?: XOR<UserCreateWithoutNotificacoesInput, UserUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificacoesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificacoesNestedInput = {
    create?: XOR<UserCreateWithoutNotificacoesInput, UserUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificacoesInput
    upsert?: UserUpsertWithoutNotificacoesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificacoesInput, UserUpdateWithoutNotificacoesInput>, UserUncheckedUpdateWithoutNotificacoesInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FarmaciaCreateWithoutUsuariosInput = {
    id?: string
    nome: string
    cnpj: string
    endereco: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmaciaUncheckedCreateWithoutUsuariosInput = {
    id?: string
    nome: string
    cnpj: string
    endereco: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmaciaCreateOrConnectWithoutUsuariosInput = {
    where: FarmaciaWhereUniqueInput
    create: XOR<FarmaciaCreateWithoutUsuariosInput, FarmaciaUncheckedCreateWithoutUsuariosInput>
  }

  export type ProgressoCreateWithoutUserInput = {
    id?: string
    progresso?: number
    concluido?: boolean
    ultimoAcesso?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    modulo: ModuloCreateNestedOneWithoutProgressosInput
  }

  export type ProgressoUncheckedCreateWithoutUserInput = {
    id?: string
    progresso?: number
    concluido?: boolean
    ultimoAcesso?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    moduloId: string
  }

  export type ProgressoCreateOrConnectWithoutUserInput = {
    where: ProgressoWhereUniqueInput
    create: XOR<ProgressoCreateWithoutUserInput, ProgressoUncheckedCreateWithoutUserInput>
  }

  export type ProgressoCreateManyUserInputEnvelope = {
    data: ProgressoCreateManyUserInput | ProgressoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResultadoAvaliacaoCreateWithoutUserInput = {
    id?: string
    respostas?: ResultadoAvaliacaoCreaterespostasInput | number[]
    pontuacao: number
    aprovado: boolean
    dataRealizacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacao: AvaliacaoCreateNestedOneWithoutResultadosInput
  }

  export type ResultadoAvaliacaoUncheckedCreateWithoutUserInput = {
    id?: string
    respostas?: ResultadoAvaliacaoCreaterespostasInput | number[]
    pontuacao: number
    aprovado: boolean
    dataRealizacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacaoId: string
  }

  export type ResultadoAvaliacaoCreateOrConnectWithoutUserInput = {
    where: ResultadoAvaliacaoWhereUniqueInput
    create: XOR<ResultadoAvaliacaoCreateWithoutUserInput, ResultadoAvaliacaoUncheckedCreateWithoutUserInput>
  }

  export type ResultadoAvaliacaoCreateManyUserInputEnvelope = {
    data: ResultadoAvaliacaoCreateManyUserInput | ResultadoAvaliacaoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CertificadoCreateWithoutUserInput = {
    id?: string
    titulo: string
    codigo: string
    dataEmissao?: Date | string
    dataValidade: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificadoUncheckedCreateWithoutUserInput = {
    id?: string
    titulo: string
    codigo: string
    dataEmissao?: Date | string
    dataValidade: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificadoCreateOrConnectWithoutUserInput = {
    where: CertificadoWhereUniqueInput
    create: XOR<CertificadoCreateWithoutUserInput, CertificadoUncheckedCreateWithoutUserInput>
  }

  export type CertificadoCreateManyUserInputEnvelope = {
    data: CertificadoCreateManyUserInput | CertificadoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificacaoCreateWithoutUserInput = {
    id?: string
    titulo: string
    mensagem: string
    lida?: boolean
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoUncheckedCreateWithoutUserInput = {
    id?: string
    titulo: string
    mensagem: string
    lida?: boolean
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoCreateOrConnectWithoutUserInput = {
    where: NotificacaoWhereUniqueInput
    create: XOR<NotificacaoCreateWithoutUserInput, NotificacaoUncheckedCreateWithoutUserInput>
  }

  export type NotificacaoCreateManyUserInputEnvelope = {
    data: NotificacaoCreateManyUserInput | NotificacaoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FarmaciaUpsertWithoutUsuariosInput = {
    update: XOR<FarmaciaUpdateWithoutUsuariosInput, FarmaciaUncheckedUpdateWithoutUsuariosInput>
    create: XOR<FarmaciaCreateWithoutUsuariosInput, FarmaciaUncheckedCreateWithoutUsuariosInput>
    where?: FarmaciaWhereInput
  }

  export type FarmaciaUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: FarmaciaWhereInput
    data: XOR<FarmaciaUpdateWithoutUsuariosInput, FarmaciaUncheckedUpdateWithoutUsuariosInput>
  }

  export type FarmaciaUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmaciaUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressoUpsertWithWhereUniqueWithoutUserInput = {
    where: ProgressoWhereUniqueInput
    update: XOR<ProgressoUpdateWithoutUserInput, ProgressoUncheckedUpdateWithoutUserInput>
    create: XOR<ProgressoCreateWithoutUserInput, ProgressoUncheckedCreateWithoutUserInput>
  }

  export type ProgressoUpdateWithWhereUniqueWithoutUserInput = {
    where: ProgressoWhereUniqueInput
    data: XOR<ProgressoUpdateWithoutUserInput, ProgressoUncheckedUpdateWithoutUserInput>
  }

  export type ProgressoUpdateManyWithWhereWithoutUserInput = {
    where: ProgressoScalarWhereInput
    data: XOR<ProgressoUpdateManyMutationInput, ProgressoUncheckedUpdateManyWithoutUserInput>
  }

  export type ProgressoScalarWhereInput = {
    AND?: ProgressoScalarWhereInput | ProgressoScalarWhereInput[]
    OR?: ProgressoScalarWhereInput[]
    NOT?: ProgressoScalarWhereInput | ProgressoScalarWhereInput[]
    id?: StringFilter<"Progresso"> | string
    progresso?: IntFilter<"Progresso"> | number
    concluido?: BoolFilter<"Progresso"> | boolean
    ultimoAcesso?: DateTimeFilter<"Progresso"> | Date | string
    createdAt?: DateTimeFilter<"Progresso"> | Date | string
    updatedAt?: DateTimeFilter<"Progresso"> | Date | string
    userId?: StringFilter<"Progresso"> | string
    moduloId?: StringFilter<"Progresso"> | string
  }

  export type ResultadoAvaliacaoUpsertWithWhereUniqueWithoutUserInput = {
    where: ResultadoAvaliacaoWhereUniqueInput
    update: XOR<ResultadoAvaliacaoUpdateWithoutUserInput, ResultadoAvaliacaoUncheckedUpdateWithoutUserInput>
    create: XOR<ResultadoAvaliacaoCreateWithoutUserInput, ResultadoAvaliacaoUncheckedCreateWithoutUserInput>
  }

  export type ResultadoAvaliacaoUpdateWithWhereUniqueWithoutUserInput = {
    where: ResultadoAvaliacaoWhereUniqueInput
    data: XOR<ResultadoAvaliacaoUpdateWithoutUserInput, ResultadoAvaliacaoUncheckedUpdateWithoutUserInput>
  }

  export type ResultadoAvaliacaoUpdateManyWithWhereWithoutUserInput = {
    where: ResultadoAvaliacaoScalarWhereInput
    data: XOR<ResultadoAvaliacaoUpdateManyMutationInput, ResultadoAvaliacaoUncheckedUpdateManyWithoutUserInput>
  }

  export type ResultadoAvaliacaoScalarWhereInput = {
    AND?: ResultadoAvaliacaoScalarWhereInput | ResultadoAvaliacaoScalarWhereInput[]
    OR?: ResultadoAvaliacaoScalarWhereInput[]
    NOT?: ResultadoAvaliacaoScalarWhereInput | ResultadoAvaliacaoScalarWhereInput[]
    id?: StringFilter<"ResultadoAvaliacao"> | string
    respostas?: IntNullableListFilter<"ResultadoAvaliacao">
    pontuacao?: IntFilter<"ResultadoAvaliacao"> | number
    aprovado?: BoolFilter<"ResultadoAvaliacao"> | boolean
    dataRealizacao?: DateTimeFilter<"ResultadoAvaliacao"> | Date | string
    createdAt?: DateTimeFilter<"ResultadoAvaliacao"> | Date | string
    updatedAt?: DateTimeFilter<"ResultadoAvaliacao"> | Date | string
    userId?: StringFilter<"ResultadoAvaliacao"> | string
    avaliacaoId?: StringFilter<"ResultadoAvaliacao"> | string
  }

  export type CertificadoUpsertWithWhereUniqueWithoutUserInput = {
    where: CertificadoWhereUniqueInput
    update: XOR<CertificadoUpdateWithoutUserInput, CertificadoUncheckedUpdateWithoutUserInput>
    create: XOR<CertificadoCreateWithoutUserInput, CertificadoUncheckedCreateWithoutUserInput>
  }

  export type CertificadoUpdateWithWhereUniqueWithoutUserInput = {
    where: CertificadoWhereUniqueInput
    data: XOR<CertificadoUpdateWithoutUserInput, CertificadoUncheckedUpdateWithoutUserInput>
  }

  export type CertificadoUpdateManyWithWhereWithoutUserInput = {
    where: CertificadoScalarWhereInput
    data: XOR<CertificadoUpdateManyMutationInput, CertificadoUncheckedUpdateManyWithoutUserInput>
  }

  export type CertificadoScalarWhereInput = {
    AND?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
    OR?: CertificadoScalarWhereInput[]
    NOT?: CertificadoScalarWhereInput | CertificadoScalarWhereInput[]
    id?: StringFilter<"Certificado"> | string
    titulo?: StringFilter<"Certificado"> | string
    codigo?: StringFilter<"Certificado"> | string
    dataEmissao?: DateTimeFilter<"Certificado"> | Date | string
    dataValidade?: DateTimeFilter<"Certificado"> | Date | string
    createdAt?: DateTimeFilter<"Certificado"> | Date | string
    updatedAt?: DateTimeFilter<"Certificado"> | Date | string
    userId?: StringFilter<"Certificado"> | string
  }

  export type NotificacaoUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificacaoWhereUniqueInput
    update: XOR<NotificacaoUpdateWithoutUserInput, NotificacaoUncheckedUpdateWithoutUserInput>
    create: XOR<NotificacaoCreateWithoutUserInput, NotificacaoUncheckedCreateWithoutUserInput>
  }

  export type NotificacaoUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificacaoWhereUniqueInput
    data: XOR<NotificacaoUpdateWithoutUserInput, NotificacaoUncheckedUpdateWithoutUserInput>
  }

  export type NotificacaoUpdateManyWithWhereWithoutUserInput = {
    where: NotificacaoScalarWhereInput
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificacaoScalarWhereInput = {
    AND?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    OR?: NotificacaoScalarWhereInput[]
    NOT?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    id?: StringFilter<"Notificacao"> | string
    titulo?: StringFilter<"Notificacao"> | string
    mensagem?: StringFilter<"Notificacao"> | string
    lida?: BoolFilter<"Notificacao"> | boolean
    tipo?: StringFilter<"Notificacao"> | string
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    updatedAt?: DateTimeFilter<"Notificacao"> | Date | string
    userId?: StringFilter<"Notificacao"> | string
  }

  export type UserCreateWithoutFarmaciaInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    progressos?: ProgressoCreateNestedManyWithoutUserInput
    resultados?: ResultadoAvaliacaoCreateNestedManyWithoutUserInput
    certificados?: CertificadoCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFarmaciaInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    progressos?: ProgressoUncheckedCreateNestedManyWithoutUserInput
    resultados?: ResultadoAvaliacaoUncheckedCreateNestedManyWithoutUserInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFarmaciaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFarmaciaInput, UserUncheckedCreateWithoutFarmaciaInput>
  }

  export type UserCreateManyFarmaciaInputEnvelope = {
    data: UserCreateManyFarmaciaInput | UserCreateManyFarmaciaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutFarmaciaInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFarmaciaInput, UserUncheckedUpdateWithoutFarmaciaInput>
    create: XOR<UserCreateWithoutFarmaciaInput, UserUncheckedCreateWithoutFarmaciaInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFarmaciaInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFarmaciaInput, UserUncheckedUpdateWithoutFarmaciaInput>
  }

  export type UserUpdateManyWithWhereWithoutFarmaciaInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFarmaciaInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    farmaciaId?: StringNullableFilter<"User"> | string | null
  }

  export type ModuloCreateWithoutCategoriaInput = {
    id?: string
    titulo: string
    descricao: string
    conteudo: string
    ordem: number
    versao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    progressos?: ProgressoCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutModuloInput
  }

  export type ModuloUncheckedCreateWithoutCategoriaInput = {
    id?: string
    titulo: string
    descricao: string
    conteudo: string
    ordem: number
    versao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    progressos?: ProgressoUncheckedCreateNestedManyWithoutModuloInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutModuloInput
  }

  export type ModuloCreateOrConnectWithoutCategoriaInput = {
    where: ModuloWhereUniqueInput
    create: XOR<ModuloCreateWithoutCategoriaInput, ModuloUncheckedCreateWithoutCategoriaInput>
  }

  export type ModuloCreateManyCategoriaInputEnvelope = {
    data: ModuloCreateManyCategoriaInput | ModuloCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type MedicamentoCreateWithoutCategoriaInput = {
    id?: string
    nome: string
    principioAtivo: string
    formaFarmaceutica: string
    concentracao: string
    indicacoes?: string | null
    contraindicacoes?: string | null
    efeitosAdversos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicamentoUncheckedCreateWithoutCategoriaInput = {
    id?: string
    nome: string
    principioAtivo: string
    formaFarmaceutica: string
    concentracao: string
    indicacoes?: string | null
    contraindicacoes?: string | null
    efeitosAdversos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicamentoCreateOrConnectWithoutCategoriaInput = {
    where: MedicamentoWhereUniqueInput
    create: XOR<MedicamentoCreateWithoutCategoriaInput, MedicamentoUncheckedCreateWithoutCategoriaInput>
  }

  export type MedicamentoCreateManyCategoriaInputEnvelope = {
    data: MedicamentoCreateManyCategoriaInput | MedicamentoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ModuloUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ModuloWhereUniqueInput
    update: XOR<ModuloUpdateWithoutCategoriaInput, ModuloUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ModuloCreateWithoutCategoriaInput, ModuloUncheckedCreateWithoutCategoriaInput>
  }

  export type ModuloUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ModuloWhereUniqueInput
    data: XOR<ModuloUpdateWithoutCategoriaInput, ModuloUncheckedUpdateWithoutCategoriaInput>
  }

  export type ModuloUpdateManyWithWhereWithoutCategoriaInput = {
    where: ModuloScalarWhereInput
    data: XOR<ModuloUpdateManyMutationInput, ModuloUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ModuloScalarWhereInput = {
    AND?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
    OR?: ModuloScalarWhereInput[]
    NOT?: ModuloScalarWhereInput | ModuloScalarWhereInput[]
    id?: StringFilter<"Modulo"> | string
    titulo?: StringFilter<"Modulo"> | string
    descricao?: StringFilter<"Modulo"> | string
    conteudo?: StringFilter<"Modulo"> | string
    ordem?: IntFilter<"Modulo"> | number
    versao?: StringFilter<"Modulo"> | string
    createdAt?: DateTimeFilter<"Modulo"> | Date | string
    updatedAt?: DateTimeFilter<"Modulo"> | Date | string
    categoriaId?: StringFilter<"Modulo"> | string
  }

  export type MedicamentoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: MedicamentoWhereUniqueInput
    update: XOR<MedicamentoUpdateWithoutCategoriaInput, MedicamentoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<MedicamentoCreateWithoutCategoriaInput, MedicamentoUncheckedCreateWithoutCategoriaInput>
  }

  export type MedicamentoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: MedicamentoWhereUniqueInput
    data: XOR<MedicamentoUpdateWithoutCategoriaInput, MedicamentoUncheckedUpdateWithoutCategoriaInput>
  }

  export type MedicamentoUpdateManyWithWhereWithoutCategoriaInput = {
    where: MedicamentoScalarWhereInput
    data: XOR<MedicamentoUpdateManyMutationInput, MedicamentoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type MedicamentoScalarWhereInput = {
    AND?: MedicamentoScalarWhereInput | MedicamentoScalarWhereInput[]
    OR?: MedicamentoScalarWhereInput[]
    NOT?: MedicamentoScalarWhereInput | MedicamentoScalarWhereInput[]
    id?: StringFilter<"Medicamento"> | string
    nome?: StringFilter<"Medicamento"> | string
    principioAtivo?: StringFilter<"Medicamento"> | string
    formaFarmaceutica?: StringFilter<"Medicamento"> | string
    concentracao?: StringFilter<"Medicamento"> | string
    indicacoes?: StringNullableFilter<"Medicamento"> | string | null
    contraindicacoes?: StringNullableFilter<"Medicamento"> | string | null
    efeitosAdversos?: StringNullableFilter<"Medicamento"> | string | null
    createdAt?: DateTimeFilter<"Medicamento"> | Date | string
    updatedAt?: DateTimeFilter<"Medicamento"> | Date | string
    categoriaId?: StringFilter<"Medicamento"> | string
  }

  export type CategoriaCreateWithoutModulosInput = {
    id?: string
    nome: string
    descricao: string
    ordem: number
    createdAt?: Date | string
    updatedAt?: Date | string
    medicamentos?: MedicamentoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutModulosInput = {
    id?: string
    nome: string
    descricao: string
    ordem: number
    createdAt?: Date | string
    updatedAt?: Date | string
    medicamentos?: MedicamentoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutModulosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutModulosInput, CategoriaUncheckedCreateWithoutModulosInput>
  }

  export type ProgressoCreateWithoutModuloInput = {
    id?: string
    progresso?: number
    concluido?: boolean
    ultimoAcesso?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProgressosInput
  }

  export type ProgressoUncheckedCreateWithoutModuloInput = {
    id?: string
    progresso?: number
    concluido?: boolean
    ultimoAcesso?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ProgressoCreateOrConnectWithoutModuloInput = {
    where: ProgressoWhereUniqueInput
    create: XOR<ProgressoCreateWithoutModuloInput, ProgressoUncheckedCreateWithoutModuloInput>
  }

  export type ProgressoCreateManyModuloInputEnvelope = {
    data: ProgressoCreateManyModuloInput | ProgressoCreateManyModuloInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoCreateWithoutModuloInput = {
    id?: string
    titulo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questoes?: QuestaoCreateNestedManyWithoutAvaliacaoInput
    resultados?: ResultadoAvaliacaoCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateWithoutModuloInput = {
    id?: string
    titulo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questoes?: QuestaoUncheckedCreateNestedManyWithoutAvaliacaoInput
    resultados?: ResultadoAvaliacaoUncheckedCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoCreateOrConnectWithoutModuloInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutModuloInput, AvaliacaoUncheckedCreateWithoutModuloInput>
  }

  export type AvaliacaoCreateManyModuloInputEnvelope = {
    data: AvaliacaoCreateManyModuloInput | AvaliacaoCreateManyModuloInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutModulosInput = {
    update: XOR<CategoriaUpdateWithoutModulosInput, CategoriaUncheckedUpdateWithoutModulosInput>
    create: XOR<CategoriaCreateWithoutModulosInput, CategoriaUncheckedCreateWithoutModulosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutModulosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutModulosInput, CategoriaUncheckedUpdateWithoutModulosInput>
  }

  export type CategoriaUpdateWithoutModulosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicamentos?: MedicamentoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutModulosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicamentos?: MedicamentoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type ProgressoUpsertWithWhereUniqueWithoutModuloInput = {
    where: ProgressoWhereUniqueInput
    update: XOR<ProgressoUpdateWithoutModuloInput, ProgressoUncheckedUpdateWithoutModuloInput>
    create: XOR<ProgressoCreateWithoutModuloInput, ProgressoUncheckedCreateWithoutModuloInput>
  }

  export type ProgressoUpdateWithWhereUniqueWithoutModuloInput = {
    where: ProgressoWhereUniqueInput
    data: XOR<ProgressoUpdateWithoutModuloInput, ProgressoUncheckedUpdateWithoutModuloInput>
  }

  export type ProgressoUpdateManyWithWhereWithoutModuloInput = {
    where: ProgressoScalarWhereInput
    data: XOR<ProgressoUpdateManyMutationInput, ProgressoUncheckedUpdateManyWithoutModuloInput>
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutModuloInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutModuloInput, AvaliacaoUncheckedUpdateWithoutModuloInput>
    create: XOR<AvaliacaoCreateWithoutModuloInput, AvaliacaoUncheckedCreateWithoutModuloInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutModuloInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutModuloInput, AvaliacaoUncheckedUpdateWithoutModuloInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutModuloInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutModuloInput>
  }

  export type AvaliacaoScalarWhereInput = {
    AND?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    OR?: AvaliacaoScalarWhereInput[]
    NOT?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    id?: StringFilter<"Avaliacao"> | string
    titulo?: StringFilter<"Avaliacao"> | string
    createdAt?: DateTimeFilter<"Avaliacao"> | Date | string
    updatedAt?: DateTimeFilter<"Avaliacao"> | Date | string
    moduloId?: StringFilter<"Avaliacao"> | string
  }

  export type CategoriaCreateWithoutMedicamentosInput = {
    id?: string
    nome: string
    descricao: string
    ordem: number
    createdAt?: Date | string
    updatedAt?: Date | string
    modulos?: ModuloCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutMedicamentosInput = {
    id?: string
    nome: string
    descricao: string
    ordem: number
    createdAt?: Date | string
    updatedAt?: Date | string
    modulos?: ModuloUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutMedicamentosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutMedicamentosInput, CategoriaUncheckedCreateWithoutMedicamentosInput>
  }

  export type CategoriaUpsertWithoutMedicamentosInput = {
    update: XOR<CategoriaUpdateWithoutMedicamentosInput, CategoriaUncheckedUpdateWithoutMedicamentosInput>
    create: XOR<CategoriaCreateWithoutMedicamentosInput, CategoriaUncheckedCreateWithoutMedicamentosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutMedicamentosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutMedicamentosInput, CategoriaUncheckedUpdateWithoutMedicamentosInput>
  }

  export type CategoriaUpdateWithoutMedicamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulos?: ModuloUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutMedicamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulos?: ModuloUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type UserCreateWithoutProgressosInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    farmacia?: FarmaciaCreateNestedOneWithoutUsuariosInput
    resultados?: ResultadoAvaliacaoCreateNestedManyWithoutUserInput
    certificados?: CertificadoCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgressosInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    farmaciaId?: string | null
    resultados?: ResultadoAvaliacaoUncheckedCreateNestedManyWithoutUserInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgressosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressosInput, UserUncheckedCreateWithoutProgressosInput>
  }

  export type ModuloCreateWithoutProgressosInput = {
    id?: string
    titulo: string
    descricao: string
    conteudo: string
    ordem: number
    versao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutModulosInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutModuloInput
  }

  export type ModuloUncheckedCreateWithoutProgressosInput = {
    id?: string
    titulo: string
    descricao: string
    conteudo: string
    ordem: number
    versao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoriaId: string
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutModuloInput
  }

  export type ModuloCreateOrConnectWithoutProgressosInput = {
    where: ModuloWhereUniqueInput
    create: XOR<ModuloCreateWithoutProgressosInput, ModuloUncheckedCreateWithoutProgressosInput>
  }

  export type UserUpsertWithoutProgressosInput = {
    update: XOR<UserUpdateWithoutProgressosInput, UserUncheckedUpdateWithoutProgressosInput>
    create: XOR<UserCreateWithoutProgressosInput, UserUncheckedCreateWithoutProgressosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressosInput, UserUncheckedUpdateWithoutProgressosInput>
  }

  export type UserUpdateWithoutProgressosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmacia?: FarmaciaUpdateOneWithoutUsuariosNestedInput
    resultados?: ResultadoAvaliacaoUpdateManyWithoutUserNestedInput
    certificados?: CertificadoUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmaciaId?: NullableStringFieldUpdateOperationsInput | string | null
    resultados?: ResultadoAvaliacaoUncheckedUpdateManyWithoutUserNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ModuloUpsertWithoutProgressosInput = {
    update: XOR<ModuloUpdateWithoutProgressosInput, ModuloUncheckedUpdateWithoutProgressosInput>
    create: XOR<ModuloCreateWithoutProgressosInput, ModuloUncheckedCreateWithoutProgressosInput>
    where?: ModuloWhereInput
  }

  export type ModuloUpdateToOneWithWhereWithoutProgressosInput = {
    where?: ModuloWhereInput
    data: XOR<ModuloUpdateWithoutProgressosInput, ModuloUncheckedUpdateWithoutProgressosInput>
  }

  export type ModuloUpdateWithoutProgressosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    versao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutModulosNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateWithoutProgressosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    versao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type ModuloCreateWithoutAvaliacoesInput = {
    id?: string
    titulo: string
    descricao: string
    conteudo: string
    ordem: number
    versao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutModulosInput
    progressos?: ProgressoCreateNestedManyWithoutModuloInput
  }

  export type ModuloUncheckedCreateWithoutAvaliacoesInput = {
    id?: string
    titulo: string
    descricao: string
    conteudo: string
    ordem: number
    versao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoriaId: string
    progressos?: ProgressoUncheckedCreateNestedManyWithoutModuloInput
  }

  export type ModuloCreateOrConnectWithoutAvaliacoesInput = {
    where: ModuloWhereUniqueInput
    create: XOR<ModuloCreateWithoutAvaliacoesInput, ModuloUncheckedCreateWithoutAvaliacoesInput>
  }

  export type QuestaoCreateWithoutAvaliacaoInput = {
    id?: string
    enunciado: string
    opcoes?: QuestaoCreateopcoesInput | string[]
    respostaCorreta: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestaoUncheckedCreateWithoutAvaliacaoInput = {
    id?: string
    enunciado: string
    opcoes?: QuestaoCreateopcoesInput | string[]
    respostaCorreta: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestaoCreateOrConnectWithoutAvaliacaoInput = {
    where: QuestaoWhereUniqueInput
    create: XOR<QuestaoCreateWithoutAvaliacaoInput, QuestaoUncheckedCreateWithoutAvaliacaoInput>
  }

  export type QuestaoCreateManyAvaliacaoInputEnvelope = {
    data: QuestaoCreateManyAvaliacaoInput | QuestaoCreateManyAvaliacaoInput[]
    skipDuplicates?: boolean
  }

  export type ResultadoAvaliacaoCreateWithoutAvaliacaoInput = {
    id?: string
    respostas?: ResultadoAvaliacaoCreaterespostasInput | number[]
    pontuacao: number
    aprovado: boolean
    dataRealizacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutResultadosInput
  }

  export type ResultadoAvaliacaoUncheckedCreateWithoutAvaliacaoInput = {
    id?: string
    respostas?: ResultadoAvaliacaoCreaterespostasInput | number[]
    pontuacao: number
    aprovado: boolean
    dataRealizacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ResultadoAvaliacaoCreateOrConnectWithoutAvaliacaoInput = {
    where: ResultadoAvaliacaoWhereUniqueInput
    create: XOR<ResultadoAvaliacaoCreateWithoutAvaliacaoInput, ResultadoAvaliacaoUncheckedCreateWithoutAvaliacaoInput>
  }

  export type ResultadoAvaliacaoCreateManyAvaliacaoInputEnvelope = {
    data: ResultadoAvaliacaoCreateManyAvaliacaoInput | ResultadoAvaliacaoCreateManyAvaliacaoInput[]
    skipDuplicates?: boolean
  }

  export type ModuloUpsertWithoutAvaliacoesInput = {
    update: XOR<ModuloUpdateWithoutAvaliacoesInput, ModuloUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<ModuloCreateWithoutAvaliacoesInput, ModuloUncheckedCreateWithoutAvaliacoesInput>
    where?: ModuloWhereInput
  }

  export type ModuloUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: ModuloWhereInput
    data: XOR<ModuloUpdateWithoutAvaliacoesInput, ModuloUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type ModuloUpdateWithoutAvaliacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    versao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutModulosNestedInput
    progressos?: ProgressoUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateWithoutAvaliacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    versao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    progressos?: ProgressoUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type QuestaoUpsertWithWhereUniqueWithoutAvaliacaoInput = {
    where: QuestaoWhereUniqueInput
    update: XOR<QuestaoUpdateWithoutAvaliacaoInput, QuestaoUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<QuestaoCreateWithoutAvaliacaoInput, QuestaoUncheckedCreateWithoutAvaliacaoInput>
  }

  export type QuestaoUpdateWithWhereUniqueWithoutAvaliacaoInput = {
    where: QuestaoWhereUniqueInput
    data: XOR<QuestaoUpdateWithoutAvaliacaoInput, QuestaoUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type QuestaoUpdateManyWithWhereWithoutAvaliacaoInput = {
    where: QuestaoScalarWhereInput
    data: XOR<QuestaoUpdateManyMutationInput, QuestaoUncheckedUpdateManyWithoutAvaliacaoInput>
  }

  export type QuestaoScalarWhereInput = {
    AND?: QuestaoScalarWhereInput | QuestaoScalarWhereInput[]
    OR?: QuestaoScalarWhereInput[]
    NOT?: QuestaoScalarWhereInput | QuestaoScalarWhereInput[]
    id?: StringFilter<"Questao"> | string
    enunciado?: StringFilter<"Questao"> | string
    opcoes?: StringNullableListFilter<"Questao">
    respostaCorreta?: IntFilter<"Questao"> | number
    createdAt?: DateTimeFilter<"Questao"> | Date | string
    updatedAt?: DateTimeFilter<"Questao"> | Date | string
    avaliacaoId?: StringFilter<"Questao"> | string
  }

  export type ResultadoAvaliacaoUpsertWithWhereUniqueWithoutAvaliacaoInput = {
    where: ResultadoAvaliacaoWhereUniqueInput
    update: XOR<ResultadoAvaliacaoUpdateWithoutAvaliacaoInput, ResultadoAvaliacaoUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<ResultadoAvaliacaoCreateWithoutAvaliacaoInput, ResultadoAvaliacaoUncheckedCreateWithoutAvaliacaoInput>
  }

  export type ResultadoAvaliacaoUpdateWithWhereUniqueWithoutAvaliacaoInput = {
    where: ResultadoAvaliacaoWhereUniqueInput
    data: XOR<ResultadoAvaliacaoUpdateWithoutAvaliacaoInput, ResultadoAvaliacaoUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type ResultadoAvaliacaoUpdateManyWithWhereWithoutAvaliacaoInput = {
    where: ResultadoAvaliacaoScalarWhereInput
    data: XOR<ResultadoAvaliacaoUpdateManyMutationInput, ResultadoAvaliacaoUncheckedUpdateManyWithoutAvaliacaoInput>
  }

  export type AvaliacaoCreateWithoutQuestoesInput = {
    id?: string
    titulo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modulo: ModuloCreateNestedOneWithoutAvaliacoesInput
    resultados?: ResultadoAvaliacaoCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateWithoutQuestoesInput = {
    id?: string
    titulo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moduloId: string
    resultados?: ResultadoAvaliacaoUncheckedCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoCreateOrConnectWithoutQuestoesInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutQuestoesInput, AvaliacaoUncheckedCreateWithoutQuestoesInput>
  }

  export type AvaliacaoUpsertWithoutQuestoesInput = {
    update: XOR<AvaliacaoUpdateWithoutQuestoesInput, AvaliacaoUncheckedUpdateWithoutQuestoesInput>
    create: XOR<AvaliacaoCreateWithoutQuestoesInput, AvaliacaoUncheckedCreateWithoutQuestoesInput>
    where?: AvaliacaoWhereInput
  }

  export type AvaliacaoUpdateToOneWithWhereWithoutQuestoesInput = {
    where?: AvaliacaoWhereInput
    data: XOR<AvaliacaoUpdateWithoutQuestoesInput, AvaliacaoUncheckedUpdateWithoutQuestoesInput>
  }

  export type AvaliacaoUpdateWithoutQuestoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulo?: ModuloUpdateOneRequiredWithoutAvaliacoesNestedInput
    resultados?: ResultadoAvaliacaoUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutQuestoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduloId?: StringFieldUpdateOperationsInput | string
    resultados?: ResultadoAvaliacaoUncheckedUpdateManyWithoutAvaliacaoNestedInput
  }

  export type UserCreateWithoutResultadosInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    farmacia?: FarmaciaCreateNestedOneWithoutUsuariosInput
    progressos?: ProgressoCreateNestedManyWithoutUserInput
    certificados?: CertificadoCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResultadosInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    farmaciaId?: string | null
    progressos?: ProgressoUncheckedCreateNestedManyWithoutUserInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResultadosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResultadosInput, UserUncheckedCreateWithoutResultadosInput>
  }

  export type AvaliacaoCreateWithoutResultadosInput = {
    id?: string
    titulo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modulo: ModuloCreateNestedOneWithoutAvaliacoesInput
    questoes?: QuestaoCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateWithoutResultadosInput = {
    id?: string
    titulo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moduloId: string
    questoes?: QuestaoUncheckedCreateNestedManyWithoutAvaliacaoInput
  }

  export type AvaliacaoCreateOrConnectWithoutResultadosInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutResultadosInput, AvaliacaoUncheckedCreateWithoutResultadosInput>
  }

  export type UserUpsertWithoutResultadosInput = {
    update: XOR<UserUpdateWithoutResultadosInput, UserUncheckedUpdateWithoutResultadosInput>
    create: XOR<UserCreateWithoutResultadosInput, UserUncheckedCreateWithoutResultadosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResultadosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResultadosInput, UserUncheckedUpdateWithoutResultadosInput>
  }

  export type UserUpdateWithoutResultadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmacia?: FarmaciaUpdateOneWithoutUsuariosNestedInput
    progressos?: ProgressoUpdateManyWithoutUserNestedInput
    certificados?: CertificadoUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResultadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmaciaId?: NullableStringFieldUpdateOperationsInput | string | null
    progressos?: ProgressoUncheckedUpdateManyWithoutUserNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AvaliacaoUpsertWithoutResultadosInput = {
    update: XOR<AvaliacaoUpdateWithoutResultadosInput, AvaliacaoUncheckedUpdateWithoutResultadosInput>
    create: XOR<AvaliacaoCreateWithoutResultadosInput, AvaliacaoUncheckedCreateWithoutResultadosInput>
    where?: AvaliacaoWhereInput
  }

  export type AvaliacaoUpdateToOneWithWhereWithoutResultadosInput = {
    where?: AvaliacaoWhereInput
    data: XOR<AvaliacaoUpdateWithoutResultadosInput, AvaliacaoUncheckedUpdateWithoutResultadosInput>
  }

  export type AvaliacaoUpdateWithoutResultadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulo?: ModuloUpdateOneRequiredWithoutAvaliacoesNestedInput
    questoes?: QuestaoUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutResultadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduloId?: StringFieldUpdateOperationsInput | string
    questoes?: QuestaoUncheckedUpdateManyWithoutAvaliacaoNestedInput
  }

  export type UserCreateWithoutCertificadosInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    farmacia?: FarmaciaCreateNestedOneWithoutUsuariosInput
    progressos?: ProgressoCreateNestedManyWithoutUserInput
    resultados?: ResultadoAvaliacaoCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCertificadosInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    farmaciaId?: string | null
    progressos?: ProgressoUncheckedCreateNestedManyWithoutUserInput
    resultados?: ResultadoAvaliacaoUncheckedCreateNestedManyWithoutUserInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCertificadosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCertificadosInput, UserUncheckedCreateWithoutCertificadosInput>
  }

  export type UserUpsertWithoutCertificadosInput = {
    update: XOR<UserUpdateWithoutCertificadosInput, UserUncheckedUpdateWithoutCertificadosInput>
    create: XOR<UserCreateWithoutCertificadosInput, UserUncheckedCreateWithoutCertificadosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCertificadosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCertificadosInput, UserUncheckedUpdateWithoutCertificadosInput>
  }

  export type UserUpdateWithoutCertificadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmacia?: FarmaciaUpdateOneWithoutUsuariosNestedInput
    progressos?: ProgressoUpdateManyWithoutUserNestedInput
    resultados?: ResultadoAvaliacaoUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCertificadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmaciaId?: NullableStringFieldUpdateOperationsInput | string | null
    progressos?: ProgressoUncheckedUpdateManyWithoutUserNestedInput
    resultados?: ResultadoAvaliacaoUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificacoesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    farmacia?: FarmaciaCreateNestedOneWithoutUsuariosInput
    progressos?: ProgressoCreateNestedManyWithoutUserInput
    resultados?: ResultadoAvaliacaoCreateNestedManyWithoutUserInput
    certificados?: CertificadoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificacoesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    farmaciaId?: string | null
    progressos?: ProgressoUncheckedCreateNestedManyWithoutUserInput
    resultados?: ResultadoAvaliacaoUncheckedCreateNestedManyWithoutUserInput
    certificados?: CertificadoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificacoesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificacoesInput, UserUncheckedCreateWithoutNotificacoesInput>
  }

  export type UserUpsertWithoutNotificacoesInput = {
    update: XOR<UserUpdateWithoutNotificacoesInput, UserUncheckedUpdateWithoutNotificacoesInput>
    create: XOR<UserCreateWithoutNotificacoesInput, UserUncheckedCreateWithoutNotificacoesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificacoesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificacoesInput, UserUncheckedUpdateWithoutNotificacoesInput>
  }

  export type UserUpdateWithoutNotificacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmacia?: FarmaciaUpdateOneWithoutUsuariosNestedInput
    progressos?: ProgressoUpdateManyWithoutUserNestedInput
    resultados?: ResultadoAvaliacaoUpdateManyWithoutUserNestedInput
    certificados?: CertificadoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmaciaId?: NullableStringFieldUpdateOperationsInput | string | null
    progressos?: ProgressoUncheckedUpdateManyWithoutUserNestedInput
    resultados?: ResultadoAvaliacaoUncheckedUpdateManyWithoutUserNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProgressoCreateManyUserInput = {
    id?: string
    progresso?: number
    concluido?: boolean
    ultimoAcesso?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    moduloId: string
  }

  export type ResultadoAvaliacaoCreateManyUserInput = {
    id?: string
    respostas?: ResultadoAvaliacaoCreaterespostasInput | number[]
    pontuacao: number
    aprovado: boolean
    dataRealizacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    avaliacaoId: string
  }

  export type CertificadoCreateManyUserInput = {
    id?: string
    titulo: string
    codigo: string
    dataEmissao?: Date | string
    dataValidade: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificacaoCreateManyUserInput = {
    id?: string
    titulo: string
    mensagem: string
    lida?: boolean
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    ultimoAcesso?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modulo?: ModuloUpdateOneRequiredWithoutProgressosNestedInput
  }

  export type ProgressoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    ultimoAcesso?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduloId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    ultimoAcesso?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduloId?: StringFieldUpdateOperationsInput | string
  }

  export type ResultadoAvaliacaoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    respostas?: ResultadoAvaliacaoUpdaterespostasInput | number[]
    pontuacao?: IntFieldUpdateOperationsInput | number
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataRealizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateOneRequiredWithoutResultadosNestedInput
  }

  export type ResultadoAvaliacaoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    respostas?: ResultadoAvaliacaoUpdaterespostasInput | number[]
    pontuacao?: IntFieldUpdateOperationsInput | number
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataRealizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacaoId?: StringFieldUpdateOperationsInput | string
  }

  export type ResultadoAvaliacaoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    respostas?: ResultadoAvaliacaoUpdaterespostasInput | number[]
    pontuacao?: IntFieldUpdateOperationsInput | number
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataRealizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacaoId?: StringFieldUpdateOperationsInput | string
  }

  export type CertificadoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificadoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    dataEmissao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataValidade?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyFarmaciaInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutFarmaciaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressos?: ProgressoUpdateManyWithoutUserNestedInput
    resultados?: ResultadoAvaliacaoUpdateManyWithoutUserNestedInput
    certificados?: CertificadoUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFarmaciaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressos?: ProgressoUncheckedUpdateManyWithoutUserNestedInput
    resultados?: ResultadoAvaliacaoUncheckedUpdateManyWithoutUserNestedInput
    certificados?: CertificadoUncheckedUpdateManyWithoutUserNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFarmaciaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuloCreateManyCategoriaInput = {
    id?: string
    titulo: string
    descricao: string
    conteudo: string
    ordem: number
    versao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicamentoCreateManyCategoriaInput = {
    id?: string
    nome: string
    principioAtivo: string
    formaFarmaceutica: string
    concentracao: string
    indicacoes?: string | null
    contraindicacoes?: string | null
    efeitosAdversos?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuloUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    versao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressos?: ProgressoUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    versao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressos?: ProgressoUncheckedUpdateManyWithoutModuloNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutModuloNestedInput
  }

  export type ModuloUncheckedUpdateManyWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    versao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicamentoUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    principioAtivo?: StringFieldUpdateOperationsInput | string
    formaFarmaceutica?: StringFieldUpdateOperationsInput | string
    concentracao?: StringFieldUpdateOperationsInput | string
    indicacoes?: NullableStringFieldUpdateOperationsInput | string | null
    contraindicacoes?: NullableStringFieldUpdateOperationsInput | string | null
    efeitosAdversos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicamentoUncheckedUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    principioAtivo?: StringFieldUpdateOperationsInput | string
    formaFarmaceutica?: StringFieldUpdateOperationsInput | string
    concentracao?: StringFieldUpdateOperationsInput | string
    indicacoes?: NullableStringFieldUpdateOperationsInput | string | null
    contraindicacoes?: NullableStringFieldUpdateOperationsInput | string | null
    efeitosAdversos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicamentoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    principioAtivo?: StringFieldUpdateOperationsInput | string
    formaFarmaceutica?: StringFieldUpdateOperationsInput | string
    concentracao?: StringFieldUpdateOperationsInput | string
    indicacoes?: NullableStringFieldUpdateOperationsInput | string | null
    contraindicacoes?: NullableStringFieldUpdateOperationsInput | string | null
    efeitosAdversos?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressoCreateManyModuloInput = {
    id?: string
    progresso?: number
    concluido?: boolean
    ultimoAcesso?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type AvaliacaoCreateManyModuloInput = {
    id?: string
    titulo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressoUpdateWithoutModuloInput = {
    id?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    ultimoAcesso?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressosNestedInput
  }

  export type ProgressoUncheckedUpdateWithoutModuloInput = {
    id?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    ultimoAcesso?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProgressoUncheckedUpdateManyWithoutModuloInput = {
    id?: StringFieldUpdateOperationsInput | string
    progresso?: IntFieldUpdateOperationsInput | number
    concluido?: BoolFieldUpdateOperationsInput | boolean
    ultimoAcesso?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AvaliacaoUpdateWithoutModuloInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questoes?: QuestaoUpdateManyWithoutAvaliacaoNestedInput
    resultados?: ResultadoAvaliacaoUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutModuloInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questoes?: QuestaoUncheckedUpdateManyWithoutAvaliacaoNestedInput
    resultados?: ResultadoAvaliacaoUncheckedUpdateManyWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateManyWithoutModuloInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestaoCreateManyAvaliacaoInput = {
    id?: string
    enunciado: string
    opcoes?: QuestaoCreateopcoesInput | string[]
    respostaCorreta: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResultadoAvaliacaoCreateManyAvaliacaoInput = {
    id?: string
    respostas?: ResultadoAvaliacaoCreaterespostasInput | number[]
    pontuacao: number
    aprovado: boolean
    dataRealizacao?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type QuestaoUpdateWithoutAvaliacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    opcoes?: QuestaoUpdateopcoesInput | string[]
    respostaCorreta?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestaoUncheckedUpdateWithoutAvaliacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    opcoes?: QuestaoUpdateopcoesInput | string[]
    respostaCorreta?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestaoUncheckedUpdateManyWithoutAvaliacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    opcoes?: QuestaoUpdateopcoesInput | string[]
    respostaCorreta?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoAvaliacaoUpdateWithoutAvaliacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    respostas?: ResultadoAvaliacaoUpdaterespostasInput | number[]
    pontuacao?: IntFieldUpdateOperationsInput | number
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataRealizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResultadosNestedInput
  }

  export type ResultadoAvaliacaoUncheckedUpdateWithoutAvaliacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    respostas?: ResultadoAvaliacaoUpdaterespostasInput | number[]
    pontuacao?: IntFieldUpdateOperationsInput | number
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataRealizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ResultadoAvaliacaoUncheckedUpdateManyWithoutAvaliacaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    respostas?: ResultadoAvaliacaoUpdaterespostasInput | number[]
    pontuacao?: IntFieldUpdateOperationsInput | number
    aprovado?: BoolFieldUpdateOperationsInput | boolean
    dataRealizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}