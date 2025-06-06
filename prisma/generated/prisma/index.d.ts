
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
 * Model Devices
 * 
 */
export type Devices = $Result.DefaultSelection<Prisma.$DevicesPayload>
/**
 * Model UserWallet
 * 
 */
export type UserWallet = $Result.DefaultSelection<Prisma.$UserWalletPayload>
/**
 * Model AppConfig
 * 
 */
export type AppConfig = $Result.DefaultSelection<Prisma.$AppConfigPayload>
/**
 * Model TradingGroup
 * 
 */
export type TradingGroup = $Result.DefaultSelection<Prisma.$TradingGroupPayload>
/**
 * Model GroupTrade
 * 
 */
export type GroupTrade = $Result.DefaultSelection<Prisma.$GroupTradePayload>

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

  /**
   * `prisma.devices`: Exposes CRUD operations for the **Devices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.devices.findMany()
    * ```
    */
  get devices(): Prisma.DevicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userWallet`: Exposes CRUD operations for the **UserWallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserWallets
    * const userWallets = await prisma.userWallet.findMany()
    * ```
    */
  get userWallet(): Prisma.UserWalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appConfig`: Exposes CRUD operations for the **AppConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppConfigs
    * const appConfigs = await prisma.appConfig.findMany()
    * ```
    */
  get appConfig(): Prisma.AppConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tradingGroup`: Exposes CRUD operations for the **TradingGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TradingGroups
    * const tradingGroups = await prisma.tradingGroup.findMany()
    * ```
    */
  get tradingGroup(): Prisma.TradingGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupTrade`: Exposes CRUD operations for the **GroupTrade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupTrades
    * const groupTrades = await prisma.groupTrade.findMany()
    * ```
    */
  get groupTrade(): Prisma.GroupTradeDelegate<ExtArgs, ClientOptions>;
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
    Coins: 'Coins',
    Devices: 'Devices',
    UserWallet: 'UserWallet',
    AppConfig: 'AppConfig',
    TradingGroup: 'TradingGroup',
    GroupTrade: 'GroupTrade'
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
      modelProps: "users" | "roles" | "userRoleMapping" | "coins" | "devices" | "userWallet" | "appConfig" | "tradingGroup" | "groupTrade"
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
      Devices: {
        payload: Prisma.$DevicesPayload<ExtArgs>
        fields: Prisma.DevicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DevicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DevicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>
          }
          findFirst: {
            args: Prisma.DevicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DevicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>
          }
          findMany: {
            args: Prisma.DevicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>[]
          }
          create: {
            args: Prisma.DevicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>
          }
          createMany: {
            args: Prisma.DevicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DevicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>[]
          }
          delete: {
            args: Prisma.DevicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>
          }
          update: {
            args: Prisma.DevicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>
          }
          deleteMany: {
            args: Prisma.DevicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DevicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DevicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>[]
          }
          upsert: {
            args: Prisma.DevicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicesPayload>
          }
          aggregate: {
            args: Prisma.DevicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevices>
          }
          groupBy: {
            args: Prisma.DevicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DevicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DevicesCountArgs<ExtArgs>
            result: $Utils.Optional<DevicesCountAggregateOutputType> | number
          }
        }
      }
      UserWallet: {
        payload: Prisma.$UserWalletPayload<ExtArgs>
        fields: Prisma.UserWalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserWalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserWalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload>
          }
          findFirst: {
            args: Prisma.UserWalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserWalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload>
          }
          findMany: {
            args: Prisma.UserWalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload>[]
          }
          create: {
            args: Prisma.UserWalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload>
          }
          createMany: {
            args: Prisma.UserWalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserWalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload>[]
          }
          delete: {
            args: Prisma.UserWalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload>
          }
          update: {
            args: Prisma.UserWalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload>
          }
          deleteMany: {
            args: Prisma.UserWalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserWalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserWalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload>[]
          }
          upsert: {
            args: Prisma.UserWalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWalletPayload>
          }
          aggregate: {
            args: Prisma.UserWalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserWallet>
          }
          groupBy: {
            args: Prisma.UserWalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserWalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserWalletCountArgs<ExtArgs>
            result: $Utils.Optional<UserWalletCountAggregateOutputType> | number
          }
        }
      }
      AppConfig: {
        payload: Prisma.$AppConfigPayload<ExtArgs>
        fields: Prisma.AppConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          findFirst: {
            args: Prisma.AppConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          findMany: {
            args: Prisma.AppConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>[]
          }
          create: {
            args: Prisma.AppConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          createMany: {
            args: Prisma.AppConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>[]
          }
          delete: {
            args: Prisma.AppConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          update: {
            args: Prisma.AppConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          deleteMany: {
            args: Prisma.AppConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>[]
          }
          upsert: {
            args: Prisma.AppConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppConfigPayload>
          }
          aggregate: {
            args: Prisma.AppConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppConfig>
          }
          groupBy: {
            args: Prisma.AppConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppConfigCountArgs<ExtArgs>
            result: $Utils.Optional<AppConfigCountAggregateOutputType> | number
          }
        }
      }
      TradingGroup: {
        payload: Prisma.$TradingGroupPayload<ExtArgs>
        fields: Prisma.TradingGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradingGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradingGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingGroupPayload>
          }
          findFirst: {
            args: Prisma.TradingGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradingGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingGroupPayload>
          }
          findMany: {
            args: Prisma.TradingGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingGroupPayload>[]
          }
          create: {
            args: Prisma.TradingGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingGroupPayload>
          }
          createMany: {
            args: Prisma.TradingGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradingGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingGroupPayload>[]
          }
          delete: {
            args: Prisma.TradingGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingGroupPayload>
          }
          update: {
            args: Prisma.TradingGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingGroupPayload>
          }
          deleteMany: {
            args: Prisma.TradingGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradingGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradingGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingGroupPayload>[]
          }
          upsert: {
            args: Prisma.TradingGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingGroupPayload>
          }
          aggregate: {
            args: Prisma.TradingGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTradingGroup>
          }
          groupBy: {
            args: Prisma.TradingGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradingGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradingGroupCountArgs<ExtArgs>
            result: $Utils.Optional<TradingGroupCountAggregateOutputType> | number
          }
        }
      }
      GroupTrade: {
        payload: Prisma.$GroupTradePayload<ExtArgs>
        fields: Prisma.GroupTradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupTradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupTradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTradePayload>
          }
          findFirst: {
            args: Prisma.GroupTradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupTradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTradePayload>
          }
          findMany: {
            args: Prisma.GroupTradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTradePayload>[]
          }
          create: {
            args: Prisma.GroupTradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTradePayload>
          }
          createMany: {
            args: Prisma.GroupTradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupTradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTradePayload>[]
          }
          delete: {
            args: Prisma.GroupTradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTradePayload>
          }
          update: {
            args: Prisma.GroupTradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTradePayload>
          }
          deleteMany: {
            args: Prisma.GroupTradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupTradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupTradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTradePayload>[]
          }
          upsert: {
            args: Prisma.GroupTradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTradePayload>
          }
          aggregate: {
            args: Prisma.GroupTradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupTrade>
          }
          groupBy: {
            args: Prisma.GroupTradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupTradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupTradeCountArgs<ExtArgs>
            result: $Utils.Optional<GroupTradeCountAggregateOutputType> | number
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
    devices?: DevicesOmit
    userWallet?: UserWalletOmit
    appConfig?: AppConfigOmit
    tradingGroup?: TradingGroupOmit
    groupTrade?: GroupTradeOmit
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
    userRoleMapping: number
    devices: number
    groupTrades: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoleMapping?: boolean | UsersCountOutputTypeCountUserRoleMappingArgs
    devices?: boolean | UsersCountOutputTypeCountDevicesArgs
    groupTrades?: boolean | UsersCountOutputTypeCountGroupTradesArgs
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
  export type UsersCountOutputTypeCountUserRoleMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleMappingWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevicesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGroupTradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupTradeWhereInput
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
   * Count Type CoinsCountOutputType
   */

  export type CoinsCountOutputType = {
    tradingGroupBase: number
    tradingGroupQuote: number
  }

  export type CoinsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tradingGroupBase?: boolean | CoinsCountOutputTypeCountTradingGroupBaseArgs
    tradingGroupQuote?: boolean | CoinsCountOutputTypeCountTradingGroupQuoteArgs
  }

  // Custom InputTypes
  /**
   * CoinsCountOutputType without action
   */
  export type CoinsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsCountOutputType
     */
    select?: CoinsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoinsCountOutputType without action
   */
  export type CoinsCountOutputTypeCountTradingGroupBaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradingGroupWhereInput
  }

  /**
   * CoinsCountOutputType without action
   */
  export type CoinsCountOutputTypeCountTradingGroupQuoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradingGroupWhereInput
  }


  /**
   * Count Type TradingGroupCountOutputType
   */

  export type TradingGroupCountOutputType = {
    trades: number
  }

  export type TradingGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trades?: boolean | TradingGroupCountOutputTypeCountTradesArgs
  }

  // Custom InputTypes
  /**
   * TradingGroupCountOutputType without action
   */
  export type TradingGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingGroupCountOutputType
     */
    select?: TradingGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TradingGroupCountOutputType without action
   */
  export type TradingGroupCountOutputTypeCountTradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupTradeWhereInput
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
    userRoleMapping?: boolean | Users$userRoleMappingArgs<ExtArgs>
    devices?: boolean | Users$devicesArgs<ExtArgs>
    userWallet?: boolean | Users$userWalletArgs<ExtArgs>
    groupTrades?: boolean | Users$groupTradesArgs<ExtArgs>
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
    userRoleMapping?: boolean | Users$userRoleMappingArgs<ExtArgs>
    devices?: boolean | Users$devicesArgs<ExtArgs>
    userWallet?: boolean | Users$userWalletArgs<ExtArgs>
    groupTrades?: boolean | Users$groupTradesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      userRoleMapping: Prisma.$UserRoleMappingPayload<ExtArgs>[]
      devices: Prisma.$DevicesPayload<ExtArgs>[]
      userWallet: Prisma.$UserWalletPayload<ExtArgs> | null
      groupTrades: Prisma.$GroupTradePayload<ExtArgs>[]
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
    userRoleMapping<T extends Users$userRoleMappingArgs<ExtArgs> = {}>(args?: Subset<T, Users$userRoleMappingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRoleMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    devices<T extends Users$devicesArgs<ExtArgs> = {}>(args?: Subset<T, Users$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userWallet<T extends Users$userWalletArgs<ExtArgs> = {}>(args?: Subset<T, Users$userWalletArgs<ExtArgs>>): Prisma__UserWalletClient<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    groupTrades<T extends Users$groupTradesArgs<ExtArgs> = {}>(args?: Subset<T, Users$groupTradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Users.userRoleMapping
   */
  export type Users$userRoleMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Users.devices
   */
  export type Users$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    where?: DevicesWhereInput
    orderBy?: DevicesOrderByWithRelationInput | DevicesOrderByWithRelationInput[]
    cursor?: DevicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DevicesScalarFieldEnum | DevicesScalarFieldEnum[]
  }

  /**
   * Users.userWallet
   */
  export type Users$userWalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    where?: UserWalletWhereInput
  }

  /**
   * Users.groupTrades
   */
  export type Users$groupTradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTrade
     */
    select?: GroupTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTrade
     */
    omit?: GroupTradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTradeInclude<ExtArgs> | null
    where?: GroupTradeWhereInput
    orderBy?: GroupTradeOrderByWithRelationInput | GroupTradeOrderByWithRelationInput[]
    cursor?: GroupTradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupTradeScalarFieldEnum | GroupTradeScalarFieldEnum[]
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
    volume: number | null
  }

  export type CoinsSumAggregateOutputType = {
    coinId: bigint | null
    rank: number | null
    volume: number | null
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
    volume: number | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
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
    volume: number | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
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
    volume: number
    isVisible: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CoinsAvgAggregateInputType = {
    coinId?: true
    rank?: true
    volume?: true
  }

  export type CoinsSumAggregateInputType = {
    coinId?: true
    rank?: true
    volume?: true
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
    volume?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
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
    volume?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
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
    volume?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
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
    volume: number
    isVisible: boolean
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
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
    volume?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    tradingGroupBase?: boolean | Coins$tradingGroupBaseArgs<ExtArgs>
    tradingGroupQuote?: boolean | Coins$tradingGroupQuoteArgs<ExtArgs>
    _count?: boolean | CoinsCountOutputTypeDefaultArgs<ExtArgs>
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
    volume?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
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
    volume?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
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
    volume?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CoinsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coinId" | "nameId" | "name" | "priceUsd" | "percentChange24h" | "percentChange1h" | "percentChange7d" | "priceBtc" | "volume24" | "volume24a" | "symbol" | "marketCapUsd" | "rank" | "volume" | "isVisible" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["coins"]>
  export type CoinsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tradingGroupBase?: boolean | Coins$tradingGroupBaseArgs<ExtArgs>
    tradingGroupQuote?: boolean | Coins$tradingGroupQuoteArgs<ExtArgs>
    _count?: boolean | CoinsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CoinsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CoinsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoinsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coins"
    objects: {
      tradingGroupBase: Prisma.$TradingGroupPayload<ExtArgs>[]
      tradingGroupQuote: Prisma.$TradingGroupPayload<ExtArgs>[]
    }
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
      volume: number
      isVisible: boolean
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
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
    tradingGroupBase<T extends Coins$tradingGroupBaseArgs<ExtArgs> = {}>(args?: Subset<T, Coins$tradingGroupBaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradingGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tradingGroupQuote<T extends Coins$tradingGroupQuoteArgs<ExtArgs> = {}>(args?: Subset<T, Coins$tradingGroupQuoteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradingGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly volume: FieldRef<"Coins", 'Int'>
    readonly isVisible: FieldRef<"Coins", 'Boolean'>
    readonly createdAt: FieldRef<"Coins", 'DateTime'>
    readonly updatedAt: FieldRef<"Coins", 'DateTime'>
    readonly deletedAt: FieldRef<"Coins", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsInclude<ExtArgs> | null
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
   * Coins.tradingGroupBase
   */
  export type Coins$tradingGroupBaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingGroup
     */
    select?: TradingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingGroup
     */
    omit?: TradingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingGroupInclude<ExtArgs> | null
    where?: TradingGroupWhereInput
    orderBy?: TradingGroupOrderByWithRelationInput | TradingGroupOrderByWithRelationInput[]
    cursor?: TradingGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradingGroupScalarFieldEnum | TradingGroupScalarFieldEnum[]
  }

  /**
   * Coins.tradingGroupQuote
   */
  export type Coins$tradingGroupQuoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingGroup
     */
    select?: TradingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingGroup
     */
    omit?: TradingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingGroupInclude<ExtArgs> | null
    where?: TradingGroupWhereInput
    orderBy?: TradingGroupOrderByWithRelationInput | TradingGroupOrderByWithRelationInput[]
    cursor?: TradingGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradingGroupScalarFieldEnum | TradingGroupScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsInclude<ExtArgs> | null
  }


  /**
   * Model Devices
   */

  export type AggregateDevices = {
    _count: DevicesCountAggregateOutputType | null
    _min: DevicesMinAggregateOutputType | null
    _max: DevicesMaxAggregateOutputType | null
  }

  export type DevicesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fcmToken: string | null
    archive: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DevicesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fcmToken: string | null
    archive: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DevicesCountAggregateOutputType = {
    id: number
    userId: number
    fcmToken: number
    archive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type DevicesMinAggregateInputType = {
    id?: true
    userId?: true
    fcmToken?: true
    archive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DevicesMaxAggregateInputType = {
    id?: true
    userId?: true
    fcmToken?: true
    archive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DevicesCountAggregateInputType = {
    id?: true
    userId?: true
    fcmToken?: true
    archive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type DevicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to aggregate.
     */
    where?: DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DevicesOrderByWithRelationInput | DevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DevicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevicesMaxAggregateInputType
  }

  export type GetDevicesAggregateType<T extends DevicesAggregateArgs> = {
        [P in keyof T & keyof AggregateDevices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevices[P]>
      : GetScalarType<T[P], AggregateDevices[P]>
  }




  export type DevicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevicesWhereInput
    orderBy?: DevicesOrderByWithAggregationInput | DevicesOrderByWithAggregationInput[]
    by: DevicesScalarFieldEnum[] | DevicesScalarFieldEnum
    having?: DevicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevicesCountAggregateInputType | true
    _min?: DevicesMinAggregateInputType
    _max?: DevicesMaxAggregateInputType
  }

  export type DevicesGroupByOutputType = {
    id: string
    userId: string
    fcmToken: string | null
    archive: string | null
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: DevicesCountAggregateOutputType | null
    _min: DevicesMinAggregateOutputType | null
    _max: DevicesMaxAggregateOutputType | null
  }

  type GetDevicesGroupByPayload<T extends DevicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DevicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevicesGroupByOutputType[P]>
            : GetScalarType<T[P], DevicesGroupByOutputType[P]>
        }
      >
    >


  export type DevicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fcmToken?: boolean
    archive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devices"]>

  export type DevicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fcmToken?: boolean
    archive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devices"]>

  export type DevicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fcmToken?: boolean
    archive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devices"]>

  export type DevicesSelectScalar = {
    id?: boolean
    userId?: boolean
    fcmToken?: boolean
    archive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type DevicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fcmToken" | "archive" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["devices"]>
  export type DevicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type DevicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type DevicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $DevicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Devices"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fcmToken: string | null
      archive: string | null
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["devices"]>
    composites: {}
  }

  type DevicesGetPayload<S extends boolean | null | undefined | DevicesDefaultArgs> = $Result.GetResult<Prisma.$DevicesPayload, S>

  type DevicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DevicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DevicesCountAggregateInputType | true
    }

  export interface DevicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Devices'], meta: { name: 'Devices' } }
    /**
     * Find zero or one Devices that matches the filter.
     * @param {DevicesFindUniqueArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DevicesFindUniqueArgs>(args: SelectSubset<T, DevicesFindUniqueArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Devices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DevicesFindUniqueOrThrowArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DevicesFindUniqueOrThrowArgs>(args: SelectSubset<T, DevicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesFindFirstArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DevicesFindFirstArgs>(args?: SelectSubset<T, DevicesFindFirstArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesFindFirstOrThrowArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DevicesFindFirstOrThrowArgs>(args?: SelectSubset<T, DevicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.devices.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.devices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const devicesWithIdOnly = await prisma.devices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DevicesFindManyArgs>(args?: SelectSubset<T, DevicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Devices.
     * @param {DevicesCreateArgs} args - Arguments to create a Devices.
     * @example
     * // Create one Devices
     * const Devices = await prisma.devices.create({
     *   data: {
     *     // ... data to create a Devices
     *   }
     * })
     * 
     */
    create<T extends DevicesCreateArgs>(args: SelectSubset<T, DevicesCreateArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DevicesCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const devices = await prisma.devices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DevicesCreateManyArgs>(args?: SelectSubset<T, DevicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DevicesCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const devices = await prisma.devices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const devicesWithIdOnly = await prisma.devices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DevicesCreateManyAndReturnArgs>(args?: SelectSubset<T, DevicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Devices.
     * @param {DevicesDeleteArgs} args - Arguments to delete one Devices.
     * @example
     * // Delete one Devices
     * const Devices = await prisma.devices.delete({
     *   where: {
     *     // ... filter to delete one Devices
     *   }
     * })
     * 
     */
    delete<T extends DevicesDeleteArgs>(args: SelectSubset<T, DevicesDeleteArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Devices.
     * @param {DevicesUpdateArgs} args - Arguments to update one Devices.
     * @example
     * // Update one Devices
     * const devices = await prisma.devices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DevicesUpdateArgs>(args: SelectSubset<T, DevicesUpdateArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DevicesDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.devices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DevicesDeleteManyArgs>(args?: SelectSubset<T, DevicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const devices = await prisma.devices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DevicesUpdateManyArgs>(args: SelectSubset<T, DevicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DevicesUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const devices = await prisma.devices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const devicesWithIdOnly = await prisma.devices.updateManyAndReturn({
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
    updateManyAndReturn<T extends DevicesUpdateManyAndReturnArgs>(args: SelectSubset<T, DevicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Devices.
     * @param {DevicesUpsertArgs} args - Arguments to update or create a Devices.
     * @example
     * // Update or create a Devices
     * const devices = await prisma.devices.upsert({
     *   create: {
     *     // ... data to create a Devices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Devices we want to update
     *   }
     * })
     */
    upsert<T extends DevicesUpsertArgs>(args: SelectSubset<T, DevicesUpsertArgs<ExtArgs>>): Prisma__DevicesClient<$Result.GetResult<Prisma.$DevicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.devices.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DevicesCountArgs>(
      args?: Subset<T, DevicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DevicesAggregateArgs>(args: Subset<T, DevicesAggregateArgs>): Prisma.PrismaPromise<GetDevicesAggregateType<T>>

    /**
     * Group by Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesGroupByArgs} args - Group by arguments.
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
      T extends DevicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DevicesGroupByArgs['orderBy'] }
        : { orderBy?: DevicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DevicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Devices model
   */
  readonly fields: DevicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Devices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DevicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Devices model
   */
  interface DevicesFieldRefs {
    readonly id: FieldRef<"Devices", 'String'>
    readonly userId: FieldRef<"Devices", 'String'>
    readonly fcmToken: FieldRef<"Devices", 'String'>
    readonly archive: FieldRef<"Devices", 'String'>
    readonly createdAt: FieldRef<"Devices", 'DateTime'>
    readonly updatedAt: FieldRef<"Devices", 'DateTime'>
    readonly deletedAt: FieldRef<"Devices", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Devices findUnique
   */
  export type DevicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where: DevicesWhereUniqueInput
  }

  /**
   * Devices findUniqueOrThrow
   */
  export type DevicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where: DevicesWhereUniqueInput
  }

  /**
   * Devices findFirst
   */
  export type DevicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DevicesOrderByWithRelationInput | DevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DevicesScalarFieldEnum | DevicesScalarFieldEnum[]
  }

  /**
   * Devices findFirstOrThrow
   */
  export type DevicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DevicesOrderByWithRelationInput | DevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DevicesScalarFieldEnum | DevicesScalarFieldEnum[]
  }

  /**
   * Devices findMany
   */
  export type DevicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DevicesOrderByWithRelationInput | DevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DevicesScalarFieldEnum | DevicesScalarFieldEnum[]
  }

  /**
   * Devices create
   */
  export type DevicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    /**
     * The data needed to create a Devices.
     */
    data: XOR<DevicesCreateInput, DevicesUncheckedCreateInput>
  }

  /**
   * Devices createMany
   */
  export type DevicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DevicesCreateManyInput | DevicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Devices createManyAndReturn
   */
  export type DevicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DevicesCreateManyInput | DevicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Devices update
   */
  export type DevicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    /**
     * The data needed to update a Devices.
     */
    data: XOR<DevicesUpdateInput, DevicesUncheckedUpdateInput>
    /**
     * Choose, which Devices to update.
     */
    where: DevicesWhereUniqueInput
  }

  /**
   * Devices updateMany
   */
  export type DevicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DevicesUpdateManyMutationInput, DevicesUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DevicesWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Devices updateManyAndReturn
   */
  export type DevicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DevicesUpdateManyMutationInput, DevicesUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DevicesWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Devices upsert
   */
  export type DevicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    /**
     * The filter to search for the Devices to update in case it exists.
     */
    where: DevicesWhereUniqueInput
    /**
     * In case the Devices found by the `where` argument doesn't exist, create a new Devices with this data.
     */
    create: XOR<DevicesCreateInput, DevicesUncheckedCreateInput>
    /**
     * In case the Devices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DevicesUpdateInput, DevicesUncheckedUpdateInput>
  }

  /**
   * Devices delete
   */
  export type DevicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
    /**
     * Filter which Devices to delete.
     */
    where: DevicesWhereUniqueInput
  }

  /**
   * Devices deleteMany
   */
  export type DevicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DevicesWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Devices without action
   */
  export type DevicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devices
     */
    omit?: DevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevicesInclude<ExtArgs> | null
  }


  /**
   * Model UserWallet
   */

  export type AggregateUserWallet = {
    _count: UserWalletCountAggregateOutputType | null
    _avg: UserWalletAvgAggregateOutputType | null
    _sum: UserWalletSumAggregateOutputType | null
    _min: UserWalletMinAggregateOutputType | null
    _max: UserWalletMaxAggregateOutputType | null
  }

  export type UserWalletAvgAggregateOutputType = {
    amount: number | null
  }

  export type UserWalletSumAggregateOutputType = {
    amount: number | null
  }

  export type UserWalletMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserWalletMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserWalletCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    currency: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserWalletAvgAggregateInputType = {
    amount?: true
  }

  export type UserWalletSumAggregateInputType = {
    amount?: true
  }

  export type UserWalletMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserWalletMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserWalletCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserWalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWallet to aggregate.
     */
    where?: UserWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWallets to fetch.
     */
    orderBy?: UserWalletOrderByWithRelationInput | UserWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserWallets
    **/
    _count?: true | UserWalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserWalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserWalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserWalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserWalletMaxAggregateInputType
  }

  export type GetUserWalletAggregateType<T extends UserWalletAggregateArgs> = {
        [P in keyof T & keyof AggregateUserWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserWallet[P]>
      : GetScalarType<T[P], AggregateUserWallet[P]>
  }




  export type UserWalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWalletWhereInput
    orderBy?: UserWalletOrderByWithAggregationInput | UserWalletOrderByWithAggregationInput[]
    by: UserWalletScalarFieldEnum[] | UserWalletScalarFieldEnum
    having?: UserWalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserWalletCountAggregateInputType | true
    _avg?: UserWalletAvgAggregateInputType
    _sum?: UserWalletSumAggregateInputType
    _min?: UserWalletMinAggregateInputType
    _max?: UserWalletMaxAggregateInputType
  }

  export type UserWalletGroupByOutputType = {
    id: string
    userId: string
    amount: number
    currency: string
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: UserWalletCountAggregateOutputType | null
    _avg: UserWalletAvgAggregateOutputType | null
    _sum: UserWalletSumAggregateOutputType | null
    _min: UserWalletMinAggregateOutputType | null
    _max: UserWalletMaxAggregateOutputType | null
  }

  type GetUserWalletGroupByPayload<T extends UserWalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserWalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserWalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserWalletGroupByOutputType[P]>
            : GetScalarType<T[P], UserWalletGroupByOutputType[P]>
        }
      >
    >


  export type UserWalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWallet"]>

  export type UserWalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWallet"]>

  export type UserWalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWallet"]>

  export type UserWalletSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserWalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "currency" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["userWallet"]>
  export type UserWalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type UserWalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type UserWalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $UserWalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserWallet"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      currency: string
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["userWallet"]>
    composites: {}
  }

  type UserWalletGetPayload<S extends boolean | null | undefined | UserWalletDefaultArgs> = $Result.GetResult<Prisma.$UserWalletPayload, S>

  type UserWalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserWalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserWalletCountAggregateInputType | true
    }

  export interface UserWalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserWallet'], meta: { name: 'UserWallet' } }
    /**
     * Find zero or one UserWallet that matches the filter.
     * @param {UserWalletFindUniqueArgs} args - Arguments to find a UserWallet
     * @example
     * // Get one UserWallet
     * const userWallet = await prisma.userWallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserWalletFindUniqueArgs>(args: SelectSubset<T, UserWalletFindUniqueArgs<ExtArgs>>): Prisma__UserWalletClient<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserWallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserWalletFindUniqueOrThrowArgs} args - Arguments to find a UserWallet
     * @example
     * // Get one UserWallet
     * const userWallet = await prisma.userWallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserWalletFindUniqueOrThrowArgs>(args: SelectSubset<T, UserWalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserWalletClient<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWalletFindFirstArgs} args - Arguments to find a UserWallet
     * @example
     * // Get one UserWallet
     * const userWallet = await prisma.userWallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserWalletFindFirstArgs>(args?: SelectSubset<T, UserWalletFindFirstArgs<ExtArgs>>): Prisma__UserWalletClient<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWalletFindFirstOrThrowArgs} args - Arguments to find a UserWallet
     * @example
     * // Get one UserWallet
     * const userWallet = await prisma.userWallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserWalletFindFirstOrThrowArgs>(args?: SelectSubset<T, UserWalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserWalletClient<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserWallets
     * const userWallets = await prisma.userWallet.findMany()
     * 
     * // Get first 10 UserWallets
     * const userWallets = await prisma.userWallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWalletWithIdOnly = await prisma.userWallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserWalletFindManyArgs>(args?: SelectSubset<T, UserWalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserWallet.
     * @param {UserWalletCreateArgs} args - Arguments to create a UserWallet.
     * @example
     * // Create one UserWallet
     * const UserWallet = await prisma.userWallet.create({
     *   data: {
     *     // ... data to create a UserWallet
     *   }
     * })
     * 
     */
    create<T extends UserWalletCreateArgs>(args: SelectSubset<T, UserWalletCreateArgs<ExtArgs>>): Prisma__UserWalletClient<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserWallets.
     * @param {UserWalletCreateManyArgs} args - Arguments to create many UserWallets.
     * @example
     * // Create many UserWallets
     * const userWallet = await prisma.userWallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserWalletCreateManyArgs>(args?: SelectSubset<T, UserWalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserWallets and returns the data saved in the database.
     * @param {UserWalletCreateManyAndReturnArgs} args - Arguments to create many UserWallets.
     * @example
     * // Create many UserWallets
     * const userWallet = await prisma.userWallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserWallets and only return the `id`
     * const userWalletWithIdOnly = await prisma.userWallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserWalletCreateManyAndReturnArgs>(args?: SelectSubset<T, UserWalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserWallet.
     * @param {UserWalletDeleteArgs} args - Arguments to delete one UserWallet.
     * @example
     * // Delete one UserWallet
     * const UserWallet = await prisma.userWallet.delete({
     *   where: {
     *     // ... filter to delete one UserWallet
     *   }
     * })
     * 
     */
    delete<T extends UserWalletDeleteArgs>(args: SelectSubset<T, UserWalletDeleteArgs<ExtArgs>>): Prisma__UserWalletClient<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserWallet.
     * @param {UserWalletUpdateArgs} args - Arguments to update one UserWallet.
     * @example
     * // Update one UserWallet
     * const userWallet = await prisma.userWallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserWalletUpdateArgs>(args: SelectSubset<T, UserWalletUpdateArgs<ExtArgs>>): Prisma__UserWalletClient<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserWallets.
     * @param {UserWalletDeleteManyArgs} args - Arguments to filter UserWallets to delete.
     * @example
     * // Delete a few UserWallets
     * const { count } = await prisma.userWallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserWalletDeleteManyArgs>(args?: SelectSubset<T, UserWalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserWallets
     * const userWallet = await prisma.userWallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserWalletUpdateManyArgs>(args: SelectSubset<T, UserWalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWallets and returns the data updated in the database.
     * @param {UserWalletUpdateManyAndReturnArgs} args - Arguments to update many UserWallets.
     * @example
     * // Update many UserWallets
     * const userWallet = await prisma.userWallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserWallets and only return the `id`
     * const userWalletWithIdOnly = await prisma.userWallet.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserWalletUpdateManyAndReturnArgs>(args: SelectSubset<T, UserWalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserWallet.
     * @param {UserWalletUpsertArgs} args - Arguments to update or create a UserWallet.
     * @example
     * // Update or create a UserWallet
     * const userWallet = await prisma.userWallet.upsert({
     *   create: {
     *     // ... data to create a UserWallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserWallet we want to update
     *   }
     * })
     */
    upsert<T extends UserWalletUpsertArgs>(args: SelectSubset<T, UserWalletUpsertArgs<ExtArgs>>): Prisma__UserWalletClient<$Result.GetResult<Prisma.$UserWalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWalletCountArgs} args - Arguments to filter UserWallets to count.
     * @example
     * // Count the number of UserWallets
     * const count = await prisma.userWallet.count({
     *   where: {
     *     // ... the filter for the UserWallets we want to count
     *   }
     * })
    **/
    count<T extends UserWalletCountArgs>(
      args?: Subset<T, UserWalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserWalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserWalletAggregateArgs>(args: Subset<T, UserWalletAggregateArgs>): Prisma.PrismaPromise<GetUserWalletAggregateType<T>>

    /**
     * Group by UserWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWalletGroupByArgs} args - Group by arguments.
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
      T extends UserWalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserWalletGroupByArgs['orderBy'] }
        : { orderBy?: UserWalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserWalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserWallet model
   */
  readonly fields: UserWalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserWallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserWalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserWallet model
   */
  interface UserWalletFieldRefs {
    readonly id: FieldRef<"UserWallet", 'String'>
    readonly userId: FieldRef<"UserWallet", 'String'>
    readonly amount: FieldRef<"UserWallet", 'Int'>
    readonly currency: FieldRef<"UserWallet", 'String'>
    readonly createdAt: FieldRef<"UserWallet", 'DateTime'>
    readonly updatedAt: FieldRef<"UserWallet", 'DateTime'>
    readonly deletedAt: FieldRef<"UserWallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserWallet findUnique
   */
  export type UserWalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    /**
     * Filter, which UserWallet to fetch.
     */
    where: UserWalletWhereUniqueInput
  }

  /**
   * UserWallet findUniqueOrThrow
   */
  export type UserWalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    /**
     * Filter, which UserWallet to fetch.
     */
    where: UserWalletWhereUniqueInput
  }

  /**
   * UserWallet findFirst
   */
  export type UserWalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    /**
     * Filter, which UserWallet to fetch.
     */
    where?: UserWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWallets to fetch.
     */
    orderBy?: UserWalletOrderByWithRelationInput | UserWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWallets.
     */
    cursor?: UserWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWallets.
     */
    distinct?: UserWalletScalarFieldEnum | UserWalletScalarFieldEnum[]
  }

  /**
   * UserWallet findFirstOrThrow
   */
  export type UserWalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    /**
     * Filter, which UserWallet to fetch.
     */
    where?: UserWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWallets to fetch.
     */
    orderBy?: UserWalletOrderByWithRelationInput | UserWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWallets.
     */
    cursor?: UserWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWallets.
     */
    distinct?: UserWalletScalarFieldEnum | UserWalletScalarFieldEnum[]
  }

  /**
   * UserWallet findMany
   */
  export type UserWalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    /**
     * Filter, which UserWallets to fetch.
     */
    where?: UserWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWallets to fetch.
     */
    orderBy?: UserWalletOrderByWithRelationInput | UserWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserWallets.
     */
    cursor?: UserWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWallets.
     */
    skip?: number
    distinct?: UserWalletScalarFieldEnum | UserWalletScalarFieldEnum[]
  }

  /**
   * UserWallet create
   */
  export type UserWalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    /**
     * The data needed to create a UserWallet.
     */
    data: XOR<UserWalletCreateInput, UserWalletUncheckedCreateInput>
  }

  /**
   * UserWallet createMany
   */
  export type UserWalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserWallets.
     */
    data: UserWalletCreateManyInput | UserWalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserWallet createManyAndReturn
   */
  export type UserWalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * The data used to create many UserWallets.
     */
    data: UserWalletCreateManyInput | UserWalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWallet update
   */
  export type UserWalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    /**
     * The data needed to update a UserWallet.
     */
    data: XOR<UserWalletUpdateInput, UserWalletUncheckedUpdateInput>
    /**
     * Choose, which UserWallet to update.
     */
    where: UserWalletWhereUniqueInput
  }

  /**
   * UserWallet updateMany
   */
  export type UserWalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserWallets.
     */
    data: XOR<UserWalletUpdateManyMutationInput, UserWalletUncheckedUpdateManyInput>
    /**
     * Filter which UserWallets to update
     */
    where?: UserWalletWhereInput
    /**
     * Limit how many UserWallets to update.
     */
    limit?: number
  }

  /**
   * UserWallet updateManyAndReturn
   */
  export type UserWalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * The data used to update UserWallets.
     */
    data: XOR<UserWalletUpdateManyMutationInput, UserWalletUncheckedUpdateManyInput>
    /**
     * Filter which UserWallets to update
     */
    where?: UserWalletWhereInput
    /**
     * Limit how many UserWallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWallet upsert
   */
  export type UserWalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    /**
     * The filter to search for the UserWallet to update in case it exists.
     */
    where: UserWalletWhereUniqueInput
    /**
     * In case the UserWallet found by the `where` argument doesn't exist, create a new UserWallet with this data.
     */
    create: XOR<UserWalletCreateInput, UserWalletUncheckedCreateInput>
    /**
     * In case the UserWallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserWalletUpdateInput, UserWalletUncheckedUpdateInput>
  }

  /**
   * UserWallet delete
   */
  export type UserWalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
    /**
     * Filter which UserWallet to delete.
     */
    where: UserWalletWhereUniqueInput
  }

  /**
   * UserWallet deleteMany
   */
  export type UserWalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWallets to delete
     */
    where?: UserWalletWhereInput
    /**
     * Limit how many UserWallets to delete.
     */
    limit?: number
  }

  /**
   * UserWallet without action
   */
  export type UserWalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWallet
     */
    select?: UserWalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWallet
     */
    omit?: UserWalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWalletInclude<ExtArgs> | null
  }


  /**
   * Model AppConfig
   */

  export type AggregateAppConfig = {
    _count: AppConfigCountAggregateOutputType | null
    _min: AppConfigMinAggregateOutputType | null
    _max: AppConfigMaxAggregateOutputType | null
  }

  export type AppConfigMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AppConfigMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AppConfigCountAggregateOutputType = {
    id: number
    key: number
    value: number
    type: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AppConfigMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AppConfigMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AppConfigCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AppConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppConfig to aggregate.
     */
    where?: AppConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppConfigs to fetch.
     */
    orderBy?: AppConfigOrderByWithRelationInput | AppConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppConfigs
    **/
    _count?: true | AppConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppConfigMaxAggregateInputType
  }

  export type GetAppConfigAggregateType<T extends AppConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateAppConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppConfig[P]>
      : GetScalarType<T[P], AggregateAppConfig[P]>
  }




  export type AppConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppConfigWhereInput
    orderBy?: AppConfigOrderByWithAggregationInput | AppConfigOrderByWithAggregationInput[]
    by: AppConfigScalarFieldEnum[] | AppConfigScalarFieldEnum
    having?: AppConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppConfigCountAggregateInputType | true
    _min?: AppConfigMinAggregateInputType
    _max?: AppConfigMaxAggregateInputType
  }

  export type AppConfigGroupByOutputType = {
    id: string
    key: string
    value: string
    type: string
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: AppConfigCountAggregateOutputType | null
    _min: AppConfigMinAggregateOutputType | null
    _max: AppConfigMaxAggregateOutputType | null
  }

  type GetAppConfigGroupByPayload<T extends AppConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppConfigGroupByOutputType[P]>
            : GetScalarType<T[P], AppConfigGroupByOutputType[P]>
        }
      >
    >


  export type AppConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["appConfig"]>

  export type AppConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["appConfig"]>

  export type AppConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["appConfig"]>

  export type AppConfigSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AppConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "type" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["appConfig"]>

  export type $AppConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      type: string
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["appConfig"]>
    composites: {}
  }

  type AppConfigGetPayload<S extends boolean | null | undefined | AppConfigDefaultArgs> = $Result.GetResult<Prisma.$AppConfigPayload, S>

  type AppConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppConfigCountAggregateInputType | true
    }

  export interface AppConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppConfig'], meta: { name: 'AppConfig' } }
    /**
     * Find zero or one AppConfig that matches the filter.
     * @param {AppConfigFindUniqueArgs} args - Arguments to find a AppConfig
     * @example
     * // Get one AppConfig
     * const appConfig = await prisma.appConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppConfigFindUniqueArgs>(args: SelectSubset<T, AppConfigFindUniqueArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppConfigFindUniqueOrThrowArgs} args - Arguments to find a AppConfig
     * @example
     * // Get one AppConfig
     * const appConfig = await prisma.appConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, AppConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigFindFirstArgs} args - Arguments to find a AppConfig
     * @example
     * // Get one AppConfig
     * const appConfig = await prisma.appConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppConfigFindFirstArgs>(args?: SelectSubset<T, AppConfigFindFirstArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigFindFirstOrThrowArgs} args - Arguments to find a AppConfig
     * @example
     * // Get one AppConfig
     * const appConfig = await prisma.appConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, AppConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppConfigs
     * const appConfigs = await prisma.appConfig.findMany()
     * 
     * // Get first 10 AppConfigs
     * const appConfigs = await prisma.appConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appConfigWithIdOnly = await prisma.appConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppConfigFindManyArgs>(args?: SelectSubset<T, AppConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppConfig.
     * @param {AppConfigCreateArgs} args - Arguments to create a AppConfig.
     * @example
     * // Create one AppConfig
     * const AppConfig = await prisma.appConfig.create({
     *   data: {
     *     // ... data to create a AppConfig
     *   }
     * })
     * 
     */
    create<T extends AppConfigCreateArgs>(args: SelectSubset<T, AppConfigCreateArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppConfigs.
     * @param {AppConfigCreateManyArgs} args - Arguments to create many AppConfigs.
     * @example
     * // Create many AppConfigs
     * const appConfig = await prisma.appConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppConfigCreateManyArgs>(args?: SelectSubset<T, AppConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppConfigs and returns the data saved in the database.
     * @param {AppConfigCreateManyAndReturnArgs} args - Arguments to create many AppConfigs.
     * @example
     * // Create many AppConfigs
     * const appConfig = await prisma.appConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppConfigs and only return the `id`
     * const appConfigWithIdOnly = await prisma.appConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, AppConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppConfig.
     * @param {AppConfigDeleteArgs} args - Arguments to delete one AppConfig.
     * @example
     * // Delete one AppConfig
     * const AppConfig = await prisma.appConfig.delete({
     *   where: {
     *     // ... filter to delete one AppConfig
     *   }
     * })
     * 
     */
    delete<T extends AppConfigDeleteArgs>(args: SelectSubset<T, AppConfigDeleteArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppConfig.
     * @param {AppConfigUpdateArgs} args - Arguments to update one AppConfig.
     * @example
     * // Update one AppConfig
     * const appConfig = await prisma.appConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppConfigUpdateArgs>(args: SelectSubset<T, AppConfigUpdateArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppConfigs.
     * @param {AppConfigDeleteManyArgs} args - Arguments to filter AppConfigs to delete.
     * @example
     * // Delete a few AppConfigs
     * const { count } = await prisma.appConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppConfigDeleteManyArgs>(args?: SelectSubset<T, AppConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppConfigs
     * const appConfig = await prisma.appConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppConfigUpdateManyArgs>(args: SelectSubset<T, AppConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppConfigs and returns the data updated in the database.
     * @param {AppConfigUpdateManyAndReturnArgs} args - Arguments to update many AppConfigs.
     * @example
     * // Update many AppConfigs
     * const appConfig = await prisma.appConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppConfigs and only return the `id`
     * const appConfigWithIdOnly = await prisma.appConfig.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, AppConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppConfig.
     * @param {AppConfigUpsertArgs} args - Arguments to update or create a AppConfig.
     * @example
     * // Update or create a AppConfig
     * const appConfig = await prisma.appConfig.upsert({
     *   create: {
     *     // ... data to create a AppConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppConfig we want to update
     *   }
     * })
     */
    upsert<T extends AppConfigUpsertArgs>(args: SelectSubset<T, AppConfigUpsertArgs<ExtArgs>>): Prisma__AppConfigClient<$Result.GetResult<Prisma.$AppConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigCountArgs} args - Arguments to filter AppConfigs to count.
     * @example
     * // Count the number of AppConfigs
     * const count = await prisma.appConfig.count({
     *   where: {
     *     // ... the filter for the AppConfigs we want to count
     *   }
     * })
    **/
    count<T extends AppConfigCountArgs>(
      args?: Subset<T, AppConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppConfigAggregateArgs>(args: Subset<T, AppConfigAggregateArgs>): Prisma.PrismaPromise<GetAppConfigAggregateType<T>>

    /**
     * Group by AppConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppConfigGroupByArgs} args - Group by arguments.
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
      T extends AppConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppConfigGroupByArgs['orderBy'] }
        : { orderBy?: AppConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppConfig model
   */
  readonly fields: AppConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AppConfig model
   */
  interface AppConfigFieldRefs {
    readonly id: FieldRef<"AppConfig", 'String'>
    readonly key: FieldRef<"AppConfig", 'String'>
    readonly value: FieldRef<"AppConfig", 'String'>
    readonly type: FieldRef<"AppConfig", 'String'>
    readonly createdAt: FieldRef<"AppConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"AppConfig", 'DateTime'>
    readonly deletedAt: FieldRef<"AppConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppConfig findUnique
   */
  export type AppConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfig to fetch.
     */
    where: AppConfigWhereUniqueInput
  }

  /**
   * AppConfig findUniqueOrThrow
   */
  export type AppConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfig to fetch.
     */
    where: AppConfigWhereUniqueInput
  }

  /**
   * AppConfig findFirst
   */
  export type AppConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfig to fetch.
     */
    where?: AppConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppConfigs to fetch.
     */
    orderBy?: AppConfigOrderByWithRelationInput | AppConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppConfigs.
     */
    cursor?: AppConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppConfigs.
     */
    distinct?: AppConfigScalarFieldEnum | AppConfigScalarFieldEnum[]
  }

  /**
   * AppConfig findFirstOrThrow
   */
  export type AppConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfig to fetch.
     */
    where?: AppConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppConfigs to fetch.
     */
    orderBy?: AppConfigOrderByWithRelationInput | AppConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppConfigs.
     */
    cursor?: AppConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppConfigs.
     */
    distinct?: AppConfigScalarFieldEnum | AppConfigScalarFieldEnum[]
  }

  /**
   * AppConfig findMany
   */
  export type AppConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter, which AppConfigs to fetch.
     */
    where?: AppConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppConfigs to fetch.
     */
    orderBy?: AppConfigOrderByWithRelationInput | AppConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppConfigs.
     */
    cursor?: AppConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppConfigs.
     */
    skip?: number
    distinct?: AppConfigScalarFieldEnum | AppConfigScalarFieldEnum[]
  }

  /**
   * AppConfig create
   */
  export type AppConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a AppConfig.
     */
    data: XOR<AppConfigCreateInput, AppConfigUncheckedCreateInput>
  }

  /**
   * AppConfig createMany
   */
  export type AppConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppConfigs.
     */
    data: AppConfigCreateManyInput | AppConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppConfig createManyAndReturn
   */
  export type AppConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The data used to create many AppConfigs.
     */
    data: AppConfigCreateManyInput | AppConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppConfig update
   */
  export type AppConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a AppConfig.
     */
    data: XOR<AppConfigUpdateInput, AppConfigUncheckedUpdateInput>
    /**
     * Choose, which AppConfig to update.
     */
    where: AppConfigWhereUniqueInput
  }

  /**
   * AppConfig updateMany
   */
  export type AppConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppConfigs.
     */
    data: XOR<AppConfigUpdateManyMutationInput, AppConfigUncheckedUpdateManyInput>
    /**
     * Filter which AppConfigs to update
     */
    where?: AppConfigWhereInput
    /**
     * Limit how many AppConfigs to update.
     */
    limit?: number
  }

  /**
   * AppConfig updateManyAndReturn
   */
  export type AppConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The data used to update AppConfigs.
     */
    data: XOR<AppConfigUpdateManyMutationInput, AppConfigUncheckedUpdateManyInput>
    /**
     * Filter which AppConfigs to update
     */
    where?: AppConfigWhereInput
    /**
     * Limit how many AppConfigs to update.
     */
    limit?: number
  }

  /**
   * AppConfig upsert
   */
  export type AppConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the AppConfig to update in case it exists.
     */
    where: AppConfigWhereUniqueInput
    /**
     * In case the AppConfig found by the `where` argument doesn't exist, create a new AppConfig with this data.
     */
    create: XOR<AppConfigCreateInput, AppConfigUncheckedCreateInput>
    /**
     * In case the AppConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppConfigUpdateInput, AppConfigUncheckedUpdateInput>
  }

  /**
   * AppConfig delete
   */
  export type AppConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
    /**
     * Filter which AppConfig to delete.
     */
    where: AppConfigWhereUniqueInput
  }

  /**
   * AppConfig deleteMany
   */
  export type AppConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppConfigs to delete
     */
    where?: AppConfigWhereInput
    /**
     * Limit how many AppConfigs to delete.
     */
    limit?: number
  }

  /**
   * AppConfig without action
   */
  export type AppConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppConfig
     */
    select?: AppConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppConfig
     */
    omit?: AppConfigOmit<ExtArgs> | null
  }


  /**
   * Model TradingGroup
   */

  export type AggregateTradingGroup = {
    _count: TradingGroupCountAggregateOutputType | null
    _min: TradingGroupMinAggregateOutputType | null
    _max: TradingGroupMaxAggregateOutputType | null
  }

  export type TradingGroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    baseCoinId: string | null
    quoteCoinId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TradingGroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    baseCoinId: string | null
    quoteCoinId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TradingGroupCountAggregateOutputType = {
    id: number
    name: number
    baseCoinId: number
    quoteCoinId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TradingGroupMinAggregateInputType = {
    id?: true
    name?: true
    baseCoinId?: true
    quoteCoinId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TradingGroupMaxAggregateInputType = {
    id?: true
    name?: true
    baseCoinId?: true
    quoteCoinId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TradingGroupCountAggregateInputType = {
    id?: true
    name?: true
    baseCoinId?: true
    quoteCoinId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TradingGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TradingGroup to aggregate.
     */
    where?: TradingGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradingGroups to fetch.
     */
    orderBy?: TradingGroupOrderByWithRelationInput | TradingGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradingGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradingGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradingGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TradingGroups
    **/
    _count?: true | TradingGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradingGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradingGroupMaxAggregateInputType
  }

  export type GetTradingGroupAggregateType<T extends TradingGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateTradingGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTradingGroup[P]>
      : GetScalarType<T[P], AggregateTradingGroup[P]>
  }




  export type TradingGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradingGroupWhereInput
    orderBy?: TradingGroupOrderByWithAggregationInput | TradingGroupOrderByWithAggregationInput[]
    by: TradingGroupScalarFieldEnum[] | TradingGroupScalarFieldEnum
    having?: TradingGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradingGroupCountAggregateInputType | true
    _min?: TradingGroupMinAggregateInputType
    _max?: TradingGroupMaxAggregateInputType
  }

  export type TradingGroupGroupByOutputType = {
    id: string
    name: string
    baseCoinId: string
    quoteCoinId: string
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: TradingGroupCountAggregateOutputType | null
    _min: TradingGroupMinAggregateOutputType | null
    _max: TradingGroupMaxAggregateOutputType | null
  }

  type GetTradingGroupGroupByPayload<T extends TradingGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradingGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradingGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradingGroupGroupByOutputType[P]>
            : GetScalarType<T[P], TradingGroupGroupByOutputType[P]>
        }
      >
    >


  export type TradingGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    baseCoinId?: boolean
    quoteCoinId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    baseCoin?: boolean | CoinsDefaultArgs<ExtArgs>
    quoteCoin?: boolean | CoinsDefaultArgs<ExtArgs>
    trades?: boolean | TradingGroup$tradesArgs<ExtArgs>
    _count?: boolean | TradingGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradingGroup"]>

  export type TradingGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    baseCoinId?: boolean
    quoteCoinId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    baseCoin?: boolean | CoinsDefaultArgs<ExtArgs>
    quoteCoin?: boolean | CoinsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradingGroup"]>

  export type TradingGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    baseCoinId?: boolean
    quoteCoinId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    baseCoin?: boolean | CoinsDefaultArgs<ExtArgs>
    quoteCoin?: boolean | CoinsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradingGroup"]>

  export type TradingGroupSelectScalar = {
    id?: boolean
    name?: boolean
    baseCoinId?: boolean
    quoteCoinId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type TradingGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "baseCoinId" | "quoteCoinId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["tradingGroup"]>
  export type TradingGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseCoin?: boolean | CoinsDefaultArgs<ExtArgs>
    quoteCoin?: boolean | CoinsDefaultArgs<ExtArgs>
    trades?: boolean | TradingGroup$tradesArgs<ExtArgs>
    _count?: boolean | TradingGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TradingGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseCoin?: boolean | CoinsDefaultArgs<ExtArgs>
    quoteCoin?: boolean | CoinsDefaultArgs<ExtArgs>
  }
  export type TradingGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseCoin?: boolean | CoinsDefaultArgs<ExtArgs>
    quoteCoin?: boolean | CoinsDefaultArgs<ExtArgs>
  }

  export type $TradingGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TradingGroup"
    objects: {
      baseCoin: Prisma.$CoinsPayload<ExtArgs>
      quoteCoin: Prisma.$CoinsPayload<ExtArgs>
      trades: Prisma.$GroupTradePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      baseCoinId: string
      quoteCoinId: string
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["tradingGroup"]>
    composites: {}
  }

  type TradingGroupGetPayload<S extends boolean | null | undefined | TradingGroupDefaultArgs> = $Result.GetResult<Prisma.$TradingGroupPayload, S>

  type TradingGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradingGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradingGroupCountAggregateInputType | true
    }

  export interface TradingGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TradingGroup'], meta: { name: 'TradingGroup' } }
    /**
     * Find zero or one TradingGroup that matches the filter.
     * @param {TradingGroupFindUniqueArgs} args - Arguments to find a TradingGroup
     * @example
     * // Get one TradingGroup
     * const tradingGroup = await prisma.tradingGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradingGroupFindUniqueArgs>(args: SelectSubset<T, TradingGroupFindUniqueArgs<ExtArgs>>): Prisma__TradingGroupClient<$Result.GetResult<Prisma.$TradingGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TradingGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradingGroupFindUniqueOrThrowArgs} args - Arguments to find a TradingGroup
     * @example
     * // Get one TradingGroup
     * const tradingGroup = await prisma.tradingGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradingGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, TradingGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradingGroupClient<$Result.GetResult<Prisma.$TradingGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradingGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingGroupFindFirstArgs} args - Arguments to find a TradingGroup
     * @example
     * // Get one TradingGroup
     * const tradingGroup = await prisma.tradingGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradingGroupFindFirstArgs>(args?: SelectSubset<T, TradingGroupFindFirstArgs<ExtArgs>>): Prisma__TradingGroupClient<$Result.GetResult<Prisma.$TradingGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradingGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingGroupFindFirstOrThrowArgs} args - Arguments to find a TradingGroup
     * @example
     * // Get one TradingGroup
     * const tradingGroup = await prisma.tradingGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradingGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, TradingGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradingGroupClient<$Result.GetResult<Prisma.$TradingGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TradingGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TradingGroups
     * const tradingGroups = await prisma.tradingGroup.findMany()
     * 
     * // Get first 10 TradingGroups
     * const tradingGroups = await prisma.tradingGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradingGroupWithIdOnly = await prisma.tradingGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TradingGroupFindManyArgs>(args?: SelectSubset<T, TradingGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradingGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TradingGroup.
     * @param {TradingGroupCreateArgs} args - Arguments to create a TradingGroup.
     * @example
     * // Create one TradingGroup
     * const TradingGroup = await prisma.tradingGroup.create({
     *   data: {
     *     // ... data to create a TradingGroup
     *   }
     * })
     * 
     */
    create<T extends TradingGroupCreateArgs>(args: SelectSubset<T, TradingGroupCreateArgs<ExtArgs>>): Prisma__TradingGroupClient<$Result.GetResult<Prisma.$TradingGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TradingGroups.
     * @param {TradingGroupCreateManyArgs} args - Arguments to create many TradingGroups.
     * @example
     * // Create many TradingGroups
     * const tradingGroup = await prisma.tradingGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradingGroupCreateManyArgs>(args?: SelectSubset<T, TradingGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TradingGroups and returns the data saved in the database.
     * @param {TradingGroupCreateManyAndReturnArgs} args - Arguments to create many TradingGroups.
     * @example
     * // Create many TradingGroups
     * const tradingGroup = await prisma.tradingGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TradingGroups and only return the `id`
     * const tradingGroupWithIdOnly = await prisma.tradingGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradingGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, TradingGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradingGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TradingGroup.
     * @param {TradingGroupDeleteArgs} args - Arguments to delete one TradingGroup.
     * @example
     * // Delete one TradingGroup
     * const TradingGroup = await prisma.tradingGroup.delete({
     *   where: {
     *     // ... filter to delete one TradingGroup
     *   }
     * })
     * 
     */
    delete<T extends TradingGroupDeleteArgs>(args: SelectSubset<T, TradingGroupDeleteArgs<ExtArgs>>): Prisma__TradingGroupClient<$Result.GetResult<Prisma.$TradingGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TradingGroup.
     * @param {TradingGroupUpdateArgs} args - Arguments to update one TradingGroup.
     * @example
     * // Update one TradingGroup
     * const tradingGroup = await prisma.tradingGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradingGroupUpdateArgs>(args: SelectSubset<T, TradingGroupUpdateArgs<ExtArgs>>): Prisma__TradingGroupClient<$Result.GetResult<Prisma.$TradingGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TradingGroups.
     * @param {TradingGroupDeleteManyArgs} args - Arguments to filter TradingGroups to delete.
     * @example
     * // Delete a few TradingGroups
     * const { count } = await prisma.tradingGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradingGroupDeleteManyArgs>(args?: SelectSubset<T, TradingGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradingGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TradingGroups
     * const tradingGroup = await prisma.tradingGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradingGroupUpdateManyArgs>(args: SelectSubset<T, TradingGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradingGroups and returns the data updated in the database.
     * @param {TradingGroupUpdateManyAndReturnArgs} args - Arguments to update many TradingGroups.
     * @example
     * // Update many TradingGroups
     * const tradingGroup = await prisma.tradingGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TradingGroups and only return the `id`
     * const tradingGroupWithIdOnly = await prisma.tradingGroup.updateManyAndReturn({
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
    updateManyAndReturn<T extends TradingGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, TradingGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradingGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TradingGroup.
     * @param {TradingGroupUpsertArgs} args - Arguments to update or create a TradingGroup.
     * @example
     * // Update or create a TradingGroup
     * const tradingGroup = await prisma.tradingGroup.upsert({
     *   create: {
     *     // ... data to create a TradingGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TradingGroup we want to update
     *   }
     * })
     */
    upsert<T extends TradingGroupUpsertArgs>(args: SelectSubset<T, TradingGroupUpsertArgs<ExtArgs>>): Prisma__TradingGroupClient<$Result.GetResult<Prisma.$TradingGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TradingGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingGroupCountArgs} args - Arguments to filter TradingGroups to count.
     * @example
     * // Count the number of TradingGroups
     * const count = await prisma.tradingGroup.count({
     *   where: {
     *     // ... the filter for the TradingGroups we want to count
     *   }
     * })
    **/
    count<T extends TradingGroupCountArgs>(
      args?: Subset<T, TradingGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradingGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TradingGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TradingGroupAggregateArgs>(args: Subset<T, TradingGroupAggregateArgs>): Prisma.PrismaPromise<GetTradingGroupAggregateType<T>>

    /**
     * Group by TradingGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingGroupGroupByArgs} args - Group by arguments.
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
      T extends TradingGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradingGroupGroupByArgs['orderBy'] }
        : { orderBy?: TradingGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TradingGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradingGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TradingGroup model
   */
  readonly fields: TradingGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TradingGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradingGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    baseCoin<T extends CoinsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoinsDefaultArgs<ExtArgs>>): Prisma__CoinsClient<$Result.GetResult<Prisma.$CoinsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quoteCoin<T extends CoinsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoinsDefaultArgs<ExtArgs>>): Prisma__CoinsClient<$Result.GetResult<Prisma.$CoinsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trades<T extends TradingGroup$tradesArgs<ExtArgs> = {}>(args?: Subset<T, TradingGroup$tradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TradingGroup model
   */
  interface TradingGroupFieldRefs {
    readonly id: FieldRef<"TradingGroup", 'String'>
    readonly name: FieldRef<"TradingGroup", 'String'>
    readonly baseCoinId: FieldRef<"TradingGroup", 'String'>
    readonly quoteCoinId: FieldRef<"TradingGroup", 'String'>
    readonly createdAt: FieldRef<"TradingGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"TradingGroup", 'DateTime'>
    readonly deletedAt: FieldRef<"TradingGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TradingGroup findUnique
   */
  export type TradingGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingGroup
     */
    select?: TradingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingGroup
     */
    omit?: TradingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingGroupInclude<ExtArgs> | null
    /**
     * Filter, which TradingGroup to fetch.
     */
    where: TradingGroupWhereUniqueInput
  }

  /**
   * TradingGroup findUniqueOrThrow
   */
  export type TradingGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingGroup
     */
    select?: TradingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingGroup
     */
    omit?: TradingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingGroupInclude<ExtArgs> | null
    /**
     * Filter, which TradingGroup to fetch.
     */
    where: TradingGroupWhereUniqueInput
  }

  /**
   * TradingGroup findFirst
   */
  export type TradingGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingGroup
     */
    select?: TradingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingGroup
     */
    omit?: TradingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingGroupInclude<ExtArgs> | null
    /**
     * Filter, which TradingGroup to fetch.
     */
    where?: TradingGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradingGroups to fetch.
     */
    orderBy?: TradingGroupOrderByWithRelationInput | TradingGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TradingGroups.
     */
    cursor?: TradingGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradingGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradingGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradingGroups.
     */
    distinct?: TradingGroupScalarFieldEnum | TradingGroupScalarFieldEnum[]
  }

  /**
   * TradingGroup findFirstOrThrow
   */
  export type TradingGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingGroup
     */
    select?: TradingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingGroup
     */
    omit?: TradingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingGroupInclude<ExtArgs> | null
    /**
     * Filter, which TradingGroup to fetch.
     */
    where?: TradingGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradingGroups to fetch.
     */
    orderBy?: TradingGroupOrderByWithRelationInput | TradingGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TradingGroups.
     */
    cursor?: TradingGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradingGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradingGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradingGroups.
     */
    distinct?: TradingGroupScalarFieldEnum | TradingGroupScalarFieldEnum[]
  }

  /**
   * TradingGroup findMany
   */
  export type TradingGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingGroup
     */
    select?: TradingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingGroup
     */
    omit?: TradingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingGroupInclude<ExtArgs> | null
    /**
     * Filter, which TradingGroups to fetch.
     */
    where?: TradingGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradingGroups to fetch.
     */
    orderBy?: TradingGroupOrderByWithRelationInput | TradingGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TradingGroups.
     */
    cursor?: TradingGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradingGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradingGroups.
     */
    skip?: number
    distinct?: TradingGroupScalarFieldEnum | TradingGroupScalarFieldEnum[]
  }

  /**
   * TradingGroup create
   */
  export type TradingGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingGroup
     */
    select?: TradingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingGroup
     */
    omit?: TradingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a TradingGroup.
     */
    data: XOR<TradingGroupCreateInput, TradingGroupUncheckedCreateInput>
  }

  /**
   * TradingGroup createMany
   */
  export type TradingGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TradingGroups.
     */
    data: TradingGroupCreateManyInput | TradingGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TradingGroup createManyAndReturn
   */
  export type TradingGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingGroup
     */
    select?: TradingGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TradingGroup
     */
    omit?: TradingGroupOmit<ExtArgs> | null
    /**
     * The data used to create many TradingGroups.
     */
    data: TradingGroupCreateManyInput | TradingGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TradingGroup update
   */
  export type TradingGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingGroup
     */
    select?: TradingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingGroup
     */
    omit?: TradingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a TradingGroup.
     */
    data: XOR<TradingGroupUpdateInput, TradingGroupUncheckedUpdateInput>
    /**
     * Choose, which TradingGroup to update.
     */
    where: TradingGroupWhereUniqueInput
  }

  /**
   * TradingGroup updateMany
   */
  export type TradingGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TradingGroups.
     */
    data: XOR<TradingGroupUpdateManyMutationInput, TradingGroupUncheckedUpdateManyInput>
    /**
     * Filter which TradingGroups to update
     */
    where?: TradingGroupWhereInput
    /**
     * Limit how many TradingGroups to update.
     */
    limit?: number
  }

  /**
   * TradingGroup updateManyAndReturn
   */
  export type TradingGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingGroup
     */
    select?: TradingGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TradingGroup
     */
    omit?: TradingGroupOmit<ExtArgs> | null
    /**
     * The data used to update TradingGroups.
     */
    data: XOR<TradingGroupUpdateManyMutationInput, TradingGroupUncheckedUpdateManyInput>
    /**
     * Filter which TradingGroups to update
     */
    where?: TradingGroupWhereInput
    /**
     * Limit how many TradingGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TradingGroup upsert
   */
  export type TradingGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingGroup
     */
    select?: TradingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingGroup
     */
    omit?: TradingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the TradingGroup to update in case it exists.
     */
    where: TradingGroupWhereUniqueInput
    /**
     * In case the TradingGroup found by the `where` argument doesn't exist, create a new TradingGroup with this data.
     */
    create: XOR<TradingGroupCreateInput, TradingGroupUncheckedCreateInput>
    /**
     * In case the TradingGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradingGroupUpdateInput, TradingGroupUncheckedUpdateInput>
  }

  /**
   * TradingGroup delete
   */
  export type TradingGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingGroup
     */
    select?: TradingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingGroup
     */
    omit?: TradingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingGroupInclude<ExtArgs> | null
    /**
     * Filter which TradingGroup to delete.
     */
    where: TradingGroupWhereUniqueInput
  }

  /**
   * TradingGroup deleteMany
   */
  export type TradingGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TradingGroups to delete
     */
    where?: TradingGroupWhereInput
    /**
     * Limit how many TradingGroups to delete.
     */
    limit?: number
  }

  /**
   * TradingGroup.trades
   */
  export type TradingGroup$tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTrade
     */
    select?: GroupTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTrade
     */
    omit?: GroupTradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTradeInclude<ExtArgs> | null
    where?: GroupTradeWhereInput
    orderBy?: GroupTradeOrderByWithRelationInput | GroupTradeOrderByWithRelationInput[]
    cursor?: GroupTradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupTradeScalarFieldEnum | GroupTradeScalarFieldEnum[]
  }

  /**
   * TradingGroup without action
   */
  export type TradingGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingGroup
     */
    select?: TradingGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingGroup
     */
    omit?: TradingGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingGroupInclude<ExtArgs> | null
  }


  /**
   * Model GroupTrade
   */

  export type AggregateGroupTrade = {
    _count: GroupTradeCountAggregateOutputType | null
    _avg: GroupTradeAvgAggregateOutputType | null
    _sum: GroupTradeSumAggregateOutputType | null
    _min: GroupTradeMinAggregateOutputType | null
    _max: GroupTradeMaxAggregateOutputType | null
  }

  export type GroupTradeAvgAggregateOutputType = {
    amountBase: number | null
    amountQuote: number | null
    price: number | null
  }

  export type GroupTradeSumAggregateOutputType = {
    amountBase: number | null
    amountQuote: number | null
    price: number | null
  }

  export type GroupTradeMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    amountBase: number | null
    amountQuote: number | null
    price: number | null
    createdAt: Date | null
  }

  export type GroupTradeMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    amountBase: number | null
    amountQuote: number | null
    price: number | null
    createdAt: Date | null
  }

  export type GroupTradeCountAggregateOutputType = {
    id: number
    groupId: number
    userId: number
    amountBase: number
    amountQuote: number
    price: number
    createdAt: number
    _all: number
  }


  export type GroupTradeAvgAggregateInputType = {
    amountBase?: true
    amountQuote?: true
    price?: true
  }

  export type GroupTradeSumAggregateInputType = {
    amountBase?: true
    amountQuote?: true
    price?: true
  }

  export type GroupTradeMinAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    amountBase?: true
    amountQuote?: true
    price?: true
    createdAt?: true
  }

  export type GroupTradeMaxAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    amountBase?: true
    amountQuote?: true
    price?: true
    createdAt?: true
  }

  export type GroupTradeCountAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    amountBase?: true
    amountQuote?: true
    price?: true
    createdAt?: true
    _all?: true
  }

  export type GroupTradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupTrade to aggregate.
     */
    where?: GroupTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTrades to fetch.
     */
    orderBy?: GroupTradeOrderByWithRelationInput | GroupTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupTrades
    **/
    _count?: true | GroupTradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupTradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupTradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupTradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupTradeMaxAggregateInputType
  }

  export type GetGroupTradeAggregateType<T extends GroupTradeAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupTrade[P]>
      : GetScalarType<T[P], AggregateGroupTrade[P]>
  }




  export type GroupTradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupTradeWhereInput
    orderBy?: GroupTradeOrderByWithAggregationInput | GroupTradeOrderByWithAggregationInput[]
    by: GroupTradeScalarFieldEnum[] | GroupTradeScalarFieldEnum
    having?: GroupTradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupTradeCountAggregateInputType | true
    _avg?: GroupTradeAvgAggregateInputType
    _sum?: GroupTradeSumAggregateInputType
    _min?: GroupTradeMinAggregateInputType
    _max?: GroupTradeMaxAggregateInputType
  }

  export type GroupTradeGroupByOutputType = {
    id: string
    groupId: string
    userId: string
    amountBase: number
    amountQuote: number
    price: number
    createdAt: Date
    _count: GroupTradeCountAggregateOutputType | null
    _avg: GroupTradeAvgAggregateOutputType | null
    _sum: GroupTradeSumAggregateOutputType | null
    _min: GroupTradeMinAggregateOutputType | null
    _max: GroupTradeMaxAggregateOutputType | null
  }

  type GetGroupTradeGroupByPayload<T extends GroupTradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupTradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupTradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupTradeGroupByOutputType[P]>
            : GetScalarType<T[P], GroupTradeGroupByOutputType[P]>
        }
      >
    >


  export type GroupTradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    amountBase?: boolean
    amountQuote?: boolean
    price?: boolean
    createdAt?: boolean
    group?: boolean | TradingGroupDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupTrade"]>

  export type GroupTradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    amountBase?: boolean
    amountQuote?: boolean
    price?: boolean
    createdAt?: boolean
    group?: boolean | TradingGroupDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupTrade"]>

  export type GroupTradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    amountBase?: boolean
    amountQuote?: boolean
    price?: boolean
    createdAt?: boolean
    group?: boolean | TradingGroupDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupTrade"]>

  export type GroupTradeSelectScalar = {
    id?: boolean
    groupId?: boolean
    userId?: boolean
    amountBase?: boolean
    amountQuote?: boolean
    price?: boolean
    createdAt?: boolean
  }

  export type GroupTradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "userId" | "amountBase" | "amountQuote" | "price" | "createdAt", ExtArgs["result"]["groupTrade"]>
  export type GroupTradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | TradingGroupDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type GroupTradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | TradingGroupDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type GroupTradeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | TradingGroupDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $GroupTradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupTrade"
    objects: {
      group: Prisma.$TradingGroupPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      userId: string
      amountBase: number
      amountQuote: number
      price: number
      createdAt: Date
    }, ExtArgs["result"]["groupTrade"]>
    composites: {}
  }

  type GroupTradeGetPayload<S extends boolean | null | undefined | GroupTradeDefaultArgs> = $Result.GetResult<Prisma.$GroupTradePayload, S>

  type GroupTradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupTradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupTradeCountAggregateInputType | true
    }

  export interface GroupTradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupTrade'], meta: { name: 'GroupTrade' } }
    /**
     * Find zero or one GroupTrade that matches the filter.
     * @param {GroupTradeFindUniqueArgs} args - Arguments to find a GroupTrade
     * @example
     * // Get one GroupTrade
     * const groupTrade = await prisma.groupTrade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupTradeFindUniqueArgs>(args: SelectSubset<T, GroupTradeFindUniqueArgs<ExtArgs>>): Prisma__GroupTradeClient<$Result.GetResult<Prisma.$GroupTradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupTrade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupTradeFindUniqueOrThrowArgs} args - Arguments to find a GroupTrade
     * @example
     * // Get one GroupTrade
     * const groupTrade = await prisma.groupTrade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupTradeFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupTradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupTradeClient<$Result.GetResult<Prisma.$GroupTradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupTrade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTradeFindFirstArgs} args - Arguments to find a GroupTrade
     * @example
     * // Get one GroupTrade
     * const groupTrade = await prisma.groupTrade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupTradeFindFirstArgs>(args?: SelectSubset<T, GroupTradeFindFirstArgs<ExtArgs>>): Prisma__GroupTradeClient<$Result.GetResult<Prisma.$GroupTradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupTrade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTradeFindFirstOrThrowArgs} args - Arguments to find a GroupTrade
     * @example
     * // Get one GroupTrade
     * const groupTrade = await prisma.groupTrade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupTradeFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupTradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupTradeClient<$Result.GetResult<Prisma.$GroupTradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupTrades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupTrades
     * const groupTrades = await prisma.groupTrade.findMany()
     * 
     * // Get first 10 GroupTrades
     * const groupTrades = await prisma.groupTrade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupTradeWithIdOnly = await prisma.groupTrade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupTradeFindManyArgs>(args?: SelectSubset<T, GroupTradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupTrade.
     * @param {GroupTradeCreateArgs} args - Arguments to create a GroupTrade.
     * @example
     * // Create one GroupTrade
     * const GroupTrade = await prisma.groupTrade.create({
     *   data: {
     *     // ... data to create a GroupTrade
     *   }
     * })
     * 
     */
    create<T extends GroupTradeCreateArgs>(args: SelectSubset<T, GroupTradeCreateArgs<ExtArgs>>): Prisma__GroupTradeClient<$Result.GetResult<Prisma.$GroupTradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupTrades.
     * @param {GroupTradeCreateManyArgs} args - Arguments to create many GroupTrades.
     * @example
     * // Create many GroupTrades
     * const groupTrade = await prisma.groupTrade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupTradeCreateManyArgs>(args?: SelectSubset<T, GroupTradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupTrades and returns the data saved in the database.
     * @param {GroupTradeCreateManyAndReturnArgs} args - Arguments to create many GroupTrades.
     * @example
     * // Create many GroupTrades
     * const groupTrade = await prisma.groupTrade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupTrades and only return the `id`
     * const groupTradeWithIdOnly = await prisma.groupTrade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupTradeCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupTradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupTrade.
     * @param {GroupTradeDeleteArgs} args - Arguments to delete one GroupTrade.
     * @example
     * // Delete one GroupTrade
     * const GroupTrade = await prisma.groupTrade.delete({
     *   where: {
     *     // ... filter to delete one GroupTrade
     *   }
     * })
     * 
     */
    delete<T extends GroupTradeDeleteArgs>(args: SelectSubset<T, GroupTradeDeleteArgs<ExtArgs>>): Prisma__GroupTradeClient<$Result.GetResult<Prisma.$GroupTradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupTrade.
     * @param {GroupTradeUpdateArgs} args - Arguments to update one GroupTrade.
     * @example
     * // Update one GroupTrade
     * const groupTrade = await prisma.groupTrade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupTradeUpdateArgs>(args: SelectSubset<T, GroupTradeUpdateArgs<ExtArgs>>): Prisma__GroupTradeClient<$Result.GetResult<Prisma.$GroupTradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupTrades.
     * @param {GroupTradeDeleteManyArgs} args - Arguments to filter GroupTrades to delete.
     * @example
     * // Delete a few GroupTrades
     * const { count } = await prisma.groupTrade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupTradeDeleteManyArgs>(args?: SelectSubset<T, GroupTradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupTrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupTrades
     * const groupTrade = await prisma.groupTrade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupTradeUpdateManyArgs>(args: SelectSubset<T, GroupTradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupTrades and returns the data updated in the database.
     * @param {GroupTradeUpdateManyAndReturnArgs} args - Arguments to update many GroupTrades.
     * @example
     * // Update many GroupTrades
     * const groupTrade = await prisma.groupTrade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupTrades and only return the `id`
     * const groupTradeWithIdOnly = await prisma.groupTrade.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupTradeUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupTradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupTrade.
     * @param {GroupTradeUpsertArgs} args - Arguments to update or create a GroupTrade.
     * @example
     * // Update or create a GroupTrade
     * const groupTrade = await prisma.groupTrade.upsert({
     *   create: {
     *     // ... data to create a GroupTrade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupTrade we want to update
     *   }
     * })
     */
    upsert<T extends GroupTradeUpsertArgs>(args: SelectSubset<T, GroupTradeUpsertArgs<ExtArgs>>): Prisma__GroupTradeClient<$Result.GetResult<Prisma.$GroupTradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupTrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTradeCountArgs} args - Arguments to filter GroupTrades to count.
     * @example
     * // Count the number of GroupTrades
     * const count = await prisma.groupTrade.count({
     *   where: {
     *     // ... the filter for the GroupTrades we want to count
     *   }
     * })
    **/
    count<T extends GroupTradeCountArgs>(
      args?: Subset<T, GroupTradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupTradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupTrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupTradeAggregateArgs>(args: Subset<T, GroupTradeAggregateArgs>): Prisma.PrismaPromise<GetGroupTradeAggregateType<T>>

    /**
     * Group by GroupTrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTradeGroupByArgs} args - Group by arguments.
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
      T extends GroupTradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupTradeGroupByArgs['orderBy'] }
        : { orderBy?: GroupTradeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupTradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupTrade model
   */
  readonly fields: GroupTradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupTrade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupTradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends TradingGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TradingGroupDefaultArgs<ExtArgs>>): Prisma__TradingGroupClient<$Result.GetResult<Prisma.$TradingGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroupTrade model
   */
  interface GroupTradeFieldRefs {
    readonly id: FieldRef<"GroupTrade", 'String'>
    readonly groupId: FieldRef<"GroupTrade", 'String'>
    readonly userId: FieldRef<"GroupTrade", 'String'>
    readonly amountBase: FieldRef<"GroupTrade", 'Float'>
    readonly amountQuote: FieldRef<"GroupTrade", 'Float'>
    readonly price: FieldRef<"GroupTrade", 'Float'>
    readonly createdAt: FieldRef<"GroupTrade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupTrade findUnique
   */
  export type GroupTradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTrade
     */
    select?: GroupTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTrade
     */
    omit?: GroupTradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTradeInclude<ExtArgs> | null
    /**
     * Filter, which GroupTrade to fetch.
     */
    where: GroupTradeWhereUniqueInput
  }

  /**
   * GroupTrade findUniqueOrThrow
   */
  export type GroupTradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTrade
     */
    select?: GroupTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTrade
     */
    omit?: GroupTradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTradeInclude<ExtArgs> | null
    /**
     * Filter, which GroupTrade to fetch.
     */
    where: GroupTradeWhereUniqueInput
  }

  /**
   * GroupTrade findFirst
   */
  export type GroupTradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTrade
     */
    select?: GroupTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTrade
     */
    omit?: GroupTradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTradeInclude<ExtArgs> | null
    /**
     * Filter, which GroupTrade to fetch.
     */
    where?: GroupTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTrades to fetch.
     */
    orderBy?: GroupTradeOrderByWithRelationInput | GroupTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupTrades.
     */
    cursor?: GroupTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupTrades.
     */
    distinct?: GroupTradeScalarFieldEnum | GroupTradeScalarFieldEnum[]
  }

  /**
   * GroupTrade findFirstOrThrow
   */
  export type GroupTradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTrade
     */
    select?: GroupTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTrade
     */
    omit?: GroupTradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTradeInclude<ExtArgs> | null
    /**
     * Filter, which GroupTrade to fetch.
     */
    where?: GroupTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTrades to fetch.
     */
    orderBy?: GroupTradeOrderByWithRelationInput | GroupTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupTrades.
     */
    cursor?: GroupTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupTrades.
     */
    distinct?: GroupTradeScalarFieldEnum | GroupTradeScalarFieldEnum[]
  }

  /**
   * GroupTrade findMany
   */
  export type GroupTradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTrade
     */
    select?: GroupTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTrade
     */
    omit?: GroupTradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTradeInclude<ExtArgs> | null
    /**
     * Filter, which GroupTrades to fetch.
     */
    where?: GroupTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTrades to fetch.
     */
    orderBy?: GroupTradeOrderByWithRelationInput | GroupTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupTrades.
     */
    cursor?: GroupTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTrades.
     */
    skip?: number
    distinct?: GroupTradeScalarFieldEnum | GroupTradeScalarFieldEnum[]
  }

  /**
   * GroupTrade create
   */
  export type GroupTradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTrade
     */
    select?: GroupTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTrade
     */
    omit?: GroupTradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTradeInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupTrade.
     */
    data: XOR<GroupTradeCreateInput, GroupTradeUncheckedCreateInput>
  }

  /**
   * GroupTrade createMany
   */
  export type GroupTradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupTrades.
     */
    data: GroupTradeCreateManyInput | GroupTradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupTrade createManyAndReturn
   */
  export type GroupTradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTrade
     */
    select?: GroupTradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTrade
     */
    omit?: GroupTradeOmit<ExtArgs> | null
    /**
     * The data used to create many GroupTrades.
     */
    data: GroupTradeCreateManyInput | GroupTradeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTradeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupTrade update
   */
  export type GroupTradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTrade
     */
    select?: GroupTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTrade
     */
    omit?: GroupTradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTradeInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupTrade.
     */
    data: XOR<GroupTradeUpdateInput, GroupTradeUncheckedUpdateInput>
    /**
     * Choose, which GroupTrade to update.
     */
    where: GroupTradeWhereUniqueInput
  }

  /**
   * GroupTrade updateMany
   */
  export type GroupTradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupTrades.
     */
    data: XOR<GroupTradeUpdateManyMutationInput, GroupTradeUncheckedUpdateManyInput>
    /**
     * Filter which GroupTrades to update
     */
    where?: GroupTradeWhereInput
    /**
     * Limit how many GroupTrades to update.
     */
    limit?: number
  }

  /**
   * GroupTrade updateManyAndReturn
   */
  export type GroupTradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTrade
     */
    select?: GroupTradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTrade
     */
    omit?: GroupTradeOmit<ExtArgs> | null
    /**
     * The data used to update GroupTrades.
     */
    data: XOR<GroupTradeUpdateManyMutationInput, GroupTradeUncheckedUpdateManyInput>
    /**
     * Filter which GroupTrades to update
     */
    where?: GroupTradeWhereInput
    /**
     * Limit how many GroupTrades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTradeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupTrade upsert
   */
  export type GroupTradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTrade
     */
    select?: GroupTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTrade
     */
    omit?: GroupTradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTradeInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupTrade to update in case it exists.
     */
    where: GroupTradeWhereUniqueInput
    /**
     * In case the GroupTrade found by the `where` argument doesn't exist, create a new GroupTrade with this data.
     */
    create: XOR<GroupTradeCreateInput, GroupTradeUncheckedCreateInput>
    /**
     * In case the GroupTrade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupTradeUpdateInput, GroupTradeUncheckedUpdateInput>
  }

  /**
   * GroupTrade delete
   */
  export type GroupTradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTrade
     */
    select?: GroupTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTrade
     */
    omit?: GroupTradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTradeInclude<ExtArgs> | null
    /**
     * Filter which GroupTrade to delete.
     */
    where: GroupTradeWhereUniqueInput
  }

  /**
   * GroupTrade deleteMany
   */
  export type GroupTradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupTrades to delete
     */
    where?: GroupTradeWhereInput
    /**
     * Limit how many GroupTrades to delete.
     */
    limit?: number
  }

  /**
   * GroupTrade without action
   */
  export type GroupTradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTrade
     */
    select?: GroupTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTrade
     */
    omit?: GroupTradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTradeInclude<ExtArgs> | null
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
    rank: 'rank',
    volume: 'volume',
    isVisible: 'isVisible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CoinsScalarFieldEnum = (typeof CoinsScalarFieldEnum)[keyof typeof CoinsScalarFieldEnum]


  export const DevicesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fcmToken: 'fcmToken',
    archive: 'archive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type DevicesScalarFieldEnum = (typeof DevicesScalarFieldEnum)[keyof typeof DevicesScalarFieldEnum]


  export const UserWalletScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    currency: 'currency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserWalletScalarFieldEnum = (typeof UserWalletScalarFieldEnum)[keyof typeof UserWalletScalarFieldEnum]


  export const AppConfigScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AppConfigScalarFieldEnum = (typeof AppConfigScalarFieldEnum)[keyof typeof AppConfigScalarFieldEnum]


  export const TradingGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    baseCoinId: 'baseCoinId',
    quoteCoinId: 'quoteCoinId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type TradingGroupScalarFieldEnum = (typeof TradingGroupScalarFieldEnum)[keyof typeof TradingGroupScalarFieldEnum]


  export const GroupTradeScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    userId: 'userId',
    amountBase: 'amountBase',
    amountQuote: 'amountQuote',
    price: 'price',
    createdAt: 'createdAt'
  };

  export type GroupTradeScalarFieldEnum = (typeof GroupTradeScalarFieldEnum)[keyof typeof GroupTradeScalarFieldEnum]


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
    userRoleMapping?: UserRoleMappingListRelationFilter
    devices?: DevicesListRelationFilter
    userWallet?: XOR<UserWalletNullableScalarRelationFilter, UserWalletWhereInput> | null
    groupTrades?: GroupTradeListRelationFilter
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
    userRoleMapping?: UserRoleMappingOrderByRelationAggregateInput
    devices?: DevicesOrderByRelationAggregateInput
    userWallet?: UserWalletOrderByWithRelationInput
    groupTrades?: GroupTradeOrderByRelationAggregateInput
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
    userRoleMapping?: UserRoleMappingListRelationFilter
    devices?: DevicesListRelationFilter
    userWallet?: XOR<UserWalletNullableScalarRelationFilter, UserWalletWhereInput> | null
    groupTrades?: GroupTradeListRelationFilter
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
    volume?: IntFilter<"Coins"> | number
    isVisible?: BoolFilter<"Coins"> | boolean
    createdAt?: DateTimeFilter<"Coins"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Coins"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Coins"> | Date | string | null
    tradingGroupBase?: TradingGroupListRelationFilter
    tradingGroupQuote?: TradingGroupListRelationFilter
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
    volume?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    tradingGroupBase?: TradingGroupOrderByRelationAggregateInput
    tradingGroupQuote?: TradingGroupOrderByRelationAggregateInput
  }

  export type CoinsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    coinId?: bigint | number
    AND?: CoinsWhereInput | CoinsWhereInput[]
    OR?: CoinsWhereInput[]
    NOT?: CoinsWhereInput | CoinsWhereInput[]
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
    volume?: IntFilter<"Coins"> | number
    isVisible?: BoolFilter<"Coins"> | boolean
    createdAt?: DateTimeFilter<"Coins"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Coins"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Coins"> | Date | string | null
    tradingGroupBase?: TradingGroupListRelationFilter
    tradingGroupQuote?: TradingGroupListRelationFilter
  }, "id" | "coinId">

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
    volume?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
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
    volume?: IntWithAggregatesFilter<"Coins"> | number
    isVisible?: BoolWithAggregatesFilter<"Coins"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Coins"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Coins"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Coins"> | Date | string | null
  }

  export type DevicesWhereInput = {
    AND?: DevicesWhereInput | DevicesWhereInput[]
    OR?: DevicesWhereInput[]
    NOT?: DevicesWhereInput | DevicesWhereInput[]
    id?: StringFilter<"Devices"> | string
    userId?: StringFilter<"Devices"> | string
    fcmToken?: StringNullableFilter<"Devices"> | string | null
    archive?: StringNullableFilter<"Devices"> | string | null
    createdAt?: DateTimeFilter<"Devices"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Devices"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Devices"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type DevicesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fcmToken?: SortOrderInput | SortOrder
    archive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type DevicesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DevicesWhereInput | DevicesWhereInput[]
    OR?: DevicesWhereInput[]
    NOT?: DevicesWhereInput | DevicesWhereInput[]
    userId?: StringFilter<"Devices"> | string
    fcmToken?: StringNullableFilter<"Devices"> | string | null
    archive?: StringNullableFilter<"Devices"> | string | null
    createdAt?: DateTimeFilter<"Devices"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Devices"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Devices"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type DevicesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fcmToken?: SortOrderInput | SortOrder
    archive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: DevicesCountOrderByAggregateInput
    _max?: DevicesMaxOrderByAggregateInput
    _min?: DevicesMinOrderByAggregateInput
  }

  export type DevicesScalarWhereWithAggregatesInput = {
    AND?: DevicesScalarWhereWithAggregatesInput | DevicesScalarWhereWithAggregatesInput[]
    OR?: DevicesScalarWhereWithAggregatesInput[]
    NOT?: DevicesScalarWhereWithAggregatesInput | DevicesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Devices"> | string
    userId?: StringWithAggregatesFilter<"Devices"> | string
    fcmToken?: StringNullableWithAggregatesFilter<"Devices"> | string | null
    archive?: StringNullableWithAggregatesFilter<"Devices"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Devices"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Devices"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Devices"> | Date | string | null
  }

  export type UserWalletWhereInput = {
    AND?: UserWalletWhereInput | UserWalletWhereInput[]
    OR?: UserWalletWhereInput[]
    NOT?: UserWalletWhereInput | UserWalletWhereInput[]
    id?: StringFilter<"UserWallet"> | string
    userId?: StringFilter<"UserWallet"> | string
    amount?: IntFilter<"UserWallet"> | number
    currency?: StringFilter<"UserWallet"> | string
    createdAt?: DateTimeFilter<"UserWallet"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserWallet"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserWallet"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type UserWalletOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type UserWalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserWalletWhereInput | UserWalletWhereInput[]
    OR?: UserWalletWhereInput[]
    NOT?: UserWalletWhereInput | UserWalletWhereInput[]
    amount?: IntFilter<"UserWallet"> | number
    currency?: StringFilter<"UserWallet"> | string
    createdAt?: DateTimeFilter<"UserWallet"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserWallet"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"UserWallet"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "userId">

  export type UserWalletOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserWalletCountOrderByAggregateInput
    _avg?: UserWalletAvgOrderByAggregateInput
    _max?: UserWalletMaxOrderByAggregateInput
    _min?: UserWalletMinOrderByAggregateInput
    _sum?: UserWalletSumOrderByAggregateInput
  }

  export type UserWalletScalarWhereWithAggregatesInput = {
    AND?: UserWalletScalarWhereWithAggregatesInput | UserWalletScalarWhereWithAggregatesInput[]
    OR?: UserWalletScalarWhereWithAggregatesInput[]
    NOT?: UserWalletScalarWhereWithAggregatesInput | UserWalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserWallet"> | string
    userId?: StringWithAggregatesFilter<"UserWallet"> | string
    amount?: IntWithAggregatesFilter<"UserWallet"> | number
    currency?: StringWithAggregatesFilter<"UserWallet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserWallet"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"UserWallet"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserWallet"> | Date | string | null
  }

  export type AppConfigWhereInput = {
    AND?: AppConfigWhereInput | AppConfigWhereInput[]
    OR?: AppConfigWhereInput[]
    NOT?: AppConfigWhereInput | AppConfigWhereInput[]
    id?: StringFilter<"AppConfig"> | string
    key?: StringFilter<"AppConfig"> | string
    value?: StringFilter<"AppConfig"> | string
    type?: StringFilter<"AppConfig"> | string
    createdAt?: DateTimeFilter<"AppConfig"> | Date | string
    updatedAt?: DateTimeNullableFilter<"AppConfig"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"AppConfig"> | Date | string | null
  }

  export type AppConfigOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
  }

  export type AppConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppConfigWhereInput | AppConfigWhereInput[]
    OR?: AppConfigWhereInput[]
    NOT?: AppConfigWhereInput | AppConfigWhereInput[]
    key?: StringFilter<"AppConfig"> | string
    value?: StringFilter<"AppConfig"> | string
    type?: StringFilter<"AppConfig"> | string
    createdAt?: DateTimeFilter<"AppConfig"> | Date | string
    updatedAt?: DateTimeNullableFilter<"AppConfig"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"AppConfig"> | Date | string | null
  }, "id">

  export type AppConfigOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AppConfigCountOrderByAggregateInput
    _max?: AppConfigMaxOrderByAggregateInput
    _min?: AppConfigMinOrderByAggregateInput
  }

  export type AppConfigScalarWhereWithAggregatesInput = {
    AND?: AppConfigScalarWhereWithAggregatesInput | AppConfigScalarWhereWithAggregatesInput[]
    OR?: AppConfigScalarWhereWithAggregatesInput[]
    NOT?: AppConfigScalarWhereWithAggregatesInput | AppConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppConfig"> | string
    key?: StringWithAggregatesFilter<"AppConfig"> | string
    value?: StringWithAggregatesFilter<"AppConfig"> | string
    type?: StringWithAggregatesFilter<"AppConfig"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AppConfig"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"AppConfig"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"AppConfig"> | Date | string | null
  }

  export type TradingGroupWhereInput = {
    AND?: TradingGroupWhereInput | TradingGroupWhereInput[]
    OR?: TradingGroupWhereInput[]
    NOT?: TradingGroupWhereInput | TradingGroupWhereInput[]
    id?: StringFilter<"TradingGroup"> | string
    name?: StringFilter<"TradingGroup"> | string
    baseCoinId?: StringFilter<"TradingGroup"> | string
    quoteCoinId?: StringFilter<"TradingGroup"> | string
    createdAt?: DateTimeFilter<"TradingGroup"> | Date | string
    updatedAt?: DateTimeNullableFilter<"TradingGroup"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"TradingGroup"> | Date | string | null
    baseCoin?: XOR<CoinsScalarRelationFilter, CoinsWhereInput>
    quoteCoin?: XOR<CoinsScalarRelationFilter, CoinsWhereInput>
    trades?: GroupTradeListRelationFilter
  }

  export type TradingGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    baseCoinId?: SortOrder
    quoteCoinId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    baseCoin?: CoinsOrderByWithRelationInput
    quoteCoin?: CoinsOrderByWithRelationInput
    trades?: GroupTradeOrderByRelationAggregateInput
  }

  export type TradingGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TradingGroupWhereInput | TradingGroupWhereInput[]
    OR?: TradingGroupWhereInput[]
    NOT?: TradingGroupWhereInput | TradingGroupWhereInput[]
    baseCoinId?: StringFilter<"TradingGroup"> | string
    quoteCoinId?: StringFilter<"TradingGroup"> | string
    createdAt?: DateTimeFilter<"TradingGroup"> | Date | string
    updatedAt?: DateTimeNullableFilter<"TradingGroup"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"TradingGroup"> | Date | string | null
    baseCoin?: XOR<CoinsScalarRelationFilter, CoinsWhereInput>
    quoteCoin?: XOR<CoinsScalarRelationFilter, CoinsWhereInput>
    trades?: GroupTradeListRelationFilter
  }, "id" | "name">

  export type TradingGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    baseCoinId?: SortOrder
    quoteCoinId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TradingGroupCountOrderByAggregateInput
    _max?: TradingGroupMaxOrderByAggregateInput
    _min?: TradingGroupMinOrderByAggregateInput
  }

  export type TradingGroupScalarWhereWithAggregatesInput = {
    AND?: TradingGroupScalarWhereWithAggregatesInput | TradingGroupScalarWhereWithAggregatesInput[]
    OR?: TradingGroupScalarWhereWithAggregatesInput[]
    NOT?: TradingGroupScalarWhereWithAggregatesInput | TradingGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TradingGroup"> | string
    name?: StringWithAggregatesFilter<"TradingGroup"> | string
    baseCoinId?: StringWithAggregatesFilter<"TradingGroup"> | string
    quoteCoinId?: StringWithAggregatesFilter<"TradingGroup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TradingGroup"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"TradingGroup"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TradingGroup"> | Date | string | null
  }

  export type GroupTradeWhereInput = {
    AND?: GroupTradeWhereInput | GroupTradeWhereInput[]
    OR?: GroupTradeWhereInput[]
    NOT?: GroupTradeWhereInput | GroupTradeWhereInput[]
    id?: StringFilter<"GroupTrade"> | string
    groupId?: StringFilter<"GroupTrade"> | string
    userId?: StringFilter<"GroupTrade"> | string
    amountBase?: FloatFilter<"GroupTrade"> | number
    amountQuote?: FloatFilter<"GroupTrade"> | number
    price?: FloatFilter<"GroupTrade"> | number
    createdAt?: DateTimeFilter<"GroupTrade"> | Date | string
    group?: XOR<TradingGroupScalarRelationFilter, TradingGroupWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type GroupTradeOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    amountBase?: SortOrder
    amountQuote?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    group?: TradingGroupOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type GroupTradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupTradeWhereInput | GroupTradeWhereInput[]
    OR?: GroupTradeWhereInput[]
    NOT?: GroupTradeWhereInput | GroupTradeWhereInput[]
    groupId?: StringFilter<"GroupTrade"> | string
    userId?: StringFilter<"GroupTrade"> | string
    amountBase?: FloatFilter<"GroupTrade"> | number
    amountQuote?: FloatFilter<"GroupTrade"> | number
    price?: FloatFilter<"GroupTrade"> | number
    createdAt?: DateTimeFilter<"GroupTrade"> | Date | string
    group?: XOR<TradingGroupScalarRelationFilter, TradingGroupWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type GroupTradeOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    amountBase?: SortOrder
    amountQuote?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    _count?: GroupTradeCountOrderByAggregateInput
    _avg?: GroupTradeAvgOrderByAggregateInput
    _max?: GroupTradeMaxOrderByAggregateInput
    _min?: GroupTradeMinOrderByAggregateInput
    _sum?: GroupTradeSumOrderByAggregateInput
  }

  export type GroupTradeScalarWhereWithAggregatesInput = {
    AND?: GroupTradeScalarWhereWithAggregatesInput | GroupTradeScalarWhereWithAggregatesInput[]
    OR?: GroupTradeScalarWhereWithAggregatesInput[]
    NOT?: GroupTradeScalarWhereWithAggregatesInput | GroupTradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupTrade"> | string
    groupId?: StringWithAggregatesFilter<"GroupTrade"> | string
    userId?: StringWithAggregatesFilter<"GroupTrade"> | string
    amountBase?: FloatWithAggregatesFilter<"GroupTrade"> | number
    amountQuote?: FloatWithAggregatesFilter<"GroupTrade"> | number
    price?: FloatWithAggregatesFilter<"GroupTrade"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GroupTrade"> | Date | string
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
    userRoleMapping?: UserRoleMappingCreateNestedManyWithoutUsersInput
    devices?: DevicesCreateNestedManyWithoutUserInput
    userWallet?: UserWalletCreateNestedOneWithoutUserInput
    groupTrades?: GroupTradeCreateNestedManyWithoutUserInput
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
    userRoleMapping?: UserRoleMappingUncheckedCreateNestedManyWithoutUsersInput
    devices?: DevicesUncheckedCreateNestedManyWithoutUserInput
    userWallet?: UserWalletUncheckedCreateNestedOneWithoutUserInput
    groupTrades?: GroupTradeUncheckedCreateNestedManyWithoutUserInput
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
    userRoleMapping?: UserRoleMappingUpdateManyWithoutUsersNestedInput
    devices?: DevicesUpdateManyWithoutUserNestedInput
    userWallet?: UserWalletUpdateOneWithoutUserNestedInput
    groupTrades?: GroupTradeUpdateManyWithoutUserNestedInput
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
    userRoleMapping?: UserRoleMappingUncheckedUpdateManyWithoutUsersNestedInput
    devices?: DevicesUncheckedUpdateManyWithoutUserNestedInput
    userWallet?: UserWalletUncheckedUpdateOneWithoutUserNestedInput
    groupTrades?: GroupTradeUncheckedUpdateManyWithoutUserNestedInput
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
    users: UsersCreateNestedOneWithoutUserRoleMappingInput
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
    users?: UsersUpdateOneRequiredWithoutUserRoleMappingNestedInput
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
    volume?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    tradingGroupBase?: TradingGroupCreateNestedManyWithoutBaseCoinInput
    tradingGroupQuote?: TradingGroupCreateNestedManyWithoutQuoteCoinInput
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
    volume?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    tradingGroupBase?: TradingGroupUncheckedCreateNestedManyWithoutBaseCoinInput
    tradingGroupQuote?: TradingGroupUncheckedCreateNestedManyWithoutQuoteCoinInput
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
    volume?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradingGroupBase?: TradingGroupUpdateManyWithoutBaseCoinNestedInput
    tradingGroupQuote?: TradingGroupUpdateManyWithoutQuoteCoinNestedInput
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
    volume?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradingGroupBase?: TradingGroupUncheckedUpdateManyWithoutBaseCoinNestedInput
    tradingGroupQuote?: TradingGroupUncheckedUpdateManyWithoutQuoteCoinNestedInput
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
    volume?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
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
    volume?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    volume?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DevicesCreateInput = {
    id?: string
    fcmToken?: string | null
    archive?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user: UsersCreateNestedOneWithoutDevicesInput
  }

  export type DevicesUncheckedCreateInput = {
    id?: string
    userId: string
    fcmToken?: string | null
    archive?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type DevicesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DevicesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DevicesCreateManyInput = {
    id?: string
    userId: string
    fcmToken?: string | null
    archive?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type DevicesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DevicesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserWalletCreateInput = {
    id?: string
    amount: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    user: UsersCreateNestedOneWithoutUserWalletInput
  }

  export type UserWalletUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserWalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneRequiredWithoutUserWalletNestedInput
  }

  export type UserWalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserWalletCreateManyInput = {
    id?: string
    userId: string
    amount: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserWalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserWalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppConfigCreateInput = {
    id?: string
    key: string
    value: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AppConfigUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AppConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppConfigCreateManyInput = {
    id?: string
    key: string
    value: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type AppConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TradingGroupCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    baseCoin: CoinsCreateNestedOneWithoutTradingGroupBaseInput
    quoteCoin: CoinsCreateNestedOneWithoutTradingGroupQuoteInput
    trades?: GroupTradeCreateNestedManyWithoutGroupInput
  }

  export type TradingGroupUncheckedCreateInput = {
    id?: string
    name: string
    baseCoinId: string
    quoteCoinId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    trades?: GroupTradeUncheckedCreateNestedManyWithoutGroupInput
  }

  export type TradingGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baseCoin?: CoinsUpdateOneRequiredWithoutTradingGroupBaseNestedInput
    quoteCoin?: CoinsUpdateOneRequiredWithoutTradingGroupQuoteNestedInput
    trades?: GroupTradeUpdateManyWithoutGroupNestedInput
  }

  export type TradingGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseCoinId?: StringFieldUpdateOperationsInput | string
    quoteCoinId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trades?: GroupTradeUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type TradingGroupCreateManyInput = {
    id?: string
    name: string
    baseCoinId: string
    quoteCoinId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type TradingGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TradingGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseCoinId?: StringFieldUpdateOperationsInput | string
    quoteCoinId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupTradeCreateInput = {
    id?: string
    amountBase: number
    amountQuote: number
    price: number
    createdAt?: Date | string
    group: TradingGroupCreateNestedOneWithoutTradesInput
    user: UsersCreateNestedOneWithoutGroupTradesInput
  }

  export type GroupTradeUncheckedCreateInput = {
    id?: string
    groupId: string
    userId: string
    amountBase: number
    amountQuote: number
    price: number
    createdAt?: Date | string
  }

  export type GroupTradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountBase?: FloatFieldUpdateOperationsInput | number
    amountQuote?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: TradingGroupUpdateOneRequiredWithoutTradesNestedInput
    user?: UsersUpdateOneRequiredWithoutGroupTradesNestedInput
  }

  export type GroupTradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountBase?: FloatFieldUpdateOperationsInput | number
    amountQuote?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupTradeCreateManyInput = {
    id?: string
    groupId: string
    userId: string
    amountBase: number
    amountQuote: number
    price: number
    createdAt?: Date | string
  }

  export type GroupTradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountBase?: FloatFieldUpdateOperationsInput | number
    amountQuote?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupTradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountBase?: FloatFieldUpdateOperationsInput | number
    amountQuote?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DevicesListRelationFilter = {
    every?: DevicesWhereInput
    some?: DevicesWhereInput
    none?: DevicesWhereInput
  }

  export type UserWalletNullableScalarRelationFilter = {
    is?: UserWalletWhereInput | null
    isNot?: UserWalletWhereInput | null
  }

  export type GroupTradeListRelationFilter = {
    every?: GroupTradeWhereInput
    some?: GroupTradeWhereInput
    none?: GroupTradeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserRoleMappingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DevicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupTradeOrderByRelationAggregateInput = {
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

  export type TradingGroupListRelationFilter = {
    every?: TradingGroupWhereInput
    some?: TradingGroupWhereInput
    none?: TradingGroupWhereInput
  }

  export type TradingGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
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
    volume?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CoinsAvgOrderByAggregateInput = {
    coinId?: SortOrder
    rank?: SortOrder
    volume?: SortOrder
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
    volume?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
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
    volume?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CoinsSumOrderByAggregateInput = {
    coinId?: SortOrder
    rank?: SortOrder
    volume?: SortOrder
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

  export type DevicesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fcmToken?: SortOrder
    archive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DevicesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fcmToken?: SortOrder
    archive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DevicesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fcmToken?: SortOrder
    archive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserWalletCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserWalletAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type UserWalletMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserWalletMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserWalletSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AppConfigCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AppConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AppConfigMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CoinsScalarRelationFilter = {
    is?: CoinsWhereInput
    isNot?: CoinsWhereInput
  }

  export type TradingGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    baseCoinId?: SortOrder
    quoteCoinId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TradingGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    baseCoinId?: SortOrder
    quoteCoinId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TradingGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    baseCoinId?: SortOrder
    quoteCoinId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TradingGroupScalarRelationFilter = {
    is?: TradingGroupWhereInput
    isNot?: TradingGroupWhereInput
  }

  export type GroupTradeCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    amountBase?: SortOrder
    amountQuote?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupTradeAvgOrderByAggregateInput = {
    amountBase?: SortOrder
    amountQuote?: SortOrder
    price?: SortOrder
  }

  export type GroupTradeMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    amountBase?: SortOrder
    amountQuote?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupTradeMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    amountBase?: SortOrder
    amountQuote?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupTradeSumOrderByAggregateInput = {
    amountBase?: SortOrder
    amountQuote?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserRoleMappingCreateNestedManyWithoutUsersInput = {
    create?: XOR<UserRoleMappingCreateWithoutUsersInput, UserRoleMappingUncheckedCreateWithoutUsersInput> | UserRoleMappingCreateWithoutUsersInput[] | UserRoleMappingUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserRoleMappingCreateOrConnectWithoutUsersInput | UserRoleMappingCreateOrConnectWithoutUsersInput[]
    createMany?: UserRoleMappingCreateManyUsersInputEnvelope
    connect?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
  }

  export type DevicesCreateNestedManyWithoutUserInput = {
    create?: XOR<DevicesCreateWithoutUserInput, DevicesUncheckedCreateWithoutUserInput> | DevicesCreateWithoutUserInput[] | DevicesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DevicesCreateOrConnectWithoutUserInput | DevicesCreateOrConnectWithoutUserInput[]
    createMany?: DevicesCreateManyUserInputEnvelope
    connect?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
  }

  export type UserWalletCreateNestedOneWithoutUserInput = {
    create?: XOR<UserWalletCreateWithoutUserInput, UserWalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserWalletCreateOrConnectWithoutUserInput
    connect?: UserWalletWhereUniqueInput
  }

  export type GroupTradeCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupTradeCreateWithoutUserInput, GroupTradeUncheckedCreateWithoutUserInput> | GroupTradeCreateWithoutUserInput[] | GroupTradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupTradeCreateOrConnectWithoutUserInput | GroupTradeCreateOrConnectWithoutUserInput[]
    createMany?: GroupTradeCreateManyUserInputEnvelope
    connect?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
  }

  export type UserRoleMappingUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<UserRoleMappingCreateWithoutUsersInput, UserRoleMappingUncheckedCreateWithoutUsersInput> | UserRoleMappingCreateWithoutUsersInput[] | UserRoleMappingUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserRoleMappingCreateOrConnectWithoutUsersInput | UserRoleMappingCreateOrConnectWithoutUsersInput[]
    createMany?: UserRoleMappingCreateManyUsersInputEnvelope
    connect?: UserRoleMappingWhereUniqueInput | UserRoleMappingWhereUniqueInput[]
  }

  export type DevicesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DevicesCreateWithoutUserInput, DevicesUncheckedCreateWithoutUserInput> | DevicesCreateWithoutUserInput[] | DevicesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DevicesCreateOrConnectWithoutUserInput | DevicesCreateOrConnectWithoutUserInput[]
    createMany?: DevicesCreateManyUserInputEnvelope
    connect?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
  }

  export type UserWalletUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserWalletCreateWithoutUserInput, UserWalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserWalletCreateOrConnectWithoutUserInput
    connect?: UserWalletWhereUniqueInput
  }

  export type GroupTradeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupTradeCreateWithoutUserInput, GroupTradeUncheckedCreateWithoutUserInput> | GroupTradeCreateWithoutUserInput[] | GroupTradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupTradeCreateOrConnectWithoutUserInput | GroupTradeCreateOrConnectWithoutUserInput[]
    createMany?: GroupTradeCreateManyUserInputEnvelope
    connect?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
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

  export type DevicesUpdateManyWithoutUserNestedInput = {
    create?: XOR<DevicesCreateWithoutUserInput, DevicesUncheckedCreateWithoutUserInput> | DevicesCreateWithoutUserInput[] | DevicesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DevicesCreateOrConnectWithoutUserInput | DevicesCreateOrConnectWithoutUserInput[]
    upsert?: DevicesUpsertWithWhereUniqueWithoutUserInput | DevicesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DevicesCreateManyUserInputEnvelope
    set?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
    disconnect?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
    delete?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
    connect?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
    update?: DevicesUpdateWithWhereUniqueWithoutUserInput | DevicesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DevicesUpdateManyWithWhereWithoutUserInput | DevicesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DevicesScalarWhereInput | DevicesScalarWhereInput[]
  }

  export type UserWalletUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserWalletCreateWithoutUserInput, UserWalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserWalletCreateOrConnectWithoutUserInput
    upsert?: UserWalletUpsertWithoutUserInput
    disconnect?: UserWalletWhereInput | boolean
    delete?: UserWalletWhereInput | boolean
    connect?: UserWalletWhereUniqueInput
    update?: XOR<XOR<UserWalletUpdateToOneWithWhereWithoutUserInput, UserWalletUpdateWithoutUserInput>, UserWalletUncheckedUpdateWithoutUserInput>
  }

  export type GroupTradeUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupTradeCreateWithoutUserInput, GroupTradeUncheckedCreateWithoutUserInput> | GroupTradeCreateWithoutUserInput[] | GroupTradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupTradeCreateOrConnectWithoutUserInput | GroupTradeCreateOrConnectWithoutUserInput[]
    upsert?: GroupTradeUpsertWithWhereUniqueWithoutUserInput | GroupTradeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupTradeCreateManyUserInputEnvelope
    set?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
    disconnect?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
    delete?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
    connect?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
    update?: GroupTradeUpdateWithWhereUniqueWithoutUserInput | GroupTradeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupTradeUpdateManyWithWhereWithoutUserInput | GroupTradeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupTradeScalarWhereInput | GroupTradeScalarWhereInput[]
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

  export type DevicesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DevicesCreateWithoutUserInput, DevicesUncheckedCreateWithoutUserInput> | DevicesCreateWithoutUserInput[] | DevicesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DevicesCreateOrConnectWithoutUserInput | DevicesCreateOrConnectWithoutUserInput[]
    upsert?: DevicesUpsertWithWhereUniqueWithoutUserInput | DevicesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DevicesCreateManyUserInputEnvelope
    set?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
    disconnect?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
    delete?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
    connect?: DevicesWhereUniqueInput | DevicesWhereUniqueInput[]
    update?: DevicesUpdateWithWhereUniqueWithoutUserInput | DevicesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DevicesUpdateManyWithWhereWithoutUserInput | DevicesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DevicesScalarWhereInput | DevicesScalarWhereInput[]
  }

  export type UserWalletUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserWalletCreateWithoutUserInput, UserWalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserWalletCreateOrConnectWithoutUserInput
    upsert?: UserWalletUpsertWithoutUserInput
    disconnect?: UserWalletWhereInput | boolean
    delete?: UserWalletWhereInput | boolean
    connect?: UserWalletWhereUniqueInput
    update?: XOR<XOR<UserWalletUpdateToOneWithWhereWithoutUserInput, UserWalletUpdateWithoutUserInput>, UserWalletUncheckedUpdateWithoutUserInput>
  }

  export type GroupTradeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupTradeCreateWithoutUserInput, GroupTradeUncheckedCreateWithoutUserInput> | GroupTradeCreateWithoutUserInput[] | GroupTradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupTradeCreateOrConnectWithoutUserInput | GroupTradeCreateOrConnectWithoutUserInput[]
    upsert?: GroupTradeUpsertWithWhereUniqueWithoutUserInput | GroupTradeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupTradeCreateManyUserInputEnvelope
    set?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
    disconnect?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
    delete?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
    connect?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
    update?: GroupTradeUpdateWithWhereUniqueWithoutUserInput | GroupTradeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupTradeUpdateManyWithWhereWithoutUserInput | GroupTradeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupTradeScalarWhereInput | GroupTradeScalarWhereInput[]
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

  export type UsersCreateNestedOneWithoutUserRoleMappingInput = {
    create?: XOR<UsersCreateWithoutUserRoleMappingInput, UsersUncheckedCreateWithoutUserRoleMappingInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserRoleMappingInput
    connect?: UsersWhereUniqueInput
  }

  export type RolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput
    connect?: RolesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutUserRoleMappingNestedInput = {
    create?: XOR<UsersCreateWithoutUserRoleMappingInput, UsersUncheckedCreateWithoutUserRoleMappingInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserRoleMappingInput
    upsert?: UsersUpsertWithoutUserRoleMappingInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUserRoleMappingInput, UsersUpdateWithoutUserRoleMappingInput>, UsersUncheckedUpdateWithoutUserRoleMappingInput>
  }

  export type RolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput
    upsert?: RolesUpsertWithoutUsersInput
    connect?: RolesWhereUniqueInput
    update?: XOR<XOR<RolesUpdateToOneWithWhereWithoutUsersInput, RolesUpdateWithoutUsersInput>, RolesUncheckedUpdateWithoutUsersInput>
  }

  export type TradingGroupCreateNestedManyWithoutBaseCoinInput = {
    create?: XOR<TradingGroupCreateWithoutBaseCoinInput, TradingGroupUncheckedCreateWithoutBaseCoinInput> | TradingGroupCreateWithoutBaseCoinInput[] | TradingGroupUncheckedCreateWithoutBaseCoinInput[]
    connectOrCreate?: TradingGroupCreateOrConnectWithoutBaseCoinInput | TradingGroupCreateOrConnectWithoutBaseCoinInput[]
    createMany?: TradingGroupCreateManyBaseCoinInputEnvelope
    connect?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
  }

  export type TradingGroupCreateNestedManyWithoutQuoteCoinInput = {
    create?: XOR<TradingGroupCreateWithoutQuoteCoinInput, TradingGroupUncheckedCreateWithoutQuoteCoinInput> | TradingGroupCreateWithoutQuoteCoinInput[] | TradingGroupUncheckedCreateWithoutQuoteCoinInput[]
    connectOrCreate?: TradingGroupCreateOrConnectWithoutQuoteCoinInput | TradingGroupCreateOrConnectWithoutQuoteCoinInput[]
    createMany?: TradingGroupCreateManyQuoteCoinInputEnvelope
    connect?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
  }

  export type TradingGroupUncheckedCreateNestedManyWithoutBaseCoinInput = {
    create?: XOR<TradingGroupCreateWithoutBaseCoinInput, TradingGroupUncheckedCreateWithoutBaseCoinInput> | TradingGroupCreateWithoutBaseCoinInput[] | TradingGroupUncheckedCreateWithoutBaseCoinInput[]
    connectOrCreate?: TradingGroupCreateOrConnectWithoutBaseCoinInput | TradingGroupCreateOrConnectWithoutBaseCoinInput[]
    createMany?: TradingGroupCreateManyBaseCoinInputEnvelope
    connect?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
  }

  export type TradingGroupUncheckedCreateNestedManyWithoutQuoteCoinInput = {
    create?: XOR<TradingGroupCreateWithoutQuoteCoinInput, TradingGroupUncheckedCreateWithoutQuoteCoinInput> | TradingGroupCreateWithoutQuoteCoinInput[] | TradingGroupUncheckedCreateWithoutQuoteCoinInput[]
    connectOrCreate?: TradingGroupCreateOrConnectWithoutQuoteCoinInput | TradingGroupCreateOrConnectWithoutQuoteCoinInput[]
    createMany?: TradingGroupCreateManyQuoteCoinInputEnvelope
    connect?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
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

  export type TradingGroupUpdateManyWithoutBaseCoinNestedInput = {
    create?: XOR<TradingGroupCreateWithoutBaseCoinInput, TradingGroupUncheckedCreateWithoutBaseCoinInput> | TradingGroupCreateWithoutBaseCoinInput[] | TradingGroupUncheckedCreateWithoutBaseCoinInput[]
    connectOrCreate?: TradingGroupCreateOrConnectWithoutBaseCoinInput | TradingGroupCreateOrConnectWithoutBaseCoinInput[]
    upsert?: TradingGroupUpsertWithWhereUniqueWithoutBaseCoinInput | TradingGroupUpsertWithWhereUniqueWithoutBaseCoinInput[]
    createMany?: TradingGroupCreateManyBaseCoinInputEnvelope
    set?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
    disconnect?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
    delete?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
    connect?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
    update?: TradingGroupUpdateWithWhereUniqueWithoutBaseCoinInput | TradingGroupUpdateWithWhereUniqueWithoutBaseCoinInput[]
    updateMany?: TradingGroupUpdateManyWithWhereWithoutBaseCoinInput | TradingGroupUpdateManyWithWhereWithoutBaseCoinInput[]
    deleteMany?: TradingGroupScalarWhereInput | TradingGroupScalarWhereInput[]
  }

  export type TradingGroupUpdateManyWithoutQuoteCoinNestedInput = {
    create?: XOR<TradingGroupCreateWithoutQuoteCoinInput, TradingGroupUncheckedCreateWithoutQuoteCoinInput> | TradingGroupCreateWithoutQuoteCoinInput[] | TradingGroupUncheckedCreateWithoutQuoteCoinInput[]
    connectOrCreate?: TradingGroupCreateOrConnectWithoutQuoteCoinInput | TradingGroupCreateOrConnectWithoutQuoteCoinInput[]
    upsert?: TradingGroupUpsertWithWhereUniqueWithoutQuoteCoinInput | TradingGroupUpsertWithWhereUniqueWithoutQuoteCoinInput[]
    createMany?: TradingGroupCreateManyQuoteCoinInputEnvelope
    set?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
    disconnect?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
    delete?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
    connect?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
    update?: TradingGroupUpdateWithWhereUniqueWithoutQuoteCoinInput | TradingGroupUpdateWithWhereUniqueWithoutQuoteCoinInput[]
    updateMany?: TradingGroupUpdateManyWithWhereWithoutQuoteCoinInput | TradingGroupUpdateManyWithWhereWithoutQuoteCoinInput[]
    deleteMany?: TradingGroupScalarWhereInput | TradingGroupScalarWhereInput[]
  }

  export type TradingGroupUncheckedUpdateManyWithoutBaseCoinNestedInput = {
    create?: XOR<TradingGroupCreateWithoutBaseCoinInput, TradingGroupUncheckedCreateWithoutBaseCoinInput> | TradingGroupCreateWithoutBaseCoinInput[] | TradingGroupUncheckedCreateWithoutBaseCoinInput[]
    connectOrCreate?: TradingGroupCreateOrConnectWithoutBaseCoinInput | TradingGroupCreateOrConnectWithoutBaseCoinInput[]
    upsert?: TradingGroupUpsertWithWhereUniqueWithoutBaseCoinInput | TradingGroupUpsertWithWhereUniqueWithoutBaseCoinInput[]
    createMany?: TradingGroupCreateManyBaseCoinInputEnvelope
    set?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
    disconnect?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
    delete?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
    connect?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
    update?: TradingGroupUpdateWithWhereUniqueWithoutBaseCoinInput | TradingGroupUpdateWithWhereUniqueWithoutBaseCoinInput[]
    updateMany?: TradingGroupUpdateManyWithWhereWithoutBaseCoinInput | TradingGroupUpdateManyWithWhereWithoutBaseCoinInput[]
    deleteMany?: TradingGroupScalarWhereInput | TradingGroupScalarWhereInput[]
  }

  export type TradingGroupUncheckedUpdateManyWithoutQuoteCoinNestedInput = {
    create?: XOR<TradingGroupCreateWithoutQuoteCoinInput, TradingGroupUncheckedCreateWithoutQuoteCoinInput> | TradingGroupCreateWithoutQuoteCoinInput[] | TradingGroupUncheckedCreateWithoutQuoteCoinInput[]
    connectOrCreate?: TradingGroupCreateOrConnectWithoutQuoteCoinInput | TradingGroupCreateOrConnectWithoutQuoteCoinInput[]
    upsert?: TradingGroupUpsertWithWhereUniqueWithoutQuoteCoinInput | TradingGroupUpsertWithWhereUniqueWithoutQuoteCoinInput[]
    createMany?: TradingGroupCreateManyQuoteCoinInputEnvelope
    set?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
    disconnect?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
    delete?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
    connect?: TradingGroupWhereUniqueInput | TradingGroupWhereUniqueInput[]
    update?: TradingGroupUpdateWithWhereUniqueWithoutQuoteCoinInput | TradingGroupUpdateWithWhereUniqueWithoutQuoteCoinInput[]
    updateMany?: TradingGroupUpdateManyWithWhereWithoutQuoteCoinInput | TradingGroupUpdateManyWithWhereWithoutQuoteCoinInput[]
    deleteMany?: TradingGroupScalarWhereInput | TradingGroupScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutDevicesInput = {
    create?: XOR<UsersCreateWithoutDevicesInput, UsersUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDevicesInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<UsersCreateWithoutDevicesInput, UsersUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDevicesInput
    upsert?: UsersUpsertWithoutDevicesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutDevicesInput, UsersUpdateWithoutDevicesInput>, UsersUncheckedUpdateWithoutDevicesInput>
  }

  export type UsersCreateNestedOneWithoutUserWalletInput = {
    create?: XOR<UsersCreateWithoutUserWalletInput, UsersUncheckedCreateWithoutUserWalletInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserWalletInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutUserWalletNestedInput = {
    create?: XOR<UsersCreateWithoutUserWalletInput, UsersUncheckedCreateWithoutUserWalletInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserWalletInput
    upsert?: UsersUpsertWithoutUserWalletInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUserWalletInput, UsersUpdateWithoutUserWalletInput>, UsersUncheckedUpdateWithoutUserWalletInput>
  }

  export type CoinsCreateNestedOneWithoutTradingGroupBaseInput = {
    create?: XOR<CoinsCreateWithoutTradingGroupBaseInput, CoinsUncheckedCreateWithoutTradingGroupBaseInput>
    connectOrCreate?: CoinsCreateOrConnectWithoutTradingGroupBaseInput
    connect?: CoinsWhereUniqueInput
  }

  export type CoinsCreateNestedOneWithoutTradingGroupQuoteInput = {
    create?: XOR<CoinsCreateWithoutTradingGroupQuoteInput, CoinsUncheckedCreateWithoutTradingGroupQuoteInput>
    connectOrCreate?: CoinsCreateOrConnectWithoutTradingGroupQuoteInput
    connect?: CoinsWhereUniqueInput
  }

  export type GroupTradeCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupTradeCreateWithoutGroupInput, GroupTradeUncheckedCreateWithoutGroupInput> | GroupTradeCreateWithoutGroupInput[] | GroupTradeUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupTradeCreateOrConnectWithoutGroupInput | GroupTradeCreateOrConnectWithoutGroupInput[]
    createMany?: GroupTradeCreateManyGroupInputEnvelope
    connect?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
  }

  export type GroupTradeUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupTradeCreateWithoutGroupInput, GroupTradeUncheckedCreateWithoutGroupInput> | GroupTradeCreateWithoutGroupInput[] | GroupTradeUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupTradeCreateOrConnectWithoutGroupInput | GroupTradeCreateOrConnectWithoutGroupInput[]
    createMany?: GroupTradeCreateManyGroupInputEnvelope
    connect?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
  }

  export type CoinsUpdateOneRequiredWithoutTradingGroupBaseNestedInput = {
    create?: XOR<CoinsCreateWithoutTradingGroupBaseInput, CoinsUncheckedCreateWithoutTradingGroupBaseInput>
    connectOrCreate?: CoinsCreateOrConnectWithoutTradingGroupBaseInput
    upsert?: CoinsUpsertWithoutTradingGroupBaseInput
    connect?: CoinsWhereUniqueInput
    update?: XOR<XOR<CoinsUpdateToOneWithWhereWithoutTradingGroupBaseInput, CoinsUpdateWithoutTradingGroupBaseInput>, CoinsUncheckedUpdateWithoutTradingGroupBaseInput>
  }

  export type CoinsUpdateOneRequiredWithoutTradingGroupQuoteNestedInput = {
    create?: XOR<CoinsCreateWithoutTradingGroupQuoteInput, CoinsUncheckedCreateWithoutTradingGroupQuoteInput>
    connectOrCreate?: CoinsCreateOrConnectWithoutTradingGroupQuoteInput
    upsert?: CoinsUpsertWithoutTradingGroupQuoteInput
    connect?: CoinsWhereUniqueInput
    update?: XOR<XOR<CoinsUpdateToOneWithWhereWithoutTradingGroupQuoteInput, CoinsUpdateWithoutTradingGroupQuoteInput>, CoinsUncheckedUpdateWithoutTradingGroupQuoteInput>
  }

  export type GroupTradeUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupTradeCreateWithoutGroupInput, GroupTradeUncheckedCreateWithoutGroupInput> | GroupTradeCreateWithoutGroupInput[] | GroupTradeUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupTradeCreateOrConnectWithoutGroupInput | GroupTradeCreateOrConnectWithoutGroupInput[]
    upsert?: GroupTradeUpsertWithWhereUniqueWithoutGroupInput | GroupTradeUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupTradeCreateManyGroupInputEnvelope
    set?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
    disconnect?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
    delete?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
    connect?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
    update?: GroupTradeUpdateWithWhereUniqueWithoutGroupInput | GroupTradeUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupTradeUpdateManyWithWhereWithoutGroupInput | GroupTradeUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupTradeScalarWhereInput | GroupTradeScalarWhereInput[]
  }

  export type GroupTradeUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupTradeCreateWithoutGroupInput, GroupTradeUncheckedCreateWithoutGroupInput> | GroupTradeCreateWithoutGroupInput[] | GroupTradeUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupTradeCreateOrConnectWithoutGroupInput | GroupTradeCreateOrConnectWithoutGroupInput[]
    upsert?: GroupTradeUpsertWithWhereUniqueWithoutGroupInput | GroupTradeUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupTradeCreateManyGroupInputEnvelope
    set?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
    disconnect?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
    delete?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
    connect?: GroupTradeWhereUniqueInput | GroupTradeWhereUniqueInput[]
    update?: GroupTradeUpdateWithWhereUniqueWithoutGroupInput | GroupTradeUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupTradeUpdateManyWithWhereWithoutGroupInput | GroupTradeUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupTradeScalarWhereInput | GroupTradeScalarWhereInput[]
  }

  export type TradingGroupCreateNestedOneWithoutTradesInput = {
    create?: XOR<TradingGroupCreateWithoutTradesInput, TradingGroupUncheckedCreateWithoutTradesInput>
    connectOrCreate?: TradingGroupCreateOrConnectWithoutTradesInput
    connect?: TradingGroupWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutGroupTradesInput = {
    create?: XOR<UsersCreateWithoutGroupTradesInput, UsersUncheckedCreateWithoutGroupTradesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutGroupTradesInput
    connect?: UsersWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TradingGroupUpdateOneRequiredWithoutTradesNestedInput = {
    create?: XOR<TradingGroupCreateWithoutTradesInput, TradingGroupUncheckedCreateWithoutTradesInput>
    connectOrCreate?: TradingGroupCreateOrConnectWithoutTradesInput
    upsert?: TradingGroupUpsertWithoutTradesInput
    connect?: TradingGroupWhereUniqueInput
    update?: XOR<XOR<TradingGroupUpdateToOneWithWhereWithoutTradesInput, TradingGroupUpdateWithoutTradesInput>, TradingGroupUncheckedUpdateWithoutTradesInput>
  }

  export type UsersUpdateOneRequiredWithoutGroupTradesNestedInput = {
    create?: XOR<UsersCreateWithoutGroupTradesInput, UsersUncheckedCreateWithoutGroupTradesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutGroupTradesInput
    upsert?: UsersUpsertWithoutGroupTradesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutGroupTradesInput, UsersUpdateWithoutGroupTradesInput>, UsersUncheckedUpdateWithoutGroupTradesInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type DevicesCreateWithoutUserInput = {
    id?: string
    fcmToken?: string | null
    archive?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type DevicesUncheckedCreateWithoutUserInput = {
    id?: string
    fcmToken?: string | null
    archive?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type DevicesCreateOrConnectWithoutUserInput = {
    where: DevicesWhereUniqueInput
    create: XOR<DevicesCreateWithoutUserInput, DevicesUncheckedCreateWithoutUserInput>
  }

  export type DevicesCreateManyUserInputEnvelope = {
    data: DevicesCreateManyUserInput | DevicesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserWalletCreateWithoutUserInput = {
    id?: string
    amount: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserWalletUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserWalletCreateOrConnectWithoutUserInput = {
    where: UserWalletWhereUniqueInput
    create: XOR<UserWalletCreateWithoutUserInput, UserWalletUncheckedCreateWithoutUserInput>
  }

  export type GroupTradeCreateWithoutUserInput = {
    id?: string
    amountBase: number
    amountQuote: number
    price: number
    createdAt?: Date | string
    group: TradingGroupCreateNestedOneWithoutTradesInput
  }

  export type GroupTradeUncheckedCreateWithoutUserInput = {
    id?: string
    groupId: string
    amountBase: number
    amountQuote: number
    price: number
    createdAt?: Date | string
  }

  export type GroupTradeCreateOrConnectWithoutUserInput = {
    where: GroupTradeWhereUniqueInput
    create: XOR<GroupTradeCreateWithoutUserInput, GroupTradeUncheckedCreateWithoutUserInput>
  }

  export type GroupTradeCreateManyUserInputEnvelope = {
    data: GroupTradeCreateManyUserInput | GroupTradeCreateManyUserInput[]
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

  export type DevicesUpsertWithWhereUniqueWithoutUserInput = {
    where: DevicesWhereUniqueInput
    update: XOR<DevicesUpdateWithoutUserInput, DevicesUncheckedUpdateWithoutUserInput>
    create: XOR<DevicesCreateWithoutUserInput, DevicesUncheckedCreateWithoutUserInput>
  }

  export type DevicesUpdateWithWhereUniqueWithoutUserInput = {
    where: DevicesWhereUniqueInput
    data: XOR<DevicesUpdateWithoutUserInput, DevicesUncheckedUpdateWithoutUserInput>
  }

  export type DevicesUpdateManyWithWhereWithoutUserInput = {
    where: DevicesScalarWhereInput
    data: XOR<DevicesUpdateManyMutationInput, DevicesUncheckedUpdateManyWithoutUserInput>
  }

  export type DevicesScalarWhereInput = {
    AND?: DevicesScalarWhereInput | DevicesScalarWhereInput[]
    OR?: DevicesScalarWhereInput[]
    NOT?: DevicesScalarWhereInput | DevicesScalarWhereInput[]
    id?: StringFilter<"Devices"> | string
    userId?: StringFilter<"Devices"> | string
    fcmToken?: StringNullableFilter<"Devices"> | string | null
    archive?: StringNullableFilter<"Devices"> | string | null
    createdAt?: DateTimeFilter<"Devices"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Devices"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Devices"> | Date | string | null
  }

  export type UserWalletUpsertWithoutUserInput = {
    update: XOR<UserWalletUpdateWithoutUserInput, UserWalletUncheckedUpdateWithoutUserInput>
    create: XOR<UserWalletCreateWithoutUserInput, UserWalletUncheckedCreateWithoutUserInput>
    where?: UserWalletWhereInput
  }

  export type UserWalletUpdateToOneWithWhereWithoutUserInput = {
    where?: UserWalletWhereInput
    data: XOR<UserWalletUpdateWithoutUserInput, UserWalletUncheckedUpdateWithoutUserInput>
  }

  export type UserWalletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserWalletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupTradeUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupTradeWhereUniqueInput
    update: XOR<GroupTradeUpdateWithoutUserInput, GroupTradeUncheckedUpdateWithoutUserInput>
    create: XOR<GroupTradeCreateWithoutUserInput, GroupTradeUncheckedCreateWithoutUserInput>
  }

  export type GroupTradeUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupTradeWhereUniqueInput
    data: XOR<GroupTradeUpdateWithoutUserInput, GroupTradeUncheckedUpdateWithoutUserInput>
  }

  export type GroupTradeUpdateManyWithWhereWithoutUserInput = {
    where: GroupTradeScalarWhereInput
    data: XOR<GroupTradeUpdateManyMutationInput, GroupTradeUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupTradeScalarWhereInput = {
    AND?: GroupTradeScalarWhereInput | GroupTradeScalarWhereInput[]
    OR?: GroupTradeScalarWhereInput[]
    NOT?: GroupTradeScalarWhereInput | GroupTradeScalarWhereInput[]
    id?: StringFilter<"GroupTrade"> | string
    groupId?: StringFilter<"GroupTrade"> | string
    userId?: StringFilter<"GroupTrade"> | string
    amountBase?: FloatFilter<"GroupTrade"> | number
    amountQuote?: FloatFilter<"GroupTrade"> | number
    price?: FloatFilter<"GroupTrade"> | number
    createdAt?: DateTimeFilter<"GroupTrade"> | Date | string
  }

  export type UserRoleMappingCreateWithoutRolesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    users: UsersCreateNestedOneWithoutUserRoleMappingInput
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

  export type UsersCreateWithoutUserRoleMappingInput = {
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
    devices?: DevicesCreateNestedManyWithoutUserInput
    userWallet?: UserWalletCreateNestedOneWithoutUserInput
    groupTrades?: GroupTradeCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutUserRoleMappingInput = {
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
    devices?: DevicesUncheckedCreateNestedManyWithoutUserInput
    userWallet?: UserWalletUncheckedCreateNestedOneWithoutUserInput
    groupTrades?: GroupTradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutUserRoleMappingInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUserRoleMappingInput, UsersUncheckedCreateWithoutUserRoleMappingInput>
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

  export type UsersUpsertWithoutUserRoleMappingInput = {
    update: XOR<UsersUpdateWithoutUserRoleMappingInput, UsersUncheckedUpdateWithoutUserRoleMappingInput>
    create: XOR<UsersCreateWithoutUserRoleMappingInput, UsersUncheckedCreateWithoutUserRoleMappingInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUserRoleMappingInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUserRoleMappingInput, UsersUncheckedUpdateWithoutUserRoleMappingInput>
  }

  export type UsersUpdateWithoutUserRoleMappingInput = {
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
    devices?: DevicesUpdateManyWithoutUserNestedInput
    userWallet?: UserWalletUpdateOneWithoutUserNestedInput
    groupTrades?: GroupTradeUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutUserRoleMappingInput = {
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
    devices?: DevicesUncheckedUpdateManyWithoutUserNestedInput
    userWallet?: UserWalletUncheckedUpdateOneWithoutUserNestedInput
    groupTrades?: GroupTradeUncheckedUpdateManyWithoutUserNestedInput
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

  export type TradingGroupCreateWithoutBaseCoinInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    quoteCoin: CoinsCreateNestedOneWithoutTradingGroupQuoteInput
    trades?: GroupTradeCreateNestedManyWithoutGroupInput
  }

  export type TradingGroupUncheckedCreateWithoutBaseCoinInput = {
    id?: string
    name: string
    quoteCoinId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    trades?: GroupTradeUncheckedCreateNestedManyWithoutGroupInput
  }

  export type TradingGroupCreateOrConnectWithoutBaseCoinInput = {
    where: TradingGroupWhereUniqueInput
    create: XOR<TradingGroupCreateWithoutBaseCoinInput, TradingGroupUncheckedCreateWithoutBaseCoinInput>
  }

  export type TradingGroupCreateManyBaseCoinInputEnvelope = {
    data: TradingGroupCreateManyBaseCoinInput | TradingGroupCreateManyBaseCoinInput[]
    skipDuplicates?: boolean
  }

  export type TradingGroupCreateWithoutQuoteCoinInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    baseCoin: CoinsCreateNestedOneWithoutTradingGroupBaseInput
    trades?: GroupTradeCreateNestedManyWithoutGroupInput
  }

  export type TradingGroupUncheckedCreateWithoutQuoteCoinInput = {
    id?: string
    name: string
    baseCoinId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    trades?: GroupTradeUncheckedCreateNestedManyWithoutGroupInput
  }

  export type TradingGroupCreateOrConnectWithoutQuoteCoinInput = {
    where: TradingGroupWhereUniqueInput
    create: XOR<TradingGroupCreateWithoutQuoteCoinInput, TradingGroupUncheckedCreateWithoutQuoteCoinInput>
  }

  export type TradingGroupCreateManyQuoteCoinInputEnvelope = {
    data: TradingGroupCreateManyQuoteCoinInput | TradingGroupCreateManyQuoteCoinInput[]
    skipDuplicates?: boolean
  }

  export type TradingGroupUpsertWithWhereUniqueWithoutBaseCoinInput = {
    where: TradingGroupWhereUniqueInput
    update: XOR<TradingGroupUpdateWithoutBaseCoinInput, TradingGroupUncheckedUpdateWithoutBaseCoinInput>
    create: XOR<TradingGroupCreateWithoutBaseCoinInput, TradingGroupUncheckedCreateWithoutBaseCoinInput>
  }

  export type TradingGroupUpdateWithWhereUniqueWithoutBaseCoinInput = {
    where: TradingGroupWhereUniqueInput
    data: XOR<TradingGroupUpdateWithoutBaseCoinInput, TradingGroupUncheckedUpdateWithoutBaseCoinInput>
  }

  export type TradingGroupUpdateManyWithWhereWithoutBaseCoinInput = {
    where: TradingGroupScalarWhereInput
    data: XOR<TradingGroupUpdateManyMutationInput, TradingGroupUncheckedUpdateManyWithoutBaseCoinInput>
  }

  export type TradingGroupScalarWhereInput = {
    AND?: TradingGroupScalarWhereInput | TradingGroupScalarWhereInput[]
    OR?: TradingGroupScalarWhereInput[]
    NOT?: TradingGroupScalarWhereInput | TradingGroupScalarWhereInput[]
    id?: StringFilter<"TradingGroup"> | string
    name?: StringFilter<"TradingGroup"> | string
    baseCoinId?: StringFilter<"TradingGroup"> | string
    quoteCoinId?: StringFilter<"TradingGroup"> | string
    createdAt?: DateTimeFilter<"TradingGroup"> | Date | string
    updatedAt?: DateTimeNullableFilter<"TradingGroup"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"TradingGroup"> | Date | string | null
  }

  export type TradingGroupUpsertWithWhereUniqueWithoutQuoteCoinInput = {
    where: TradingGroupWhereUniqueInput
    update: XOR<TradingGroupUpdateWithoutQuoteCoinInput, TradingGroupUncheckedUpdateWithoutQuoteCoinInput>
    create: XOR<TradingGroupCreateWithoutQuoteCoinInput, TradingGroupUncheckedCreateWithoutQuoteCoinInput>
  }

  export type TradingGroupUpdateWithWhereUniqueWithoutQuoteCoinInput = {
    where: TradingGroupWhereUniqueInput
    data: XOR<TradingGroupUpdateWithoutQuoteCoinInput, TradingGroupUncheckedUpdateWithoutQuoteCoinInput>
  }

  export type TradingGroupUpdateManyWithWhereWithoutQuoteCoinInput = {
    where: TradingGroupScalarWhereInput
    data: XOR<TradingGroupUpdateManyMutationInput, TradingGroupUncheckedUpdateManyWithoutQuoteCoinInput>
  }

  export type UsersCreateWithoutDevicesInput = {
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
    userRoleMapping?: UserRoleMappingCreateNestedManyWithoutUsersInput
    userWallet?: UserWalletCreateNestedOneWithoutUserInput
    groupTrades?: GroupTradeCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutDevicesInput = {
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
    userRoleMapping?: UserRoleMappingUncheckedCreateNestedManyWithoutUsersInput
    userWallet?: UserWalletUncheckedCreateNestedOneWithoutUserInput
    groupTrades?: GroupTradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutDevicesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutDevicesInput, UsersUncheckedCreateWithoutDevicesInput>
  }

  export type UsersUpsertWithoutDevicesInput = {
    update: XOR<UsersUpdateWithoutDevicesInput, UsersUncheckedUpdateWithoutDevicesInput>
    create: XOR<UsersCreateWithoutDevicesInput, UsersUncheckedCreateWithoutDevicesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutDevicesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutDevicesInput, UsersUncheckedUpdateWithoutDevicesInput>
  }

  export type UsersUpdateWithoutDevicesInput = {
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
    userRoleMapping?: UserRoleMappingUpdateManyWithoutUsersNestedInput
    userWallet?: UserWalletUpdateOneWithoutUserNestedInput
    groupTrades?: GroupTradeUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutDevicesInput = {
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
    userRoleMapping?: UserRoleMappingUncheckedUpdateManyWithoutUsersNestedInput
    userWallet?: UserWalletUncheckedUpdateOneWithoutUserNestedInput
    groupTrades?: GroupTradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutUserWalletInput = {
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
    userRoleMapping?: UserRoleMappingCreateNestedManyWithoutUsersInput
    devices?: DevicesCreateNestedManyWithoutUserInput
    groupTrades?: GroupTradeCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutUserWalletInput = {
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
    userRoleMapping?: UserRoleMappingUncheckedCreateNestedManyWithoutUsersInput
    devices?: DevicesUncheckedCreateNestedManyWithoutUserInput
    groupTrades?: GroupTradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutUserWalletInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUserWalletInput, UsersUncheckedCreateWithoutUserWalletInput>
  }

  export type UsersUpsertWithoutUserWalletInput = {
    update: XOR<UsersUpdateWithoutUserWalletInput, UsersUncheckedUpdateWithoutUserWalletInput>
    create: XOR<UsersCreateWithoutUserWalletInput, UsersUncheckedCreateWithoutUserWalletInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUserWalletInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUserWalletInput, UsersUncheckedUpdateWithoutUserWalletInput>
  }

  export type UsersUpdateWithoutUserWalletInput = {
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
    userRoleMapping?: UserRoleMappingUpdateManyWithoutUsersNestedInput
    devices?: DevicesUpdateManyWithoutUserNestedInput
    groupTrades?: GroupTradeUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutUserWalletInput = {
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
    userRoleMapping?: UserRoleMappingUncheckedUpdateManyWithoutUsersNestedInput
    devices?: DevicesUncheckedUpdateManyWithoutUserNestedInput
    groupTrades?: GroupTradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CoinsCreateWithoutTradingGroupBaseInput = {
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
    volume?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    tradingGroupQuote?: TradingGroupCreateNestedManyWithoutQuoteCoinInput
  }

  export type CoinsUncheckedCreateWithoutTradingGroupBaseInput = {
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
    volume?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    tradingGroupQuote?: TradingGroupUncheckedCreateNestedManyWithoutQuoteCoinInput
  }

  export type CoinsCreateOrConnectWithoutTradingGroupBaseInput = {
    where: CoinsWhereUniqueInput
    create: XOR<CoinsCreateWithoutTradingGroupBaseInput, CoinsUncheckedCreateWithoutTradingGroupBaseInput>
  }

  export type CoinsCreateWithoutTradingGroupQuoteInput = {
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
    volume?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    tradingGroupBase?: TradingGroupCreateNestedManyWithoutBaseCoinInput
  }

  export type CoinsUncheckedCreateWithoutTradingGroupQuoteInput = {
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
    volume?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    tradingGroupBase?: TradingGroupUncheckedCreateNestedManyWithoutBaseCoinInput
  }

  export type CoinsCreateOrConnectWithoutTradingGroupQuoteInput = {
    where: CoinsWhereUniqueInput
    create: XOR<CoinsCreateWithoutTradingGroupQuoteInput, CoinsUncheckedCreateWithoutTradingGroupQuoteInput>
  }

  export type GroupTradeCreateWithoutGroupInput = {
    id?: string
    amountBase: number
    amountQuote: number
    price: number
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutGroupTradesInput
  }

  export type GroupTradeUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
    amountBase: number
    amountQuote: number
    price: number
    createdAt?: Date | string
  }

  export type GroupTradeCreateOrConnectWithoutGroupInput = {
    where: GroupTradeWhereUniqueInput
    create: XOR<GroupTradeCreateWithoutGroupInput, GroupTradeUncheckedCreateWithoutGroupInput>
  }

  export type GroupTradeCreateManyGroupInputEnvelope = {
    data: GroupTradeCreateManyGroupInput | GroupTradeCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type CoinsUpsertWithoutTradingGroupBaseInput = {
    update: XOR<CoinsUpdateWithoutTradingGroupBaseInput, CoinsUncheckedUpdateWithoutTradingGroupBaseInput>
    create: XOR<CoinsCreateWithoutTradingGroupBaseInput, CoinsUncheckedCreateWithoutTradingGroupBaseInput>
    where?: CoinsWhereInput
  }

  export type CoinsUpdateToOneWithWhereWithoutTradingGroupBaseInput = {
    where?: CoinsWhereInput
    data: XOR<CoinsUpdateWithoutTradingGroupBaseInput, CoinsUncheckedUpdateWithoutTradingGroupBaseInput>
  }

  export type CoinsUpdateWithoutTradingGroupBaseInput = {
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
    volume?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradingGroupQuote?: TradingGroupUpdateManyWithoutQuoteCoinNestedInput
  }

  export type CoinsUncheckedUpdateWithoutTradingGroupBaseInput = {
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
    volume?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradingGroupQuote?: TradingGroupUncheckedUpdateManyWithoutQuoteCoinNestedInput
  }

  export type CoinsUpsertWithoutTradingGroupQuoteInput = {
    update: XOR<CoinsUpdateWithoutTradingGroupQuoteInput, CoinsUncheckedUpdateWithoutTradingGroupQuoteInput>
    create: XOR<CoinsCreateWithoutTradingGroupQuoteInput, CoinsUncheckedCreateWithoutTradingGroupQuoteInput>
    where?: CoinsWhereInput
  }

  export type CoinsUpdateToOneWithWhereWithoutTradingGroupQuoteInput = {
    where?: CoinsWhereInput
    data: XOR<CoinsUpdateWithoutTradingGroupQuoteInput, CoinsUncheckedUpdateWithoutTradingGroupQuoteInput>
  }

  export type CoinsUpdateWithoutTradingGroupQuoteInput = {
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
    volume?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradingGroupBase?: TradingGroupUpdateManyWithoutBaseCoinNestedInput
  }

  export type CoinsUncheckedUpdateWithoutTradingGroupQuoteInput = {
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
    volume?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradingGroupBase?: TradingGroupUncheckedUpdateManyWithoutBaseCoinNestedInput
  }

  export type GroupTradeUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupTradeWhereUniqueInput
    update: XOR<GroupTradeUpdateWithoutGroupInput, GroupTradeUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupTradeCreateWithoutGroupInput, GroupTradeUncheckedCreateWithoutGroupInput>
  }

  export type GroupTradeUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupTradeWhereUniqueInput
    data: XOR<GroupTradeUpdateWithoutGroupInput, GroupTradeUncheckedUpdateWithoutGroupInput>
  }

  export type GroupTradeUpdateManyWithWhereWithoutGroupInput = {
    where: GroupTradeScalarWhereInput
    data: XOR<GroupTradeUpdateManyMutationInput, GroupTradeUncheckedUpdateManyWithoutGroupInput>
  }

  export type TradingGroupCreateWithoutTradesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    baseCoin: CoinsCreateNestedOneWithoutTradingGroupBaseInput
    quoteCoin: CoinsCreateNestedOneWithoutTradingGroupQuoteInput
  }

  export type TradingGroupUncheckedCreateWithoutTradesInput = {
    id?: string
    name: string
    baseCoinId: string
    quoteCoinId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type TradingGroupCreateOrConnectWithoutTradesInput = {
    where: TradingGroupWhereUniqueInput
    create: XOR<TradingGroupCreateWithoutTradesInput, TradingGroupUncheckedCreateWithoutTradesInput>
  }

  export type UsersCreateWithoutGroupTradesInput = {
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
    userRoleMapping?: UserRoleMappingCreateNestedManyWithoutUsersInput
    devices?: DevicesCreateNestedManyWithoutUserInput
    userWallet?: UserWalletCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutGroupTradesInput = {
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
    userRoleMapping?: UserRoleMappingUncheckedCreateNestedManyWithoutUsersInput
    devices?: DevicesUncheckedCreateNestedManyWithoutUserInput
    userWallet?: UserWalletUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutGroupTradesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutGroupTradesInput, UsersUncheckedCreateWithoutGroupTradesInput>
  }

  export type TradingGroupUpsertWithoutTradesInput = {
    update: XOR<TradingGroupUpdateWithoutTradesInput, TradingGroupUncheckedUpdateWithoutTradesInput>
    create: XOR<TradingGroupCreateWithoutTradesInput, TradingGroupUncheckedCreateWithoutTradesInput>
    where?: TradingGroupWhereInput
  }

  export type TradingGroupUpdateToOneWithWhereWithoutTradesInput = {
    where?: TradingGroupWhereInput
    data: XOR<TradingGroupUpdateWithoutTradesInput, TradingGroupUncheckedUpdateWithoutTradesInput>
  }

  export type TradingGroupUpdateWithoutTradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baseCoin?: CoinsUpdateOneRequiredWithoutTradingGroupBaseNestedInput
    quoteCoin?: CoinsUpdateOneRequiredWithoutTradingGroupQuoteNestedInput
  }

  export type TradingGroupUncheckedUpdateWithoutTradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseCoinId?: StringFieldUpdateOperationsInput | string
    quoteCoinId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersUpsertWithoutGroupTradesInput = {
    update: XOR<UsersUpdateWithoutGroupTradesInput, UsersUncheckedUpdateWithoutGroupTradesInput>
    create: XOR<UsersCreateWithoutGroupTradesInput, UsersUncheckedCreateWithoutGroupTradesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutGroupTradesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutGroupTradesInput, UsersUncheckedUpdateWithoutGroupTradesInput>
  }

  export type UsersUpdateWithoutGroupTradesInput = {
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
    userRoleMapping?: UserRoleMappingUpdateManyWithoutUsersNestedInput
    devices?: DevicesUpdateManyWithoutUserNestedInput
    userWallet?: UserWalletUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutGroupTradesInput = {
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
    userRoleMapping?: UserRoleMappingUncheckedUpdateManyWithoutUsersNestedInput
    devices?: DevicesUncheckedUpdateManyWithoutUserNestedInput
    userWallet?: UserWalletUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserRoleMappingCreateManyUsersInput = {
    id?: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type DevicesCreateManyUserInput = {
    id?: string
    fcmToken?: string | null
    archive?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type GroupTradeCreateManyUserInput = {
    id?: string
    groupId: string
    amountBase: number
    amountQuote: number
    price: number
    createdAt?: Date | string
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

  export type DevicesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DevicesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DevicesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fcmToken?: NullableStringFieldUpdateOperationsInput | string | null
    archive?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupTradeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountBase?: FloatFieldUpdateOperationsInput | number
    amountQuote?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: TradingGroupUpdateOneRequiredWithoutTradesNestedInput
  }

  export type GroupTradeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    amountBase?: FloatFieldUpdateOperationsInput | number
    amountQuote?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupTradeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    amountBase?: FloatFieldUpdateOperationsInput | number
    amountQuote?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    users?: UsersUpdateOneRequiredWithoutUserRoleMappingNestedInput
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

  export type TradingGroupCreateManyBaseCoinInput = {
    id?: string
    name: string
    quoteCoinId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type TradingGroupCreateManyQuoteCoinInput = {
    id?: string
    name: string
    baseCoinId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type TradingGroupUpdateWithoutBaseCoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quoteCoin?: CoinsUpdateOneRequiredWithoutTradingGroupQuoteNestedInput
    trades?: GroupTradeUpdateManyWithoutGroupNestedInput
  }

  export type TradingGroupUncheckedUpdateWithoutBaseCoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quoteCoinId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trades?: GroupTradeUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type TradingGroupUncheckedUpdateManyWithoutBaseCoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quoteCoinId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TradingGroupUpdateWithoutQuoteCoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baseCoin?: CoinsUpdateOneRequiredWithoutTradingGroupBaseNestedInput
    trades?: GroupTradeUpdateManyWithoutGroupNestedInput
  }

  export type TradingGroupUncheckedUpdateWithoutQuoteCoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseCoinId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trades?: GroupTradeUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type TradingGroupUncheckedUpdateManyWithoutQuoteCoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseCoinId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupTradeCreateManyGroupInput = {
    id?: string
    userId: string
    amountBase: number
    amountQuote: number
    price: number
    createdAt?: Date | string
  }

  export type GroupTradeUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountBase?: FloatFieldUpdateOperationsInput | number
    amountQuote?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutGroupTradesNestedInput
  }

  export type GroupTradeUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountBase?: FloatFieldUpdateOperationsInput | number
    amountQuote?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupTradeUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountBase?: FloatFieldUpdateOperationsInput | number
    amountQuote?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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