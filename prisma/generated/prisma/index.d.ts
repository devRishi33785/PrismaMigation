
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Roles
 * 
 */
export type Roles = $Result.DefaultSelection<Prisma.$RolesPayload>
/**
 * Model UserRoleMapping
 * 
 */
export type UserRoleMapping = $Result.DefaultSelection<Prisma.$UserRoleMappingPayload>
/**
 * Model Coins
 * 
 */
export type Coins = $Result.DefaultSelection<Prisma.$CoinsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
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
 * const users = await prisma.users.findMany()
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
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.RolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRoleMapping`: Exposes CRUD operations for the **UserRoleMapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoleMappings
    * const userRoleMappings = await prisma.userRoleMapping.findMany()
    * ```
    */
  get userRoleMapping(): Prisma.UserRoleMappingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coins`: Exposes CRUD operations for the **Coins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coins
    * const coins = await prisma.coins.findMany()
    * ```
    */
  get coins(): Prisma.CoinsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Users: 'Users',
    Roles: 'Roles',
    UserRoleMapping: 'UserRoleMapping',
    Coins: 'Coins'
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
      modelProps: "users" | "roles" | "userRoleMapping" | "coins"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Roles: {
        payload: Prisma.$RolesPayload<ExtArgs>
        fields: Prisma.RolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findFirst: {
            args: Prisma.RolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findMany: {
            args: Prisma.RolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          create: {
            args: Prisma.RolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          createMany: {
            args: Prisma.RolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          delete: {
            args: Prisma.RolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          update: {
            args: Prisma.RolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          deleteMany: {
            args: Prisma.RolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          upsert: {
            args: Prisma.RolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.RolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      UserRoleMapping: {
        payload: Prisma.$UserRoleMappingPayload<ExtArgs>
        fields: Prisma.UserRoleMappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleMappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleMappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleMappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleMappingPayload>
          }
          findFirst: {
            args: Prisma.UserRoleMappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleMappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleMappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleMappingPayload>
          }
          findMany: {
            args: Prisma.UserRoleMappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleMappingPayload>[]
          }
          create: {
            args: Prisma.UserRoleMappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleMappingPayload>
          }
          createMany: {
            args: Prisma.UserRoleMappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleMappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleMappingPayload>[]
          }
          delete: {
            args: Prisma.UserRoleMappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleMappingPayload>
          }
          update: {
            args: Prisma.UserRoleMappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleMappingPayload>
          }
          deleteMany: {
            args: Prisma.UserRoleMappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleMappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleMappingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleMappingPayload>[]
          }
          upsert: {
            args: Prisma.UserRoleMappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRoleMappingPayload>
          }
          aggregate: {
            args: Prisma.UserRoleMappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRoleMapping>
          }
          groupBy: {
            args: Prisma.UserRoleMappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleMappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleMappingCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleMappingCountAggregateOutputType> | number
          }
        }
      }
      Coins: {
        payload: Prisma.$CoinsPayload<ExtArgs>
        fields: Prisma.CoinsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoinsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoinsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPayload>
          }
          findFirst: {
            args: Prisma.CoinsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoinsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPayload>
          }
          findMany: {
            args: Prisma.CoinsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPayload>[]
          }
          create: {
            args: Prisma.CoinsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPayload>
          }
          createMany: {
            args: Prisma.CoinsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoinsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPayload>[]
          }
          delete: {
            args: Prisma.CoinsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPayload>
          }
          update: {
            args: Prisma.CoinsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPayload>
          }
          deleteMany: {
            args: Prisma.CoinsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoinsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoinsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPayload>[]
          }
          upsert: {
            args: Prisma.CoinsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPayload>
          }
          aggregate: {
            args: Prisma.CoinsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoins>
          }
          groupBy: {
            args: Prisma.CoinsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoinsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoinsCountArgs<ExtArgs>
            result: $Utils.Optional<CoinsCountAggregateOutputType> | number
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
    users?: UsersOmit
    roles?: RolesOmit
    userRoleMapping?: UserRoleMappingOmit
    coins?: CoinsOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    roles: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UsersCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleMappingWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleMappingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    countryId: number | null
  }

  export type UsersSumAggregateOutputType = {
    countryId: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    provider: string | null
    providerId: string | null
    referralCode: string | null
    countryId: number | null
    phone: string | null
    dateOfBirth: string | null
    acceptedTerms: boolean | null
    mfaEnabled: boolean | null
    mfaSecret: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    provider: string | null
    providerId: string | null
    referralCode: string | null
    countryId: number | null
    phone: string | null
    dateOfBirth: string | null
    acceptedTerms: boolean | null
    mfaEnabled: boolean | null
    mfaSecret: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    provider: number
    providerId: number
    referralCode: number
    countryId: number
    phone: number
    dateOfBirth: number
    acceptedTerms: number
    mfaEnabled: number
    mfaSecret: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    countryId?: true
  }

  export type UsersSumAggregateInputType = {
    countryId?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    provider?: true
    providerId?: true
    referralCode?: true
    countryId?: true
    phone?: true
    dateOfBirth?: true
    acceptedTerms?: true
    mfaEnabled?: true
    mfaSecret?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    provider?: true
    providerId?: true
    referralCode?: true
    countryId?: true
    phone?: true
    dateOfBirth?: true
    acceptedTerms?: true
    mfaEnabled?: true
    mfaSecret?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    provider?: true
    providerId?: true
    referralCode?: true
    countryId?: true
    phone?: true
    dateOfBirth?: true
    acceptedTerms?: true
    mfaEnabled?: true
    mfaSecret?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string | null
    lastName: string | null
    provider: string | null
    providerId: string | null
    referralCode: string | null
    countryId: number | null
    phone: string | null
    dateOfBirth: string | null
    acceptedTerms: boolean
    mfaEnabled: boolean
    mfaSecret: string | null
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    provider?: boolean
    providerId?: boolean
    referralCode?: boolean
    countryId?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    acceptedTerms?: boolean
    mfaEnabled?: boolean
    mfaSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    roles?: boolean | Users$rolesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    provider?: boolean
    providerId?: boolean
    referralCode?: boolean
    countryId?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    acceptedTerms?: boolean
    mfaEnabled?: boolean
    mfaSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    provider?: boolean
    providerId?: boolean
    referralCode?: boolean
    countryId?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    acceptedTerms?: boolean
    mfaEnabled?: boolean
    mfaSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    provider?: boolean
    providerId?: boolean
    referralCode?: boolean
    countryId?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    acceptedTerms?: boolean
    mfaEnabled?: boolean
    mfaSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "provider" | "providerId" | "referralCode" | "countryId" | "phone" | "dateOfBirth" | "acceptedTerms" | "mfaEnabled" | "mfaSecret" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Users$rolesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      roles: Prisma.$UserRoleMappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string | null
      lastName: string | null
      provider: string | null
      providerId: string | null
      referralCode: string | null
      countryId: number | null
      phone: string | null
      dateOfBirth: string | null
      acceptedTerms: boolean
      mfaEnabled: boolean
      mfaSecret: string | null
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Users$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Users$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly firstName: FieldRef<"Users", 'String'>
    readonly lastName: FieldRef<"Users", 'String'>
    readonly provider: FieldRef<"Users", 'String'>
    readonly providerId: FieldRef<"Users", 'String'>
    readonly referralCode: FieldRef<"Users", 'String'>
    readonly countryId: FieldRef<"Users", 'Int'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly dateOfBirth: FieldRef<"Users", 'String'>
    readonly acceptedTerms: FieldRef<"Users", 'Boolean'>
    readonly mfaEnabled: FieldRef<"Users", 'Boolean'>
    readonly mfaSecret: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
    readonly deletedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.roles
   */
  export type Users$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleMapping
     */
    select?: UserRoleMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleMapping
     */
    omit?: UserRoleMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleMappingInclude<ExtArgs> | null
    where?: UserRoleMappingWhereInput
    orderBy?: UserRoleMappingOrderByWithRelationInput | UserRoleMappingOrderByWithRelationInput[]
    cursor?: UserRoleMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleMappingScalarFieldEnum | UserRoleMappingScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesMinAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    role: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type RolesMinAggregateInputType = {
    id?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesWhereInput
    orderBy?: RolesOrderByWithAggregationInput | RolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: RolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type RolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    users?: boolean | Roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectScalar = {
    id?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type RolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["roles"]>
  export type RolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roles"
    objects: {
      users: Prisma.$UserRoleMappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type RolesGetPayload<S extends boolean | null | undefined | RolesDefaultArgs> = $Result.GetResult<Prisma.$RolesPayload, S>

  type RolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface RolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roles'], meta: { name: 'Roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolesFindUniqueArgs>(args: SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs>(args: SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolesFindFirstArgs>(args?: SelectSubset<T, RolesFindFirstArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs>(args?: SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolesFindManyArgs>(args?: SelectSubset<T, RolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends RolesCreateArgs>(args: SelectSubset<T, RolesCreateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolesCreateManyArgs>(args?: SelectSubset<T, RolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolesCreateManyAndReturnArgs>(args?: SelectSubset<T, RolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends RolesDeleteArgs>(args: SelectSubset<T, RolesDeleteArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolesUpdateArgs>(args: SelectSubset<T, RolesUpdateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolesDeleteManyArgs>(args?: SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolesUpdateManyArgs>(args: SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RolesUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.updateManyAndReturn({
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
    updateManyAndReturn<T extends RolesUpdateManyAndReturnArgs>(args: SelectSubset<T, RolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends RolesUpsertArgs>(args: SelectSubset<T, RolesUpsertArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
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
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roles model
   */
  readonly fields: RolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, Roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Roles model
   */
  interface RolesFieldRefs {
    readonly id: FieldRef<"Roles", 'String'>
    readonly role: FieldRef<"Roles", 'Role'>
    readonly createdAt: FieldRef<"Roles", 'DateTime'>
    readonly updatedAt: FieldRef<"Roles", 'DateTime'>
    readonly deletedAt: FieldRef<"Roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findMany
   */
  export type RolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles create
   */
  export type RolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to create a Roles.
     */
    data?: XOR<RolesCreateInput, RolesUncheckedCreateInput>
  }

  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roles createManyAndReturn
   */
  export type RolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roles update
   */
  export type RolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Roles updateManyAndReturn
   */
  export type RolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Roles upsert
   */
  export type RolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
  }

  /**
   * Roles delete
   */
  export type RolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Roles.users
   */
  export type Roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleMapping
     */
    select?: UserRoleMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleMapping
     */
    omit?: UserRoleMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleMappingInclude<ExtArgs> | null
    where?: UserRoleMappingWhereInput
    orderBy?: UserRoleMappingOrderByWithRelationInput | UserRoleMappingOrderByWithRelationInput[]
    cursor?: UserRoleMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleMappingScalarFieldEnum | UserRoleMappingScalarFieldEnum[]
  }

  /**
   * Roles without action
   */
  export type RolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
  }


  /**
   * Model UserRoleMapping
   */

  export type AggregateUserRoleMapping = {
    _count: UserRoleMappingCountAggregateOutputType | null
    _min: UserRoleMappingMinAggregateOutputType | null
    _max: UserRoleMappingMaxAggregateOutputType | null
  }

  export type UserRoleMappingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserRoleMappingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserRoleMappingCountAggregateOutputType = {
    id: number
    userId: number
    roleId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserRoleMappingMinAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserRoleMappingMaxAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserRoleMappingCountAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserRoleMappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoleMapping to aggregate.
     */
    where?: UserRoleMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoleMappings to fetch.
     */
    orderBy?: UserRoleMappingOrderByWithRelationInput | UserRoleMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoleMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoleMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoleMappings
    **/
    _count?: true | UserRoleMappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMappingMaxAggregateInputType
  }

  export type GetUserRoleMappingAggregateType<T extends UserRoleMappingAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRoleMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRoleMapping[P]>
      : GetScalarType<T[P], AggregateUserRoleMapping[P]>
  }




  export type UserRoleMappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleMappingWhereInput
    orderBy?: UserRoleMappingOrderByWithAggregationInput | UserRoleMappingOrderByWithAggregationInput[]
    by: UserRoleMappingScalarFieldEnum[] | UserRoleMappingScalarFieldEnum
    having?: UserRoleMappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleMappingCountAggregateInputType | true
    _min?: UserRoleMappingMinAggregateInputType
    _max?: UserRoleMappingMaxAggregateInputType
  }

  export type UserRoleMappingGroupByOutputType = {
    id: string
    userId: string
    roleId: string
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: UserRoleMappingCountAggregateOutputType | null
    _min: UserRoleMappingMinAggregateOutputType | null
    _max: UserRoleMappingMaxAggregateOutputType | null
  }

  type GetUserRoleMappingGroupByPayload<T extends UserRoleMappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleMappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleMappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleMappingGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleMappingGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleMappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    roles?: boolean | RolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRoleMapping"]>

  export type UserRoleMappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    roles?: boolean | RolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRoleMapping"]>

  export type UserRoleMappingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    roles?: boolean | RolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRoleMapping"]>

  export type UserRoleMappingSelectScalar = {
    id?: boolean
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserRoleMappingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "roleId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["userRoleMapping"]>
  export type UserRoleMappingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    roles?: boolean | RolesDefaultArgs<ExtArgs>
  }
  export type UserRoleMappingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    roles?: boolean | RolesDefaultArgs<ExtArgs>
  }
  export type UserRoleMappingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    roles?: boolean | RolesDefaultArgs<ExtArgs>
  }

  export type $UserRoleMappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRoleMapping"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>
      roles: Prisma.$RolesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      roleId: string
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["userRoleMapping"]>
    composites: {}
  }

  type UserRoleMappingGetPayload<S extends boolean | null | undefined | UserRoleMappingDefaultArgs> = $Result.GetResult<Prisma.$UserRoleMappingPayload, S>

  type UserRoleMappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleMappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleMappingCountAggregateInputType | true
    }

  export interface UserRoleMappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRoleMapping'], meta: { name: 'UserRoleMapping' } }
    /**
     * Find zero or one UserRoleMapping that matches the filter.
     * @param {UserRoleMappingFindUniqueArgs} args - Arguments to find a UserRoleMapping
     * @example
     * // Get one UserRoleMapping
     * const userRoleMapping = await prisma.userRoleMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleMappingFindUniqueArgs>(args: SelectSubset<T, UserRoleMappingFindUniqueArgs<ExtArgs>>): Prisma__UserRoleMappingClient<$Result.GetResult<Prisma.$UserRoleMappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRoleMapping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleMappingFindUniqueOrThrowArgs} args - Arguments to find a UserRoleMapping
     * @example
     * // Get one UserRoleMapping
     * const userRoleMapping = await prisma.userRoleMapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleMappingFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleMappingClient<$Result.GetResult<Prisma.$UserRoleMappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRoleMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleMappingFindFirstArgs} args - Arguments to find a UserRoleMapping
     * @example
     * // Get one UserRoleMapping
     * const userRoleMapping = await prisma.userRoleMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleMappingFindFirstArgs>(args?: SelectSubset<T, UserRoleMappingFindFirstArgs<ExtArgs>>): Prisma__UserRoleMappingClient<$Result.GetResult<Prisma.$UserRoleMappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRoleMapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleMappingFindFirstOrThrowArgs} args - Arguments to find a UserRoleMapping
     * @example
     * // Get one UserRoleMapping
     * const userRoleMapping = await prisma.userRoleMapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleMappingFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleMappingClient<$Result.GetResult<Prisma.$UserRoleMappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoleMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleMappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoleMappings
     * const userRoleMappings = await prisma.userRoleMapping.findMany()
     * 
     * // Get first 10 UserRoleMappings
     * const userRoleMappings = await prisma.userRoleMapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleMappingWithIdOnly = await prisma.userRoleMapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRoleMappingFindManyArgs>(args?: SelectSubset<T, UserRoleMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRoleMapping.
     * @param {UserRoleMappingCreateArgs} args - Arguments to create a UserRoleMapping.
     * @example
     * // Create one UserRoleMapping
     * const UserRoleMapping = await prisma.userRoleMapping.create({
     *   data: {
     *     // ... data to create a UserRoleMapping
     *   }
     * })
     * 
     */
    create<T extends UserRoleMappingCreateArgs>(args: SelectSubset<T, UserRoleMappingCreateArgs<ExtArgs>>): Prisma__UserRoleMappingClient<$Result.GetResult<Prisma.$UserRoleMappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoleMappings.
     * @param {UserRoleMappingCreateManyArgs} args - Arguments to create many UserRoleMappings.
     * @example
     * // Create many UserRoleMappings
     * const userRoleMapping = await prisma.userRoleMapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleMappingCreateManyArgs>(args?: SelectSubset<T, UserRoleMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoleMappings and returns the data saved in the database.
     * @param {UserRoleMappingCreateManyAndReturnArgs} args - Arguments to create many UserRoleMappings.
     * @example
     * // Create many UserRoleMappings
     * const userRoleMapping = await prisma.userRoleMapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoleMappings and only return the `id`
     * const userRoleMappingWithIdOnly = await prisma.userRoleMapping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleMappingCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleMappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRoleMapping.
     * @param {UserRoleMappingDeleteArgs} args - Arguments to delete one UserRoleMapping.
     * @example
     * // Delete one UserRoleMapping
     * const UserRoleMapping = await prisma.userRoleMapping.delete({
     *   where: {
     *     // ... filter to delete one UserRoleMapping
     *   }
     * })
     * 
     */
    delete<T extends UserRoleMappingDeleteArgs>(args: SelectSubset<T, UserRoleMappingDeleteArgs<ExtArgs>>): Prisma__UserRoleMappingClient<$Result.GetResult<Prisma.$UserRoleMappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRoleMapping.
     * @param {UserRoleMappingUpdateArgs} args - Arguments to update one UserRoleMapping.
     * @example
     * // Update one UserRoleMapping
     * const userRoleMapping = await prisma.userRoleMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleMappingUpdateArgs>(args: SelectSubset<T, UserRoleMappingUpdateArgs<ExtArgs>>): Prisma__UserRoleMappingClient<$Result.GetResult<Prisma.$UserRoleMappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoleMappings.
     * @param {UserRoleMappingDeleteManyArgs} args - Arguments to filter UserRoleMappings to delete.
     * @example
     * // Delete a few UserRoleMappings
     * const { count } = await prisma.userRoleMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleMappingDeleteManyArgs>(args?: SelectSubset<T, UserRoleMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoleMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoleMappings
     * const userRoleMapping = await prisma.userRoleMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleMappingUpdateManyArgs>(args: SelectSubset<T, UserRoleMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoleMappings and returns the data updated in the database.
     * @param {UserRoleMappingUpdateManyAndReturnArgs} args - Arguments to update many UserRoleMappings.
     * @example
     * // Update many UserRoleMappings
     * const userRoleMapping = await prisma.userRoleMapping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoleMappings and only return the `id`
     * const userRoleMappingWithIdOnly = await prisma.userRoleMapping.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserRoleMappingUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleMappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleMappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRoleMapping.
     * @param {UserRoleMappingUpsertArgs} args - Arguments to update or create a UserRoleMapping.
     * @example
     * // Update or create a UserRoleMapping
     * const userRoleMapping = await prisma.userRoleMapping.upsert({
     *   create: {
     *     // ... data to create a UserRoleMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRoleMapping we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleMappingUpsertArgs>(args: SelectSubset<T, UserRoleMappingUpsertArgs<ExtArgs>>): Prisma__UserRoleMappingClient<$Result.GetResult<Prisma.$UserRoleMappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoleMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleMappingCountArgs} args - Arguments to filter UserRoleMappings to count.
     * @example
     * // Count the number of UserRoleMappings
     * const count = await prisma.userRoleMapping.count({
     *   where: {
     *     // ... the filter for the UserRoleMappings we want to count
     *   }
     * })
    **/
    count<T extends UserRoleMappingCountArgs>(
      args?: Subset<T, UserRoleMappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleMappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRoleMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRoleMappingAggregateArgs>(args: Subset<T, UserRoleMappingAggregateArgs>): Prisma.PrismaPromise<GetUserRoleMappingAggregateType<T>>

    /**
     * Group by UserRoleMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleMappingGroupByArgs} args - Group by arguments.
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
      T extends UserRoleMappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleMappingGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleMappingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRoleMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRoleMapping model
   */
  readonly fields: UserRoleMappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRoleMapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleMappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    roles<T extends RolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolesDefaultArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserRoleMapping model
   */
  interface UserRoleMappingFieldRefs {
    readonly id: FieldRef<"UserRoleMapping", 'String'>
    readonly userId: FieldRef<"UserRoleMapping", 'String'>
    readonly roleId: FieldRef<"UserRoleMapping", 'String'>
    readonly createdAt: FieldRef<"UserRoleMapping", 'DateTime'>
    readonly updatedAt: FieldRef<"UserRoleMapping", 'DateTime'>
    readonly deletedAt: FieldRef<"UserRoleMapping", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRoleMapping findUnique
   */
  export type UserRoleMappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleMapping
     */
    select?: UserRoleMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleMapping
     */
    omit?: UserRoleMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleMappingInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleMapping to fetch.
     */
    where: UserRoleMappingWhereUniqueInput
  }

  /**
   * UserRoleMapping findUniqueOrThrow
   */
  export type UserRoleMappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleMapping
     */
    select?: UserRoleMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleMapping
     */
    omit?: UserRoleMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleMappingInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleMapping to fetch.
     */
    where: UserRoleMappingWhereUniqueInput
  }

  /**
   * UserRoleMapping findFirst
   */
  export type UserRoleMappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleMapping
     */
    select?: UserRoleMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleMapping
     */
    omit?: UserRoleMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleMappingInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleMapping to fetch.
     */
    where?: UserRoleMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoleMappings to fetch.
     */
    orderBy?: UserRoleMappingOrderByWithRelationInput | UserRoleMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoleMappings.
     */
    cursor?: UserRoleMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoleMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoleMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoleMappings.
     */
    distinct?: UserRoleMappingScalarFieldEnum | UserRoleMappingScalarFieldEnum[]
  }

  /**
   * UserRoleMapping findFirstOrThrow
   */
  export type UserRoleMappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleMapping
     */
    select?: UserRoleMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleMapping
     */
    omit?: UserRoleMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleMappingInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleMapping to fetch.
     */
    where?: UserRoleMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoleMappings to fetch.
     */
    orderBy?: UserRoleMappingOrderByWithRelationInput | UserRoleMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoleMappings.
     */
    cursor?: UserRoleMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoleMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoleMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoleMappings.
     */
    distinct?: UserRoleMappingScalarFieldEnum | UserRoleMappingScalarFieldEnum[]
  }

  /**
   * UserRoleMapping findMany
   */
  export type UserRoleMappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleMapping
     */
    select?: UserRoleMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleMapping
     */
    omit?: UserRoleMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleMappingInclude<ExtArgs> | null
    /**
     * Filter, which UserRoleMappings to fetch.
     */
    where?: UserRoleMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoleMappings to fetch.
     */
    orderBy?: UserRoleMappingOrderByWithRelationInput | UserRoleMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoleMappings.
     */
    cursor?: UserRoleMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoleMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoleMappings.
     */
    skip?: number
    distinct?: UserRoleMappingScalarFieldEnum | UserRoleMappingScalarFieldEnum[]
  }

  /**
   * UserRoleMapping create
   */
  export type UserRoleMappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleMapping
     */
    select?: UserRoleMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleMapping
     */
    omit?: UserRoleMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleMappingInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRoleMapping.
     */
    data: XOR<UserRoleMappingCreateInput, UserRoleMappingUncheckedCreateInput>
  }

  /**
   * UserRoleMapping createMany
   */
  export type UserRoleMappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoleMappings.
     */
    data: UserRoleMappingCreateManyInput | UserRoleMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRoleMapping createManyAndReturn
   */
  export type UserRoleMappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleMapping
     */
    select?: UserRoleMappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleMapping
     */
    omit?: UserRoleMappingOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoleMappings.
     */
    data: UserRoleMappingCreateManyInput | UserRoleMappingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleMappingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRoleMapping update
   */
  export type UserRoleMappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleMapping
     */
    select?: UserRoleMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleMapping
     */
    omit?: UserRoleMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleMappingInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRoleMapping.
     */
    data: XOR<UserRoleMappingUpdateInput, UserRoleMappingUncheckedUpdateInput>
    /**
     * Choose, which UserRoleMapping to update.
     */
    where: UserRoleMappingWhereUniqueInput
  }

  /**
   * UserRoleMapping updateMany
   */
  export type UserRoleMappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoleMappings.
     */
    data: XOR<UserRoleMappingUpdateManyMutationInput, UserRoleMappingUncheckedUpdateManyInput>
    /**
     * Filter which UserRoleMappings to update
     */
    where?: UserRoleMappingWhereInput
    /**
     * Limit how many UserRoleMappings to update.
     */
    limit?: number
  }

  /**
   * UserRoleMapping updateManyAndReturn
   */
  export type UserRoleMappingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleMapping
     */
    select?: UserRoleMappingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleMapping
     */
    omit?: UserRoleMappingOmit<ExtArgs> | null
    /**
     * The data used to update UserRoleMappings.
     */
    data: XOR<UserRoleMappingUpdateManyMutationInput, UserRoleMappingUncheckedUpdateManyInput>
    /**
     * Filter which UserRoleMappings to update
     */
    where?: UserRoleMappingWhereInput
    /**
     * Limit how many UserRoleMappings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleMappingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRoleMapping upsert
   */
  export type UserRoleMappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleMapping
     */
    select?: UserRoleMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleMapping
     */
    omit?: UserRoleMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleMappingInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRoleMapping to update in case it exists.
     */
    where: UserRoleMappingWhereUniqueInput
    /**
     * In case the UserRoleMapping found by the `where` argument doesn't exist, create a new UserRoleMapping with this data.
     */
    create: XOR<UserRoleMappingCreateInput, UserRoleMappingUncheckedCreateInput>
    /**
     * In case the UserRoleMapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleMappingUpdateInput, UserRoleMappingUncheckedUpdateInput>
  }

  /**
   * UserRoleMapping delete
   */
  export type UserRoleMappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleMapping
     */
    select?: UserRoleMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleMapping
     */
    omit?: UserRoleMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleMappingInclude<ExtArgs> | null
    /**
     * Filter which UserRoleMapping to delete.
     */
    where: UserRoleMappingWhereUniqueInput
  }

  /**
   * UserRoleMapping deleteMany
   */
  export type UserRoleMappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoleMappings to delete
     */
    where?: UserRoleMappingWhereInput
    /**
     * Limit how many UserRoleMappings to delete.
     */
    limit?: number
  }

  /**
   * UserRoleMapping without action
   */
  export type UserRoleMappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleMapping
     */
    select?: UserRoleMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRoleMapping
     */
    omit?: UserRoleMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleMappingInclude<ExtArgs> | null
  }


  /**
   * Model Coins
   */

  export type AggregateCoins = {
    _count: CoinsCountAggregateOutputType | null
    _avg: CoinsAvgAggregateOutputType | null
    _sum: CoinsSumAggregateOutputType | null
    _min: CoinsMinAggregateOutputType | null
    _max: CoinsMaxAggregateOutputType | null
  }

  export type CoinsAvgAggregateOutputType = {
    coinId: number | null
    rank: number | null
  }

  export type CoinsSumAggregateOutputType = {
    coinId: bigint | null
    rank: number | null
  }

  export type CoinsMinAggregateOutputType = {
    id: string | null
    coinId: bigint | null
    nameId: string | null
    name: string | null
    priceUsd: string | null
    percentChange24h: string | null
    percentChange1h: string | null
    percentChange7d: string | null
    priceBtc: string | null
    volume24: string | null
    volume24a: string | null
    symbol: string | null
    marketCapUsd: string | null
    rank: number | null
  }

  export type CoinsMaxAggregateOutputType = {
    id: string | null
    coinId: bigint | null
    nameId: string | null
    name: string | null
    priceUsd: string | null
    percentChange24h: string | null
    percentChange1h: string | null
    percentChange7d: string | null
    priceBtc: string | null
    volume24: string | null
    volume24a: string | null
    symbol: string | null
    marketCapUsd: string | null
    rank: number | null
  }

  export type CoinsCountAggregateOutputType = {
    id: number
    coinId: number
    nameId: number
    name: number
    priceUsd: number
    percentChange24h: number
    percentChange1h: number
    percentChange7d: number
    priceBtc: number
    volume24: number
    volume24a: number
    symbol: number
    marketCapUsd: number
    rank: number
    _all: number
  }


  export type CoinsAvgAggregateInputType = {
    coinId?: true
    rank?: true
  }

  export type CoinsSumAggregateInputType = {
    coinId?: true
    rank?: true
  }

  export type CoinsMinAggregateInputType = {
    id?: true
    coinId?: true
    nameId?: true
    name?: true
    priceUsd?: true
    percentChange24h?: true
    percentChange1h?: true
    percentChange7d?: true
    priceBtc?: true
    volume24?: true
    volume24a?: true
    symbol?: true
    marketCapUsd?: true
    rank?: true
  }

  export type CoinsMaxAggregateInputType = {
    id?: true
    coinId?: true
    nameId?: true
    name?: true
    priceUsd?: true
    percentChange24h?: true
    percentChange1h?: true
    percentChange7d?: true
    priceBtc?: true
    volume24?: true
    volume24a?: true
    symbol?: true
    marketCapUsd?: true
    rank?: true
  }

  export type CoinsCountAggregateInputType = {
    id?: true
    coinId?: true
    nameId?: true
    name?: true
    priceUsd?: true
    percentChange24h?: true
    percentChange1h?: true
    percentChange7d?: true
    priceBtc?: true
    volume24?: true
    volume24a?: true
    symbol?: true
    marketCapUsd?: true
    rank?: true
    _all?: true
  }

  export type CoinsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coins to aggregate.
     */
    where?: CoinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coins to fetch.
     */
    orderBy?: CoinsOrderByWithRelationInput | CoinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coins
    **/
    _count?: true | CoinsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoinsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoinsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoinsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoinsMaxAggregateInputType
  }

  export type GetCoinsAggregateType<T extends CoinsAggregateArgs> = {
        [P in keyof T & keyof AggregateCoins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoins[P]>
      : GetScalarType<T[P], AggregateCoins[P]>
  }




  export type CoinsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoinsWhereInput
    orderBy?: CoinsOrderByWithAggregationInput | CoinsOrderByWithAggregationInput[]
    by: CoinsScalarFieldEnum[] | CoinsScalarFieldEnum
    having?: CoinsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoinsCountAggregateInputType | true
    _avg?: CoinsAvgAggregateInputType
    _sum?: CoinsSumAggregateInputType
    _min?: CoinsMinAggregateInputType
    _max?: CoinsMaxAggregateInputType
  }

  export type CoinsGroupByOutputType = {
    id: string
    coinId: bigint
    nameId: string
    name: string
    priceUsd: string
    percentChange24h: string
    percentChange1h: string
    percentChange7d: string
    priceBtc: string
    volume24: string
    volume24a: string
    symbol: string
    marketCapUsd: string
    rank: number
    _count: CoinsCountAggregateOutputType | null
    _avg: CoinsAvgAggregateOutputType | null
    _sum: CoinsSumAggregateOutputType | null
    _min: CoinsMinAggregateOutputType | null
    _max: CoinsMaxAggregateOutputType | null
  }

  type GetCoinsGroupByPayload<T extends CoinsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoinsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoinsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoinsGroupByOutputType[P]>
            : GetScalarType<T[P], CoinsGroupByOutputType[P]>
        }
      >
    >


  export type CoinsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coinId?: boolean
    nameId?: boolean
    name?: boolean
    priceUsd?: boolean
    percentChange24h?: boolean
    percentChange1h?: boolean
    percentChange7d?: boolean
    priceBtc?: boolean
    volume24?: boolean
    volume24a?: boolean
    symbol?: boolean
    marketCapUsd?: boolean
    rank?: boolean
  }, ExtArgs["result"]["coins"]>

  export type CoinsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coinId?: boolean
    nameId?: boolean
    name?: boolean
    priceUsd?: boolean
    percentChange24h?: boolean
    percentChange1h?: boolean
    percentChange7d?: boolean
    priceBtc?: boolean
    volume24?: boolean
    volume24a?: boolean
    symbol?: boolean
    marketCapUsd?: boolean
    rank?: boolean
  }, ExtArgs["result"]["coins"]>

  export type CoinsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coinId?: boolean
    nameId?: boolean
    name?: boolean
    priceUsd?: boolean
    percentChange24h?: boolean
    percentChange1h?: boolean
    percentChange7d?: boolean
    priceBtc?: boolean
    volume24?: boolean
    volume24a?: boolean
    symbol?: boolean
    marketCapUsd?: boolean
    rank?: boolean
  }, ExtArgs["result"]["coins"]>

  export type CoinsSelectScalar = {
    id?: boolean
    coinId?: boolean
    nameId?: boolean
    name?: boolean
    priceUsd?: boolean
    percentChange24h?: boolean
    percentChange1h?: boolean
    percentChange7d?: boolean
    priceBtc?: boolean
    volume24?: boolean
    volume24a?: boolean
    symbol?: boolean
    marketCapUsd?: boolean
    rank?: boolean
  }

  export type CoinsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coinId" | "nameId" | "name" | "priceUsd" | "percentChange24h" | "percentChange1h" | "percentChange7d" | "priceBtc" | "volume24" | "volume24a" | "symbol" | "marketCapUsd" | "rank", ExtArgs["result"]["coins"]>

  export type $CoinsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coins"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      coinId: bigint
      nameId: string
      name: string
      priceUsd: string
      percentChange24h: string
      percentChange1h: string
      percentChange7d: string
      priceBtc: string
      volume24: string
      volume24a: string
      symbol: string
      marketCapUsd: string
      rank: number
    }, ExtArgs["result"]["coins"]>
    composites: {}
  }

  type CoinsGetPayload<S extends boolean | null | undefined | CoinsDefaultArgs> = $Result.GetResult<Prisma.$CoinsPayload, S>

  type CoinsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoinsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoinsCountAggregateInputType | true
    }

  export interface CoinsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coins'], meta: { name: 'Coins' } }
    /**
     * Find zero or one Coins that matches the filter.
     * @param {CoinsFindUniqueArgs} args - Arguments to find a Coins
     * @example
     * // Get one Coins
     * const coins = await prisma.coins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoinsFindUniqueArgs>(args: SelectSubset<T, CoinsFindUniqueArgs<ExtArgs>>): Prisma__CoinsClient<$Result.GetResult<Prisma.$CoinsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoinsFindUniqueOrThrowArgs} args - Arguments to find a Coins
     * @example
     * // Get one Coins
     * const coins = await prisma.coins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoinsFindUniqueOrThrowArgs>(args: SelectSubset<T, CoinsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoinsClient<$Result.GetResult<Prisma.$CoinsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsFindFirstArgs} args - Arguments to find a Coins
     * @example
     * // Get one Coins
     * const coins = await prisma.coins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoinsFindFirstArgs>(args?: SelectSubset<T, CoinsFindFirstArgs<ExtArgs>>): Prisma__CoinsClient<$Result.GetResult<Prisma.$CoinsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsFindFirstOrThrowArgs} args - Arguments to find a Coins
     * @example
     * // Get one Coins
     * const coins = await prisma.coins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoinsFindFirstOrThrowArgs>(args?: SelectSubset<T, CoinsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoinsClient<$Result.GetResult<Prisma.$CoinsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coins
     * const coins = await prisma.coins.findMany()
     * 
     * // Get first 10 Coins
     * const coins = await prisma.coins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coinsWithIdOnly = await prisma.coins.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoinsFindManyArgs>(args?: SelectSubset<T, CoinsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coins.
     * @param {CoinsCreateArgs} args - Arguments to create a Coins.
     * @example
     * // Create one Coins
     * const Coins = await prisma.coins.create({
     *   data: {
     *     // ... data to create a Coins
     *   }
     * })
     * 
     */
    create<T extends CoinsCreateArgs>(args: SelectSubset<T, CoinsCreateArgs<ExtArgs>>): Prisma__CoinsClient<$Result.GetResult<Prisma.$CoinsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coins.
     * @param {CoinsCreateManyArgs} args - Arguments to create many Coins.
     * @example
     * // Create many Coins
     * const coins = await prisma.coins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoinsCreateManyArgs>(args?: SelectSubset<T, CoinsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coins and returns the data saved in the database.
     * @param {CoinsCreateManyAndReturnArgs} args - Arguments to create many Coins.
     * @example
     * // Create many Coins
     * const coins = await prisma.coins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coins and only return the `id`
     * const coinsWithIdOnly = await prisma.coins.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoinsCreateManyAndReturnArgs>(args?: SelectSubset<T, CoinsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coins.
     * @param {CoinsDeleteArgs} args - Arguments to delete one Coins.
     * @example
     * // Delete one Coins
     * const Coins = await prisma.coins.delete({
     *   where: {
     *     // ... filter to delete one Coins
     *   }
     * })
     * 
     */
    delete<T extends CoinsDeleteArgs>(args: SelectSubset<T, CoinsDeleteArgs<ExtArgs>>): Prisma__CoinsClient<$Result.GetResult<Prisma.$CoinsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coins.
     * @param {CoinsUpdateArgs} args - Arguments to update one Coins.
     * @example
     * // Update one Coins
     * const coins = await prisma.coins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoinsUpdateArgs>(args: SelectSubset<T, CoinsUpdateArgs<ExtArgs>>): Prisma__CoinsClient<$Result.GetResult<Prisma.$CoinsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coins.
     * @param {CoinsDeleteManyArgs} args - Arguments to filter Coins to delete.
     * @example
     * // Delete a few Coins
     * const { count } = await prisma.coins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoinsDeleteManyArgs>(args?: SelectSubset<T, CoinsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coins
     * const coins = await prisma.coins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoinsUpdateManyArgs>(args: SelectSubset<T, CoinsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coins and returns the data updated in the database.
     * @param {CoinsUpdateManyAndReturnArgs} args - Arguments to update many Coins.
     * @example
     * // Update many Coins
     * const coins = await prisma.coins.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Coins and only return the `id`
     * const coinsWithIdOnly = await prisma.coins.updateManyAndReturn({
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
    updateManyAndReturn<T extends CoinsUpdateManyAndReturnArgs>(args: SelectSubset<T, CoinsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coins.
     * @param {CoinsUpsertArgs} args - Arguments to update or create a Coins.
     * @example
     * // Update or create a Coins
     * const coins = await prisma.coins.upsert({
     *   create: {
     *     // ... data to create a Coins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coins we want to update
     *   }
     * })
     */
    upsert<T extends CoinsUpsertArgs>(args: SelectSubset<T, CoinsUpsertArgs<ExtArgs>>): Prisma__CoinsClient<$Result.GetResult<Prisma.$CoinsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsCountArgs} args - Arguments to filter Coins to count.
     * @example
     * // Count the number of Coins
     * const count = await prisma.coins.count({
     *   where: {
     *     // ... the filter for the Coins we want to count
     *   }
     * })
    **/
    count<T extends CoinsCountArgs>(
      args?: Subset<T, CoinsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoinsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoinsAggregateArgs>(args: Subset<T, CoinsAggregateArgs>): Prisma.PrismaPromise<GetCoinsAggregateType<T>>

    /**
     * Group by Coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsGroupByArgs} args - Group by arguments.
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
      T extends CoinsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoinsGroupByArgs['orderBy'] }
        : { orderBy?: CoinsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoinsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoinsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coins model
   */
  readonly fields: CoinsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoinsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Coins model
   */
  interface CoinsFieldRefs {
    readonly id: FieldRef<"Coins", 'String'>
    readonly coinId: FieldRef<"Coins", 'BigInt'>
    readonly nameId: FieldRef<"Coins", 'String'>
    readonly name: FieldRef<"Coins", 'String'>
    readonly priceUsd: FieldRef<"Coins", 'String'>
    readonly percentChange24h: FieldRef<"Coins", 'String'>
    readonly percentChange1h: FieldRef<"Coins", 'String'>
    readonly percentChange7d: FieldRef<"Coins", 'String'>
    readonly priceBtc: FieldRef<"Coins", 'String'>
    readonly volume24: FieldRef<"Coins", 'String'>
    readonly volume24a: FieldRef<"Coins", 'String'>
    readonly symbol: FieldRef<"Coins", 'String'>
    readonly marketCapUsd: FieldRef<"Coins", 'String'>
    readonly rank: FieldRef<"Coins", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Coins findUnique
   */
  export type CoinsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coins
     */
    select?: CoinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coins
     */
    omit?: CoinsOmit<ExtArgs> | null
    /**
     * Filter, which Coins to fetch.
     */
    where: CoinsWhereUniqueInput
  }

  /**
   * Coins findUniqueOrThrow
   */
  export type CoinsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coins
     */
    select?: CoinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coins
     */
    omit?: CoinsOmit<ExtArgs> | null
    /**
     * Filter, which Coins to fetch.
     */
    where: CoinsWhereUniqueInput
  }

  /**
   * Coins findFirst
   */
  export type CoinsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coins
     */
    select?: CoinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coins
     */
    omit?: CoinsOmit<ExtArgs> | null
    /**
     * Filter, which Coins to fetch.
     */
    where?: CoinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coins to fetch.
     */
    orderBy?: CoinsOrderByWithRelationInput | CoinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coins.
     */
    cursor?: CoinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coins.
     */
    distinct?: CoinsScalarFieldEnum | CoinsScalarFieldEnum[]
  }

  /**
   * Coins findFirstOrThrow
   */
  export type CoinsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coins
     */
    select?: CoinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coins
     */
    omit?: CoinsOmit<ExtArgs> | null
    /**
     * Filter, which Coins to fetch.
     */
    where?: CoinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coins to fetch.
     */
    orderBy?: CoinsOrderByWithRelationInput | CoinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coins.
     */
    cursor?: CoinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coins.
     */
    distinct?: CoinsScalarFieldEnum | CoinsScalarFieldEnum[]
  }

  /**
   * Coins findMany
   */
  export type CoinsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coins
     */
    select?: CoinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coins
     */
    omit?: CoinsOmit<ExtArgs> | null
    /**
     * Filter, which Coins to fetch.
     */
    where?: CoinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coins to fetch.
     */
    orderBy?: CoinsOrderByWithRelationInput | CoinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coins.
     */
    cursor?: CoinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coins.
     */
    skip?: number
    distinct?: CoinsScalarFieldEnum | CoinsScalarFieldEnum[]
  }

  /**
   * Coins create
   */
  export type CoinsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coins
     */
    select?: CoinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coins
     */
    omit?: CoinsOmit<ExtArgs> | null
    /**
     * The data needed to create a Coins.
     */
    data: XOR<CoinsCreateInput, CoinsUncheckedCreateInput>
  }

  /**
   * Coins createMany
   */
  export type CoinsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coins.
     */
    data: CoinsCreateManyInput | CoinsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coins createManyAndReturn
   */
  export type CoinsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coins
     */
    select?: CoinsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coins
     */
    omit?: CoinsOmit<ExtArgs> | null
    /**
     * The data used to create many Coins.
     */
    data: CoinsCreateManyInput | CoinsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coins update
   */
  export type CoinsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coins
     */
    select?: CoinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coins
     */
    omit?: CoinsOmit<ExtArgs> | null
    /**
     * The data needed to update a Coins.
     */
    data: XOR<CoinsUpdateInput, CoinsUncheckedUpdateInput>
    /**
     * Choose, which Coins to update.
     */
    where: CoinsWhereUniqueInput
  }

  /**
   * Coins updateMany
   */
  export type CoinsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coins.
     */
    data: XOR<CoinsUpdateManyMutationInput, CoinsUncheckedUpdateManyInput>
    /**
     * Filter which Coins to update
     */
    where?: CoinsWhereInput
    /**
     * Limit how many Coins to update.
     */
    limit?: number
  }

  /**
   * Coins updateManyAndReturn
   */
  export type CoinsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coins
     */
    select?: CoinsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coins
     */
    omit?: CoinsOmit<ExtArgs> | null
    /**
     * The data used to update Coins.
     */
    data: XOR<CoinsUpdateManyMutationInput, CoinsUncheckedUpdateManyInput>
    /**
     * Filter which Coins to update
     */
    where?: CoinsWhereInput
    /**
     * Limit how many Coins to update.
     */
    limit?: number
  }

  /**
   * Coins upsert
   */
  export type CoinsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coins
     */
    select?: CoinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coins
     */
    omit?: CoinsOmit<ExtArgs> | null
    /**
     * The filter to search for the Coins to update in case it exists.
     */
    where: CoinsWhereUniqueInput
    /**
     * In case the Coins found by the `where` argument doesn't exist, create a new Coins with this data.
     */
    create: XOR<CoinsCreateInput, CoinsUncheckedCreateInput>
    /**
     * In case the Coins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoinsUpdateInput, CoinsUncheckedUpdateInput>
  }

  /**
   * Coins delete
   */
  export type CoinsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coins
     */
    select?: CoinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coins
     */
    omit?: CoinsOmit<ExtArgs> | null
    /**
     * Filter which Coins to delete.
     */
    where: CoinsWhereUniqueInput
  }

  /**
   * Coins deleteMany
   */
  export type CoinsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coins to delete
     */
    where?: CoinsWhereInput
    /**
     * Limit how many Coins to delete.
     */
    limit?: number
  }

  /**
   * Coins without action
   */
  export type CoinsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coins
     */
    select?: CoinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coins
     */
    omit?: CoinsOmit<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    provider: 'provider',
    providerId: 'providerId',
    referralCode: 'referralCode',
    countryId: 'countryId',
    phone: 'phone',
    dateOfBirth: 'dateOfBirth',
    acceptedTerms: 'acceptedTerms',
    mfaEnabled: 'mfaEnabled',
    mfaSecret: 'mfaSecret',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const UserRoleMappingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserRoleMappingScalarFieldEnum = (typeof UserRoleMappingScalarFieldEnum)[keyof typeof UserRoleMappingScalarFieldEnum]


  export const CoinsScalarFieldEnum: {
    id: 'id',
    coinId: 'coinId',
    nameId: 'nameId',
    name: 'name',
    priceUsd: 'priceUsd',
    percentChange24h: 'percentChange24h',
    percentChange1h: 'percentChange1h',
    percentChange7d: 'percentChange7d',
    priceBtc: 'priceBtc',
    volume24: 'volume24',
    volume24a: 'volume24a',
    symbol: 'symbol',
    marketCapUsd: 'marketCapUsd',
    rank: 'rank'
  };

  export type CoinsScalarFieldEnum = (typeof CoinsScalarFieldEnum)[keyof typeof CoinsScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    firstName?: StringNullableFilter<"Users"> | string | null
    lastName?: StringNullableFilter<"Users"> | string | null
    provider?: StringNullableFilter<"Users"> | string | null
    providerId?: StringNullableFilter<"Users"> | string | null
    referralCode?: StringNullableFilter<"Users"> | string | null
    countryId?: IntNullableFilter<"Users"> | number | null
    phone?: StringNullableFilter<"Users"> | string | null
    dateOfBirth?: StringNullableFilter<"Users"> | string | null
    acceptedTerms?: BoolFilter<"Users"> | boolean
    mfaEnabled?: BoolFilter<"Users"> | boolean
    mfaSecret?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    roles?: UserRoleMappingListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    referralCode?: SortOrderInput | SortOrder
    countryId?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    acceptedTerms?: SortOrder
    mfaEnabled?: SortOrder
    mfaSecret?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    roles?: UserRoleMappingOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    firstName?: StringNullableFilter<"Users"> | string | null
    lastName?: StringNullableFilter<"Users"> | string | null
    provider?: StringNullableFilter<"Users"> | string | null
    providerId?: StringNullableFilter<"Users"> | string | null
    referralCode?: StringNullableFilter<"Users"> | string | null
    countryId?: IntNullableFilter<"Users"> | number | null
    phone?: StringNullableFilter<"Users"> | string | null
    dateOfBirth?: StringNullableFilter<"Users"> | string | null
    acceptedTerms?: BoolFilter<"Users"> | boolean
    mfaEnabled?: BoolFilter<"Users"> | boolean
    mfaSecret?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    roles?: UserRoleMappingListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    referralCode?: SortOrderInput | SortOrder
    countryId?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    acceptedTerms?: SortOrder
    mfaEnabled?: SortOrder
    mfaSecret?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    firstName?: StringNullableWithAggregatesFilter<"Users"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Users"> | string | null
    provider?: StringNullableWithAggregatesFilter<"Users"> | string | null
    providerId?: StringNullableWithAggregatesFilter<"Users"> | string | null
    referralCode?: StringNullableWithAggregatesFilter<"Users"> | string | null
    countryId?: IntNullableWithAggregatesFilter<"Users"> | number | null
    phone?: StringNullableWithAggregatesFilter<"Users"> | string | null
    dateOfBirth?: StringNullableWithAggregatesFilter<"Users"> | string | null
    acceptedTerms?: BoolWithAggregatesFilter<"Users"> | boolean
    mfaEnabled?: BoolWithAggregatesFilter<"Users"> | boolean
    mfaSecret?: StringNullableWithAggregatesFilter<"Users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
  }

  export type RolesWhereInput = {
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    id?: StringFilter<"Roles"> | string
    role?: EnumRoleFilter<"Roles"> | $Enums.Role
    createdAt?: DateTimeFilter<"Roles"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Roles"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Roles"> | Date | string | null
    users?: UserRoleMappingListRelationFilter
  }

  export type RolesOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    users?: UserRoleMappingOrderByRelationAggregateInput
  }

  export type RolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    role?: EnumRoleFilter<"Roles"> | $Enums.Role
    createdAt?: DateTimeFilter<"Roles"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Roles"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Roles"> | Date | string | null
    users?: UserRoleMappingListRelationFilter
  }, "id">

  export type RolesOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: RolesCountOrderByAggregateInput
    _max?: RolesMaxOrderByAggregateInput
    _min?: RolesMinOrderByAggregateInput
  }

  export type RolesScalarWhereWithAggregatesInput = {
    AND?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    OR?: RolesScalarWhereWithAggregatesInput[]
    NOT?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Roles"> | string
    role?: EnumRoleWithAggregatesFilter<"Roles"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Roles"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Roles"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Roles"> | Date | string | null
  }

  export type UserRoleMappingWhereInput = {
    AND?: UserRoleMappingWhereInput | UserRoleMappingWhereInput[]
    OR?: UserRoleMappingWhereInput[]
    NOT?: UserRoleMappingWhereInput | UserRoleMappingWhereInput[]
    id?: StringFilter<"UserRoleMapping"> | string
    userId?: StringFilter<"UserRoleMapping"> | string
    roleId?: StringFilter<"UserRoleMapping"> | string
    createdAt?: DateTimeFilter<"UserRoleMapping"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserRoleMapping"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserRoleMapping"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    roles?: XOR<RolesScalarRelationFilter, RolesWhereInput>
  }

  export type UserRoleMappingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    users?: UsersOrderByWithRelationInput
    roles?: RolesOrderByWithRelationInput
  }

  export type UserRoleMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserRoleMappingWhereInput | UserRoleMappingWhereInput[]
    OR?: UserRoleMappingWhereInput[]
    NOT?: UserRoleMappingWhereInput | UserRoleMappingWhereInput[]
    userId?: StringFilter<"UserRoleMapping"> | string
    roleId?: StringFilter<"UserRoleMapping"> | string
    createdAt?: DateTimeFilter<"UserRoleMapping"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserRoleMapping"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserRoleMapping"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    roles?: XOR<RolesScalarRelationFilter, RolesWhereInput>
  }, "id">

  export type UserRoleMappingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserRoleMappingCountOrderByAggregateInput
    _max?: UserRoleMappingMaxOrderByAggregateInput
    _min?: UserRoleMappingMinOrderByAggregateInput
  }

  export type UserRoleMappingScalarWhereWithAggregatesInput = {
    AND?: UserRoleMappingScalarWhereWithAggregatesInput | UserRoleMappingScalarWhereWithAggregatesInput[]
    OR?: UserRoleMappingScalarWhereWithAggregatesInput[]
    NOT?: UserRoleMappingScalarWhereWithAggregatesInput | UserRoleMappingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRoleMapping"> | string
    userId?: StringWithAggregatesFilter<"UserRoleMapping"> | string
    roleId?: StringWithAggregatesFilter<"UserRoleMapping"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserRoleMapping"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"UserRoleMapping"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserRoleMapping"> | Date | string | null
  }

  export type CoinsWhereInput = {
    AND?: CoinsWhereInput | CoinsWhereInput[]
    OR?: CoinsWhereInput[]
    NOT?: CoinsWhereInput | CoinsWhereInput[]
    id?: StringFilter<"Coins"> | string
    coinId?: BigIntFilter<"Coins"> | bigint | number
    nameId?: StringFilter<"Coins"> | string
    name?: StringFilter<"Coins"> | string
    priceUsd?: StringFilter<"Coins"> | string
    percentChange24h?: StringFilter<"Coins"> | string
    percentChange1h?: StringFilter<"Coins"> | string
    percentChange7d?: StringFilter<"Coins"> | string
    priceBtc?: StringFilter<"Coins"> | string
    volume24?: StringFilter<"Coins"> | string
    volume24a?: StringFilter<"Coins"> | string
    symbol?: StringFilter<"Coins"> | string
    marketCapUsd?: StringFilter<"Coins"> | string
    rank?: IntFilter<"Coins"> | number
  }

  export type CoinsOrderByWithRelationInput = {
    id?: SortOrder
    coinId?: SortOrder
    nameId?: SortOrder
    name?: SortOrder
    priceUsd?: SortOrder
    percentChange24h?: SortOrder
    percentChange1h?: SortOrder
    percentChange7d?: SortOrder
    priceBtc?: SortOrder
    volume24?: SortOrder
    volume24a?: SortOrder
    symbol?: SortOrder
    marketCapUsd?: SortOrder
    rank?: SortOrder
  }

  export type CoinsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CoinsWhereInput | CoinsWhereInput[]
    OR?: CoinsWhereInput[]
    NOT?: CoinsWhereInput | CoinsWhereInput[]
    coinId?: BigIntFilter<"Coins"> | bigint | number
    nameId?: StringFilter<"Coins"> | string
    name?: StringFilter<"Coins"> | string
    priceUsd?: StringFilter<"Coins"> | string
    percentChange24h?: StringFilter<"Coins"> | string
    percentChange1h?: StringFilter<"Coins"> | string
    percentChange7d?: StringFilter<"Coins"> | string
    priceBtc?: StringFilter<"Coins"> | string
    volume24?: StringFilter<"Coins"> | string
    volume24a?: StringFilter<"Coins"> | string
    symbol?: StringFilter<"Coins"> | string
    marketCapUsd?: StringFilter<"Coins"> | string
    rank?: IntFilter<"Coins"> | number
  }, "id">

  export type CoinsOrderByWithAggregationInput = {
    id?: SortOrder
    coinId?: SortOrder
    nameId?: SortOrder
    name?: SortOrder
    priceUsd?: SortOrder
    percentChange24h?: SortOrder
    percentChange1h?: SortOrder
    percentChange7d?: SortOrder
    priceBtc?: SortOrder
    volume24?: SortOrder
    volume24a?: SortOrder
    symbol?: SortOrder
    marketCapUsd?: SortOrder
    rank?: SortOrder
    _count?: CoinsCountOrderByAggregateInput
    _avg?: CoinsAvgOrderByAggregateInput
    _max?: CoinsMaxOrderByAggregateInput
    _min?: CoinsMinOrderByAggregateInput
    _sum?: CoinsSumOrderByAggregateInput
  }

  export type CoinsScalarWhereWithAggregatesInput = {
    AND?: CoinsScalarWhereWithAggregatesInput | CoinsScalarWhereWithAggregatesInput[]
    OR?: CoinsScalarWhereWithAggregatesInput[]
    NOT?: CoinsScalarWhereWithAggregatesInput | CoinsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coins"> | string
    coinId?: BigIntWithAggregatesFilter<"Coins"> | bigint | number
    nameId?: StringWithAggregatesFilter<"Coins"> | string
    name?: StringWithAggregatesFilter<"Coins"> | string
    priceUsd?: StringWithAggregatesFilter<"Coins"> | string
    percentChange24h?: StringWithAggregatesFilter<"Coins"> | string
    percentChange1h?: StringWithAggregatesFilter<"Coins"> | string
    percentChange7d?: StringWithAggregatesFilter<"Coins"> | string
    priceBtc?: StringWithAggregatesFilter<"Coins"> | string
    volume24?: StringWithAggregatesFilter<"Coins"> | string
    volume24a?: StringWithAggregatesFilter<"Coins"> | string
    symbol?: StringWithAggregatesFilter<"Coins"> | string
    marketCapUsd?: StringWithAggregatesFilter<"Coins"> | string
    rank?: IntWithAggregatesFilter<"Coins"> | number
  }

  export type UsersCreateInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    provider?: string | null
    providerId?: string | null
    referralCode?: string | null
    countryId?: number | null
    phone?: string | null
    dateOfBirth?: string | null
    acceptedTerms?: boolean
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    roles?: UserRoleMappingCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    provider?: string | null
    providerId?: string | null
    referralCode?: string | null
    countryId?: number | null
    phone?: string | null
    dateOfBirth?: string | null
    acceptedTerms?: boolean
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    roles?: UserRoleMappingUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleMappingUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: UserRoleMappingUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    provider?: string | null
    providerId?: string | null
    referralCode?: string | null
    countryId?: number | null
    phone?: string | null
    dateOfBirth?: string | null
    acceptedTerms?: boolean
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RolesCreateInput = {
    id?: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    users?: UserRoleMappingCreateNestedManyWithoutRolesInput
  }

  export type RolesUncheckedCreateInput = {
    id?: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    users?: UserRoleMappingUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RolesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserRoleMappingUpdateManyWithoutRolesNestedInput
  }

  export type RolesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserRoleMappingUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RolesCreateManyInput = {
    id?: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type RolesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RolesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRoleMappingCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    users: UsersCreateNestedOneWithoutRolesInput
    roles: RolesCreateNestedOneWithoutUsersInput
  }

  export type UserRoleMappingUncheckedCreateInput = {
    id?: string
    userId: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserRoleMappingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UsersUpdateOneRequiredWithoutRolesNestedInput
    roles?: RolesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleMappingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRoleMappingCreateManyInput = {
    id?: string
    userId: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserRoleMappingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRoleMappingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CoinsCreateInput = {
    id?: string
    coinId: bigint | number
    nameId: string
    name: string
    priceUsd: string
    percentChange24h: string
    percentChange1h: string
    percentChange7d: string
    priceBtc: string
    volume24: string
    volume24a: string
    symbol: string
    marketCapUsd: string
    rank: number
  }

  export type CoinsUncheckedCreateInput = {
    id?: string
    coinId: bigint | number
    nameId: string
    name: string
    priceUsd: string
    percentChange24h: string
    percentChange1h: string
    percentChange7d: string
    priceBtc: string
    volume24: string
    volume24a: string
    symbol: string
    marketCapUsd: string
    rank: number
  }

  export type CoinsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinId?: BigIntFieldUpdateOperationsInput | bigint | number
    nameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceUsd?: StringFieldUpdateOperationsInput | string
    percentChange24h?: StringFieldUpdateOperationsInput | string
    percentChange1h?: StringFieldUpdateOperationsInput | string
    percentChange7d?: StringFieldUpdateOperationsInput | string
    priceBtc?: StringFieldUpdateOperationsInput | string
    volume24?: StringFieldUpdateOperationsInput | string
    volume24a?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    marketCapUsd?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type CoinsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinId?: BigIntFieldUpdateOperationsInput | bigint | number
    nameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceUsd?: StringFieldUpdateOperationsInput | string
    percentChange24h?: StringFieldUpdateOperationsInput | string
    percentChange1h?: StringFieldUpdateOperationsInput | string
    percentChange7d?: StringFieldUpdateOperationsInput | string
    priceBtc?: StringFieldUpdateOperationsInput | string
    volume24?: StringFieldUpdateOperationsInput | string
    volume24a?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    marketCapUsd?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type CoinsCreateManyInput = {
    id?: string
    coinId: bigint | number
    nameId: string
    name: string
    priceUsd: string
    percentChange24h: string
    percentChange1h: string
    percentChange7d: string
    priceBtc: string
    volume24: string
    volume24a: string
    symbol: string
    marketCapUsd: string
    rank: number
  }

  export type CoinsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinId?: BigIntFieldUpdateOperationsInput | bigint | number
    nameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceUsd?: StringFieldUpdateOperationsInput | string
    percentChange24h?: StringFieldUpdateOperationsInput | string
    percentChange1h?: StringFieldUpdateOperationsInput | string
    percentChange7d?: StringFieldUpdateOperationsInput | string
    priceBtc?: StringFieldUpdateOperationsInput | string
    volume24?: StringFieldUpdateOperationsInput | string
    volume24a?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    marketCapUsd?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type CoinsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinId?: BigIntFieldUpdateOperationsInput | bigint | number
    nameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceUsd?: StringFieldUpdateOperationsInput | string
    percentChange24h?: StringFieldUpdateOperationsInput | string
    percentChange1h?: StringFieldUpdateOperationsInput | string
    percentChange7d?: StringFieldUpdateOperationsInput | string
    priceBtc?: StringFieldUpdateOperationsInput | string
    volume24?: StringFieldUpdateOperationsInput | string
    volume24a?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    marketCapUsd?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserRoleMappingListRelationFilter = {
    every?: UserRoleMappingWhereInput
    some?: UserRoleMappingWhereInput
    none?: UserRoleMappingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserRoleMappingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    referralCode?: SortOrder
    countryId?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    acceptedTerms?: SortOrder
    mfaEnabled?: SortOrder
    mfaSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    countryId?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    referralCode?: SortOrder
    countryId?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    acceptedTerms?: SortOrder
    mfaEnabled?: SortOrder
    mfaSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    referralCode?: SortOrder
    countryId?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    acceptedTerms?: SortOrder
    mfaEnabled?: SortOrder
    mfaSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    countryId?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type RolesCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RolesMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RolesMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
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

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type RolesScalarRelationFilter = {
    is?: RolesWhereInput
    isNot?: RolesWhereInput
  }

  export type UserRoleMappingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserRoleMappingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserRoleMappingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type CoinsCountOrderByAggregateInput = {
    id?: SortOrder
    coinId?: SortOrder
    nameId?: SortOrder
    name?: SortOrder
    priceUsd?: SortOrder
    percentChange24h?: SortOrder
    percentChange1h?: SortOrder
    percentChange7d?: SortOrder
    priceBtc?: SortOrder
    volume24?: SortOrder
    volume24a?: SortOrder
    symbol?: SortOrder
    marketCapUsd?: SortOrder
    rank?: SortOrder
  }

  export type CoinsAvgOrderByAggregateInput = {
    coinId?: SortOrder
    rank?: SortOrder
  }

  export type CoinsMaxOrderByAggregateInput = {
    id?: SortOrder
    coinId?: SortOrder
    nameId?: SortOrder
    name?: SortOrder
    priceUsd?: SortOrder
    percentChange24h?: SortOrder
    percentChange1h?: SortOrder
    percentChange7d?: SortOrder
    priceBtc?: SortOrder
    volume24?: SortOrder
    volume24a?: SortOrder
    symbol?: SortOrder
    marketCapUsd?: SortOrder
    rank?: SortOrder
  }

  export type CoinsMinOrderByAggregateInput = {
    id?: SortOrder
    coinId?: SortOrder
    nameId?: SortOrder
    name?: SortOrder
    priceUsd?: SortOrder
    percentChange24h?: SortOrder
    percentChange1h?: SortOrder
    percentChange7d?: SortOrder
    priceBtc?: SortOrder
    volume24?: SortOrder
    volume24a?: SortOrder
    symbol?: SortOrder
    marketCapUsd?: SortOrder
    rank?: SortOrder
  }

  export type CoinsSumOrderByAggregateInput = {
    coinId?: SortOrder
    rank?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type UserRoleMappingCreateNestedManyWithoutUsersInput = {
    create?: XOR<UserRoleMappingCreateWithoutUsersInput, UserRoleMappingUncheckedCreateWithoutUsersInput> | UserRoleMappingCreateWithoutUsersInput[] | UserRoleMappingUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserRoleMappingCreateOrConnectWithoutUsersInput | UserRoleMappingCreateOrConnectWithoutUsersInput[]
    createMany?: UserRoleMappingCreateManyUsersInputEnvelope
    connect?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
  }

  export type UserRoleMappingUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<UserRoleMappingCreateWithoutUsersInput, UserRoleMappingUncheckedCreateWithoutUsersInput> | UserRoleMappingCreateWithoutUsersInput[] | UserRoleMappingUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserRoleMappingCreateOrConnectWithoutUsersInput | UserRoleMappingCreateOrConnectWithoutUsersInput[]
    createMany?: UserRoleMappingCreateManyUsersInputEnvelope
    connect?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserRoleMappingUpdateManyWithoutUsersNestedInput = {
    create?: XOR<UserRoleMappingCreateWithoutUsersInput, UserRoleMappingUncheckedCreateWithoutUsersInput> | UserRoleMappingCreateWithoutUsersInput[] | UserRoleMappingUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserRoleMappingCreateOrConnectWithoutUsersInput | UserRoleMappingCreateOrConnectWithoutUsersInput[]
    upsert?: UserRoleMappingUpsertWithWhereUniqueWithoutUsersInput | UserRoleMappingUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: UserRoleMappingCreateManyUsersInputEnvelope
    set?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
    disconnect?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
    delete?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
    connect?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
    update?: UserRoleMappingUpdateWithWhereUniqueWithoutUsersInput | UserRoleMappingUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: UserRoleMappingUpdateManyWithWhereWithoutUsersInput | UserRoleMappingUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: UserRoleMappingScalarWhereInput | UserRoleMappingScalarWhereInput[]
  }

  export type UserRoleMappingUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<UserRoleMappingCreateWithoutUsersInput, UserRoleMappingUncheckedCreateWithoutUsersInput> | UserRoleMappingCreateWithoutUsersInput[] | UserRoleMappingUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserRoleMappingCreateOrConnectWithoutUsersInput | UserRoleMappingCreateOrConnectWithoutUsersInput[]
    upsert?: UserRoleMappingUpsertWithWhereUniqueWithoutUsersInput | UserRoleMappingUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: UserRoleMappingCreateManyUsersInputEnvelope
    set?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
    disconnect?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
    delete?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
    connect?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
    update?: UserRoleMappingUpdateWithWhereUniqueWithoutUsersInput | UserRoleMappingUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: UserRoleMappingUpdateManyWithWhereWithoutUsersInput | UserRoleMappingUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: UserRoleMappingScalarWhereInput | UserRoleMappingScalarWhereInput[]
  }

  export type UserRoleMappingCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserRoleMappingCreateWithoutRolesInput, UserRoleMappingUncheckedCreateWithoutRolesInput> | UserRoleMappingCreateWithoutRolesInput[] | UserRoleMappingUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserRoleMappingCreateOrConnectWithoutRolesInput | UserRoleMappingCreateOrConnectWithoutRolesInput[]
    createMany?: UserRoleMappingCreateManyRolesInputEnvelope
    connect?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
  }

  export type UserRoleMappingUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserRoleMappingCreateWithoutRolesInput, UserRoleMappingUncheckedCreateWithoutRolesInput> | UserRoleMappingCreateWithoutRolesInput[] | UserRoleMappingUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserRoleMappingCreateOrConnectWithoutRolesInput | UserRoleMappingCreateOrConnectWithoutRolesInput[]
    createMany?: UserRoleMappingCreateManyRolesInputEnvelope
    connect?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserRoleMappingUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserRoleMappingCreateWithoutRolesInput, UserRoleMappingUncheckedCreateWithoutRolesInput> | UserRoleMappingCreateWithoutRolesInput[] | UserRoleMappingUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserRoleMappingCreateOrConnectWithoutRolesInput | UserRoleMappingCreateOrConnectWithoutRolesInput[]
    upsert?: UserRoleMappingUpsertWithWhereUniqueWithoutRolesInput | UserRoleMappingUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: UserRoleMappingCreateManyRolesInputEnvelope
    set?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
    disconnect?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
    delete?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
    connect?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
    update?: UserRoleMappingUpdateWithWhereUniqueWithoutRolesInput | UserRoleMappingUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserRoleMappingUpdateManyWithWhereWithoutRolesInput | UserRoleMappingUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserRoleMappingScalarWhereInput | UserRoleMappingScalarWhereInput[]
  }

  export type UserRoleMappingUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserRoleMappingCreateWithoutRolesInput, UserRoleMappingUncheckedCreateWithoutRolesInput> | UserRoleMappingCreateWithoutRolesInput[] | UserRoleMappingUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserRoleMappingCreateOrConnectWithoutRolesInput | UserRoleMappingCreateOrConnectWithoutRolesInput[]
    upsert?: UserRoleMappingUpsertWithWhereUniqueWithoutRolesInput | UserRoleMappingUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: UserRoleMappingCreateManyRolesInputEnvelope
    set?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
    disconnect?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
    delete?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
    connect?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
    update?: UserRoleMappingUpdateWithWhereUniqueWithoutRolesInput | UserRoleMappingUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserRoleMappingUpdateManyWithWhereWithoutRolesInput | UserRoleMappingUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserRoleMappingScalarWhereInput | UserRoleMappingScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutRolesInput = {
    create?: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRolesInput
    connect?: UsersWhereUniqueInput
  }

  export type RolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput
    connect?: RolesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRolesInput
    upsert?: UsersUpsertWithoutRolesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutRolesInput, UsersUpdateWithoutRolesInput>, UsersUncheckedUpdateWithoutRolesInput>
  }

  export type RolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput
    upsert?: RolesUpsertWithoutUsersInput
    connect?: RolesWhereUniqueInput
    update?: XOR<XOR<RolesUpdateToOneWithWhereWithoutUsersInput, RolesUpdateWithoutUsersInput>, RolesUncheckedUpdateWithoutUsersInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type UserRoleMappingCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    roles: RolesCreateNestedOneWithoutUsersInput
  }

  export type UserRoleMappingUncheckedCreateWithoutUsersInput = {
    id?: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserRoleMappingCreateOrConnectWithoutUsersInput = {
    where: UserRoleMappingWhereUniqueInput
    create: XOR<UserRoleMappingCreateWithoutUsersInput, UserRoleMappingUncheckedCreateWithoutUsersInput>
  }

  export type UserRoleMappingCreateManyUsersInputEnvelope = {
    data: UserRoleMappingCreateManyUsersInput | UserRoleMappingCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleMappingUpsertWithWhereUniqueWithoutUsersInput = {
    where: UserRoleMappingWhereUniqueInput
    update: XOR<UserRoleMappingUpdateWithoutUsersInput, UserRoleMappingUncheckedUpdateWithoutUsersInput>
    create: XOR<UserRoleMappingCreateWithoutUsersInput, UserRoleMappingUncheckedCreateWithoutUsersInput>
  }

  export type UserRoleMappingUpdateWithWhereUniqueWithoutUsersInput = {
    where: UserRoleMappingWhereUniqueInput
    data: XOR<UserRoleMappingUpdateWithoutUsersInput, UserRoleMappingUncheckedUpdateWithoutUsersInput>
  }

  export type UserRoleMappingUpdateManyWithWhereWithoutUsersInput = {
    where: UserRoleMappingScalarWhereInput
    data: XOR<UserRoleMappingUpdateManyMutationInput, UserRoleMappingUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserRoleMappingScalarWhereInput = {
    AND?: UserRoleMappingScalarWhereInput | UserRoleMappingScalarWhereInput[]
    OR?: UserRoleMappingScalarWhereInput[]
    NOT?: UserRoleMappingScalarWhereInput | UserRoleMappingScalarWhereInput[]
    id?: StringFilter<"UserRoleMapping"> | string
    userId?: StringFilter<"UserRoleMapping"> | string
    roleId?: StringFilter<"UserRoleMapping"> | string
    createdAt?: DateTimeFilter<"UserRoleMapping"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserRoleMapping"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserRoleMapping"> | Date | string | null
  }

  export type UserRoleMappingCreateWithoutRolesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    users: UsersCreateNestedOneWithoutRolesInput
  }

  export type UserRoleMappingUncheckedCreateWithoutRolesInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserRoleMappingCreateOrConnectWithoutRolesInput = {
    where: UserRoleMappingWhereUniqueInput
    create: XOR<UserRoleMappingCreateWithoutRolesInput, UserRoleMappingUncheckedCreateWithoutRolesInput>
  }

  export type UserRoleMappingCreateManyRolesInputEnvelope = {
    data: UserRoleMappingCreateManyRolesInput | UserRoleMappingCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleMappingUpsertWithWhereUniqueWithoutRolesInput = {
    where: UserRoleMappingWhereUniqueInput
    update: XOR<UserRoleMappingUpdateWithoutRolesInput, UserRoleMappingUncheckedUpdateWithoutRolesInput>
    create: XOR<UserRoleMappingCreateWithoutRolesInput, UserRoleMappingUncheckedCreateWithoutRolesInput>
  }

  export type UserRoleMappingUpdateWithWhereUniqueWithoutRolesInput = {
    where: UserRoleMappingWhereUniqueInput
    data: XOR<UserRoleMappingUpdateWithoutRolesInput, UserRoleMappingUncheckedUpdateWithoutRolesInput>
  }

  export type UserRoleMappingUpdateManyWithWhereWithoutRolesInput = {
    where: UserRoleMappingScalarWhereInput
    data: XOR<UserRoleMappingUpdateManyMutationInput, UserRoleMappingUncheckedUpdateManyWithoutRolesInput>
  }

  export type UsersCreateWithoutRolesInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    provider?: string | null
    providerId?: string | null
    referralCode?: string | null
    countryId?: number | null
    phone?: string | null
    dateOfBirth?: string | null
    acceptedTerms?: boolean
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UsersUncheckedCreateWithoutRolesInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    provider?: string | null
    providerId?: string | null
    referralCode?: string | null
    countryId?: number | null
    phone?: string | null
    dateOfBirth?: string | null
    acceptedTerms?: boolean
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UsersCreateOrConnectWithoutRolesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput>
  }

  export type RolesCreateWithoutUsersInput = {
    id?: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type RolesUncheckedCreateWithoutUsersInput = {
    id?: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type RolesCreateOrConnectWithoutUsersInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
  }

  export type UsersUpsertWithoutRolesInput = {
    update: XOR<UsersUpdateWithoutRolesInput, UsersUncheckedUpdateWithoutRolesInput>
    create: XOR<UsersCreateWithoutRolesInput, UsersUncheckedCreateWithoutRolesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutRolesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutRolesInput, UsersUncheckedUpdateWithoutRolesInput>
  }

  export type UsersUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RolesUpsertWithoutUsersInput = {
    update: XOR<RolesUpdateWithoutUsersInput, RolesUncheckedUpdateWithoutUsersInput>
    create: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    where?: RolesWhereInput
  }

  export type RolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: RolesWhereInput
    data: XOR<RolesUpdateWithoutUsersInput, RolesUncheckedUpdateWithoutUsersInput>
  }

  export type RolesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RolesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRoleMappingCreateManyUsersInput = {
    id?: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserRoleMappingUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: RolesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleMappingUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRoleMappingUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRoleMappingCreateManyRolesInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserRoleMappingUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UsersUpdateOneRequiredWithoutRolesNestedInput
  }

  export type UserRoleMappingUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRoleMappingUncheckedUpdateManyWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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