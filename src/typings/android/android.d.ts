declare module com {
	export module google {
		export module gson {
			export class DefaultDateTypeAdapter extends com.google.gson.TypeAdapter<java.util.Date> {
				public static class: java.lang.Class<com.google.gson.DefaultDateTypeAdapter>;
				public constructor(param0: number, param1: number);
				public read(param0: com.google.gson.stream.JsonReader): any;
				public read(param0: com.google.gson.stream.JsonReader): java.util.Date;
				public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.Date): void;
				public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
				public constructor(param0: java.lang.Class<any>, param1: number, param2: number);
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class ExclusionStrategy {
				public static class: java.lang.Class<com.google.gson.ExclusionStrategy>;
				/**
				 * Constructs a new instance of the com.google.gson.ExclusionStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					shouldSkipField(param0: com.google.gson.FieldAttributes): boolean;
					shouldSkipClass(param0: java.lang.Class<any>): boolean;
				});
				public constructor();
				public shouldSkipField(param0: com.google.gson.FieldAttributes): boolean;
				public shouldSkipClass(param0: java.lang.Class<any>): boolean;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class FieldAttributes {
				public static class: java.lang.Class<com.google.gson.FieldAttributes>;
				public getAnnotation(param0: java.lang.Class<any>): java.lang.annotation.Annotation;
				public hasModifier(param0: number): boolean;
				public constructor(param0: java.lang.reflect.Field);
				public getDeclaredClass(): java.lang.Class<any>;
				public getDeclaredType(): java.lang.reflect.Type;
				public getName(): string;
				public getAnnotations(): java.util.Collection<java.lang.annotation.Annotation>;
				public getDeclaringClass(): java.lang.Class<any>;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export abstract class FieldNamingPolicy extends com.google.gson.FieldNamingStrategy {
				public static class: java.lang.Class<com.google.gson.FieldNamingPolicy>;
				public static IDENTITY: com.google.gson.FieldNamingPolicy;
				public static UPPER_CAMEL_CASE: com.google.gson.FieldNamingPolicy;
				public static UPPER_CAMEL_CASE_WITH_SPACES: com.google.gson.FieldNamingPolicy;
				public static LOWER_CASE_WITH_UNDERSCORES: com.google.gson.FieldNamingPolicy;
				public static LOWER_CASE_WITH_DASHES: com.google.gson.FieldNamingPolicy;
				public static valueOf(param0: string): com.google.gson.FieldNamingPolicy;
				public translateName(param0: java.lang.reflect.Field): string;
				public static values(): native.Array<com.google.gson.FieldNamingPolicy>;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class FieldNamingStrategy {
				public static class: java.lang.Class<com.google.gson.FieldNamingStrategy>;
				/**
				 * Constructs a new instance of the com.google.gson.FieldNamingStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					translateName(param0: java.lang.reflect.Field): string;
				});
				public constructor();
				public translateName(param0: java.lang.reflect.Field): string;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class Gson {
				public static class: java.lang.Class<com.google.gson.Gson>;
				public excluder(): com.google.gson.internal.Excluder;
				public getDelegateAdapter(param0: com.google.gson.TypeAdapterFactory, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
				public getAdapter(param0: java.lang.Class<any>): com.google.gson.TypeAdapter<any>;
				public serializeNulls(): boolean;
				public newJsonReader(param0: java.io.Reader): com.google.gson.stream.JsonReader;
				public fromJson(param0: java.io.Reader, param1: java.lang.reflect.Type): any;
				public toJson(param0: com.google.gson.JsonElement, param1: com.google.gson.stream.JsonWriter): void;
				public fromJson(param0: string, param1: java.lang.Class<any>): any;
				public fromJson(param0: com.google.gson.JsonElement, param1: java.lang.Class<any>): any;
				public htmlSafe(): boolean;
				public fromJson(param0: string, param1: java.lang.reflect.Type): any;
				public constructor();
				public toJsonTree(param0: any, param1: java.lang.reflect.Type): com.google.gson.JsonElement;
				public newJsonWriter(param0: java.io.Writer): com.google.gson.stream.JsonWriter;
				public fieldNamingStrategy(): com.google.gson.FieldNamingStrategy;
				public fromJson(param0: com.google.gson.stream.JsonReader, param1: java.lang.reflect.Type): any;
				public toJson(param0: com.google.gson.JsonElement, param1: java.lang.Appendable): void;
				public fromJson(param0: java.io.Reader, param1: java.lang.Class<any>): any;
				public toJson(param0: any, param1: java.lang.Appendable): void;
				public toJson(param0: any): string;
				public toJson(param0: any, param1: java.lang.reflect.Type, param2: com.google.gson.stream.JsonWriter): void;
				public toJson(param0: any, param1: java.lang.reflect.Type): string;
				public toJsonTree(param0: any): com.google.gson.JsonElement;
				public toString(): string;
				public toJson(param0: any, param1: java.lang.reflect.Type, param2: java.lang.Appendable): void;
				public toJson(param0: com.google.gson.JsonElement): string;
				public getAdapter(param0: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
				public fromJson(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type): any;
			}
			export module Gson {
				export class FutureTypeAdapter<T>  extends com.google.gson.TypeAdapter<any> {
					public static class: java.lang.Class<com.google.gson.Gson.FutureTypeAdapter<any>>;
					public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
					public setDelegate(param0: com.google.gson.TypeAdapter<any>): void;
					public read(param0: com.google.gson.stream.JsonReader): any;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class GsonBuilder {
				public static class: java.lang.Class<com.google.gson.GsonBuilder>;
				public setPrettyPrinting(): com.google.gson.GsonBuilder;
				public setDateFormat(param0: number, param1: number): com.google.gson.GsonBuilder;
				public setLenient(): com.google.gson.GsonBuilder;
				public registerTypeAdapter(param0: java.lang.reflect.Type, param1: any): com.google.gson.GsonBuilder;
				public constructor();
				public registerTypeHierarchyAdapter(param0: java.lang.Class<any>, param1: any): com.google.gson.GsonBuilder;
				public generateNonExecutableJson(): com.google.gson.GsonBuilder;
				public excludeFieldsWithoutExposeAnnotation(): com.google.gson.GsonBuilder;
				public setDateFormat(param0: number): com.google.gson.GsonBuilder;
				public addSerializationExclusionStrategy(param0: com.google.gson.ExclusionStrategy): com.google.gson.GsonBuilder;
				public serializeNulls(): com.google.gson.GsonBuilder;
				public serializeSpecialFloatingPointValues(): com.google.gson.GsonBuilder;
				public addDeserializationExclusionStrategy(param0: com.google.gson.ExclusionStrategy): com.google.gson.GsonBuilder;
				public setExclusionStrategies(param0: native.Array<com.google.gson.ExclusionStrategy>): com.google.gson.GsonBuilder;
				public enableComplexMapKeySerialization(): com.google.gson.GsonBuilder;
				public create(): com.google.gson.Gson;
				public registerTypeAdapterFactory(param0: com.google.gson.TypeAdapterFactory): com.google.gson.GsonBuilder;
				public disableInnerClassSerialization(): com.google.gson.GsonBuilder;
				public disableHtmlEscaping(): com.google.gson.GsonBuilder;
				public setFieldNamingPolicy(param0: com.google.gson.FieldNamingPolicy): com.google.gson.GsonBuilder;
				public excludeFieldsWithModifiers(param0: native.Array<number>): com.google.gson.GsonBuilder;
				public setFieldNamingStrategy(param0: com.google.gson.FieldNamingStrategy): com.google.gson.GsonBuilder;
				public setLongSerializationPolicy(param0: com.google.gson.LongSerializationPolicy): com.google.gson.GsonBuilder;
				public setDateFormat(param0: string): com.google.gson.GsonBuilder;
				public setVersion(param0: number): com.google.gson.GsonBuilder;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class InstanceCreator<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.InstanceCreator<any>>;
				/**
				 * Constructs a new instance of the com.google.gson.InstanceCreator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createInstance(param0: java.lang.reflect.Type): T;
				});
				public constructor();
				public createInstance(param0: java.lang.reflect.Type): T;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonArray extends com.google.gson.JsonElement implements java.lang.Iterable<com.google.gson.JsonElement>  {
				public wait(): void;
				public wait(param0: number): void;
				public wait(param0: number, param1: number): void;
				public wait(param0?: any, param1?: any): any;
				public clone(): any;
				public notify(): void;
				public getClass(): java.lang.Class<any>;
				public finalize(): void;
				public notifyAll(): void;
				public static class: java.lang.Class<com.google.gson.JsonArray>;
				public addAll(param0: com.google.gson.JsonArray): void;
				public getAsLong(): number;
				public deepCopy(): com.google.gson.JsonArray;
				public getAsShort(): number;
				public getAsBigDecimal(): java.math.BigDecimal;
				public constructor();
				public remove(param0: number): com.google.gson.JsonElement;
				public getAsInt(): number;
				public getAsBoolean(): boolean;
				public add(param0: com.google.gson.JsonElement): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getAsDouble(): number;
				public iterator(): java.util.Iterator<com.google.gson.JsonElement>;
				public getAsString(): string;
				public set(param0: number, param1: com.google.gson.JsonElement): com.google.gson.JsonElement;
				public getAsCharacter(): string;
				public contains(param0: com.google.gson.JsonElement): boolean;
				public add(param0: string): void;
				public size(): number;
				public deepCopy(): com.google.gson.JsonElement;
				public getAsBigInteger(): java.math.BigInteger;
				public getAsByte(): number;
				public add(param0: java.lang.Number): void;
				public remove(param0: com.google.gson.JsonElement): boolean;
				public get(param0: number): com.google.gson.JsonElement;
				public constructor(param0: number);
				public getAsFloat(): number;
				public add(param0: java.lang.Boolean): void;
				public add(param0: java.lang.Character): void;
				public getAsNumber(): java.lang.Number;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonDeserializationContext {
				public static class: java.lang.Class<com.google.gson.JsonDeserializationContext>;
				/**
				 * Constructs a new instance of the com.google.gson.JsonDeserializationContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type): any;
				});
				public constructor();
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type): any;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonDeserializer<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.JsonDeserializer<any>>;
				/**
				 * Constructs a new instance of the com.google.gson.JsonDeserializer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): T;
				});
				public constructor();
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): T;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export abstract class JsonElement {
				public static class: java.lang.Class<com.google.gson.JsonElement>;
				public isJsonArray(): boolean;
				public getAsJsonArray(): com.google.gson.JsonArray;
				public getAsJsonPrimitive(): com.google.gson.JsonPrimitive;
				public getAsLong(): number;
				public getAsCharacter(): string;
				public isJsonPrimitive(): boolean;
				public getAsShort(): number;
				public toString(): string;
				public getAsBigDecimal(): java.math.BigDecimal;
				public constructor();
				public getAsJsonNull(): com.google.gson.JsonNull;
				public deepCopy(): com.google.gson.JsonElement;
				public getAsByte(): number;
				public getAsBigInteger(): java.math.BigInteger;
				public getAsBoolean(): boolean;
				public getAsInt(): number;
				public isJsonObject(): boolean;
				public getAsJsonObject(): com.google.gson.JsonObject;
				public isJsonNull(): boolean;
				public getAsDouble(): number;
				public getAsFloat(): number;
				public getAsString(): string;
				public getAsNumber(): java.lang.Number;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonIOException extends com.google.gson.JsonParseException {
				public static class: java.lang.Class<com.google.gson.JsonIOException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonNull extends com.google.gson.JsonElement {
				public static class: java.lang.Class<com.google.gson.JsonNull>;
				public static INSTANCE: com.google.gson.JsonNull;
				public deepCopy(): com.google.gson.JsonElement;
				/** @deprecated */
				public constructor();
				public deepCopy(): com.google.gson.JsonNull;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonObject extends com.google.gson.JsonElement {
				public static class: java.lang.Class<com.google.gson.JsonObject>;
				public addProperty(param0: string, param1: java.lang.Number): void;
				public getAsJsonArray(): com.google.gson.JsonArray;
				public getAsJsonPrimitive(): com.google.gson.JsonPrimitive;
				public keySet(): java.util.Set<string>;
				public get(param0: string): com.google.gson.JsonElement;
				public getAsJsonPrimitive(param0: string): com.google.gson.JsonPrimitive;
				public getAsJsonObject(param0: string): com.google.gson.JsonObject;
				public entrySet(): java.util.Set<java.util.Map.Entry<string,com.google.gson.JsonElement>>;
				public remove(param0: string): com.google.gson.JsonElement;
				public constructor();
				public size(): number;
				public deepCopy(): com.google.gson.JsonElement;
				public addProperty(param0: string, param1: java.lang.Character): void;
				public getAsJsonArray(param0: string): com.google.gson.JsonArray;
				public deepCopy(): com.google.gson.JsonObject;
				public hashCode(): number;
				public getAsJsonObject(): com.google.gson.JsonObject;
				public add(param0: string, param1: com.google.gson.JsonElement): void;
				public equals(param0: any): boolean;
				public addProperty(param0: string, param1: string): void;
				public has(param0: string): boolean;
				public addProperty(param0: string, param1: java.lang.Boolean): void;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonParseException {
				public static class: java.lang.Class<com.google.gson.JsonParseException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonParser {
				public static class: java.lang.Class<com.google.gson.JsonParser>;
				public parse(param0: java.io.Reader): com.google.gson.JsonElement;
				public parse(param0: string): com.google.gson.JsonElement;
				public parse(param0: com.google.gson.stream.JsonReader): com.google.gson.JsonElement;
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonPrimitive extends com.google.gson.JsonElement {
				public static class: java.lang.Class<com.google.gson.JsonPrimitive>;
				public deepCopy(): com.google.gson.JsonPrimitive;
				public getAsLong(): number;
				public getAsCharacter(): string;
				public isNumber(): boolean;
				public getAsShort(): number;
				public constructor(param0: java.lang.Number);
				public getAsBigDecimal(): java.math.BigDecimal;
				public constructor(param0: string);
				public constructor();
				public deepCopy(): com.google.gson.JsonElement;
				public getAsBigInteger(): java.math.BigInteger;
				public getAsByte(): number;
				public getAsBoolean(): boolean;
				public getAsInt(): number;
				public hashCode(): number;
				public isString(): boolean;
				public equals(param0: any): boolean;
				public constructor(param0: java.lang.Character);
				public getAsDouble(): number;
				public getAsFloat(): number;
				public isBoolean(): boolean;
				public getAsString(): string;
				public constructor(param0: java.lang.Boolean);
				public getAsNumber(): java.lang.Number;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonSerializationContext {
				public static class: java.lang.Class<com.google.gson.JsonSerializationContext>;
				/**
				 * Constructs a new instance of the com.google.gson.JsonSerializationContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					serialize(param0: any): com.google.gson.JsonElement;
					serialize(param0: any, param1: java.lang.reflect.Type): com.google.gson.JsonElement;
				});
				public constructor();
				public serialize(param0: any, param1: java.lang.reflect.Type): com.google.gson.JsonElement;
				public serialize(param0: any): com.google.gson.JsonElement;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonSerializer<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.JsonSerializer<any>>;
				/**
				 * Constructs a new instance of the com.google.gson.JsonSerializer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					serialize(param0: T, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
				});
				public constructor();
				public serialize(param0: T, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonStreamParser extends java.util.Iterator<com.google.gson.JsonElement> {
				public static class: java.lang.Class<com.google.gson.JsonStreamParser>;
				public remove(): void;
				public hasNext(): boolean;
				public next(): com.google.gson.JsonElement;
				public constructor(param0: java.io.Reader);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonSyntaxException extends com.google.gson.JsonParseException {
				public static class: java.lang.Class<com.google.gson.JsonSyntaxException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export abstract class LongSerializationPolicy {
				public static class: java.lang.Class<com.google.gson.LongSerializationPolicy>;
				public static DEFAULT: com.google.gson.LongSerializationPolicy;
				public static STRING: com.google.gson.LongSerializationPolicy;
				public serialize(param0: java.lang.Long): com.google.gson.JsonElement;
				public static values(): native.Array<com.google.gson.LongSerializationPolicy>;
				public static valueOf(param0: string): com.google.gson.LongSerializationPolicy;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export abstract class TypeAdapter<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.TypeAdapter<any>>;
				public write(param0: com.google.gson.stream.JsonWriter, param1: T): void;
				public fromJson(param0: java.io.Reader): T;
				public toJsonTree(param0: T): com.google.gson.JsonElement;
				public toJson(param0: T): string;
				public nullSafe(): com.google.gson.TypeAdapter<T>;
				public fromJson(param0: string): T;
				public toJson(param0: java.io.Writer, param1: T): void;
				public fromJsonTree(param0: com.google.gson.JsonElement): T;
				public read(param0: com.google.gson.stream.JsonReader): T;
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class TypeAdapterFactory {
				public static class: java.lang.Class<com.google.gson.TypeAdapterFactory>;
				/**
				 * Constructs a new instance of the com.google.gson.TypeAdapterFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
				});
				public constructor();
				public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class Expose {
					public static class: java.lang.Class<com.google.gson.annotations.Expose>;
					/**
					 * Constructs a new instance of the com.google.gson.annotations.Expose interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						serialize(): boolean;
						deserialize(): boolean;
					});
					public constructor();
					public deserialize(): boolean;
					public serialize(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class JsonAdapter {
					public static class: java.lang.Class<com.google.gson.annotations.JsonAdapter>;
					/**
					 * Constructs a new instance of the com.google.gson.annotations.JsonAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): java.lang.Class<any>;
						nullSafe(): boolean;
					});
					public constructor();
					public value(): java.lang.Class<any>;
					public nullSafe(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class SerializedName {
					public static class: java.lang.Class<com.google.gson.annotations.SerializedName>;
					/**
					 * Constructs a new instance of the com.google.gson.annotations.SerializedName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
						alternate(): native.Array<string>;
					});
					public constructor();
					public value(): string;
					public alternate(): native.Array<string>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class Since {
					public static class: java.lang.Class<com.google.gson.annotations.Since>;
					/**
					 * Constructs a new instance of the com.google.gson.annotations.Since interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): number;
					});
					public constructor();
					public value(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class Until {
					public static class: java.lang.Class<com.google.gson.annotations.Until>;
					/**
					 * Constructs a new instance of the com.google.gson.annotations.Until interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): number;
					});
					public constructor();
					public value(): number;
				}
				export module internal {
					export module Gson {
						export module Until {
							export class Preconditions {
								public static class: java.lang.Class<any>;
								public static checkArgument(param0: boolean): void;
								public static checkNotNull(param0: any): any;
							}
							export class Types {
								public static class: java.lang.Class<any>;
								public static resolve(param0: java.lang.reflect.Type, param1: java.lang.Class<any>, param2: java.lang.reflect.Type): java.lang.reflect.Type;
								public static getRawType(param0: java.lang.reflect.Type): java.lang.Class<any>;
								public static subtypeOf(param0: java.lang.reflect.Type): java.lang.reflect.WildcardType;
								public static getCollectionElementType(param0: java.lang.reflect.Type, param1: java.lang.Class<any>): java.lang.reflect.Type;
								public static supertypeOf(param0: java.lang.reflect.Type): java.lang.reflect.WildcardType;
								public static equals(param0: java.lang.reflect.Type, param1: java.lang.reflect.Type): boolean;
								public static arrayOf(param0: java.lang.reflect.Type): java.lang.reflect.GenericArrayType;
								public static canonicalize(param0: java.lang.reflect.Type): java.lang.reflect.Type;
								public static typeToString(param0: java.lang.reflect.Type): string;
								public static getMapKeyAndValueTypes(param0: java.lang.reflect.Type, param1: java.lang.Class<any>): native.Array<java.lang.reflect.Type>;
								public static getArrayComponentType(param0: java.lang.reflect.Type): java.lang.reflect.Type;
								public static newParameterizedTypeWithOwner(param0: java.lang.reflect.Type, param1: java.lang.reflect.Type, param2: native.Array<java.lang.reflect.Type>): java.lang.reflect.ParameterizedType;
							}
							export module Types {
								export class GenericArrayTypeImpl {
									public static class: any;
									public toString(): string;
									public constructor(param0: java.lang.reflect.Type);
									public equals(param0: any): boolean;
									public hashCode(): number;
									public getGenericComponentType(): java.lang.reflect.Type;
								}
								export class ParameterizedTypeImpl {
									public static class: any;
									public toString(): string;
									public constructor(param0: java.lang.reflect.Type, param1: java.lang.reflect.Type, param2: native.Array<java.lang.reflect.Type>);
									public equals(param0: any): boolean;
									public getRawType(): java.lang.reflect.Type;
									public getActualTypeArguments(): native.Array<java.lang.reflect.Type>;
									public getOwnerType(): java.lang.reflect.Type;
									public hashCode(): number;
								}
								export class WildcardTypeImpl {
									public static class: any;
									public toString(): string;
									public equals(param0: any): boolean;
									public getUpperBounds(): native.Array<java.lang.reflect.Type>;
									public hashCode(): number;
									public constructor(param0: native.Array<java.lang.reflect.Type>, param1: native.Array<java.lang.reflect.Type>);
									public getLowerBounds(): native.Array<java.lang.reflect.Type>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class ConstructorConstructor {
					public static class: java.lang.Class<com.google.gson.internal.ConstructorConstructor>;
					public toString(): string;
					public get(param0: com.google.gson.reflect.TypeToken<any>): com.google.gson.internal.ObjectConstructor<any>;
					public constructor(param0: java.util.Map<java.lang.reflect.Type,com.google.gson.InstanceCreator<any>>);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class Excluder extends com.google.gson.TypeAdapterFactory {
					public static class: java.lang.Class<com.google.gson.internal.Excluder>;
					public static DEFAULT: com.google.gson.internal.Excluder;
					public disableInnerClassSerialization(): com.google.gson.internal.Excluder;
					public clone(): com.google.gson.internal.Excluder;
					public constructor();
					public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
					public excludeField(param0: java.lang.reflect.Field, param1: boolean): boolean;
					public excludeFieldsWithoutExposeAnnotation(): com.google.gson.internal.Excluder;
					public withExclusionStrategy(param0: com.google.gson.ExclusionStrategy, param1: boolean, param2: boolean): com.google.gson.internal.Excluder;
					public withVersion(param0: number): com.google.gson.internal.Excluder;
					public withModifiers(param0: native.Array<number>): com.google.gson.internal.Excluder;
					public excludeClass(param0: java.lang.Class<any>, param1: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export abstract class JsonReaderInternalAccess {
					public static class: java.lang.Class<com.google.gson.internal.JsonReaderInternalAccess>;
					public static INSTANCE: com.google.gson.internal.JsonReaderInternalAccess;
					public constructor();
					public promoteNameToValue(param0: com.google.gson.stream.JsonReader): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class LazilyParsedNumber {
					public static class: java.lang.Class<com.google.gson.internal.LazilyParsedNumber>;
					public equals(param0: any): boolean;
					public intValue(): number;
					public toString(): string;
					public constructor(param0: string);
					public doubleValue(): number;
					public floatValue(): number;
					public longValue(): number;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class LinkedHashTreeMap<K, V>  extends java.util.AbstractMap<any,any> implements java.io.Serializable  {
					public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap<any,any>>;
					public containsKey(param0: any): boolean;
					public remove(param0: any): any;
					public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
					public constructor();
					public keySet(): java.util.Set<any>;
					public clear(): void;
					public constructor(param0: java.util.Comparator<any>);
					public size(): number;
					public put(param0: any, param1: any): any;
					public get(param0: any): any;
				}
				export module LinkedHashTreeMap {
					export class AvlBuilder<K, V>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap.AvlBuilder<any,any>>;
					}
					export class AvlIterator<K, V>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap.AvlIterator<any,any>>;
						public next(): com.google.gson.internal.LinkedHashTreeMap.Node<K,V>;
					}
					export class EntrySet extends java.util.AbstractSet<java.util.Map.Entry<any,any>> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap.EntrySet>;
						public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
						public contains(param0: any): boolean;
						public clear(): void;
						public size(): number;
						public remove(param0: any): boolean;
					}
					export class KeySet extends java.util.AbstractSet<any> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap.KeySet>;
						public iterator(): java.util.Iterator<any>;
						public contains(param0: any): boolean;
						public clear(): void;
						public size(): number;
						public remove(param0: any): boolean;
					}
					export abstract class LinkedTreeMapIterator<T>  extends java.util.Iterator<any> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap.LinkedTreeMapIterator<any>>;
						public hasNext(): boolean;
						public remove(): void;
					}
					export class Node<K, V>  extends java.util.Map.Entry<any,any> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap.Node<any,any>>;
						public first(): com.google.gson.internal.LinkedHashTreeMap.Node<any,any>;
						public setValue(param0: any): any;
						public getValue(): any;
						public getKey(): any;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public last(): com.google.gson.internal.LinkedHashTreeMap.Node<any,any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class LinkedTreeMap<K, V>  extends java.util.AbstractMap<any,any> implements java.io.Serializable  {
					public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap<any,any>>;
					public containsKey(param0: any): boolean;
					public remove(param0: any): any;
					public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
					public constructor();
					public keySet(): java.util.Set<any>;
					public clear(): void;
					public constructor(param0: java.util.Comparator<any>);
					public size(): number;
					public put(param0: any, param1: any): any;
					public get(param0: any): any;
				}
				export module LinkedTreeMap {
					export class EntrySet extends java.util.AbstractSet<java.util.Map.Entry<any,any>> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap.EntrySet>;
						public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
						public contains(param0: any): boolean;
						public clear(): void;
						public size(): number;
						public remove(param0: any): boolean;
					}
					export class KeySet extends java.util.AbstractSet<any> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap.KeySet>;
						public iterator(): java.util.Iterator<any>;
						public contains(param0: any): boolean;
						public clear(): void;
						public size(): number;
						public remove(param0: any): boolean;
					}
					export abstract class LinkedTreeMapIterator<T>  extends java.util.Iterator<any> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap.LinkedTreeMapIterator<any>>;
						public hasNext(): boolean;
						public remove(): void;
					}
					export class Node<K, V>  extends java.util.Map.Entry<any,any> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap.Node<any,any>>;
						public setValue(param0: any): any;
						public getValue(): any;
						public last(): com.google.gson.internal.LinkedTreeMap.Node<any,any>;
						public getKey(): any;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public first(): com.google.gson.internal.LinkedTreeMap.Node<any,any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class ObjectConstructor<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.google.gson.internal.ObjectConstructor<any>>;
					/**
					 * Constructs a new instance of the com.google.gson.internal.ObjectConstructor<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						construct(): T;
					});
					public constructor();
					public construct(): T;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class Primitives {
					public static class: java.lang.Class<com.google.gson.internal.Primitives>;
					public static unwrap(param0: java.lang.Class<any>): java.lang.Class<any>;
					public static isWrapperType(param0: java.lang.reflect.Type): boolean;
					public static wrap(param0: java.lang.Class<any>): java.lang.Class<any>;
					public static isPrimitive(param0: java.lang.reflect.Type): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class Streams {
					public static class: java.lang.Class<com.google.gson.internal.Streams>;
					public static write(param0: com.google.gson.JsonElement, param1: com.google.gson.stream.JsonWriter): void;
					public static parse(param0: com.google.gson.stream.JsonReader): com.google.gson.JsonElement;
					public static writerForAppendable(param0: java.lang.Appendable): java.io.Writer;
				}
				export module Streams {
					export class AppendableWriter {
						public static class: java.lang.Class<com.google.gson.internal.Streams.AppendableWriter>;
						public close(): void;
						public write(param0: number): void;
						public flush(): void;
						public write(param0: native.Array<string>, param1: number, param2: number): void;
					}
					export module AppendableWriter {
						export class CurrentWrite {
							public static class: java.lang.Class<com.google.gson.internal.Streams.AppendableWriter.CurrentWrite>;
							public charAt(param0: number): string;
							public length(): number;
							public subSequence(param0: number, param1: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export abstract class UnsafeAllocator {
					public static class: java.lang.Class<com.google.gson.internal.UnsafeAllocator>;
					public static create(): com.google.gson.internal.UnsafeAllocator;
					public constructor();
					public newInstance(param0: java.lang.Class<any>): any;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class ArrayTypeAdapter<E>  extends com.google.gson.TypeAdapter<any> {
						public static class: java.lang.Class<com.google.gson.internal.bind.ArrayTypeAdapter<any>>;
						public static FACTORY: com.google.gson.TypeAdapterFactory;
						public constructor();
						public read(param0: com.google.gson.stream.JsonReader): any;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
						public constructor(param0: com.google.gson.Gson, param1: com.google.gson.TypeAdapter<any>, param2: java.lang.Class<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class CollectionTypeAdapterFactory extends com.google.gson.TypeAdapterFactory {
						public static class: java.lang.Class<com.google.gson.internal.bind.CollectionTypeAdapterFactory>;
						public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
						public constructor(param0: com.google.gson.internal.ConstructorConstructor);
					}
					export module CollectionTypeAdapterFactory {
						export class Adapter<E>  extends com.google.gson.TypeAdapter<java.util.Collection<any>> {
							public static class: java.lang.Class<com.google.gson.internal.bind.CollectionTypeAdapterFactory.Adapter<any>>;
							public constructor();
							public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
							public constructor(param0: com.google.gson.Gson, param1: java.lang.reflect.Type, param2: com.google.gson.TypeAdapter<any>, param3: com.google.gson.internal.ObjectConstructor<any>);
							public read(param0: com.google.gson.stream.JsonReader): java.util.Collection<any>;
							public read(param0: com.google.gson.stream.JsonReader): any;
							public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.Collection<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class DateTypeAdapter extends com.google.gson.TypeAdapter<java.util.Date> {
						public static class: java.lang.Class<com.google.gson.internal.bind.DateTypeAdapter>;
						public static FACTORY: com.google.gson.TypeAdapterFactory;
						public constructor();
						public read(param0: com.google.gson.stream.JsonReader): java.util.Date;
						public read(param0: com.google.gson.stream.JsonReader): any;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
						public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.Date): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class JsonAdapterAnnotationTypeAdapterFactory extends com.google.gson.TypeAdapterFactory {
						public static class: java.lang.Class<com.google.gson.internal.bind.JsonAdapterAnnotationTypeAdapterFactory>;
						public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
						public constructor(param0: com.google.gson.internal.ConstructorConstructor);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class JsonTreeReader extends com.google.gson.stream.JsonReader {
						public static class: java.lang.Class<com.google.gson.internal.bind.JsonTreeReader>;
						public nextNull(): void;
						public beginObject(): void;
						public promoteNameToValue(): void;
						public nextBoolean(): boolean;
						public close(): void;
						public endArray(): void;
						public getPath(): string;
						public beginArray(): void;
						public endObject(): void;
						public toString(): string;
						public nextInt(): number;
						public peek(): com.google.gson.stream.JsonToken;
						public nextLong(): number;
						public nextName(): string;
						public skipValue(): void;
						public constructor(param0: java.io.Reader);
						public hasNext(): boolean;
						public constructor(param0: com.google.gson.JsonElement);
						public nextDouble(): number;
						public nextString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class JsonTreeWriter extends com.google.gson.stream.JsonWriter {
						public static class: java.lang.Class<com.google.gson.internal.bind.JsonTreeWriter>;
						public nullValue(): com.google.gson.stream.JsonWriter;
						public constructor();
						public name(param0: string): com.google.gson.stream.JsonWriter;
						public value(param0: boolean): com.google.gson.stream.JsonWriter;
						public value(param0: number): com.google.gson.stream.JsonWriter;
						public close(): void;
						public constructor(param0: java.io.Writer);
						public flush(): void;
						public endObject(): com.google.gson.stream.JsonWriter;
						public value(param0: java.lang.Boolean): com.google.gson.stream.JsonWriter;
						public beginArray(): com.google.gson.stream.JsonWriter;
						public endArray(): com.google.gson.stream.JsonWriter;
						public beginObject(): com.google.gson.stream.JsonWriter;
						public value(param0: java.lang.Number): com.google.gson.stream.JsonWriter;
						public get(): com.google.gson.JsonElement;
						public value(param0: string): com.google.gson.stream.JsonWriter;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class MapTypeAdapterFactory extends com.google.gson.TypeAdapterFactory {
						public static class: java.lang.Class<com.google.gson.internal.bind.MapTypeAdapterFactory>;
						public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
						public constructor(param0: com.google.gson.internal.ConstructorConstructor, param1: boolean);
					}
					export module MapTypeAdapterFactory {
						export class Adapter<K, V>  extends com.google.gson.TypeAdapter<java.util.Map<any,any>> {
							public static class: java.lang.Class<com.google.gson.internal.bind.MapTypeAdapterFactory.Adapter<any,any>>;
							public constructor();
							public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
							public read(param0: com.google.gson.stream.JsonReader): java.util.Map<any,any>;
							public read(param0: com.google.gson.stream.JsonReader): any;
							public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.Map<any,any>): void;
							public constructor(param0: com.google.gson.Gson, param1: java.lang.reflect.Type, param2: com.google.gson.TypeAdapter<any>, param3: java.lang.reflect.Type, param4: com.google.gson.TypeAdapter<any>, param5: com.google.gson.internal.ObjectConstructor<any>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class ObjectTypeAdapter extends com.google.gson.TypeAdapter<any> {
						public static class: java.lang.Class<com.google.gson.internal.bind.ObjectTypeAdapter>;
						public static FACTORY: com.google.gson.TypeAdapterFactory;
						public read(param0: com.google.gson.stream.JsonReader): any;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class ReflectiveTypeAdapterFactory extends com.google.gson.TypeAdapterFactory {
						public static class: java.lang.Class<com.google.gson.internal.bind.ReflectiveTypeAdapterFactory>;
						public constructor(param0: com.google.gson.internal.ConstructorConstructor, param1: com.google.gson.FieldNamingStrategy, param2: com.google.gson.internal.Excluder, param3: com.google.gson.internal.bind.JsonAdapterAnnotationTypeAdapterFactory);
						public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
						public excludeField(param0: java.lang.reflect.Field, param1: boolean): boolean;
					}
					export module ReflectiveTypeAdapterFactory {
						export class Adapter<T>  extends com.google.gson.TypeAdapter<any> {
							public static class: java.lang.Class<com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.Adapter<any>>;
							public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
							public read(param0: com.google.gson.stream.JsonReader): any;
						}
						export abstract class BoundField {
							public static class: java.lang.Class<com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.BoundField>;
							public constructor(param0: string, param1: boolean, param2: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class SqlDateTypeAdapter extends com.google.gson.TypeAdapter<java.sql.Date> {
						public static class: java.lang.Class<com.google.gson.internal.bind.SqlDateTypeAdapter>;
						public static FACTORY: com.google.gson.TypeAdapterFactory;
						public constructor();
						public write(param0: com.google.gson.stream.JsonWriter, param1: java.sql.Date): void;
						public read(param0: com.google.gson.stream.JsonReader): any;
						public read(param0: com.google.gson.stream.JsonReader): java.sql.Date;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class TimeTypeAdapter extends com.google.gson.TypeAdapter<java.sql.Time> {
						public static class: java.lang.Class<com.google.gson.internal.bind.TimeTypeAdapter>;
						public static FACTORY: com.google.gson.TypeAdapterFactory;
						public constructor();
						public read(param0: com.google.gson.stream.JsonReader): java.sql.Time;
						public write(param0: com.google.gson.stream.JsonWriter, param1: java.sql.Time): void;
						public read(param0: com.google.gson.stream.JsonReader): any;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class TreeTypeAdapter<T>  extends com.google.gson.TypeAdapter<any> {
						public static class: java.lang.Class<com.google.gson.internal.bind.TreeTypeAdapter<any>>;
						public constructor();
						public constructor(param0: com.google.gson.JsonSerializer<any>, param1: com.google.gson.JsonDeserializer<any>, param2: com.google.gson.Gson, param3: com.google.gson.reflect.TypeToken<any>, param4: com.google.gson.TypeAdapterFactory);
						public static newTypeHierarchyFactory(param0: java.lang.Class<any>, param1: any): com.google.gson.TypeAdapterFactory;
						public read(param0: com.google.gson.stream.JsonReader): any;
						public static newFactoryWithMatchRawType(param0: com.google.gson.reflect.TypeToken<any>, param1: any): com.google.gson.TypeAdapterFactory;
						public static newFactory(param0: com.google.gson.reflect.TypeToken<any>, param1: any): com.google.gson.TypeAdapterFactory;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
					}
					export module TreeTypeAdapter {
						export class GsonContextImpl implements com.google.gson.JsonSerializationContext, com.google.gson.JsonDeserializationContext {
							public static class: java.lang.Class<com.google.gson.internal.bind.TreeTypeAdapter.GsonContextImpl>;
							public serialize(param0: any): com.google.gson.JsonElement;
							public serialize(param0: any, param1: java.lang.reflect.Type): com.google.gson.JsonElement;
							public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type): any;
						}
						export class SingleTypeFactory extends com.google.gson.TypeAdapterFactory {
							public static class: java.lang.Class<com.google.gson.internal.bind.TreeTypeAdapter.SingleTypeFactory>;
							public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class TypeAdapterRuntimeTypeWrapper<T>  extends com.google.gson.TypeAdapter<any> {
						public static class: java.lang.Class<com.google.gson.internal.bind.TypeAdapterRuntimeTypeWrapper<any>>;
						public read(param0: com.google.gson.stream.JsonReader): any;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class TypeAdapters {
						public static class: java.lang.Class<com.google.gson.internal.bind.TypeAdapters>;
						public static CLASS: com.google.gson.TypeAdapter<java.lang.Class<any>>;
						public static CLASS_FACTORY: com.google.gson.TypeAdapterFactory;
						public static BIT_SET: com.google.gson.TypeAdapter<java.util.BitSet>;
						public static BIT_SET_FACTORY: com.google.gson.TypeAdapterFactory;
						public static BOOLEAN: com.google.gson.TypeAdapter<java.lang.Boolean>;
						public static BOOLEAN_AS_STRING: com.google.gson.TypeAdapter<java.lang.Boolean>;
						public static BOOLEAN_FACTORY: com.google.gson.TypeAdapterFactory;
						public static BYTE: com.google.gson.TypeAdapter<java.lang.Number>;
						public static BYTE_FACTORY: com.google.gson.TypeAdapterFactory;
						public static SHORT: com.google.gson.TypeAdapter<java.lang.Number>;
						public static SHORT_FACTORY: com.google.gson.TypeAdapterFactory;
						public static INTEGER: com.google.gson.TypeAdapter<java.lang.Number>;
						public static INTEGER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static ATOMIC_INTEGER: com.google.gson.TypeAdapter<java.util.concurrent.atomic.AtomicInteger>;
						public static ATOMIC_INTEGER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static ATOMIC_BOOLEAN: com.google.gson.TypeAdapter<java.util.concurrent.atomic.AtomicBoolean>;
						public static ATOMIC_BOOLEAN_FACTORY: com.google.gson.TypeAdapterFactory;
						public static ATOMIC_INTEGER_ARRAY: com.google.gson.TypeAdapter<java.util.concurrent.atomic.AtomicIntegerArray>;
						public static ATOMIC_INTEGER_ARRAY_FACTORY: com.google.gson.TypeAdapterFactory;
						public static LONG: com.google.gson.TypeAdapter<java.lang.Number>;
						public static FLOAT: com.google.gson.TypeAdapter<java.lang.Number>;
						public static DOUBLE: com.google.gson.TypeAdapter<java.lang.Number>;
						public static NUMBER: com.google.gson.TypeAdapter<java.lang.Number>;
						public static NUMBER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static CHARACTER: com.google.gson.TypeAdapter<java.lang.Character>;
						public static CHARACTER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static STRING: com.google.gson.TypeAdapter<string>;
						public static BIG_DECIMAL: com.google.gson.TypeAdapter<java.math.BigDecimal>;
						public static BIG_INTEGER: com.google.gson.TypeAdapter<java.math.BigInteger>;
						public static STRING_FACTORY: com.google.gson.TypeAdapterFactory;
						public static STRING_BUILDER: com.google.gson.TypeAdapter<java.lang.StringBuilder>;
						public static STRING_BUILDER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static STRING_BUFFER: com.google.gson.TypeAdapter<java.lang.StringBuffer>;
						public static STRING_BUFFER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static URL: com.google.gson.TypeAdapter<java.net.URL>;
						public static URL_FACTORY: com.google.gson.TypeAdapterFactory;
						public static URI: com.google.gson.TypeAdapter<java.net.URI>;
						public static URI_FACTORY: com.google.gson.TypeAdapterFactory;
						public static INET_ADDRESS: com.google.gson.TypeAdapter<java.net.InetAddress>;
						public static INET_ADDRESS_FACTORY: com.google.gson.TypeAdapterFactory;
						public static UUID: com.google.gson.TypeAdapter<java.util.UUID>;
						public static UUID_FACTORY: com.google.gson.TypeAdapterFactory;
						public static CURRENCY: com.google.gson.TypeAdapter<java.util.Currency>;
						public static CURRENCY_FACTORY: com.google.gson.TypeAdapterFactory;
						public static TIMESTAMP_FACTORY: com.google.gson.TypeAdapterFactory;
						public static CALENDAR: com.google.gson.TypeAdapter<java.util.Calendar>;
						public static CALENDAR_FACTORY: com.google.gson.TypeAdapterFactory;
						public static LOCALE: com.google.gson.TypeAdapter<java.util.Locale>;
						public static LOCALE_FACTORY: com.google.gson.TypeAdapterFactory;
						public static JSON_ELEMENT: com.google.gson.TypeAdapter<com.google.gson.JsonElement>;
						public static JSON_ELEMENT_FACTORY: com.google.gson.TypeAdapterFactory;
						public static ENUM_FACTORY: com.google.gson.TypeAdapterFactory;
						public static newFactory(param0: java.lang.Class<any>, param1: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
						public static newFactoryForMultipleTypes(param0: java.lang.Class<any>, param1: java.lang.Class<any>, param2: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
						public static newTypeHierarchyFactory(param0: java.lang.Class<any>, param1: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
						public static newFactory(param0: com.google.gson.reflect.TypeToken<any>, param1: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
						public static newFactory(param0: java.lang.Class<any>, param1: java.lang.Class<any>, param2: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
					}
					export module TypeAdapters {
						export class EnumTypeAdapter<T>  extends com.google.gson.TypeAdapter<any> {
							public static class: java.lang.Class<com.google.gson.internal.bind.TypeAdapters.EnumTypeAdapter<any>>;
							public constructor();
							public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
							public constructor(param0: java.lang.Class<any>);
							public read(param0: com.google.gson.stream.JsonReader): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export module util {
						export class ISO8601Utils {
							public static class: java.lang.Class<com.google.gson.internal.bind.util.ISO8601Utils>;
							public constructor();
							public static format(param0: java.util.Date): string;
							public static format(param0: java.util.Date, param1: boolean, param2: java.util.TimeZone): string;
							public static parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
							public static format(param0: java.util.Date, param1: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module reflect {
				export class TypeToken<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.google.gson.reflect.TypeToken<any>>;
					public static get(param0: java.lang.Class<any>): com.google.gson.reflect.TypeToken<any>;
					public getType(): java.lang.reflect.Type;
					/** @deprecated */
					public isAssignableFrom(param0: java.lang.Class<any>): boolean;
					public static getParameterized(param0: java.lang.reflect.Type, param1: native.Array<java.lang.reflect.Type>): com.google.gson.reflect.TypeToken<any>;
					public static get(param0: java.lang.reflect.Type): com.google.gson.reflect.TypeToken<any>;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor();
					/** @deprecated */
					public isAssignableFrom(param0: java.lang.reflect.Type): boolean;
					public static getArray(param0: java.lang.reflect.Type): com.google.gson.reflect.TypeToken<any>;
					/** @deprecated */
					public isAssignableFrom(param0: com.google.gson.reflect.TypeToken<any>): boolean;
					public hashCode(): number;
					public getRawType(): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module stream {
				export class JsonReader {
					public static class: java.lang.Class<com.google.gson.stream.JsonReader>;
					public beginArray(): void;
					public nextBoolean(): boolean;
					public isLenient(): boolean;
					public nextNull(): void;
					public constructor(param0: java.io.Reader);
					public nextString(): string;
					public nextDouble(): number;
					public nextLong(): number;
					public setLenient(param0: boolean): void;
					public hasNext(): boolean;
					public beginObject(): void;
					public getPath(): string;
					public peek(): com.google.gson.stream.JsonToken;
					public toString(): string;
					public endObject(): void;
					public nextInt(): number;
					public close(): void;
					public endArray(): void;
					public skipValue(): void;
					public nextName(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module stream {
				export class JsonScope {
					public static class: java.lang.Class<com.google.gson.stream.JsonScope>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module stream {
				export class JsonToken {
					public static class: java.lang.Class<com.google.gson.stream.JsonToken>;
					public static BEGIN_ARRAY: com.google.gson.stream.JsonToken;
					public static END_ARRAY: com.google.gson.stream.JsonToken;
					public static BEGIN_OBJECT: com.google.gson.stream.JsonToken;
					public static END_OBJECT: com.google.gson.stream.JsonToken;
					public static NAME: com.google.gson.stream.JsonToken;
					public static STRING: com.google.gson.stream.JsonToken;
					public static NUMBER: com.google.gson.stream.JsonToken;
					public static BOOLEAN: com.google.gson.stream.JsonToken;
					public static NULL: com.google.gson.stream.JsonToken;
					public static END_DOCUMENT: com.google.gson.stream.JsonToken;
					public static values(): native.Array<com.google.gson.stream.JsonToken>;
					public static valueOf(param0: string): com.google.gson.stream.JsonToken;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module stream {
				export class JsonWriter {
					public static class: java.lang.Class<com.google.gson.stream.JsonWriter>;
					public isHtmlSafe(): boolean;
					public beginArray(): com.google.gson.stream.JsonWriter;
					public jsonValue(param0: string): com.google.gson.stream.JsonWriter;
					public isLenient(): boolean;
					public setSerializeNulls(param0: boolean): void;
					public flush(): void;
					public setLenient(param0: boolean): void;
					public beginObject(): com.google.gson.stream.JsonWriter;
					public value(param0: number): com.google.gson.stream.JsonWriter;
					public name(param0: string): com.google.gson.stream.JsonWriter;
					public setHtmlSafe(param0: boolean): void;
					public getSerializeNulls(): boolean;
					public endArray(): com.google.gson.stream.JsonWriter;
					public nullValue(): com.google.gson.stream.JsonWriter;
					public constructor(param0: java.io.Writer);
					public close(): void;
					public setIndent(param0: string): void;
					public value(param0: string): com.google.gson.stream.JsonWriter;
					public value(param0: java.lang.Boolean): com.google.gson.stream.JsonWriter;
					public endObject(): com.google.gson.stream.JsonWriter;
					public value(param0: boolean): com.google.gson.stream.JsonWriter;
					public value(param0: java.lang.Number): com.google.gson.stream.JsonWriter;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module stream {
				export class MalformedJsonException {
					public static class: java.lang.Class<com.google.gson.stream.MalformedJsonException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module jakewharton {
		export module disklrucache {
			export class DiskLruCache {
				public static class: java.lang.Class<com.jakewharton.disklrucache.DiskLruCache>;
				public setMaxSize(param0: number): void;
				public remove(param0: string): boolean;
				public close(): void;
				public edit(param0: string): com.jakewharton.disklrucache.DiskLruCache.Editor;
				public get(param0: string): com.jakewharton.disklrucache.DiskLruCache.Snapshot;
				public delete(): void;
				public isClosed(): boolean;
				public getMaxSize(): number;
				public static open(param0: java.io.File, param1: number, param2: number, param3: number): com.jakewharton.disklrucache.DiskLruCache;
				public getDirectory(): java.io.File;
				public size(): number;
				public flush(): void;
			}
			export module DiskLruCache {
				export class Editor {
					public static class: java.lang.Class<com.jakewharton.disklrucache.DiskLruCache.Editor>;
					public set(param0: number, param1: string): void;
					public commit(): void;
					public getString(param0: number): string;
					public newOutputStream(param0: number): java.io.OutputStream;
					public abortUnlessCommitted(): void;
					public abort(): void;
					public newInputStream(param0: number): java.io.InputStream;
				}
				export module Editor {
					export class FaultHidingOutputStream {
						public static class: java.lang.Class<com.jakewharton.disklrucache.DiskLruCache.Editor.FaultHidingOutputStream>;
						public close(): void;
						public write(param0: number): void;
						public write(param0: native.Array<number>, param1: number, param2: number): void;
						public flush(): void;
					}
				}
				export class Entry {
					public static class: java.lang.Class<com.jakewharton.disklrucache.DiskLruCache.Entry>;
					public getCleanFile(param0: number): java.io.File;
					public getDirtyFile(param0: number): java.io.File;
					public getLengths(): string;
				}
				export class Snapshot {
					public static class: java.lang.Class<com.jakewharton.disklrucache.DiskLruCache.Snapshot>;
					public close(): void;
					public getInputStream(param0: number): java.io.InputStream;
					public getString(param0: number): string;
					public getLength(param0: number): number;
					public edit(): com.jakewharton.disklrucache.DiskLruCache.Editor;
				}
			}
		}
	}
}

declare module com {
	export module jakewharton {
		export module disklrucache {
			export class StrictLineReader {
				public static class: java.lang.Class<com.jakewharton.disklrucache.StrictLineReader>;
				public close(): void;
				public constructor(param0: java.io.InputStream, param1: java.nio.charset.Charset);
				public constructor(param0: java.io.InputStream, param1: number, param2: java.nio.charset.Charset);
				public readLine(): string;
			}
		}
	}
}

declare module com {
	export module jakewharton {
		export module disklrucache {
			export class Util {
				public static class: java.lang.Class<com.jakewharton.disklrucache.Util>;
			}
		}
	}
}

declare module com {
	export module jakewharton {
		export module picasso {
			export class OkHttp3Downloader extends com.squareup.picasso.Downloader {
				public static class: java.lang.Class<com.jakewharton.picasso.OkHttp3Downloader>;
				public constructor(param0: okhttp3.OkHttpClient);
				public load(param0: globalAndroid.net.Uri, param1: number): com.squareup.picasso.Downloader.Response;
				public shutdown(): void;
				public constructor(param0: java.io.File);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public static createDefaultCache(param0: globalAndroid.content.Context): okhttp3.Cache;
				public constructor(param0: okhttp3.Call.Factory);
				public constructor(param0: java.io.File, param1: number);
			}
		}
	}
}

declare module com {
	export module sebchlan {
		export module picassocompat {
			export class BuildConfig {
				public static class: java.lang.Class<com.sebchlan.picassocompat.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module sebchlan {
		export module picassocompat {
			export class CallbackCompat {
				public static class: java.lang.Class<com.sebchlan.picassocompat.CallbackCompat>;
				/**
				 * Constructs a new instance of the com.sebchlan.picassocompat.CallbackCompat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSuccess(): void;
					onError(): void;
				});
				public constructor();
				public onError(): void;
				public onSuccess(): void;
			}
		}
	}
}

declare module com {
	export module sebchlan {
		export module picassocompat {
			export class LibDetector {
				public static class: java.lang.Class<com.sebchlan.picassocompat.LibDetector>;
			}
			export module LibDetector {
				export class ImgLib {
					public static class: java.lang.Class<com.sebchlan.picassocompat.LibDetector.ImgLib>;
					public static Picasso252: com.sebchlan.picassocompat.LibDetector.ImgLib;
					public static Picasso271828: com.sebchlan.picassocompat.LibDetector.ImgLib;
					public static None: com.sebchlan.picassocompat.LibDetector.ImgLib;
					public static valueOf(param0: string): com.sebchlan.picassocompat.LibDetector.ImgLib;
					public static values(): native.Array<com.sebchlan.picassocompat.LibDetector.ImgLib>;
				}
			}
		}
	}
}

declare module com {
	export module sebchlan {
		export module picassocompat {
			export class PicassoBridge {
				public static class: java.lang.Class<com.sebchlan.picassocompat.PicassoBridge>;
				public static builder(param0: globalAndroid.content.Context): com.sebchlan.picassocompat.PicassoCompat.Builder;
				public constructor();
				public static init(param0: globalAndroid.content.Context): com.sebchlan.picassocompat.PicassoCompat;
			}
		}
	}
}

declare module com {
	export module sebchlan {
		export module picassocompat {
			export class PicassoCompat {
				public static class: java.lang.Class<com.sebchlan.picassocompat.PicassoCompat>;
				/**
				 * Constructs a new instance of the com.sebchlan.picassocompat.PicassoCompat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					cancelRequest(param0: globalAndroid.widget.ImageView): void;
					cancelRequest(param0: com.sebchlan.picassocompat.TargetCompat): void;
					cancelTag(param0: any): void;
					pauseTag(param0: any): void;
					resumeTag(param0: any): void;
					load(param0: globalAndroid.net.Uri): com.sebchlan.picassocompat.RequestCreatorCompat;
					load(param0: string): com.sebchlan.picassocompat.RequestCreatorCompat;
					load(param0: java.io.File): com.sebchlan.picassocompat.RequestCreatorCompat;
					load(param0: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					invalidate(param0: globalAndroid.net.Uri): void;
					invalidate(param0: string): void;
					invalidate(param0: java.io.File): void;
					setIndicatorsEnabled(param0: boolean): void;
					getIndicatorsEnabled(): boolean;
					setLoggingEnabled(param0: boolean): void;
					isLoggingEnabled(): boolean;
					shutdown(): void;
				});
				public constructor();
				public cancelRequest(param0: com.sebchlan.picassocompat.TargetCompat): void;
				public cancelTag(param0: any): void;
				public load(param0: globalAndroid.net.Uri): com.sebchlan.picassocompat.RequestCreatorCompat;
				public load(param0: java.io.File): com.sebchlan.picassocompat.RequestCreatorCompat;
				public getIndicatorsEnabled(): boolean;
				public resumeTag(param0: any): void;
				public pauseTag(param0: any): void;
				public cancelRequest(param0: globalAndroid.widget.ImageView): void;
				public isLoggingEnabled(): boolean;
				public load(param0: number): com.sebchlan.picassocompat.RequestCreatorCompat;
				public setLoggingEnabled(param0: boolean): void;
				public shutdown(): void;
				public load(param0: string): com.sebchlan.picassocompat.RequestCreatorCompat;
				public invalidate(param0: java.io.File): void;
				public invalidate(param0: string): void;
				public setIndicatorsEnabled(param0: boolean): void;
				public invalidate(param0: globalAndroid.net.Uri): void;
			}
			export module PicassoCompat {
				export class Builder {
					public static class: java.lang.Class<com.sebchlan.picassocompat.PicassoCompat.Builder>;
					/**
					 * Constructs a new instance of the com.sebchlan.picassocompat.PicassoCompat$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						defaultBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): com.sebchlan.picassocompat.PicassoCompat.Builder;
						client(param0: okhttp3.OkHttpClient): com.sebchlan.picassocompat.PicassoCompat.Builder;
						callFactory(param0: okhttp3.Call.Factory): com.sebchlan.picassocompat.PicassoCompat.Builder;
						executor(param0: java.util.concurrent.ExecutorService): com.sebchlan.picassocompat.PicassoCompat.Builder;
						listener(param0: com.sebchlan.picassocompat.PicassoCompat.Listener): com.sebchlan.picassocompat.PicassoCompat.Builder;
						indicatorsEnabled(param0: boolean): com.sebchlan.picassocompat.PicassoCompat.Builder;
						loggingEnabled(param0: boolean): com.sebchlan.picassocompat.PicassoCompat.Builder;
						build(): com.sebchlan.picassocompat.PicassoCompat;
					});
					public constructor();
					public callFactory(param0: okhttp3.Call.Factory): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public indicatorsEnabled(param0: boolean): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public client(param0: okhttp3.OkHttpClient): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public loggingEnabled(param0: boolean): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public defaultBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public executor(param0: java.util.concurrent.ExecutorService): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public listener(param0: com.sebchlan.picassocompat.PicassoCompat.Listener): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public build(): com.sebchlan.picassocompat.PicassoCompat;
				}
				export class Listener {
					public static class: java.lang.Class<com.sebchlan.picassocompat.PicassoCompat.Listener>;
					/**
					 * Constructs a new instance of the com.sebchlan.picassocompat.PicassoCompat$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onImageLoadFailed(param0: globalAndroid.net.Uri, param1: java.lang.Exception): void;
					});
					public constructor();
					public onImageLoadFailed(param0: globalAndroid.net.Uri, param1: java.lang.Exception): void;
				}
				export class LoadedFrom {
					public static class: java.lang.Class<com.sebchlan.picassocompat.PicassoCompat.LoadedFrom>;
					public static MEMORY: com.sebchlan.picassocompat.PicassoCompat.LoadedFrom;
					public static DISK: com.sebchlan.picassocompat.PicassoCompat.LoadedFrom;
					public static NETWORK: com.sebchlan.picassocompat.PicassoCompat.LoadedFrom;
					public static valueOf(param0: string): com.sebchlan.picassocompat.PicassoCompat.LoadedFrom;
					public static values(): native.Array<com.sebchlan.picassocompat.PicassoCompat.LoadedFrom>;
				}
				export class Priority {
					public static class: java.lang.Class<com.sebchlan.picassocompat.PicassoCompat.Priority>;
					public static LOW: com.sebchlan.picassocompat.PicassoCompat.Priority;
					public static NORMAL: com.sebchlan.picassocompat.PicassoCompat.Priority;
					public static HIGH: com.sebchlan.picassocompat.PicassoCompat.Priority;
					public static values(): native.Array<com.sebchlan.picassocompat.PicassoCompat.Priority>;
					public static valueOf(param0: string): com.sebchlan.picassocompat.PicassoCompat.Priority;
				}
			}
		}
	}
}

declare module com {
	export module sebchlan {
		export module picassocompat {
			export class PicassoCompat252 extends com.sebchlan.picassocompat.PicassoCompat {
				public static class: java.lang.Class<com.sebchlan.picassocompat.PicassoCompat252>;
				public cancelRequest(param0: com.sebchlan.picassocompat.TargetCompat): void;
				public cancelTag(param0: any): void;
				public load(param0: globalAndroid.net.Uri): com.sebchlan.picassocompat.RequestCreatorCompat;
				public load(param0: java.io.File): com.sebchlan.picassocompat.RequestCreatorCompat;
				public getIndicatorsEnabled(): boolean;
				public resumeTag(param0: any): void;
				public pauseTag(param0: any): void;
				public cancelRequest(param0: globalAndroid.widget.ImageView): void;
				public isLoggingEnabled(): boolean;
				public load(param0: number): com.sebchlan.picassocompat.RequestCreatorCompat;
				public setLoggingEnabled(param0: boolean): void;
				public shutdown(): void;
				public load(param0: string): com.sebchlan.picassocompat.RequestCreatorCompat;
				public invalidate(param0: java.io.File): void;
				public invalidate(param0: string): void;
				public setIndicatorsEnabled(param0: boolean): void;
				public invalidate(param0: globalAndroid.net.Uri): void;
			}
			export module PicassoCompat252 {
				export class Builder extends com.sebchlan.picassocompat.PicassoCompat.Builder {
					public static class: java.lang.Class<com.sebchlan.picassocompat.PicassoCompat252.Builder>;
					public callFactory(param0: okhttp3.Call.Factory): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public indicatorsEnabled(param0: boolean): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public client(param0: okhttp3.OkHttpClient): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public loggingEnabled(param0: boolean): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public defaultBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public executor(param0: java.util.concurrent.ExecutorService): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public listener(param0: com.sebchlan.picassocompat.PicassoCompat.Listener): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public build(): com.sebchlan.picassocompat.PicassoCompat;
				}
				export class CallbackConverter extends com.squareup.picasso.Callback {
					public static class: java.lang.Class<com.sebchlan.picassocompat.PicassoCompat252.CallbackConverter>;
					public onSuccess(): void;
					public onError(): void;
				}
				export class RequestCreatorCompat252 extends com.sebchlan.picassocompat.RequestCreatorCompat {
					public static class: java.lang.Class<com.sebchlan.picassocompat.PicassoCompat252.RequestCreatorCompat252>;
					public get(): globalAndroid.graphics.Bitmap;
					public placeholder(param0: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					public into(param0: globalAndroid.widget.ImageView, param1: com.sebchlan.picassocompat.CallbackCompat): void;
					public resizeDimen(param0: number, param1: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					public fit(): com.sebchlan.picassocompat.RequestCreatorCompat;
					public noPlaceholder(): com.sebchlan.picassocompat.RequestCreatorCompat;
					public onlyScaleDown(): com.sebchlan.picassocompat.RequestCreatorCompat;
					public stableKey(param0: string): com.sebchlan.picassocompat.RequestCreatorCompat;
					public error(param0: globalAndroid.graphics.drawable.Drawable): com.sebchlan.picassocompat.RequestCreatorCompat;
					public transform(param0: com.sebchlan.picassocompat.TransformationCompat): com.sebchlan.picassocompat.RequestCreatorCompat;
					public transform(param0: java.util.List<any>): com.sebchlan.picassocompat.RequestCreatorCompat;
					public tag(param0: any): com.sebchlan.picassocompat.RequestCreatorCompat;
					public fetch(): void;
					public priority(param0: com.sebchlan.picassocompat.PicassoCompat.Priority): com.sebchlan.picassocompat.RequestCreatorCompat;
					public fetch(param0: com.sebchlan.picassocompat.CallbackCompat): void;
					public placeholder(param0: globalAndroid.graphics.drawable.Drawable): com.sebchlan.picassocompat.RequestCreatorCompat;
					public error(param0: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					public noFade(): com.sebchlan.picassocompat.RequestCreatorCompat;
					public rotate(param0: number, param1: number, param2: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					public resize(param0: number, param1: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					public centerCrop(): com.sebchlan.picassocompat.RequestCreatorCompat;
					public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: native.Array<number>): void;
					public into(param0: globalAndroid.widget.ImageView): void;
					public rotate(param0: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: number, param3: globalAndroid.app.Notification): void;
					public into(param0: com.sebchlan.picassocompat.TargetCompat): void;
					public centerInside(): com.sebchlan.picassocompat.RequestCreatorCompat;
					public config(param0: globalAndroid.graphics.Bitmap.Config): com.sebchlan.picassocompat.RequestCreatorCompat;
				}
				export class TargetConverter extends com.squareup.picasso.Target {
					public static class: java.lang.Class<com.sebchlan.picassocompat.PicassoCompat252.TargetConverter>;
					public onBitmapFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onBitmapLoaded(param0: globalAndroid.graphics.Bitmap, param1: com.squareup.picasso.Picasso.LoadedFrom): void;
					public onPrepareLoad(param0: globalAndroid.graphics.drawable.Drawable): void;
				}
				export class TransformationConverter extends com.squareup.picasso.Transformation {
					public static class: java.lang.Class<com.sebchlan.picassocompat.PicassoCompat252.TransformationConverter>;
					public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
					public key(): string;
				}
			}
		}
	}
}

declare module com {
	export module sebchlan {
		export module picassocompat {
			export class PicassoCompat271828 extends com.sebchlan.picassocompat.PicassoCompat {
				public static class: java.lang.Class<com.sebchlan.picassocompat.PicassoCompat271828>;
				public cancelRequest(param0: com.sebchlan.picassocompat.TargetCompat): void;
				public cancelTag(param0: any): void;
				public load(param0: globalAndroid.net.Uri): com.sebchlan.picassocompat.RequestCreatorCompat;
				public load(param0: java.io.File): com.sebchlan.picassocompat.RequestCreatorCompat;
				public getIndicatorsEnabled(): boolean;
				public resumeTag(param0: any): void;
				public pauseTag(param0: any): void;
				public cancelRequest(param0: globalAndroid.widget.ImageView): void;
				public isLoggingEnabled(): boolean;
				public load(param0: number): com.sebchlan.picassocompat.RequestCreatorCompat;
				public setLoggingEnabled(param0: boolean): void;
				public shutdown(): void;
				public load(param0: string): com.sebchlan.picassocompat.RequestCreatorCompat;
				public invalidate(param0: java.io.File): void;
				public invalidate(param0: string): void;
				public setIndicatorsEnabled(param0: boolean): void;
				public invalidate(param0: globalAndroid.net.Uri): void;
			}
			export module PicassoCompat271828 {
				export class Builder extends com.sebchlan.picassocompat.PicassoCompat.Builder {
					public static class: java.lang.Class<com.sebchlan.picassocompat.PicassoCompat271828.Builder>;
					public callFactory(param0: okhttp3.Call.Factory): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public indicatorsEnabled(param0: boolean): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public client(param0: okhttp3.OkHttpClient): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public loggingEnabled(param0: boolean): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public defaultBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public executor(param0: java.util.concurrent.ExecutorService): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public listener(param0: com.sebchlan.picassocompat.PicassoCompat.Listener): com.sebchlan.picassocompat.PicassoCompat.Builder;
					public build(): com.sebchlan.picassocompat.PicassoCompat;
				}
				export class CallbackConverter extends com.squareup.picasso.Callback {
					public static class: java.lang.Class<com.sebchlan.picassocompat.PicassoCompat271828.CallbackConverter>;
					public onSuccess(): void;
					public onError(): void;
					public onError(param0: java.lang.Exception): void;
				}
				export class RequestCreatorCompat271828 extends com.sebchlan.picassocompat.RequestCreatorCompat {
					public static class: java.lang.Class<com.sebchlan.picassocompat.PicassoCompat271828.RequestCreatorCompat271828>;
					public get(): globalAndroid.graphics.Bitmap;
					public placeholder(param0: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					public into(param0: globalAndroid.widget.ImageView, param1: com.sebchlan.picassocompat.CallbackCompat): void;
					public resizeDimen(param0: number, param1: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					public fit(): com.sebchlan.picassocompat.RequestCreatorCompat;
					public noPlaceholder(): com.sebchlan.picassocompat.RequestCreatorCompat;
					public onlyScaleDown(): com.sebchlan.picassocompat.RequestCreatorCompat;
					public stableKey(param0: string): com.sebchlan.picassocompat.RequestCreatorCompat;
					public error(param0: globalAndroid.graphics.drawable.Drawable): com.sebchlan.picassocompat.RequestCreatorCompat;
					public transform(param0: com.sebchlan.picassocompat.TransformationCompat): com.sebchlan.picassocompat.RequestCreatorCompat;
					public transform(param0: java.util.List<any>): com.sebchlan.picassocompat.RequestCreatorCompat;
					public tag(param0: any): com.sebchlan.picassocompat.RequestCreatorCompat;
					public fetch(): void;
					public priority(param0: com.sebchlan.picassocompat.PicassoCompat.Priority): com.sebchlan.picassocompat.RequestCreatorCompat;
					public fetch(param0: com.sebchlan.picassocompat.CallbackCompat): void;
					public placeholder(param0: globalAndroid.graphics.drawable.Drawable): com.sebchlan.picassocompat.RequestCreatorCompat;
					public error(param0: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					public noFade(): com.sebchlan.picassocompat.RequestCreatorCompat;
					public rotate(param0: number, param1: number, param2: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					public resize(param0: number, param1: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					public centerCrop(): com.sebchlan.picassocompat.RequestCreatorCompat;
					public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: native.Array<number>): void;
					public into(param0: globalAndroid.widget.ImageView): void;
					public rotate(param0: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: number, param3: globalAndroid.app.Notification): void;
					public into(param0: com.sebchlan.picassocompat.TargetCompat): void;
					public centerInside(): com.sebchlan.picassocompat.RequestCreatorCompat;
					public config(param0: globalAndroid.graphics.Bitmap.Config): com.sebchlan.picassocompat.RequestCreatorCompat;
				}
				export class TargetConverter extends com.squareup.picasso.Target {
					public static class: java.lang.Class<com.sebchlan.picassocompat.PicassoCompat271828.TargetConverter>;
					public onBitmapFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onBitmapLoaded(param0: globalAndroid.graphics.Bitmap, param1: com.squareup.picasso.Picasso.LoadedFrom): void;
					public onBitmapFailed(param0: java.lang.Exception, param1: globalAndroid.graphics.drawable.Drawable): void;
					public onPrepareLoad(param0: globalAndroid.graphics.drawable.Drawable): void;
				}
				export class TransformationConverter extends com.squareup.picasso.Transformation {
					public static class: java.lang.Class<com.sebchlan.picassocompat.PicassoCompat271828.TransformationConverter>;
					public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
					public key(): string;
				}
			}
		}
	}
}

declare module com {
	export module sebchlan {
		export module picassocompat {
			export class RequestCreatorCompat {
				public static class: java.lang.Class<com.sebchlan.picassocompat.RequestCreatorCompat>;
				/**
				 * Constructs a new instance of the com.sebchlan.picassocompat.RequestCreatorCompat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					noPlaceholder(): com.sebchlan.picassocompat.RequestCreatorCompat;
					placeholder(param0: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					placeholder(param0: globalAndroid.graphics.drawable.Drawable): com.sebchlan.picassocompat.RequestCreatorCompat;
					error(param0: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					error(param0: globalAndroid.graphics.drawable.Drawable): com.sebchlan.picassocompat.RequestCreatorCompat;
					tag(param0: any): com.sebchlan.picassocompat.RequestCreatorCompat;
					fit(): com.sebchlan.picassocompat.RequestCreatorCompat;
					resizeDimen(param0: number, param1: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					resize(param0: number, param1: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					centerCrop(): com.sebchlan.picassocompat.RequestCreatorCompat;
					centerInside(): com.sebchlan.picassocompat.RequestCreatorCompat;
					onlyScaleDown(): com.sebchlan.picassocompat.RequestCreatorCompat;
					rotate(param0: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					rotate(param0: number, param1: number, param2: number): com.sebchlan.picassocompat.RequestCreatorCompat;
					config(param0: globalAndroid.graphics.Bitmap.Config): com.sebchlan.picassocompat.RequestCreatorCompat;
					stableKey(param0: string): com.sebchlan.picassocompat.RequestCreatorCompat;
					priority(param0: com.sebchlan.picassocompat.PicassoCompat.Priority): com.sebchlan.picassocompat.RequestCreatorCompat;
					transform(param0: com.sebchlan.picassocompat.TransformationCompat): com.sebchlan.picassocompat.RequestCreatorCompat;
					transform(param0: java.util.List<any>): com.sebchlan.picassocompat.RequestCreatorCompat;
					noFade(): com.sebchlan.picassocompat.RequestCreatorCompat;
					get(): globalAndroid.graphics.Bitmap;
					fetch(): void;
					fetch(param0: com.sebchlan.picassocompat.CallbackCompat): void;
					into(param0: com.sebchlan.picassocompat.TargetCompat): void;
					into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: number, param3: globalAndroid.app.Notification): void;
					into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: native.Array<number>): void;
					into(param0: globalAndroid.widget.ImageView): void;
					into(param0: globalAndroid.widget.ImageView, param1: com.sebchlan.picassocompat.CallbackCompat): void;
				});
				public constructor();
				public placeholder(param0: globalAndroid.graphics.drawable.Drawable): com.sebchlan.picassocompat.RequestCreatorCompat;
				public tag(param0: any): com.sebchlan.picassocompat.RequestCreatorCompat;
				public into(param0: com.sebchlan.picassocompat.TargetCompat): void;
				public stableKey(param0: string): com.sebchlan.picassocompat.RequestCreatorCompat;
				public fit(): com.sebchlan.picassocompat.RequestCreatorCompat;
				public resize(param0: number, param1: number): com.sebchlan.picassocompat.RequestCreatorCompat;
				public error(param0: number): com.sebchlan.picassocompat.RequestCreatorCompat;
				public priority(param0: com.sebchlan.picassocompat.PicassoCompat.Priority): com.sebchlan.picassocompat.RequestCreatorCompat;
				public noPlaceholder(): com.sebchlan.picassocompat.RequestCreatorCompat;
				public transform(param0: java.util.List<any>): com.sebchlan.picassocompat.RequestCreatorCompat;
				public into(param0: globalAndroid.widget.ImageView): void;
				public get(): globalAndroid.graphics.Bitmap;
				public centerCrop(): com.sebchlan.picassocompat.RequestCreatorCompat;
				public fetch(): void;
				public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: native.Array<number>): void;
				public noFade(): com.sebchlan.picassocompat.RequestCreatorCompat;
				public into(param0: globalAndroid.widget.ImageView, param1: com.sebchlan.picassocompat.CallbackCompat): void;
				public transform(param0: com.sebchlan.picassocompat.TransformationCompat): com.sebchlan.picassocompat.RequestCreatorCompat;
				public centerInside(): com.sebchlan.picassocompat.RequestCreatorCompat;
				public error(param0: globalAndroid.graphics.drawable.Drawable): com.sebchlan.picassocompat.RequestCreatorCompat;
				public config(param0: globalAndroid.graphics.Bitmap.Config): com.sebchlan.picassocompat.RequestCreatorCompat;
				public rotate(param0: number, param1: number, param2: number): com.sebchlan.picassocompat.RequestCreatorCompat;
				public rotate(param0: number): com.sebchlan.picassocompat.RequestCreatorCompat;
				public resizeDimen(param0: number, param1: number): com.sebchlan.picassocompat.RequestCreatorCompat;
				public fetch(param0: com.sebchlan.picassocompat.CallbackCompat): void;
				public placeholder(param0: number): com.sebchlan.picassocompat.RequestCreatorCompat;
				public onlyScaleDown(): com.sebchlan.picassocompat.RequestCreatorCompat;
				public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: number, param3: globalAndroid.app.Notification): void;
			}
		}
	}
}

declare module com {
	export module sebchlan {
		export module picassocompat {
			export class TargetCompat {
				public static class: java.lang.Class<com.sebchlan.picassocompat.TargetCompat>;
				/**
				 * Constructs a new instance of the com.sebchlan.picassocompat.TargetCompat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onBitmapLoaded(param0: globalAndroid.graphics.Bitmap, param1: com.sebchlan.picassocompat.PicassoCompat.LoadedFrom): void;
					onBitmapFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
					onPrepareLoad(param0: globalAndroid.graphics.drawable.Drawable): void;
				});
				public constructor();
				public onBitmapLoaded(param0: globalAndroid.graphics.Bitmap, param1: com.sebchlan.picassocompat.PicassoCompat.LoadedFrom): void;
				public onBitmapFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
				public onPrepareLoad(param0: globalAndroid.graphics.drawable.Drawable): void;
			}
		}
	}
}

declare module com {
	export module sebchlan {
		export module picassocompat {
			export class TransformationCompat {
				public static class: java.lang.Class<com.sebchlan.picassocompat.TransformationCompat>;
				/**
				 * Constructs a new instance of the com.sebchlan.picassocompat.TransformationCompat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
					key(): string;
				});
				public constructor();
				public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public key(): string;
			}
		}
	}
}

declare module com {
	export module sebchlan {
		export module picassocompat {
			export module e {
				export class BuildConfig {
					public static class: java.lang.Class<com.sebchlan.picassocompat.e.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module sebchlan {
		export module picassocompat {
			export module parent {
				export class BuildConfig {
					public static class: java.lang.Class<com.sebchlan.picassocompat.parent.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module sebchlan {
		export module picassocompat {
			export module twofivetwo {
				export class BuildConfig {
					public static class: java.lang.Class<com.sebchlan.picassocompat.twofivetwo.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export abstract class Action<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.squareup.picasso.Action<any>>;
			}
			export module Action {
				export class RequestWeakReference<M>  extends java.lang.ref.WeakReference<any> {
					public static class: java.lang.Class<com.squareup.picasso.Action.RequestWeakReference<any>>;
					public constructor(param0: com.squareup.picasso.Action<any>, param1: any, param2: java.lang.ref.ReferenceQueue<any>);
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class AssetRequestHandler extends com.squareup.picasso.RequestHandler {
				public static class: java.lang.Class<com.squareup.picasso.AssetRequestHandler>;
				public static ANDROID_ASSET: string;
				public constructor(param0: globalAndroid.content.Context);
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
				public constructor();
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class BitmapHunter {
				public static class: java.lang.Class<com.squareup.picasso.BitmapHunter>;
				public run(): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Cache {
				public static class: java.lang.Class<com.squareup.picasso.Cache>;
				/**
				 * Constructs a new instance of the com.squareup.picasso.Cache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					get(param0: string): globalAndroid.graphics.Bitmap;
					set(param0: string, param1: globalAndroid.graphics.Bitmap): void;
					size(): number;
					maxSize(): number;
					clear(): void;
					clearKeyUri(param0: string): void;
					<clinit>(): void;
				});
				public constructor();
				public static NONE: com.squareup.picasso.Cache;
				public get(param0: string): globalAndroid.graphics.Bitmap;
				public maxSize(): number;
				public set(param0: string, param1: globalAndroid.graphics.Bitmap): void;
				public clear(): void;
				public clearKeyUri(param0: string): void;
				public size(): number;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Callback {
				public static class: java.lang.Class<com.squareup.picasso.Callback>;
				/**
				 * Constructs a new instance of the com.squareup.picasso.Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSuccess(): void;
					onError(): void;
				});
				public constructor();
				public onError(): void;
				public onSuccess(): void;
			}
			export module Callback {
				export class EmptyCallback extends com.squareup.picasso.Callback {
					public static class: java.lang.Class<com.squareup.picasso.Callback.EmptyCallback>;
					public constructor();
					public onSuccess(): void;
					public onError(): void;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class ContactsPhotoRequestHandler extends com.squareup.picasso.RequestHandler {
				public static class: java.lang.Class<com.squareup.picasso.ContactsPhotoRequestHandler>;
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
			}
			export module ContactsPhotoRequestHandler {
				export class ContactPhotoStreamIcs {
					public static class: java.lang.Class<com.squareup.picasso.ContactsPhotoRequestHandler.ContactPhotoStreamIcs>;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class ContentStreamRequestHandler extends com.squareup.picasso.RequestHandler {
				public static class: java.lang.Class<com.squareup.picasso.ContentStreamRequestHandler>;
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class DeferredRequestCreator {
				public static class: java.lang.Class<com.squareup.picasso.DeferredRequestCreator>;
				public onPreDraw(): boolean;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Dispatcher {
				public static class: java.lang.Class<com.squareup.picasso.Dispatcher>;
			}
			export module Dispatcher {
				export class DispatcherHandler {
					public static class: java.lang.Class<com.squareup.picasso.Dispatcher.DispatcherHandler>;
					public handleMessage(param0: globalAndroid.os.Message): void;
					public constructor(param0: globalAndroid.os.Looper, param1: com.squareup.picasso.Dispatcher);
				}
				export class DispatcherThread {
					public static class: java.lang.Class<com.squareup.picasso.Dispatcher.DispatcherThread>;
				}
				export class NetworkBroadcastReceiver {
					public static class: java.lang.Class<com.squareup.picasso.Dispatcher.NetworkBroadcastReceiver>;
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Downloader {
				public static class: java.lang.Class<com.squareup.picasso.Downloader>;
				/**
				 * Constructs a new instance of the com.squareup.picasso.Downloader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					load(param0: globalAndroid.net.Uri, param1: number): com.squareup.picasso.Downloader.Response;
					shutdown(): void;
				});
				public constructor();
				public load(param0: globalAndroid.net.Uri, param1: number): com.squareup.picasso.Downloader.Response;
				public shutdown(): void;
			}
			export module Downloader {
				export class Response {
					public static class: java.lang.Class<com.squareup.picasso.Downloader.Response>;
					/** @deprecated */
					public constructor(param0: java.io.InputStream, param1: boolean);
					/** @deprecated */
					public constructor(param0: globalAndroid.graphics.Bitmap, param1: boolean, param2: number);
					public getInputStream(): java.io.InputStream;
					/** @deprecated */
					public getBitmap(): globalAndroid.graphics.Bitmap;
					public constructor(param0: java.io.InputStream, param1: boolean, param2: number);
					/** @deprecated */
					public constructor(param0: globalAndroid.graphics.Bitmap, param1: boolean);
					public getContentLength(): number;
				}
				export class ResponseException {
					public static class: java.lang.Class<com.squareup.picasso.Downloader.ResponseException>;
					public constructor(param0: string, param1: number, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class FetchAction extends com.squareup.picasso.Action<any> {
				public static class: java.lang.Class<com.squareup.picasso.FetchAction>;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class FileRequestHandler extends com.squareup.picasso.ContentStreamRequestHandler {
				public static class: java.lang.Class<com.squareup.picasso.FileRequestHandler>;
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class GetAction extends com.squareup.picasso.Action<java.lang.Void> {
				public static class: java.lang.Class<com.squareup.picasso.GetAction>;
				public error(): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class ImageViewAction extends com.squareup.picasso.Action<globalAndroid.widget.ImageView> {
				public static class: java.lang.Class<com.squareup.picasso.ImageViewAction>;
				public complete(param0: globalAndroid.graphics.Bitmap, param1: com.squareup.picasso.Picasso.LoadedFrom): void;
				public error(): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class LruCache extends com.squareup.picasso.Cache {
				public static class: java.lang.Class<com.squareup.picasso.LruCache>;
				public evictionCount(): number;
				public missCount(): number;
				public set(param0: string, param1: globalAndroid.graphics.Bitmap): void;
				public size(): number;
				public get(param0: string): globalAndroid.graphics.Bitmap;
				public maxSize(): number;
				public constructor(param0: globalAndroid.content.Context);
				public clear(): void;
				public constructor(param0: number);
				public putCount(): number;
				public evictAll(): void;
				public hitCount(): number;
				public clearKeyUri(param0: string): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class MarkableInputStream {
				public static class: java.lang.Class<com.squareup.picasso.MarkableInputStream>;
				public markSupported(): boolean;
				public close(): void;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public constructor(param0: java.io.InputStream);
				public reset(): void;
				public reset(param0: number): void;
				public read(): number;
				public skip(param0: number): number;
				public savePosition(param0: number): number;
				public read(param0: native.Array<number>): number;
				public constructor(param0: java.io.InputStream, param1: number);
				public available(): number;
				public mark(param0: number): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class MediaStoreRequestHandler extends com.squareup.picasso.ContentStreamRequestHandler {
				public static class: java.lang.Class<com.squareup.picasso.MediaStoreRequestHandler>;
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
			}
			export module MediaStoreRequestHandler {
				export class PicassoKind {
					public static class: java.lang.Class<com.squareup.picasso.MediaStoreRequestHandler.PicassoKind>;
					public static MICRO: com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
					public static MINI: com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
					public static FULL: com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
					public static valueOf(param0: string): com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
					public static values(): native.Array<com.squareup.picasso.MediaStoreRequestHandler.PicassoKind>;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class MemoryPolicy {
				public static class: java.lang.Class<com.squareup.picasso.MemoryPolicy>;
				public static NO_CACHE: com.squareup.picasso.MemoryPolicy;
				public static NO_STORE: com.squareup.picasso.MemoryPolicy;
				public static valueOf(param0: string): com.squareup.picasso.MemoryPolicy;
				public static values(): native.Array<com.squareup.picasso.MemoryPolicy>;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class NetworkPolicy {
				public static class: java.lang.Class<com.squareup.picasso.NetworkPolicy>;
				public static NO_CACHE: com.squareup.picasso.NetworkPolicy;
				public static NO_STORE: com.squareup.picasso.NetworkPolicy;
				public static OFFLINE: com.squareup.picasso.NetworkPolicy;
				public static values(): native.Array<com.squareup.picasso.NetworkPolicy>;
				public static shouldReadFromDiskCache(param0: number): boolean;
				public static shouldWriteToDiskCache(param0: number): boolean;
				public static isOfflineOnly(param0: number): boolean;
				public static valueOf(param0: string): com.squareup.picasso.NetworkPolicy;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class NetworkRequestHandler extends com.squareup.picasso.RequestHandler {
				public static class: java.lang.Class<com.squareup.picasso.NetworkRequestHandler>;
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
				public constructor(param0: com.squareup.picasso.Downloader, param1: com.squareup.picasso.Stats);
				public constructor();
			}
			export module NetworkRequestHandler {
				export class ContentLengthException {
					public static class: java.lang.Class<com.squareup.picasso.NetworkRequestHandler.ContentLengthException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class OkHttpDownloader extends com.squareup.picasso.Downloader {
				public static class: java.lang.Class<com.squareup.picasso.OkHttpDownloader>;
				public load(param0: globalAndroid.net.Uri, param1: number): com.squareup.picasso.Downloader.Response;
				public shutdown(): void;
				public constructor(param0: java.io.File);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: any);
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public getClient(): any;
				public constructor(param0: java.io.File, param1: number);
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Picasso {
				public static class: java.lang.Class<com.squareup.picasso.Picasso>;
				public cancelTag(param0: any): void;
				public load(param0: java.io.File): com.squareup.picasso.RequestCreator;
				public cancelRequest(param0: com.squareup.picasso.Target): void;
				public static with(param0: globalAndroid.content.Context): com.squareup.picasso.Picasso;
				public load(param0: number): com.squareup.picasso.RequestCreator;
				public resumeTag(param0: any): void;
				/** @deprecated */
				public setDebugging(param0: boolean): void;
				public getSnapshot(): com.squareup.picasso.StatsSnapshot;
				public cancelRequest(param0: globalAndroid.widget.RemoteViews, param1: number): void;
				public pauseTag(param0: any): void;
				/** @deprecated */
				public isDebugging(): boolean;
				public cancelRequest(param0: globalAndroid.widget.ImageView): void;
				public isLoggingEnabled(): boolean;
				public setLoggingEnabled(param0: boolean): void;
				public static setSingletonInstance(param0: com.squareup.picasso.Picasso): void;
				public shutdown(): void;
				public load(param0: globalAndroid.net.Uri): com.squareup.picasso.RequestCreator;
				public load(param0: string): com.squareup.picasso.RequestCreator;
				public invalidate(param0: java.io.File): void;
				public areIndicatorsEnabled(): boolean;
				public invalidate(param0: string): void;
				public setIndicatorsEnabled(param0: boolean): void;
				public invalidate(param0: globalAndroid.net.Uri): void;
			}
			export module Picasso {
				export class Builder {
					public static class: java.lang.Class<com.squareup.picasso.Picasso.Builder>;
					public constructor(param0: globalAndroid.content.Context);
					public listener(param0: com.squareup.picasso.Picasso.Listener): com.squareup.picasso.Picasso.Builder;
					public executor(param0: java.util.concurrent.ExecutorService): com.squareup.picasso.Picasso.Builder;
					public build(): com.squareup.picasso.Picasso;
					public requestTransformer(param0: com.squareup.picasso.Picasso.RequestTransformer): com.squareup.picasso.Picasso.Builder;
					public downloader(param0: com.squareup.picasso.Downloader): com.squareup.picasso.Picasso.Builder;
					public defaultBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): com.squareup.picasso.Picasso.Builder;
					/** @deprecated */
					public debugging(param0: boolean): com.squareup.picasso.Picasso.Builder;
					public addRequestHandler(param0: com.squareup.picasso.RequestHandler): com.squareup.picasso.Picasso.Builder;
					public memoryCache(param0: com.squareup.picasso.Cache): com.squareup.picasso.Picasso.Builder;
					public loggingEnabled(param0: boolean): com.squareup.picasso.Picasso.Builder;
					public indicatorsEnabled(param0: boolean): com.squareup.picasso.Picasso.Builder;
				}
				export class CleanupThread {
					public static class: java.lang.Class<com.squareup.picasso.Picasso.CleanupThread>;
					public run(): void;
				}
				export class Listener {
					public static class: java.lang.Class<com.squareup.picasso.Picasso.Listener>;
					/**
					 * Constructs a new instance of the com.squareup.picasso.Picasso$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onImageLoadFailed(param0: com.squareup.picasso.Picasso, param1: globalAndroid.net.Uri, param2: java.lang.Exception): void;
					});
					public constructor();
					public onImageLoadFailed(param0: com.squareup.picasso.Picasso, param1: globalAndroid.net.Uri, param2: java.lang.Exception): void;
				}
				export class LoadedFrom {
					public static class: java.lang.Class<com.squareup.picasso.Picasso.LoadedFrom>;
					public static MEMORY: com.squareup.picasso.Picasso.LoadedFrom;
					public static DISK: com.squareup.picasso.Picasso.LoadedFrom;
					public static NETWORK: com.squareup.picasso.Picasso.LoadedFrom;
					public static values(): native.Array<com.squareup.picasso.Picasso.LoadedFrom>;
					public static valueOf(param0: string): com.squareup.picasso.Picasso.LoadedFrom;
				}
				export class Priority {
					public static class: java.lang.Class<com.squareup.picasso.Picasso.Priority>;
					public static LOW: com.squareup.picasso.Picasso.Priority;
					public static NORMAL: com.squareup.picasso.Picasso.Priority;
					public static HIGH: com.squareup.picasso.Picasso.Priority;
					public static values(): native.Array<com.squareup.picasso.Picasso.Priority>;
					public static valueOf(param0: string): com.squareup.picasso.Picasso.Priority;
				}
				export class RequestTransformer {
					public static class: java.lang.Class<com.squareup.picasso.Picasso.RequestTransformer>;
					/**
					 * Constructs a new instance of the com.squareup.picasso.Picasso$RequestTransformer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						transformRequest(param0: com.squareup.picasso.Request): com.squareup.picasso.Request;
						<clinit>(): void;
					});
					public constructor();
					public static IDENTITY: com.squareup.picasso.Picasso.RequestTransformer;
					public transformRequest(param0: com.squareup.picasso.Request): com.squareup.picasso.Request;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class PicassoDrawable {
				public static class: java.lang.Class<com.squareup.picasso.PicassoDrawable>;
				public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
				public draw(param0: globalAndroid.graphics.Canvas): void;
				public setAlpha(param0: number): void;
				public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class PicassoExecutorService {
				public static class: java.lang.Class<com.squareup.picasso.PicassoExecutorService>;
				public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
			}
			export module PicassoExecutorService {
				export class PicassoFutureTask extends java.util.concurrent.FutureTask<com.squareup.picasso.BitmapHunter> implements java.lang.Comparable<com.squareup.picasso.PicassoExecutorService.PicassoFutureTask>  {
					public static class: java.lang.Class<com.squareup.picasso.PicassoExecutorService.PicassoFutureTask>;
					public constructor(param0: com.squareup.picasso.BitmapHunter);
					public compareTo(param0: com.squareup.picasso.PicassoExecutorService.PicassoFutureTask): number;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export abstract class RemoteViewsAction extends com.squareup.picasso.Action<com.squareup.picasso.RemoteViewsAction.RemoteViewsTarget> {
				public static class: java.lang.Class<com.squareup.picasso.RemoteViewsAction>;
				public error(): void;
			}
			export module RemoteViewsAction {
				export class AppWidgetAction extends com.squareup.picasso.RemoteViewsAction {
					public static class: java.lang.Class<com.squareup.picasso.RemoteViewsAction.AppWidgetAction>;
				}
				export class NotificationAction extends com.squareup.picasso.RemoteViewsAction {
					public static class: java.lang.Class<com.squareup.picasso.RemoteViewsAction.NotificationAction>;
				}
				export class RemoteViewsTarget {
					public static class: java.lang.Class<com.squareup.picasso.RemoteViewsAction.RemoteViewsTarget>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Request {
				public static class: java.lang.Class<com.squareup.picasso.Request>;
				public uri: globalAndroid.net.Uri;
				public resourceId: number;
				public stableKey: string;
				public transformations: java.util.List<com.squareup.picasso.Transformation>;
				public targetWidth: number;
				public targetHeight: number;
				public centerCrop: boolean;
				public centerInside: boolean;
				public onlyScaleDown: boolean;
				public rotationDegrees: number;
				public rotationPivotX: number;
				public rotationPivotY: number;
				public hasRotationPivot: boolean;
				public config: globalAndroid.graphics.Bitmap.Config;
				public priority: com.squareup.picasso.Picasso.Priority;
				public hasSize(): boolean;
				public toString(): string;
				public buildUpon(): com.squareup.picasso.Request.Builder;
			}
			export module Request {
				export class Builder {
					public static class: java.lang.Class<com.squareup.picasso.Request.Builder>;
					public setUri(param0: globalAndroid.net.Uri): com.squareup.picasso.Request.Builder;
					public onlyScaleDown(): com.squareup.picasso.Request.Builder;
					public transform(param0: java.util.List<any>): com.squareup.picasso.Request.Builder;
					public resize(param0: number, param1: number): com.squareup.picasso.Request.Builder;
					public centerCrop(): com.squareup.picasso.Request.Builder;
					public build(): com.squareup.picasso.Request;
					public clearCenterCrop(): com.squareup.picasso.Request.Builder;
					public transform(param0: com.squareup.picasso.Transformation): com.squareup.picasso.Request.Builder;
					public centerInside(): com.squareup.picasso.Request.Builder;
					public constructor(param0: globalAndroid.net.Uri);
					public clearOnlyScaleDown(): com.squareup.picasso.Request.Builder;
					public priority(param0: com.squareup.picasso.Picasso.Priority): com.squareup.picasso.Request.Builder;
					public stableKey(param0: string): com.squareup.picasso.Request.Builder;
					public config(param0: globalAndroid.graphics.Bitmap.Config): com.squareup.picasso.Request.Builder;
					public clearRotation(): com.squareup.picasso.Request.Builder;
					public setResourceId(param0: number): com.squareup.picasso.Request.Builder;
					public clearCenterInside(): com.squareup.picasso.Request.Builder;
					public clearResize(): com.squareup.picasso.Request.Builder;
					public rotate(param0: number, param1: number, param2: number): com.squareup.picasso.Request.Builder;
					public constructor(param0: number);
					public rotate(param0: number): com.squareup.picasso.Request.Builder;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class RequestCreator {
				public static class: java.lang.Class<com.squareup.picasso.RequestCreator>;
				public placeholder(param0: number): com.squareup.picasso.RequestCreator;
				public fetch(param0: com.squareup.picasso.Callback): void;
				public error(param0: number): com.squareup.picasso.RequestCreator;
				public resize(param0: number, param1: number): com.squareup.picasso.RequestCreator;
				public stableKey(param0: string): com.squareup.picasso.RequestCreator;
				public noPlaceholder(): com.squareup.picasso.RequestCreator;
				public fit(): com.squareup.picasso.RequestCreator;
				public priority(param0: com.squareup.picasso.Picasso.Priority): com.squareup.picasso.RequestCreator;
				public into(param0: globalAndroid.widget.ImageView, param1: com.squareup.picasso.Callback): void;
				public tag(param0: any): com.squareup.picasso.RequestCreator;
				public into(param0: globalAndroid.widget.ImageView): void;
				public config(param0: globalAndroid.graphics.Bitmap.Config): com.squareup.picasso.RequestCreator;
				public get(): globalAndroid.graphics.Bitmap;
				public fetch(): void;
				public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: native.Array<number>): void;
				public rotate(param0: number, param1: number, param2: number): com.squareup.picasso.RequestCreator;
				public error(param0: globalAndroid.graphics.drawable.Drawable): com.squareup.picasso.RequestCreator;
				public centerCrop(): com.squareup.picasso.RequestCreator;
				public noFade(): com.squareup.picasso.RequestCreator;
				public transform(param0: com.squareup.picasso.Transformation): com.squareup.picasso.RequestCreator;
				public onlyScaleDown(): com.squareup.picasso.RequestCreator;
				public placeholder(param0: globalAndroid.graphics.drawable.Drawable): com.squareup.picasso.RequestCreator;
				public networkPolicy(param0: com.squareup.picasso.NetworkPolicy, param1: native.Array<com.squareup.picasso.NetworkPolicy>): com.squareup.picasso.RequestCreator;
				public into(param0: com.squareup.picasso.Target): void;
				public rotate(param0: number): com.squareup.picasso.RequestCreator;
				public centerInside(): com.squareup.picasso.RequestCreator;
				public memoryPolicy(param0: com.squareup.picasso.MemoryPolicy, param1: native.Array<com.squareup.picasso.MemoryPolicy>): com.squareup.picasso.RequestCreator;
				public transform(param0: java.util.List<any>): com.squareup.picasso.RequestCreator;
				/** @deprecated */
				public skipMemoryCache(): com.squareup.picasso.RequestCreator;
				public resizeDimen(param0: number, param1: number): com.squareup.picasso.RequestCreator;
				public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: number, param3: globalAndroid.app.Notification): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export abstract class RequestHandler {
				public static class: java.lang.Class<com.squareup.picasso.RequestHandler>;
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
				public constructor();
			}
			export module RequestHandler {
				export class Result {
					public static class: java.lang.Class<com.squareup.picasso.RequestHandler.Result>;
					public constructor(param0: java.io.InputStream, param1: com.squareup.picasso.Picasso.LoadedFrom);
					public getStream(): java.io.InputStream;
					public getLoadedFrom(): com.squareup.picasso.Picasso.LoadedFrom;
					public getBitmap(): globalAndroid.graphics.Bitmap;
					public constructor(param0: globalAndroid.graphics.Bitmap, param1: com.squareup.picasso.Picasso.LoadedFrom);
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class ResourceRequestHandler extends com.squareup.picasso.RequestHandler {
				public static class: java.lang.Class<com.squareup.picasso.ResourceRequestHandler>;
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Stats {
				public static class: java.lang.Class<com.squareup.picasso.Stats>;
			}
			export module Stats {
				export class StatsHandler {
					public static class: java.lang.Class<com.squareup.picasso.Stats.StatsHandler>;
					public constructor(param0: globalAndroid.os.Looper, param1: com.squareup.picasso.Stats);
					public handleMessage(param0: globalAndroid.os.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class StatsSnapshot {
				public static class: java.lang.Class<com.squareup.picasso.StatsSnapshot>;
				public maxSize: number;
				public size: number;
				public cacheHits: number;
				public cacheMisses: number;
				public totalDownloadSize: number;
				public totalOriginalBitmapSize: number;
				public totalTransformedBitmapSize: number;
				public averageDownloadSize: number;
				public averageOriginalBitmapSize: number;
				public averageTransformedBitmapSize: number;
				public downloadCount: number;
				public originalBitmapCount: number;
				public transformedBitmapCount: number;
				public timeStamp: number;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number);
				public dump(): void;
				public dump(param0: java.io.PrintWriter): void;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Target {
				public static class: java.lang.Class<com.squareup.picasso.Target>;
				/**
				 * Constructs a new instance of the com.squareup.picasso.Target interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onBitmapLoaded(param0: globalAndroid.graphics.Bitmap, param1: com.squareup.picasso.Picasso.LoadedFrom): void;
					onBitmapFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
					onPrepareLoad(param0: globalAndroid.graphics.drawable.Drawable): void;
				});
				public constructor();
				public onBitmapFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
				public onBitmapLoaded(param0: globalAndroid.graphics.Bitmap, param1: com.squareup.picasso.Picasso.LoadedFrom): void;
				public onPrepareLoad(param0: globalAndroid.graphics.drawable.Drawable): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class TargetAction extends com.squareup.picasso.Action<com.squareup.picasso.Target> {
				public static class: java.lang.Class<com.squareup.picasso.TargetAction>;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Transformation {
				public static class: java.lang.Class<com.squareup.picasso.Transformation>;
				/**
				 * Constructs a new instance of the com.squareup.picasso.Transformation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
					key(): string;
				});
				public constructor();
				public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public key(): string;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class UrlConnectionDownloader extends com.squareup.picasso.Downloader {
				public static class: java.lang.Class<com.squareup.picasso.UrlConnectionDownloader>;
				public load(param0: globalAndroid.net.Uri, param1: number): com.squareup.picasso.Downloader.Response;
				public shutdown(): void;
				public constructor(param0: globalAndroid.content.Context);
				public openConnection(param0: globalAndroid.net.Uri): java.net.HttpURLConnection;
			}
			export module UrlConnectionDownloader {
				export class ResponseCacheIcs {
					public static class: java.lang.Class<com.squareup.picasso.UrlConnectionDownloader.ResponseCacheIcs>;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Utils {
				public static class: java.lang.Class<com.squareup.picasso.Utils>;
			}
			export module Utils {
				export class ActivityManagerHoneycomb {
					public static class: java.lang.Class<com.squareup.picasso.Utils.ActivityManagerHoneycomb>;
				}
				export class BitmapHoneycombMR1 {
					public static class: java.lang.Class<com.squareup.picasso.Utils.BitmapHoneycombMR1>;
				}
				export class OkHttpLoaderCreator {
					public static class: java.lang.Class<com.squareup.picasso.Utils.OkHttpLoaderCreator>;
				}
				export class PicassoThread {
					public static class: java.lang.Class<com.squareup.picasso.Utils.PicassoThread>;
					public constructor(param0: java.lang.Runnable);
					public run(): void;
				}
				export class PicassoThreadFactory {
					public static class: java.lang.Class<com.squareup.picasso.Utils.PicassoThreadFactory>;
					public newThread(param0: java.lang.Runnable): java.lang.Thread;
				}
			}
		}
	}
}


	declare module zendesk {
		export module collection {
			export class CountedSet<E>  extends java.util.Set<any> {
				public static class: java.lang.Class<zendesk.collection.CountedSet<any>>;
				public static NOT_FOUND: number;
				public contains(param0: any): boolean;
				public addAll(param0: java.util.Collection<any>): boolean;
				public toArray(param0: native.Array<any>): native.Array<any>;
				public iterator(): java.util.Iterator<any>;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public constructor();
				public size(): number;
				public toArray(): native.Array<any>;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public clear(): void;
				public constructor(param0: number);
				public isEmpty(): boolean;
				public getCount(param0: any): number;
				public remove(param0: any): boolean;
			}
		}
	}



	declare module zendesk {
		export module func {
			export class ZFunc1<Param1, Return>  extends java.lang.Object {
				public static class: java.lang.Class<zendesk.func.ZFunc1<any,any>>;
				/**
				 * Constructs a new instance of the zendesk.func.ZFunc1<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(param0: Param1): Return;
				});
				public constructor();
				public apply(param0: Param1): Return;
			}
		}
	}


	declare module zendesk {
		export module func {
			export class ZFunc2<Param1, Param2, Return>  extends java.lang.Object {
				public static class: java.lang.Class<zendesk.func.ZFunc2<any,any,any>>;
				/**
				 * Constructs a new instance of the zendesk.func.ZFunc2<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(param0: Param1, param1: Param2): Return;
				});
				public constructor();
				public apply(param0: Param1, param1: Param2): Return;
			}
		}
	}


	declare module zendesk {
		export module logger {
			export class Logger {
				public static class: java.lang.Class<zendesk.logger.Logger>;
				public static e(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
				public static d(param0: string, param1: string, param2: native.Array<any>): void;
				public static e(param0: string, param1: zendesk.service.ErrorResponse): void;
				public static i(param0: string, param1: string, param2: native.Array<any>): void;
				public static d(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
				public static w(param0: string, param1: string, param2: native.Array<any>): void;
				public static w(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
				public static removeAllLogAppender(): void;
				public static isLoggable(): boolean;
				public static v(param0: string, param1: string, param2: native.Array<any>): void;
				public static v(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
				public static setLoggable(param0: boolean): void;
				public static i(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
				public static e(param0: string, param1: string, param2: native.Array<any>): void;
				public static addLogAppender(param0: zendesk.logger.Logger.LogAppender): void;
			}
			export module Logger {
				export class Android extends zendesk.logger.Logger.LogAppender {
					public static class: java.lang.Class<zendesk.logger.Logger.Android>;
					public log(param0: zendesk.logger.Logger.Priority, param1: string, param2: string, param3: java.lang.Throwable): void;
				}
				export class Java extends zendesk.logger.Logger.LogAppender {
					public static class: java.lang.Class<zendesk.logger.Logger.Java>;
					public log(param0: zendesk.logger.Logger.Priority, param1: string, param2: string, param3: java.lang.Throwable): void;
				}
				export class LogAppender {
					public static class: java.lang.Class<zendesk.logger.Logger.LogAppender>;
					/**
					 * Constructs a new instance of the zendesk.logger.Logger$LogAppender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						log(param0: zendesk.logger.Logger.Priority, param1: string, param2: string, param3: java.lang.Throwable): void;
					});
					public constructor();
					public log(param0: zendesk.logger.Logger.Priority, param1: string, param2: string, param3: java.lang.Throwable): void;
				}
				export class Priority {
					public static class: java.lang.Class<zendesk.logger.Logger.Priority>;
					public static VERBOSE: zendesk.logger.Logger.Priority;
					public static DEBUG: zendesk.logger.Logger.Priority;
					public static INFO: zendesk.logger.Logger.Priority;
					public static WARN: zendesk.logger.Logger.Priority;
					public static ERROR: zendesk.logger.Logger.Priority;
					public static valueOf(param0: string): zendesk.logger.Logger.Priority;
					public static values(): native.Array<zendesk.logger.Logger.Priority>;
				}
			}
		}
	}



	declare module zendesk {
		export module logger {
			export class LoggerHelper {
				public static class: java.lang.Class<zendesk.logger.LoggerHelper>;
			}
		}
	}



	declare module zendesk {
		export module sdk {
			export class BuildConfig {
				public static class: java.lang.Class<zendesk.sdk.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}



	declare module zendesk {
		export module sdk {
			export module providers {
				export class BuildConfig {
					public static class: java.lang.Class<zendesk.sdk.providers.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}



	declare module zendesk {
		export module service {
			export class CancellableCompositeZendeskCallback<T>  extends zendesk.service.ZendeskCallback<any> {
				public static class: java.lang.Class<zendesk.service.CancellableCompositeZendeskCallback<any>>;
				public remove(param0: zendesk.service.SafeZendeskCallback<any>): void;
				public onSuccess(param0: any): void;
				public cancel(): void;
				public onError(param0: zendesk.service.ErrorResponse): void;
				public add(param0: zendesk.service.SafeZendeskCallback<any>): void;
				public constructor();
			}
		}
	}


	declare module zendesk {
		export module service {
			export class ErrorResponse {
				public static class: java.lang.Class<zendesk.service.ErrorResponse>;
				/**
				 * Constructs a new instance of the zendesk.service.ErrorResponse interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isNetworkError(): boolean;
					isConversionError(): boolean;
					isHTTPError(): boolean;
					getReason(): string;
					getStatus(): number;
					getUrl(): string;
					getResponseBody(): string;
					getResponseBodyType(): string;
					getResponseHeaders(): java.util.List<zendesk.service.Header>;
				});
				public constructor();
				public static NON_HTTP_ERROR: number;
				/** @deprecated */
				public isNetworkError(): boolean;
				/** @deprecated */
				public isConversionError(): boolean;
				public getResponseBody(): string;
				public getResponseBodyType(): string;
				public getReason(): string;
				public getResponseHeaders(): java.util.List<zendesk.service.Header>;
				public getStatus(): number;
				public isHTTPError(): boolean;
				public getUrl(): string;
			}
		}
	}


	declare module zendesk {
		export module service {
			export class ErrorResponseAdapter extends zendesk.service.ErrorResponse {
				public static class: java.lang.Class<zendesk.service.ErrorResponseAdapter>;
				public getResponseBody(): string;
				/** @deprecated */
				public isNetworkError(): boolean;
				/** @deprecated */
				public isConversionError(): boolean;
				public isNetworkError(): boolean;
				public getResponseHeaders(): java.util.List<zendesk.service.Header>;
				public getStatus(): number;
				public getUrl(): string;
				public constructor(param0: string);
				public isConversionError(): boolean;
				public constructor();
				public getResponseBodyType(): string;
				public getReason(): string;
				public static fromException(param0: java.lang.Throwable): zendesk.service.ErrorResponse;
				public isHTTPError(): boolean;
			}
		}
	}



	declare module zendesk {
		export module service {
			export class Header {
				public static class: java.lang.Class<zendesk.service.Header>;
				public hashCode(): number;
				public getValue(): string;
				public equals(param0: any): boolean;
				public getName(): string;
				public toString(): string;
				public constructor(param0: string, param1: string);
			}
		}
	}


	declare module zendesk {
		export module service {
			export class HttpConstants {
				public static class: java.lang.Class<zendesk.service.HttpConstants>;
				/**
				 * Constructs a new instance of the zendesk.service.HttpConstants interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static APPLICATION_JSON: string;
				public static HTTP_LENGTH_REQUIRED: number;
				public static HTTP_RESET: number;
				public static HTTP_VERSION: number;
				public static HTTP_PRECON_FAILED: number;
				public static HTTP_CLIENT_TIMEOUT: number;
				public static HTTP_SEE_OTHER: number;
				public static HTTP_BAD_REQUEST: number;
				public static HTTP_ACCEPTED: number;
				public static HTTP_NOT_ACCEPTABLE: number;
				public static HTTP_PROXY_AUTH: number;
				public static HTTP_BLOCKED: number;
				public static HTTP_REQ_TOO_LONG: number;
				public static HTTP_BAD_GATEWAY: number;
				public static HTTP_MOVED_PERM: number;
				public static HTTP_NO_CONTENT: number;
				public static HTTP_GATEWAY_TIMEOUT: number;
				public static HTTP_PAYMENT_REQUIRED: number;
				public static HTTP_NOT_MODIFIED: number;
				public static HTTP_BAD_METHOD: number;
				public static HTTP_NOT_AUTHORITATIVE: number;
				public static HTTP_UNPROCESSABLE_ENTITY: number;
				public static HTTP_INTERNAL_ERROR: number;
				public static HTTP_USE_PROXY: number;
				public static HTTP_UNAVAILABLE: number;
				public static HTTP_OK: number;
				public static HTTP_ENTITY_TOO_LARGE: number;
				public static USER_AGENT_HEADER: string;
				public static HTTP_MOVED_TEMP: number;
				public static HTTP_GONE: number;
				public static AUTHORIZATION_HEADER: string;
				public static ACCEPT_HEADER: string;
				public static HTTP_FORBIDDEN: number;
				public static HTTP_NOT_IMPLEMENTED: number;
				public static HTTP_UNAUTHORIZED: number;
				public static HTTP_UNSUPPORTED_TYPE: number;
				public static HTTP_NOT_FOUND: number;
				public static HTTP_PARTIAL: number;
				public static HTTP_CONFLICT: number;
				public static HTTP_MULT_CHOICE: number;
				public static HTTP_CREATED: number;
			}
		}
	}


	declare module zendesk {
		export module service {
			export class RetrofitErrorResponse extends zendesk.service.ErrorResponse {
				public static class: java.lang.Class<zendesk.service.RetrofitErrorResponse>;
				public getResponseBody(): string;
				/** @deprecated */
				public isNetworkError(): boolean;
				/** @deprecated */
				public isConversionError(): boolean;
				public static response(param0: retrofit2.Response<any>): zendesk.service.RetrofitErrorResponse;
				public isNetworkError(): boolean;
				public getResponseHeaders(): java.util.List<zendesk.service.Header>;
				public static throwable(param0: java.lang.Throwable): zendesk.service.RetrofitErrorResponse;
				public getStatus(): number;
				public getUrl(): string;
				public isConversionError(): boolean;
				public getResponseBodyType(): string;
				public getReason(): string;
				public isHTTPError(): boolean;
			}
		}
	}

	declare module zendesk {
		export module service {
			export class RetrofitZendeskCallbackAdapter<E, F>  extends retrofit2.Callback<any> {
				public static class: java.lang.Class<zendesk.service.RetrofitZendeskCallbackAdapter<any,any>>;
				public static DEFAULT_EXTRACTOR: zendesk.service.RetrofitZendeskCallbackAdapter.RequestExtractor<any,any>;
				public constructor(param0: zendesk.service.ZendeskCallback<any>);
				public constructor(param0: zendesk.service.ZendeskCallback<any>, param1: zendesk.service.RetrofitZendeskCallbackAdapter.RequestExtractor<any,any>);
				public onFailure(param0: retrofit2.Call<any>, param1: java.lang.Throwable): void;
				public onResponse(param0: retrofit2.Call<any>, param1: retrofit2.Response<any>): void;
			}
			export module RetrofitZendeskCallbackAdapter {
				export class DefaultExtractor<E>  extends zendesk.service.RetrofitZendeskCallbackAdapter.RequestExtractor<any,any> {
					public static class: java.lang.Class<zendesk.service.RetrofitZendeskCallbackAdapter.DefaultExtractor<any>>;
					public extract(param0: any): any;
				}
				export class RequestExtractor<E, F>  extends java.lang.Object {
					public static class: java.lang.Class<zendesk.service.RetrofitZendeskCallbackAdapter.RequestExtractor<any,any>>;
					/**
					 * Constructs a new instance of the zendesk.service.RetrofitZendeskCallbackAdapter$RequestExtractor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						extract(param0: E): F;
					});
					public constructor();
					public extract(param0: E): F;
				}
			}
		}
	}

	declare module zendesk {
		export module service {
			export class SafeZendeskCallback<T>  extends zendesk.service.ZendeskCallback<any> {
				public static class: java.lang.Class<zendesk.service.SafeZendeskCallback<any>>;
				public constructor(param0: zendesk.service.ZendeskCallback<any>);
				public onSuccess(param0: any): void;
				public static from(param0: zendesk.service.ZendeskCallback<any>): zendesk.service.SafeZendeskCallback<any>;
				public cancel(): void;
				public onError(param0: zendesk.service.ErrorResponse): void;
				public constructor();
			}
		}
	}

	declare module zendesk {
		export module service {
			export abstract class ZendeskCallback<T>  extends java.lang.Object {
				public static class: java.lang.Class<zendesk.service.ZendeskCallback<any>>;
				public onSuccess(param0: T): void;
				public onError(param0: zendesk.service.ErrorResponse): void;
				public constructor();
			}
		}
	}

	declare module zendesk {
		export module service {
			export class ZendeskDateTypeAdapter extends com.google.gson.TypeAdapter<java.util.Date> {
				public static class: java.lang.Class<zendesk.service.ZendeskDateTypeAdapter>;
				public read(param0: com.google.gson.stream.JsonReader): any;
				public read(param0: com.google.gson.stream.JsonReader): java.util.Date;
				public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.Date): void;
				public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
				public constructor();
			}
		}
	}

	declare module zendesk {
		export module service {
			export class ZendeskException {
				public static class: java.lang.Class<zendesk.service.ZendeskException>;
				public constructor(param0: retrofit2.Response<any>);
				public errorResponse(): zendesk.service.ErrorResponse;
				public toString(): string;
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: zendesk.service.ErrorResponse);
				public constructor(param0: string);
			}
		}
	}

	declare module zendesk {
		export module util {
			export class BooleanUtils {
				public static class: java.lang.Class<zendesk.util.BooleanUtils>;
				public static isTrue(param0: java.lang.Boolean): boolean;
			}
		}
	}

	declare module zendesk {
		export module util {
			export class CollectionUtils {
				public static class: java.lang.Class<zendesk.util.CollectionUtils>;
				public static unmodifiableList(param0: java.util.List<any>): java.util.List<any>;
				public static mapKeys(param0: java.util.Map<any, any>, param1: zendesk.func.ZFunc1<any,any>): java.util.Map<any, any>;
				public static isNotEmpty(param0: native.Array<any>): boolean;
				public static copyOf(param0: java.util.List<any>): java.util.List<any>;
				public static map(param0: java.util.Collection<any>, param1: zendesk.func.ZFunc1<any,any>): java.util.List<any>;
				public static mapValues(param0: java.util.Map<any, any>, param1: zendesk.func.ZFunc1<any,any>): java.util.Map<any, any>;
				public static findFirst(param0: java.util.Collection<any>, param1: zendesk.func.ZFunc1<any,any>): any;
				public static filter(param0: java.util.Collection<any>, param1: zendesk.func.ZFunc1<any,any>): java.util.List<any>;
				public static isEmpty(param0: native.Array<any>): boolean;
				public static groupingBy(param0: java.util.Collection<any>, param1: zendesk.func.ZFunc1<any,any>): java.util.Map<any, any>;
				public static isEmpty(param0: java.util.Collection<any>): boolean;
				public static equalsByContents(param0: java.util.Collection<any>, param1: java.util.Collection<any>): boolean;
				public static copyOf(param0: java.util.Map<any, any>): java.util.Map<any, any>;
				public static getOrDefault(param0: java.util.Map<any, any>, param1: any, param2: any): any;
				public static appendOrReplace(param0: java.util.Collection<any>, param1: any, param2: zendesk.func.ZFunc2<any,any,any>): java.util.List<any>;
				public static toPrimitiveLong(param0: native.Array<java.lang.Long>, param1: number): native.Array<number>;
				public static combineLists(param0: native.Array<java.util.List<any>>): java.util.List<any>;
				public static toPrimitiveLong(param0: native.Array<java.lang.Long>): native.Array<number>;
				public static map(param0: java.util.Map<any, any>, param1: zendesk.func.ZFunc1<any,any>, param2: zendesk.func.ZFunc1<any,any>): java.util.Map<any, any>;
				public static isNotEmpty(param0: java.util.Collection<any>): boolean;
				public static filter(param0: java.util.Map<any, any>, param1: zendesk.func.ZFunc2<any,any,any>): java.util.Map<any, any>;
				public static associate(param0: java.util.Collection<any>, param1: zendesk.func.ZFunc1<any,any>): java.util.Map<any, any>;
				public static ensureEmpty(param0: java.util.List<any>): java.util.List<any>;
			}
		}
	}

	declare module zendesk {
		export module util {
			export class ColorUtils {
				public static class: java.lang.Class<zendesk.util.ColorUtils>;
				public static LOG_TAG: string;
				public static apiColorToAndroidColor(param0: string): java.lang.Integer;
			}
		}
}

	declare module zendesk {
		export module util {
			export class DateUtils {
				public static class: java.lang.Class<zendesk.util.DateUtils>;
				public static isToday(param0: java.util.Date): boolean;
				public static isYesterday(param0: java.util.Date): boolean;
				public static deserialiseFromISO8601(param0: string): java.util.Date;
				public static getBeginOfDay(param0: java.util.Date): java.util.Date;
				public static isSameDay(param0: java.util.Date, param1: java.util.Date): boolean;
				public static serialiseToISO8601(param0: java.util.Date): string;
			}
		}
	}

	declare module zendesk {
		export module util {
			export class DigestUtils {
				public static class: java.lang.Class<zendesk.util.DigestUtils>;
				public static md5(param0: string): string;
				public static sha512(param0: string): string;
				public static sha384(param0: string): string;
				public static sha1(param0: string): string;
				public constructor();
				public static sha256(param0: string): string;
			}
		}
	}


	declare module zendesk {
		export module util {
			export class FileUtils {
				public static class: java.lang.Class<zendesk.util.FileUtils>;
				public static humanReadableFileSize(param0: java.lang.Long): string;
				public static humanReadableFileSize(param0: java.lang.Long, param1: boolean): string;
				public static getFileExtension(param0: string): string;
			}
		}
	}
	declare module zendesk {
		export module util {
			export class LocaleUtil {
				public static class: java.lang.Class<zendesk.util.LocaleUtil>;
				public static forLanguageTag(param0: string): java.util.Locale;
				public static toLanguageTag(param0: java.util.Locale): string;
			}
		}
	}

	declare module zendesk {
		export module util {
			export class MimeUtils {
				public static class: java.lang.Class<zendesk.util.MimeUtils>;
				public static hasMimeType(param0: string): boolean;
				public static hasExtension(param0: string): boolean;
				public static guessMimeTypeFromExtension(param0: string): string;
				public static guessExtensionFromMimeType(param0: string): string;
			}
		}
	}

	declare module zendesk {
		export module util {
			export class NumberFormatUtil {
				public static class: java.lang.Class<zendesk.util.NumberFormatUtil>;
				public static format(param0: number): string;
				public static format(param0: number, param1: zendesk.util.NumberFormatUtil.SuffixFormatDelegate): string;
			}
			export module NumberFormatUtil {
				export class NumberSuffix {
					public static class: java.lang.Class<zendesk.util.NumberFormatUtil.NumberSuffix>;
					public static NONE: zendesk.util.NumberFormatUtil.NumberSuffix;
					public static KILO: zendesk.util.NumberFormatUtil.NumberSuffix;
					public static MEGA: zendesk.util.NumberFormatUtil.NumberSuffix;
					public static GIGA: zendesk.util.NumberFormatUtil.NumberSuffix;
					public static TERA: zendesk.util.NumberFormatUtil.NumberSuffix;
					public static PETA: zendesk.util.NumberFormatUtil.NumberSuffix;
					public static EXA: zendesk.util.NumberFormatUtil.NumberSuffix;
					public static valueOf(param0: string): zendesk.util.NumberFormatUtil.NumberSuffix;
					public static values(): native.Array<zendesk.util.NumberFormatUtil.NumberSuffix>;
					public getSuffix(): string;
				}
				export class SuffixFormatDelegate {
					public static class: java.lang.Class<zendesk.util.NumberFormatUtil.SuffixFormatDelegate>;
					/**
					 * Constructs a new instance of the zendesk.util.NumberFormatUtil$SuffixFormatDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getSuffix(param0: zendesk.util.NumberFormatUtil.NumberSuffix): string;
					});
					public constructor();
					public getSuffix(param0: zendesk.util.NumberFormatUtil.NumberSuffix): string;
				}
			}
		}
	}

	declare module zendesk {
		export module util {
			export class ObjectUtils {
				public static class: java.lang.Class<zendesk.util.ObjectUtils>;
				public static getOrDefault(param0: any, param1: any): any;
				public static toString(param0: any, param1: string): string;
				public static getOrDefault(param0: java.util.concurrent.Callable<any>, param1: any): any;
				public static checkNonNull(param0: native.Array<any>): boolean;
				public static toString(param0: any): string;
				public static hash(param0: native.Array<any>): number;
				public static hashCode(param0: any): number;
				public static equals(param0: any, param1: any): boolean;
			}
		}
	}

	declare module zendesk {
		export module util {
			export class RegexUtils {
				public static class: java.lang.Class<zendesk.util.RegexUtils>;
				public static escape(param0: string): string;
			}
		}
	}


	declare module zendesk {
		export module util {
			export class StringUtils {
				public static class: java.lang.Class<zendesk.util.StringUtils>;
				public static EMPTY_STRING: string;
				public static LINE_SEPARATOR: string;
				public static ensureEmpty(param0: string): string;
				public static toCsvString(param0: java.util.List<string>): string;
				public static toCsvString(param0: native.Array<string>): string;
				public static capitalize(param0: string): string;
				public static toDateInIsoFormat(param0: java.util.Date): string;
				public static isNumeric(param0: string): boolean;
				public static toCsvStringNumber(param0: native.Array<java.lang.Number>): string;
				public static toCsvStringNumber(param0: java.util.List<any>): string;
				public static startsWithIdeographic(param0: string): boolean;
				public static isEmpty(param0: string): boolean;
				public static toCsvString(param0: native.Array<number>): string;
				public static escapeEcmaScript(param0: string): string;
				public static fromCsv(param0: string): java.util.List<string>;
				public static hasLength(param0: string): boolean;
				public static hasLengthMany(param0: native.Array<string>): boolean;
			}
		}
	}

declare module dagger {
	export class Binds {
		public static class: java.lang.Class<dagger.Binds>;
		/**
		 * Constructs a new instance of the dagger.Binds interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
		});
		public constructor();
	}
}

declare module dagger {
	export class BindsInstance {
		public static class: java.lang.Class<dagger.BindsInstance>;
		/**
		 * Constructs a new instance of the dagger.BindsInstance interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
		});
		public constructor();
	}
}

declare module dagger {
	export class BindsOptionalOf {
		public static class: java.lang.Class<dagger.BindsOptionalOf>;
		/**
		 * Constructs a new instance of the dagger.BindsOptionalOf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
		});
		public constructor();
	}
}

declare module dagger {
	export class Component {
		public static class: java.lang.Class<dagger.Component>;
		/**
		 * Constructs a new instance of the dagger.Component interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			modules(): native.Array<java.lang.Class<any>>;
			dependencies(): native.Array<java.lang.Class<any>>;
		});
		public constructor();
		public modules(): native.Array<java.lang.Class<any>>;
		public dependencies(): native.Array<java.lang.Class<any>>;
	}
	export module Component {
		export class Builder {
			public static class: java.lang.Class<dagger.Component.Builder>;
			/**
			 * Constructs a new instance of the dagger.Component$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
		export class Factory {
			public static class: java.lang.Class<dagger.Component.Factory>;
			/**
			 * Constructs a new instance of the dagger.Component$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module dagger {
	export class Lazy<T>  extends java.lang.Object {
		public static class: java.lang.Class<dagger.Lazy<any>>;
		/**
		 * Constructs a new instance of the dagger.Lazy<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			get(): T;
		});
		public constructor();
		public get(): T;
	}
}

declare module dagger {
	export class MapKey {
		public static class: java.lang.Class<dagger.MapKey>;
		/**
		 * Constructs a new instance of the dagger.MapKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			unwrapValue(): boolean;
		});
		public constructor();
		public unwrapValue(): boolean;
	}
}

declare module dagger {
	export class MembersInjector<T>  extends java.lang.Object {
		public static class: java.lang.Class<dagger.MembersInjector<any>>;
		/**
		 * Constructs a new instance of the dagger.MembersInjector<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			injectMembers(param0: T): void;
		});
		public constructor();
		public injectMembers(param0: T): void;
	}
}

declare module dagger {
	export class Module {
		public static class: java.lang.Class<dagger.Module>;
		/**
		 * Constructs a new instance of the dagger.Module interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			includes(): native.Array<java.lang.Class<any>>;
			subcomponents(): native.Array<java.lang.Class<any>>;
		});
		public constructor();
		public includes(): native.Array<java.lang.Class<any>>;
		public subcomponents(): native.Array<java.lang.Class<any>>;
	}
}

declare module dagger {
	export class Provides {
		public static class: java.lang.Class<dagger.Provides>;
		/**
		 * Constructs a new instance of the dagger.Provides interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
		});
		public constructor();
	}
}

declare module dagger {
	export class Reusable {
		public static class: java.lang.Class<dagger.Reusable>;
		/**
		 * Constructs a new instance of the dagger.Reusable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
		});
		public constructor();
	}
}

declare module dagger {
	export class Subcomponent {
		public static class: java.lang.Class<dagger.Subcomponent>;
		/**
		 * Constructs a new instance of the dagger.Subcomponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			modules(): native.Array<java.lang.Class<any>>;
		});
		public constructor();
		public modules(): native.Array<java.lang.Class<any>>;
	}
	export module Subcomponent {
		export class Builder {
			public static class: java.lang.Class<dagger.Subcomponent.Builder>;
			/**
			 * Constructs a new instance of the dagger.Subcomponent$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
		export class Factory {
			public static class: java.lang.Class<dagger.Subcomponent.Factory>;
			/**
			 * Constructs a new instance of the dagger.Subcomponent$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module dagger {
	export module android {
		export class AndroidInjection {
			public static class: java.lang.Class<dagger.android.AndroidInjection>;
			public static inject(param0: globalAndroid.app.Fragment): void;
			public static inject(param0: globalAndroid.app.Service): void;
			public static inject(param0: globalAndroid.content.BroadcastReceiver, param1: globalAndroid.content.Context): void;
			public static inject(param0: globalAndroid.app.Activity): void;
			public static inject(param0: globalAndroid.content.ContentProvider): void;
		}
	}
}

declare module dagger {
	export module android {
		export class AndroidInjectionKey {
			public static class: java.lang.Class<dagger.android.AndroidInjectionKey>;
			/**
			 * Constructs a new instance of the dagger.android.AndroidInjectionKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module dagger {
	export module android {
		export abstract class AndroidInjectionModule {
			public static class: java.lang.Class<dagger.android.AndroidInjectionModule>;
		}
	}
}

declare module dagger {
	export module android {
		export class AndroidInjector<T>  extends java.lang.Object {
			public static class: java.lang.Class<dagger.android.AndroidInjector<any>>;
			/**
			 * Constructs a new instance of the dagger.android.AndroidInjector<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				inject(param0: T): void;
			});
			public constructor();
			public inject(param0: T): void;
		}
		export module AndroidInjector {
			export abstract class Builder<T>  extends dagger.android.AndroidInjector.Factory<any> {
				public static class: java.lang.Class<dagger.android.AndroidInjector.Builder<any>>;
				public build(): dagger.android.AndroidInjector<any>;
				public seedInstance(param0: any): void;
				public constructor();
				public create(param0: any): dagger.android.AndroidInjector<any>;
			}
			export class Factory<T>  extends java.lang.Object {
				public static class: java.lang.Class<dagger.android.AndroidInjector.Factory<any>>;
				/**
				 * Constructs a new instance of the dagger.android.AndroidInjector$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(param0: T): dagger.android.AndroidInjector<T>;
				});
				public constructor();
				public create(param0: T): dagger.android.AndroidInjector<T>;
			}
		}
	}
}

declare module dagger {
	export module android {
		export class ContributesAndroidInjector {
			public static class: java.lang.Class<dagger.android.ContributesAndroidInjector>;
			/**
			 * Constructs a new instance of the dagger.android.ContributesAndroidInjector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				modules(): native.Array<java.lang.Class<any>>;
			});
			public constructor();
			public modules(): native.Array<java.lang.Class<any>>;
		}
	}
}

declare module dagger {
	export module android {
		export abstract class DaggerActivity implements dagger.android.HasAndroidInjector {
			public static class: java.lang.Class<dagger.android.DaggerActivity>;
			public androidInjector(): dagger.android.AndroidInjector<any>;
			public onCreate(param0: globalAndroid.os.Bundle): void;
			public constructor();
		}
	}
}

declare module dagger {
	export module android {
		export class DaggerActivity_MembersInjector extends dagger.MembersInjector<dagger.android.DaggerActivity> {
			public static class: java.lang.Class<dagger.android.DaggerActivity_MembersInjector>;
			public static injectAndroidInjector(param0: dagger.android.DaggerActivity, param1: dagger.android.DispatchingAndroidInjector<any>): void;
			public static create(param0: javax.inject.Provider<dagger.android.DispatchingAndroidInjector<any>>): dagger.MembersInjector<dagger.android.DaggerActivity>;
			public injectMembers(param0: any): void;
			public constructor(param0: javax.inject.Provider<dagger.android.DispatchingAndroidInjector<any>>);
			public injectMembers(param0: dagger.android.DaggerActivity): void;
		}
	}
}

declare module dagger {
	export module android {
		export abstract class DaggerApplication implements dagger.android.HasAndroidInjector {
			public static class: java.lang.Class<dagger.android.DaggerApplication>;
			public applicationInjector(): dagger.android.AndroidInjector<any>;
			public androidInjector(): dagger.android.AndroidInjector<any>;
			public onCreate(): void;
			public constructor();
		}
	}
}

declare module dagger {
	export module android {
		export class DaggerApplication_MembersInjector extends dagger.MembersInjector<dagger.android.DaggerApplication> {
			public static class: java.lang.Class<dagger.android.DaggerApplication_MembersInjector>;
			public injectMembers(param0: any): void;
			public constructor(param0: javax.inject.Provider<dagger.android.DispatchingAndroidInjector<any>>);
			public injectMembers(param0: dagger.android.DaggerApplication): void;
			public static create(param0: javax.inject.Provider<dagger.android.DispatchingAndroidInjector<any>>): dagger.MembersInjector<dagger.android.DaggerApplication>;
			public static injectAndroidInjector(param0: dagger.android.DaggerApplication, param1: dagger.android.DispatchingAndroidInjector<any>): void;
		}
	}
}

declare module dagger {
	export module android {
		export abstract class DaggerBroadcastReceiver {
			public static class: java.lang.Class<dagger.android.DaggerBroadcastReceiver>;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public constructor();
		}
	}
}

declare module dagger {
	export module android {
		export abstract class DaggerContentProvider {
			public static class: java.lang.Class<dagger.android.DaggerContentProvider>;
			public onCreate(): boolean;
			public constructor();
		}
	}
}

declare module dagger {
	export module android {
		export abstract class DaggerDialogFragment implements dagger.android.HasAndroidInjector {
			public static class: java.lang.Class<dagger.android.DaggerDialogFragment>;
			public androidInjector(): dagger.android.AndroidInjector<any>;
			public constructor();
			public onAttach(param0: globalAndroid.content.Context): void;
		}
	}
}

declare module dagger {
	export module android {
		export class DaggerDialogFragment_MembersInjector extends dagger.MembersInjector<dagger.android.DaggerDialogFragment> {
			public static class: java.lang.Class<dagger.android.DaggerDialogFragment_MembersInjector>;
			public static create(param0: javax.inject.Provider<dagger.android.DispatchingAndroidInjector<any>>): dagger.MembersInjector<dagger.android.DaggerDialogFragment>;
			public injectMembers(param0: dagger.android.DaggerDialogFragment): void;
			public injectMembers(param0: any): void;
			public constructor(param0: javax.inject.Provider<dagger.android.DispatchingAndroidInjector<any>>);
			public static injectAndroidInjector(param0: dagger.android.DaggerDialogFragment, param1: dagger.android.DispatchingAndroidInjector<any>): void;
		}
	}
}

declare module dagger {
	export module android {
		export abstract class DaggerFragment implements dagger.android.HasAndroidInjector {
			public static class: java.lang.Class<dagger.android.DaggerFragment>;
			public androidInjector(): dagger.android.AndroidInjector<any>;
			public constructor();
			public onAttach(param0: globalAndroid.content.Context): void;
		}
	}
}

declare module dagger {
	export module android {
		export class DaggerFragment_MembersInjector extends dagger.MembersInjector<dagger.android.DaggerFragment> {
			public static class: java.lang.Class<dagger.android.DaggerFragment_MembersInjector>;
			public static create(param0: javax.inject.Provider<dagger.android.DispatchingAndroidInjector<any>>): dagger.MembersInjector<dagger.android.DaggerFragment>;
			public static injectAndroidInjector(param0: dagger.android.DaggerFragment, param1: dagger.android.DispatchingAndroidInjector<any>): void;
			public injectMembers(param0: dagger.android.DaggerFragment): void;
			public injectMembers(param0: any): void;
			public constructor(param0: javax.inject.Provider<dagger.android.DispatchingAndroidInjector<any>>);
		}
	}
}

declare module dagger {
	export module android {
		export abstract class DaggerIntentService {
			public static class: java.lang.Class<dagger.android.DaggerIntentService>;
			public onCreate(): void;
			public constructor(param0: string);
		}
	}
}

declare module dagger {
	export module android {
		export abstract class DaggerService {
			public static class: java.lang.Class<dagger.android.DaggerService>;
			public onCreate(): void;
			public constructor();
		}
	}
}

declare module dagger {
	export module android {
		export class DispatchingAndroidInjector<T>  extends dagger.internal.Factory<dagger.android.DispatchingAndroidInjector<any>> {
			public static class: java.lang.Class<dagger.android.DispatchingAndroidInjector<any>>;
			public get(): any;
			public maybeInject(param0: any): boolean;
			public inject(param0: any): void;
			public constructor(param0: javax.inject.Provider<java.util.Map<java.lang.Class<any>,javax.inject.Provider<dagger.android.AndroidInjector.Factory<any>>>>, param1: javax.inject.Provider<java.util.Map<string,javax.inject.Provider<dagger.android.AndroidInjector.Factory<any>>>>);
			public static newInstance(param0: java.util.Map<any, any>, param1: java.util.Map<any, any>): dagger.android.DispatchingAndroidInjector<any>;
			public static create(param0: javax.inject.Provider<any>, param1: javax.inject.Provider<any>): dagger.android.DispatchingAndroidInjector<any>;
			public get(): dagger.android.DispatchingAndroidInjector<any>;
		}
	}
}

declare module dagger {
	export module android {
		export class HasActivityInjector {
			public static class: java.lang.Class<dagger.android.HasActivityInjector>;
			/**
			 * Constructs a new instance of the dagger.android.HasActivityInjector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				activityInjector(): dagger.android.AndroidInjector<globalAndroid.app.Activity>;
			});
			public constructor();
			public activityInjector(): dagger.android.AndroidInjector<globalAndroid.app.Activity>;
		}
	}
}

declare module dagger {
	export module android {
		export class HasAndroidInjector {
			public static class: java.lang.Class<dagger.android.HasAndroidInjector>;
			/**
			 * Constructs a new instance of the dagger.android.HasAndroidInjector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				androidInjector(): dagger.android.AndroidInjector<any>;
			});
			public constructor();
			public androidInjector(): dagger.android.AndroidInjector<any>;
		}
	}
}

declare module dagger {
	export module android {
		export class HasBroadcastReceiverInjector {
			public static class: java.lang.Class<dagger.android.HasBroadcastReceiverInjector>;
			/**
			 * Constructs a new instance of the dagger.android.HasBroadcastReceiverInjector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				broadcastReceiverInjector(): dagger.android.AndroidInjector<globalAndroid.content.BroadcastReceiver>;
			});
			public constructor();
			public broadcastReceiverInjector(): dagger.android.AndroidInjector<globalAndroid.content.BroadcastReceiver>;
		}
	}
}

declare module dagger {
	export module android {
		export class HasContentProviderInjector {
			public static class: java.lang.Class<dagger.android.HasContentProviderInjector>;
			/**
			 * Constructs a new instance of the dagger.android.HasContentProviderInjector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				contentProviderInjector(): dagger.android.AndroidInjector<globalAndroid.content.ContentProvider>;
			});
			public constructor();
			public contentProviderInjector(): dagger.android.AndroidInjector<globalAndroid.content.ContentProvider>;
		}
	}
}

declare module dagger {
	export module android {
		export class HasFragmentInjector {
			public static class: java.lang.Class<dagger.android.HasFragmentInjector>;
			/**
			 * Constructs a new instance of the dagger.android.HasFragmentInjector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				fragmentInjector(): dagger.android.AndroidInjector<globalAndroid.app.Fragment>;
			});
			public constructor();
			public fragmentInjector(): dagger.android.AndroidInjector<globalAndroid.app.Fragment>;
		}
	}
}

declare module dagger {
	export module android {
		export class HasServiceInjector {
			public static class: java.lang.Class<dagger.android.HasServiceInjector>;
			/**
			 * Constructs a new instance of the dagger.android.HasServiceInjector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				serviceInjector(): dagger.android.AndroidInjector<globalAndroid.app.Service>;
			});
			public constructor();
			public serviceInjector(): dagger.android.AndroidInjector<globalAndroid.app.Service>;
		}
	}
}

declare module dagger {
	export module android {
		export module internal {
			export class AndroidInjectionKeys {
				public static class: java.lang.Class<dagger.android.internal.AndroidInjectionKeys>;
				public static of(param0: string): string;
			}
		}
	}
}


declare module dagger {
	export module internal {
		export abstract class AbstractMapFactory<K, V, V2>  extends dagger.internal.Factory<java.util.Map<any,any>> {
			public static class: java.lang.Class<dagger.internal.AbstractMapFactory<any,any,any>>;
			public get(): any;
		}
		export module AbstractMapFactory {
			export abstract class Builder<K, V, V2>  extends java.lang.Object {
				public static class: java.lang.Class<dagger.internal.AbstractMapFactory.Builder<any,any,any>>;
			}
		}
	}
}

declare module dagger {
	export module internal {
		export class Beta {
			public static class: java.lang.Class<dagger.internal.Beta>;
			/**
			 * Constructs a new instance of the dagger.internal.Beta interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module dagger {
	export module internal {
		export class ComponentDefinitionType {
			public static class: java.lang.Class<dagger.internal.ComponentDefinitionType>;
			/**
			 * Constructs a new instance of the dagger.internal.ComponentDefinitionType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): java.lang.Class<any>;
			});
			public constructor();
			public value(): java.lang.Class<any>;
		}
	}
}

declare module dagger {
	export module internal {
		export class ConfigureInitializationParameters {
			public static class: java.lang.Class<dagger.internal.ConfigureInitializationParameters>;
			/**
			 * Constructs a new instance of the dagger.internal.ConfigureInitializationParameters interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): native.Array<string>;
			});
			public constructor();
			public value(): native.Array<string>;
		}
	}
}

declare module dagger {
	export module internal {
		export class DaggerCollections {
			public static class: java.lang.Class<dagger.internal.DaggerCollections>;
			public static presizedList(param0: number): java.util.List<any>;
			public static hasDuplicates(param0: java.util.List<any>): boolean;
			public static newLinkedHashMapWithExpectedSize(param0: number): java.util.LinkedHashMap<any, any>;
		}
	}
}

declare module dagger {
	export module internal {
		export class DelegateFactory<T>  extends dagger.internal.Factory<any> {
			public static class: java.lang.Class<dagger.internal.DelegateFactory<any>>;
			public get(): any;
			public constructor();
			/** @deprecated */
			public setDelegatedProvider(param0: javax.inject.Provider<any>): void;
			public static setDelegate(param0: javax.inject.Provider<any>, param1: javax.inject.Provider<any>): void;
		}
	}
}

declare module dagger {
	export module internal {
		export class DoubleCheck<T>  extends java.lang.Object {
			public static class: java.lang.Class<dagger.internal.DoubleCheck<any>>;
			public static reentrantCheck(param0: any, param1: any): any;
			public static lazy(param0: javax.inject.Provider<any>): dagger.Lazy<any>;
			public get(): T;
			public static provider(param0: javax.inject.Provider<any>): javax.inject.Provider<any>;
		}
	}
}

declare module dagger {
	export module internal {
		export class Factory<T>  extends javax.inject.Provider<any> {
			public static class: java.lang.Class<dagger.internal.Factory<any>>;
			/**
			 * Constructs a new instance of the dagger.internal.Factory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				get(): any;
			});
			public constructor();
			public get(): any;
		}
	}
}

declare module dagger {
	export module internal {
		export class GenerationOptions {
			public static class: java.lang.Class<dagger.internal.GenerationOptions>;
			/**
			 * Constructs a new instance of the dagger.internal.GenerationOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				fastInit(): boolean;
			});
			public constructor();
			public fastInit(): boolean;
		}
	}
}

declare module dagger {
	export module internal {
		export class GwtIncompatible {
			public static class: java.lang.Class<dagger.internal.GwtIncompatible>;
			/**
			 * Constructs a new instance of the dagger.internal.GwtIncompatible interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module dagger {
	export module internal {
		export class InstanceFactory<T>  extends java.lang.Object {
			public static class: java.lang.Class<dagger.internal.InstanceFactory<any>>;
			public static create(param0: any): dagger.internal.Factory<any>;
			public static createNullable(param0: any): dagger.internal.Factory<any>;
			public get(): T;
		}
	}
}

declare module dagger {
	export module internal {
		export class MapBuilder<K, V>  extends java.lang.Object {
			public static class: java.lang.Class<dagger.internal.MapBuilder<any,any>>;
			public build(): java.util.Map<K,V>;
			public put(param0: K, param1: V): dagger.internal.MapBuilder<K,V>;
			public static newMapBuilder(param0: number): dagger.internal.MapBuilder<any,any>;
			public putAll(param0: java.util.Map<K,V>): dagger.internal.MapBuilder<K,V>;
		}
	}
}

declare module dagger {
	export module internal {
		export class MapFactory<K, V>  extends dagger.internal.AbstractMapFactory<any,any,any> {
			public static class: java.lang.Class<dagger.internal.MapFactory<any,any>>;
			public static builder(param0: number): dagger.internal.MapFactory.Builder<any,any>;
			public static emptyMapProvider(): javax.inject.Provider<any>;
			public get(): java.util.Map<any,any>;
		}
		export module MapFactory {
			export class Builder<K, V>  extends dagger.internal.AbstractMapFactory.Builder<any,any,any> {
				public static class: java.lang.Class<dagger.internal.MapFactory.Builder<any,any>>;
				public put(param0: any, param1: javax.inject.Provider<any>): dagger.internal.MapFactory.Builder<any,any>;
				public build(): dagger.internal.MapFactory<any,any>;
				public putAll(param0: javax.inject.Provider<java.util.Map<any,any>>): dagger.internal.MapFactory.Builder<any,any>;
			}
		}
	}
}

declare module dagger {
	export module internal {
		export class MapProviderFactory<K, V>  extends dagger.internal.AbstractMapFactory<any,any,javax.inject.Provider<any>> implements dagger.Lazy<java.util.Map<any,javax.inject.Provider<any>>>  {
			public static class: java.lang.Class<dagger.internal.MapProviderFactory<any,any>>;
			public static builder(param0: number): dagger.internal.MapProviderFactory.Builder<any,any>;
			public get(): java.util.Map<any,javax.inject.Provider<any>>;
			public get(): any;
		}
		export module MapProviderFactory {
			export class Builder<K, V>  extends dagger.internal.AbstractMapFactory.Builder<any,any,javax.inject.Provider<any>> {
				public static class: java.lang.Class<dagger.internal.MapProviderFactory.Builder<any,any>>;
				public put(param0: any, param1: javax.inject.Provider<any>): dagger.internal.MapProviderFactory.Builder<any,any>;
				public putAll(param0: javax.inject.Provider<java.util.Map<any,javax.inject.Provider<any>>>): dagger.internal.MapProviderFactory.Builder<any,any>;
				public build(): dagger.internal.MapProviderFactory<any,any>;
			}
		}
	}
}

declare module dagger {
	export module internal {
		export class MembersInjectors {
			public static class: java.lang.Class<dagger.internal.MembersInjectors>;
			public static noOp(): dagger.MembersInjector<any>;
		}
		export module MembersInjectors {
			export class NoOpMembersInjector extends dagger.MembersInjector<any> {
				public static class: java.lang.Class<dagger.internal.MembersInjectors.NoOpMembersInjector>;
				public static INSTANCE: dagger.internal.MembersInjectors.NoOpMembersInjector;
				public static values(): native.Array<dagger.internal.MembersInjectors.NoOpMembersInjector>;
				public static valueOf(param0: string): dagger.internal.MembersInjectors.NoOpMembersInjector;
				public injectMembers(param0: any): void;
			}
		}
	}
}

declare module dagger {
	export module internal {
		export class MemoizedSentinel {
			public static class: java.lang.Class<dagger.internal.MemoizedSentinel>;
			public constructor();
		}
	}
}

declare module dagger {
	export module internal {
		export class MissingBindingFactory<T>  extends dagger.internal.Factory<any> {
			public static class: java.lang.Class<dagger.internal.MissingBindingFactory<any>>;
			public get(): any;
			public static create(): dagger.internal.Factory<any>;
		}
	}
}

declare module dagger {
	export module internal {
		export class ModifiableBinding {
			public static class: java.lang.Class<dagger.internal.ModifiableBinding>;
			/**
			 * Constructs a new instance of the dagger.internal.ModifiableBinding interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				modifiableBindingType(): string;
				bindingRequest(): string;
				multibindingContributions(): native.Array<string>;
			});
			public constructor();
			public multibindingContributions(): native.Array<string>;
			public modifiableBindingType(): string;
			public bindingRequest(): string;
		}
	}
}

declare module dagger {
	export module internal {
		export class ModifiableModule {
			public static class: java.lang.Class<dagger.internal.ModifiableModule>;
			/**
			 * Constructs a new instance of the dagger.internal.ModifiableModule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module dagger {
	export module internal {
		export class Preconditions {
			public static class: java.lang.Class<dagger.internal.Preconditions>;
			public static checkNotNull(param0: any, param1: string): any;
			public static checkBuilderRequirement(param0: any, param1: java.lang.Class<any>): void;
			public static checkNotNull(param0: any, param1: string, param2: any): any;
			public static checkNotNull(param0: any): any;
		}
	}
}

declare module dagger {
	export module internal {
		export class ProviderOfLazy<T>  extends javax.inject.Provider<dagger.Lazy<any>> {
			public static class: java.lang.Class<dagger.internal.ProviderOfLazy<any>>;
			public get(): dagger.Lazy<any>;
			public get(): any;
			public static create(param0: javax.inject.Provider<any>): javax.inject.Provider<any>;
		}
	}
}

declare module dagger {
	export module internal {
		export class SetBuilder<T>  extends java.lang.Object {
			public static class: java.lang.Class<dagger.internal.SetBuilder<any>>;
			public addAll(param0: java.util.Collection<any>): dagger.internal.SetBuilder<T>;
			public static newSetBuilder(param0: number): dagger.internal.SetBuilder<any>;
			public build(): java.util.Set<T>;
			public add(param0: T): dagger.internal.SetBuilder<T>;
		}
	}
}

declare module dagger {
	export module internal {
		export class SetFactory<T>  extends dagger.internal.Factory<java.util.Set<any>> {
			public static class: java.lang.Class<dagger.internal.SetFactory<any>>;
			public get(): any;
			public get(): java.util.Set<any>;
			public static builder(param0: number, param1: number): dagger.internal.SetFactory.Builder<any>;
			public static empty(): dagger.internal.Factory<any>;
		}
		export module SetFactory {
			export class Builder<T>  extends java.lang.Object {
				public static class: java.lang.Class<dagger.internal.SetFactory.Builder<any>>;
				public build(): dagger.internal.SetFactory<T>;
				public addCollectionProvider(param0: javax.inject.Provider<any>): dagger.internal.SetFactory.Builder<T>;
				public addProvider(param0: javax.inject.Provider<any>): dagger.internal.SetFactory.Builder<T>;
			}
		}
	}
}

declare module dagger {
	export module internal {
		export class SingleCheck<T>  extends javax.inject.Provider<any> {
			public static class: java.lang.Class<dagger.internal.SingleCheck<any>>;
			public get(): any;
			public static provider(param0: javax.inject.Provider<any>): javax.inject.Provider<any>;
		}
	}
}

declare module dagger {
	export module multibindings {
		export class ClassKey {
			public static class: java.lang.Class<dagger.multibindings.ClassKey>;
			/**
			 * Constructs a new instance of the dagger.multibindings.ClassKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): java.lang.Class<any>;
			});
			public constructor();
			public value(): java.lang.Class<any>;
		}
	}
}

declare module dagger {
	export module multibindings {
		export class ElementsIntoSet {
			public static class: java.lang.Class<dagger.multibindings.ElementsIntoSet>;
			/**
			 * Constructs a new instance of the dagger.multibindings.ElementsIntoSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module dagger {
	export module multibindings {
		export class IntKey {
			public static class: java.lang.Class<dagger.multibindings.IntKey>;
			/**
			 * Constructs a new instance of the dagger.multibindings.IntKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): number;
			});
			public constructor();
			public value(): number;
		}
	}
}

declare module dagger {
	export module multibindings {
		export class IntoMap {
			public static class: java.lang.Class<dagger.multibindings.IntoMap>;
			/**
			 * Constructs a new instance of the dagger.multibindings.IntoMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module dagger {
	export module multibindings {
		export class IntoSet {
			public static class: java.lang.Class<dagger.multibindings.IntoSet>;
			/**
			 * Constructs a new instance of the dagger.multibindings.IntoSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module dagger {
	export module multibindings {
		export class LongKey {
			public static class: java.lang.Class<dagger.multibindings.LongKey>;
			/**
			 * Constructs a new instance of the dagger.multibindings.LongKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): number;
			});
			public constructor();
			public value(): number;
		}
	}
}

declare module dagger {
	export module multibindings {
		export class Multibinds {
			public static class: java.lang.Class<dagger.multibindings.Multibinds>;
			/**
			 * Constructs a new instance of the dagger.multibindings.Multibinds interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module dagger {
	export module multibindings {
		export class StringKey {
			public static class: java.lang.Class<dagger.multibindings.StringKey>;
			/**
			 * Constructs a new instance of the dagger.multibindings.StringKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module javax {
	export module inject {
		export class Inject {
			public static class: java.lang.Class<javax.inject.Inject>;
			/**
			 * Constructs a new instance of the javax.inject.Inject interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module javax {
	export module inject {
		export class Named {
			public static class: java.lang.Class<javax.inject.Named>;
			/**
			 * Constructs a new instance of the javax.inject.Named interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module javax {
	export module inject {
		export class Provider<T>  extends java.lang.Object {
			public static class: java.lang.Class<javax.inject.Provider<any>>;
			/**
			 * Constructs a new instance of the javax.inject.Provider<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				get(): T;
			});
			public constructor();
			public get(): T;
		}
	}
}

declare module javax {
	export module inject {
		export class Qualifier {
			public static class: java.lang.Class<javax.inject.Qualifier>;
			/**
			 * Constructs a new instance of the javax.inject.Qualifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module javax {
	export module inject {
		export class Scope {
			public static class: java.lang.Class<javax.inject.Scope>;
			/**
			 * Constructs a new instance of the javax.inject.Scope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module javax {
	export module inject {
		export class Singleton {
			public static class: java.lang.Class<javax.inject.Singleton>;
			/**
			 * Constructs a new instance of the javax.inject.Singleton interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module okhttp3 {
	export class Address {
		public static class: java.lang.Class<okhttp3.Address>;
		public proxy(): java.net.Proxy;
		public equals(param0: any): boolean;
		public constructor(param0: string, param1: number, param2: okhttp3.Dns, param3: javax.net.SocketFactory, param4: javax.net.ssl.SSLSocketFactory, param5: javax.net.ssl.HostnameVerifier, param6: okhttp3.CertificatePinner, param7: okhttp3.Authenticator, param8: java.net.Proxy, param9: java.util.List<okhttp3.Protocol>, param10: java.util.List<okhttp3.ConnectionSpec>, param11: java.net.ProxySelector);
		public proxySelector(): java.net.ProxySelector;
		public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
		public url(): okhttp3.HttpUrl;
		public certificatePinner(): okhttp3.CertificatePinner;
		public toString(): string;
		public protocols(): java.util.List<okhttp3.Protocol>;
		public socketFactory(): javax.net.SocketFactory;
		public dns(): okhttp3.Dns;
		public proxyAuthenticator(): okhttp3.Authenticator;
		public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
		public hashCode(): number;
		public connectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
	}
}

declare module okhttp3 {
	export class Authenticator {
		public static class: java.lang.Class<okhttp3.Authenticator>;
		/**
		 * Constructs a new instance of the okhttp3.Authenticator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			authenticate(param0: okhttp3.Route, param1: okhttp3.Response): okhttp3.Request;
			<clinit>(): void;
		});
		public constructor();
		public static NONE: okhttp3.Authenticator;
		public authenticate(param0: okhttp3.Route, param1: okhttp3.Response): okhttp3.Request;
	}
}

declare module okhttp3 {
	export class Cache {
		public static class: java.lang.Class<okhttp3.Cache>;
		public close(): void;
		public directory(): java.io.File;
		public constructor(param0: java.io.File, param1: number);
		public static key(param0: okhttp3.HttpUrl): string;
		public writeAbortCount(): number;
		public evictAll(): void;
		public delete(): void;
		public isClosed(): boolean;
		public networkCount(): number;
		public requestCount(): number;
		public flush(): void;
		public initialize(): void;
		public size(): number;
		public writeSuccessCount(): number;
		public hitCount(): number;
		public urls(): java.util.Iterator<string>;
		public maxSize(): number;
	}
	export module Cache {
		export class CacheRequestImpl extends okhttp3.internal.cache.CacheRequest {
			public static class: java.lang.Class<okhttp3.Cache.CacheRequestImpl>;
			public body(): okio.Sink;
			public abort(): void;
		}
		export class CacheResponseBody extends okhttp3.ResponseBody {
			public static class: java.lang.Class<okhttp3.Cache.CacheResponseBody>;
			public contentLength(): number;
			public source(): okio.BufferedSource;
			public contentType(): okhttp3.MediaType;
		}
		export class Entry {
			public static class: java.lang.Class<okhttp3.Cache.Entry>;
			public matches(param0: okhttp3.Request, param1: okhttp3.Response): boolean;
			public response(param0: okhttp3.internal.cache.DiskLruCache.Snapshot): okhttp3.Response;
			public writeTo(param0: okhttp3.internal.cache.DiskLruCache.Editor): void;
		}
	}
}

declare module okhttp3 {
	export class CacheControl {
		public static class: java.lang.Class<okhttp3.CacheControl>;
		public static FORCE_NETWORK: okhttp3.CacheControl;
		public static FORCE_CACHE: okhttp3.CacheControl;
		public maxStaleSeconds(): number;
		public mustRevalidate(): boolean;
		public static parse(param0: okhttp3.Headers): okhttp3.CacheControl;
		public toString(): string;
		public minFreshSeconds(): number;
		public onlyIfCached(): boolean;
		public noCache(): boolean;
		public noTransform(): boolean;
		public isPrivate(): boolean;
		public immutable(): boolean;
		public sMaxAgeSeconds(): number;
		public noStore(): boolean;
		public maxAgeSeconds(): number;
		public isPublic(): boolean;
	}
	export module CacheControl {
		export class Builder {
			public static class: java.lang.Class<okhttp3.CacheControl.Builder>;
			public noCache(): okhttp3.CacheControl.Builder;
			public maxStale(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
			public immutable(): okhttp3.CacheControl.Builder;
			public onlyIfCached(): okhttp3.CacheControl.Builder;
			public minFresh(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
			public maxAge(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
			public constructor();
			public build(): okhttp3.CacheControl;
			public noStore(): okhttp3.CacheControl.Builder;
			public noTransform(): okhttp3.CacheControl.Builder;
		}
	}
}

declare module okhttp3 {
	export class Call {
		public static class: java.lang.Class<okhttp3.Call>;
		/**
		 * Constructs a new instance of the okhttp3.Call interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			request(): okhttp3.Request;
			execute(): okhttp3.Response;
			enqueue(param0: okhttp3.Callback): void;
			cancel(): void;
			isExecuted(): boolean;
			isCanceled(): boolean;
			timeout(): okio.Timeout;
			clone(): okhttp3.Call;
		});
		public constructor();
		public isExecuted(): boolean;
		public clone(): okhttp3.Call;
		public request(): okhttp3.Request;
		public execute(): okhttp3.Response;
		public isCanceled(): boolean;
		public enqueue(param0: okhttp3.Callback): void;
		public cancel(): void;
		public timeout(): okio.Timeout;
	}
	export module Call {
		export class Factory {
			public static class: java.lang.Class<okhttp3.Call.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.Call$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				newCall(param0: okhttp3.Request): okhttp3.Call;
			});
			public constructor();
			public newCall(param0: okhttp3.Request): okhttp3.Call;
		}
	}
}

declare module okhttp3 {
	export class Callback {
		public static class: java.lang.Class<okhttp3.Callback>;
		/**
		 * Constructs a new instance of the okhttp3.Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			onFailure(param0: okhttp3.Call, param1: java.io.IOException): void;
			onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
		});
		public constructor();
		public onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
		public onFailure(param0: okhttp3.Call, param1: java.io.IOException): void;
	}
}

declare module okhttp3 {
	export class CertificatePinner {
		public static class: java.lang.Class<okhttp3.CertificatePinner>;
		public static DEFAULT: okhttp3.CertificatePinner;
		public equals(param0: any): boolean;
		public static pin(param0: java.security.cert.Certificate): string;
		public hashCode(): number;
		/** @deprecated */
		public check(param0: string, param1: native.Array<java.security.cert.Certificate>): void;
		public check(param0: string, param1: java.util.List<java.security.cert.Certificate>): void;
	}
	export module CertificatePinner {
		export class Builder {
			public static class: java.lang.Class<okhttp3.CertificatePinner.Builder>;
			public build(): okhttp3.CertificatePinner;
			public add(param0: string, param1: native.Array<string>): okhttp3.CertificatePinner.Builder;
			public constructor();
		}
		export class Pin {
			public static class: java.lang.Class<okhttp3.CertificatePinner.Pin>;
			public equals(param0: any): boolean;
			public toString(): string;
			public hashCode(): number;
		}
	}
}

declare module okhttp3 {
	export class Challenge {
		public static class: java.lang.Class<okhttp3.Challenge>;
		public authParams(): java.util.Map<string,string>;
		public charset(): java.nio.charset.Charset;
		public equals(param0: any): boolean;
		public scheme(): string;
		public hashCode(): number;
		public toString(): string;
		public constructor(param0: string, param1: java.util.Map<string,string>);
		public withCharset(param0: java.nio.charset.Charset): okhttp3.Challenge;
		public constructor(param0: string, param1: string);
		public realm(): string;
	}
}

declare module okhttp3 {
	export class CipherSuite {
		public static class: java.lang.Class<okhttp3.CipherSuite>;
		public static TLS_RSA_WITH_NULL_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_RC4_128_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_RC4_128_MD5: okhttp3.CipherSuite;
		public static TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_DES_CBC_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_3DES_EDE_CBC_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_RC4_128_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_RC4_40_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_NULL_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_SEED_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_EMPTY_RENEGOTIATION_INFO_SCSV: okhttp3.CipherSuite;
		public static TLS_FALLBACK_SCSV: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_128_CCM_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_256_CCM_8_SHA256: okhttp3.CipherSuite;
		public javaName(): string;
		public static forJavaName(param0: string): okhttp3.CipherSuite;
		public toString(): string;
	}
}

declare module okhttp3 {
	export class Connection {
		public static class: java.lang.Class<okhttp3.Connection>;
		/**
		 * Constructs a new instance of the okhttp3.Connection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			route(): okhttp3.Route;
			socket(): java.net.Socket;
			handshake(): okhttp3.Handshake;
			protocol(): okhttp3.Protocol;
		});
		public constructor();
		public route(): okhttp3.Route;
		public protocol(): okhttp3.Protocol;
		public handshake(): okhttp3.Handshake;
		public socket(): java.net.Socket;
	}
}

declare module okhttp3 {
	export class ConnectionPool {
		public static class: java.lang.Class<okhttp3.ConnectionPool>;
		public constructor();
		public connectionCount(): number;
		public evictAll(): void;
		public idleConnectionCount(): number;
		public constructor(param0: number, param1: number, param2: java.util.concurrent.TimeUnit);
	}
}

declare module okhttp3 {
	export class ConnectionSpec {
		public static class: java.lang.Class<okhttp3.ConnectionSpec>;
		public static RESTRICTED_TLS: okhttp3.ConnectionSpec;
		public static MODERN_TLS: okhttp3.ConnectionSpec;
		public static COMPATIBLE_TLS: okhttp3.ConnectionSpec;
		public static CLEARTEXT: okhttp3.ConnectionSpec;
		public cipherSuites(): java.util.List<okhttp3.CipherSuite>;
		public equals(param0: any): boolean;
		public tlsVersions(): java.util.List<okhttp3.TlsVersion>;
		public supportsTlsExtensions(): boolean;
		public hashCode(): number;
		public isCompatible(param0: javax.net.ssl.SSLSocket): boolean;
		public isTls(): boolean;
		public toString(): string;
	}
	export module ConnectionSpec {
		export class Builder {
			public static class: java.lang.Class<okhttp3.ConnectionSpec.Builder>;
			public tlsVersions(param0: native.Array<string>): okhttp3.ConnectionSpec.Builder;
			public cipherSuites(param0: native.Array<string>): okhttp3.ConnectionSpec.Builder;
			public build(): okhttp3.ConnectionSpec;
			public constructor(param0: okhttp3.ConnectionSpec);
			public cipherSuites(param0: native.Array<okhttp3.CipherSuite>): okhttp3.ConnectionSpec.Builder;
			public supportsTlsExtensions(param0: boolean): okhttp3.ConnectionSpec.Builder;
			public allEnabledCipherSuites(): okhttp3.ConnectionSpec.Builder;
			public tlsVersions(param0: native.Array<okhttp3.TlsVersion>): okhttp3.ConnectionSpec.Builder;
			public allEnabledTlsVersions(): okhttp3.ConnectionSpec.Builder;
		}
	}
}

declare module okhttp3 {
	export class Cookie {
		public static class: java.lang.Class<okhttp3.Cookie>;
		public domain(): string;
		public equals(param0: any): boolean;
		public matches(param0: okhttp3.HttpUrl): boolean;
		public static parseAll(param0: okhttp3.HttpUrl, param1: okhttp3.Headers): java.util.List<okhttp3.Cookie>;
		public toString(): string;
		public persistent(): boolean;
		public httpOnly(): boolean;
		public static parse(param0: okhttp3.HttpUrl, param1: string): okhttp3.Cookie;
		public hostOnly(): boolean;
		public expiresAt(): number;
		public hashCode(): number;
		public name(): string;
		public path(): string;
		public secure(): boolean;
		public value(): string;
	}
	export module Cookie {
		export class Builder {
			public static class: java.lang.Class<okhttp3.Cookie.Builder>;
			public domain(param0: string): okhttp3.Cookie.Builder;
			public hostOnlyDomain(param0: string): okhttp3.Cookie.Builder;
			public value(param0: string): okhttp3.Cookie.Builder;
			public httpOnly(): okhttp3.Cookie.Builder;
			public secure(): okhttp3.Cookie.Builder;
			public expiresAt(param0: number): okhttp3.Cookie.Builder;
			public build(): okhttp3.Cookie;
			public name(param0: string): okhttp3.Cookie.Builder;
			public constructor();
			public path(param0: string): okhttp3.Cookie.Builder;
		}
	}
}

declare module okhttp3 {
	export class CookieJar {
		public static class: java.lang.Class<okhttp3.CookieJar>;
		/**
		 * Constructs a new instance of the okhttp3.CookieJar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			saveFromResponse(param0: okhttp3.HttpUrl, param1: java.util.List<okhttp3.Cookie>): void;
			loadForRequest(param0: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
			<clinit>(): void;
		});
		public constructor();
		public static NO_COOKIES: okhttp3.CookieJar;
		public loadForRequest(param0: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
		public saveFromResponse(param0: okhttp3.HttpUrl, param1: java.util.List<okhttp3.Cookie>): void;
	}
}

declare module okhttp3 {
	export class Credentials {
		public static class: java.lang.Class<okhttp3.Credentials>;
		public static basic(param0: string, param1: string, param2: java.nio.charset.Charset): string;
		public static basic(param0: string, param1: string): string;
	}
}

declare module okhttp3 {
	export class Dispatcher {
		public static class: java.lang.Class<okhttp3.Dispatcher>;
		public constructor();
		public setMaxRequestsPerHost(param0: number): void;
		public constructor(param0: java.util.concurrent.ExecutorService);
		public queuedCallsCount(): number;
		public runningCallsCount(): number;
		public runningCalls(): java.util.List<okhttp3.Call>;
		public cancelAll(): void;
		public queuedCalls(): java.util.List<okhttp3.Call>;
		public setMaxRequests(param0: number): void;
		public getMaxRequestsPerHost(): number;
		public executorService(): java.util.concurrent.ExecutorService;
		public setIdleCallback(param0: java.lang.Runnable): void;
		public getMaxRequests(): number;
	}
}

declare module okhttp3 {
	export class Dns {
		public static class: java.lang.Class<okhttp3.Dns>;
		/**
		 * Constructs a new instance of the okhttp3.Dns interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			lookup(param0: string): java.util.List<java.net.InetAddress>;
			<clinit>(): void;
		});
		public constructor();
		public static SYSTEM: okhttp3.Dns;
		public lookup(param0: string): java.util.List<java.net.InetAddress>;
	}
}

declare module okhttp3 {
	export abstract class EventListener {
		public static class: java.lang.Class<okhttp3.EventListener>;
		public static NONE: okhttp3.EventListener;
		public constructor();
		public connectFailed(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy, param3: okhttp3.Protocol, param4: java.io.IOException): void;
		public callStart(param0: okhttp3.Call): void;
		public connectionReleased(param0: okhttp3.Call, param1: okhttp3.Connection): void;
		public dnsEnd(param0: okhttp3.Call, param1: string, param2: java.util.List<java.net.InetAddress>): void;
		public responseBodyEnd(param0: okhttp3.Call, param1: number): void;
		public callEnd(param0: okhttp3.Call): void;
		public secureConnectStart(param0: okhttp3.Call): void;
		public responseHeadersEnd(param0: okhttp3.Call, param1: okhttp3.Response): void;
		public secureConnectEnd(param0: okhttp3.Call, param1: okhttp3.Handshake): void;
		public dnsStart(param0: okhttp3.Call, param1: string): void;
		public connectionAcquired(param0: okhttp3.Call, param1: okhttp3.Connection): void;
		public connectEnd(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy, param3: okhttp3.Protocol): void;
		public requestHeadersEnd(param0: okhttp3.Call, param1: okhttp3.Request): void;
		public responseBodyStart(param0: okhttp3.Call): void;
		public connectStart(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy): void;
		public requestBodyEnd(param0: okhttp3.Call, param1: number): void;
		public callFailed(param0: okhttp3.Call, param1: java.io.IOException): void;
		public requestHeadersStart(param0: okhttp3.Call): void;
		public requestBodyStart(param0: okhttp3.Call): void;
		public responseHeadersStart(param0: okhttp3.Call): void;
	}
	export module EventListener {
		export class Factory {
			public static class: java.lang.Class<okhttp3.EventListener.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.EventListener$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				create(param0: okhttp3.Call): okhttp3.EventListener;
			});
			public constructor();
			public create(param0: okhttp3.Call): okhttp3.EventListener;
		}
	}
}

declare module okhttp3 {
	export class FormBody extends okhttp3.RequestBody {
		public static class: java.lang.Class<okhttp3.FormBody>;
		public value(param0: number): string;
		public encodedValue(param0: number): string;
		public name(param0: number): string;
		public size(): number;
		public encodedName(param0: number): string;
		public contentType(): okhttp3.MediaType;
		public writeTo(param0: okio.BufferedSink): void;
		public contentLength(): number;
	}
	export module FormBody {
		export class Builder {
			public static class: java.lang.Class<okhttp3.FormBody.Builder>;
			public constructor(param0: java.nio.charset.Charset);
			public addEncoded(param0: string, param1: string): okhttp3.FormBody.Builder;
			public constructor();
			public add(param0: string, param1: string): okhttp3.FormBody.Builder;
			public build(): okhttp3.FormBody;
		}
	}
}

declare module okhttp3 {
	export class Handshake {
		public static class: java.lang.Class<okhttp3.Handshake>;
		public equals(param0: any): boolean;
		public static get(param0: javax.net.ssl.SSLSession): okhttp3.Handshake;
		public static get(param0: okhttp3.TlsVersion, param1: okhttp3.CipherSuite, param2: java.util.List<java.security.cert.Certificate>, param3: java.util.List<java.security.cert.Certificate>): okhttp3.Handshake;
		public hashCode(): number;
		public localCertificates(): java.util.List<java.security.cert.Certificate>;
		public localPrincipal(): java.security.Principal;
		public tlsVersion(): okhttp3.TlsVersion;
		public peerCertificates(): java.util.List<java.security.cert.Certificate>;
		public peerPrincipal(): java.security.Principal;
		public cipherSuite(): okhttp3.CipherSuite;
	}
}

declare module okhttp3 {
	export class Headers {
		public static class: java.lang.Class<okhttp3.Headers>;
		public value(param0: number): string;
		public equals(param0: any): boolean;
		public newBuilder(): okhttp3.Headers.Builder;
		public toString(): string;
		public get(param0: string): string;
		public values(param0: string): java.util.List<string>;
		public names(): java.util.Set<string>;
		public static of(param0: java.util.Map<string,string>): okhttp3.Headers;
		public name(param0: number): string;
		public size(): number;
		public hashCode(): number;
		public toMultimap(): java.util.Map<string,java.util.List<string>>;
		public getDate(param0: string): java.util.Date;
		public byteCount(): number;
		public static of(param0: native.Array<string>): okhttp3.Headers;
	}
	export module Headers {
		export class Builder {
			public static class: java.lang.Class<okhttp3.Headers.Builder>;
			public get(param0: string): string;
			public build(): okhttp3.Headers;
			public add(param0: string, param1: string): okhttp3.Headers.Builder;
			public removeAll(param0: string): okhttp3.Headers.Builder;
			public set(param0: string, param1: string): okhttp3.Headers.Builder;
			public set(param0: string, param1: java.util.Date): okhttp3.Headers.Builder;
			public constructor();
			public addAll(param0: okhttp3.Headers): okhttp3.Headers.Builder;
			public add(param0: string): okhttp3.Headers.Builder;
			public addUnsafeNonAscii(param0: string, param1: string): okhttp3.Headers.Builder;
			public add(param0: string, param1: java.util.Date): okhttp3.Headers.Builder;
		}
	}
}

declare module okhttp3 {
	export class HttpUrl {
		public static class: java.lang.Class<okhttp3.HttpUrl>;
		public static get(param0: java.net.URI): okhttp3.HttpUrl;
		public equals(param0: any): boolean;
		public topPrivateDomain(): string;
		public queryParameterName(param0: number): string;
		public static defaultPort(param0: string): number;
		public scheme(): string;
		public queryParameterNames(): java.util.Set<string>;
		public encodedPassword(): string;
		public queryParameter(param0: string): string;
		public query(): string;
		public password(): string;
		public hashCode(): number;
		public static get(param0: string): okhttp3.HttpUrl;
		public resolve(param0: string): okhttp3.HttpUrl;
		public pathSize(): number;
		public isHttps(): boolean;
		public encodedPathSegments(): java.util.List<string>;
		public newBuilder(): okhttp3.HttpUrl.Builder;
		public port(): number;
		public encodedQuery(): string;
		public encodedPath(): string;
		public encodedFragment(): string;
		public redact(): string;
		public fragment(): string;
		public toString(): string;
		public uri(): java.net.URI;
		public queryParameterValue(param0: number): string;
		public encodedUsername(): string;
		public queryParameterValues(param0: string): java.util.List<string>;
		public newBuilder(param0: string): okhttp3.HttpUrl.Builder;
		public host(): string;
		public static get(param0: java.net.URL): okhttp3.HttpUrl;
		public pathSegments(): java.util.List<string>;
		public static parse(param0: string): okhttp3.HttpUrl;
		public url(): java.net.URL;
		public querySize(): number;
		public username(): string;
	}
	export module HttpUrl {
		export class Builder {
			public static class: java.lang.Class<okhttp3.HttpUrl.Builder>;
			public addPathSegment(param0: string): okhttp3.HttpUrl.Builder;
			public addEncodedPathSegment(param0: string): okhttp3.HttpUrl.Builder;
			public setEncodedQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
			public setQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
			public encodedFragment(param0: string): okhttp3.HttpUrl.Builder;
			public username(param0: string): okhttp3.HttpUrl.Builder;
			public addPathSegments(param0: string): okhttp3.HttpUrl.Builder;
			public encodedPath(param0: string): okhttp3.HttpUrl.Builder;
			public encodedPassword(param0: string): okhttp3.HttpUrl.Builder;
			public addEncodedPathSegments(param0: string): okhttp3.HttpUrl.Builder;
			public encodedQuery(param0: string): okhttp3.HttpUrl.Builder;
			public host(param0: string): okhttp3.HttpUrl.Builder;
			public removeAllEncodedQueryParameters(param0: string): okhttp3.HttpUrl.Builder;
			public setEncodedPathSegment(param0: number, param1: string): okhttp3.HttpUrl.Builder;
			public constructor();
			public encodedUsername(param0: string): okhttp3.HttpUrl.Builder;
			public password(param0: string): okhttp3.HttpUrl.Builder;
			public port(param0: number): okhttp3.HttpUrl.Builder;
			public toString(): string;
			public addQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
			public addEncodedQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
			public query(param0: string): okhttp3.HttpUrl.Builder;
			public setPathSegment(param0: number, param1: string): okhttp3.HttpUrl.Builder;
			public removeAllQueryParameters(param0: string): okhttp3.HttpUrl.Builder;
			public scheme(param0: string): okhttp3.HttpUrl.Builder;
			public removePathSegment(param0: number): okhttp3.HttpUrl.Builder;
			public fragment(param0: string): okhttp3.HttpUrl.Builder;
			public build(): okhttp3.HttpUrl;
		}
	}
}

declare module okhttp3 {
	export class Interceptor {
		public static class: java.lang.Class<okhttp3.Interceptor>;
		/**
		 * Constructs a new instance of the okhttp3.Interceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		});
		public constructor();
		public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
	}
	export module Interceptor {
		export class Chain {
			public static class: java.lang.Class<okhttp3.Interceptor.Chain>;
			/**
			 * Constructs a new instance of the okhttp3.Interceptor$Chain interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				request(): okhttp3.Request;
				proceed(param0: okhttp3.Request): okhttp3.Response;
				connection(): okhttp3.Connection;
				call(): okhttp3.Call;
				connectTimeoutMillis(): number;
				withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				readTimeoutMillis(): number;
				withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				writeTimeoutMillis(): number;
				withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			});
			public constructor();
			public request(): okhttp3.Request;
			public withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			public call(): okhttp3.Call;
			public withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			public readTimeoutMillis(): number;
			public withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			public proceed(param0: okhttp3.Request): okhttp3.Response;
			public connection(): okhttp3.Connection;
			public connectTimeoutMillis(): number;
			public writeTimeoutMillis(): number;
		}
	}
}

declare module okhttp3 {
	export class MediaType {
		public static class: java.lang.Class<okhttp3.MediaType>;
		public type(): string;
		public charset(): java.nio.charset.Charset;
		public equals(param0: any): boolean;
		public subtype(): string;
		public static get(param0: string): okhttp3.MediaType;
		public charset(param0: java.nio.charset.Charset): java.nio.charset.Charset;
		public hashCode(): number;
		public static parse(param0: string): okhttp3.MediaType;
		public toString(): string;
	}
}

declare module okhttp3 {
	export class MultipartBody extends okhttp3.RequestBody {
		public static class: java.lang.Class<okhttp3.MultipartBody>;
		public static MIXED: okhttp3.MediaType;
		public static ALTERNATIVE: okhttp3.MediaType;
		public static DIGEST: okhttp3.MediaType;
		public static PARALLEL: okhttp3.MediaType;
		public static FORM: okhttp3.MediaType;
		public boundary(): string;
		public size(): number;
		public parts(): java.util.List<okhttp3.MultipartBody.Part>;
		public type(): okhttp3.MediaType;
		public contentType(): okhttp3.MediaType;
		public writeTo(param0: okio.BufferedSink): void;
		public part(param0: number): okhttp3.MultipartBody.Part;
		public contentLength(): number;
	}
	export module MultipartBody {
		export class Builder {
			public static class: java.lang.Class<okhttp3.MultipartBody.Builder>;
			public setType(param0: okhttp3.MediaType): okhttp3.MultipartBody.Builder;
			public addPart(param0: okhttp3.MultipartBody.Part): okhttp3.MultipartBody.Builder;
			public build(): okhttp3.MultipartBody;
			public addPart(param0: okhttp3.Headers, param1: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
			public addPart(param0: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
			public constructor();
			public addFormDataPart(param0: string, param1: string): okhttp3.MultipartBody.Builder;
			public addFormDataPart(param0: string, param1: string, param2: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
			public constructor(param0: string);
		}
		export class Part {
			public static class: java.lang.Class<okhttp3.MultipartBody.Part>;
			public headers(): okhttp3.Headers;
			public static create(param0: okhttp3.Headers, param1: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static createFormData(param0: string, param1: string, param2: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static create(param0: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static createFormData(param0: string, param1: string): okhttp3.MultipartBody.Part;
			public body(): okhttp3.RequestBody;
		}
	}
}

declare module okhttp3 {
	export class OkHttpClient implements okhttp3.Call.Factory, okhttp3.WebSocket.Factory {
		public static class: java.lang.Class<okhttp3.OkHttpClient>;
		public proxy(): java.net.Proxy;
		public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
		public connectionPool(): okhttp3.ConnectionPool;
		public cache(): okhttp3.Cache;
		public certificatePinner(): okhttp3.CertificatePinner;
		public dispatcher(): okhttp3.Dispatcher;
		public protocols(): java.util.List<okhttp3.Protocol>;
		public dns(): okhttp3.Dns;
		public proxyAuthenticator(): okhttp3.Authenticator;
		public callTimeoutMillis(): number;
		public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
		public connectTimeoutMillis(): number;
		public pingIntervalMillis(): number;
		public cookieJar(): okhttp3.CookieJar;
		public connectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
		public newBuilder(): okhttp3.OkHttpClient.Builder;
		public constructor();
		public proxySelector(): java.net.ProxySelector;
		public readTimeoutMillis(): number;
		public authenticator(): okhttp3.Authenticator;
		public followRedirects(): boolean;
		public interceptors(): java.util.List<okhttp3.Interceptor>;
		public writeTimeoutMillis(): number;
		public newWebSocket(param0: okhttp3.Request, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
		public followSslRedirects(): boolean;
		public socketFactory(): javax.net.SocketFactory;
		public retryOnConnectionFailure(): boolean;
		public networkInterceptors(): java.util.List<okhttp3.Interceptor>;
		public eventListenerFactory(): okhttp3.EventListener.Factory;
		public newCall(param0: okhttp3.Request): okhttp3.Call;
	}
	export module OkHttpClient {
		export class Builder {
			public static class: java.lang.Class<okhttp3.OkHttpClient.Builder>;
			public protocols(param0: java.util.List<okhttp3.Protocol>): okhttp3.OkHttpClient.Builder;
			public addInterceptor(param0: okhttp3.Interceptor): okhttp3.OkHttpClient.Builder;
			public connectionPool(param0: okhttp3.ConnectionPool): okhttp3.OkHttpClient.Builder;
			public interceptors(): java.util.List<okhttp3.Interceptor>;
			public readTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public callTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public dns(param0: okhttp3.Dns): okhttp3.OkHttpClient.Builder;
			public writeTimeout(param0: any): okhttp3.OkHttpClient.Builder;
			public readTimeout(param0: any): okhttp3.OkHttpClient.Builder;
			public pingInterval(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public eventListenerFactory(param0: okhttp3.EventListener.Factory): okhttp3.OkHttpClient.Builder;
			public connectionSpecs(param0: java.util.List<okhttp3.ConnectionSpec>): okhttp3.OkHttpClient.Builder;
			public build(): okhttp3.OkHttpClient;
			public eventListener(param0: okhttp3.EventListener): okhttp3.OkHttpClient.Builder;
			public proxyAuthenticator(param0: okhttp3.Authenticator): okhttp3.OkHttpClient.Builder;
			public followRedirects(param0: boolean): okhttp3.OkHttpClient.Builder;
			public networkInterceptors(): java.util.List<okhttp3.Interceptor>;
			public cache(param0: okhttp3.Cache): okhttp3.OkHttpClient.Builder;
			public sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory, param1: javax.net.ssl.X509TrustManager): okhttp3.OkHttpClient.Builder;
			public callTimeout(param0: any): okhttp3.OkHttpClient.Builder;
			public cookieJar(param0: okhttp3.CookieJar): okhttp3.OkHttpClient.Builder;
			public connectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public pingInterval(param0: any): okhttp3.OkHttpClient.Builder;
			public followSslRedirects(param0: boolean): okhttp3.OkHttpClient.Builder;
			public constructor();
			public connectTimeout(param0: any): okhttp3.OkHttpClient.Builder;
			public dispatcher(param0: okhttp3.Dispatcher): okhttp3.OkHttpClient.Builder;
			public proxySelector(param0: java.net.ProxySelector): okhttp3.OkHttpClient.Builder;
			public socketFactory(param0: javax.net.SocketFactory): okhttp3.OkHttpClient.Builder;
			public retryOnConnectionFailure(param0: boolean): okhttp3.OkHttpClient.Builder;
			public writeTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public addNetworkInterceptor(param0: okhttp3.Interceptor): okhttp3.OkHttpClient.Builder;
			public hostnameVerifier(param0: javax.net.ssl.HostnameVerifier): okhttp3.OkHttpClient.Builder;
			public authenticator(param0: okhttp3.Authenticator): okhttp3.OkHttpClient.Builder;
			public proxy(param0: java.net.Proxy): okhttp3.OkHttpClient.Builder;
			/** @deprecated */
			public sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): okhttp3.OkHttpClient.Builder;
			public certificatePinner(param0: okhttp3.CertificatePinner): okhttp3.OkHttpClient.Builder;
		}
	}
}

declare module okhttp3 {
	export class Protocol {
		public static class: java.lang.Class<okhttp3.Protocol>;
		public static HTTP_1_0: okhttp3.Protocol;
		public static HTTP_1_1: okhttp3.Protocol;
		public static SPDY_3: okhttp3.Protocol;
		public static HTTP_2: okhttp3.Protocol;
		public static H2_PRIOR_KNOWLEDGE: okhttp3.Protocol;
		public static QUIC: okhttp3.Protocol;
		public static valueOf(param0: string): okhttp3.Protocol;
		public static get(param0: string): okhttp3.Protocol;
		public static values(): native.Array<okhttp3.Protocol>;
		public toString(): string;
	}
}

declare module okhttp3 {
	export class RealCall extends okhttp3.Call {
		public static class: java.lang.Class<okhttp3.RealCall>;
		public clone(): okhttp3.RealCall;
		public isExecuted(): boolean;
		public clone(): okhttp3.Call;
		public request(): okhttp3.Request;
		public execute(): okhttp3.Response;
		public isCanceled(): boolean;
		public enqueue(param0: okhttp3.Callback): void;
		public cancel(): void;
		public timeout(): okio.Timeout;
	}
	export module RealCall {
		export class AsyncCall extends okhttp3.internal.NamedRunnable {
			public static class: java.lang.Class<okhttp3.RealCall.AsyncCall>;
			public execute(): void;
		}
	}
}

declare module okhttp3 {
	export class Request {
		public static class: java.lang.Class<okhttp3.Request>;
		public header(param0: string): string;
		public headers(): okhttp3.Headers;
		public tag(): any;
		public newBuilder(): okhttp3.Request.Builder;
		public headers(param0: string): java.util.List<string>;
		public url(): okhttp3.HttpUrl;
		public tag(param0: java.lang.Class<any>): any;
		public cacheControl(): okhttp3.CacheControl;
		public method(): string;
		public toString(): string;
		public body(): okhttp3.RequestBody;
		public isHttps(): boolean;
	}
	export module Request {
		export class Builder {
			public static class: java.lang.Class<okhttp3.Request.Builder>;
			public tag(param0: java.lang.Class<any>, param1: any): okhttp3.Request.Builder;
			public url(param0: okhttp3.HttpUrl): okhttp3.Request.Builder;
			public tag(param0: any): okhttp3.Request.Builder;
			public url(param0: java.net.URL): okhttp3.Request.Builder;
			public header(param0: string, param1: string): okhttp3.Request.Builder;
			public headers(param0: okhttp3.Headers): okhttp3.Request.Builder;
			public put(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
			public delete(): okhttp3.Request.Builder;
			public get(): okhttp3.Request.Builder;
			public constructor();
			public addHeader(param0: string, param1: string): okhttp3.Request.Builder;
			public post(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
			public delete(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
			public patch(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
			public build(): okhttp3.Request;
			public method(param0: string, param1: okhttp3.RequestBody): okhttp3.Request.Builder;
			public url(param0: string): okhttp3.Request.Builder;
			public removeHeader(param0: string): okhttp3.Request.Builder;
			public cacheControl(param0: okhttp3.CacheControl): okhttp3.Request.Builder;
			public head(): okhttp3.Request.Builder;
		}
	}
}

declare module okhttp3 {
	export abstract class RequestBody {
		public static class: java.lang.Class<okhttp3.RequestBody>;
		public constructor();
		public static create(param0: okhttp3.MediaType, param1: okio.ByteString): okhttp3.RequestBody;
		public static create(param0: okhttp3.MediaType, param1: java.io.File): okhttp3.RequestBody;
		public static create(param0: okhttp3.MediaType, param1: string): okhttp3.RequestBody;
		public contentType(): okhttp3.MediaType;
		public writeTo(param0: okio.BufferedSink): void;
		public static create(param0: okhttp3.MediaType, param1: native.Array<number>): okhttp3.RequestBody;
		public contentLength(): number;
		public static create(param0: okhttp3.MediaType, param1: native.Array<number>, param2: number, param3: number): okhttp3.RequestBody;
	}
}

declare module okhttp3 {
	export class Response {
		public static class: java.lang.Class<okhttp3.Response>;
		public headers(): okhttp3.Headers;
		public priorResponse(): okhttp3.Response;
		public close(): void;
		public cacheResponse(): okhttp3.Response;
		public sentRequestAtMillis(): number;
		public cacheControl(): okhttp3.CacheControl;
		public toString(): string;
		public handshake(): okhttp3.Handshake;
		public peekBody(param0: number): okhttp3.ResponseBody;
		public isSuccessful(): boolean;
		public header(param0: string): string;
		public header(param0: string, param1: string): string;
		public body(): okhttp3.ResponseBody;
		public networkResponse(): okhttp3.Response;
		public headers(param0: string): java.util.List<string>;
		public newBuilder(): okhttp3.Response.Builder;
		public request(): okhttp3.Request;
		public code(): number;
		public protocol(): okhttp3.Protocol;
		public message(): string;
		public challenges(): java.util.List<okhttp3.Challenge>;
		public receivedResponseAtMillis(): number;
		public isRedirect(): boolean;
	}
	export module Response {
		export class Builder {
			public static class: java.lang.Class<okhttp3.Response.Builder>;
			public cacheResponse(param0: okhttp3.Response): okhttp3.Response.Builder;
			public body(param0: okhttp3.ResponseBody): okhttp3.Response.Builder;
			public message(param0: string): okhttp3.Response.Builder;
			public request(param0: okhttp3.Request): okhttp3.Response.Builder;
			public header(param0: string, param1: string): okhttp3.Response.Builder;
			public headers(param0: okhttp3.Headers): okhttp3.Response.Builder;
			public sentRequestAtMillis(param0: number): okhttp3.Response.Builder;
			public priorResponse(param0: okhttp3.Response): okhttp3.Response.Builder;
			public networkResponse(param0: okhttp3.Response): okhttp3.Response.Builder;
			public constructor();
			public removeHeader(param0: string): okhttp3.Response.Builder;
			public handshake(param0: okhttp3.Handshake): okhttp3.Response.Builder;
			public addHeader(param0: string, param1: string): okhttp3.Response.Builder;
			public code(param0: number): okhttp3.Response.Builder;
			public build(): okhttp3.Response;
			public protocol(param0: okhttp3.Protocol): okhttp3.Response.Builder;
			public receivedResponseAtMillis(param0: number): okhttp3.Response.Builder;
		}
	}
}

declare module okhttp3 {
	export abstract class ResponseBody {
		public static class: java.lang.Class<okhttp3.ResponseBody>;
		public constructor();
		public byteStream(): java.io.InputStream;
		public bytes(): native.Array<number>;
		public static create(param0: okhttp3.MediaType, param1: native.Array<number>): okhttp3.ResponseBody;
		public static create(param0: okhttp3.MediaType, param1: number, param2: okio.BufferedSource): okhttp3.ResponseBody;
		public close(): void;
		public source(): okio.BufferedSource;
		public static create(param0: okhttp3.MediaType, param1: okio.ByteString): okhttp3.ResponseBody;
		public static create(param0: okhttp3.MediaType, param1: string): okhttp3.ResponseBody;
		public charStream(): java.io.Reader;
		public contentType(): okhttp3.MediaType;
		public string(): string;
		public contentLength(): number;
	}
	export module ResponseBody {
		export class BomAwareReader {
			public static class: java.lang.Class<okhttp3.ResponseBody.BomAwareReader>;
			public read(param0: native.Array<string>, param1: number, param2: number): number;
			public close(): void;
		}
	}
}

declare module okhttp3 {
	export class Route {
		public static class: java.lang.Class<okhttp3.Route>;
		public proxy(): java.net.Proxy;
		public constructor(param0: okhttp3.Address, param1: java.net.Proxy, param2: java.net.InetSocketAddress);
		public equals(param0: any): boolean;
		public address(): okhttp3.Address;
		public hashCode(): number;
		public toString(): string;
		public requiresTunnel(): boolean;
		public socketAddress(): java.net.InetSocketAddress;
	}
}

declare module okhttp3 {
	export class TlsVersion {
		public static class: java.lang.Class<okhttp3.TlsVersion>;
		public static TLS_1_3: okhttp3.TlsVersion;
		public static TLS_1_2: okhttp3.TlsVersion;
		public static TLS_1_1: okhttp3.TlsVersion;
		public static TLS_1_0: okhttp3.TlsVersion;
		public static SSL_3_0: okhttp3.TlsVersion;
		public javaName(): string;
		public static values(): native.Array<okhttp3.TlsVersion>;
		public static valueOf(param0: string): okhttp3.TlsVersion;
		public static forJavaName(param0: string): okhttp3.TlsVersion;
	}
}

declare module okhttp3 {
	export class WebSocket {
		public static class: java.lang.Class<okhttp3.WebSocket>;
		/**
		 * Constructs a new instance of the okhttp3.WebSocket interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			request(): okhttp3.Request;
			queueSize(): number;
			send(param0: string): boolean;
			send(param0: okio.ByteString): boolean;
			close(param0: number, param1: string): boolean;
			cancel(): void;
		});
		public constructor();
		public send(param0: string): boolean;
		public send(param0: okio.ByteString): boolean;
		public close(param0: number, param1: string): boolean;
		public request(): okhttp3.Request;
		public queueSize(): number;
		public cancel(): void;
	}
	export module WebSocket {
		export class Factory {
			public static class: java.lang.Class<okhttp3.WebSocket.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.WebSocket$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				newWebSocket(param0: okhttp3.Request, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
			});
			public constructor();
			public newWebSocket(param0: okhttp3.Request, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
		}
	}
}

declare module okhttp3 {
	export abstract class WebSocketListener {
		public static class: java.lang.Class<okhttp3.WebSocketListener>;
		public constructor();
		public onClosed(param0: okhttp3.WebSocket, param1: number, param2: string): void;
		public onMessage(param0: okhttp3.WebSocket, param1: okio.ByteString): void;
		public onFailure(param0: okhttp3.WebSocket, param1: java.lang.Throwable, param2: okhttp3.Response): void;
		public onOpen(param0: okhttp3.WebSocket, param1: okhttp3.Response): void;
		public onClosing(param0: okhttp3.WebSocket, param1: number, param2: string): void;
		public onMessage(param0: okhttp3.WebSocket, param1: string): void;
	}
}

declare module okhttp3 {
	export module internal {
		export abstract class Internal {
			public static class: java.lang.Class<okhttp3.internal.Internal>;
			public static instance: okhttp3.internal.Internal;
			public code(param0: okhttp3.Response.Builder): number;
			public addLenient(param0: okhttp3.Headers.Builder, param1: string): void;
			public connectionBecameIdle(param0: okhttp3.ConnectionPool, param1: okhttp3.internal.connection.RealConnection): boolean;
			public setCache(param0: okhttp3.OkHttpClient.Builder, param1: okhttp3.internal.cache.InternalCache): void;
			public equalsNonHost(param0: okhttp3.Address, param1: okhttp3.Address): boolean;
			public isInvalidHttpUrlHost(param0: java.lang.IllegalArgumentException): boolean;
			public newWebSocketCall(param0: okhttp3.OkHttpClient, param1: okhttp3.Request): okhttp3.Call;
			public constructor();
			public apply(param0: okhttp3.ConnectionSpec, param1: javax.net.ssl.SSLSocket, param2: boolean): void;
			public put(param0: okhttp3.ConnectionPool, param1: okhttp3.internal.connection.RealConnection): void;
			public routeDatabase(param0: okhttp3.ConnectionPool): okhttp3.internal.connection.RouteDatabase;
			public static initializeInstanceForTests(): void;
			public addLenient(param0: okhttp3.Headers.Builder, param1: string, param2: string): void;
			public deduplicate(param0: okhttp3.ConnectionPool, param1: okhttp3.Address, param2: okhttp3.internal.connection.StreamAllocation): java.net.Socket;
			public timeoutExit(param0: okhttp3.Call, param1: java.io.IOException): java.io.IOException;
			public get(param0: okhttp3.ConnectionPool, param1: okhttp3.Address, param2: okhttp3.internal.connection.StreamAllocation, param3: okhttp3.Route): okhttp3.internal.connection.RealConnection;
			public streamAllocation(param0: okhttp3.Call): okhttp3.internal.connection.StreamAllocation;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export abstract class NamedRunnable {
			public static class: java.lang.Class<okhttp3.internal.NamedRunnable>;
			public name: string;
			public execute(): void;
			public constructor(param0: string, param1: native.Array<any>);
			public run(): void;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export class Util {
			public static class: java.lang.Class<okhttp3.internal.Util>;
			public static EMPTY_BYTE_ARRAY: native.Array<number>;
			public static EMPTY_STRING_ARRAY: native.Array<string>;
			public static EMPTY_RESPONSE: okhttp3.ResponseBody;
			public static EMPTY_REQUEST: okhttp3.RequestBody;
			public static UTF_8: java.nio.charset.Charset;
			public static ISO_8859_1: java.nio.charset.Charset;
			public static UTC: java.util.TimeZone;
			public static NATURAL_ORDER: java.util.Comparator<string>;
			public static checkOffsetAndCount(param0: number, param1: number, param2: number): void;
			public static verifyAsIpAddress(param0: string): boolean;
			public static equal(param0: any, param1: any): boolean;
			public static bomAwareCharset(param0: okio.BufferedSource, param1: java.nio.charset.Charset): java.nio.charset.Charset;
			public static platformTrustManager(): javax.net.ssl.X509TrustManager;
			public static immutableMap(param0: java.util.Map<any, any>): java.util.Map<any, any>;
			public static indexOf(param0: java.util.Comparator<string>, param1: native.Array<string>, param2: string): number;
			public static format(param0: string, param1: native.Array<any>): string;
			public static decodeHexDigit(param0: string): number;
			public static indexOfControlOrNonAscii(param0: string): number;
			public static immutableList(param0: native.Array<any>): java.util.List<any>;
			public static delimiterOffset(param0: string, param1: number, param2: number, param3: string): number;
			public static closeQuietly(param0: java.io.Closeable): void;
			public static hostHeader(param0: okhttp3.HttpUrl, param1: boolean): string;
			public static trimSubstring(param0: string, param1: number, param2: number): string;
			public static closeQuietly(param0: java.net.Socket): void;
			public static assertionError(param0: string, param1: java.lang.Exception): java.lang.AssertionError;
			public static skipTrailingAsciiWhitespace(param0: string, param1: number, param2: number): number;
			public static checkDuration(param0: string, param1: number, param2: java.util.concurrent.TimeUnit): number;
			public static intersect(param0: java.util.Comparator<any>, param1: native.Array<string>, param2: native.Array<string>): native.Array<string>;
			public static canonicalizeHost(param0: string): string;
			public static toHeaders(param0: java.util.List<okhttp3.internal.http2.Header>): okhttp3.Headers;
			public static concat(param0: native.Array<string>, param1: string): native.Array<string>;
			public static addSuppressedIfPossible(param0: java.lang.Throwable, param1: java.lang.Throwable): void;
			public static nonEmptyIntersection(param0: java.util.Comparator<string>, param1: native.Array<string>, param2: native.Array<string>): boolean;
			public static closeQuietly(param0: java.net.ServerSocket): void;
			public static discard(param0: okio.Source, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
			public static threadFactory(param0: string, param1: boolean): java.util.concurrent.ThreadFactory;
			public static skipLeadingAsciiWhitespace(param0: string, param1: number, param2: number): number;
			public static isAndroidGetsocknameError(param0: java.lang.AssertionError): boolean;
			public static skipAll(param0: okio.Source, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
			public static immutableList(param0: java.util.List<any>): java.util.List<any>;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export class Version {
			public static class: java.lang.Class<okhttp3.internal.Version>;
			public static userAgent(): string;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module annotations {
			export class EverythingIsNonNull {
				public static class: java.lang.Class<okhttp3.internal.annotations.EverythingIsNonNull>;
				/**
				 * Constructs a new instance of the okhttp3.internal.annotations.EverythingIsNonNull interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class CacheInterceptor extends okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.cache.CacheInterceptor>;
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				public constructor(param0: okhttp3.internal.cache.InternalCache);
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class CacheRequest {
				public static class: java.lang.Class<okhttp3.internal.cache.CacheRequest>;
				/**
				 * Constructs a new instance of the okhttp3.internal.cache.CacheRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					body(): okio.Sink;
					abort(): void;
				});
				public constructor();
				public abort(): void;
				public body(): okio.Sink;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class CacheStrategy {
				public static class: java.lang.Class<okhttp3.internal.cache.CacheStrategy>;
				public networkRequest: okhttp3.Request;
				public cacheResponse: okhttp3.Response;
				public static isCacheable(param0: okhttp3.Response, param1: okhttp3.Request): boolean;
			}
			export module CacheStrategy {
				export class Factory {
					public static class: java.lang.Class<okhttp3.internal.cache.CacheStrategy.Factory>;
					public constructor(param0: number, param1: okhttp3.Request, param2: okhttp3.Response);
					public get(): okhttp3.internal.cache.CacheStrategy;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class DiskLruCache {
				public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache>;
				public remove(param0: string): boolean;
				public close(): void;
				public snapshots(): java.util.Iterator<okhttp3.internal.cache.DiskLruCache.Snapshot>;
				public isClosed(): boolean;
				public getDirectory(): java.io.File;
				public static create(param0: okhttp3.internal.io.FileSystem, param1: java.io.File, param2: number, param3: number, param4: number): okhttp3.internal.cache.DiskLruCache;
				public get(param0: string): okhttp3.internal.cache.DiskLruCache.Snapshot;
				public size(): number;
				public flush(): void;
				public setMaxSize(param0: number): void;
				public edit(param0: string): okhttp3.internal.cache.DiskLruCache.Editor;
				public initialize(): void;
				public delete(): void;
				public getMaxSize(): number;
				public evictAll(): void;
			}
			export module DiskLruCache {
				export class Editor {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Editor>;
					public newSource(param0: number): okio.Source;
					public commit(): void;
					public newSink(param0: number): okio.Sink;
					public abortUnlessCommitted(): void;
					public abort(): void;
				}
				export class Entry {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Entry>;
				}
				export class Snapshot {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Snapshot>;
					public close(): void;
					public key(): string;
					public getLength(param0: number): number;
					public edit(): okhttp3.internal.cache.DiskLruCache.Editor;
					public getSource(param0: number): okio.Source;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class FaultHidingSink extends okio.ForwardingSink {
				public static class: java.lang.Class<okhttp3.internal.cache.FaultHidingSink>;
				public close(): void;
				public timeout(): okio.Timeout;
				public write(param0: okio.Buffer, param1: number): void;
				public flush(): void;
				public onException(param0: java.io.IOException): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class InternalCache {
				public static class: java.lang.Class<okhttp3.internal.cache.InternalCache>;
				/**
				 * Constructs a new instance of the okhttp3.internal.cache.InternalCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					get(param0: okhttp3.Request): okhttp3.Response;
					put(param0: okhttp3.Response): okhttp3.internal.cache.CacheRequest;
					remove(param0: okhttp3.Request): void;
					update(param0: okhttp3.Response, param1: okhttp3.Response): void;
					trackConditionalCacheHit(): void;
					trackResponse(param0: okhttp3.internal.cache.CacheStrategy): void;
				});
				public constructor();
				public put(param0: okhttp3.Response): okhttp3.internal.cache.CacheRequest;
				public get(param0: okhttp3.Request): okhttp3.Response;
				public remove(param0: okhttp3.Request): void;
				public update(param0: okhttp3.Response, param1: okhttp3.Response): void;
				public trackConditionalCacheHit(): void;
				public trackResponse(param0: okhttp3.internal.cache.CacheStrategy): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache2 {
			export class FileOperator {
				public static class: java.lang.Class<okhttp3.internal.cache2.FileOperator>;
				public write(param0: number, param1: okio.Buffer, param2: number): void;
				public read(param0: number, param1: okio.Buffer, param2: number): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache2 {
			export class Relay {
				public static class: java.lang.Class<okhttp3.internal.cache2.Relay>;
				public newSource(): okio.Source;
				public metadata(): okio.ByteString;
				public static edit(param0: java.io.File, param1: okio.Source, param2: okio.ByteString, param3: number): okhttp3.internal.cache2.Relay;
				public static read(param0: java.io.File): okhttp3.internal.cache2.Relay;
			}
			export module Relay {
				export class RelaySource extends okio.Source {
					public static class: java.lang.Class<okhttp3.internal.cache2.Relay.RelaySource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class ConnectInterceptor extends okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.connection.ConnectInterceptor>;
				public client: okhttp3.OkHttpClient;
				public constructor(param0: okhttp3.OkHttpClient);
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class ConnectionSpecSelector {
				public static class: java.lang.Class<okhttp3.internal.connection.ConnectionSpecSelector>;
				public constructor(param0: java.util.List<okhttp3.ConnectionSpec>);
				public configureSecureSocket(param0: javax.net.ssl.SSLSocket): okhttp3.ConnectionSpec;
				public connectionFailed(param0: java.io.IOException): boolean;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RealConnection extends okhttp3.internal.http2.Http2Connection.Listener implements okhttp3.Connection {
				public static class: java.lang.Class<okhttp3.internal.connection.RealConnection>;
				public noNewStreams: boolean;
				public successCount: number;
				public allocationLimit: number;
				public allocations: java.util.List<java.lang.ref.Reference<okhttp3.internal.connection.StreamAllocation>>;
				public idleAtNanos: number;
				public onSettings(param0: okhttp3.internal.http2.Http2Connection): void;
				public connect(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: okhttp3.Call, param6: okhttp3.EventListener): void;
				public isEligible(param0: okhttp3.Address, param1: okhttp3.Route): boolean;
				public protocol(): okhttp3.Protocol;
				public route(): okhttp3.Route;
				public toString(): string;
				public socket(): java.net.Socket;
				public onStream(param0: okhttp3.internal.http2.Http2Stream): void;
				public constructor();
				public constructor(param0: okhttp3.ConnectionPool, param1: okhttp3.Route);
				public isHealthy(param0: boolean): boolean;
				public supportsUrl(param0: okhttp3.HttpUrl): boolean;
				public newWebSocketStreams(param0: okhttp3.internal.connection.StreamAllocation): okhttp3.internal.ws.RealWebSocket.Streams;
				public cancel(): void;
				public isMultiplexed(): boolean;
				public static testConnection(param0: okhttp3.ConnectionPool, param1: okhttp3.Route, param2: java.net.Socket, param3: number): okhttp3.internal.connection.RealConnection;
				public handshake(): okhttp3.Handshake;
				public newCodec(param0: okhttp3.OkHttpClient, param1: okhttp3.Interceptor.Chain, param2: okhttp3.internal.connection.StreamAllocation): okhttp3.internal.http.HttpCodec;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RouteDatabase {
				public static class: java.lang.Class<okhttp3.internal.connection.RouteDatabase>;
				public shouldPostpone(param0: okhttp3.Route): boolean;
				public connected(param0: okhttp3.Route): void;
				public failed(param0: okhttp3.Route): void;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RouteException {
				public static class: java.lang.Class<okhttp3.internal.connection.RouteException>;
				public getLastConnectException(): java.io.IOException;
				public constructor(param0: java.io.IOException);
				public addConnectException(param0: java.io.IOException): void;
				public getFirstConnectException(): java.io.IOException;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RouteSelector {
				public static class: java.lang.Class<okhttp3.internal.connection.RouteSelector>;
				public next(): okhttp3.internal.connection.RouteSelector.Selection;
				public constructor(param0: okhttp3.Address, param1: okhttp3.internal.connection.RouteDatabase, param2: okhttp3.Call, param3: okhttp3.EventListener);
				public hasNext(): boolean;
				public connectFailed(param0: okhttp3.Route, param1: java.io.IOException): void;
			}
			export module RouteSelector {
				export class Selection {
					public static class: java.lang.Class<okhttp3.internal.connection.RouteSelector.Selection>;
					public getAll(): java.util.List<okhttp3.Route>;
					public next(): okhttp3.Route;
					public hasNext(): boolean;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class StreamAllocation {
				public static class: java.lang.Class<okhttp3.internal.connection.StreamAllocation>;
				public address: okhttp3.Address;
				public call: okhttp3.Call;
				public eventListener: okhttp3.EventListener;
				public streamFinished(param0: boolean, param1: okhttp3.internal.http.HttpCodec, param2: number, param3: java.io.IOException): void;
				public release(): void;
				public codec(): okhttp3.internal.http.HttpCodec;
				public route(): okhttp3.Route;
				public toString(): string;
				public newStream(param0: okhttp3.OkHttpClient, param1: okhttp3.Interceptor.Chain, param2: boolean): okhttp3.internal.http.HttpCodec;
				public releaseAndAcquire(param0: okhttp3.internal.connection.RealConnection): java.net.Socket;
				public noNewStreams(): void;
				public acquire(param0: okhttp3.internal.connection.RealConnection, param1: boolean): void;
				public cancel(): void;
				public connection(): okhttp3.internal.connection.RealConnection;
				public hasMoreRoutes(): boolean;
				public constructor(param0: okhttp3.ConnectionPool, param1: okhttp3.Address, param2: okhttp3.Call, param3: okhttp3.EventListener, param4: any);
				public streamFailed(param0: java.io.IOException): void;
			}
			export module StreamAllocation {
				export class StreamAllocationReference extends java.lang.ref.WeakReference<okhttp3.internal.connection.StreamAllocation> {
					public static class: java.lang.Class<okhttp3.internal.connection.StreamAllocation.StreamAllocationReference>;
					public callStackTrace: any;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class BridgeInterceptor extends okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.http.BridgeInterceptor>;
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				public constructor(param0: okhttp3.CookieJar);
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class CallServerInterceptor extends okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.http.CallServerInterceptor>;
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				public constructor(param0: boolean);
			}
			export module CallServerInterceptor {
				export class CountingSink extends okio.ForwardingSink {
					public static class: java.lang.Class<okhttp3.internal.http.CallServerInterceptor.CountingSink>;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpCodec {
				public static class: java.lang.Class<okhttp3.internal.http.HttpCodec>;
				/**
				 * Constructs a new instance of the okhttp3.internal.http.HttpCodec interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
					writeRequestHeaders(param0: okhttp3.Request): void;
					flushRequest(): void;
					finishRequest(): void;
					readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
					openResponseBody(param0: okhttp3.Response): okhttp3.ResponseBody;
					cancel(): void;
				});
				public constructor();
				public static DISCARD_STREAM_TIMEOUT_MILLIS: number;
				public finishRequest(): void;
				public openResponseBody(param0: okhttp3.Response): okhttp3.ResponseBody;
				public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
				public cancel(): void;
				public flushRequest(): void;
				public createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
				public writeRequestHeaders(param0: okhttp3.Request): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpDate {
				public static class: java.lang.Class<okhttp3.internal.http.HttpDate>;
				public static MAX_DATE: number;
				public static parse(param0: string): java.util.Date;
				public static format(param0: java.util.Date): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpHeaders {
				public static class: java.lang.Class<okhttp3.internal.http.HttpHeaders>;
				public static varyHeaders(param0: okhttp3.Headers, param1: okhttp3.Headers): okhttp3.Headers;
				public static hasBody(param0: okhttp3.Response): boolean;
				public static receiveHeaders(param0: okhttp3.CookieJar, param1: okhttp3.HttpUrl, param2: okhttp3.Headers): void;
				public static varyHeaders(param0: okhttp3.Response): okhttp3.Headers;
				public static varyMatches(param0: okhttp3.Response, param1: okhttp3.Headers, param2: okhttp3.Request): boolean;
				public static skipWhitespace(param0: string, param1: number): number;
				public static hasVaryAll(param0: okhttp3.Headers): boolean;
				public static contentLength(param0: okhttp3.Response): number;
				public static hasVaryAll(param0: okhttp3.Response): boolean;
				public static skipUntil(param0: string, param1: number, param2: string): number;
				public static varyFields(param0: okhttp3.Headers): java.util.Set<string>;
				public static contentLength(param0: okhttp3.Headers): number;
				public static parseChallenges(param0: okhttp3.Headers, param1: string): java.util.List<okhttp3.Challenge>;
				public static parseSeconds(param0: string, param1: number): number;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpMethod {
				public static class: java.lang.Class<okhttp3.internal.http.HttpMethod>;
				public static invalidatesCache(param0: string): boolean;
				public static requiresRequestBody(param0: string): boolean;
				public static permitsRequestBody(param0: string): boolean;
				public static redirectsWithBody(param0: string): boolean;
				public static redirectsToGet(param0: string): boolean;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RealInterceptorChain extends okhttp3.Interceptor.Chain {
				public static class: java.lang.Class<okhttp3.internal.http.RealInterceptorChain>;
				public request(): okhttp3.Request;
				public httpStream(): okhttp3.internal.http.HttpCodec;
				public connectTimeoutMillis(): number;
				public constructor(param0: java.util.List<okhttp3.Interceptor>, param1: okhttp3.internal.connection.StreamAllocation, param2: okhttp3.internal.http.HttpCodec, param3: okhttp3.internal.connection.RealConnection, param4: number, param5: okhttp3.Request, param6: okhttp3.Call, param7: okhttp3.EventListener, param8: number, param9: number, param10: number);
				public proceed(param0: okhttp3.Request, param1: okhttp3.internal.connection.StreamAllocation, param2: okhttp3.internal.http.HttpCodec, param3: okhttp3.internal.connection.RealConnection): okhttp3.Response;
				public withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public connection(): okhttp3.Connection;
				public writeTimeoutMillis(): number;
				public readTimeoutMillis(): number;
				public call(): okhttp3.Call;
				public withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public proceed(param0: okhttp3.Request): okhttp3.Response;
				public eventListener(): okhttp3.EventListener;
				public withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public streamAllocation(): okhttp3.internal.connection.StreamAllocation;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RealResponseBody extends okhttp3.ResponseBody {
				public static class: java.lang.Class<okhttp3.internal.http.RealResponseBody>;
				public contentLength(): number;
				public constructor(param0: string, param1: number, param2: okio.BufferedSource);
				public source(): okio.BufferedSource;
				public contentType(): okhttp3.MediaType;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RequestLine {
				public static class: java.lang.Class<okhttp3.internal.http.RequestLine>;
				public static requestPath(param0: okhttp3.HttpUrl): string;
				public static get(param0: okhttp3.Request, param1: java.net.Proxy.Type): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RetryAndFollowUpInterceptor extends okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.http.RetryAndFollowUpInterceptor>;
				public isCanceled(): boolean;
				public setCallStackTrace(param0: any): void;
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				public constructor(param0: okhttp3.OkHttpClient, param1: boolean);
				public cancel(): void;
				public streamAllocation(): okhttp3.internal.connection.StreamAllocation;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class StatusLine {
				public static class: java.lang.Class<okhttp3.internal.http.StatusLine>;
				public static HTTP_TEMP_REDIRECT: number;
				public static HTTP_PERM_REDIRECT: number;
				public static HTTP_CONTINUE: number;
				public protocol: okhttp3.Protocol;
				public code: number;
				public message: string;
				public constructor(param0: okhttp3.Protocol, param1: number, param2: string);
				public static parse(param0: string): okhttp3.internal.http.StatusLine;
				public toString(): string;
				public static get(param0: okhttp3.Response): okhttp3.internal.http.StatusLine;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class UnrepeatableRequestBody {
				public static class: java.lang.Class<okhttp3.internal.http.UnrepeatableRequestBody>;
				/**
				 * Constructs a new instance of the okhttp3.internal.http.UnrepeatableRequestBody interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http1 {
			export class Http1Codec extends okhttp3.internal.http.HttpCodec {
				public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec>;
				public finishRequest(): void;
				public newFixedLengthSink(param0: number): okio.Sink;
				public newChunkedSink(): okio.Sink;
				public constructor(param0: okhttp3.OkHttpClient, param1: okhttp3.internal.connection.StreamAllocation, param2: okio.BufferedSource, param3: okio.BufferedSink);
				public isClosed(): boolean;
				public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
				public writeRequestHeaders(param0: okhttp3.Request): void;
				public writeRequest(param0: okhttp3.Headers, param1: string): void;
				public openResponseBody(param0: okhttp3.Response): okhttp3.ResponseBody;
				public newUnknownLengthSource(): okio.Source;
				public readHeaders(): okhttp3.Headers;
				public newChunkedSource(param0: okhttp3.HttpUrl): okio.Source;
				public cancel(): void;
				public flushRequest(): void;
				public createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
				public newFixedLengthSource(param0: number): okio.Source;
			}
			export module Http1Codec {
				export abstract class AbstractSource extends okio.Source {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.AbstractSource>;
					public closed: boolean;
					public bytesRead: number;
					public close(): void;
					public endOfInput(param0: boolean, param1: java.io.IOException): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class ChunkedSink extends okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.ChunkedSink>;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
				}
				export class ChunkedSource extends okhttp3.internal.http1.Http1Codec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.ChunkedSource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class FixedLengthSink extends okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.FixedLengthSink>;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
				}
				export class FixedLengthSource extends okhttp3.internal.http1.Http1Codec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.FixedLengthSource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class UnknownLengthSource extends okhttp3.internal.http1.Http1Codec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.UnknownLengthSource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class ConnectionShutdownException {
				public static class: java.lang.Class<okhttp3.internal.http2.ConnectionShutdownException>;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class ErrorCode {
				public static class: java.lang.Class<okhttp3.internal.http2.ErrorCode>;
				public static NO_ERROR: okhttp3.internal.http2.ErrorCode;
				public static PROTOCOL_ERROR: okhttp3.internal.http2.ErrorCode;
				public static INTERNAL_ERROR: okhttp3.internal.http2.ErrorCode;
				public static FLOW_CONTROL_ERROR: okhttp3.internal.http2.ErrorCode;
				public static REFUSED_STREAM: okhttp3.internal.http2.ErrorCode;
				public static CANCEL: okhttp3.internal.http2.ErrorCode;
				public static COMPRESSION_ERROR: okhttp3.internal.http2.ErrorCode;
				public static CONNECT_ERROR: okhttp3.internal.http2.ErrorCode;
				public static ENHANCE_YOUR_CALM: okhttp3.internal.http2.ErrorCode;
				public static INADEQUATE_SECURITY: okhttp3.internal.http2.ErrorCode;
				public static HTTP_1_1_REQUIRED: okhttp3.internal.http2.ErrorCode;
				public httpCode: number;
				public static valueOf(param0: string): okhttp3.internal.http2.ErrorCode;
				public static fromHttp2(param0: number): okhttp3.internal.http2.ErrorCode;
				public static values(): native.Array<okhttp3.internal.http2.ErrorCode>;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Header {
				public static class: java.lang.Class<okhttp3.internal.http2.Header>;
				public static PSEUDO_PREFIX: okio.ByteString;
				public static RESPONSE_STATUS_UTF8: string;
				public static TARGET_METHOD_UTF8: string;
				public static TARGET_PATH_UTF8: string;
				public static TARGET_SCHEME_UTF8: string;
				public static TARGET_AUTHORITY_UTF8: string;
				public static RESPONSE_STATUS: okio.ByteString;
				public static TARGET_METHOD: okio.ByteString;
				public static TARGET_PATH: okio.ByteString;
				public static TARGET_SCHEME: okio.ByteString;
				public static TARGET_AUTHORITY: okio.ByteString;
				public name: okio.ByteString;
				public value: okio.ByteString;
				public constructor(param0: okio.ByteString, param1: okio.ByteString);
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: okio.ByteString, param1: string);
				public toString(): string;
				public constructor(param0: string, param1: string);
			}
			export module Header {
				export class Listener {
					public static class: java.lang.Class<okhttp3.internal.http2.Header.Listener>;
					/**
					 * Constructs a new instance of the okhttp3.internal.http2.Header$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onHeaders(param0: okhttp3.Headers): void;
					});
					public constructor();
					public onHeaders(param0: okhttp3.Headers): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Hpack {
				public static class: java.lang.Class<okhttp3.internal.http2.Hpack>;
			}
			export module Hpack {
				export class Reader {
					public static class: java.lang.Class<okhttp3.internal.http2.Hpack.Reader>;
					public getAndResetHeaderList(): java.util.List<okhttp3.internal.http2.Header>;
				}
				export class Writer {
					public static class: java.lang.Class<okhttp3.internal.http2.Hpack.Writer>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2 {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2>;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Codec extends okhttp3.internal.http.HttpCodec {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Codec>;
				public finishRequest(): void;
				public static readHttp2HeadersList(param0: okhttp3.Headers, param1: okhttp3.Protocol): okhttp3.Response.Builder;
				public openResponseBody(param0: okhttp3.Response): okhttp3.ResponseBody;
				public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
				public cancel(): void;
				public constructor(param0: okhttp3.OkHttpClient, param1: okhttp3.Interceptor.Chain, param2: okhttp3.internal.connection.StreamAllocation, param3: okhttp3.internal.http2.Http2Connection);
				public flushRequest(): void;
				public createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
				public writeRequestHeaders(param0: okhttp3.Request): void;
				public static http2HeadersList(param0: okhttp3.Request): java.util.List<okhttp3.internal.http2.Header>;
			}
			export module Http2Codec {
				export class StreamFinishingSource extends okio.ForwardingSource {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Codec.StreamFinishingSource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Connection {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection>;
				public maxConcurrentStreams(): number;
				public pushStream(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>, param2: boolean): okhttp3.internal.http2.Http2Stream;
				public writeData(param0: number, param1: boolean, param2: okio.Buffer, param3: number): void;
				public close(): void;
				public start(): void;
				public newStream(param0: java.util.List<okhttp3.internal.http2.Header>, param1: boolean): okhttp3.internal.http2.Http2Stream;
				public isShutdown(): boolean;
				public openStreamCount(): number;
				public shutdown(param0: okhttp3.internal.http2.ErrorCode): void;
				public setSettings(param0: okhttp3.internal.http2.Settings): void;
				public getProtocol(): okhttp3.Protocol;
				public flush(): void;
			}
			export module Http2Connection {
				export class Builder {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.Builder>;
					public constructor(param0: boolean);
					public listener(param0: okhttp3.internal.http2.Http2Connection.Listener): okhttp3.internal.http2.Http2Connection.Builder;
					public pingIntervalMillis(param0: number): okhttp3.internal.http2.Http2Connection.Builder;
					public build(): okhttp3.internal.http2.Http2Connection;
					public socket(param0: java.net.Socket, param1: string, param2: okio.BufferedSource, param3: okio.BufferedSink): okhttp3.internal.http2.Http2Connection.Builder;
					public socket(param0: java.net.Socket): okhttp3.internal.http2.Http2Connection.Builder;
					public pushObserver(param0: okhttp3.internal.http2.PushObserver): okhttp3.internal.http2.Http2Connection.Builder;
				}
				export abstract class Listener {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.Listener>;
					public static REFUSE_INCOMING_STREAMS: okhttp3.internal.http2.Http2Connection.Listener;
					public onStream(param0: okhttp3.internal.http2.Http2Stream): void;
					public constructor();
					public onSettings(param0: okhttp3.internal.http2.Http2Connection): void;
				}
				export class PingRunnable extends okhttp3.internal.NamedRunnable {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.PingRunnable>;
					public execute(): void;
				}
				export class ReaderRunnable extends okhttp3.internal.NamedRunnable implements okhttp3.internal.http2.Http2Reader.Handler {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.ReaderRunnable>;
					public settings(param0: boolean, param1: okhttp3.internal.http2.Settings): void;
					public alternateService(param0: number, param1: string, param2: okio.ByteString, param3: string, param4: number, param5: number): void;
					public ackSettings(): void;
					public data(param0: boolean, param1: number, param2: okio.BufferedSource, param3: number): void;
					public headers(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
					public priority(param0: number, param1: number, param2: number, param3: boolean): void;
					public execute(): void;
					public pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
					public rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
					public goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: okio.ByteString): void;
					public windowUpdate(param0: number, param1: number): void;
					public ping(param0: boolean, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Reader {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader>;
				public close(): void;
				public nextFrame(param0: boolean, param1: okhttp3.internal.http2.Http2Reader.Handler): boolean;
				public readConnectionPreface(param0: okhttp3.internal.http2.Http2Reader.Handler): void;
			}
			export module Http2Reader {
				export class ContinuationSource extends okio.Source {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader.ContinuationSource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class Handler {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader.Handler>;
					/**
					 * Constructs a new instance of the okhttp3.internal.http2.Http2Reader$Handler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						data(param0: boolean, param1: number, param2: okio.BufferedSource, param3: number): void;
						headers(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
						rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
						settings(param0: boolean, param1: okhttp3.internal.http2.Settings): void;
						ackSettings(): void;
						ping(param0: boolean, param1: number, param2: number): void;
						goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: okio.ByteString): void;
						windowUpdate(param0: number, param1: number): void;
						priority(param0: number, param1: number, param2: number, param3: boolean): void;
						pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
						alternateService(param0: number, param1: string, param2: okio.ByteString, param3: string, param4: number, param5: number): void;
					});
					public constructor();
					public settings(param0: boolean, param1: okhttp3.internal.http2.Settings): void;
					public alternateService(param0: number, param1: string, param2: okio.ByteString, param3: string, param4: number, param5: number): void;
					public ackSettings(): void;
					public data(param0: boolean, param1: number, param2: okio.BufferedSource, param3: number): void;
					public headers(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
					public priority(param0: number, param1: number, param2: number, param3: boolean): void;
					public pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
					public rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
					public goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: okio.ByteString): void;
					public windowUpdate(param0: number, param1: number): void;
					public ping(param0: boolean, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Stream {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream>;
				public getSource(): okio.Source;
				public close(param0: okhttp3.internal.http2.ErrorCode): void;
				public closeLater(param0: okhttp3.internal.http2.ErrorCode): void;
				public writeTimeout(): okio.Timeout;
				public getId(): number;
				public writeHeaders(param0: java.util.List<okhttp3.internal.http2.Header>, param1: boolean): void;
				public getErrorCode(): okhttp3.internal.http2.ErrorCode;
				public takeHeaders(): okhttp3.Headers;
				public getConnection(): okhttp3.internal.http2.Http2Connection;
				public isOpen(): boolean;
				public readTimeout(): okio.Timeout;
				public getSink(): okio.Sink;
				public isLocallyInitiated(): boolean;
				public setHeadersListener(param0: okhttp3.internal.http2.Header.Listener): void;
			}
			export module Http2Stream {
				export class FramingSink extends okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.FramingSink>;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
				}
				export class FramingSource extends okio.Source {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.FramingSource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class StreamTimeout extends okio.AsyncTimeout {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.StreamTimeout>;
					public timedOut(): void;
					public newTimeoutException(param0: java.io.IOException): java.io.IOException;
					public exitAndThrowIfTimedOut(): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Writer {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Writer>;
				public headers(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>): void;
				public close(): void;
				public synStream(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
				public settings(param0: okhttp3.internal.http2.Settings): void;
				public ping(param0: boolean, param1: number, param2: number): void;
				public windowUpdate(param0: number, param1: number): void;
				public frameHeader(param0: number, param1: number, param2: number, param3: number): void;
				public maxDataLength(): number;
				public goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: native.Array<number>): void;
				public flush(): void;
				public connectionPreface(): void;
				public pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
				public data(param0: boolean, param1: number, param2: okio.Buffer, param3: number): void;
				public rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
				public synReply(param0: boolean, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
				public applyAndAckSettings(param0: okhttp3.internal.http2.Settings): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Huffman {
				public static class: java.lang.Class<okhttp3.internal.http2.Huffman>;
				public static get(): okhttp3.internal.http2.Huffman;
			}
			export module Huffman {
				export class Node {
					public static class: java.lang.Class<okhttp3.internal.http2.Huffman.Node>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class PushObserver {
				public static class: java.lang.Class<okhttp3.internal.http2.PushObserver>;
				/**
				 * Constructs a new instance of the okhttp3.internal.http2.PushObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onRequest(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>): boolean;
					onHeaders(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>, param2: boolean): boolean;
					onData(param0: number, param1: okio.BufferedSource, param2: number, param3: boolean): boolean;
					onReset(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
					<clinit>(): void;
				});
				public constructor();
				public static CANCEL: okhttp3.internal.http2.PushObserver;
				public onRequest(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>): boolean;
				public onHeaders(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>, param2: boolean): boolean;
				public onData(param0: number, param1: okio.BufferedSource, param2: number, param3: boolean): boolean;
				public onReset(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Settings {
				public static class: java.lang.Class<okhttp3.internal.http2.Settings>;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class StreamResetException {
				public static class: java.lang.Class<okhttp3.internal.http2.StreamResetException>;
				public errorCode: okhttp3.internal.http2.ErrorCode;
				public constructor(param0: okhttp3.internal.http2.ErrorCode);
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module io {
			export class FileSystem {
				public static class: java.lang.Class<okhttp3.internal.io.FileSystem>;
				/**
				 * Constructs a new instance of the okhttp3.internal.io.FileSystem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					source(param0: java.io.File): okio.Source;
					sink(param0: java.io.File): okio.Sink;
					appendingSink(param0: java.io.File): okio.Sink;
					delete(param0: java.io.File): void;
					exists(param0: java.io.File): boolean;
					size(param0: java.io.File): number;
					rename(param0: java.io.File, param1: java.io.File): void;
					deleteContents(param0: java.io.File): void;
					<clinit>(): void;
				});
				public constructor();
				public static SYSTEM: okhttp3.internal.io.FileSystem;
				public source(param0: java.io.File): okio.Source;
				public size(param0: java.io.File): number;
				public deleteContents(param0: java.io.File): void;
				public appendingSink(param0: java.io.File): okio.Sink;
				public sink(param0: java.io.File): okio.Sink;
				public exists(param0: java.io.File): boolean;
				public rename(param0: java.io.File, param1: java.io.File): void;
				public delete(param0: java.io.File): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class AndroidPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform>;
				public connectSocket(param0: java.net.Socket, param1: java.net.InetSocketAddress, param2: number): void;
				public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
				public log(param0: number, param1: string, param2: java.lang.Throwable): void;
				public logCloseableLeak(param0: string, param1: any): void;
				public buildTrustRootIndex(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.TrustRootIndex;
				public isCleartextTrafficPermitted(param0: string): boolean;
				public buildCertificateChainCleaner(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
				public buildCertificateChainCleaner(param0: javax.net.ssl.SSLSocketFactory): okhttp3.internal.tls.CertificateChainCleaner;
				public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
				public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public getStackTraceForCloseable(param0: string): any;
				public static buildIfSupported(): okhttp3.internal.platform.Platform;
				public getSSLContext(): javax.net.ssl.SSLContext;
			}
			export module AndroidPlatform {
				export class AndroidCertificateChainCleaner extends okhttp3.internal.tls.CertificateChainCleaner {
					public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.AndroidCertificateChainCleaner>;
					public equals(param0: any): boolean;
					public clean(param0: java.util.List<java.security.cert.Certificate>, param1: string): java.util.List<java.security.cert.Certificate>;
					public hashCode(): number;
				}
				export class AndroidTrustRootIndex extends okhttp3.internal.tls.TrustRootIndex {
					public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.AndroidTrustRootIndex>;
					public equals(param0: any): boolean;
					public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
					public hashCode(): number;
				}
				export class CloseGuard {
					public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.CloseGuard>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class ConscryptPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.ConscryptPlatform>;
				public static buildIfSupported(): okhttp3.internal.platform.ConscryptPlatform;
				public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
				public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public configureSslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
				public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
				public getSSLContext(): javax.net.ssl.SSLContext;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class Jdk9Platform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.Jdk9Platform>;
				public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
				public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public static buildIfSupported(): okhttp3.internal.platform.Jdk9Platform;
				public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class JdkWithJettyBootPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.JdkWithJettyBootPlatform>;
				public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
				public afterHandshake(param0: javax.net.ssl.SSLSocket): void;
				public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
				public static buildIfSupported(): okhttp3.internal.platform.Platform;
			}
			export module JdkWithJettyBootPlatform {
				export class JettyNegoProvider {
					public static class: java.lang.Class<okhttp3.internal.platform.JdkWithJettyBootPlatform.JettyNegoProvider>;
					public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class OptionalMethod<T>  extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.platform.OptionalMethod<any>>;
				public invokeOptional(param0: T, param1: native.Array<any>): any;
				public invokeOptionalWithoutCheckedException(param0: T, param1: native.Array<any>): any;
				public isSupported(param0: T): boolean;
				public invoke(param0: T, param1: native.Array<any>): any;
				public invokeWithoutCheckedException(param0: T, param1: native.Array<any>): any;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.Platform>;
				public static INFO: number;
				public static WARN: number;
				public getPrefix(): string;
				public connectSocket(param0: java.net.Socket, param1: java.net.InetSocketAddress, param2: number): void;
				public configureSslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
				public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
				public static isConscryptPreferred(): boolean;
				public log(param0: number, param1: string, param2: java.lang.Throwable): void;
				public logCloseableLeak(param0: string, param1: any): void;
				public buildTrustRootIndex(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.TrustRootIndex;
				public toString(): string;
				public isCleartextTrafficPermitted(param0: string): boolean;
				public constructor();
				public buildCertificateChainCleaner(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
				public buildCertificateChainCleaner(param0: javax.net.ssl.SSLSocketFactory): okhttp3.internal.tls.CertificateChainCleaner;
				public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
				public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public afterHandshake(param0: javax.net.ssl.SSLSocket): void;
				public static get(): okhttp3.internal.platform.Platform;
				public getStackTraceForCloseable(param0: string): any;
				public static alpnProtocolNames(param0: java.util.List<okhttp3.Protocol>): java.util.List<string>;
				public getSSLContext(): javax.net.ssl.SSLContext;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module proxy {
			export class NullProxySelector {
				public static class: java.lang.Class<okhttp3.internal.proxy.NullProxySelector>;
				public select(param0: java.net.URI): java.util.List<java.net.Proxy>;
				public connectFailed(param0: java.net.URI, param1: java.net.SocketAddress, param2: java.io.IOException): void;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module publicsuffix {
			export class PublicSuffixDatabase {
				public static class: java.lang.Class<okhttp3.internal.publicsuffix.PublicSuffixDatabase>;
				public static PUBLIC_SUFFIX_RESOURCE: string;
				public static get(): okhttp3.internal.publicsuffix.PublicSuffixDatabase;
				public getEffectiveTldPlusOne(param0: string): string;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class BasicCertificateChainCleaner extends okhttp3.internal.tls.CertificateChainCleaner {
				public static class: java.lang.Class<okhttp3.internal.tls.BasicCertificateChainCleaner>;
				public clean(param0: java.util.List<java.security.cert.Certificate>, param1: string): java.util.List<java.security.cert.Certificate>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: okhttp3.internal.tls.TrustRootIndex);
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class BasicTrustRootIndex extends okhttp3.internal.tls.TrustRootIndex {
				public static class: java.lang.Class<okhttp3.internal.tls.BasicTrustRootIndex>;
				public constructor(param0: native.Array<java.security.cert.X509Certificate>);
				public hashCode(): number;
				public equals(param0: any): boolean;
				public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export abstract class CertificateChainCleaner {
				public static class: java.lang.Class<okhttp3.internal.tls.CertificateChainCleaner>;
				public static get(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
				public clean(param0: java.util.List<java.security.cert.Certificate>, param1: string): java.util.List<java.security.cert.Certificate>;
				public static get(param0: native.Array<java.security.cert.X509Certificate>): okhttp3.internal.tls.CertificateChainCleaner;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class DistinguishedNameParser {
				public static class: java.lang.Class<okhttp3.internal.tls.DistinguishedNameParser>;
				public findMostSpecific(param0: string): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class OkHostnameVerifier {
				public static class: java.lang.Class<okhttp3.internal.tls.OkHostnameVerifier>;
				public static INSTANCE: okhttp3.internal.tls.OkHostnameVerifier;
				public verify(param0: string, param1: javax.net.ssl.SSLSession): boolean;
				public verifyHostname(param0: string, param1: string): boolean;
				public static allSubjectAltNames(param0: java.security.cert.X509Certificate): java.util.List<string>;
				public verify(param0: string, param1: java.security.cert.X509Certificate): boolean;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class TrustRootIndex {
				public static class: java.lang.Class<okhttp3.internal.tls.TrustRootIndex>;
				/**
				 * Constructs a new instance of the okhttp3.internal.tls.TrustRootIndex interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
				});
				public constructor();
				public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class RealWebSocket implements okhttp3.WebSocket, okhttp3.internal.ws.WebSocketReader.FrameCallback {
				public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket>;
				public constructor(param0: okhttp3.Request, param1: okhttp3.WebSocketListener, param2: java.util.Random, param3: number);
				public request(): okhttp3.Request;
				public send(param0: string): boolean;
				public onReadPong(param0: okio.ByteString): void;
				public onReadPing(param0: okio.ByteString): void;
				public initReaderAndWriter(param0: string, param1: okhttp3.internal.ws.RealWebSocket.Streams): void;
				public queueSize(): number;
				public close(param0: number, param1: string): boolean;
				public loopReader(): void;
				public send(param0: okio.ByteString): boolean;
				public onReadMessage(param0: okio.ByteString): void;
				public failWebSocket(param0: java.lang.Exception, param1: okhttp3.Response): void;
				public cancel(): void;
				public connect(param0: okhttp3.OkHttpClient): void;
				public onReadClose(param0: number, param1: string): void;
				public onReadMessage(param0: string): void;
			}
			export module RealWebSocket {
				export class CancelRunnable {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.CancelRunnable>;
					public run(): void;
				}
				export class Close {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Close>;
				}
				export class Message {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Message>;
				}
				export class PingRunnable {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.PingRunnable>;
					public run(): void;
				}
				export abstract class Streams {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Streams>;
					public client: boolean;
					public source: okio.BufferedSource;
					public sink: okio.BufferedSink;
					public constructor(param0: boolean, param1: okio.BufferedSource, param2: okio.BufferedSink);
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class WebSocketProtocol {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketProtocol>;
				public static acceptHeader(param0: string): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class WebSocketReader {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketReader>;
			}
			export module WebSocketReader {
				export class FrameCallback {
					public static class: java.lang.Class<okhttp3.internal.ws.WebSocketReader.FrameCallback>;
					/**
					 * Constructs a new instance of the okhttp3.internal.ws.WebSocketReader$FrameCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReadMessage(param0: string): void;
						onReadMessage(param0: okio.ByteString): void;
						onReadPing(param0: okio.ByteString): void;
						onReadPong(param0: okio.ByteString): void;
						onReadClose(param0: number, param1: string): void;
					});
					public constructor();
					public onReadClose(param0: number, param1: string): void;
					public onReadMessage(param0: string): void;
					public onReadMessage(param0: okio.ByteString): void;
					public onReadPing(param0: okio.ByteString): void;
					public onReadPong(param0: okio.ByteString): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class WebSocketWriter {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketWriter>;
			}
			export module WebSocketWriter {
				export class FrameSink extends okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.ws.WebSocketWriter.FrameSink>;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module logging {
		export class HttpLoggingInterceptor extends okhttp3.Interceptor {
			public static class: java.lang.Class<okhttp3.logging.HttpLoggingInterceptor>;
			public constructor(param0: okhttp3.logging.HttpLoggingInterceptor.Logger);
			public redactHeader(param0: string): void;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
			public setLevel(param0: okhttp3.logging.HttpLoggingInterceptor.Level): okhttp3.logging.HttpLoggingInterceptor;
			public constructor();
			public getLevel(): okhttp3.logging.HttpLoggingInterceptor.Level;
		}
		export module HttpLoggingInterceptor {
			export class Level {
				public static class: java.lang.Class<okhttp3.logging.HttpLoggingInterceptor.Level>;
				public static NONE: okhttp3.logging.HttpLoggingInterceptor.Level;
				public static BASIC: okhttp3.logging.HttpLoggingInterceptor.Level;
				public static HEADERS: okhttp3.logging.HttpLoggingInterceptor.Level;
				public static BODY: okhttp3.logging.HttpLoggingInterceptor.Level;
				public static valueOf(param0: string): okhttp3.logging.HttpLoggingInterceptor.Level;
				public static values(): native.Array<okhttp3.logging.HttpLoggingInterceptor.Level>;
			}
			export class Logger {
				public static class: java.lang.Class<okhttp3.logging.HttpLoggingInterceptor.Logger>;
				/**
				 * Constructs a new instance of the okhttp3.logging.HttpLoggingInterceptor$Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					log(param0: string): void;
					<clinit>(): void;
				});
				public constructor();
				public static DEFAULT: okhttp3.logging.HttpLoggingInterceptor.Logger;
				public log(param0: string): void;
			}
		}
	}
}

declare module okhttp3 {
	export module logging {
		export class LoggingEventListener extends okhttp3.EventListener {
			public static class: java.lang.Class<okhttp3.logging.LoggingEventListener>;
			public connectFailed(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy, param3: okhttp3.Protocol, param4: java.io.IOException): void;
			public responseBodyStart(param0: okhttp3.Call): void;
			public connectEnd(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy, param3: okhttp3.Protocol): void;
			public callEnd(param0: okhttp3.Call): void;
			public callStart(param0: okhttp3.Call): void;
			public responseBodyEnd(param0: okhttp3.Call, param1: number): void;
			public callFailed(param0: okhttp3.Call, param1: java.io.IOException): void;
			public requestHeadersEnd(param0: okhttp3.Call, param1: okhttp3.Request): void;
			public dnsStart(param0: okhttp3.Call, param1: string): void;
			public requestBodyEnd(param0: okhttp3.Call, param1: number): void;
			public connectionReleased(param0: okhttp3.Call, param1: okhttp3.Connection): void;
			public dnsEnd(param0: okhttp3.Call, param1: string, param2: java.util.List<java.net.InetAddress>): void;
			public secureConnectEnd(param0: okhttp3.Call, param1: okhttp3.Handshake): void;
			public responseHeadersEnd(param0: okhttp3.Call, param1: okhttp3.Response): void;
			public secureConnectStart(param0: okhttp3.Call): void;
			public responseHeadersStart(param0: okhttp3.Call): void;
			public requestHeadersStart(param0: okhttp3.Call): void;
			public connectStart(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy): void;
			public connectionAcquired(param0: okhttp3.Call, param1: okhttp3.Connection): void;
			public requestBodyStart(param0: okhttp3.Call): void;
		}
		export module LoggingEventListener {
			export class Factory extends okhttp3.EventListener.Factory {
				public static class: java.lang.Class<okhttp3.logging.LoggingEventListener.Factory>;
				public constructor(param0: okhttp3.logging.HttpLoggingInterceptor.Logger);
				public create(param0: okhttp3.Call): okhttp3.EventListener;
				public constructor();
			}
		}
	}
}



declare module okio {
	export class AsyncTimeout extends okio.Timeout {
		public static class: java.lang.Class<okio.AsyncTimeout>;
		public constructor();
		public enter(): void;
		public sink(param0: okio.Sink): okio.Sink;
		public timedOut(): void;
		public newTimeoutException(param0: java.io.IOException): java.io.IOException;
		public source(param0: okio.Source): okio.Source;
		public exit(): boolean;
	}
	export module AsyncTimeout {
		export class Watchdog {
			public static class: java.lang.Class<okio.AsyncTimeout.Watchdog>;
			public run(): void;
		}
	}
}

declare module okio {
	export class Base64 {
		public static class: java.lang.Class<okio.Base64>;
		public static encodeUrl(param0: native.Array<number>): string;
		public static decode(param0: string): native.Array<number>;
		public static encode(param0: native.Array<number>): string;
	}
}

declare module okio {
	export class Buffer implements okio.BufferedSource, okio.BufferedSink {
		public static class: java.lang.Class<okio.Buffer>;
		public readIntLe(): number;
		public writeUtf8(param0: string): okio.Buffer;
		public writeDecimalLong(param0: number): okio.Buffer;
		public readFrom(param0: java.io.InputStream, param1: number): okio.Buffer;
		public writeUtf8(param0: string, param1: number, param2: number): okio.Buffer;
		public readUtf8(param0: number): string;
		public copyTo(param0: java.io.OutputStream): okio.Buffer;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public indexOf(param0: number): number;
		public readByte(): number;
		public emitCompleteSegments(): okio.BufferedSink;
		public readLong(): number;
		public read(param0: okio.Buffer, param1: number): number;
		public writeIntLe(param0: number): okio.BufferedSink;
		public copyTo(param0: okio.Buffer, param1: number, param2: number): okio.Buffer;
		public indexOfElement(param0: okio.ByteString): number;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
		public write(param0: java.nio.ByteBuffer): number;
		public readAll(param0: okio.Sink): number;
		public readByteArray(param0: number): native.Array<number>;
		public sha1(): okio.ByteString;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public select(param0: okio.Options): number;
		public readFrom(param0: java.io.InputStream): okio.Buffer;
		public writeTo(param0: java.io.OutputStream): okio.Buffer;
		public outputStream(): java.io.OutputStream;
		public clear(): void;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public readString(param0: java.nio.charset.Charset): string;
		public writeLongLe(param0: number): okio.Buffer;
		public writeLong(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.Buffer;
		public writeByte(param0: number): okio.BufferedSink;
		public readUtf8LineStrict(): string;
		public writeUtf8CodePoint(param0: number): okio.Buffer;
		public writeInt(param0: number): okio.BufferedSink;
		public hmacSha512(param0: okio.ByteString): okio.ByteString;
		public write(param0: native.Array<number>): okio.BufferedSink;
		public sha512(): okio.ByteString;
		public writeShort(param0: number): okio.BufferedSink;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public skip(param0: number): void;
		public getByte(param0: number): number;
		public readInt(): number;
		public read(param0: native.Array<number>, param1: number, param2: number): number;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.Buffer;
		public copyTo(param0: java.io.OutputStream, param1: number, param2: number): okio.Buffer;
		public writeTo(param0: java.io.OutputStream, param1: number): okio.Buffer;
		public writeAll(param0: okio.Source): number;
		public readFully(param0: native.Array<number>): void;
		public timeout(): okio.Timeout;
		public equals(param0: any): boolean;
		public close(): void;
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public inputStream(): java.io.InputStream;
		public readUtf8LineStrict(param0: number): string;
		public write(param0: okio.ByteString): okio.Buffer;
		public writeHexadecimalUnsignedLong(param0: number): okio.Buffer;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public readUtf8CodePoint(): number;
		public writeShortLe(param0: number): okio.Buffer;
		public readAndWriteUnsafe(): okio.Buffer.UnsafeCursor;
		public snapshot(param0: number): okio.ByteString;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public readHexadecimalUnsignedLong(): number;
		public emit(): okio.BufferedSink;
		public writeInt(param0: number): okio.Buffer;
		public constructor();
		public readUnsafe(param0: okio.Buffer.UnsafeCursor): okio.Buffer.UnsafeCursor;
		public readUtf8(): string;
		public write(param0: okio.Buffer, param1: number): void;
		public readByteString(param0: number): okio.ByteString;
		public writeShort(param0: number): okio.Buffer;
		public readUnsafe(): okio.Buffer.UnsafeCursor;
		public completeSegmentByteCount(): number;
		public toString(): string;
		public read(param0: native.Array<number>): number;
		public md5(): okio.ByteString;
		public flush(): void;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public readAndWriteUnsafe(param0: okio.Buffer.UnsafeCursor): okio.Buffer.UnsafeCursor;
		public readShort(): number;
		public readShortLe(): number;
		public readUtf8Line(): string;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.Buffer;
		public readByteString(): okio.ByteString;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
		public writeIntLe(param0: number): okio.Buffer;
		public hmacSha1(param0: okio.ByteString): okio.ByteString;
		public size(): number;
		public hashCode(): number;
		public indexOf(param0: number, param1: number, param2: number): number;
		public readString(param0: number, param1: java.nio.charset.Charset): string;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public snapshot(): okio.ByteString;
		public read(param0: java.nio.ByteBuffer): number;
		public write(param0: native.Array<number>): okio.Buffer;
		public clone(): okio.Buffer;
		public emitCompleteSegments(): okio.Buffer;
		public readDecimalLong(): number;
		public sha256(): okio.ByteString;
		public writeByte(param0: number): okio.Buffer;
		public rangeEquals(param0: number, param1: okio.ByteString): boolean;
		public isOpen(): boolean;
		public readByteArray(): native.Array<number>;
		public writeLong(param0: number): okio.Buffer;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public exhausted(): boolean;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public hmacSha256(param0: okio.ByteString): okio.ByteString;
		public indexOf(param0: number, param1: number): number;
		public indexOf(param0: okio.ByteString): number;
	}
	export module Buffer {
		export class UnsafeCursor {
			public static class: java.lang.Class<okio.Buffer.UnsafeCursor>;
			public buffer: okio.Buffer;
			public readWrite: boolean;
			public offset: number;
			public data: native.Array<number>;
			public start: number;
			public end: number;
			public next(): number;
			public seek(param0: number): number;
			public resizeBuffer(param0: number): number;
			public constructor();
			public expandBuffer(param0: number): number;
			public close(): void;
		}
	}
}

declare module okio {
	export class BufferedSink extends okio.Sink {
		public static class: java.lang.Class<okio.BufferedSink>;
		/**
		 * Constructs a new instance of the okio.BufferedSink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			buffer(): okio.Buffer;
			write(param0: okio.ByteString): okio.BufferedSink;
			write(param0: native.Array<number>): okio.BufferedSink;
			write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
			writeAll(param0: okio.Source): number;
			write(param0: okio.Source, param1: number): okio.BufferedSink;
			writeUtf8(param0: string): okio.BufferedSink;
			writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
			writeUtf8CodePoint(param0: number): okio.BufferedSink;
			writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
			writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
			writeByte(param0: number): okio.BufferedSink;
			writeShort(param0: number): okio.BufferedSink;
			writeShortLe(param0: number): okio.BufferedSink;
			writeInt(param0: number): okio.BufferedSink;
			writeIntLe(param0: number): okio.BufferedSink;
			writeLong(param0: number): okio.BufferedSink;
			writeLongLe(param0: number): okio.BufferedSink;
			writeDecimalLong(param0: number): okio.BufferedSink;
			writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
			flush(): void;
			emit(): okio.BufferedSink;
			emitCompleteSegments(): okio.BufferedSink;
			outputStream(): java.io.OutputStream;
			write(param0: okio.Buffer, param1: number): void;
			flush(): void;
			timeout(): okio.Timeout;
			close(): void;
		});
		public constructor();
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public close(): void;
		public writeByte(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeInt(param0: number): okio.BufferedSink;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public write(param0: native.Array<number>): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public writeShort(param0: number): okio.BufferedSink;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public emitCompleteSegments(): okio.BufferedSink;
		public emit(): okio.BufferedSink;
		public writeIntLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Buffer, param1: number): void;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
		public flush(): void;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public outputStream(): java.io.OutputStream;
		public writeAll(param0: okio.Source): number;
		public writeLong(param0: number): okio.BufferedSink;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class BufferedSource extends okio.Source {
		public static class: java.lang.Class<okio.BufferedSource>;
		/**
		 * Constructs a new instance of the okio.BufferedSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			buffer(): okio.Buffer;
			exhausted(): boolean;
			require(param0: number): void;
			request(param0: number): boolean;
			readByte(): number;
			readShort(): number;
			readShortLe(): number;
			readInt(): number;
			readIntLe(): number;
			readLong(): number;
			readLongLe(): number;
			readDecimalLong(): number;
			readHexadecimalUnsignedLong(): number;
			skip(param0: number): void;
			readByteString(): okio.ByteString;
			readByteString(param0: number): okio.ByteString;
			select(param0: okio.Options): number;
			readByteArray(): native.Array<number>;
			readByteArray(param0: number): native.Array<number>;
			read(param0: native.Array<number>): number;
			readFully(param0: native.Array<number>): void;
			read(param0: native.Array<number>, param1: number, param2: number): number;
			readFully(param0: okio.Buffer, param1: number): void;
			readAll(param0: okio.Sink): number;
			readUtf8(): string;
			readUtf8(param0: number): string;
			readUtf8Line(): string;
			readUtf8LineStrict(): string;
			readUtf8LineStrict(param0: number): string;
			readUtf8CodePoint(): number;
			readString(param0: java.nio.charset.Charset): string;
			readString(param0: number, param1: java.nio.charset.Charset): string;
			indexOf(param0: number): number;
			indexOf(param0: number, param1: number): number;
			indexOf(param0: number, param1: number, param2: number): number;
			indexOf(param0: okio.ByteString): number;
			indexOf(param0: okio.ByteString, param1: number): number;
			indexOfElement(param0: okio.ByteString): number;
			indexOfElement(param0: okio.ByteString, param1: number): number;
			rangeEquals(param0: number, param1: okio.ByteString): boolean;
			rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
			inputStream(): java.io.InputStream;
			read(param0: okio.Buffer, param1: number): number;
			timeout(): okio.Timeout;
			close(): void;
		});
		public constructor();
		public close(): void;
		public inputStream(): java.io.InputStream;
		public readIntLe(): number;
		public readByteString(): okio.ByteString;
		public readUtf8LineStrict(): string;
		public readUtf8LineStrict(param0: number): string;
		public readUtf8(param0: number): string;
		public readUtf8CodePoint(): number;
		public indexOf(param0: number): number;
		public readByte(): number;
		public readHexadecimalUnsignedLong(): number;
		public indexOf(param0: number, param1: number, param2: number): number;
		public readString(param0: number, param1: java.nio.charset.Charset): string;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public readLong(): number;
		public read(param0: okio.Buffer, param1: number): number;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public readUtf8(): string;
		public readByteString(param0: number): okio.ByteString;
		public indexOfElement(param0: okio.ByteString): number;
		public skip(param0: number): void;
		public readDecimalLong(): number;
		public read(param0: native.Array<number>): number;
		public readAll(param0: okio.Sink): number;
		public readInt(): number;
		public readByteArray(param0: number): native.Array<number>;
		public rangeEquals(param0: number, param1: okio.ByteString): boolean;
		public read(param0: native.Array<number>, param1: number, param2: number): number;
		public readByteArray(): native.Array<number>;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public select(param0: okio.Options): number;
		public exhausted(): boolean;
		public readShort(): number;
		public buffer(): okio.Buffer;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public readString(param0: java.nio.charset.Charset): string;
		public readShortLe(): number;
		public indexOf(param0: number, param1: number): number;
		public readFully(param0: native.Array<number>): void;
		public readUtf8Line(): string;
		public indexOf(param0: okio.ByteString): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class ByteString extends java.lang.Object {
		public static class: java.lang.Class<okio.ByteString>;
		public static EMPTY: okio.ByteString;
		public static of(param0: native.Array<number>): okio.ByteString;
		public base64(): string;
		public static encodeString(param0: string, param1: java.nio.charset.Charset): okio.ByteString;
		public substring(param0: number): okio.ByteString;
		public equals(param0: any): boolean;
		public hmacSha512(param0: okio.ByteString): okio.ByteString;
		public base64Url(): string;
		public hmacSha1(param0: okio.ByteString): okio.ByteString;
		public static read(param0: java.io.InputStream, param1: number): okio.ByteString;
		public asByteBuffer(): java.nio.ByteBuffer;
		public sha512(): okio.ByteString;
		public size(): number;
		public lastIndexOf(param0: native.Array<number>): number;
		public hex(): string;
		public hashCode(): number;
		public toAsciiUppercase(): okio.ByteString;
		public indexOf(param0: native.Array<number>, param1: number): number;
		public static decodeBase64(param0: string): okio.ByteString;
		public lastIndexOf(param0: okio.ByteString, param1: number): number;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public lastIndexOf(param0: okio.ByteString): number;
		public static decodeHex(param0: string): okio.ByteString;
		public compareTo(param0: okio.ByteString): number;
		public indexOf(param0: native.Array<number>): number;
		public startsWith(param0: native.Array<number>): boolean;
		public sha256(): okio.ByteString;
		public getByte(param0: number): number;
		public toString(): string;
		public static encodeUtf8(param0: string): okio.ByteString;
		public string(param0: java.nio.charset.Charset): string;
		public md5(): okio.ByteString;
		public startsWith(param0: okio.ByteString): boolean;
		public endsWith(param0: okio.ByteString): boolean;
		public endsWith(param0: native.Array<number>): boolean;
		public toAsciiLowercase(): okio.ByteString;
		public static of(param0: java.nio.ByteBuffer): okio.ByteString;
		public sha1(): okio.ByteString;
		public write(param0: java.io.OutputStream): void;
		public lastIndexOf(param0: native.Array<number>, param1: number): number;
		public static of(param0: native.Array<number>, param1: number, param2: number): okio.ByteString;
		public rangeEquals(param0: number, param1: native.Array<number>, param2: number, param3: number): boolean;
		public utf8(): string;
		public substring(param0: number, param1: number): okio.ByteString;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public toByteArray(): native.Array<number>;
		public hmacSha256(param0: okio.ByteString): okio.ByteString;
		public indexOf(param0: okio.ByteString): number;
	}
}

declare module okio {
	export class DeflaterSink extends okio.Sink {
		public static class: java.lang.Class<okio.DeflaterSink>;
		public close(): void;
		public write(param0: okio.Buffer, param1: number): void;
		public constructor(param0: okio.Sink, param1: java.util.zip.Deflater);
		public toString(): string;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export abstract class ForwardingSink extends okio.Sink {
		public static class: java.lang.Class<okio.ForwardingSink>;
		public delegate(): okio.Sink;
		public close(): void;
		public constructor(param0: okio.Sink);
		public write(param0: okio.Buffer, param1: number): void;
		public toString(): string;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export abstract class ForwardingSource extends okio.Source {
		public static class: java.lang.Class<okio.ForwardingSource>;
		public close(): void;
		public constructor(param0: okio.Source);
		public delegate(): okio.Source;
		public toString(): string;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class ForwardingTimeout extends okio.Timeout {
		public static class: java.lang.Class<okio.ForwardingTimeout>;
		public constructor();
		public throwIfReached(): void;
		public setDelegate(param0: okio.Timeout): okio.ForwardingTimeout;
		public clearDeadline(): okio.Timeout;
		public hasDeadline(): boolean;
		public delegate(): okio.Timeout;
		public timeout(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
		public timeoutNanos(): number;
		public deadlineNanoTime(): number;
		public deadlineNanoTime(param0: number): okio.Timeout;
		public constructor(param0: okio.Timeout);
		public clearTimeout(): okio.Timeout;
	}
}

declare module okio {
	export class GzipSink extends okio.Sink {
		public static class: java.lang.Class<okio.GzipSink>;
		public deflater(): java.util.zip.Deflater;
		public close(): void;
		public constructor(param0: okio.Sink);
		public write(param0: okio.Buffer, param1: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class GzipSource extends okio.Source {
		public static class: java.lang.Class<okio.GzipSource>;
		public close(): void;
		public constructor(param0: okio.Source);
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class HashingSink extends okio.ForwardingSink {
		public static class: java.lang.Class<okio.HashingSink>;
		public close(): void;
		public static hmacSha256(param0: okio.Sink, param1: okio.ByteString): okio.HashingSink;
		public write(param0: okio.Buffer, param1: number): void;
		public static sha512(param0: okio.Sink): okio.HashingSink;
		public static hmacSha1(param0: okio.Sink, param1: okio.ByteString): okio.HashingSink;
		public static md5(param0: okio.Sink): okio.HashingSink;
		public static sha1(param0: okio.Sink): okio.HashingSink;
		public static hmacSha512(param0: okio.Sink, param1: okio.ByteString): okio.HashingSink;
		public hash(): okio.ByteString;
		public static sha256(param0: okio.Sink): okio.HashingSink;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class HashingSource extends okio.ForwardingSource {
		public static class: java.lang.Class<okio.HashingSource>;
		public close(): void;
		public static hmacSha256(param0: okio.Source, param1: okio.ByteString): okio.HashingSource;
		public static sha1(param0: okio.Source): okio.HashingSource;
		public static md5(param0: okio.Source): okio.HashingSource;
		public static sha256(param0: okio.Source): okio.HashingSource;
		public static hmacSha1(param0: okio.Source, param1: okio.ByteString): okio.HashingSource;
		public hash(): okio.ByteString;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class InflaterSource extends okio.Source {
		public static class: java.lang.Class<okio.InflaterSource>;
		public close(): void;
		public refill(): boolean;
		public constructor(param0: okio.Source, param1: java.util.zip.Inflater);
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Okio {
		public static class: java.lang.Class<okio.Okio>;
		public static buffer(param0: okio.Source): okio.BufferedSource;
		public static source(param0: java.io.InputStream): okio.Source;
		public static appendingSink(param0: java.io.File): okio.Sink;
		public static sink(param0: java.io.OutputStream): okio.Sink;
		public static source(param0: java.io.File): okio.Source;
		public static sink(param0: java.io.File): okio.Sink;
		public static blackhole(): okio.Sink;
		public static source(param0: java.net.Socket): okio.Source;
		public static sink(param0: any, param1: native.Array<any>): okio.Sink;
		public static buffer(param0: okio.Sink): okio.BufferedSink;
		public static sink(param0: java.net.Socket): okio.Sink;
		public static source(param0: any, param1: native.Array<any>): okio.Source;
	}
}

declare module okio {
	export class Options extends java.util.AbstractList<okio.ByteString> implements java.util.RandomAccess  {
		public static class: java.lang.Class<okio.Options>;
		public size(): number;
		public static of(param0: native.Array<okio.ByteString>): okio.Options;
		public get(param0: number): okio.ByteString;
	}
}

declare module okio {
	export class Pipe {
		public static class: java.lang.Class<okio.Pipe>;
		public sink(): okio.Sink;
		public constructor(param0: number);
		public source(): okio.Source;
	}
	export module Pipe {
		export class PipeSink extends okio.Sink {
			public static class: java.lang.Class<okio.Pipe.PipeSink>;
			public write(param0: okio.Buffer, param1: number): void;
			public flush(): void;
			public timeout(): okio.Timeout;
			public close(): void;
		}
		export class PipeSource extends okio.Source {
			public static class: java.lang.Class<okio.Pipe.PipeSource>;
			public timeout(): okio.Timeout;
			public read(param0: okio.Buffer, param1: number): number;
			public close(): void;
		}
	}
}

declare module okio {
	export class RealBufferedSink extends okio.BufferedSink {
		public static class: java.lang.Class<okio.RealBufferedSink>;
		public sink: okio.Sink;
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public close(): void;
		public writeByte(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeInt(param0: number): okio.BufferedSink;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public write(param0: native.Array<number>): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public writeShort(param0: number): okio.BufferedSink;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public emitCompleteSegments(): okio.BufferedSink;
		public emit(): okio.BufferedSink;
		public writeIntLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Buffer, param1: number): void;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
		public write(param0: java.nio.ByteBuffer): number;
		public toString(): string;
		public flush(): void;
		public isOpen(): boolean;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public outputStream(): java.io.OutputStream;
		public writeAll(param0: okio.Source): number;
		public writeLong(param0: number): okio.BufferedSink;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class RealBufferedSource extends okio.BufferedSource {
		public static class: java.lang.Class<okio.RealBufferedSource>;
		public source: okio.Source;
		public close(): void;
		public inputStream(): java.io.InputStream;
		public readByteString(): okio.ByteString;
		public readIntLe(): number;
		public readUtf8LineStrict(): string;
		public readUtf8LineStrict(param0: number): string;
		public readUtf8(param0: number): string;
		public readUtf8CodePoint(): number;
		public indexOf(param0: number): number;
		public readByte(): number;
		public readHexadecimalUnsignedLong(): number;
		public indexOf(param0: number, param1: number, param2: number): number;
		public readString(param0: number, param1: java.nio.charset.Charset): string;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public read(param0: okio.Buffer, param1: number): number;
		public readLong(): number;
		public read(param0: java.nio.ByteBuffer): number;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public readUtf8(): string;
		public readByteString(param0: number): okio.ByteString;
		public indexOfElement(param0: okio.ByteString): number;
		public skip(param0: number): void;
		public readDecimalLong(): number;
		public toString(): string;
		public read(param0: native.Array<number>): number;
		public readAll(param0: okio.Sink): number;
		public readInt(): number;
		public readByteArray(param0: number): native.Array<number>;
		public rangeEquals(param0: number, param1: okio.ByteString): boolean;
		public isOpen(): boolean;
		public read(param0: native.Array<number>, param1: number, param2: number): number;
		public readByteArray(): native.Array<number>;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public select(param0: okio.Options): number;
		public exhausted(): boolean;
		public readShort(): number;
		public buffer(): okio.Buffer;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public readString(param0: java.nio.charset.Charset): string;
		public readShortLe(): number;
		public indexOf(param0: number, param1: number): number;
		public readFully(param0: native.Array<number>): void;
		public readUtf8Line(): string;
		public indexOf(param0: okio.ByteString): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Segment {
		public static class: java.lang.Class<okio.Segment>;
		public push(param0: okio.Segment): okio.Segment;
		public writeTo(param0: okio.Segment, param1: number): void;
		public compact(): void;
		public pop(): okio.Segment;
		public split(param0: number): okio.Segment;
	}
}

declare module okio {
	export class SegmentPool {
		public static class: java.lang.Class<okio.SegmentPool>;
	}
}

declare module okio {
	export class SegmentedByteString extends okio.ByteString {
		public static class: java.lang.Class<okio.SegmentedByteString>;
		public base64(): string;
		public substring(param0: number): okio.ByteString;
		public equals(param0: any): boolean;
		public base64Url(): string;
		public hmacSha1(param0: okio.ByteString): okio.ByteString;
		public asByteBuffer(): java.nio.ByteBuffer;
		public size(): number;
		public lastIndexOf(param0: native.Array<number>): number;
		public hex(): string;
		public hashCode(): number;
		public toAsciiUppercase(): okio.ByteString;
		public indexOf(param0: native.Array<number>, param1: number): number;
		public lastIndexOf(param0: okio.ByteString, param1: number): number;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public lastIndexOf(param0: okio.ByteString): number;
		public indexOf(param0: native.Array<number>): number;
		public sha256(): okio.ByteString;
		public getByte(param0: number): number;
		public toString(): string;
		public string(param0: java.nio.charset.Charset): string;
		public md5(): okio.ByteString;
		public toAsciiLowercase(): okio.ByteString;
		public sha1(): okio.ByteString;
		public write(param0: java.io.OutputStream): void;
		public lastIndexOf(param0: native.Array<number>, param1: number): number;
		public rangeEquals(param0: number, param1: native.Array<number>, param2: number, param3: number): boolean;
		public utf8(): string;
		public substring(param0: number, param1: number): okio.ByteString;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public toByteArray(): native.Array<number>;
		public hmacSha256(param0: okio.ByteString): okio.ByteString;
		public indexOf(param0: okio.ByteString): number;
	}
}

declare module okio {
	export class Sink {
		public static class: java.lang.Class<okio.Sink>;
		/**
		 * Constructs a new instance of the okio.Sink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			write(param0: okio.Buffer, param1: number): void;
			flush(): void;
			timeout(): okio.Timeout;
			close(): void;
		});
		public constructor();
		public close(): void;
		public write(param0: okio.Buffer, param1: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Source {
		public static class: java.lang.Class<okio.Source>;
		/**
		 * Constructs a new instance of the okio.Source interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			read(param0: okio.Buffer, param1: number): number;
			timeout(): okio.Timeout;
			close(): void;
		});
		public constructor();
		public close(): void;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Timeout {
		public static class: java.lang.Class<okio.Timeout>;
		public static NONE: okio.Timeout;
		public constructor();
		public throwIfReached(): void;
		public deadline(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
		public clearDeadline(): okio.Timeout;
		public hasDeadline(): boolean;
		public timeout(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
		public timeoutNanos(): number;
		public waitUntilNotified(param0: any): void;
		public deadlineNanoTime(): number;
		public deadlineNanoTime(param0: number): okio.Timeout;
		public clearTimeout(): okio.Timeout;
	}
}

declare module okio {
	export class Utf8 {
		public static class: java.lang.Class<okio.Utf8>;
		public static size(param0: string, param1: number, param2: number): number;
		public static size(param0: string): number;
	}
}

declare module okio {
	export class Util {
		public static class: java.lang.Class<okio.Util>;
		public static UTF_8: java.nio.charset.Charset;
		public static reverseBytesShort(param0: number): number;
		public static reverseBytesLong(param0: number): number;
		public static checkOffsetAndCount(param0: number, param1: number, param2: number): void;
		public static reverseBytesInt(param0: number): number;
		public static sneakyRethrow(param0: java.lang.Throwable): void;
		public static arrayRangeEquals(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number): boolean;
	}
}


declare module retrofit2 {
	export class BuiltInConverters extends retrofit2.Converter.Factory {
		public static class: java.lang.Class<retrofit2.BuiltInConverters>;
		public requestBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: native.Array<java.lang.annotation.Annotation>, param3: retrofit2.Retrofit): retrofit2.Converter<any,okhttp3.RequestBody>;
		public responseBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.Converter<okhttp3.ResponseBody,any>;
	}
	export module BuiltInConverters {
		export class BufferingResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody,okhttp3.ResponseBody> {
			public static class: java.lang.Class<retrofit2.BuiltInConverters.BufferingResponseBodyConverter>;
			public convert(param0: okhttp3.ResponseBody): okhttp3.ResponseBody;
			public convert(param0: any): any;
		}
		export class RequestBodyConverter extends retrofit2.Converter<okhttp3.RequestBody,okhttp3.RequestBody> {
			public static class: java.lang.Class<retrofit2.BuiltInConverters.RequestBodyConverter>;
			public convert(param0: okhttp3.RequestBody): okhttp3.RequestBody;
			public convert(param0: any): any;
		}
		export class StreamingResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody,okhttp3.ResponseBody> {
			public static class: java.lang.Class<retrofit2.BuiltInConverters.StreamingResponseBodyConverter>;
			public convert(param0: okhttp3.ResponseBody): okhttp3.ResponseBody;
			public convert(param0: any): any;
		}
		export class ToStringConverter extends retrofit2.Converter<any,string> {
			public static class: java.lang.Class<retrofit2.BuiltInConverters.ToStringConverter>;
			public convert(param0: any): string;
			public convert(param0: any): any;
		}
		export class VoidResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody,java.lang.Void> {
			public static class: java.lang.Class<retrofit2.BuiltInConverters.VoidResponseBodyConverter>;
			public convert(param0: okhttp3.ResponseBody): java.lang.Void;
			public convert(param0: any): any;
		}
	}
}

declare module retrofit2 {
	export class Call<T>  extends java.lang.Cloneable {
		public static class: java.lang.Class<retrofit2.Call<any>>;
		/**
		 * Constructs a new instance of the retrofit2.Call<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			execute(): retrofit2.Response<any>;
			enqueue(param0: retrofit2.Callback<any>): void;
			isExecuted(): boolean;
			cancel(): void;
			isCanceled(): boolean;
			clone(): retrofit2.Call<any>;
			request(): okhttp3.Request;
		});
		public constructor();
		public clone(): retrofit2.Call<any>;
		public isExecuted(): boolean;
		public execute(): retrofit2.Response<any>;
		public request(): okhttp3.Request;
		public isCanceled(): boolean;
		public enqueue(param0: retrofit2.Callback<any>): void;
		public cancel(): void;
	}
}

declare module retrofit2 {
	export class CallAdapter<R, T>  extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.CallAdapter<any,any>>;
		/**
		 * Constructs a new instance of the retrofit2.CallAdapter<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			responseType(): java.lang.reflect.Type;
			adapt(param0: retrofit2.Call<R>): T;
		});
		public constructor();
		public responseType(): java.lang.reflect.Type;
		public adapt(param0: retrofit2.Call<R>): T;
	}
	export module CallAdapter {
		export abstract class Factory {
			public static class: java.lang.Class<retrofit2.CallAdapter.Factory>;
			public static getRawType(param0: java.lang.reflect.Type): java.lang.Class<any>;
			public constructor();
			public get(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.CallAdapter<any,any>;
			public static getParameterUpperBound(param0: number, param1: java.lang.reflect.ParameterizedType): java.lang.reflect.Type;
		}
	}
}

declare module retrofit2 {
	export class Callback<T>  extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.Callback<any>>;
		/**
		 * Constructs a new instance of the retrofit2.Callback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			onResponse(param0: retrofit2.Call<T>, param1: retrofit2.Response<T>): void;
			onFailure(param0: retrofit2.Call<T>, param1: java.lang.Throwable): void;
		});
		public constructor();
		public onResponse(param0: retrofit2.Call<T>, param1: retrofit2.Response<T>): void;
		public onFailure(param0: retrofit2.Call<T>, param1: java.lang.Throwable): void;
	}
}

declare module retrofit2 {
	export class Converter<F, T>  extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.Converter<any,any>>;
		/**
		 * Constructs a new instance of the retrofit2.Converter<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			convert(param0: F): T;
		});
		public constructor();
		public convert(param0: F): T;
	}
	export module Converter {
		export abstract class Factory {
			public static class: java.lang.Class<retrofit2.Converter.Factory>;
			public static getRawType(param0: java.lang.reflect.Type): java.lang.Class<any>;
			public responseBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.Converter<okhttp3.ResponseBody,any>;
			public requestBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: native.Array<java.lang.annotation.Annotation>, param3: retrofit2.Retrofit): retrofit2.Converter<any,okhttp3.RequestBody>;
			public stringConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.Converter<any,string>;
			public constructor();
			public static getParameterUpperBound(param0: number, param1: java.lang.reflect.ParameterizedType): java.lang.reflect.Type;
		}
	}
}

declare module retrofit2 {
	export class DefaultCallAdapterFactory extends retrofit2.CallAdapter.Factory {
		public static class: java.lang.Class<retrofit2.DefaultCallAdapterFactory>;
		public get(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.CallAdapter<any,any>;
	}
}

declare module retrofit2 {
	export class ExecutorCallAdapterFactory extends retrofit2.CallAdapter.Factory {
		public static class: java.lang.Class<retrofit2.ExecutorCallAdapterFactory>;
		public get(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.CallAdapter<any,any>;
	}
	export module ExecutorCallAdapterFactory {
		export class ExecutorCallbackCall<T>  extends retrofit2.Call<any> {
			public static class: java.lang.Class<retrofit2.ExecutorCallAdapterFactory.ExecutorCallbackCall<any>>;
			public clone(): retrofit2.Call<any>;
			public request(): okhttp3.Request;
			public execute(): retrofit2.Response<any>;
			public isExecuted(): boolean;
			public cancel(): void;
			public isCanceled(): boolean;
			public enqueue(param0: retrofit2.Callback<any>): void;
		}
	}
}

declare module retrofit2 {
	export class HttpException {
		public static class: java.lang.Class<retrofit2.HttpException>;
		public constructor(param0: retrofit2.Response<any>);
		public code(): number;
		public response(): retrofit2.Response<any>;
		public message(): string;
	}
}

declare module retrofit2 {
	export class OkHttpCall<T>  extends retrofit2.Call<any> {
		public static class: java.lang.Class<retrofit2.OkHttpCall<any>>;
		public clone(): retrofit2.Call<any>;
		public isExecuted(): boolean;
		public execute(): retrofit2.Response<any>;
		public request(): okhttp3.Request;
		public clone(): retrofit2.OkHttpCall<any>;
		public isCanceled(): boolean;
		public enqueue(param0: retrofit2.Callback<any>): void;
		public cancel(): void;
	}
	export module OkHttpCall {
		export class ExceptionCatchingRequestBody extends okhttp3.ResponseBody {
			public static class: java.lang.Class<retrofit2.OkHttpCall.ExceptionCatchingRequestBody>;
			public contentLength(): number;
			public source(): okio.BufferedSource;
			public contentType(): okhttp3.MediaType;
			public close(): void;
		}
		export class NoContentResponseBody extends okhttp3.ResponseBody {
			public static class: java.lang.Class<retrofit2.OkHttpCall.NoContentResponseBody>;
			public contentLength(): number;
			public source(): okio.BufferedSource;
			public contentType(): okhttp3.MediaType;
		}
	}
}

declare module retrofit2 {
	export abstract class ParameterHandler<T>  extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.ParameterHandler<any>>;
	}
	export module ParameterHandler {
		export class Body<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Body<any>>;
		}
		export class Field<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Field<any>>;
		}
		export class FieldMap<T>  extends retrofit2.ParameterHandler<java.util.Map<string,any>> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.FieldMap<any>>;
		}
		export class Header<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Header<any>>;
		}
		export class HeaderMap<T>  extends retrofit2.ParameterHandler<java.util.Map<string,any>> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.HeaderMap<any>>;
		}
		export class Part<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Part<any>>;
		}
		export class PartMap<T>  extends retrofit2.ParameterHandler<java.util.Map<string,any>> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.PartMap<any>>;
		}
		export class Path<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Path<any>>;
		}
		export class Query<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Query<any>>;
		}
		export class QueryMap<T>  extends retrofit2.ParameterHandler<java.util.Map<string,any>> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.QueryMap<any>>;
		}
		export class QueryName<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.QueryName<any>>;
		}
		export class RawPart extends retrofit2.ParameterHandler<okhttp3.MultipartBody.Part> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.RawPart>;
		}
		export class RelativeUrl extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.RelativeUrl>;
		}
	}
}

declare module retrofit2 {
	export class Platform {
		public static class: java.lang.Class<retrofit2.Platform>;
	}
	export module Platform {
		export class Android extends retrofit2.Platform {
			public static class: java.lang.Class<retrofit2.Platform.Android>;
			public defaultCallbackExecutor(): java.util.concurrent.Executor;
		}
		export module Android {
			export class MainThreadExecutor {
				public static class: java.lang.Class<retrofit2.Platform.Android.MainThreadExecutor>;
				public execute(param0: java.lang.Runnable): void;
			}
		}
		export class Java8 extends retrofit2.Platform {
			public static class: java.lang.Class<retrofit2.Platform.Java8>;
		}
	}
}

declare module retrofit2 {
	export class RequestBuilder {
		public static class: java.lang.Class<retrofit2.RequestBuilder>;
	}
	export module RequestBuilder {
		export class ContentTypeOverridingRequestBody extends okhttp3.RequestBody {
			public static class: java.lang.Class<retrofit2.RequestBuilder.ContentTypeOverridingRequestBody>;
			public contentLength(): number;
			public writeTo(param0: okio.BufferedSink): void;
			public contentType(): okhttp3.MediaType;
		}
	}
}

declare module retrofit2 {
	export class Response<T>  extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.Response<any>>;
		public static error(param0: number, param1: okhttp3.ResponseBody): retrofit2.Response<any>;
		public headers(): okhttp3.Headers;
		public body(): T;
		public static success(param0: any, param1: okhttp3.Response): retrofit2.Response<any>;
		public errorBody(): okhttp3.ResponseBody;
		public raw(): okhttp3.Response;
		public toString(): string;
		public static error(param0: okhttp3.ResponseBody, param1: okhttp3.Response): retrofit2.Response<any>;
		public isSuccessful(): boolean;
		public static success(param0: any): retrofit2.Response<any>;
		public static success(param0: any, param1: okhttp3.Headers): retrofit2.Response<any>;
		public code(): number;
		public message(): string;
	}
}

declare module retrofit2 {
	export class Retrofit {
		public static class: java.lang.Class<retrofit2.Retrofit>;
		public requestBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: native.Array<java.lang.annotation.Annotation>): retrofit2.Converter<any,any>;
		public callFactory(): okhttp3.Call.Factory;
		public stringConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>): retrofit2.Converter<any,any>;
		public baseUrl(): okhttp3.HttpUrl;
		public newBuilder(): retrofit2.Retrofit.Builder;
		public nextRequestBodyConverter(param0: retrofit2.Converter.Factory, param1: java.lang.reflect.Type, param2: native.Array<java.lang.annotation.Annotation>, param3: native.Array<java.lang.annotation.Annotation>): retrofit2.Converter<any,any>;
		public callAdapter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>): retrofit2.CallAdapter<any,any>;
		public create(param0: java.lang.Class<any>): any;
		public callbackExecutor(): java.util.concurrent.Executor;
		public callAdapterFactories(): java.util.List<retrofit2.CallAdapter.Factory>;
		public nextCallAdapter(param0: retrofit2.CallAdapter.Factory, param1: java.lang.reflect.Type, param2: native.Array<java.lang.annotation.Annotation>): retrofit2.CallAdapter<any,any>;
		public converterFactories(): java.util.List<retrofit2.Converter.Factory>;
		public responseBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>): retrofit2.Converter<any,any>;
		public nextResponseBodyConverter(param0: retrofit2.Converter.Factory, param1: java.lang.reflect.Type, param2: native.Array<java.lang.annotation.Annotation>): retrofit2.Converter<any,any>;
	}
	export module Retrofit {
		export class Builder {
			public static class: java.lang.Class<retrofit2.Retrofit.Builder>;
			public addConverterFactory(param0: retrofit2.Converter.Factory): retrofit2.Retrofit.Builder;
			public validateEagerly(param0: boolean): retrofit2.Retrofit.Builder;
			public callFactory(param0: okhttp3.Call.Factory): retrofit2.Retrofit.Builder;
			public build(): retrofit2.Retrofit;
			public constructor();
			public baseUrl(param0: string): retrofit2.Retrofit.Builder;
			public client(param0: okhttp3.OkHttpClient): retrofit2.Retrofit.Builder;
			public baseUrl(param0: okhttp3.HttpUrl): retrofit2.Retrofit.Builder;
			public callbackExecutor(param0: java.util.concurrent.Executor): retrofit2.Retrofit.Builder;
			public addCallAdapterFactory(param0: retrofit2.CallAdapter.Factory): retrofit2.Retrofit.Builder;
		}
	}
}

declare module retrofit2 {
	export class ServiceMethod<R, T>  extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.ServiceMethod<any,any>>;
	}
	export module ServiceMethod {
		export class Builder<T, R>  extends java.lang.Object {
			public static class: java.lang.Class<retrofit2.ServiceMethod.Builder<any,any>>;
			public build(): retrofit2.ServiceMethod<any,any>;
		}
	}
}

declare module retrofit2 {
	export class Utils {
		public static class: java.lang.Class<retrofit2.Utils>;
	}
	export module Utils {
		export class GenericArrayTypeImpl {
			public static class: java.lang.Class<retrofit2.Utils.GenericArrayTypeImpl>;
			public equals(param0: any): boolean;
			public toString(): string;
			public getGenericComponentType(): java.lang.reflect.Type;
			public hashCode(): number;
		}
		export class ParameterizedTypeImpl {
			public static class: java.lang.Class<retrofit2.Utils.ParameterizedTypeImpl>;
			public getRawType(): java.lang.reflect.Type;
			public equals(param0: any): boolean;
			public toString(): string;
			public getOwnerType(): java.lang.reflect.Type;
			public getActualTypeArguments(): native.Array<java.lang.reflect.Type>;
			public hashCode(): number;
		}
		export class WildcardTypeImpl {
			public static class: java.lang.Class<retrofit2.Utils.WildcardTypeImpl>;
			public equals(param0: any): boolean;
			public getUpperBounds(): native.Array<java.lang.reflect.Type>;
			public toString(): string;
			public getLowerBounds(): native.Array<java.lang.reflect.Type>;
			public hashCode(): number;
		}
	}
}

declare module retrofit2 {
	export module converter {
		export module gson {
			export class GsonConverterFactory extends retrofit2.Converter.Factory {
				public static class: java.lang.Class<retrofit2.converter.gson.GsonConverterFactory>;
				public responseBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.Converter<okhttp3.ResponseBody,any>;
				public static create(param0: com.google.gson.Gson): retrofit2.converter.gson.GsonConverterFactory;
				public requestBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: native.Array<java.lang.annotation.Annotation>, param3: retrofit2.Retrofit): retrofit2.Converter<any,okhttp3.RequestBody>;
				public static create(): retrofit2.converter.gson.GsonConverterFactory;
			}
		}
	}
}

declare module retrofit2 {
	export module converter {
		export module gson {
			export class GsonRequestBodyConverter<T>  extends retrofit2.Converter<any,okhttp3.RequestBody> {
				public static class: java.lang.Class<retrofit2.converter.gson.GsonRequestBodyConverter<any>>;
				public convert(param0: any): any;
				public convert(param0: any): okhttp3.RequestBody;
			}
		}
	}
}

declare module retrofit2 {
	export module converter {
		export module gson {
			export class GsonResponseBodyConverter<T>  extends retrofit2.Converter<okhttp3.ResponseBody,any> {
				public static class: java.lang.Class<retrofit2.converter.gson.GsonResponseBodyConverter<any>>;
				public convert(param0: any): any;
				public convert(param0: okhttp3.ResponseBody): any;
			}
		}
	}
}


declare module retrofit2 {
	export module http {
		export class Body {
			public static class: java.lang.Class<retrofit2.http.Body>;
			/**
			 * Constructs a new instance of the retrofit2.http.Body interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module retrofit2 {
	export module http {
		export class DELETE {
			public static class: java.lang.Class<retrofit2.http.DELETE>;
			/**
			 * Constructs a new instance of the retrofit2.http.DELETE interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Field {
			public static class: java.lang.Class<retrofit2.http.Field>;
			/**
			 * Constructs a new instance of the retrofit2.http.Field interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
				encoded(): boolean;
			});
			public constructor();
			public encoded(): boolean;
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class FieldMap {
			public static class: java.lang.Class<retrofit2.http.FieldMap>;
			/**
			 * Constructs a new instance of the retrofit2.http.FieldMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				encoded(): boolean;
			});
			public constructor();
			public encoded(): boolean;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class FormUrlEncoded {
			public static class: java.lang.Class<retrofit2.http.FormUrlEncoded>;
			/**
			 * Constructs a new instance of the retrofit2.http.FormUrlEncoded interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module retrofit2 {
	export module http {
		export class GET {
			public static class: java.lang.Class<retrofit2.http.GET>;
			/**
			 * Constructs a new instance of the retrofit2.http.GET interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class HEAD {
			public static class: java.lang.Class<retrofit2.http.HEAD>;
			/**
			 * Constructs a new instance of the retrofit2.http.HEAD interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class HTTP {
			public static class: java.lang.Class<retrofit2.http.HTTP>;
			/**
			 * Constructs a new instance of the retrofit2.http.HTTP interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				method(): string;
				path(): string;
				hasBody(): boolean;
			});
			public constructor();
			public hasBody(): boolean;
			public method(): string;
			public path(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Header {
			public static class: java.lang.Class<retrofit2.http.Header>;
			/**
			 * Constructs a new instance of the retrofit2.http.Header interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class HeaderMap {
			public static class: java.lang.Class<retrofit2.http.HeaderMap>;
			/**
			 * Constructs a new instance of the retrofit2.http.HeaderMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Headers {
			public static class: java.lang.Class<retrofit2.http.Headers>;
			/**
			 * Constructs a new instance of the retrofit2.http.Headers interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): native.Array<string>;
			});
			public constructor();
			public value(): native.Array<string>;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Multipart {
			public static class: java.lang.Class<retrofit2.http.Multipart>;
			/**
			 * Constructs a new instance of the retrofit2.http.Multipart interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module retrofit2 {
	export module http {
		export class OPTIONS {
			public static class: java.lang.Class<retrofit2.http.OPTIONS>;
			/**
			 * Constructs a new instance of the retrofit2.http.OPTIONS interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class PATCH {
			public static class: java.lang.Class<retrofit2.http.PATCH>;
			/**
			 * Constructs a new instance of the retrofit2.http.PATCH interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class POST {
			public static class: java.lang.Class<retrofit2.http.POST>;
			/**
			 * Constructs a new instance of the retrofit2.http.POST interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class PUT {
			public static class: java.lang.Class<retrofit2.http.PUT>;
			/**
			 * Constructs a new instance of the retrofit2.http.PUT interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Part {
			public static class: java.lang.Class<retrofit2.http.Part>;
			/**
			 * Constructs a new instance of the retrofit2.http.Part interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
				encoding(): string;
			});
			public constructor();
			public encoding(): string;
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class PartMap {
			public static class: java.lang.Class<retrofit2.http.PartMap>;
			/**
			 * Constructs a new instance of the retrofit2.http.PartMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				encoding(): string;
			});
			public constructor();
			public encoding(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Path {
			public static class: java.lang.Class<retrofit2.http.Path>;
			/**
			 * Constructs a new instance of the retrofit2.http.Path interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
				encoded(): boolean;
			});
			public constructor();
			public encoded(): boolean;
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Query {
			public static class: java.lang.Class<retrofit2.http.Query>;
			/**
			 * Constructs a new instance of the retrofit2.http.Query interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
				encoded(): boolean;
			});
			public constructor();
			public encoded(): boolean;
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class QueryMap {
			public static class: java.lang.Class<retrofit2.http.QueryMap>;
			/**
			 * Constructs a new instance of the retrofit2.http.QueryMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				encoded(): boolean;
			});
			public constructor();
			public encoded(): boolean;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class QueryName {
			public static class: java.lang.Class<retrofit2.http.QueryName>;
			/**
			 * Constructs a new instance of the retrofit2.http.QueryName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				encoded(): boolean;
			});
			public constructor();
			public encoded(): boolean;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Streaming {
			public static class: java.lang.Class<retrofit2.http.Streaming>;
			/**
			 * Constructs a new instance of the retrofit2.http.Streaming interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Url {
			public static class: java.lang.Class<retrofit2.http.Url>;
			/**
			 * Constructs a new instance of the retrofit2.http.Url interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class Belvedere {
			public static class: java.lang.Class<zendesk.belvedere.Belvedere>;
			public static from(param0: globalAndroid.content.Context): zendesk.belvedere.Belvedere;
			public getFilesFromActivityOnResult(param0: number, param1: number, param2: globalAndroid.content.Intent, param3: zendesk.belvedere.Callback<java.util.List<zendesk.belvedere.MediaResult>>, param4: boolean): void;
			public camera(): zendesk.belvedere.MediaIntent.CameraIntentBuilder;
			public getFilesFromActivityOnResult(param0: number, param1: number, param2: globalAndroid.content.Intent, param3: zendesk.belvedere.Callback<java.util.List<zendesk.belvedere.MediaResult>>): void;
			public resolveUris(param0: java.util.List<globalAndroid.net.Uri>, param1: string, param2: zendesk.belvedere.Callback<java.util.List<zendesk.belvedere.MediaResult>>): void;
			public document(): zendesk.belvedere.MediaIntent.DocumentIntentBuilder;
			public getShareIntent(param0: globalAndroid.net.Uri, param1: string): globalAndroid.content.Intent;
			public revokePermissionsForUri(param0: globalAndroid.net.Uri): void;
			public grantPermissionsForUri(param0: globalAndroid.content.Intent, param1: globalAndroid.net.Uri): void;
			public clearStorage(): void;
			public getViewIntent(param0: globalAndroid.net.Uri, param1: string): globalAndroid.content.Intent;
			public getFile(param0: string, param1: string): zendesk.belvedere.MediaResult;
			public static setSingletonInstance(param0: zendesk.belvedere.Belvedere): void;
		}
		export module Belvedere {
			export class Builder {
				public static class: java.lang.Class<zendesk.belvedere.Belvedere.Builder>;
				public build(): zendesk.belvedere.Belvedere;
				public logger(param0: zendesk.belvedere.L.Logger): zendesk.belvedere.Belvedere.Builder;
				public constructor(param0: globalAndroid.content.Context);
				public debug(param0: boolean): zendesk.belvedere.Belvedere.Builder;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class BelvedereDialog {
			public static class: java.lang.Class<zendesk.belvedere.BelvedereDialog>;
			public onStart(): void;
			public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
			public onCreate(param0: globalAndroid.os.Bundle): void;
			public constructor();
			public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
			public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
		}
		export module BelvedereDialog {
			export class Adapter extends globalAndroid.widget.ArrayAdapter<zendesk.belvedere.MediaIntent> {
				public static class: java.lang.Class<zendesk.belvedere.BelvedereDialog.Adapter>;
				public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
			}
			export class AttachmentSource {
				public static class: java.lang.Class<zendesk.belvedere.BelvedereDialog.AttachmentSource>;
				public getDrawable(): number;
				public static from(param0: zendesk.belvedere.MediaIntent, param1: globalAndroid.content.Context): zendesk.belvedere.BelvedereDialog.AttachmentSource;
				public getText(): string;
			}
			export class StartActivity {
				public static class: java.lang.Class<zendesk.belvedere.BelvedereDialog.StartActivity>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.BelvedereDialog$StartActivity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					startActivity(param0: zendesk.belvedere.MediaIntent): void;
					getContext(): globalAndroid.content.Context;
				});
				public constructor();
				public startActivity(param0: zendesk.belvedere.MediaIntent): void;
				public getContext(): globalAndroid.content.Context;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class BelvedereFileProvider {
			public static class: java.lang.Class<zendesk.belvedere.BelvedereFileProvider>;
			public constructor();
			public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class BelvedereUi {
			public static class: java.lang.Class<zendesk.belvedere.BelvedereUi>;
			public static imageStream(param0: globalAndroid.content.Context): zendesk.belvedere.BelvedereUi.ImageStreamBuilder;
			public constructor();
			public static install(param0: globalAndroid.support.v7.app.AppCompatActivity): zendesk.belvedere.ImageStream;
			public static showDialog(param0: globalAndroid.support.v4.app.FragmentManager, param1: native.Array<zendesk.belvedere.MediaIntent>): void;
			public static showDialog(param0: globalAndroid.support.v4.app.FragmentManager, param1: java.util.List<zendesk.belvedere.MediaIntent>): void;
		}
		export module BelvedereUi {
			export class ImageStreamBuilder {
				public static class: java.lang.Class<zendesk.belvedere.BelvedereUi.ImageStreamBuilder>;
				public withExtraItems(param0: java.util.List<zendesk.belvedere.MediaResult>): zendesk.belvedere.BelvedereUi.ImageStreamBuilder;
				public withSelectedItems(param0: java.util.List<zendesk.belvedere.MediaResult>): zendesk.belvedere.BelvedereUi.ImageStreamBuilder;
				public withMaxFileSize(param0: number): zendesk.belvedere.BelvedereUi.ImageStreamBuilder;
				public withFullScreenOnly(param0: boolean): zendesk.belvedere.BelvedereUi.ImageStreamBuilder;
				public withCameraIntent(): zendesk.belvedere.BelvedereUi.ImageStreamBuilder;
				public withDocumentIntent(param0: string, param1: boolean): zendesk.belvedere.BelvedereUi.ImageStreamBuilder;
				public withTouchableItems(param0: native.Array<number>): zendesk.belvedere.BelvedereUi.ImageStreamBuilder;
				public showPopup(param0: globalAndroid.support.v7.app.AppCompatActivity): void;
			}
			export class UiConfig {
				public static class: java.lang.Class<zendesk.belvedere.BelvedereUi.UiConfig>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<zendesk.belvedere.BelvedereUi.UiConfig>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public describeContents(): number;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class BitmapUtils {
			public static class: java.lang.Class<zendesk.belvedere.BitmapUtils>;
			public static getImageDimensions(param0: java.io.File): globalAndroid.util.Pair<java.lang.Integer,java.lang.Integer>;
			public constructor();
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class BuildConfig {
			public static class: java.lang.Class<zendesk.belvedere.BuildConfig>;
			public static DEBUG: boolean;
			public static APPLICATION_ID: string;
			public static BUILD_TYPE: string;
			public static FLAVOR: string;
			public static VERSION_CODE: number;
			public static VERSION_NAME: string;
			public constructor();
		}
	}
}

declare module zendesk {
	export module belvedere {
		export abstract class Callback<E>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.belvedere.Callback<any>>;
			public success(param0: E): void;
			public cancel(): void;
			public constructor();
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class FixedWidthImageView implements com.sebchlan.picassocompat.TargetCompat {
			public static class: java.lang.Class<zendesk.belvedere.FixedWidthImageView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public showImage(param0: com.sebchlan.picassocompat.PicassoCompat, param1: globalAndroid.net.Uri, param2: number, param3: number, param4: zendesk.belvedere.FixedWidthImageView.DimensionsCallback): void;
			public onBitmapLoaded(param0: globalAndroid.graphics.Bitmap, param1: com.sebchlan.picassocompat.PicassoCompat.LoadedFrom): void;
			public onBitmapFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
			public onPrepareLoad(param0: globalAndroid.graphics.drawable.Drawable): void;
			public onMeasure(param0: number, param1: number): void;
			public constructor(param0: globalAndroid.content.Context);
			public showImage(param0: com.sebchlan.picassocompat.PicassoCompat, param1: globalAndroid.net.Uri, param2: zendesk.belvedere.FixedWidthImageView.CalculatedDimensions): void;
		}
		export module FixedWidthImageView {
			export class CalculatedDimensions {
				public static class: java.lang.Class<zendesk.belvedere.FixedWidthImageView.CalculatedDimensions>;
			}
			export class DimensionsCallback {
				public static class: java.lang.Class<zendesk.belvedere.FixedWidthImageView.DimensionsCallback>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.FixedWidthImageView$DimensionsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onImageDimensionsFound(param0: zendesk.belvedere.FixedWidthImageView.CalculatedDimensions): void;
				});
				public constructor();
				public onImageDimensionsFound(param0: zendesk.belvedere.FixedWidthImageView.CalculatedDimensions): void;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class FloatingActionMenu {
			public static class: java.lang.Class<zendesk.belvedere.FloatingActionMenu>;
			public onClick(param0: globalAndroid.view.View): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public addMenuItem(param0: number, param1: number, param2: number, param3: globalAndroid.view.View.OnClickListener): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: globalAndroid.content.Context);
		}
		export module FloatingActionMenu {
			export abstract class AnimationListenerAdapter {
				public static class: java.lang.Class<zendesk.belvedere.FloatingActionMenu.AnimationListenerAdapter>;
				public onAnimationStart(param0: globalAndroid.view.animation.Animation): void;
				public onAnimationEnd(param0: globalAndroid.view.animation.Animation): void;
				public onAnimationRepeat(param0: globalAndroid.view.animation.Animation): void;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class ImageStream {
			public static class: java.lang.Class<zendesk.belvedere.ImageStream>;
			public addListener(param0: zendesk.belvedere.ImageStream.Listener): void;
			public dismiss(): void;
			public getKeyboardHelper(): zendesk.belvedere.KeyboardHelper;
			public wasOpen(): boolean;
			public onCreate(param0: globalAndroid.os.Bundle): void;
			public onPause(): void;
			public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
			public constructor();
			public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
			public isAttachmentsPopupVisible(): boolean;
			public addScrollListener(param0: zendesk.belvedere.ImageStream.ScrollListener): void;
		}
		export module ImageStream {
			export class Listener {
				public static class: java.lang.Class<zendesk.belvedere.ImageStream.Listener>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.ImageStream$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onDismissed(): void;
					onVisible(): void;
					onMediaSelected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
					onMediaDeselected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
				});
				public constructor();
				public onDismissed(): void;
				public onVisible(): void;
				public onMediaDeselected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
				public onMediaSelected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
			}
			export class ScrollListener {
				public static class: java.lang.Class<zendesk.belvedere.ImageStream.ScrollListener>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.ImageStream$ScrollListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onScroll(param0: number, param1: number, param2: number): void;
				});
				public constructor();
				public onScroll(param0: number, param1: number, param2: number): void;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class ImageStreamAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<globalAndroid.support.v7.widget.RecyclerView.ViewHolder> {
			public static class: java.lang.Class<zendesk.belvedere.ImageStreamAdapter>;
			public getItemCount(): number;
			public getItemViewType(param0: number): number;
			public getItemId(param0: number): number;
			public onBindViewHolder(param0: globalAndroid.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
			public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): globalAndroid.support.v7.widget.RecyclerView.ViewHolder;
		}
		export module ImageStreamAdapter {
			export class Listener {
				public static class: java.lang.Class<zendesk.belvedere.ImageStreamAdapter.Listener>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.ImageStreamAdapter$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onOpenCamera(): void;
					onSelectionChanged(param0: zendesk.belvedere.ImageStreamItems.Item): boolean;
				});
				public constructor();
				public onOpenCamera(): void;
				public onSelectionChanged(param0: zendesk.belvedere.ImageStreamItems.Item): boolean;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class ImageStreamItems {
			public static class: java.lang.Class<zendesk.belvedere.ImageStreamItems>;
		}
		export module ImageStreamItems {
			export abstract class Item {
				public static class: java.lang.Class<zendesk.belvedere.ImageStreamItems.Item>;
			}
			export class StaticItem extends zendesk.belvedere.ImageStreamItems.Item {
				public static class: java.lang.Class<zendesk.belvedere.ImageStreamItems.StaticItem>;
				public bind(param0: globalAndroid.view.View): void;
			}
			export class StreamItemFile extends zendesk.belvedere.ImageStreamItems.Item {
				public static class: java.lang.Class<zendesk.belvedere.ImageStreamItems.StreamItemFile>;
			}
			export class StreamItemImage extends zendesk.belvedere.ImageStreamItems.Item {
				public static class: java.lang.Class<zendesk.belvedere.ImageStreamItems.StreamItemImage>;
				public bind(param0: globalAndroid.view.View): void;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class ImageStreamModel extends zendesk.belvedere.ImageStreamMvp.Model {
			public static class: java.lang.Class<zendesk.belvedere.ImageStreamModel>;
			public getGooglePhotosIntent(): zendesk.belvedere.MediaIntent;
			public removeFromSelectedItems(param0: zendesk.belvedere.MediaResult): java.util.List<zendesk.belvedere.MediaResult>;
			public getLatestImages(): java.util.List<zendesk.belvedere.MediaResult>;
			public hasDocumentIntent(): boolean;
			public getSelectedMediaResults(): java.util.List<zendesk.belvedere.MediaResult>;
			public getDocumentIntent(): zendesk.belvedere.MediaIntent;
			public hasGooglePhotosIntent(): boolean;
			public hasCameraIntent(): boolean;
			public getCameraIntent(): zendesk.belvedere.MediaIntent;
			public showFullScreenOnly(): boolean;
			public addToSelectedItems(param0: zendesk.belvedere.MediaResult): java.util.List<zendesk.belvedere.MediaResult>;
			public getMaxFileSize(): number;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class ImageStreamMvp {
			public static class: java.lang.Class<zendesk.belvedere.ImageStreamMvp>;
			/**
			 * Constructs a new instance of the zendesk.belvedere.ImageStreamMvp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
		export module ImageStreamMvp {
			export class Model {
				public static class: java.lang.Class<zendesk.belvedere.ImageStreamMvp.Model>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.ImageStreamMvp$Model interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getLatestImages(): java.util.List<zendesk.belvedere.MediaResult>;
					hasCameraIntent(): boolean;
					hasDocumentIntent(): boolean;
					hasGooglePhotosIntent(): boolean;
					getCameraIntent(): zendesk.belvedere.MediaIntent;
					getDocumentIntent(): zendesk.belvedere.MediaIntent;
					getGooglePhotosIntent(): zendesk.belvedere.MediaIntent;
					getSelectedMediaResults(): java.util.List<zendesk.belvedere.MediaResult>;
					addToSelectedItems(param0: zendesk.belvedere.MediaResult): java.util.List<zendesk.belvedere.MediaResult>;
					removeFromSelectedItems(param0: zendesk.belvedere.MediaResult): java.util.List<zendesk.belvedere.MediaResult>;
					getMaxFileSize(): number;
					showFullScreenOnly(): boolean;
				});
				public constructor();
				public removeFromSelectedItems(param0: zendesk.belvedere.MediaResult): java.util.List<zendesk.belvedere.MediaResult>;
				public addToSelectedItems(param0: zendesk.belvedere.MediaResult): java.util.List<zendesk.belvedere.MediaResult>;
				public getCameraIntent(): zendesk.belvedere.MediaIntent;
				public getDocumentIntent(): zendesk.belvedere.MediaIntent;
				public hasGooglePhotosIntent(): boolean;
				public getSelectedMediaResults(): java.util.List<zendesk.belvedere.MediaResult>;
				public showFullScreenOnly(): boolean;
				public getLatestImages(): java.util.List<zendesk.belvedere.MediaResult>;
				public getGooglePhotosIntent(): zendesk.belvedere.MediaIntent;
				public hasCameraIntent(): boolean;
				public hasDocumentIntent(): boolean;
				public getMaxFileSize(): number;
			}
			export class Presenter {
				public static class: java.lang.Class<zendesk.belvedere.ImageStreamMvp.Presenter>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.ImageStreamMvp$Presenter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(): void;
					onImageStreamScrolled(param0: number, param1: number, param2: number): void;
					dismiss(): void;
				});
				public constructor();
				public onImageStreamScrolled(param0: number, param1: number, param2: number): void;
				public dismiss(): void;
				public init(): void;
			}
			export class View {
				public static class: java.lang.Class<zendesk.belvedere.ImageStreamMvp.View>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.ImageStreamMvp$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					initViews(param0: boolean): void;
					showImageStream(param0: java.util.List<zendesk.belvedere.MediaResult>, param1: java.util.List<zendesk.belvedere.MediaResult>, param2: boolean, param3: boolean, param4: zendesk.belvedere.ImageStreamAdapter.Listener): void;
					showDocumentMenuItem(param0: globalAndroid.view.View.OnClickListener): void;
					showGooglePhotosMenuItem(param0: globalAndroid.view.View.OnClickListener): void;
					openMediaIntent(param0: zendesk.belvedere.MediaIntent, param1: zendesk.belvedere.ImageStream): void;
					showToast(param0: number): void;
					updateToolbarTitle(param0: number): void;
					shouldShowFullScreen(): boolean;
				});
				public constructor();
				public initViews(param0: boolean): void;
				public showImageStream(param0: java.util.List<zendesk.belvedere.MediaResult>, param1: java.util.List<zendesk.belvedere.MediaResult>, param2: boolean, param3: boolean, param4: zendesk.belvedere.ImageStreamAdapter.Listener): void;
				public shouldShowFullScreen(): boolean;
				public showToast(param0: number): void;
				public openMediaIntent(param0: zendesk.belvedere.MediaIntent, param1: zendesk.belvedere.ImageStream): void;
				public updateToolbarTitle(param0: number): void;
				public showGooglePhotosMenuItem(param0: globalAndroid.view.View.OnClickListener): void;
				public showDocumentMenuItem(param0: globalAndroid.view.View.OnClickListener): void;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class ImageStreamPresenter extends zendesk.belvedere.ImageStreamMvp.Presenter {
			public static class: java.lang.Class<zendesk.belvedere.ImageStreamPresenter>;
			public dismiss(): void;
			public init(): void;
			public onImageStreamScrolled(param0: number, param1: number, param2: number): void;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class ImageStreamService {
			public static class: java.lang.Class<zendesk.belvedere.ImageStreamService>;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class ImageStreamUi implements zendesk.belvedere.ImageStreamMvp.View {
			public static class: java.lang.Class<zendesk.belvedere.ImageStreamUi>;
			public dismiss(): void;
			public updateToolbarTitle(param0: number): void;
			public showDocumentMenuItem(param0: globalAndroid.view.View.OnClickListener): void;
			public openMediaIntent(param0: zendesk.belvedere.MediaIntent, param1: zendesk.belvedere.ImageStream): void;
			public showImageStream(param0: java.util.List<zendesk.belvedere.MediaResult>, param1: java.util.List<zendesk.belvedere.MediaResult>, param2: boolean, param3: boolean, param4: zendesk.belvedere.ImageStreamAdapter.Listener): void;
			public initViews(param0: boolean): void;
			public showGooglePhotosMenuItem(param0: globalAndroid.view.View.OnClickListener): void;
			public showToast(param0: number): void;
			public shouldShowFullScreen(): boolean;
		}
		export module ImageStreamUi {
			export class ToolbarBehavior extends globalAndroid.support.design.widget.CoordinatorLayout.Behavior<globalAndroid.view.View> {
				public static class: java.lang.Class<zendesk.belvedere.ImageStreamUi.ToolbarBehavior>;
				public layoutDependsOn(param0: globalAndroid.support.design.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
				public onDependentViewChanged(param0: globalAndroid.support.design.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class IntentRegistry {
			public static class: java.lang.Class<zendesk.belvedere.IntentRegistry>;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class KeyboardHelper {
			public static class: java.lang.Class<zendesk.belvedere.KeyboardHelper>;
			public static inject(param0: globalAndroid.app.Activity): zendesk.belvedere.KeyboardHelper;
			public getKeyboardHeight(): number;
			public getInputTrap(): globalAndroid.widget.EditText;
			public isKeyboardVisible(): boolean;
			public addListener(param0: zendesk.belvedere.KeyboardHelper.Listener): void;
		}
		export module KeyboardHelper {
			export class KeyboardTreeObserver {
				public static class: java.lang.Class<zendesk.belvedere.KeyboardHelper.KeyboardTreeObserver>;
				public onGlobalLayout(): void;
			}
			export class Listener {
				public static class: java.lang.Class<zendesk.belvedere.KeyboardHelper.Listener>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.KeyboardHelper$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onKeyboardVisible(): void;
					onKeyboardDismissed(): void;
				});
				public constructor();
				public onKeyboardDismissed(): void;
				public onKeyboardVisible(): void;
			}
			export class SizeListener {
				public static class: java.lang.Class<zendesk.belvedere.KeyboardHelper.SizeListener>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.KeyboardHelper$SizeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSizeChanged(param0: number): void;
				});
				public constructor();
				public onSizeChanged(param0: number): void;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class L {
			public static class: java.lang.Class<zendesk.belvedere.L>;
		}
		export module L {
			export class DefaultLogger extends zendesk.belvedere.L.Logger {
				public static class: java.lang.Class<zendesk.belvedere.L.DefaultLogger>;
				public e(param0: string, param1: string, param2: java.lang.Throwable): void;
				public setLoggable(param0: boolean): void;
				public w(param0: string, param1: string): void;
				public e(param0: string, param1: string): void;
				public d(param0: string, param1: string): void;
			}
			export class Logger {
				public static class: java.lang.Class<zendesk.belvedere.L.Logger>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.L$Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					d(param0: string, param1: string): void;
					w(param0: string, param1: string): void;
					e(param0: string, param1: string): void;
					e(param0: string, param1: string, param2: java.lang.Throwable): void;
					setLoggable(param0: boolean): void;
				});
				public constructor();
				public e(param0: string, param1: string, param2: java.lang.Throwable): void;
				public setLoggable(param0: boolean): void;
				public w(param0: string, param1: string): void;
				public e(param0: string, param1: string): void;
				public d(param0: string, param1: string): void;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class MediaIntent {
			public static class: java.lang.Class<zendesk.belvedere.MediaIntent>;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<zendesk.belvedere.MediaIntent>;
			public getTarget(): number;
			public getPermission(): string;
			public describeContents(): number;
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public open(param0: globalAndroid.app.Activity): void;
			public open(param0: globalAndroid.support.v4.app.Fragment): void;
			public getIntent(): globalAndroid.content.Intent;
			public isAvailable(): boolean;
		}
		export module MediaIntent {
			export class CameraIntentBuilder {
				public static class: java.lang.Class<zendesk.belvedere.MediaIntent.CameraIntentBuilder>;
				public build(): zendesk.belvedere.MediaIntent;
				public open(param0: globalAndroid.support.v4.app.Fragment): void;
				public open(param0: globalAndroid.app.Activity): void;
			}
			export class DocumentIntentBuilder {
				public static class: java.lang.Class<zendesk.belvedere.MediaIntent.DocumentIntentBuilder>;
				public build(): zendesk.belvedere.MediaIntent;
				public contentType(param0: string): zendesk.belvedere.MediaIntent.DocumentIntentBuilder;
				public open(param0: globalAndroid.support.v4.app.Fragment): void;
				public allowMultiple(param0: boolean): zendesk.belvedere.MediaIntent.DocumentIntentBuilder;
				public open(param0: globalAndroid.app.Activity): void;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class MediaResult extends java.lang.Object {
			public static class: java.lang.Class<zendesk.belvedere.MediaResult>;
			public static UNKNOWN_VALUE: number;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<zendesk.belvedere.MediaResult>;
			public getFile(): java.io.File;
			public equals(param0: any): boolean;
			public getMimeType(): string;
			public getHeight(): number;
			public getWidth(): number;
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public getSize(): number;
			public constructor(param0: java.io.File, param1: globalAndroid.net.Uri, param2: globalAndroid.net.Uri, param3: string, param4: string, param5: number, param6: number, param7: number);
			public compareTo(param0: zendesk.belvedere.MediaResult): number;
			public getName(): string;
			public getUri(): globalAndroid.net.Uri;
			public describeContents(): number;
			public getOriginalUri(): globalAndroid.net.Uri;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class MediaSource {
			public static class: java.lang.Class<zendesk.belvedere.MediaSource>;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class PermissionManager {
			public static class: java.lang.Class<zendesk.belvedere.PermissionManager>;
		}
		export module PermissionManager {
			export class InternalPermissionCallback {
				public static class: java.lang.Class<zendesk.belvedere.PermissionManager.InternalPermissionCallback>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.PermissionManager$InternalPermissionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					result(param0: java.util.Map<string,java.lang.Boolean>, param1: java.util.List<string>): void;
				});
				public constructor();
				public result(param0: java.util.Map<string,java.lang.Boolean>, param1: java.util.List<string>): void;
			}
			export class PermissionCallback {
				public static class: java.lang.Class<zendesk.belvedere.PermissionManager.PermissionCallback>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.PermissionManager$PermissionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPermissionsGranted(param0: java.util.List<zendesk.belvedere.MediaIntent>): void;
					onPermissionsDenied(): void;
				});
				public constructor();
				public onPermissionsDenied(): void;
				public onPermissionsGranted(param0: java.util.List<zendesk.belvedere.MediaIntent>): void;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class PermissionStorage {
			public static class: java.lang.Class<zendesk.belvedere.PermissionStorage>;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class PermissionUtil {
			public static class: java.lang.Class<zendesk.belvedere.PermissionUtil>;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class ResolveUriTask extends globalAndroid.os.AsyncTask<globalAndroid.net.Uri,java.lang.Void,java.util.List<zendesk.belvedere.MediaResult>> {
			public static class: java.lang.Class<zendesk.belvedere.ResolveUriTask>;
			public doInBackground(param0: native.Array<globalAndroid.net.Uri>): java.util.List<zendesk.belvedere.MediaResult>;
			public onPostExecute(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class SelectableView {
			public static class: java.lang.Class<zendesk.belvedere.SelectableView>;
			public onClick(param0: globalAndroid.view.View): void;
			public setSelected(param0: boolean): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public setContentDescriptionStrings(param0: string, param1: string): void;
			public setSelectionListener(param0: zendesk.belvedere.SelectableView.SelectionListener): void;
			public constructor(param0: globalAndroid.content.Context);
		}
		export module SelectableView {
			export class SelectionListener {
				public static class: java.lang.Class<zendesk.belvedere.SelectableView.SelectionListener>;
				/**
				 * Constructs a new instance of the zendesk.belvedere.SelectableView$SelectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSelectionChanged(param0: boolean): boolean;
				});
				public constructor();
				public onSelectionChanged(param0: boolean): boolean;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class Storage {
			public static class: java.lang.Class<zendesk.belvedere.Storage>;
		}
	}
}

declare module zendesk {
	export module belvedere {
		export class Utils {
			public static class: java.lang.Class<zendesk.belvedere.Utils>;
		}
		export module Utils {
			export class RoundedTransformation extends com.sebchlan.picassocompat.TransformationCompat {
				public static class: java.lang.Class<zendesk.belvedere.Utils.RoundedTransformation>;
				public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public key(): string;
			}
		}
	}
}

declare module zendesk {
	export module belvedere {
		export module ui {
			export class BuildConfig {
				public static class: java.lang.Class<zendesk.belvedere.ui.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class AgentFileCellView {
			public static class: java.lang.Class<zendesk.commonui.AgentFileCellView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public onFinishInflate(): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context);
			public update(param0: zendesk.commonui.AgentFileCellView.State): void;
		}
		export module AgentFileCellView {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.AgentFileCellView.State>;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class AgentImageCellView {
			public static class: java.lang.Class<zendesk.commonui.AgentImageCellView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public onFinishInflate(): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context);
		}
		export module AgentImageCellView {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.AgentImageCellView.State>;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class AgentMessageView {
			public static class: java.lang.Class<zendesk.commonui.AgentMessageView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public onFinishInflate(): void;
			public update(param0: zendesk.commonui.AgentMessageView.State): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context);
		}
		export module AgentMessageView {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.AgentMessageView.State>;
				public constructor(param0: zendesk.commonui.ConversationCellProps, param1: string, param2: string, param3: boolean);
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class AlmostRealProgressBar {
			public static class: java.lang.Class<zendesk.commonui.AlmostRealProgressBar>;
			public static STOP_ANIMATION_DURATION: number;
			public static ALPHA_FADE_DURATION: number;
			public static STOP_DEBOUNCE_TIME: number;
			public static START_DEBOUNCE_TIME: number;
			public static SIMPLE_PROGRESSBAR: java.util.List<zendesk.commonui.AlmostRealProgressBar.Step>;
			public static DONT_STOP_MOVING: java.util.List<zendesk.commonui.AlmostRealProgressBar.Step>;
			public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public stop(param0: number): void;
			public start(param0: java.util.List<zendesk.commonui.AlmostRealProgressBar.Step>): void;
			public onSaveInstanceState(): globalAndroid.os.Parcelable;
			public constructor(param0: globalAndroid.content.Context);
		}
		export module AlmostRealProgressBar {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.AlmostRealProgressBar.State>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<zendesk.commonui.AlmostRealProgressBar.State>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public constructor(param0: globalAndroid.os.Parcelable, param1: number, param2: java.util.List<zendesk.commonui.AlmostRealProgressBar.Step>);
			}
			export class StateAwareAnimator {
				public static class: java.lang.Class<zendesk.commonui.AlmostRealProgressBar.StateAwareAnimator>;
				public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
				public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
				public onAnimationRepeat(param0: globalAndroid.animation.Animator): void;
				public onAnimationStart(param0: globalAndroid.animation.Animator): void;
			}
			export class Step extends java.lang.Object {
				public static class: java.lang.Class<zendesk.commonui.AlmostRealProgressBar.Step>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<zendesk.commonui.AlmostRealProgressBar.Step>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public compareTo(param0: zendesk.commonui.AlmostRealProgressBar.Step): number;
				public describeContents(): number;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ArticlesResponseView {
			public static class: java.lang.Class<zendesk.commonui.ArticlesResponseView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public onFinishInflate(): void;
			public update(param0: zendesk.commonui.ArticlesResponseView.State): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context);
		}
		export module ArticlesResponseView {
			export class ArticleSuggestionViewState {
				public static class: java.lang.Class<zendesk.commonui.ArticlesResponseView.ArticleSuggestionViewState>;
			}
			export class State {
				public static class: java.lang.Class<zendesk.commonui.ArticlesResponseView.State>;
				public constructor(param0: string, param1: boolean, param2: zendesk.commonui.ConversationCellProps, param3: java.util.List<zendesk.commonui.ArticlesResponseView.ArticleSuggestionViewState>);
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class AttachmentsIndicator {
			public static class: java.lang.Class<zendesk.commonui.AttachmentsIndicator>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: globalAndroid.content.Context);
		}
	}
}

declare module zendesk {
	export module commonui {
		export class AvatarContainer {
			public static class: java.lang.Class<zendesk.commonui.AvatarContainer>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: globalAndroid.content.Context);
		}
	}
}

declare module zendesk {
	export module commonui {
		export class AvatarState {
			public static class: java.lang.Class<zendesk.commonui.AvatarState>;
			public constructor(param0: any, param1: string, param2: string, param3: number);
		}
	}
}

declare module zendesk {
	export module commonui {
		export class AvatarView {
			public static class: java.lang.Class<zendesk.commonui.AvatarView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public showLetter(param0: string, param1: any): void;
			public constructor(param0: globalAndroid.content.Context);
			public showDefault(param0: number, param1: any): void;
			public showImage(param0: com.sebchlan.picassocompat.PicassoCompat, param1: string): void;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class BuildConfig {
			public static class: java.lang.Class<zendesk.commonui.BuildConfig>;
			public static DEBUG: boolean;
			public static APPLICATION_ID: string;
			public static BUILD_TYPE: string;
			public static FLAVOR: string;
			public static VERSION_CODE: number;
			public static VERSION_NAME: string;
			public constructor();
		}
	}
}

declare module zendesk {
	export module commonui {
		export class CacheFragment {
			public static class: java.lang.Class<zendesk.commonui.CacheFragment>;
			public getOrDefault(param0: string, param1: any): any;
			public get(param0: string): any;
			public put(param0: string, param1: any): void;
			public remove(param0: string): void;
			public static from(param0: globalAndroid.support.v4.app.FragmentActivity): zendesk.commonui.CacheFragment;
			public getOrDefault(param0: string, param1: zendesk.commonui.CacheFragment.Supplier<any>): any;
			public contains(param0: string): boolean;
			public constructor();
		}
		export module CacheFragment {
			export class Supplier<T>  extends java.lang.Object {
				public static class: java.lang.Class<zendesk.commonui.CacheFragment.Supplier<any>>;
				/**
				 * Constructs a new instance of the zendesk.commonui.CacheFragment$Supplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					get(): T;
				});
				public constructor();
				public get(): T;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class Cell<T>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.commonui.Cell<any>>;
			/**
			 * Constructs a new instance of the zendesk.commonui.Cell<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getId(): string;
				areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
				getViewClassType(): java.lang.Class<T>;
				getLayoutRes(): number;
				bind(param0: T): void;
			});
			public constructor();
			public getId(): string;
			public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
			public bind(param0: T): void;
			public getLayoutRes(): number;
			public getViewClassType(): java.lang.Class<T>;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class CellListAdapter {
			public static class: java.lang.Class<zendesk.commonui.CellListAdapter>;
			public getItemViewType(param0: number): number;
			public onBindViewHolder(param0: globalAndroid.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
			public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): globalAndroid.support.v7.widget.RecyclerView.ViewHolder;
		}
		export module CellListAdapter {
			export class CellDiffUtil {
				public static class: java.lang.Class<zendesk.commonui.CellListAdapter.CellDiffUtil>;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>, param1: zendesk.commonui.Cell<any>): boolean;
				public areItemsTheSame(param0: zendesk.commonui.Cell<any>, param1: zendesk.commonui.Cell<any>): boolean;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ContactOptionsView {
			public static class: java.lang.Class<zendesk.commonui.ContactOptionsView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public update(param0: zendesk.commonui.ContactOptionsView.State): void;
			public constructor(param0: globalAndroid.content.Context);
		}
		export module ContactOptionsView {
			export class ContactOptionState {
				public static class: java.lang.Class<zendesk.commonui.ContactOptionsView.ContactOptionState>;
			}
			export class State {
				public static class: java.lang.Class<zendesk.commonui.ContactOptionsView.State>;
				public constructor(param0: string, param1: string, param2: boolean, param3: zendesk.commonui.ConversationCellProps, param4: java.util.List<zendesk.commonui.ContactOptionsView.ContactOptionState>);
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ConversationCell {
			public static class: java.lang.Class<zendesk.commonui.ConversationCell>;
		}
		export module ConversationCell {
			export class ArticlesResponse extends zendesk.commonui.Cell<zendesk.commonui.ArticlesResponseView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.ArticlesResponse>;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public getId(): string;
				public getLayoutRes(): number;
				public bind(param0: zendesk.commonui.ArticlesResponseView): void;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
				public getViewClassType(): java.lang.Class<zendesk.commonui.ArticlesResponseView>;
			}
			export class ContactOptions extends zendesk.commonui.Cell<zendesk.commonui.ContactOptionsView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.ContactOptions>;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public getId(): string;
				public bind(param0: zendesk.commonui.ContactOptionsView): void;
				public getLayoutRes(): number;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
				public getViewClassType(): java.lang.Class<zendesk.commonui.ContactOptionsView>;
			}
			export class FileQuery extends zendesk.commonui.Cell<zendesk.commonui.EndUserFileCellView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.FileQuery>;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public bind(param0: zendesk.commonui.EndUserFileCellView): void;
				public getId(): string;
				public getLayoutRes(): number;
				public getViewClassType(): java.lang.Class<zendesk.commonui.EndUserFileCellView>;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
			}
			export class FileResponse extends zendesk.commonui.Cell<zendesk.commonui.AgentFileCellView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.FileResponse>;
				public bind(param0: zendesk.commonui.AgentFileCellView): void;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public getId(): string;
				public getLayoutRes(): number;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
				public getViewClassType(): java.lang.Class<zendesk.commonui.AgentFileCellView>;
			}
			export class ImageQuery extends zendesk.commonui.Cell<zendesk.commonui.EndUserImageCellView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.ImageQuery>;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public getId(): string;
				public getLayoutRes(): number;
				public bind(param0: zendesk.commonui.EndUserImageCellView): void;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
				public getViewClassType(): java.lang.Class<zendesk.commonui.EndUserImageCellView>;
			}
			export class ImageResponse extends zendesk.commonui.Cell<zendesk.commonui.AgentImageCellView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.ImageResponse>;
				public bind(param0: zendesk.commonui.AgentImageCellView): void;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public getId(): string;
				public getLayoutRes(): number;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
				public getViewClassType(): java.lang.Class<zendesk.commonui.AgentImageCellView>;
			}
			export class ResponseOptions extends zendesk.commonui.Cell<zendesk.commonui.ResponseOptionsView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.ResponseOptions>;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public getId(): string;
				public bind(param0: zendesk.commonui.ResponseOptionsView): void;
				public getLayoutRes(): number;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
				public getViewClassType(): java.lang.Class<zendesk.commonui.ResponseOptionsView>;
			}
			export class SystemMessage extends zendesk.commonui.Cell<zendesk.commonui.SystemMessageView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.SystemMessage>;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public bind(param0: zendesk.commonui.SystemMessageView): void;
				public getId(): string;
				public getLayoutRes(): number;
				public getViewClassType(): java.lang.Class<zendesk.commonui.SystemMessageView>;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
			}
			export class TextQuery extends zendesk.commonui.Cell<zendesk.commonui.EndUserMessageView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.TextQuery>;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public getViewClassType(): java.lang.Class<zendesk.commonui.EndUserMessageView>;
				public getId(): string;
				public bind(param0: zendesk.commonui.EndUserMessageView): void;
				public getLayoutRes(): number;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
			}
			export class TextResponse extends zendesk.commonui.Cell<zendesk.commonui.AgentMessageView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.TextResponse>;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public getId(): string;
				public getLayoutRes(): number;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
				public getViewClassType(): java.lang.Class<zendesk.commonui.AgentMessageView>;
				public bind(param0: zendesk.commonui.AgentMessageView): void;
			}
			export class TypingIndicator extends zendesk.commonui.Cell<zendesk.commonui.TypingIndicatorView> {
				public static class: java.lang.Class<zendesk.commonui.ConversationCell.TypingIndicator>;
				public getViewClassType(): java.lang.Class<any>;
				public bind(param0: any): void;
				public getId(): string;
				public getLayoutRes(): number;
				public getViewClassType(): java.lang.Class<zendesk.commonui.TypingIndicatorView>;
				public areContentsTheSame(param0: zendesk.commonui.Cell<any>): boolean;
				public bind(param0: zendesk.commonui.TypingIndicatorView): void;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ConversationCellFactory {
			public static class: java.lang.Class<zendesk.commonui.ConversationCellFactory>;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ConversationCellProps {
			public static class: java.lang.Class<zendesk.commonui.ConversationCellProps>;
			public equals(param0: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ConversationCellPropsFactory {
			public static class: java.lang.Class<zendesk.commonui.ConversationCellPropsFactory>;
			public constructor(param0: globalAndroid.content.res.Resources);
			public create(param0: java.util.List<zendesk.commonui.ConversationItem>): java.util.List<zendesk.commonui.ConversationCellProps>;
		}
		export module ConversationCellPropsFactory {
			export class InteractionType {
				public static class: java.lang.Class<zendesk.commonui.ConversationCellPropsFactory.InteractionType>;
				public static QUERY: zendesk.commonui.ConversationCellPropsFactory.InteractionType;
				public static RESPONSE: zendesk.commonui.ConversationCellPropsFactory.InteractionType;
				public static NONE: zendesk.commonui.ConversationCellPropsFactory.InteractionType;
				public static valueOf(param0: string): zendesk.commonui.ConversationCellPropsFactory.InteractionType;
				public static values(): native.Array<zendesk.commonui.ConversationCellPropsFactory.InteractionType>;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export abstract class ConversationItem {
			public static class: java.lang.Class<zendesk.commonui.ConversationItem>;
			public constructor();
		}
		export module ConversationItem {
			export class AgentLabelState {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.AgentLabelState>;
				public isBot(): boolean;
				public constructor(param0: string, param1: string, param2: boolean);
				public constructor(param0: string, param1: boolean);
				public getAgentId(): string;
				public getAgentName(): string;
			}
			export class ArticlesResponse extends zendesk.commonui.ConversationItem.Response {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.ArticlesResponse>;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState, param2: java.util.List<zendesk.commonui.ConversationItem.ArticlesResponse.ArticleSuggestion>);
				public getArticleSuggestions(): java.util.List<zendesk.commonui.ConversationItem.ArticlesResponse.ArticleSuggestion>;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState);
				public constructor();
			}
			export module ArticlesResponse {
				export class ArticleSuggestion {
					public static class: java.lang.Class<zendesk.commonui.ConversationItem.ArticlesResponse.ArticleSuggestion>;
					public getTitle(): string;
					public constructor(param0: string, param1: string, param2: zendesk.commonui.OnArticleSuggestionSelectionListener);
					public getSnippet(): string;
					public getListener(): zendesk.commonui.OnArticleSuggestionSelectionListener;
				}
			}
			export class ContactResponse extends zendesk.commonui.ConversationItem.TextResponse {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.ContactResponse>;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState, param2: string, param3: java.util.List<zendesk.commonui.ConversationItem.ContactResponse.ContactOption>);
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState, param2: string);
				public getContactOptions(): java.util.List<zendesk.commonui.ConversationItem.ContactResponse.ContactOption>;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState);
				public constructor();
			}
			export module ContactResponse {
				export class ContactOption {
					public static class: java.lang.Class<zendesk.commonui.ConversationItem.ContactResponse.ContactOption>;
					public getName(): string;
					public getOnClickListener(): globalAndroid.view.View.OnClickListener;
					public constructor(param0: string, param1: globalAndroid.view.View.OnClickListener);
				}
			}
			export class FileQuery extends zendesk.commonui.ConversationItem.Query {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.FileQuery>;
				public getFileSize(): string;
				public getFileName(): string;
				public getFilePath(): string;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.QueryStatus, param2: zendesk.commonui.MessageActionListener, param3: string, param4: string, param5: string);
				public constructor();
			}
			export class FileResponse extends zendesk.commonui.ConversationItem.Response {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.FileResponse>;
				public getFileSize(): string;
				public getFileName(): string;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState, param2: string, param3: string, param4: string);
				public getFilePath(): string;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState);
				public constructor();
			}
			export class ImageQuery extends zendesk.commonui.ConversationItem.Query {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.ImageQuery>;
				public getFilePath(): string;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.QueryStatus, param2: zendesk.commonui.MessageActionListener, param3: string);
				public constructor();
			}
			export class ImageResponse extends zendesk.commonui.ConversationItem.Response {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.ImageResponse>;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState, param2: string);
				public getFilePath(): string;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState);
				public constructor();
			}
			export abstract class Query extends zendesk.commonui.ConversationItem {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.Query>;
				public getMessageActionListener(): zendesk.commonui.MessageActionListener;
				public getId(): string;
				public getQueryStatus(): zendesk.commonui.ConversationItem.QueryStatus;
			}
			export class QueryStatus {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.QueryStatus>;
				public static PENDING: zendesk.commonui.ConversationItem.QueryStatus;
				public static DELIVERED: zendesk.commonui.ConversationItem.QueryStatus;
				public static FAILED: zendesk.commonui.ConversationItem.QueryStatus;
				public static valueOf(param0: string): zendesk.commonui.ConversationItem.QueryStatus;
				public static values(): native.Array<zendesk.commonui.ConversationItem.QueryStatus>;
			}
			export class Response extends zendesk.commonui.ConversationItem {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.Response>;
				public getAgentLabelState(): zendesk.commonui.ConversationItem.AgentLabelState;
				public getId(): string;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState);
				public constructor();
			}
			export class ResponseOptions extends zendesk.commonui.ConversationItem {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.ResponseOptions>;
				public getResponseOptions(): java.util.List<zendesk.commonui.ResponseOption>;
				public getId(): string;
				public getResponseOptionHandler(): zendesk.commonui.ResponseOptionHandler;
				public constructor(param0: string, param1: java.util.List<zendesk.commonui.ResponseOption>, param2: zendesk.commonui.ResponseOptionHandler);
				public constructor();
			}
			export class SystemMessage extends zendesk.commonui.ConversationItem {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.SystemMessage>;
				public getId(): string;
				public getSystemMessage(): string;
				public constructor(param0: string, param1: string);
				public constructor();
			}
			export class TextQuery extends zendesk.commonui.ConversationItem.Query {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.TextQuery>;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.QueryStatus, param2: zendesk.commonui.MessageActionListener, param3: string);
				public getMessage(): string;
				public constructor();
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.QueryStatus, param2: string);
			}
			export class TextResponse extends zendesk.commonui.ConversationItem.Response {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.TextResponse>;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState, param2: string);
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState);
				public getMessage(): string;
				public constructor();
			}
			export class TypingIndicator extends zendesk.commonui.ConversationItem.Response {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.TypingIndicator>;
				public constructor(param0: string, param1: zendesk.commonui.ConversationItem.AgentLabelState);
				public constructor();
			}
			export class TypingState {
				public static class: java.lang.Class<zendesk.commonui.ConversationItem.TypingState>;
				public getAgentLabelState(): zendesk.commonui.ConversationItem.AgentLabelState;
				public constructor(param0: boolean, param1: zendesk.commonui.ConversationItem.AgentLabelState);
				public isTyping(): boolean;
				public constructor(param0: boolean);
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ConversationState {
			public static class: java.lang.Class<zendesk.commonui.ConversationState>;
			public newBuilder(): zendesk.commonui.ConversationState.Builder;
		}
		export module ConversationState {
			export class Builder {
				public static class: java.lang.Class<zendesk.commonui.ConversationState.Builder>;
				public withTitle(param0: string): zendesk.commonui.ConversationState.Builder;
				public withSubtitle(param0: string): zendesk.commonui.ConversationState.Builder;
				public build(): zendesk.commonui.ConversationState;
				public withTypingIndicatorState(param0: zendesk.commonui.ConversationItem.TypingState): zendesk.commonui.ConversationState.Builder;
				public constructor(param0: zendesk.commonui.ConversationState);
				public withAvatarStates(param0: java.util.List<zendesk.commonui.AvatarState>): zendesk.commonui.ConversationState.Builder;
				public withEnabled(param0: boolean): zendesk.commonui.ConversationState.Builder;
				public withProgressBarVisible(param0: boolean): zendesk.commonui.ConversationState.Builder;
				public withLostConnection(param0: boolean): zendesk.commonui.ConversationState.Builder;
				public constructor();
				public withCells(param0: java.util.List<zendesk.commonui.ConversationItem>): zendesk.commonui.ConversationState.Builder;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ConversationView {
			public static class: java.lang.Class<zendesk.commonui.ConversationView>;
			public static DEFAULT_ANIMATION_DURATION: number;
			public constructor(param0: globalAndroid.support.v7.app.AppCompatActivity, param1: zendesk.commonui.ConversationViewModel, param2: com.sebchlan.picassocompat.PicassoCompat);
			public constructor(param0: globalAndroid.support.v7.app.AppCompatActivity, param1: zendesk.commonui.ConversationViewModel, param2: com.sebchlan.picassocompat.PicassoCompat, param3: globalAndroid.view.View.OnClickListener);
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ConversationViewModel {
			public static class: java.lang.Class<zendesk.commonui.ConversationViewModel>;
			/**
			 * Constructs a new instance of the zendesk.commonui.ConversationViewModel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getInputTextConsumer(): zendesk.commonui.InputBox.InputTextConsumer;
				getTextWatcher(): globalAndroid.text.TextWatcher;
				getLiveConversationState(): any;
				onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
			});
			public constructor();
			public getLiveConversationState(): any;
			public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
			public getInputTextConsumer(): zendesk.commonui.InputBox.InputTextConsumer;
			public getTextWatcher(): globalAndroid.text.TextWatcher;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class DefaultViewObserver<T>  extends zendesk.commonui.ViewObserver<any> {
			public static class: java.lang.Class<zendesk.commonui.DefaultViewObserver<any>>;
			public onAction(param0: any): void;
			public addListener(param0: zendesk.commonui.ViewListener<any>): void;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class EndUserFileCellView {
			public static class: java.lang.Class<zendesk.commonui.EndUserFileCellView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public onFinishInflate(): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public update(param0: zendesk.commonui.EndUserFileCellView.State): void;
			public constructor(param0: globalAndroid.content.Context);
		}
		export module EndUserFileCellView {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.EndUserFileCellView.State>;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class EndUserImageCellView {
			public static class: java.lang.Class<zendesk.commonui.EndUserImageCellView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public onFinishInflate(): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public update(param0: zendesk.commonui.EndUserImageCellView.State): void;
			public constructor(param0: globalAndroid.content.Context);
		}
		export module EndUserImageCellView {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.EndUserImageCellView.State>;
				public getId(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class EndUserMessageView {
			public static class: java.lang.Class<zendesk.commonui.EndUserMessageView>;
			public update(param0: zendesk.commonui.EndUserMessageView.State): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public onFinishInflate(): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context);
		}
		export module EndUserMessageView {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.EndUserMessageView.State>;
				public constructor(param0: string, param1: zendesk.commonui.ConversationCellProps, param2: zendesk.commonui.ConversationItem.QueryStatus, param3: string, param4: zendesk.commonui.MessageActionListener);
				public hashCode(): number;
				public equals(param0: any): boolean;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class InputBox {
			public static class: java.lang.Class<zendesk.commonui.InputBox>;
			public setInputTextConsumer(param0: zendesk.commonui.InputBox.InputTextConsumer): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public setAttachmentsIndicatorClickListener(param0: globalAndroid.view.View.OnClickListener): void;
			public setInputTextWatcher(param0: globalAndroid.text.TextWatcher): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public setAttachmentsCount(param0: number): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
			public constructor(param0: globalAndroid.content.Context);
			public setEnabled(param0: boolean): void;
			public dispatchKeyEventPreIme(param0: globalAndroid.view.KeyEvent): boolean;
			public focusInputTextField(): void;
		}
		export module InputBox {
			export class InputTextConsumer {
				public static class: java.lang.Class<zendesk.commonui.InputBox.InputTextConsumer>;
				/**
				 * Constructs a new instance of the zendesk.commonui.InputBox$InputTextConsumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onConsumeText(param0: string): boolean;
				});
				public constructor();
				public onConsumeText(param0: string): boolean;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class LostConnectionBanner {
			public static class: java.lang.Class<zendesk.commonui.LostConnectionBanner>;
		}
		export module LostConnectionBanner {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.LostConnectionBanner.State>;
				public static ENTERING: zendesk.commonui.LostConnectionBanner.State;
				public static ENTERED: zendesk.commonui.LostConnectionBanner.State;
				public static EXITING: zendesk.commonui.LostConnectionBanner.State;
				public static EXITED: zendesk.commonui.LostConnectionBanner.State;
				public static valueOf(param0: string): zendesk.commonui.LostConnectionBanner.State;
				public static values(): native.Array<zendesk.commonui.LostConnectionBanner.State>;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class MainThreadExecutorService {
			public static class: java.lang.Class<zendesk.commonui.MainThreadExecutorService>;
			public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
			public shutdownNow(): java.util.List<java.lang.Runnable>;
			public isTerminated(): boolean;
			public isShutdown(): boolean;
			public execute(param0: java.lang.Runnable): void;
			public shutdown(): void;
			public static get(): zendesk.commonui.MainThreadExecutorService;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class MessageActionListener {
			public static class: java.lang.Class<zendesk.commonui.MessageActionListener>;
			/**
			 * Constructs a new instance of the zendesk.commonui.MessageActionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				delete(param0: string): void;
				retry(param0: string): void;
				copy(param0: string): void;
			});
			public constructor();
			public copy(param0: string): void;
			public retry(param0: string): void;
			public delete(param0: string): void;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class MessageActionType {
			public static class: java.lang.Class<zendesk.commonui.MessageActionType>;
			public static COPY: zendesk.commonui.MessageActionType;
			public static RETRY: zendesk.commonui.MessageActionType;
			public static DELETE: zendesk.commonui.MessageActionType;
			public static values(): native.Array<zendesk.commonui.MessageActionType>;
			public static valueOf(param0: string): zendesk.commonui.MessageActionType;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class MessagePopUpHelper {
			public static class: java.lang.Class<zendesk.commonui.MessagePopUpHelper>;
		}
		export module MessagePopUpHelper {
			export class Option {
				public static class: java.lang.Class<zendesk.commonui.MessagePopUpHelper.Option>;
				public static COPY: zendesk.commonui.MessagePopUpHelper.Option;
				public static RETRY: zendesk.commonui.MessagePopUpHelper.Option;
				public static DELETE: zendesk.commonui.MessagePopUpHelper.Option;
				public static valueOf(param0: string): zendesk.commonui.MessagePopUpHelper.Option;
				public static values(): native.Array<zendesk.commonui.MessagePopUpHelper.Option>;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class MessageStatusView {
			public static class: java.lang.Class<zendesk.commonui.MessageStatusView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public setStatus(param0: zendesk.commonui.ConversationItem.QueryStatus): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context);
		}
	}
}

declare module zendesk {
	export module commonui {
		export class OnArticleSuggestionSelectionListener {
			public static class: java.lang.Class<zendesk.commonui.OnArticleSuggestionSelectionListener>;
			/**
			 * Constructs a new instance of the zendesk.commonui.OnArticleSuggestionSelectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onArticleSuggestionSelected(param0: globalAndroid.content.Context): void;
			});
			public constructor();
			public onArticleSuggestionSelected(param0: globalAndroid.content.Context): void;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class PicassoTransformations {
			public static class: java.lang.Class<zendesk.commonui.PicassoTransformations>;
		}
		export module PicassoTransformations {
			export class BlurTransformation extends com.sebchlan.picassocompat.TransformationCompat {
				public static class: java.lang.Class<zendesk.commonui.PicassoTransformations.BlurTransformation>;
				public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public key(): string;
			}
			export class RoundedTransformation extends com.sebchlan.picassocompat.TransformationCompat {
				public static class: java.lang.Class<zendesk.commonui.PicassoTransformations.RoundedTransformation>;
				public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public key(): string;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class RecyclerViewScroller {
			public static class: java.lang.Class<zendesk.commonui.RecyclerViewScroller>;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ResponseOption {
			public static class: java.lang.Class<zendesk.commonui.ResponseOption>;
			public constructor(param0: string, param1: string);
			public getId(): string;
			public equals(param0: any): boolean;
			public getText(): string;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ResponseOptionHandler {
			public static class: java.lang.Class<zendesk.commonui.ResponseOptionHandler>;
			/**
			 * Constructs a new instance of the zendesk.commonui.ResponseOptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onResponseOptionSelected(param0: zendesk.commonui.ResponseOption): void;
			});
			public constructor();
			public onResponseOptionSelected(param0: zendesk.commonui.ResponseOption): void;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ResponseOptionsView {
			public static class: java.lang.Class<zendesk.commonui.ResponseOptionsView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public onFinishInflate(): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context);
		}
		export module ResponseOptionsView {
			export class Adapter {
				public static class: java.lang.Class<zendesk.commonui.ResponseOptionsView.Adapter>;
				public onBindViewHolder(param0: globalAndroid.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
				public update(param0: zendesk.commonui.ResponseOptionsView.State): void;
				public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): globalAndroid.support.v7.widget.RecyclerView.ViewHolder;
			}
			export module Adapter {
				export class ResponseOptionsDiffCallback {
					public static class: java.lang.Class<zendesk.commonui.ResponseOptionsView.Adapter.ResponseOptionsDiffCallback>;
					public areContentsTheSame(param0: zendesk.commonui.ResponseOption, param1: zendesk.commonui.ResponseOption): boolean;
					public areItemsTheSame(param0: zendesk.commonui.ResponseOption, param1: zendesk.commonui.ResponseOption): boolean;
				}
			}
			export class ItemOffsetDecoration {
				public static class: java.lang.Class<zendesk.commonui.ResponseOptionsView.ItemOffsetDecoration>;
				public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: globalAndroid.view.View, param2: globalAndroid.support.v7.widget.RecyclerView, param3: globalAndroid.support.v7.widget.RecyclerView.State): void;
			}
			export class State {
				public static class: java.lang.Class<zendesk.commonui.ResponseOptionsView.State>;
				public constructor(param0: java.util.List<zendesk.commonui.ResponseOption>, param1: zendesk.commonui.ResponseOptionHandler, param2: zendesk.commonui.ConversationCellProps);
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class SystemMessageView {
			public static class: java.lang.Class<zendesk.commonui.SystemMessageView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public constructor(param0: globalAndroid.content.Context);
		}
		export module SystemMessageView {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.SystemMessageView.State>;
				public getProps(): zendesk.commonui.ConversationCellProps;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getText(): string;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export abstract class TextWatcherAdapter {
			public static class: java.lang.Class<zendesk.commonui.TextWatcherAdapter>;
			public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
			public constructor();
			public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
			public afterTextChanged(param0: globalAndroid.text.Editable): void;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class Timer {
			public static class: java.lang.Class<zendesk.commonui.Timer>;
			public disable(): void;
			public start(): boolean;
		}
		export module Timer {
			export class Factory {
				public static class: java.lang.Class<zendesk.commonui.Timer.Factory>;
				public constructor(param0: globalAndroid.os.Handler);
				public create(param0: java.lang.Runnable, param1: number): zendesk.commonui.Timer;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class TypingIndicatorView {
			public static class: java.lang.Class<zendesk.commonui.TypingIndicatorView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public onFinishInflate(): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public update(param0: zendesk.commonui.TypingIndicatorView.State): void;
			public constructor(param0: globalAndroid.content.Context);
		}
		export module TypingIndicatorView {
			export class State {
				public static class: java.lang.Class<zendesk.commonui.TypingIndicatorView.State>;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class UiConfig {
			public static class: java.lang.Class<zendesk.commonui.UiConfig>;
			/**
			 * Constructs a new instance of the zendesk.commonui.UiConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getUiConfigs(): java.util.List<zendesk.commonui.UiConfig>;
			});
			public constructor();
			public getUiConfigs(): java.util.List<zendesk.commonui.UiConfig>;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class UiConfigUtil {
			public static class: java.lang.Class<zendesk.commonui.UiConfigUtil>;
			public static addToMap(param0: java.util.Map<string,any>, param1: zendesk.commonui.UiConfig): void;
			public static findConfigForType(param0: java.util.List<any>, param1: java.lang.Class<any>): zendesk.commonui.UiConfig;
			public static addToIntent(param0: globalAndroid.content.Intent, param1: zendesk.commonui.UiConfig): void;
			public static addToBundle(param0: globalAndroid.os.Bundle, param1: zendesk.commonui.UiConfig): void;
			public static fromBundle(param0: globalAndroid.os.Bundle, param1: java.lang.Class<any>): zendesk.commonui.UiConfig;
			public static addSelfIfNotInList(param0: java.util.List<zendesk.commonui.UiConfig>, param1: zendesk.commonui.UiConfig): java.util.List<zendesk.commonui.UiConfig>;
			public static fromMap(param0: java.util.Map<any, any>, param1: java.lang.Class<any>): zendesk.commonui.UiConfig;
			public static extractConfigsFromMap(param0: java.util.Map<string,any>): java.util.List<zendesk.commonui.UiConfig>;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class UiUtils {
			public static class: java.lang.Class<zendesk.commonui.UiUtils>;
			public static decodeHtmlEntities(param0: string): string;
			public themeAttributeToPixels(param0: number, param1: globalAndroid.content.Context, param2: number, param3: number): number;
			public static themeAttributeToColor(param0: number, param1: globalAndroid.content.Context, param2: number): number;
			public static setTint(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.view.View): void;
			public static resolveColor(param0: number, param1: globalAndroid.content.Context): number;
			public static setVisibility(param0: globalAndroid.view.View, param1: number): void;
		}
		export module UiUtils {
			export class ScreenSize {
				public static class: java.lang.Class<zendesk.commonui.UiUtils.ScreenSize>;
				public static UNKNOWN: zendesk.commonui.UiUtils.ScreenSize;
				public static UNDEFINED: zendesk.commonui.UiUtils.ScreenSize;
				public static X_LARGE: zendesk.commonui.UiUtils.ScreenSize;
				public static LARGE: zendesk.commonui.UiUtils.ScreenSize;
				public static NORMAL: zendesk.commonui.UiUtils.ScreenSize;
				public static SMALL: zendesk.commonui.UiUtils.ScreenSize;
				public static values(): native.Array<zendesk.commonui.UiUtils.ScreenSize>;
				public static valueOf(param0: string): zendesk.commonui.UiUtils.ScreenSize;
			}
		}
	}
}

declare module zendesk {
	export module commonui {
		export class UtilsAttachment {
			public static class: java.lang.Class<zendesk.commonui.UtilsAttachment>;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class UtilsCellView {
			public static class: java.lang.Class<zendesk.commonui.UtilsCellView>;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ValueAnimators {
			public static class: java.lang.Class<zendesk.commonui.ValueAnimators>;
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ViewListener<T>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.commonui.ViewListener<any>>;
			/**
			 * Constructs a new instance of the zendesk.commonui.ViewListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onAction(param0: T): void;
			});
			public constructor();
			public onAction(param0: T): void;
		}
	}
}

declare module zendesk {
	export module commonui {
		export abstract class ViewObserver<T>  extends zendesk.commonui.ViewListener<any> {
			public static class: java.lang.Class<zendesk.commonui.ViewObserver<any>>;
			public static clicks(param0: any, param1: zendesk.commonui.ViewObserver<any>): globalAndroid.view.View.OnClickListener;
			public onAction(param0: any): void;
			public static clicks(param0: zendesk.commonui.ViewObserver<java.lang.Void>): globalAndroid.view.View.OnClickListener;
			public static create(): zendesk.commonui.ViewObserver<any>;
			public addListener(param0: zendesk.commonui.ViewListener<any>): void;
			public constructor();
		}
	}
}

declare module zendesk {
	export module commonui {
		export class ZendeskTextView {
			public static class: java.lang.Class<zendesk.commonui.ZendeskTextView>;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
			public constructor(param0: globalAndroid.content.Context);
		}
	}
}

declare module zendesk {
	export module core {
		export class AcceptHeaderInterceptor extends okhttp3.Interceptor {
			public static class: java.lang.Class<zendesk.core.AcceptHeaderInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class AcceptLanguageHeaderInterceptor extends okhttp3.Interceptor {
			public static class: java.lang.Class<zendesk.core.AcceptLanguageHeaderInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
			public constructor(param0: globalAndroid.content.Context);
		}
	}
}

declare module zendesk {
	export module core {
		export class AccessProvider {
			public static class: java.lang.Class<zendesk.core.AccessProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.AccessProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getAndStoreAuthTokenViaAnonymous(param0: zendesk.core.AnonymousIdentity): zendesk.core.AccessToken;
				getAndStoreAuthTokenViaJwt(param0: zendesk.core.JwtIdentity): zendesk.core.AccessToken;
			});
			public constructor();
			public static NO_JWT_ERROR_MESSAGE: string;
			public getAndStoreAuthTokenViaAnonymous(param0: zendesk.core.AnonymousIdentity): zendesk.core.AccessToken;
			public getAndStoreAuthTokenViaJwt(param0: zendesk.core.JwtIdentity): zendesk.core.AccessToken;
		}
	}
}

declare module zendesk {
	export module core {
		export class AccessService {
			public static class: java.lang.Class<zendesk.core.AccessService>;
			/**
			 * Constructs a new instance of the zendesk.core.AccessService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getAuthTokenForJwt(param0: zendesk.core.AuthenticationRequestWrapper): retrofit2.Call<zendesk.core.AuthenticationResponse>;
				getAuthTokenForAnonymous(param0: zendesk.core.AuthenticationRequestWrapper): retrofit2.Call<zendesk.core.AuthenticationResponse>;
			});
			public constructor();
			public getAuthTokenForJwt(param0: zendesk.core.AuthenticationRequestWrapper): retrofit2.Call<zendesk.core.AuthenticationResponse>;
			public getAuthTokenForAnonymous(param0: zendesk.core.AuthenticationRequestWrapper): retrofit2.Call<zendesk.core.AuthenticationResponse>;
		}
	}
}

declare module zendesk {
	export module core {
		export class AccessToken {
			public static class: java.lang.Class<zendesk.core.AccessToken>;
			public equals(param0: any): boolean;
			public getUserId(): string;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module core {
		export class ActionDescription {
			public static class: java.lang.Class<zendesk.core.ActionDescription>;
			public getLocalizedLabel(): string;
			public getLocalizedAccessibilityLabel(): string;
			public getIcon(): number;
			public constructor(param0: string, param1: string, param2: number);
		}
	}
}

declare module zendesk {
	export module core {
		export class ActionHandler {
			public static class: java.lang.Class<zendesk.core.ActionHandler>;
			/**
			 * Constructs a new instance of the zendesk.core.ActionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				canHandle(param0: string): boolean;
				handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
				getPriority(): number;
				getActionDescription(): zendesk.core.ActionDescription;
				updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
			});
			public constructor();
			public getActionDescription(): zendesk.core.ActionDescription;
			public handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
			public getPriority(): number;
			public canHandle(param0: string): boolean;
			public updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ActionHandlerRegistry {
			public static class: java.lang.Class<zendesk.core.ActionHandlerRegistry>;
			/**
			 * Constructs a new instance of the zendesk.core.ActionHandlerRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				add(param0: zendesk.core.ActionHandler): void;
				remove(param0: zendesk.core.ActionHandler): void;
				clear(): void;
				handlerByAction(param0: string): zendesk.core.ActionHandler;
				handlersByAction(param0: string): java.util.List<zendesk.core.ActionHandler>;
				updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
			});
			public constructor();
			public clear(): void;
			public handlersByAction(param0: string): java.util.List<zendesk.core.ActionHandler>;
			public remove(param0: zendesk.core.ActionHandler): void;
			public updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
			public add(param0: zendesk.core.ActionHandler): void;
			public handlerByAction(param0: string): zendesk.core.ActionHandler;
		}
	}
}

declare module zendesk {
	export module core {
		export class AnonymousIdentity extends zendesk.core.Identity {
			public static class: java.lang.Class<zendesk.core.AnonymousIdentity>;
			public equals(param0: any): boolean;
			public getSdkGuid(): string;
			public getName(): string;
			public constructor();
			public hashCode(): number;
			public getEmail(): string;
		}
		export module AnonymousIdentity {
			export class Builder {
				public static class: java.lang.Class<zendesk.core.AnonymousIdentity.Builder>;
				public withEmailIdentifier(param0: string): zendesk.core.AnonymousIdentity.Builder;
				public withNameIdentifier(param0: string): zendesk.core.AnonymousIdentity.Builder;
				public build(): zendesk.core.Identity;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class ApiAnonymousIdentity extends zendesk.core.Identity {
			public static class: java.lang.Class<zendesk.core.ApiAnonymousIdentity>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ApplicationConfiguration {
			public static class: java.lang.Class<zendesk.core.ApplicationConfiguration>;
			public getZendeskUrl(): string;
			public equals(param0: any): boolean;
			public constructor(param0: string, param1: string, param2: string);
			public getApplicationId(): string;
			public getOauthClientId(): string;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module core {
		export class Attachment {
			public static class: java.lang.Class<zendesk.core.Attachment>;
			public getSize(): java.lang.Long;
			public getUrl(): string;
			public getThumbnails(): java.util.List<zendesk.core.Attachment>;
			public getId(): java.lang.Long;
			public getFileName(): string;
			public getContentType(): string;
			public getContentUrl(): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class AuthenticationProvider {
			public static class: java.lang.Class<zendesk.core.AuthenticationProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.AuthenticationProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getIdentity(): zendesk.core.Identity;
			});
			public constructor();
			public getIdentity(): zendesk.core.Identity;
		}
	}
}

declare module zendesk {
	export module core {
		export class AuthenticationRequestWrapper {
			public static class: java.lang.Class<zendesk.core.AuthenticationRequestWrapper>;
		}
	}
}

declare module zendesk {
	export module core {
		export class AuthenticationResponse {
			public static class: java.lang.Class<zendesk.core.AuthenticationResponse>;
		}
	}
}

declare module zendesk {
	export module core {
		export class AuthenticationType {
			public static class: java.lang.Class<zendesk.core.AuthenticationType>;
			public static JWT: zendesk.core.AuthenticationType;
			public static ANONYMOUS: zendesk.core.AuthenticationType;
			public static values(): native.Array<zendesk.core.AuthenticationType>;
			public static valueOf(param0: string): zendesk.core.AuthenticationType;
		}
	}
}

declare module zendesk {
	export module core {
		export class BaseStorage {
			public static class: java.lang.Class<zendesk.core.BaseStorage>;
			/**
			 * Constructs a new instance of the zendesk.core.BaseStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				put(param0: string, param1: string): void;
				put(param0: string, param1: any): void;
				get(param0: string): string;
				get(param0: string, param1: java.lang.Class<any>): any;
				remove(param0: string): void;
				clear(): void;
			});
			public constructor();
			public get(param0: string): string;
			public clear(): void;
			public put(param0: string, param1: any): void;
			public remove(param0: string): void;
			public get(param0: string, param1: java.lang.Class<any>): any;
			public put(param0: string, param1: string): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsCoreProvider {
			public static class: java.lang.Class<zendesk.core.BlipsCoreProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.BlipsCoreProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				coreInitialized(): void;
				corePushEnabled(): void;
				corePushDisabled(param0: java.lang.Long): void;
			});
			public constructor();
			public corePushDisabled(param0: java.lang.Long): void;
			public coreInitialized(): void;
			public corePushEnabled(): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsFormatHelper {
			public static class: java.lang.Class<zendesk.core.BlipsFormatHelper>;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsGroup {
			public static class: java.lang.Class<zendesk.core.BlipsGroup>;
			public static REQUIRED: zendesk.core.BlipsGroup;
			public static BEHAVIOURAL: zendesk.core.BlipsGroup;
			public static PATHFINDER: zendesk.core.BlipsGroup;
			public static values(): native.Array<zendesk.core.BlipsGroup>;
			public static valueOf(param0: string): zendesk.core.BlipsGroup;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsPermissions {
			public static class: java.lang.Class<zendesk.core.BlipsPermissions>;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsProvider {
			public static class: java.lang.Class<zendesk.core.BlipsProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.BlipsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				sendBlip(param0: zendesk.core.UserAction, param1: zendesk.core.BlipsGroup): void;
				sendBlip(param0: zendesk.core.PageView, param1: zendesk.core.BlipsGroup): void;
			});
			public constructor();
			public sendBlip(param0: zendesk.core.UserAction, param1: zendesk.core.BlipsGroup): void;
			public sendBlip(param0: zendesk.core.PageView, param1: zendesk.core.BlipsGroup): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsRequest {
			public static class: java.lang.Class<zendesk.core.BlipsRequest>;
		}
		export module BlipsRequest {
			export class ApiPageView {
				public static class: java.lang.Class<zendesk.core.BlipsRequest.ApiPageView>;
			}
			export class ApiUserAction {
				public static class: java.lang.Class<zendesk.core.BlipsRequest.ApiUserAction>;
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsService {
			public static class: java.lang.Class<zendesk.core.BlipsService>;
			/**
			 * Constructs a new instance of the zendesk.core.BlipsService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				send(param0: string): retrofit2.Call<java.lang.Void>;
			});
			public constructor();
			public send(param0: string): retrofit2.Call<java.lang.Void>;
		}
	}
}

declare module zendesk {
	export module core {
		export class BlipsSettings {
			public static class: java.lang.Class<zendesk.core.BlipsSettings>;
		}
	}
}

declare module zendesk {
	export module core {
		export class BuildConfig {
			public static class: java.lang.Class<zendesk.core.BuildConfig>;
			public static DEBUG: boolean;
			public static APPLICATION_ID: string;
			public static BUILD_TYPE: string;
			public static FLAVOR: string;
			public static VERSION_CODE: number;
			public static VERSION_NAME: string;
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class CachingInterceptor extends okhttp3.Interceptor {
			public static class: java.lang.Class<zendesk.core.CachingInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class Constants {
			public static class: java.lang.Class<zendesk.core.Constants>;
			/**
			 * Constructs a new instance of the zendesk.core.Constants interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
			public static APPLICATION_JSON: string;
			public static ACCEPT_LANGUAGE: string;
			public static USER_AGENT_HEADER_KEY: string;
			public static X_ZENDESK_CLIENT_HEADER_NAME: string;
			public static PUSH_DEVICE_IDENTIFIER: string;
			public static X_ZENDESK_CLIENT_HEADER_VALUE_FORMAT: string;
			public static X_ZENDESK_CLIENT_VERSION_HEADER_NAME: string;
			public static ACCEPT_HEADER: string;
			public static AUTHORIZATION_HEADER: string;
			public static TEXT_JSON: string;
			public static USER_AGENT_HEADER_TEMPLATE: string;
			public static CLIENT_IDENTIFIER_HEADER: string;
			public static VARIANT: string;
			public static AUTHORIZATION_BEARER_FORMAT: string;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule {
			public static class: java.lang.Class<zendesk.core.CoreModule>;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_ActionHandlerRegistryFactory extends dagger.internal.Factory<zendesk.core.ActionHandlerRegistry> {
			public static class: java.lang.Class<zendesk.core.CoreModule_ActionHandlerRegistryFactory>;
			public get(): zendesk.core.ActionHandlerRegistry;
			public static actionHandlerRegistry(param0: zendesk.core.CoreModule): zendesk.core.ActionHandlerRegistry;
			public get(): any;
			public constructor(param0: zendesk.core.CoreModule);
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_ActionHandlerRegistryFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetApplicationConfigurationFactory extends dagger.internal.Factory<zendesk.core.ApplicationConfiguration> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetApplicationConfigurationFactory>;
			public static getApplicationConfiguration(param0: zendesk.core.CoreModule): zendesk.core.ApplicationConfiguration;
			public get(): any;
			public get(): zendesk.core.ApplicationConfiguration;
			public constructor(param0: zendesk.core.CoreModule);
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetApplicationConfigurationFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetApplicationContextFactory extends dagger.internal.Factory<globalAndroid.content.Context> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetApplicationContextFactory>;
			public get(): globalAndroid.content.Context;
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetApplicationContextFactory;
			public get(): any;
			public static getApplicationContext(param0: zendesk.core.CoreModule): globalAndroid.content.Context;
			public constructor(param0: zendesk.core.CoreModule);
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetAuthenticationProviderFactory extends dagger.internal.Factory<zendesk.core.AuthenticationProvider> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetAuthenticationProviderFactory>;
			public get(): any;
			public static getAuthenticationProvider(param0: zendesk.core.CoreModule): zendesk.core.AuthenticationProvider;
			public get(): zendesk.core.AuthenticationProvider;
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetAuthenticationProviderFactory;
			public constructor(param0: zendesk.core.CoreModule);
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetBlipsProviderFactory extends dagger.internal.Factory<zendesk.core.BlipsProvider> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetBlipsProviderFactory>;
			public static getBlipsProvider(param0: zendesk.core.CoreModule): zendesk.core.BlipsProvider;
			public get(): any;
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetBlipsProviderFactory;
			public get(): zendesk.core.BlipsProvider;
			public constructor(param0: zendesk.core.CoreModule);
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetExecutorFactory extends dagger.internal.Factory<java.util.concurrent.Executor> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetExecutorFactory>;
			public static getExecutor(param0: zendesk.core.CoreModule): java.util.concurrent.Executor;
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetExecutorFactory;
			public get(): any;
			public get(): java.util.concurrent.Executor;
			public constructor(param0: zendesk.core.CoreModule);
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetExecutorServiceFactory extends dagger.internal.Factory<java.util.concurrent.ExecutorService> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetExecutorServiceFactory>;
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetExecutorServiceFactory;
			public get(): any;
			public constructor(param0: zendesk.core.CoreModule);
			public get(): java.util.concurrent.ExecutorService;
			public static getExecutorService(param0: zendesk.core.CoreModule): java.util.concurrent.ExecutorService;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetMemoryCacheFactory extends dagger.internal.Factory<zendesk.core.MemoryCache> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetMemoryCacheFactory>;
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetMemoryCacheFactory;
			public static getMemoryCache(param0: zendesk.core.CoreModule): zendesk.core.MemoryCache;
			public get(): any;
			public get(): zendesk.core.MemoryCache;
			public constructor(param0: zendesk.core.CoreModule);
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetNetworkInfoProviderFactory extends dagger.internal.Factory<zendesk.core.NetworkInfoProvider> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetNetworkInfoProviderFactory>;
			public static getNetworkInfoProvider(param0: zendesk.core.CoreModule): zendesk.core.NetworkInfoProvider;
			public get(): any;
			public get(): zendesk.core.NetworkInfoProvider;
			public constructor(param0: zendesk.core.CoreModule);
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetNetworkInfoProviderFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetPushRegistrationProviderFactory extends dagger.internal.Factory<zendesk.core.PushRegistrationProvider> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetPushRegistrationProviderFactory>;
			public get(): zendesk.core.PushRegistrationProvider;
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetPushRegistrationProviderFactory;
			public static getPushRegistrationProvider(param0: zendesk.core.CoreModule): zendesk.core.PushRegistrationProvider;
			public get(): any;
			public constructor(param0: zendesk.core.CoreModule);
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetRestServiceProviderFactory extends dagger.internal.Factory<zendesk.core.RestServiceProvider> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetRestServiceProviderFactory>;
			public static getRestServiceProvider(param0: zendesk.core.CoreModule): zendesk.core.RestServiceProvider;
			public get(): any;
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetRestServiceProviderFactory;
			public constructor(param0: zendesk.core.CoreModule);
			public get(): zendesk.core.RestServiceProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetScheduledExecutorServiceFactory extends dagger.internal.Factory<java.util.concurrent.ScheduledExecutorService> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetScheduledExecutorServiceFactory>;
			public get(): java.util.concurrent.ScheduledExecutorService;
			public get(): any;
			public static getScheduledExecutorService(param0: zendesk.core.CoreModule): java.util.concurrent.ScheduledExecutorService;
			public constructor(param0: zendesk.core.CoreModule);
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetScheduledExecutorServiceFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetSessionStorageFactory extends dagger.internal.Factory<zendesk.core.SessionStorage> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetSessionStorageFactory>;
			public get(): zendesk.core.SessionStorage;
			public get(): any;
			public constructor(param0: zendesk.core.CoreModule);
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetSessionStorageFactory;
			public static getSessionStorage(param0: zendesk.core.CoreModule): zendesk.core.SessionStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreModule_GetSettingsProviderFactory extends dagger.internal.Factory<zendesk.core.SettingsProvider> {
			public static class: java.lang.Class<zendesk.core.CoreModule_GetSettingsProviderFactory>;
			public static getSettingsProvider(param0: zendesk.core.CoreModule): zendesk.core.SettingsProvider;
			public get(): any;
			public constructor(param0: zendesk.core.CoreModule);
			public get(): zendesk.core.SettingsProvider;
			public static create(param0: zendesk.core.CoreModule): zendesk.core.CoreModule_GetSettingsProviderFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreSettings extends zendesk.core.Settings {
			public static class: java.lang.Class<zendesk.core.CoreSettings>;
			public getAuthentication(): zendesk.core.AuthenticationType;
		}
	}
}

declare module zendesk {
	export module core {
		export class CoreSettingsStorage {
			public static class: java.lang.Class<zendesk.core.CoreSettingsStorage>;
			/**
			 * Constructs a new instance of the zendesk.core.CoreSettingsStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getCoreSettings(): zendesk.core.CoreSettings;
				getBlipsSettings(): zendesk.core.BlipsSettings;
			});
			public constructor();
			public getBlipsSettings(): zendesk.core.BlipsSettings;
			public getCoreSettings(): zendesk.core.CoreSettings;
		}
	}
}

declare module zendesk {
	export module core {
		export abstract class CustomNetworkConfig {
			public static class: java.lang.Class<zendesk.core.CustomNetworkConfig>;
			public configureOkHttpClient(param0: okhttp3.OkHttpClient.Builder): void;
			public constructor();
			public configureRetrofit(param0: retrofit2.Retrofit.Builder): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class DaggerZendeskApplicationComponent extends zendesk.core.ZendeskApplicationComponent {
			public static class: java.lang.Class<zendesk.core.DaggerZendeskApplicationComponent>;
			public static builder(): zendesk.core.DaggerZendeskApplicationComponent.Builder;
			public zendeskShadow(): zendesk.core.ZendeskShadow;
		}
		export module DaggerZendeskApplicationComponent {
			export class Builder {
				public static class: java.lang.Class<zendesk.core.DaggerZendeskApplicationComponent.Builder>;
				public zendeskApplicationModule(param0: zendesk.core.ZendeskApplicationModule): zendesk.core.DaggerZendeskApplicationComponent.Builder;
				public build(): zendesk.core.ZendeskApplicationComponent;
				/** @deprecated */
				public zendeskStorageModule(param0: zendesk.core.ZendeskStorageModule): zendesk.core.DaggerZendeskApplicationComponent.Builder;
				/** @deprecated */
				public zendeskProvidersModule(param0: zendesk.core.ZendeskProvidersModule): zendesk.core.DaggerZendeskApplicationComponent.Builder;
				public zendeskNetworkModule(param0: zendesk.core.ZendeskNetworkModule): zendesk.core.DaggerZendeskApplicationComponent.Builder;
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class DeviceInfo {
			public static class: java.lang.Class<zendesk.core.DeviceInfo>;
			public static getCurrentLocale(param0: globalAndroid.content.Context): java.util.Locale;
		}
	}
}

declare module zendesk {
	export module core {
		export class GsonSerializer extends zendesk.core.Serializer {
			public static class: java.lang.Class<zendesk.core.GsonSerializer>;
			public deserialize(param0: any, param1: java.lang.Class<any>): any;
			public serialize(param0: any): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class Identity {
			public static class: java.lang.Class<zendesk.core.Identity>;
			/**
			 * Constructs a new instance of the zendesk.core.Identity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class IdentityManager {
			public static class: java.lang.Class<zendesk.core.IdentityManager>;
			/**
			 * Constructs a new instance of the zendesk.core.IdentityManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				identityIsDifferent(param0: zendesk.core.Identity): boolean;
				updateAndPersistIdentity(param0: zendesk.core.Identity): zendesk.core.Identity;
				getSdkGuid(): string;
				getStoredAccessTokenAsBearerToken(): string;
				getIdentity(): zendesk.core.Identity;
				getBlipsUuid(): string;
				storeAccessToken(param0: zendesk.core.AccessToken): void;
				getUserId(): java.lang.Long;
			});
			public constructor();
			public getSdkGuid(): string;
			public storeAccessToken(param0: zendesk.core.AccessToken): void;
			public updateAndPersistIdentity(param0: zendesk.core.Identity): zendesk.core.Identity;
			public getUserId(): java.lang.Long;
			public getIdentity(): zendesk.core.Identity;
			public identityIsDifferent(param0: zendesk.core.Identity): boolean;
			public getBlipsUuid(): string;
			public getStoredAccessTokenAsBearerToken(): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class IdentityStorage {
			public static class: java.lang.Class<zendesk.core.IdentityStorage>;
			/**
			 * Constructs a new instance of the zendesk.core.IdentityStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				storeAccessToken(param0: zendesk.core.AccessToken): void;
				getStoredAccessToken(): zendesk.core.AccessToken;
				storeUserId(param0: java.lang.Long): void;
				getUserId(): java.lang.Long;
				getUuid(): string;
				storeIdentity(param0: zendesk.core.Identity): void;
				getIdentity(): zendesk.core.Identity;
				clear(): void;
				updateBlipsUuid(): string;
				getBlipsUuid(): string;
				updateSdkGuid(): string;
				storeSdkGuid(param0: string): void;
			});
			public constructor();
			public clear(): void;
			public storeAccessToken(param0: zendesk.core.AccessToken): void;
			public storeIdentity(param0: zendesk.core.Identity): void;
			public getUserId(): java.lang.Long;
			public getIdentity(): zendesk.core.Identity;
			public updateSdkGuid(): string;
			public getStoredAccessToken(): zendesk.core.AccessToken;
			public getUuid(): string;
			public getBlipsUuid(): string;
			public updateBlipsUuid(): string;
			public storeSdkGuid(param0: string): void;
			public storeUserId(param0: java.lang.Long): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class JwtIdentity extends zendesk.core.Identity {
			public static class: java.lang.Class<zendesk.core.JwtIdentity>;
			public equals(param0: any): boolean;
			public getJwtUserIdentifier(): string;
			public constructor(param0: string);
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module core {
		export class LegacyIdentityMigrator {
			public static class: java.lang.Class<zendesk.core.LegacyIdentityMigrator>;
		}
	}
}

declare module zendesk {
	export module core {
		export class MemoryCache {
			public static class: java.lang.Class<zendesk.core.MemoryCache>;
			/**
			 * Constructs a new instance of the zendesk.core.MemoryCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				get(param0: string): any;
				getOrDefault(param0: string, param1: any): any;
				contains(param0: string): boolean;
				put(param0: string, param1: any): void;
				remove(param0: string): void;
				clear(): void;
			});
			public constructor();
			public getOrDefault(param0: string, param1: any): any;
			public clear(): void;
			public get(param0: string): any;
			public put(param0: string, param1: any): void;
			public remove(param0: string): void;
			public contains(param0: string): boolean;
		}
	}
}

declare module zendesk {
	export module core {
		export class NetworkAware {
			public static class: java.lang.Class<zendesk.core.NetworkAware>;
			/**
			 * Constructs a new instance of the zendesk.core.NetworkAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onNetworkAvailable(): void;
				onNetworkUnavailable(): void;
			});
			public constructor();
			public onNetworkAvailable(): void;
			public onNetworkUnavailable(): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class NetworkInfoProvider {
			public static class: java.lang.Class<zendesk.core.NetworkInfoProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.NetworkInfoProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				register(): void;
				unregister(): void;
				isNetworkAvailable(): boolean;
				addNetworkAwareListener(param0: java.lang.Integer, param1: zendesk.core.NetworkAware): void;
				removeNetworkAwareListener(param0: java.lang.Integer): void;
				clearNetworkAwareListeners(): void;
				addRetryAction(param0: java.lang.Integer, param1: zendesk.core.RetryAction): void;
				removeRetryAction(param0: java.lang.Integer): void;
				clearRetryActions(): void;
			});
			public constructor();
			public clearNetworkAwareListeners(): void;
			public removeNetworkAwareListener(param0: java.lang.Integer): void;
			public isNetworkAvailable(): boolean;
			public addNetworkAwareListener(param0: java.lang.Integer, param1: zendesk.core.NetworkAware): void;
			public register(): void;
			public addRetryAction(param0: java.lang.Integer, param1: zendesk.core.RetryAction): void;
			public removeRetryAction(param0: java.lang.Integer): void;
			public clearRetryActions(): void;
			public unregister(): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class NetworkUtils {
			public static class: java.lang.Class<zendesk.core.NetworkUtils>;
		}
	}
}

declare module zendesk {
	export module core {
		export class PageView {
			public static class: java.lang.Class<zendesk.core.PageView>;
			public getValue(): java.util.Map<string,any>;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
			public getNavigatorLanguage(): string;
			public getPageTitle(): string;
			public getUrl(): string;
			public getChannel(): string;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.util.Map<string,any>);
			public getVersion(): string;
		}
	}
}

declare module zendesk {
	export module core {
		export abstract class PassThroughErrorZendeskCallback<E>  extends zendesk.service.ZendeskCallback<any> {
			public static class: java.lang.Class<zendesk.core.PassThroughErrorZendeskCallback<any>>;
			public onError(param0: zendesk.service.ErrorResponse): void;
			public onSuccess(param0: any): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ProviderStore {
			public static class: java.lang.Class<zendesk.core.ProviderStore>;
			/**
			 * Constructs a new instance of the zendesk.core.ProviderStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				userProvider(): zendesk.core.UserProvider;
				pushRegistrationProvider(): zendesk.core.PushRegistrationProvider;
			});
			public constructor();
			public pushRegistrationProvider(): zendesk.core.PushRegistrationProvider;
			public userProvider(): zendesk.core.UserProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushDeviceIdStorage {
			public static class: java.lang.Class<zendesk.core.PushDeviceIdStorage>;
			/**
			 * Constructs a new instance of the zendesk.core.PushDeviceIdStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				storePushDeviceId(param0: string): void;
				getPushDeviceId(): string;
				hasStoredDeviceId(): boolean;
				removePushDeviceId(): void;
			});
			public constructor();
			public removePushDeviceId(): void;
			public hasStoredDeviceId(): boolean;
			public getPushDeviceId(): string;
			public storePushDeviceId(param0: string): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushRegistrationProvider {
			public static class: java.lang.Class<zendesk.core.PushRegistrationProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.PushRegistrationProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				registerWithDeviceIdentifier(param0: string, param1: zendesk.service.ZendeskCallback<string>): void;
				registerWithUAChannelId(param0: string, param1: zendesk.service.ZendeskCallback<string>): void;
				unregisterDevice(param0: zendesk.service.ZendeskCallback<java.lang.Void>): void;
				isRegisteredForPush(): boolean;
			});
			public constructor();
			public registerWithDeviceIdentifier(param0: string, param1: zendesk.service.ZendeskCallback<string>): void;
			public registerWithUAChannelId(param0: string, param1: zendesk.service.ZendeskCallback<string>): void;
			public unregisterDevice(param0: zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public isRegisteredForPush(): boolean;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushRegistrationRequest {
			public static class: java.lang.Class<zendesk.core.PushRegistrationRequest>;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushRegistrationRequestWrapper {
			public static class: java.lang.Class<zendesk.core.PushRegistrationRequestWrapper>;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushRegistrationResponse {
			public static class: java.lang.Class<zendesk.core.PushRegistrationResponse>;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushRegistrationResponseWrapper {
			public static class: java.lang.Class<zendesk.core.PushRegistrationResponseWrapper>;
		}
	}
}

declare module zendesk {
	export module core {
		export class PushRegistrationService {
			public static class: java.lang.Class<zendesk.core.PushRegistrationService>;
			/**
			 * Constructs a new instance of the zendesk.core.PushRegistrationService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				registerDevice(param0: zendesk.core.PushRegistrationRequestWrapper): retrofit2.Call<zendesk.core.PushRegistrationResponseWrapper>;
				unregisterDevice(param0: string): retrofit2.Call<java.lang.Void>;
			});
			public constructor();
			public unregisterDevice(param0: string): retrofit2.Call<java.lang.Void>;
			public registerDevice(param0: zendesk.core.PushRegistrationRequestWrapper): retrofit2.Call<zendesk.core.PushRegistrationResponseWrapper>;
		}
	}
}

declare module zendesk {
	export module core {
		export class RestServiceProvider {
			public static class: java.lang.Class<zendesk.core.RestServiceProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.RestServiceProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createRestService(param0: java.lang.Class<any>, param1: string, param2: string): any;
				createRestService(param0: java.lang.Class<any>, param1: string, param2: string, param3: zendesk.core.CustomNetworkConfig): any;
				getMediaOkHttpClient(): okhttp3.OkHttpClient;
				getCoreOkHttpClient(): okhttp3.OkHttpClient;
			});
			public constructor();
			public createRestService(param0: java.lang.Class<any>, param1: string, param2: string, param3: zendesk.core.CustomNetworkConfig): any;
			public createRestService(param0: java.lang.Class<any>, param1: string, param2: string): any;
			public getMediaOkHttpClient(): okhttp3.OkHttpClient;
			public getCoreOkHttpClient(): okhttp3.OkHttpClient;
		}
	}
}

declare module zendesk {
	export module core {
		export class RetryAction {
			public static class: java.lang.Class<zendesk.core.RetryAction>;
			/**
			 * Constructs a new instance of the zendesk.core.RetryAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onRetry(): void;
			});
			public constructor();
			public onRetry(): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class SdkSettings {
			public static class: java.lang.Class<zendesk.core.SdkSettings>;
		}
	}
}

declare module zendesk {
	export module core {
		export class SdkSettingsProviderInternal {
			public static class: java.lang.Class<zendesk.core.SdkSettingsProviderInternal>;
			/**
			 * Constructs a new instance of the zendesk.core.SdkSettingsProviderInternal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getCoreSettings(): zendesk.core.CoreSettings;
				getBlipsSettings(): zendesk.core.BlipsSettings;
			});
			public constructor();
			public getBlipsSettings(): zendesk.core.BlipsSettings;
			public getCoreSettings(): zendesk.core.CoreSettings;
		}
	}
}

declare module zendesk {
	export module core {
		export class SdkSettingsService {
			public static class: java.lang.Class<zendesk.core.SdkSettingsService>;
			/**
			 * Constructs a new instance of the zendesk.core.SdkSettingsService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSettings(param0: string, param1: string): retrofit2.Call<java.util.Map<string,com.google.gson.JsonElement>>;
			});
			public constructor();
			public getSettings(param0: string, param1: string): retrofit2.Call<java.util.Map<string,com.google.gson.JsonElement>>;
		}
	}
}

declare module zendesk {
	export module core {
		export abstract class SdkStartUpProvider {
			public static class: java.lang.Class<zendesk.core.SdkStartUpProvider>;
			public onCreate(): boolean;
			public onStartUp(param0: globalAndroid.content.Context): void;
			public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
			public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
			public constructor();
			public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
			public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
			public getType(param0: globalAndroid.net.Uri): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class Serializer {
			public static class: java.lang.Class<zendesk.core.Serializer>;
			/**
			 * Constructs a new instance of the zendesk.core.Serializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				deserialize(param0: any, param1: java.lang.Class<any>): any;
				serialize(param0: any): string;
			});
			public constructor();
			public deserialize(param0: any, param1: java.lang.Class<any>): any;
			public serialize(param0: any): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class SessionConfiguration {
			public static class: java.lang.Class<zendesk.core.SessionConfiguration>;
		}
		export module SessionConfiguration {
			export class Builder {
				public static class: java.lang.Class<zendesk.core.SessionConfiguration.Builder>;
				public build(): zendesk.core.SessionConfiguration;
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class SessionStorage {
			public static class: java.lang.Class<zendesk.core.SessionStorage>;
			/**
			 * Constructs a new instance of the zendesk.core.SessionStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getAdditionalSdkStorage(): zendesk.core.BaseStorage;
				getZendeskCacheDir(): java.io.File;
				getZendeskDataDir(): java.io.File;
				clear(): void;
			});
			public constructor();
			public clear(): void;
			public getZendeskCacheDir(): java.io.File;
			public getAdditionalSdkStorage(): zendesk.core.BaseStorage;
			public getZendeskDataDir(): java.io.File;
		}
	}
}

declare module zendesk {
	export module core {
		export class Settings {
			public static class: java.lang.Class<zendesk.core.Settings>;
			/**
			 * Constructs a new instance of the zendesk.core.Settings interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class SettingsPack<E>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.core.SettingsPack<any>>;
			public getSettings(): E;
			public getCoreSettings(): zendesk.core.CoreSettings;
		}
	}
}

declare module zendesk {
	export module core {
		export class SettingsProvider {
			public static class: java.lang.Class<zendesk.core.SettingsProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.SettingsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getCoreSettings(param0: zendesk.service.ZendeskCallback<zendesk.core.CoreSettings>): void;
				getSettingsForSdk(param0: string, param1: java.lang.Class<any>, param2: zendesk.service.ZendeskCallback<any>): void;
			});
			public constructor();
			public getSettingsForSdk(param0: string, param1: java.lang.Class<any>, param2: zendesk.service.ZendeskCallback<any>): void;
			public getCoreSettings(param0: zendesk.service.ZendeskCallback<zendesk.core.CoreSettings>): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class SettingsStorage {
			public static class: java.lang.Class<zendesk.core.SettingsStorage>;
			/**
			 * Constructs a new instance of the zendesk.core.SettingsStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSettings(param0: string, param1: java.lang.Class<any>): any;
				storeRawSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
				hasStoredSettings(): boolean;
				areSettingsUpToDate(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
				clear(): void;
			});
			public constructor();
			public clear(): void;
			public getSettings(param0: string, param1: java.lang.Class<any>): any;
			public areSettingsUpToDate(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
			public storeRawSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
			public hasStoredSettings(): boolean;
		}
	}
}

declare module zendesk {
	export module core {
		export class SharedPreferencesStorage extends zendesk.core.BaseStorage {
			public static class: java.lang.Class<zendesk.core.SharedPreferencesStorage>;
			public get(param0: string): string;
			public clear(): void;
			public put(param0: string, param1: any): void;
			public remove(param0: string): void;
			public get(param0: string, param1: java.lang.Class<any>): any;
			public put(param0: string, param1: string): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class Storage {
			public static class: java.lang.Class<zendesk.core.Storage>;
			/**
			 * Constructs a new instance of the zendesk.core.Storage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSessionStorage(): zendesk.core.SessionStorage;
				clear(): void;
				hasSdkConfigChanged(param0: zendesk.core.ApplicationConfiguration): boolean;
				storeSdkHash(param0: zendesk.core.ApplicationConfiguration): void;
			});
			public constructor();
			public clear(): void;
			public hasSdkConfigChanged(param0: zendesk.core.ApplicationConfiguration): boolean;
			public storeSdkHash(param0: zendesk.core.ApplicationConfiguration): void;
			public getSessionStorage(): zendesk.core.SessionStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class Tls12SocketFactory {
			public static class: java.lang.Class<zendesk.core.Tls12SocketFactory>;
			public static enableTls12OnPreLollipop(param0: okhttp3.OkHttpClient.Builder): okhttp3.OkHttpClient.Builder;
			public createSocket(param0: string, param1: number): java.net.Socket;
			public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
			public getSupportedCipherSuites(): native.Array<string>;
			public constructor(param0: javax.net.ssl.SSLSocketFactory);
			public getDefaultCipherSuites(): native.Array<string>;
			public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
			public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
			public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
		}
	}
}

declare module zendesk {
	export module core {
		export class User {
			public static class: java.lang.Class<zendesk.core.User>;
			public getTags(): java.util.List<string>;
			public getName(): string;
			public getId(): java.lang.Long;
			public getUserFields(): java.util.Map<string,string>;
			public getPhoto(): string;
			public constructor();
			public isAgent(): boolean;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserAction {
			public static class: java.lang.Class<zendesk.core.UserAction>;
			public getValue(): java.util.Map<string,any>;
			public getLabel(): string;
			public getAction(): string;
			public getChannel(): string;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.util.Map<string,any>);
			public getVersion(): string;
			public constructor(param0: string, param1: string, param2: string, param3: string);
			public getCategory(): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserAgentAndClientHeadersInterceptor extends okhttp3.Interceptor {
			public static class: java.lang.Class<zendesk.core.UserAgentAndClientHeadersInterceptor>;
			public constructor(param0: string, param1: string);
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserField {
			public static class: java.lang.Class<zendesk.core.UserField>;
			public getTitle(): string;
			public getUrl(): string;
			public getUserFieldOptions(): java.util.List<zendesk.core.UserFieldOption>;
			public getRegexpForValidation(): string;
			public getUserFieldType(): zendesk.core.UserField.UserFieldType;
			public getCreatedAt(): java.util.Date;
			public constructor();
			public getUpdatedAt(): java.util.Date;
			public getRawDescription(): string;
			public getRawTitle(): string;
			public getId(): java.lang.Long;
			public getKey(): string;
			public getDescription(): string;
			public isSystem(): boolean;
			public getPosition(): java.lang.Long;
			public isActive(): boolean;
		}
		export module UserField {
			export class UserFieldType {
				public static class: java.lang.Class<zendesk.core.UserField.UserFieldType>;
				public static Integer: zendesk.core.UserField.UserFieldType;
				public static Decimal: zendesk.core.UserField.UserFieldType;
				public static Checkbox: zendesk.core.UserField.UserFieldType;
				public static Date: zendesk.core.UserField.UserFieldType;
				public static Text: zendesk.core.UserField.UserFieldType;
				public static Textarea: zendesk.core.UserField.UserFieldType;
				public static Dropdown: zendesk.core.UserField.UserFieldType;
				public static Regexp: zendesk.core.UserField.UserFieldType;
				public static valueOf(param0: string): zendesk.core.UserField.UserFieldType;
				public static values(): native.Array<zendesk.core.UserField.UserFieldType>;
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class UserFieldOption {
			public static class: java.lang.Class<zendesk.core.UserFieldOption>;
			public getRawName(): string;
			public getName(): string;
			public getId(): java.lang.Long;
			public constructor();
			public getValue(): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserFieldRequest {
			public static class: java.lang.Class<zendesk.core.UserFieldRequest>;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserFieldResponse {
			public static class: java.lang.Class<zendesk.core.UserFieldResponse>;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserProvider {
			public static class: java.lang.Class<zendesk.core.UserProvider>;
			/**
			 * Constructs a new instance of the zendesk.core.UserProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				addTags(param0: java.util.List<string>, param1: zendesk.service.ZendeskCallback<java.util.List<string>>): void;
				deleteTags(param0: java.util.List<string>, param1: zendesk.service.ZendeskCallback<java.util.List<string>>): void;
				getUserFields(param0: zendesk.service.ZendeskCallback<java.util.List<zendesk.core.UserField>>): void;
				setUserFields(param0: java.util.Map<string,string>, param1: zendesk.service.ZendeskCallback<java.util.Map<string,string>>): void;
				getUser(param0: zendesk.service.ZendeskCallback<zendesk.core.User>): void;
			});
			public constructor();
			public getUserFields(param0: zendesk.service.ZendeskCallback<java.util.List<zendesk.core.UserField>>): void;
			public setUserFields(param0: java.util.Map<string,string>, param1: zendesk.service.ZendeskCallback<java.util.Map<string,string>>): void;
			public getUser(param0: zendesk.service.ZendeskCallback<zendesk.core.User>): void;
			public addTags(param0: java.util.List<string>, param1: zendesk.service.ZendeskCallback<java.util.List<string>>): void;
			public deleteTags(param0: java.util.List<string>, param1: zendesk.service.ZendeskCallback<java.util.List<string>>): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserResponse {
			public static class: java.lang.Class<zendesk.core.UserResponse>;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserService {
			public static class: java.lang.Class<zendesk.core.UserService>;
			/**
			 * Constructs a new instance of the zendesk.core.UserService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				addTags(param0: zendesk.core.UserTagRequest): retrofit2.Call<zendesk.core.UserResponse>;
				deleteTags(param0: string): retrofit2.Call<zendesk.core.UserResponse>;
				getUserFields(): retrofit2.Call<zendesk.core.UserFieldResponse>;
				setUserFields(param0: zendesk.core.UserFieldRequest): retrofit2.Call<zendesk.core.UserResponse>;
				getUser(): retrofit2.Call<zendesk.core.UserResponse>;
			});
			public constructor();
			public addTags(param0: zendesk.core.UserTagRequest): retrofit2.Call<zendesk.core.UserResponse>;
			public getUser(): retrofit2.Call<zendesk.core.UserResponse>;
			public getUserFields(): retrofit2.Call<zendesk.core.UserFieldResponse>;
			public deleteTags(param0: string): retrofit2.Call<zendesk.core.UserResponse>;
			public setUserFields(param0: zendesk.core.UserFieldRequest): retrofit2.Call<zendesk.core.UserResponse>;
		}
	}
}

declare module zendesk {
	export module core {
		export class UserTagRequest {
			public static class: java.lang.Class<zendesk.core.UserTagRequest>;
		}
	}
}

declare module zendesk {
	export module core {
		export class Zendesk {
			public static class: java.lang.Class<zendesk.core.Zendesk>;
			public static INSTANCE: zendesk.core.Zendesk;
			public setIdentity(param0: zendesk.core.Identity): void;
			public init(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string): void;
			public actionHandlerRegistry(): zendesk.core.ActionHandlerRegistry;
			public getIdentity(): zendesk.core.Identity;
			public static valueOf(param0: string): zendesk.core.Zendesk;
			public static values(): native.Array<zendesk.core.Zendesk>;
			public isInitialized(): boolean;
			public provider(): zendesk.core.ProviderStore;
			public coreModule(): zendesk.core.CoreModule;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskAccessInterceptor extends okhttp3.Interceptor {
			public static class: java.lang.Class<zendesk.core.ZendeskAccessInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskAccessProvider extends zendesk.core.AccessProvider {
			public static class: java.lang.Class<zendesk.core.ZendeskAccessProvider>;
			public getAndStoreAuthTokenViaAnonymous(param0: zendesk.core.AnonymousIdentity): zendesk.core.AccessToken;
			public getAndStoreAuthTokenViaJwt(param0: zendesk.core.JwtIdentity): zendesk.core.AccessToken;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskActionHandlerRegistry extends zendesk.core.ActionHandlerRegistry {
			public static class: java.lang.Class<zendesk.core.ZendeskActionHandlerRegistry>;
			public clear(): void;
			public handlersByAction(param0: string): java.util.List<zendesk.core.ActionHandler>;
			public remove(param0: zendesk.core.ActionHandler): void;
			public updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
			public add(param0: zendesk.core.ActionHandler): void;
			public handlerByAction(param0: string): zendesk.core.ActionHandler;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationComponent {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationComponent>;
			/**
			 * Constructs a new instance of the zendesk.core.ZendeskApplicationComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				zendeskShadow(): zendesk.core.ZendeskShadow;
			});
			public constructor();
			public zendeskShadow(): zendesk.core.ZendeskShadow;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideApplicationConfigurationFactory extends dagger.internal.Factory<zendesk.core.ApplicationConfiguration> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideApplicationConfigurationFactory>;
			public static provideApplicationConfiguration(param0: zendesk.core.ZendeskApplicationModule): zendesk.core.ApplicationConfiguration;
			public get(): any;
			public get(): zendesk.core.ApplicationConfiguration;
			public static create(param0: zendesk.core.ZendeskApplicationModule): zendesk.core.ZendeskApplicationModule_ProvideApplicationConfigurationFactory;
			public constructor(param0: zendesk.core.ZendeskApplicationModule);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideApplicationContextFactory extends dagger.internal.Factory<globalAndroid.content.Context> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideApplicationContextFactory>;
			public static create(param0: zendesk.core.ZendeskApplicationModule): zendesk.core.ZendeskApplicationModule_ProvideApplicationContextFactory;
			public get(): globalAndroid.content.Context;
			public get(): any;
			public constructor(param0: zendesk.core.ZendeskApplicationModule);
			public static provideApplicationContext(param0: zendesk.core.ZendeskApplicationModule): globalAndroid.content.Context;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideBase64SerializerFactory extends dagger.internal.Factory<zendesk.core.Serializer> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideBase64SerializerFactory>;
			public get(): zendesk.core.Serializer;
			public get(): any;
			public static provideBase64Serializer(param0: zendesk.core.ZendeskApplicationModule, param1: any): zendesk.core.Serializer;
			public constructor(param0: zendesk.core.ZendeskApplicationModule, param1: javax.inject.Provider<zendesk.core.Serializer>);
			public static create(param0: zendesk.core.ZendeskApplicationModule, param1: javax.inject.Provider<zendesk.core.Serializer>): zendesk.core.ZendeskApplicationModule_ProvideBase64SerializerFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideDeviceInfoFactory extends dagger.internal.Factory<zendesk.core.DeviceInfo> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideDeviceInfoFactory>;
			public get(): zendesk.core.DeviceInfo;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): zendesk.core.ZendeskApplicationModule_ProvideDeviceInfoFactory;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
			public get(): any;
			public static provideDeviceInfo(param0: globalAndroid.content.Context): zendesk.core.DeviceInfo;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideExecutorFactory extends dagger.internal.Factory<java.util.concurrent.ScheduledExecutorService> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideExecutorFactory>;
			public static provideExecutor(): java.util.concurrent.ScheduledExecutorService;
			public get(): java.util.concurrent.ScheduledExecutorService;
			public get(): any;
			public static create(): zendesk.core.ZendeskApplicationModule_ProvideExecutorFactory;
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideExecutorServiceFactory extends dagger.internal.Factory<java.util.concurrent.ExecutorService> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideExecutorServiceFactory>;
			public static provideExecutorService(param0: java.util.concurrent.ScheduledExecutorService): java.util.concurrent.ExecutorService;
			public constructor(param0: javax.inject.Provider<java.util.concurrent.ScheduledExecutorService>);
			public static create(param0: javax.inject.Provider<java.util.concurrent.ScheduledExecutorService>): zendesk.core.ZendeskApplicationModule_ProvideExecutorServiceFactory;
			public get(): any;
			public get(): java.util.concurrent.ExecutorService;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideGsonFactory extends dagger.internal.Factory<com.google.gson.Gson> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideGsonFactory>;
			public get(): com.google.gson.Gson;
			public get(): any;
			public static create(): zendesk.core.ZendeskApplicationModule_ProvideGsonFactory;
			public constructor();
			public static provideGson(): com.google.gson.Gson;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideHttpLoggingInterceptorFactory extends dagger.internal.Factory<okhttp3.logging.HttpLoggingInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideHttpLoggingInterceptorFactory>;
			public get(): any;
			public static provideHttpLoggingInterceptor(): okhttp3.logging.HttpLoggingInterceptor;
			public constructor();
			public static create(): zendesk.core.ZendeskApplicationModule_ProvideHttpLoggingInterceptorFactory;
			public get(): okhttp3.logging.HttpLoggingInterceptor;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideZendeskFactory extends dagger.internal.Factory<zendesk.core.ZendeskShadow> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideZendeskFactory>;
			public get(): zendesk.core.ZendeskShadow;
			public get(): any;
			public static create(param0: javax.inject.Provider<zendesk.core.Storage>, param1: javax.inject.Provider<zendesk.core.LegacyIdentityMigrator>, param2: javax.inject.Provider<zendesk.core.IdentityManager>, param3: javax.inject.Provider<zendesk.core.BlipsCoreProvider>, param4: javax.inject.Provider<zendesk.core.PushRegistrationProvider>, param5: javax.inject.Provider<zendesk.core.CoreModule>, param6: javax.inject.Provider<zendesk.core.ProviderStore>): zendesk.core.ZendeskApplicationModule_ProvideZendeskFactory;
			public static provideZendesk(param0: any, param1: any, param2: any, param3: any, param4: zendesk.core.PushRegistrationProvider, param5: zendesk.core.CoreModule, param6: zendesk.core.ProviderStore): zendesk.core.ZendeskShadow;
			public constructor(param0: javax.inject.Provider<zendesk.core.Storage>, param1: javax.inject.Provider<zendesk.core.LegacyIdentityMigrator>, param2: javax.inject.Provider<zendesk.core.IdentityManager>, param3: javax.inject.Provider<zendesk.core.BlipsCoreProvider>, param4: javax.inject.Provider<zendesk.core.PushRegistrationProvider>, param5: javax.inject.Provider<zendesk.core.CoreModule>, param6: javax.inject.Provider<zendesk.core.ProviderStore>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskApplicationModule_ProvideZendeskLocaleConverterFactory extends dagger.internal.Factory<zendesk.core.ZendeskLocaleConverter> {
			public static class: java.lang.Class<zendesk.core.ZendeskApplicationModule_ProvideZendeskLocaleConverterFactory>;
			public static create(param0: zendesk.core.ZendeskApplicationModule): zendesk.core.ZendeskApplicationModule_ProvideZendeskLocaleConverterFactory;
			public get(): any;
			public get(): zendesk.core.ZendeskLocaleConverter;
			public constructor(param0: zendesk.core.ZendeskApplicationModule);
			public static provideZendeskLocaleConverter(param0: zendesk.core.ZendeskApplicationModule): zendesk.core.ZendeskLocaleConverter;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskAuthHeaderInterceptor extends okhttp3.Interceptor {
			public static class: java.lang.Class<zendesk.core.ZendeskAuthHeaderInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskAuthenticationProvider extends zendesk.core.AuthenticationProvider {
			public static class: java.lang.Class<zendesk.core.ZendeskAuthenticationProvider>;
			public getIdentity(): zendesk.core.Identity;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskBase64Serializer extends zendesk.core.Serializer {
			public static class: java.lang.Class<zendesk.core.ZendeskBase64Serializer>;
			public deserialize(param0: any, param1: java.lang.Class<any>): any;
			public serialize(param0: any): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskBlipsProvider implements zendesk.core.BlipsProvider, zendesk.core.BlipsCoreProvider {
			public static class: java.lang.Class<zendesk.core.ZendeskBlipsProvider>;
			public sendBlip(param0: zendesk.core.UserAction, param1: zendesk.core.BlipsGroup): void;
			public corePushDisabled(param0: java.lang.Long): void;
			public coreInitialized(): void;
			public sendBlip(param0: zendesk.core.PageView, param1: zendesk.core.BlipsGroup): void;
			public corePushEnabled(): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskCoreSettingsStorage extends zendesk.core.CoreSettingsStorage {
			public static class: java.lang.Class<zendesk.core.ZendeskCoreSettingsStorage>;
			public getBlipsSettings(): zendesk.core.BlipsSettings;
			public getCoreSettings(): zendesk.core.CoreSettings;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskDiskLruCache extends zendesk.core.BaseStorage {
			public static class: java.lang.Class<zendesk.core.ZendeskDiskLruCache>;
			public get(param0: string): string;
			public clear(): void;
			public put(param0: string, param1: any): void;
			public remove(param0: string): void;
			public get(param0: string, param1: java.lang.Class<any>): any;
			public put(param0: string, param1: string): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskIdentityManager extends zendesk.core.IdentityManager {
			public static class: java.lang.Class<zendesk.core.ZendeskIdentityManager>;
			public getSdkGuid(): string;
			public storeAccessToken(param0: zendesk.core.AccessToken): void;
			public updateAndPersistIdentity(param0: zendesk.core.Identity): zendesk.core.Identity;
			public getUserId(): java.lang.Long;
			public getIdentity(): zendesk.core.Identity;
			public identityIsDifferent(param0: zendesk.core.Identity): boolean;
			public getBlipsUuid(): string;
			public getStoredAccessTokenAsBearerToken(): string;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskIdentityStorage extends zendesk.core.IdentityStorage {
			public static class: java.lang.Class<zendesk.core.ZendeskIdentityStorage>;
			public clear(): void;
			public storeAccessToken(param0: zendesk.core.AccessToken): void;
			public storeIdentity(param0: zendesk.core.Identity): void;
			public getUserId(): java.lang.Long;
			public getIdentity(): zendesk.core.Identity;
			public updateSdkGuid(): string;
			public getStoredAccessToken(): zendesk.core.AccessToken;
			public getUuid(): string;
			public getBlipsUuid(): string;
			public updateBlipsUuid(): string;
			public storeSdkGuid(param0: string): void;
			public storeUserId(param0: java.lang.Long): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskLocaleConverter {
			public static class: java.lang.Class<zendesk.core.ZendeskLocaleConverter>;
			public toHelpCenterLocaleString(param0: java.util.Locale): string;
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskLruMemoryCache extends zendesk.core.MemoryCache {
			public static class: java.lang.Class<zendesk.core.ZendeskLruMemoryCache>;
			public cache: globalAndroid.util.LruCache<string,any>;
			public getOrDefault(param0: string, param1: any): any;
			public clear(): void;
			public get(param0: string): any;
			public put(param0: string, param1: any): void;
			public remove(param0: string): void;
			public contains(param0: string): boolean;
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkInfoProvider implements zendesk.core.NetworkInfoProvider, zendesk.core.NetworkAware {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkInfoProvider>;
			public clearNetworkAwareListeners(): void;
			public removeNetworkAwareListener(param0: java.lang.Integer): void;
			public isNetworkAvailable(): boolean;
			public onNetworkAvailable(): void;
			public addNetworkAwareListener(param0: java.lang.Integer, param1: zendesk.core.NetworkAware): void;
			public register(): void;
			public addRetryAction(param0: java.lang.Integer, param1: zendesk.core.RetryAction): void;
			public removeRetryAction(param0: java.lang.Integer): void;
			public clearRetryActions(): void;
			public unregister(): void;
			public onNetworkUnavailable(): void;
		}
		export module ZendeskNetworkInfoProvider {
			export class CurrentState {
				public static class: java.lang.Class<zendesk.core.ZendeskNetworkInfoProvider.CurrentState>;
				public static CONNECTED: zendesk.core.ZendeskNetworkInfoProvider.CurrentState;
				public static DISCONNECTED: zendesk.core.ZendeskNetworkInfoProvider.CurrentState;
				public static values(): native.Array<zendesk.core.ZendeskNetworkInfoProvider.CurrentState>;
				public static valueOf(param0: string): zendesk.core.ZendeskNetworkInfoProvider.CurrentState;
			}
			export class NetworkAvailabilityBroadcastReceiver {
				public static class: java.lang.Class<zendesk.core.ZendeskNetworkInfoProvider.NetworkAvailabilityBroadcastReceiver>;
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideAcceptLanguageHeaderInterceptorFactory extends dagger.internal.Factory<zendesk.core.AcceptLanguageHeaderInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideAcceptLanguageHeaderInterceptorFactory>;
			public static provideAcceptLanguageHeaderInterceptor(param0: globalAndroid.content.Context): zendesk.core.AcceptLanguageHeaderInterceptor;
			public get(): zendesk.core.AcceptLanguageHeaderInterceptor;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
			public get(): any;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): zendesk.core.ZendeskNetworkModule_ProvideAcceptLanguageHeaderInterceptorFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideAccessInterceptorFactory extends dagger.internal.Factory<zendesk.core.ZendeskAccessInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideAccessInterceptorFactory>;
			public get(): any;
			public static create(param0: javax.inject.Provider<zendesk.core.IdentityManager>, param1: javax.inject.Provider<zendesk.core.AccessProvider>, param2: javax.inject.Provider<zendesk.core.Storage>, param3: javax.inject.Provider<zendesk.core.CoreSettingsStorage>): zendesk.core.ZendeskNetworkModule_ProvideAccessInterceptorFactory;
			public get(): zendesk.core.ZendeskAccessInterceptor;
			public constructor(param0: javax.inject.Provider<zendesk.core.IdentityManager>, param1: javax.inject.Provider<zendesk.core.AccessProvider>, param2: javax.inject.Provider<zendesk.core.Storage>, param3: javax.inject.Provider<zendesk.core.CoreSettingsStorage>);
			public static provideAccessInterceptor(param0: any, param1: any, param2: any, param3: any): zendesk.core.ZendeskAccessInterceptor;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideAuthHeaderInterceptorFactory extends dagger.internal.Factory<zendesk.core.ZendeskAuthHeaderInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideAuthHeaderInterceptorFactory>;
			public get(): any;
			public static provideAuthHeaderInterceptor(param0: any): zendesk.core.ZendeskAuthHeaderInterceptor;
			public get(): zendesk.core.ZendeskAuthHeaderInterceptor;
			public constructor(param0: javax.inject.Provider<zendesk.core.IdentityManager>);
			public static create(param0: javax.inject.Provider<zendesk.core.IdentityManager>): zendesk.core.ZendeskNetworkModule_ProvideAuthHeaderInterceptorFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideBaseOkHttpClientFactory extends dagger.internal.Factory<okhttp3.OkHttpClient> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideBaseOkHttpClientFactory>;
			public constructor(param0: zendesk.core.ZendeskNetworkModule, param1: javax.inject.Provider<okhttp3.logging.HttpLoggingInterceptor>, param2: javax.inject.Provider<zendesk.core.ZendeskOauthIdHeaderInterceptor>, param3: javax.inject.Provider<zendesk.core.UserAgentAndClientHeadersInterceptor>, param4: javax.inject.Provider<java.util.concurrent.ExecutorService>);
			public static create(param0: zendesk.core.ZendeskNetworkModule, param1: javax.inject.Provider<okhttp3.logging.HttpLoggingInterceptor>, param2: javax.inject.Provider<zendesk.core.ZendeskOauthIdHeaderInterceptor>, param3: javax.inject.Provider<zendesk.core.UserAgentAndClientHeadersInterceptor>, param4: javax.inject.Provider<java.util.concurrent.ExecutorService>): zendesk.core.ZendeskNetworkModule_ProvideBaseOkHttpClientFactory;
			public get(): any;
			public static provideBaseOkHttpClient(param0: zendesk.core.ZendeskNetworkModule, param1: okhttp3.logging.HttpLoggingInterceptor, param2: any, param3: any, param4: java.util.concurrent.ExecutorService): okhttp3.OkHttpClient;
			public get(): okhttp3.OkHttpClient;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideCachingInterceptorFactory extends dagger.internal.Factory<zendesk.core.CachingInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideCachingInterceptorFactory>;
			public get(): zendesk.core.CachingInterceptor;
			public static create(param0: javax.inject.Provider<zendesk.core.BaseStorage>): zendesk.core.ZendeskNetworkModule_ProvideCachingInterceptorFactory;
			public constructor(param0: javax.inject.Provider<zendesk.core.BaseStorage>);
			public get(): any;
			public static provideCachingInterceptor(param0: zendesk.core.BaseStorage): zendesk.core.CachingInterceptor;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideCoreOkHttpClientFactory extends dagger.internal.Factory<okhttp3.OkHttpClient> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideCoreOkHttpClientFactory>;
			public static provideCoreOkHttpClient(param0: okhttp3.OkHttpClient, param1: any, param2: any): okhttp3.OkHttpClient;
			public static create(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.AcceptLanguageHeaderInterceptor>, param2: javax.inject.Provider<zendesk.core.AcceptHeaderInterceptor>): zendesk.core.ZendeskNetworkModule_ProvideCoreOkHttpClientFactory;
			public get(): any;
			public constructor(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.AcceptLanguageHeaderInterceptor>, param2: javax.inject.Provider<zendesk.core.AcceptHeaderInterceptor>);
			public get(): okhttp3.OkHttpClient;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideCoreRetrofitFactory extends dagger.internal.Factory<retrofit2.Retrofit> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideCoreRetrofitFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param1: javax.inject.Provider<com.google.gson.Gson>, param2: javax.inject.Provider<okhttp3.OkHttpClient>);
			public static provideCoreRetrofit(param0: zendesk.core.ApplicationConfiguration, param1: com.google.gson.Gson, param2: okhttp3.OkHttpClient): retrofit2.Retrofit;
			public get(): any;
			public static create(param0: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param1: javax.inject.Provider<com.google.gson.Gson>, param2: javax.inject.Provider<okhttp3.OkHttpClient>): zendesk.core.ZendeskNetworkModule_ProvideCoreRetrofitFactory;
			public get(): retrofit2.Retrofit;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideMediaOkHttpClientFactory extends dagger.internal.Factory<okhttp3.OkHttpClient> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideMediaOkHttpClientFactory>;
			public static create(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.ZendeskAccessInterceptor>, param2: javax.inject.Provider<zendesk.core.ZendeskAuthHeaderInterceptor>, param3: javax.inject.Provider<zendesk.core.ZendeskSettingsInterceptor>, param4: javax.inject.Provider<zendesk.core.CachingInterceptor>, param5: javax.inject.Provider<zendesk.core.ZendeskUnauthorizedInterceptor>): zendesk.core.ZendeskNetworkModule_ProvideMediaOkHttpClientFactory;
			public get(): any;
			public static provideMediaOkHttpClient(param0: okhttp3.OkHttpClient, param1: any, param2: any, param3: any, param4: any, param5: any): okhttp3.OkHttpClient;
			public constructor(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.ZendeskAccessInterceptor>, param2: javax.inject.Provider<zendesk.core.ZendeskAuthHeaderInterceptor>, param3: javax.inject.Provider<zendesk.core.ZendeskSettingsInterceptor>, param4: javax.inject.Provider<zendesk.core.CachingInterceptor>, param5: javax.inject.Provider<zendesk.core.ZendeskUnauthorizedInterceptor>);
			public get(): okhttp3.OkHttpClient;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideOkHttpClientFactory extends dagger.internal.Factory<okhttp3.OkHttpClient> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideOkHttpClientFactory>;
			public static create(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.ZendeskAccessInterceptor>, param2: javax.inject.Provider<zendesk.core.ZendeskUnauthorizedInterceptor>, param3: javax.inject.Provider<zendesk.core.ZendeskAuthHeaderInterceptor>, param4: javax.inject.Provider<zendesk.core.ZendeskSettingsInterceptor>, param5: javax.inject.Provider<zendesk.core.AcceptHeaderInterceptor>, param6: javax.inject.Provider<okhttp3.Cache>): zendesk.core.ZendeskNetworkModule_ProvideOkHttpClientFactory;
			public static provideOkHttpClient(param0: okhttp3.OkHttpClient, param1: any, param2: any, param3: any, param4: any, param5: any, param6: okhttp3.Cache): okhttp3.OkHttpClient;
			public get(): any;
			public get(): okhttp3.OkHttpClient;
			public constructor(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.ZendeskAccessInterceptor>, param2: javax.inject.Provider<zendesk.core.ZendeskUnauthorizedInterceptor>, param3: javax.inject.Provider<zendesk.core.ZendeskAuthHeaderInterceptor>, param4: javax.inject.Provider<zendesk.core.ZendeskSettingsInterceptor>, param5: javax.inject.Provider<zendesk.core.AcceptHeaderInterceptor>, param6: javax.inject.Provider<okhttp3.Cache>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideRestServiceProviderFactory extends dagger.internal.Factory<zendesk.core.RestServiceProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideRestServiceProviderFactory>;
			public get(): any;
			public static create(param0: javax.inject.Provider<retrofit2.Retrofit>, param1: javax.inject.Provider<okhttp3.OkHttpClient>, param2: javax.inject.Provider<okhttp3.OkHttpClient>, param3: javax.inject.Provider<okhttp3.OkHttpClient>): zendesk.core.ZendeskNetworkModule_ProvideRestServiceProviderFactory;
			public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>, param1: javax.inject.Provider<okhttp3.OkHttpClient>, param2: javax.inject.Provider<okhttp3.OkHttpClient>, param3: javax.inject.Provider<okhttp3.OkHttpClient>);
			public get(): zendesk.core.RestServiceProvider;
			public static provideRestServiceProvider(param0: retrofit2.Retrofit, param1: okhttp3.OkHttpClient, param2: okhttp3.OkHttpClient, param3: okhttp3.OkHttpClient): zendesk.core.RestServiceProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideRetrofitFactory extends dagger.internal.Factory<retrofit2.Retrofit> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideRetrofitFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param1: javax.inject.Provider<com.google.gson.Gson>, param2: javax.inject.Provider<okhttp3.OkHttpClient>);
			public get(): any;
			public get(): retrofit2.Retrofit;
			public static provideRetrofit(param0: zendesk.core.ApplicationConfiguration, param1: com.google.gson.Gson, param2: okhttp3.OkHttpClient): retrofit2.Retrofit;
			public static create(param0: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param1: javax.inject.Provider<com.google.gson.Gson>, param2: javax.inject.Provider<okhttp3.OkHttpClient>): zendesk.core.ZendeskNetworkModule_ProvideRetrofitFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideSettingsInterceptorFactory extends dagger.internal.Factory<zendesk.core.ZendeskSettingsInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideSettingsInterceptorFactory>;
			public static provideSettingsInterceptor(param0: any, param1: any): zendesk.core.ZendeskSettingsInterceptor;
			public static create(param0: javax.inject.Provider<zendesk.core.SdkSettingsProviderInternal>, param1: javax.inject.Provider<zendesk.core.SettingsStorage>): zendesk.core.ZendeskNetworkModule_ProvideSettingsInterceptorFactory;
			public constructor(param0: javax.inject.Provider<zendesk.core.SdkSettingsProviderInternal>, param1: javax.inject.Provider<zendesk.core.SettingsStorage>);
			public get(): zendesk.core.ZendeskSettingsInterceptor;
			public get(): any;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideZendeskBasicHeadersInterceptorFactory extends dagger.internal.Factory<zendesk.core.ZendeskOauthIdHeaderInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideZendeskBasicHeadersInterceptorFactory>;
			public get(): any;
			public constructor(param0: zendesk.core.ZendeskNetworkModule, param1: javax.inject.Provider<zendesk.core.ApplicationConfiguration>);
			public static provideZendeskBasicHeadersInterceptor(param0: zendesk.core.ZendeskNetworkModule, param1: zendesk.core.ApplicationConfiguration): zendesk.core.ZendeskOauthIdHeaderInterceptor;
			public get(): zendesk.core.ZendeskOauthIdHeaderInterceptor;
			public static create(param0: zendesk.core.ZendeskNetworkModule, param1: javax.inject.Provider<zendesk.core.ApplicationConfiguration>): zendesk.core.ZendeskNetworkModule_ProvideZendeskBasicHeadersInterceptorFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvideZendeskUnauthorizedInterceptorFactory extends dagger.internal.Factory<zendesk.core.ZendeskUnauthorizedInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvideZendeskUnauthorizedInterceptorFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.SessionStorage>): zendesk.core.ZendeskNetworkModule_ProvideZendeskUnauthorizedInterceptorFactory;
			public get(): zendesk.core.ZendeskUnauthorizedInterceptor;
			public get(): any;
			public static provideZendeskUnauthorizedInterceptor(param0: zendesk.core.SessionStorage): zendesk.core.ZendeskUnauthorizedInterceptor;
			public constructor(param0: javax.inject.Provider<zendesk.core.SessionStorage>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvidesAcceptHeaderInterceptorFactory extends dagger.internal.Factory<zendesk.core.AcceptHeaderInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvidesAcceptHeaderInterceptorFactory>;
			public static create(): zendesk.core.ZendeskNetworkModule_ProvidesAcceptHeaderInterceptorFactory;
			public get(): any;
			public static providesAcceptHeaderInterceptor(): zendesk.core.AcceptHeaderInterceptor;
			public get(): zendesk.core.AcceptHeaderInterceptor;
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_ProvidesUserAgentHeaderInterceptorFactory extends dagger.internal.Factory<zendesk.core.UserAgentAndClientHeadersInterceptor> {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_ProvidesUserAgentHeaderInterceptorFactory>;
			public static providesUserAgentHeaderInterceptor(param0: zendesk.core.ZendeskNetworkModule): zendesk.core.UserAgentAndClientHeadersInterceptor;
			public get(): any;
			public get(): zendesk.core.UserAgentAndClientHeadersInterceptor;
			public constructor(param0: zendesk.core.ZendeskNetworkModule);
			public static create(param0: zendesk.core.ZendeskNetworkModule): zendesk.core.ZendeskNetworkModule_ProvidesUserAgentHeaderInterceptorFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskNetworkModule_Proxy {
			public static class: java.lang.Class<zendesk.core.ZendeskNetworkModule_Proxy>;
			public static newInstance(): zendesk.core.ZendeskNetworkModule;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskOauthIdHeaderInterceptor extends okhttp3.Interceptor {
			public static class: java.lang.Class<zendesk.core.ZendeskOauthIdHeaderInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
			public constructor(param0: string);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProviderStore extends zendesk.core.ProviderStore {
			public static class: java.lang.Class<zendesk.core.ZendeskProviderStore>;
			public pushRegistrationProvider(): zendesk.core.PushRegistrationProvider;
			public userProvider(): zendesk.core.UserProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ActionHandlerRegistryFactory extends dagger.internal.Factory<zendesk.core.ActionHandlerRegistry> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ActionHandlerRegistryFactory>;
			public get(): zendesk.core.ActionHandlerRegistry;
			public static create(): zendesk.core.ZendeskProvidersModule_ActionHandlerRegistryFactory;
			public static actionHandlerRegistry(): zendesk.core.ActionHandlerRegistry;
			public get(): any;
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideAccessProviderFactory extends dagger.internal.Factory<zendesk.core.AccessProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideAccessProviderFactory>;
			public get(): any;
			public constructor(param0: javax.inject.Provider<zendesk.core.IdentityManager>, param1: javax.inject.Provider<zendesk.core.AccessService>);
			public static create(param0: javax.inject.Provider<zendesk.core.IdentityManager>, param1: javax.inject.Provider<zendesk.core.AccessService>): zendesk.core.ZendeskProvidersModule_ProvideAccessProviderFactory;
			public static provideAccessProvider(param0: any, param1: any): zendesk.core.AccessProvider;
			public get(): zendesk.core.AccessProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideAccessServiceFactory extends dagger.internal.Factory<zendesk.core.AccessService> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideAccessServiceFactory>;
			public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>);
			public static create(param0: javax.inject.Provider<retrofit2.Retrofit>): zendesk.core.ZendeskProvidersModule_ProvideAccessServiceFactory;
			public get(): any;
			public static provideAccessService(param0: retrofit2.Retrofit): zendesk.core.AccessService;
			public get(): zendesk.core.AccessService;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideBlipsServiceFactory extends dagger.internal.Factory<zendesk.core.BlipsService> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideBlipsServiceFactory>;
			public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>);
			public get(): zendesk.core.BlipsService;
			public static provideBlipsService(param0: retrofit2.Retrofit): zendesk.core.BlipsService;
			public get(): any;
			public static create(param0: javax.inject.Provider<retrofit2.Retrofit>): zendesk.core.ZendeskProvidersModule_ProvideBlipsServiceFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideCoreSdkModuleFactory extends dagger.internal.Factory<zendesk.core.CoreModule> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideCoreSdkModuleFactory>;
			public get(): zendesk.core.CoreModule;
			public constructor(param0: javax.inject.Provider<zendesk.core.SettingsProvider>, param1: javax.inject.Provider<zendesk.core.RestServiceProvider>, param2: javax.inject.Provider<zendesk.core.BlipsProvider>, param3: javax.inject.Provider<zendesk.core.SessionStorage>, param4: javax.inject.Provider<zendesk.core.NetworkInfoProvider>, param5: javax.inject.Provider<zendesk.core.MemoryCache>, param6: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param7: javax.inject.Provider<java.util.concurrent.ScheduledExecutorService>, param8: javax.inject.Provider<globalAndroid.content.Context>, param9: javax.inject.Provider<zendesk.core.AuthenticationProvider>, param10: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param11: javax.inject.Provider<zendesk.core.PushRegistrationProvider>);
			public static create(param0: javax.inject.Provider<zendesk.core.SettingsProvider>, param1: javax.inject.Provider<zendesk.core.RestServiceProvider>, param2: javax.inject.Provider<zendesk.core.BlipsProvider>, param3: javax.inject.Provider<zendesk.core.SessionStorage>, param4: javax.inject.Provider<zendesk.core.NetworkInfoProvider>, param5: javax.inject.Provider<zendesk.core.MemoryCache>, param6: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param7: javax.inject.Provider<java.util.concurrent.ScheduledExecutorService>, param8: javax.inject.Provider<globalAndroid.content.Context>, param9: javax.inject.Provider<zendesk.core.AuthenticationProvider>, param10: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param11: javax.inject.Provider<zendesk.core.PushRegistrationProvider>): zendesk.core.ZendeskProvidersModule_ProvideCoreSdkModuleFactory;
			public get(): any;
			public static provideCoreSdkModule(param0: zendesk.core.SettingsProvider, param1: zendesk.core.RestServiceProvider, param2: zendesk.core.BlipsProvider, param3: zendesk.core.SessionStorage, param4: zendesk.core.NetworkInfoProvider, param5: zendesk.core.MemoryCache, param6: zendesk.core.ActionHandlerRegistry, param7: java.util.concurrent.ScheduledExecutorService, param8: globalAndroid.content.Context, param9: zendesk.core.AuthenticationProvider, param10: zendesk.core.ApplicationConfiguration, param11: zendesk.core.PushRegistrationProvider): zendesk.core.CoreModule;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideProviderStoreFactory extends dagger.internal.Factory<zendesk.core.ProviderStore> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideProviderStoreFactory>;
			public get(): zendesk.core.ProviderStore;
			public static provideProviderStore(param0: zendesk.core.UserProvider, param1: zendesk.core.PushRegistrationProvider): zendesk.core.ProviderStore;
			public get(): any;
			public constructor(param0: javax.inject.Provider<zendesk.core.UserProvider>, param1: javax.inject.Provider<zendesk.core.PushRegistrationProvider>);
			public static create(param0: javax.inject.Provider<zendesk.core.UserProvider>, param1: javax.inject.Provider<zendesk.core.PushRegistrationProvider>): zendesk.core.ZendeskProvidersModule_ProvideProviderStoreFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvidePushRegistrationProviderFactory extends dagger.internal.Factory<zendesk.core.PushRegistrationProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvidePushRegistrationProviderFactory>;
			public get(): zendesk.core.PushRegistrationProvider;
			public get(): any;
			public constructor(param0: javax.inject.Provider<zendesk.core.PushRegistrationService>, param1: javax.inject.Provider<zendesk.core.IdentityManager>, param2: javax.inject.Provider<zendesk.core.SettingsProvider>, param3: javax.inject.Provider<zendesk.core.BlipsCoreProvider>, param4: javax.inject.Provider<zendesk.core.PushDeviceIdStorage>, param5: javax.inject.Provider<globalAndroid.content.Context>);
			public static providePushRegistrationProvider(param0: any, param1: any, param2: zendesk.core.SettingsProvider, param3: any, param4: any, param5: globalAndroid.content.Context): zendesk.core.PushRegistrationProvider;
			public static create(param0: javax.inject.Provider<zendesk.core.PushRegistrationService>, param1: javax.inject.Provider<zendesk.core.IdentityManager>, param2: javax.inject.Provider<zendesk.core.SettingsProvider>, param3: javax.inject.Provider<zendesk.core.BlipsCoreProvider>, param4: javax.inject.Provider<zendesk.core.PushDeviceIdStorage>, param5: javax.inject.Provider<globalAndroid.content.Context>): zendesk.core.ZendeskProvidersModule_ProvidePushRegistrationProviderFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvidePushRegistrationServiceFactory extends dagger.internal.Factory<zendesk.core.PushRegistrationService> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvidePushRegistrationServiceFactory>;
			public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>);
			public get(): any;
			public static providePushRegistrationService(param0: retrofit2.Retrofit): zendesk.core.PushRegistrationService;
			public static create(param0: javax.inject.Provider<retrofit2.Retrofit>): zendesk.core.ZendeskProvidersModule_ProvidePushRegistrationServiceFactory;
			public get(): zendesk.core.PushRegistrationService;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideSdkSettingsProviderFactory extends dagger.internal.Factory<zendesk.core.SettingsProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideSdkSettingsProviderFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.core.ZendeskSettingsProvider>);
			public static create(param0: javax.inject.Provider<zendesk.core.ZendeskSettingsProvider>): zendesk.core.ZendeskProvidersModule_ProvideSdkSettingsProviderFactory;
			public get(): any;
			public get(): zendesk.core.SettingsProvider;
			public static provideSdkSettingsProvider(param0: any): zendesk.core.SettingsProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideSdkSettingsProviderInternalFactory extends dagger.internal.Factory<zendesk.core.SdkSettingsProviderInternal> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideSdkSettingsProviderInternalFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.core.ZendeskSettingsProvider>);
			public get(): any;
			public static create(param0: javax.inject.Provider<zendesk.core.ZendeskSettingsProvider>): zendesk.core.ZendeskProvidersModule_ProvideSdkSettingsProviderInternalFactory;
			public static provideSdkSettingsProviderInternal(param0: any): zendesk.core.SdkSettingsProviderInternal;
			public get(): zendesk.core.SdkSettingsProviderInternal;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideSdkSettingsServiceFactory extends dagger.internal.Factory<zendesk.core.SdkSettingsService> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideSdkSettingsServiceFactory>;
			public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>);
			public get(): zendesk.core.SdkSettingsService;
			public static create(param0: javax.inject.Provider<retrofit2.Retrofit>): zendesk.core.ZendeskProvidersModule_ProvideSdkSettingsServiceFactory;
			public get(): any;
			public static provideSdkSettingsService(param0: retrofit2.Retrofit): zendesk.core.SdkSettingsService;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideUserProviderFactory extends dagger.internal.Factory<zendesk.core.UserProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideUserProviderFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.core.UserService>);
			public static create(param0: javax.inject.Provider<zendesk.core.UserService>): zendesk.core.ZendeskProvidersModule_ProvideUserProviderFactory;
			public get(): any;
			public get(): zendesk.core.UserProvider;
			public static provideUserProvider(param0: any): zendesk.core.UserProvider;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideUserServiceFactory extends dagger.internal.Factory<zendesk.core.UserService> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideUserServiceFactory>;
			public constructor(param0: javax.inject.Provider<retrofit2.Retrofit>);
			public get(): zendesk.core.UserService;
			public get(): any;
			public static provideUserService(param0: retrofit2.Retrofit): zendesk.core.UserService;
			public static create(param0: javax.inject.Provider<retrofit2.Retrofit>): zendesk.core.ZendeskProvidersModule_ProvideUserServiceFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProvideZendeskSdkSettingsProviderFactory extends dagger.internal.Factory<zendesk.core.ZendeskSettingsProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProvideZendeskSdkSettingsProviderFactory>;
			public get(): zendesk.core.ZendeskSettingsProvider;
			public get(): any;
			public static provideZendeskSdkSettingsProvider(param0: any, param1: any, param2: any, param3: zendesk.core.ActionHandlerRegistry, param4: any, param5: zendesk.core.ZendeskLocaleConverter, param6: zendesk.core.ApplicationConfiguration, param7: globalAndroid.content.Context): zendesk.core.ZendeskSettingsProvider;
			public constructor(param0: javax.inject.Provider<zendesk.core.SdkSettingsService>, param1: javax.inject.Provider<zendesk.core.SettingsStorage>, param2: javax.inject.Provider<zendesk.core.CoreSettingsStorage>, param3: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param4: javax.inject.Provider<zendesk.core.Serializer>, param5: javax.inject.Provider<zendesk.core.ZendeskLocaleConverter>, param6: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param7: javax.inject.Provider<globalAndroid.content.Context>);
			public static create(param0: javax.inject.Provider<zendesk.core.SdkSettingsService>, param1: javax.inject.Provider<zendesk.core.SettingsStorage>, param2: javax.inject.Provider<zendesk.core.CoreSettingsStorage>, param3: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param4: javax.inject.Provider<zendesk.core.Serializer>, param5: javax.inject.Provider<zendesk.core.ZendeskLocaleConverter>, param6: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param7: javax.inject.Provider<globalAndroid.content.Context>): zendesk.core.ZendeskProvidersModule_ProvideZendeskSdkSettingsProviderFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProviderBlipsCoreProviderFactory extends dagger.internal.Factory<zendesk.core.BlipsCoreProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProviderBlipsCoreProviderFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.ZendeskBlipsProvider>): zendesk.core.ZendeskProvidersModule_ProviderBlipsCoreProviderFactory;
			public get(): any;
			public get(): zendesk.core.BlipsCoreProvider;
			public static providerBlipsCoreProvider(param0: any): zendesk.core.BlipsCoreProvider;
			public constructor(param0: javax.inject.Provider<zendesk.core.ZendeskBlipsProvider>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProviderBlipsProviderFactory extends dagger.internal.Factory<zendesk.core.BlipsProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProviderBlipsProviderFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.ZendeskBlipsProvider>): zendesk.core.ZendeskProvidersModule_ProviderBlipsProviderFactory;
			public static providerBlipsProvider(param0: any): zendesk.core.BlipsProvider;
			public get(): any;
			public get(): zendesk.core.BlipsProvider;
			public constructor(param0: javax.inject.Provider<zendesk.core.ZendeskBlipsProvider>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProviderConnectivityManagerFactory extends dagger.internal.Factory<globalAndroid.net.ConnectivityManager> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProviderConnectivityManagerFactory>;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
			public get(): globalAndroid.net.ConnectivityManager;
			public get(): any;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): zendesk.core.ZendeskProvidersModule_ProviderConnectivityManagerFactory;
			public static providerConnectivityManager(param0: globalAndroid.content.Context): globalAndroid.net.ConnectivityManager;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProviderNetworkInfoProviderFactory extends dagger.internal.Factory<zendesk.core.NetworkInfoProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProviderNetworkInfoProviderFactory>;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<globalAndroid.net.ConnectivityManager>);
			public get(): any;
			public static providerNetworkInfoProvider(param0: globalAndroid.content.Context, param1: globalAndroid.net.ConnectivityManager): zendesk.core.NetworkInfoProvider;
			public get(): zendesk.core.NetworkInfoProvider;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<globalAndroid.net.ConnectivityManager>): zendesk.core.ZendeskProvidersModule_ProviderNetworkInfoProviderFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_ProviderZendeskBlipsProviderFactory extends dagger.internal.Factory<zendesk.core.ZendeskBlipsProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_ProviderZendeskBlipsProviderFactory>;
			public get(): zendesk.core.ZendeskBlipsProvider;
			public static create(param0: javax.inject.Provider<zendesk.core.BlipsService>, param1: javax.inject.Provider<zendesk.core.DeviceInfo>, param2: javax.inject.Provider<zendesk.core.Serializer>, param3: javax.inject.Provider<zendesk.core.IdentityManager>, param4: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param5: javax.inject.Provider<zendesk.core.CoreSettingsStorage>, param6: javax.inject.Provider<java.util.concurrent.ExecutorService>): zendesk.core.ZendeskProvidersModule_ProviderZendeskBlipsProviderFactory;
			public get(): any;
			public static providerZendeskBlipsProvider(param0: any, param1: any, param2: any, param3: any, param4: zendesk.core.ApplicationConfiguration, param5: any, param6: java.util.concurrent.ExecutorService): zendesk.core.ZendeskBlipsProvider;
			public constructor(param0: javax.inject.Provider<zendesk.core.BlipsService>, param1: javax.inject.Provider<zendesk.core.DeviceInfo>, param2: javax.inject.Provider<zendesk.core.Serializer>, param3: javax.inject.Provider<zendesk.core.IdentityManager>, param4: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param5: javax.inject.Provider<zendesk.core.CoreSettingsStorage>, param6: javax.inject.Provider<java.util.concurrent.ExecutorService>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskProvidersModule_Proxy {
			public static class: java.lang.Class<zendesk.core.ZendeskProvidersModule_Proxy>;
			public static newInstance(): zendesk.core.ZendeskProvidersModule;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskPushDeviceIdStorage extends zendesk.core.PushDeviceIdStorage {
			public static class: java.lang.Class<zendesk.core.ZendeskPushDeviceIdStorage>;
			public removePushDeviceId(): void;
			public hasStoredDeviceId(): boolean;
			public getPushDeviceId(): string;
			public storePushDeviceId(param0: string): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskPushRegistrationProvider extends zendesk.core.PushRegistrationProvider {
			public static class: java.lang.Class<zendesk.core.ZendeskPushRegistrationProvider>;
			public registerWithDeviceIdentifier(param0: string, param1: zendesk.service.ZendeskCallback<string>): void;
			public registerWithUAChannelId(param0: string, param1: zendesk.service.ZendeskCallback<string>): void;
			public unregisterDevice(param0: zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public isRegisteredForPush(): boolean;
		}
		export module ZendeskPushRegistrationProvider {
			export class TokenType {
				public static class: java.lang.Class<zendesk.core.ZendeskPushRegistrationProvider.TokenType>;
				public static Identifier: zendesk.core.ZendeskPushRegistrationProvider.TokenType;
				public static UrbanAirshipChannelId: zendesk.core.ZendeskPushRegistrationProvider.TokenType;
				public static valueOf(param0: string): zendesk.core.ZendeskPushRegistrationProvider.TokenType;
				public static values(): native.Array<zendesk.core.ZendeskPushRegistrationProvider.TokenType>;
			}
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskRestServiceProvider extends zendesk.core.RestServiceProvider {
			public static class: java.lang.Class<zendesk.core.ZendeskRestServiceProvider>;
			public createRestService(param0: java.lang.Class<any>, param1: string, param2: string, param3: zendesk.core.CustomNetworkConfig): any;
			public createRestService(param0: java.lang.Class<any>, param1: string, param2: string): any;
			public getMediaOkHttpClient(): okhttp3.OkHttpClient;
			public getCoreOkHttpClient(): okhttp3.OkHttpClient;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskSessionStorage extends zendesk.core.SessionStorage {
			public static class: java.lang.Class<zendesk.core.ZendeskSessionStorage>;
			public clear(): void;
			public getZendeskCacheDir(): java.io.File;
			public getAdditionalSdkStorage(): zendesk.core.BaseStorage;
			public getZendeskDataDir(): java.io.File;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskSettingsInterceptor extends okhttp3.Interceptor {
			public static class: java.lang.Class<zendesk.core.ZendeskSettingsInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskSettingsProvider implements zendesk.core.SettingsProvider, zendesk.core.SdkSettingsProviderInternal {
			public static class: java.lang.Class<zendesk.core.ZendeskSettingsProvider>;
			public getSettingsForSdk(param0: string, param1: java.lang.Class<any>, param2: zendesk.service.ZendeskCallback<any>): void;
			public getBlipsSettings(): zendesk.core.BlipsSettings;
			public getCoreSettings(): zendesk.core.CoreSettings;
			public getCoreSettings(param0: zendesk.service.ZendeskCallback<zendesk.core.CoreSettings>): void;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskSettingsStorage extends zendesk.core.SettingsStorage {
			public static class: java.lang.Class<zendesk.core.ZendeskSettingsStorage>;
			public clear(): void;
			public getSettings(param0: string, param1: java.lang.Class<any>): any;
			public areSettingsUpToDate(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
			public storeRawSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
			public hasStoredSettings(): boolean;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskShadow {
			public static class: java.lang.Class<zendesk.core.ZendeskShadow>;
			public setIdentity(param0: zendesk.core.Identity): void;
			public providers(): zendesk.core.ProviderStore;
			public getIdentity(): zendesk.core.Identity;
			public coreModule(): zendesk.core.CoreModule;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorage extends zendesk.core.Storage {
			public static class: java.lang.Class<zendesk.core.ZendeskStorage>;
			public clear(): void;
			public hasSdkConfigChanged(param0: zendesk.core.ApplicationConfiguration): boolean;
			public storeSdkHash(param0: zendesk.core.ApplicationConfiguration): void;
			public getSessionStorage(): zendesk.core.SessionStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule>;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideAdditionalSdkBaseStorageFactory extends dagger.internal.Factory<zendesk.core.BaseStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideAdditionalSdkBaseStorageFactory>;
			public static provideAdditionalSdkBaseStorage(param0: globalAndroid.content.Context, param1: any): zendesk.core.BaseStorage;
			public get(): any;
			public get(): zendesk.core.BaseStorage;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>);
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>): zendesk.core.ZendeskStorageModule_ProvideAdditionalSdkBaseStorageFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideAuthProviderFactory extends dagger.internal.Factory<zendesk.core.AuthenticationProvider> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideAuthProviderFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.IdentityManager>): zendesk.core.ZendeskStorageModule_ProvideAuthProviderFactory;
			public static provideAuthProvider(param0: any): zendesk.core.AuthenticationProvider;
			public get(): any;
			public get(): zendesk.core.AuthenticationProvider;
			public constructor(param0: javax.inject.Provider<zendesk.core.IdentityManager>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideCacheFactory extends dagger.internal.Factory<okhttp3.Cache> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideCacheFactory>;
			public constructor(param0: javax.inject.Provider<java.io.File>);
			public static create(param0: javax.inject.Provider<java.io.File>): zendesk.core.ZendeskStorageModule_ProvideCacheFactory;
			public static provideCache(param0: java.io.File): okhttp3.Cache;
			public get(): okhttp3.Cache;
			public get(): any;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideCoreSettingsStorageFactory extends dagger.internal.Factory<zendesk.core.CoreSettingsStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideCoreSettingsStorageFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.SettingsStorage>): zendesk.core.ZendeskStorageModule_ProvideCoreSettingsStorageFactory;
			public get(): any;
			public get(): zendesk.core.CoreSettingsStorage;
			public static provideCoreSettingsStorage(param0: any): zendesk.core.CoreSettingsStorage;
			public constructor(param0: javax.inject.Provider<zendesk.core.SettingsStorage>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideIdentityBaseStorageFactory extends dagger.internal.Factory<zendesk.core.BaseStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideIdentityBaseStorageFactory>;
			public get(): any;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>): zendesk.core.ZendeskStorageModule_ProvideIdentityBaseStorageFactory;
			public get(): zendesk.core.BaseStorage;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>);
			public static provideIdentityBaseStorage(param0: globalAndroid.content.Context, param1: any): zendesk.core.BaseStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideIdentityManagerFactory extends dagger.internal.Factory<zendesk.core.IdentityManager> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideIdentityManagerFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.IdentityStorage>): zendesk.core.ZendeskStorageModule_ProvideIdentityManagerFactory;
			public static provideIdentityManager(param0: any): zendesk.core.IdentityManager;
			public constructor(param0: javax.inject.Provider<zendesk.core.IdentityStorage>);
			public get(): any;
			public get(): zendesk.core.IdentityManager;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideIdentityStorageFactory extends dagger.internal.Factory<zendesk.core.IdentityStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideIdentityStorageFactory>;
			public static provideIdentityStorage(param0: zendesk.core.BaseStorage): zendesk.core.IdentityStorage;
			public constructor(param0: javax.inject.Provider<zendesk.core.BaseStorage>);
			public get(): any;
			public get(): zendesk.core.IdentityStorage;
			public static create(param0: javax.inject.Provider<zendesk.core.BaseStorage>): zendesk.core.ZendeskStorageModule_ProvideIdentityStorageFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideLegacyIdentityBaseStorageFactory extends dagger.internal.Factory<zendesk.core.SharedPreferencesStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideLegacyIdentityBaseStorageFactory>;
			public get(): any;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>): zendesk.core.ZendeskStorageModule_ProvideLegacyIdentityBaseStorageFactory;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>);
			public get(): zendesk.core.SharedPreferencesStorage;
			public static provideLegacyIdentityBaseStorage(param0: globalAndroid.content.Context, param1: any): zendesk.core.SharedPreferencesStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideLegacyIdentityStorageFactory extends dagger.internal.Factory<zendesk.core.LegacyIdentityMigrator> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideLegacyIdentityStorageFactory>;
			public get(): any;
			public static provideLegacyIdentityStorage(param0: any, param1: any, param2: any, param3: any, param4: any): zendesk.core.LegacyIdentityMigrator;
			public constructor(param0: javax.inject.Provider<zendesk.core.SharedPreferencesStorage>, param1: javax.inject.Provider<zendesk.core.SharedPreferencesStorage>, param2: javax.inject.Provider<zendesk.core.IdentityStorage>, param3: javax.inject.Provider<zendesk.core.IdentityManager>, param4: javax.inject.Provider<zendesk.core.PushDeviceIdStorage>);
			public get(): zendesk.core.LegacyIdentityMigrator;
			public static create(param0: javax.inject.Provider<zendesk.core.SharedPreferencesStorage>, param1: javax.inject.Provider<zendesk.core.SharedPreferencesStorage>, param2: javax.inject.Provider<zendesk.core.IdentityStorage>, param3: javax.inject.Provider<zendesk.core.IdentityManager>, param4: javax.inject.Provider<zendesk.core.PushDeviceIdStorage>): zendesk.core.ZendeskStorageModule_ProvideLegacyIdentityStorageFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideLegacyPushBaseStorageFactory extends dagger.internal.Factory<zendesk.core.SharedPreferencesStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideLegacyPushBaseStorageFactory>;
			public static provideLegacyPushBaseStorage(param0: globalAndroid.content.Context, param1: any): zendesk.core.SharedPreferencesStorage;
			public get(): any;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>);
			public get(): zendesk.core.SharedPreferencesStorage;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>): zendesk.core.ZendeskStorageModule_ProvideLegacyPushBaseStorageFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideMemoryCacheFactory extends dagger.internal.Factory<zendesk.core.MemoryCache> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideMemoryCacheFactory>;
			public static provideMemoryCache(): zendesk.core.MemoryCache;
			public static create(): zendesk.core.ZendeskStorageModule_ProvideMemoryCacheFactory;
			public get(): any;
			public get(): zendesk.core.MemoryCache;
			public constructor();
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvidePushDeviceIdStorageFactory extends dagger.internal.Factory<zendesk.core.PushDeviceIdStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvidePushDeviceIdStorageFactory>;
			public static providePushDeviceIdStorage(param0: zendesk.core.BaseStorage): zendesk.core.PushDeviceIdStorage;
			public constructor(param0: javax.inject.Provider<zendesk.core.BaseStorage>);
			public get(): any;
			public static create(param0: javax.inject.Provider<zendesk.core.BaseStorage>): zendesk.core.ZendeskStorageModule_ProvidePushDeviceIdStorageFactory;
			public get(): zendesk.core.PushDeviceIdStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideSdkBaseStorageFactory extends dagger.internal.Factory<zendesk.core.BaseStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideSdkBaseStorageFactory>;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>): zendesk.core.ZendeskStorageModule_ProvideSdkBaseStorageFactory;
			public get(): any;
			public static provideSdkBaseStorage(param0: globalAndroid.content.Context, param1: any): zendesk.core.BaseStorage;
			public get(): zendesk.core.BaseStorage;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideSdkStorageFactory extends dagger.internal.Factory<zendesk.core.Storage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideSdkStorageFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.SettingsStorage>, param1: javax.inject.Provider<zendesk.core.SessionStorage>, param2: javax.inject.Provider<zendesk.core.BaseStorage>, param3: javax.inject.Provider<zendesk.core.MemoryCache>): zendesk.core.ZendeskStorageModule_ProvideSdkStorageFactory;
			public get(): zendesk.core.Storage;
			public get(): any;
			public constructor(param0: javax.inject.Provider<zendesk.core.SettingsStorage>, param1: javax.inject.Provider<zendesk.core.SessionStorage>, param2: javax.inject.Provider<zendesk.core.BaseStorage>, param3: javax.inject.Provider<zendesk.core.MemoryCache>);
			public static provideSdkStorage(param0: any, param1: zendesk.core.SessionStorage, param2: zendesk.core.BaseStorage, param3: zendesk.core.MemoryCache): zendesk.core.Storage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideSerializerFactory extends dagger.internal.Factory<zendesk.core.Serializer> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideSerializerFactory>;
			public get(): zendesk.core.Serializer;
			public constructor(param0: javax.inject.Provider<com.google.gson.Gson>);
			public get(): any;
			public static create(param0: javax.inject.Provider<com.google.gson.Gson>): zendesk.core.ZendeskStorageModule_ProvideSerializerFactory;
			public static provideSerializer(param0: com.google.gson.Gson): zendesk.core.Serializer;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideSessionStorageFactory extends dagger.internal.Factory<zendesk.core.SessionStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideSessionStorageFactory>;
			public static provideSessionStorage(param0: any, param1: zendesk.core.BaseStorage, param2: zendesk.core.BaseStorage, param3: okhttp3.Cache, param4: java.io.File, param5: java.io.File, param6: java.io.File): zendesk.core.SessionStorage;
			public get(): zendesk.core.SessionStorage;
			public static create(param0: javax.inject.Provider<zendesk.core.IdentityStorage>, param1: javax.inject.Provider<zendesk.core.BaseStorage>, param2: javax.inject.Provider<zendesk.core.BaseStorage>, param3: javax.inject.Provider<okhttp3.Cache>, param4: javax.inject.Provider<java.io.File>, param5: javax.inject.Provider<java.io.File>, param6: javax.inject.Provider<java.io.File>): zendesk.core.ZendeskStorageModule_ProvideSessionStorageFactory;
			public get(): any;
			public constructor(param0: javax.inject.Provider<zendesk.core.IdentityStorage>, param1: javax.inject.Provider<zendesk.core.BaseStorage>, param2: javax.inject.Provider<zendesk.core.BaseStorage>, param3: javax.inject.Provider<okhttp3.Cache>, param4: javax.inject.Provider<java.io.File>, param5: javax.inject.Provider<java.io.File>, param6: javax.inject.Provider<java.io.File>);
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideSettingsBaseStorageFactory extends dagger.internal.Factory<zendesk.core.BaseStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideSettingsBaseStorageFactory>;
			public get(): any;
			public static provideSettingsBaseStorage(param0: globalAndroid.content.Context, param1: any): zendesk.core.BaseStorage;
			public get(): zendesk.core.BaseStorage;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>);
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.Serializer>): zendesk.core.ZendeskStorageModule_ProvideSettingsBaseStorageFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvideSettingsStorageFactory extends dagger.internal.Factory<zendesk.core.SettingsStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvideSettingsStorageFactory>;
			public get(): zendesk.core.SettingsStorage;
			public constructor(param0: javax.inject.Provider<zendesk.core.BaseStorage>);
			public get(): any;
			public static provideSettingsStorage(param0: zendesk.core.BaseStorage): zendesk.core.SettingsStorage;
			public static create(param0: javax.inject.Provider<zendesk.core.BaseStorage>): zendesk.core.ZendeskStorageModule_ProvideSettingsStorageFactory;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvidesBelvedereDirFactory extends dagger.internal.Factory<java.io.File> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvidesBelvedereDirFactory>;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): zendesk.core.ZendeskStorageModule_ProvidesBelvedereDirFactory;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
			public get(): any;
			public get(): java.io.File;
			public static providesBelvedereDir(param0: globalAndroid.content.Context): java.io.File;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvidesCacheDirFactory extends dagger.internal.Factory<java.io.File> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvidesCacheDirFactory>;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): zendesk.core.ZendeskStorageModule_ProvidesCacheDirFactory;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
			public get(): any;
			public get(): java.io.File;
			public static providesCacheDir(param0: globalAndroid.content.Context): java.io.File;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvidesDataDirFactory extends dagger.internal.Factory<java.io.File> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvidesDataDirFactory>;
			public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): zendesk.core.ZendeskStorageModule_ProvidesDataDirFactory;
			public static providesDataDir(param0: globalAndroid.content.Context): java.io.File;
			public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
			public get(): any;
			public get(): java.io.File;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_ProvidesDiskLruStorageFactory extends dagger.internal.Factory<zendesk.core.BaseStorage> {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_ProvidesDiskLruStorageFactory>;
			public static create(param0: javax.inject.Provider<java.io.File>, param1: javax.inject.Provider<zendesk.core.Serializer>): zendesk.core.ZendeskStorageModule_ProvidesDiskLruStorageFactory;
			public get(): any;
			public constructor(param0: javax.inject.Provider<java.io.File>, param1: javax.inject.Provider<zendesk.core.Serializer>);
			public get(): zendesk.core.BaseStorage;
			public static providesDiskLruStorage(param0: java.io.File, param1: any): zendesk.core.BaseStorage;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskStorageModule_Proxy {
			public static class: java.lang.Class<zendesk.core.ZendeskStorageModule_Proxy>;
			public static newInstance(): zendesk.core.ZendeskStorageModule;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskUnauthorizedInterceptor extends okhttp3.Interceptor {
			public static class: java.lang.Class<zendesk.core.ZendeskUnauthorizedInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module core {
		export class ZendeskUserProvider extends zendesk.core.UserProvider {
			public static class: java.lang.Class<zendesk.core.ZendeskUserProvider>;
			public getUserFields(param0: zendesk.service.ZendeskCallback<java.util.List<zendesk.core.UserField>>): void;
			public setUserFields(param0: java.util.Map<string,string>, param1: zendesk.service.ZendeskCallback<java.util.Map<string,string>>): void;
			public getUser(param0: zendesk.service.ZendeskCallback<zendesk.core.User>): void;
			public addTags(param0: java.util.List<string>, param1: zendesk.service.ZendeskCallback<java.util.List<string>>): void;
			public deleteTags(param0: java.util.List<string>, param1: zendesk.service.ZendeskCallback<java.util.List<string>>): void;
		}
	}
}

declare module zendesk {
	export module suas {
		export class Action<E>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.suas.Action<any>>;
			public toString(): string;
			public getActionType(): string;
			public getData(): any;
			public getData(param0: java.lang.Class<any>): any;
			public getRawData(): E;
			public constructor(param0: string, param1: E);
			public constructor(param0: string);
		}
	}
}

declare module zendesk {
	export module suas {
		export class CombinedMiddleware extends zendesk.suas.Middleware {
			public static class: java.lang.Class<zendesk.suas.CombinedMiddleware>;
			public onAction(param0: zendesk.suas.Action<any>, param1: zendesk.suas.GetState, param2: zendesk.suas.Dispatcher, param3: zendesk.suas.Continuation): void;
		}
	}
}

declare module zendesk {
	export module suas {
		export class CombinedReducer {
			public static class: java.lang.Class<zendesk.suas.CombinedReducer>;
			public reduce(param0: zendesk.suas.State, param1: zendesk.suas.Action<any>): zendesk.suas.CombinedReducer.ReduceResult;
			public getEmptyState(): zendesk.suas.State;
		}
		export module CombinedReducer {
			export class ReduceResult {
				public static class: java.lang.Class<zendesk.suas.CombinedReducer.ReduceResult>;
			}
		}
	}
}

declare module zendesk {
	export module suas {
		export class CombinedSubscription extends zendesk.suas.Subscription {
			public static class: java.lang.Class<zendesk.suas.CombinedSubscription>;
			public informWithCurrentState(): void;
			public removeListener(): void;
			public static from(param0: native.Array<zendesk.suas.Subscription>): zendesk.suas.Subscription;
			public static from(param0: java.util.Collection<zendesk.suas.Subscription>): zendesk.suas.Subscription;
			public addListener(): void;
		}
	}
}

declare module zendesk {
	export module suas {
		export class Continuation {
			public static class: java.lang.Class<zendesk.suas.Continuation>;
			/**
			 * Constructs a new instance of the zendesk.suas.Continuation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				next(param0: zendesk.suas.Action<any>): void;
			});
			public constructor();
			public next(param0: zendesk.suas.Action<any>): void;
		}
	}
}

declare module zendesk {
	export module suas {
		export class Dispatcher {
			public static class: java.lang.Class<zendesk.suas.Dispatcher>;
			/**
			 * Constructs a new instance of the zendesk.suas.Dispatcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				dispatch(param0: zendesk.suas.Action<any>): void;
			});
			public constructor();
			public dispatch(param0: zendesk.suas.Action<any>): void;
		}
	}
}

declare module zendesk {
	export module suas {
		export class Executors {
			public static class: java.lang.Class<zendesk.suas.Executors>;
		}
		export module Executors {
			export class AndroidExecutor {
				public static class: java.lang.Class<zendesk.suas.Executors.AndroidExecutor>;
				public execute(param0: java.lang.Runnable): void;
				public constructor();
			}
			export class DefaultCurrentThreadExecutor {
				public static class: java.lang.Class<zendesk.suas.Executors.DefaultCurrentThreadExecutor>;
				public execute(param0: java.lang.Runnable): void;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module suas {
		export class Filter<E>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.suas.Filter<any>>;
			/**
			 * Constructs a new instance of the zendesk.suas.Filter<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				filter(param0: E, param1: E): boolean;
			});
			public constructor();
			public filter(param0: E, param1: E): boolean;
		}
	}
}

declare module zendesk {
	export module suas {
		export class Filters {
			public static class: java.lang.Class<zendesk.suas.Filters>;
			public static DEFAULT: zendesk.suas.Filter<any>;
			public static EQUALS: zendesk.suas.Filter<any>;
		}
		export module Filters {
			export class DefaultFilter extends zendesk.suas.Filter<any> {
				public static class: java.lang.Class<zendesk.suas.Filters.DefaultFilter>;
				public filter(param0: any, param1: any): boolean;
			}
			export class EqualsFilter extends zendesk.suas.Filter<any> {
				public static class: java.lang.Class<zendesk.suas.Filters.EqualsFilter>;
				public filter(param0: any, param1: any): boolean;
			}
		}
	}
}

declare module zendesk {
	export module suas {
		export class GetState {
			public static class: java.lang.Class<zendesk.suas.GetState>;
			/**
			 * Constructs a new instance of the zendesk.suas.GetState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getState(): zendesk.suas.State;
			});
			public constructor();
			public getState(): zendesk.suas.State;
		}
	}
}

declare module zendesk {
	export module suas {
		export class Listener<E>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.suas.Listener<any>>;
			/**
			 * Constructs a new instance of the zendesk.suas.Listener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				update(param0: E): void;
			});
			public constructor();
			public update(param0: E): void;
		}
	}
}

declare module zendesk {
	export module suas {
		export class Listeners {
			public static class: java.lang.Class<zendesk.suas.Listeners>;
		}
		export module Listeners {
			export class ClassKeyedListener<E>  extends zendesk.suas.Listeners.StateListener {
				public static class: java.lang.Class<zendesk.suas.Listeners.ClassKeyedListener<any>>;
				public getStateKey(): string;
				public update(param0: zendesk.suas.State, param1: zendesk.suas.State, param2: boolean): void;
			}
			export class ClassStringKeyedListener<E>  extends zendesk.suas.Listeners.StateListener {
				public static class: java.lang.Class<zendesk.suas.Listeners.ClassStringKeyedListener<any>>;
				public getStateKey(): string;
				public update(param0: zendesk.suas.State, param1: zendesk.suas.State, param2: boolean): void;
			}
			export class Default extends zendesk.suas.Listeners.StateListener {
				public static class: java.lang.Class<zendesk.suas.Listeners.Default>;
				public getStateKey(): string;
				public update(param0: zendesk.suas.State, param1: zendesk.suas.State, param2: boolean): void;
			}
			export class StateListener {
				public static class: java.lang.Class<zendesk.suas.Listeners.StateListener>;
				/**
				 * Constructs a new instance of the zendesk.suas.Listeners$StateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getStateKey(): string;
					update(param0: zendesk.suas.State, param1: zendesk.suas.State, param2: boolean): void;
				});
				public constructor();
				public getStateKey(): string;
				public update(param0: zendesk.suas.State, param1: zendesk.suas.State, param2: boolean): void;
			}
			export class StateSelectorListener<E>  extends zendesk.suas.Listeners.StateListener {
				public static class: java.lang.Class<zendesk.suas.Listeners.StateSelectorListener<any>>;
				public getStateKey(): string;
				public update(param0: zendesk.suas.State, param1: zendesk.suas.State, param2: boolean): void;
			}
			export class StringKeyedListener<E>  extends zendesk.suas.Listeners.StateListener {
				public static class: java.lang.Class<zendesk.suas.Listeners.StringKeyedListener<any>>;
				public getStateKey(): string;
				public update(param0: zendesk.suas.State, param1: zendesk.suas.State, param2: boolean): void;
			}
		}
	}
}

declare module zendesk {
	export module suas {
		export class Middleware {
			public static class: java.lang.Class<zendesk.suas.Middleware>;
			/**
			 * Constructs a new instance of the zendesk.suas.Middleware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onAction(param0: zendesk.suas.Action<any>, param1: zendesk.suas.GetState, param2: zendesk.suas.Dispatcher, param3: zendesk.suas.Continuation): void;
			});
			public constructor();
			public onAction(param0: zendesk.suas.Action<any>, param1: zendesk.suas.GetState, param2: zendesk.suas.Dispatcher, param3: zendesk.suas.Continuation): void;
		}
	}
}

declare module zendesk {
	export module suas {
		export abstract class Reducer<E>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.suas.Reducer<any>>;
			public getInitialState(): E;
			public getStateKey(): string;
			public constructor();
			public reduce(param0: E, param1: zendesk.suas.Action<any>): E;
		}
	}
}

declare module zendesk {
	export module suas {
		export class State {
			public static class: java.lang.Class<zendesk.suas.State>;
			public getState(param0: java.lang.Class<any>): any;
			public equals(param0: any): boolean;
			public updateKey(param0: java.lang.Class<any>, param1: any): void;
			public toString(): string;
			public updateKey(param0: string, param1: any): void;
			public constructor();
			public getState(param0: string, param1: java.lang.Class<any>): any;
			public getState(param0: string): any;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module suas {
		export class StateSelector<E>  extends java.lang.Object {
			public static class: java.lang.Class<zendesk.suas.StateSelector<any>>;
			/**
			 * Constructs a new instance of the zendesk.suas.StateSelector<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				selectData(param0: zendesk.suas.State): E;
			});
			public constructor();
			public selectData(param0: zendesk.suas.State): E;
		}
	}
}

declare module zendesk {
	export module suas {
		export class Store implements zendesk.suas.GetState, zendesk.suas.Dispatcher {
			public static class: java.lang.Class<zendesk.suas.Store>;
			/**
			 * Constructs a new instance of the zendesk.suas.Store interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				reset(param0: zendesk.suas.State): void;
				addListener(param0: zendesk.suas.Listener<zendesk.suas.State>): zendesk.suas.Subscription;
				addListener(param0: zendesk.suas.Filter<zendesk.suas.State>, param1: zendesk.suas.Listener<zendesk.suas.State>): zendesk.suas.Subscription;
				addListener(param0: zendesk.suas.StateSelector<any>, param1: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
				addListener(param0: zendesk.suas.Filter<any>, param1: zendesk.suas.StateSelector<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
				addListener(param0: string, param1: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
				addListener(param0: string, param1: zendesk.suas.Filter<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
				addListener(param0: java.lang.Class<any>, param1: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
				addListener(param0: java.lang.Class<any>, param1: zendesk.suas.Filter<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
				addListener(param0: string, param1: java.lang.Class<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
				addListener(param0: string, param1: java.lang.Class<any>, param2: zendesk.suas.Filter<any>, param3: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
				addActionListener(param0: zendesk.suas.Listener<zendesk.suas.Action<any>>): zendesk.suas.Subscription;
				removeListener(param0: zendesk.suas.Listener<any>): void;
				getState(): zendesk.suas.State;
				dispatch(param0: zendesk.suas.Action<any>): void;
			});
			public constructor();
			public addListener(param0: java.lang.Class<any>, param1: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addActionListener(param0: zendesk.suas.Listener<zendesk.suas.Action<any>>): zendesk.suas.Subscription;
			public removeListener(param0: zendesk.suas.Listener<any>): void;
			public getState(): zendesk.suas.State;
			public addListener(param0: string, param1: java.lang.Class<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public dispatch(param0: zendesk.suas.Action<any>): void;
			public reset(param0: zendesk.suas.State): void;
			public addListener(param0: zendesk.suas.Filter<any>, param1: zendesk.suas.StateSelector<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addListener(param0: zendesk.suas.Listener<zendesk.suas.State>): zendesk.suas.Subscription;
			public addListener(param0: java.lang.Class<any>, param1: zendesk.suas.Filter<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addListener(param0: zendesk.suas.Filter<zendesk.suas.State>, param1: zendesk.suas.Listener<zendesk.suas.State>): zendesk.suas.Subscription;
			public addListener(param0: string, param1: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addListener(param0: string, param1: zendesk.suas.Filter<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addListener(param0: zendesk.suas.StateSelector<any>, param1: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addListener(param0: string, param1: java.lang.Class<any>, param2: zendesk.suas.Filter<any>, param3: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
		}
	}
}

declare module zendesk {
	export module suas {
		export class Suas {
			public static class: java.lang.Class<zendesk.suas.Suas>;
			public static createStore(param0: native.Array<zendesk.suas.Reducer<any>>): zendesk.suas.Suas.Builder;
			public static createStore(param0: java.util.Collection<zendesk.suas.Reducer<any>>): zendesk.suas.Suas.Builder;
		}
		export module Suas {
			export class Builder {
				public static class: java.lang.Class<zendesk.suas.Suas.Builder>;
				public withMiddleware(param0: java.util.Collection<zendesk.suas.Middleware>): zendesk.suas.Suas.Builder;
				public withExecutor(param0: java.util.concurrent.Executor): zendesk.suas.Suas.Builder;
				public withMiddleware(param0: native.Array<zendesk.suas.Middleware>): zendesk.suas.Suas.Builder;
				public withInitialState(param0: zendesk.suas.State): zendesk.suas.Suas.Builder;
				public build(): zendesk.suas.Store;
				public withDefaultFilter(param0: zendesk.suas.Filter<any>): zendesk.suas.Suas.Builder;
			}
		}
	}
}

declare module zendesk {
	export module suas {
		export class SuasStore extends zendesk.suas.Store {
			public static class: java.lang.Class<zendesk.suas.SuasStore>;
			public getState(): zendesk.suas.State;
			public addListener(param0: java.lang.Class<any>, param1: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addActionListener(param0: zendesk.suas.Listener<zendesk.suas.Action<any>>): zendesk.suas.Subscription;
			public removeListener(param0: zendesk.suas.Listener<any>): void;
			public addListener(param0: string, param1: java.lang.Class<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public dispatch(param0: zendesk.suas.Action<any>): void;
			public reset(param0: zendesk.suas.State): void;
			public addListener(param0: zendesk.suas.Filter<any>, param1: zendesk.suas.StateSelector<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public removeListener(param0: zendesk.suas.Listener<any>): void;
			public addListener(param0: zendesk.suas.Listener<zendesk.suas.State>): zendesk.suas.Subscription;
			public addListener(param0: java.lang.Class<any>, param1: zendesk.suas.Filter<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addListener(param0: zendesk.suas.Filter<zendesk.suas.State>, param1: zendesk.suas.Listener<zendesk.suas.State>): zendesk.suas.Subscription;
			public addListener(param0: string, param1: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addListener(param0: string, param1: zendesk.suas.Filter<any>, param2: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addListener(param0: zendesk.suas.StateSelector<any>, param1: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
			public addListener(param0: string, param1: java.lang.Class<any>, param2: zendesk.suas.Filter<any>, param3: zendesk.suas.Listener<any>): zendesk.suas.Subscription;
		}
		export module SuasStore {
			export class ActionListenerSubscription extends zendesk.suas.Subscription {
				public static class: java.lang.Class<zendesk.suas.SuasStore.ActionListenerSubscription>;
				public addListener(): void;
				public removeListener(): void;
				public informWithCurrentState(): void;
			}
			export class DefaultSubscription extends zendesk.suas.Subscription {
				public static class: java.lang.Class<zendesk.suas.SuasStore.DefaultSubscription>;
				public addListener(): void;
				public removeListener(): void;
				public informWithCurrentState(): void;
			}
		}
	}
}

declare module zendesk {
	export module suas {
		export class Subscription {
			public static class: java.lang.Class<zendesk.suas.Subscription>;
			/**
			 * Constructs a new instance of the zendesk.suas.Subscription interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				removeListener(): void;
				addListener(): void;
				informWithCurrentState(): void;
			});
			public constructor();
			public informWithCurrentState(): void;
			public removeListener(): void;
			public addListener(): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ActivityScope {
			public static class: java.lang.Class<zendesk.support.ActivityScope>;
			/**
			 * Constructs a new instance of the zendesk.support.ActivityScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module zendesk {
	export module support {
		export class AggregatedCallback<T>  extends zendesk.service.ZendeskCallback<any> {
			public static class: java.lang.Class<zendesk.support.AggregatedCallback<any>>;
			public add(param0: zendesk.service.ZendeskCallback<any>): boolean;
			public onError(param0: zendesk.service.ErrorResponse): void;
			public cancel(): void;
			public constructor();
			public onSuccess(param0: any): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class AnswersTracker extends zendesk.support.ZendeskTracker {
			public static class: java.lang.Class<zendesk.support.AnswersTracker>;
			public requestCreated(): void;
			public requestUpdated(): void;
			public helpCenterSearched(param0: string): void;
			public helpCenterLoaded(): void;
			public helpCenterArticleViewed(): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ApplicationScope {
			public static class: java.lang.Class<zendesk.support.ApplicationScope>;
			public getZendeskTracker(): zendesk.support.ZendeskTracker;
			public newBuilder(): zendesk.support.ApplicationScope.Builder;
			public getLocale(): java.util.Locale;
		}
		export module ApplicationScope {
			export class Builder {
				public static class: java.lang.Class<zendesk.support.ApplicationScope.Builder>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class Article {
			public static class: java.lang.Class<zendesk.support.Article>;
			public static UNKNOWN_VOTE_COUNT: number;
			public getTitle(): string;
			public getUrl(): string;
			public isOutdated(): boolean;
			public getCreatedAt(): java.util.Date;
			public constructor();
			public getVoteCount(): number;
			public getUpdatedAt(): java.util.Date;
			public isDraft(): boolean;
			public getSectionId(): java.lang.Long;
			public getAuthor(): zendesk.support.User;
			public getAuthorId(): java.lang.Long;
			public getLocale(): string;
			public getId(): java.lang.Long;
			public getLabelNames(): java.util.List<string>;
			public setAuthor(param0: zendesk.support.User): void;
			public getSourceLocale(): string;
			public isCommentsDisabled(): boolean;
			public getUpvoteCount(): number;
			public getDownvoteCount(): number;
			public getBody(): string;
			public getHtmlUrl(): string;
			public getVoteSum(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticleItem extends zendesk.support.HelpItem {
			public static class: java.lang.Class<zendesk.support.ArticleItem>;
			public equals(param0: any): boolean;
			public getName(): string;
			public getId(): java.lang.Long;
			public getParentId(): java.lang.Long;
			public constructor(param0: java.lang.Long, param1: java.lang.Long, param2: string);
			public getViewType(): number;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticleResponse {
			public static class: java.lang.Class<zendesk.support.ArticleResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticleVote {
			public static class: java.lang.Class<zendesk.support.ArticleVote>;
			public getValue(): java.lang.Integer;
			public equals(param0: any): boolean;
			public getUrl(): string;
			public getId(): java.lang.Long;
			public getUserId(): java.lang.Long;
			public getItemType(): string;
			public getCreatedAt(): java.util.Date;
			public constructor();
			public getUpdatedAt(): java.util.Date;
			public getItemId(): java.lang.Long;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticleVoteResponse {
			public static class: java.lang.Class<zendesk.support.ArticleVoteResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticleVoteStorage {
			public static class: java.lang.Class<zendesk.support.ArticleVoteStorage>;
			/**
			 * Constructs a new instance of the zendesk.support.ArticleVoteStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				storeArticleVote(param0: java.lang.Long, param1: zendesk.support.ArticleVote): void;
				getStoredArticleVote(param0: java.lang.Long): zendesk.support.ArticleVote;
				removeStoredArticleVote(param0: java.lang.Long): void;
			});
			public constructor();
			public removeStoredArticleVote(param0: java.lang.Long): void;
			public storeArticleVote(param0: java.lang.Long, param1: zendesk.support.ArticleVote): void;
			public getStoredArticleVote(param0: java.lang.Long): zendesk.support.ArticleVote;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticlesListResponse extends zendesk.support.ArticlesResponse {
			public static class: java.lang.Class<zendesk.support.ArticlesListResponse>;
			public getSections(): java.util.List<zendesk.support.Section>;
			public getCategories(): java.util.List<zendesk.support.Category>;
			public getNextPage(): string;
			public getArticles(): java.util.List<zendesk.support.Article>;
			public getUsers(): java.util.List<zendesk.support.User>;
			public getPreviousPage(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticlesResponse {
			public static class: java.lang.Class<zendesk.support.ArticlesResponse>;
			/**
			 * Constructs a new instance of the zendesk.support.ArticlesResponse interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getArticles(): java.util.List<zendesk.support.Article>;
				getCategories(): java.util.List<zendesk.support.Category>;
				getSections(): java.util.List<zendesk.support.Section>;
				getUsers(): java.util.List<zendesk.support.User>;
			});
			public constructor();
			public getSections(): java.util.List<zendesk.support.Section>;
			public getCategories(): java.util.List<zendesk.support.Category>;
			public getArticles(): java.util.List<zendesk.support.Article>;
			public getUsers(): java.util.List<zendesk.support.User>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ArticlesSearchResponse extends zendesk.support.ArticlesResponse {
			public static class: java.lang.Class<zendesk.support.ArticlesSearchResponse>;
			public getSections(): java.util.List<zendesk.support.Section>;
			public getCategories(): java.util.List<zendesk.support.Category>;
			public getNextPage(): string;
			public getArticles(): java.util.List<zendesk.support.Article>;
			public getUsers(): java.util.List<zendesk.support.User>;
			public getPreviousPage(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class Attachment {
			public static class: java.lang.Class<zendesk.support.Attachment>;
			public getSize(): java.lang.Long;
			public getUrl(): string;
			public getId(): java.lang.Long;
			public getFileName(): string;
			public getHeight(): java.lang.Long;
			public getWidth(): java.lang.Long;
			public getThumbnails(): java.util.List<zendesk.support.Attachment>;
			public constructor();
			public getContentType(): string;
			public getContentUrl(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class AttachmentResponse {
			public static class: java.lang.Class<zendesk.support.AttachmentResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class AttachmentSettings {
			public static class: java.lang.Class<zendesk.support.AttachmentSettings>;
		}
	}
}

declare module zendesk {
	export module support {
		export class AttachmentType {
			public static class: java.lang.Class<zendesk.support.AttachmentType>;
			public static INLINE: zendesk.support.AttachmentType;
			public static BLOCK: zendesk.support.AttachmentType;
			public static valueOf(param0: string): zendesk.support.AttachmentType;
			public getAttachmentType(): string;
			public static values(): native.Array<zendesk.support.AttachmentType>;
		}
	}
}

declare module zendesk {
	export module support {
		export class CategoriesResponse {
			public static class: java.lang.Class<zendesk.support.CategoriesResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class Category {
			public static class: java.lang.Class<zendesk.support.Category>;
			public getUrl(): string;
			public getLocale(): string;
			public getName(): string;
			public getId(): java.lang.Long;
			public isOutdated(): boolean;
			public getSourceLocale(): string;
			public getCreatedAt(): java.util.Date;
			public getPosition(): number;
			public constructor();
			public getUpdatedAt(): java.util.Date;
			public getDescription(): string;
			public getHtmlUrl(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class CategoryItem extends zendesk.support.HelpItem {
			public static class: java.lang.Class<zendesk.support.CategoryItem>;
			public equals(param0: any): boolean;
			public setSections(param0: java.util.List<zendesk.support.SectionItem>): void;
			public isExpanded(): boolean;
			public getName(): string;
			public getId(): java.lang.Long;
			public getParentId(): java.lang.Long;
			public setExpanded(param0: boolean): boolean;
			public getSections(): java.util.List<zendesk.support.SectionItem>;
			public constructor();
			public getViewType(): number;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class CategoryResponse {
			public static class: java.lang.Class<zendesk.support.CategoryResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class Comment {
			public static class: java.lang.Class<zendesk.support.Comment>;
			public setBody(param0: string): void;
			public getUrl(): string;
			public setAttachments(param0: java.util.List<string>): void;
			public getAttachments(): java.util.List<string>;
			public getCreatedAt(): java.util.Date;
			public constructor();
			public getHtmlBody(): string;
			public getAuthorId(): java.lang.Long;
			public setAuthorId(param0: java.lang.Long): void;
			public getId(): java.lang.Long;
			public getRequestId(): string;
			public isPublic(): boolean;
			public setCreatedAt(param0: java.util.Date): void;
			public getBody(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class CommentResponse {
			public static class: java.lang.Class<zendesk.support.CommentResponse>;
			public setBody(param0: string): void;
			public getUrl(): string;
			public getCreatedAt(): java.util.Date;
			public constructor();
			public getHtmlBody(): string;
			public setAttachments(param0: java.util.List<zendesk.support.Attachment>): void;
			public getAuthorId(): java.lang.Long;
			public setAuthorId(param0: java.lang.Long): void;
			public getId(): java.lang.Long;
			public getAttachments(): java.util.List<zendesk.support.Attachment>;
			public getRequestId(): string;
			public isPublic(): boolean;
			public setCreatedAt(param0: java.util.Date): void;
			public setId(param0: java.lang.Long): void;
			public getBody(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class CommentsResponse extends zendesk.support.ResponseWrapper {
			public static class: java.lang.Class<zendesk.support.CommentsResponse>;
			public getOrganizations(): java.util.List<zendesk.support.Organization>;
			public getComments(): java.util.List<zendesk.support.CommentResponse>;
			public constructor();
			public getUsers(): java.util.List<zendesk.support.User>;
		}
	}
}

declare module zendesk {
	export module support {
		export class Constants {
			public static class: java.lang.Class<zendesk.support.Constants>;
			/**
			 * Constructs a new instance of the zendesk.support.Constants interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
			public static USER_AGENT_VARIANT: string;
			public static CUSTOM_HC_CACHING_HEADER: string;
			public static SDK_GUID_HEADER: string;
			public static ACTION_REFRESH_REQUEST_LIST: string;
			public static ACTION_REFRESH_REQUEST_CONVERSATION: string;
			public static HOURS_MINUTES_FORMAT: string;
			public static ACTION_DEFLECTION: string;
			public static STANDARD_CACHING_HEADER: string;
			public static ACTION_CONTACT_OPTION: string;
		}
	}
}

declare module zendesk {
	export module support {
		export class ContactUsSettings {
			public static class: java.lang.Class<zendesk.support.ContactUsSettings>;
			public getTags(): java.util.List<string>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ConversationsSettings {
			public static class: java.lang.Class<zendesk.support.ConversationsSettings>;
		}
	}
}

declare module zendesk {
	export module support {
		export class CreateRequest {
			public static class: java.lang.Class<zendesk.support.CreateRequest>;
			public setMetadata(param0: java.util.Map<string,string>): void;
			public setSubject(param0: string): void;
			public setAttachments(param0: java.util.List<string>): void;
			public setDescription(param0: string): void;
			public setCustomFields(param0: java.util.List<zendesk.support.CustomField>): void;
			public constructor();
			public getCustomFields(): java.util.List<zendesk.support.CustomField>;
			public setTicketFormId(param0: java.lang.Long): void;
			public setTags(param0: java.util.List<string>): void;
			public getId(): string;
			public setId(param0: string): void;
			public getTags(): java.util.List<string>;
			public getSubject(): string;
			public getTicketFormId(): java.lang.Long;
			public getDescription(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class CreateRequestActionHandler extends zendesk.core.ActionHandler {
			public static class: java.lang.Class<zendesk.support.CreateRequestActionHandler>;
			public getActionDescription(): zendesk.core.ActionDescription;
			public handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
			public getPriority(): number;
			public canHandle(param0: string): boolean;
			public updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class CreateRequestWrapper {
			public static class: java.lang.Class<zendesk.support.CreateRequestWrapper>;
		}
	}
}

declare module zendesk {
	export module support {
		export class CustomField {
			public static class: java.lang.Class<zendesk.support.CustomField>;
			public getValueBoolean(): java.lang.Boolean;
			public getValueList(): java.util.List<string>;
			public getValueObject(): any;
			public constructor(param0: java.lang.Long, param1: any);
			public getId(): java.lang.Long;
			/** @deprecated */
			public getValue(): string;
			public getValueString(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class DaggerSupportSdkComponent extends zendesk.support.SupportSdkComponent {
			public static class: java.lang.Class<zendesk.support.DaggerSupportSdkComponent>;
			public plus(param0: zendesk.support.requestlist.RequestListModule): zendesk.support.requestlist.RequestListComponent;
			public plus(param0: zendesk.support.request.RequestModule): zendesk.support.request.RequestComponent;
			public inject(param0: zendesk.support.guide.HelpCenterActivity): void;
			public helpCenterProvider(): zendesk.support.HelpCenterProvider;
			public static builder(): zendesk.support.DaggerSupportSdkComponent.Builder;
			public inject(param0: zendesk.support.SdkDependencyProvider): void;
			public inject(param0: zendesk.support.guide.ViewArticleActivity): void;
			public inject(param0: zendesk.support.DeepLinkingBroadcastReceiver): void;
			public inject(param0: zendesk.support.guide.HelpCenterFragment): void;
		}
		export module DaggerSupportSdkComponent {
			export class Builder {
				public static class: java.lang.Class<zendesk.support.DaggerSupportSdkComponent.Builder>;
				public build(): zendesk.support.SupportSdkComponent;
				public supportSdkModule(param0: zendesk.support.SupportSdkModule): zendesk.support.DaggerSupportSdkComponent.Builder;
				public coreModule(param0: zendesk.core.CoreModule): zendesk.support.DaggerSupportSdkComponent.Builder;
				public supportModule(param0: zendesk.support.SupportModule): zendesk.support.DaggerSupportSdkComponent.Builder;
			}
			export class RequestComponentImpl extends zendesk.support.request.RequestComponent {
				public static class: java.lang.Class<zendesk.support.DaggerSupportSdkComponent.RequestComponentImpl>;
				public inject(param0: zendesk.support.request.RequestViewConversationsEnabled): void;
				public inject(param0: zendesk.support.request.RequestActivity): void;
				public inject(param0: zendesk.support.request.RequestViewConversationsDisabled): void;
			}
			export class RequestListComponentImpl extends zendesk.support.requestlist.RequestListComponent {
				public static class: java.lang.Class<zendesk.support.DaggerSupportSdkComponent.RequestListComponentImpl>;
				public inject(param0: zendesk.support.requestlist.RequestListActivity): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class DaggerSupportSdkProvidersComponent extends zendesk.support.SupportSdkProvidersComponent {
			public static class: java.lang.Class<zendesk.support.DaggerSupportSdkProvidersComponent>;
			public static builder(): zendesk.support.DaggerSupportSdkProvidersComponent.Builder;
			public inject(param0: zendesk.support.Support): zendesk.support.Support;
		}
		export module DaggerSupportSdkProvidersComponent {
			export class Builder {
				public static class: java.lang.Class<zendesk.support.DaggerSupportSdkProvidersComponent.Builder>;
				public coreModule(param0: zendesk.core.CoreModule): zendesk.support.DaggerSupportSdkProvidersComponent.Builder;
				/** @deprecated */
				public serviceModule(param0: zendesk.support.ServiceModule): zendesk.support.DaggerSupportSdkProvidersComponent.Builder;
				public supportApplicationModule(param0: zendesk.support.SupportApplicationModule): zendesk.support.DaggerSupportSdkProvidersComponent.Builder;
				public storageModule(param0: zendesk.support.StorageModule): zendesk.support.DaggerSupportSdkProvidersComponent.Builder;
				public build(): zendesk.support.SupportSdkProvidersComponent;
				public providerModule(param0: zendesk.support.ProviderModule): zendesk.support.DaggerSupportSdkProvidersComponent.Builder;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class DeepLinkToRequestActionHandler extends zendesk.core.ActionHandler {
			public static class: java.lang.Class<zendesk.support.DeepLinkToRequestActionHandler>;
			public getActionDescription(): zendesk.core.ActionDescription;
			public handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
			public getPriority(): number;
			public canHandle(param0: string): boolean;
			public updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class DeepLinkingBroadcastReceiver {
			public static class: java.lang.Class<zendesk.support.DeepLinkingBroadcastReceiver>;
			public static EXTRA_BACK_STACK_ACTIVITIES: string;
			public static EXTRA_REQUEST_INTENT: string;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public constructor();
		}
	}
}

declare module zendesk {
	export module support {
		export class DeepLinkingBroadcastReceiver_MembersInjector extends dagger.MembersInjector<zendesk.support.DeepLinkingBroadcastReceiver> {
			public static class: java.lang.Class<zendesk.support.DeepLinkingBroadcastReceiver_MembersInjector>;
			public constructor(param0: javax.inject.Provider<zendesk.support.ZendeskDeepLinkHelper>);
			public injectMembers(param0: any): void;
			public static create(param0: javax.inject.Provider<zendesk.support.ZendeskDeepLinkHelper>): dagger.MembersInjector<zendesk.support.DeepLinkingBroadcastReceiver>;
			public injectMembers(param0: zendesk.support.DeepLinkingBroadcastReceiver): void;
			public static injectDeepLinkHelper(param0: zendesk.support.DeepLinkingBroadcastReceiver, param1: zendesk.support.ZendeskDeepLinkHelper): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class EndUserComment {
			public static class: java.lang.Class<zendesk.support.EndUserComment>;
			public setAttachments(param0: java.util.List<string>): void;
			public getAttachments(): java.util.List<string>;
			public constructor();
			public setValue(param0: string): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class FlatArticle extends java.lang.Comparable<zendesk.support.FlatArticle> {
			public static class: java.lang.Class<zendesk.support.FlatArticle>;
			public getCategory(): zendesk.support.Category;
			public toString(): string;
			public constructor(param0: zendesk.support.Category, param1: zendesk.support.Section, param2: zendesk.support.Article);
			public getSection(): zendesk.support.Section;
			public getArticle(): zendesk.support.Article;
			public compareTo(param0: zendesk.support.FlatArticle): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterAttachment {
			public static class: java.lang.Class<zendesk.support.HelpCenterAttachment>;
			public getSize(): java.lang.Long;
			public getUrl(): string;
			public getId(): java.lang.Long;
			public getFileName(): string;
			public getCreatedAt(): java.util.Date;
			public constructor();
			public getContentType(): string;
			public getUpdatedAt(): java.util.Date;
			public getContentUrl(): string;
			public getArticleId(): java.lang.Long;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterCachingInterceptor extends okhttp3.Interceptor {
			public static class: java.lang.Class<zendesk.support.HelpCenterCachingInterceptor>;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterCachingNetworkConfig extends zendesk.core.CustomNetworkConfig {
			public static class: java.lang.Class<zendesk.support.HelpCenterCachingNetworkConfig>;
			public configureOkHttpClient(param0: okhttp3.OkHttpClient.Builder): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterProvider {
			public static class: java.lang.Class<zendesk.support.HelpCenterProvider>;
			/**
			 * Constructs a new instance of the zendesk.support.HelpCenterProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getHelp(param0: zendesk.support.HelpRequest, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpItem>>): void;
				getCategories(param0: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Category>>): void;
				getSections(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Section>>): void;
				getArticles(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Article>>): void;
				getArticles(param0: java.lang.Long, param1: string, param2: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Article>>): void;
				listArticles(param0: zendesk.support.ListArticleQuery, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
				listArticlesFlat(param0: zendesk.support.ListArticleQuery, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.FlatArticle>>): void;
				searchArticles(param0: zendesk.support.HelpCenterSearch, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
				getArticle(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<zendesk.support.Article>): void;
				getSection(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<zendesk.support.Section>): void;
				getCategory(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<zendesk.support.Category>): void;
				getAttachments(param0: java.lang.Long, param1: zendesk.support.AttachmentType, param2: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpCenterAttachment>>): void;
				upvoteArticle(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<zendesk.support.ArticleVote>): void;
				downvoteArticle(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<zendesk.support.ArticleVote>): void;
				deleteVote(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<java.lang.Void>): void;
				getSuggestedArticles(param0: zendesk.support.SuggestedArticleSearch, param1: zendesk.service.ZendeskCallback<zendesk.support.SuggestedArticleResponse>): void;
				submitRecordArticleView(param0: zendesk.support.Article, param1: java.util.Locale, param2: zendesk.service.ZendeskCallback<java.lang.Void>): void;
			});
			public constructor();
			public getAttachments(param0: java.lang.Long, param1: zendesk.support.AttachmentType, param2: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpCenterAttachment>>): void;
			public getArticle(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<zendesk.support.Article>): void;
			public getArticles(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Article>>): void;
			public getSections(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Section>>): void;
			public getCategory(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<zendesk.support.Category>): void;
			public deleteVote(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public upvoteArticle(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<zendesk.support.ArticleVote>): void;
			public submitRecordArticleView(param0: zendesk.support.Article, param1: java.util.Locale, param2: zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public downvoteArticle(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<zendesk.support.ArticleVote>): void;
			public getCategories(param0: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Category>>): void;
			public listArticlesFlat(param0: zendesk.support.ListArticleQuery, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.FlatArticle>>): void;
			public getHelp(param0: zendesk.support.HelpRequest, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpItem>>): void;
			public getArticles(param0: java.lang.Long, param1: string, param2: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Article>>): void;
			public listArticles(param0: zendesk.support.ListArticleQuery, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
			public getSuggestedArticles(param0: zendesk.support.SuggestedArticleSearch, param1: zendesk.service.ZendeskCallback<zendesk.support.SuggestedArticleResponse>): void;
			public searchArticles(param0: zendesk.support.HelpCenterSearch, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
			public getSection(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<zendesk.support.Section>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterSearch {
			public static class: java.lang.Class<zendesk.support.HelpCenterSearch>;
			public getInclude(): string;
			public getLabelNames(): string;
			public getCategoryIds(): string;
			public getQuery(): string;
			public getPage(): java.lang.Integer;
			public getSectionIds(): string;
			public getPerPage(): java.lang.Integer;
			public withQuery(param0: string): zendesk.support.HelpCenterSearch;
			public getLocale(): java.util.Locale;
		}
		export module HelpCenterSearch {
			export class Builder {
				public static class: java.lang.Class<zendesk.support.HelpCenterSearch.Builder>;
				public withIncludes(param0: native.Array<string>): zendesk.support.HelpCenterSearch.Builder;
				public withLabelNames(param0: native.Array<string>): zendesk.support.HelpCenterSearch.Builder;
				public withSectionId(param0: java.lang.Long): zendesk.support.HelpCenterSearch.Builder;
				public build(): zendesk.support.HelpCenterSearch;
				public withCategoryId(param0: java.lang.Long): zendesk.support.HelpCenterSearch.Builder;
				public perPage(param0: java.lang.Integer): zendesk.support.HelpCenterSearch.Builder;
				public withCategoryIds(param0: java.util.List<java.lang.Long>): zendesk.support.HelpCenterSearch.Builder;
				public page(param0: java.lang.Integer): zendesk.support.HelpCenterSearch.Builder;
				public withSectionIds(param0: java.util.List<java.lang.Long>): zendesk.support.HelpCenterSearch.Builder;
				public constructor();
				public withQuery(param0: string): zendesk.support.HelpCenterSearch.Builder;
				public forLocale(param0: java.util.Locale): zendesk.support.HelpCenterSearch.Builder;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterService {
			public static class: java.lang.Class<zendesk.support.HelpCenterService>;
			/**
			 * Constructs a new instance of the zendesk.support.HelpCenterService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getHelp(param0: string, param1: string, param2: string, param3: string, param4: number, param5: string, param6: number, param7: string, param8: string): retrofit2.Call<zendesk.support.HelpResponse>;
				getCategories(param0: string): retrofit2.Call<zendesk.support.CategoriesResponse>;
				getSections(param0: string, param1: java.lang.Long, param2: number): retrofit2.Call<zendesk.support.SectionsResponse>;
				getArticles(param0: string, param1: java.lang.Long, param2: string, param3: string, param4: number): retrofit2.Call<zendesk.support.ArticlesListResponse>;
				listArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer): retrofit2.Call<zendesk.support.ArticlesListResponse>;
				searchArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Integer, param7: java.lang.Integer): retrofit2.Call<zendesk.support.ArticlesSearchResponse>;
				getArticle(param0: string, param1: java.lang.Long, param2: string): retrofit2.Call<zendesk.support.ArticleResponse>;
				getSectionById(param0: string, param1: java.lang.Long): retrofit2.Call<zendesk.support.SectionResponse>;
				getCategoryById(param0: string, param1: java.lang.Long): retrofit2.Call<zendesk.support.CategoryResponse>;
				getAttachments(param0: string, param1: java.lang.Long, param2: string): retrofit2.Call<zendesk.support.AttachmentResponse>;
				upvoteArticle(param0: java.lang.Long, param1: string): retrofit2.Call<zendesk.support.ArticleVoteResponse>;
				downvoteArticle(param0: java.lang.Long, param1: string): retrofit2.Call<zendesk.support.ArticleVoteResponse>;
				deleteVote(param0: java.lang.Long): retrofit2.Call<java.lang.Void>;
				getSuggestedArticles(param0: string, param1: string, param2: string, param3: java.lang.Long, param4: java.lang.Long): retrofit2.Call<zendesk.support.SuggestedArticleResponse>;
				submitRecordArticleView(param0: java.lang.Long, param1: string, param2: zendesk.support.RecordArticleViewRequest): retrofit2.Call<java.lang.Void>;
			});
			public constructor();
			public getSectionById(param0: string, param1: java.lang.Long): retrofit2.Call<zendesk.support.SectionResponse>;
			public getSuggestedArticles(param0: string, param1: string, param2: string, param3: java.lang.Long, param4: java.lang.Long): retrofit2.Call<zendesk.support.SuggestedArticleResponse>;
			public getHelp(param0: string, param1: string, param2: string, param3: string, param4: number, param5: string, param6: number, param7: string, param8: string): retrofit2.Call<zendesk.support.HelpResponse>;
			public getCategoryById(param0: string, param1: java.lang.Long): retrofit2.Call<zendesk.support.CategoryResponse>;
			public submitRecordArticleView(param0: java.lang.Long, param1: string, param2: zendesk.support.RecordArticleViewRequest): retrofit2.Call<java.lang.Void>;
			public listArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer): retrofit2.Call<zendesk.support.ArticlesListResponse>;
			public downvoteArticle(param0: java.lang.Long, param1: string): retrofit2.Call<zendesk.support.ArticleVoteResponse>;
			public upvoteArticle(param0: java.lang.Long, param1: string): retrofit2.Call<zendesk.support.ArticleVoteResponse>;
			public searchArticles(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Integer, param7: java.lang.Integer): retrofit2.Call<zendesk.support.ArticlesSearchResponse>;
			public getAttachments(param0: string, param1: java.lang.Long, param2: string): retrofit2.Call<zendesk.support.AttachmentResponse>;
			public getArticles(param0: string, param1: java.lang.Long, param2: string, param3: string, param4: number): retrofit2.Call<zendesk.support.ArticlesListResponse>;
			public getSections(param0: string, param1: java.lang.Long, param2: number): retrofit2.Call<zendesk.support.SectionsResponse>;
			public getArticle(param0: string, param1: java.lang.Long, param2: string): retrofit2.Call<zendesk.support.ArticleResponse>;
			public deleteVote(param0: java.lang.Long): retrofit2.Call<java.lang.Void>;
			public getCategories(param0: string): retrofit2.Call<zendesk.support.CategoriesResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterSessionCache {
			public static class: java.lang.Class<zendesk.support.HelpCenterSessionCache>;
			/**
			 * Constructs a new instance of the zendesk.support.HelpCenterSessionCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getLastSearch(): zendesk.support.LastSearch;
				setLastSearch(param0: string, param1: number): void;
				unsetUniqueSearchResultClick(): void;
				isUniqueSearchResultClick(): boolean;
			});
			public constructor();
			public isUniqueSearchResultClick(): boolean;
			public unsetUniqueSearchResultClick(): void;
			public getLastSearch(): zendesk.support.LastSearch;
			public setLastSearch(param0: string, param1: number): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpCenterSettings extends zendesk.core.Settings {
			public static class: java.lang.Class<zendesk.support.HelpCenterSettings>;
			public getLocale(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpItem {
			public static class: java.lang.Class<zendesk.support.HelpItem>;
			/**
			 * Constructs a new instance of the zendesk.support.HelpItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getViewType(): number;
				getName(): string;
				getId(): java.lang.Long;
				getParentId(): java.lang.Long;
			});
			public constructor();
			public static TYPE_LOADING: number;
			public static TYPE_SEE_ALL: number;
			public static TYPE_SECTION: number;
			public static TYPE_NO_RESULTS: number;
			public static TYPE_PADDING: number;
			public static TYPE_CATEGORY: number;
			public static TYPE_ARTICLE: number;
			public getName(): string;
			public getId(): java.lang.Long;
			public getParentId(): java.lang.Long;
			public getViewType(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpRequest {
			public static class: java.lang.Class<zendesk.support.HelpRequest>;
			public getCategoryIds(): string;
			public getLabelNames(): native.Array<string>;
			public getIncludes(): string;
			public getSectionIds(): string;
			public getArticlesPerPageLimit(): number;
		}
		export module HelpRequest {
			export class Builder {
				public static class: java.lang.Class<zendesk.support.HelpRequest.Builder>;
				public withArticlesPerSectionLimit(param0: number): zendesk.support.HelpRequest.Builder;
				public withLabelNames(param0: native.Array<string>): zendesk.support.HelpRequest.Builder;
				public withCategoryIds(param0: java.util.List<java.lang.Long>): zendesk.support.HelpRequest.Builder;
				public includeCategories(): zendesk.support.HelpRequest.Builder;
				public withSectionIds(param0: java.util.List<java.lang.Long>): zendesk.support.HelpRequest.Builder;
				public build(): zendesk.support.HelpRequest;
				public includeSections(): zendesk.support.HelpRequest.Builder;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class HelpResponse {
			public static class: java.lang.Class<zendesk.support.HelpResponse>;
			public getCategories(): java.util.List<zendesk.support.CategoryItem>;
			public getCategoryCount(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class IdUtil {
			public static class: java.lang.Class<zendesk.support.IdUtil>;
			public constructor();
			public static newLongId(): number;
			public static newStringId(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class LastSearch {
			public static class: java.lang.Class<zendesk.support.LastSearch>;
		}
	}
}

declare module zendesk {
	export module support {
		export class LegacyRequestMigrator extends zendesk.support.RequestMigrator {
			public static class: java.lang.Class<zendesk.support.LegacyRequestMigrator>;
			public clearLegacyRequestStorage(): void;
			public getLegacyRequests(): java.util.List<zendesk.support.RequestData>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ListArticleQuery {
			public static class: java.lang.Class<zendesk.support.ListArticleQuery>;
			public setLocale(param0: java.util.Locale): void;
			public setResultsPerPage(param0: java.lang.Integer): void;
			public setPage(param0: java.lang.Integer): void;
			public getSortBy(): zendesk.support.SortBy;
			public setSortBy(param0: zendesk.support.SortBy): void;
			public constructor();
			public getPage(): java.lang.Integer;
			public getResultsPerPage(): java.lang.Integer;
			public getInclude(): string;
			public getSortOrder(): zendesk.support.SortOrder;
			public getLabelNames(): string;
			public setInclude(param0: string): void;
			public setLabelNames(param0: string): void;
			public getLocale(): java.util.Locale;
			public setSortOrder(param0: zendesk.support.SortOrder): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class Organization {
			public static class: java.lang.Class<zendesk.support.Organization>;
			public getName(): string;
			public getId(): java.lang.Long;
			public constructor();
		}
	}
}

declare module zendesk {
	export module support {
		export class PicassoTransformations {
			public static class: java.lang.Class<zendesk.support.PicassoTransformations>;
			public static getRoundWithBorderTransformation(param0: number, param1: number, param2: number): com.sebchlan.picassocompat.TransformationCompat;
			public static getRoundedTransformation(param0: number): com.sebchlan.picassocompat.TransformationCompat;
			public static getBlurTransformation(param0: globalAndroid.content.Context): com.sebchlan.picassocompat.TransformationCompat;
		}
		export module PicassoTransformations {
			export class BlurTransformation extends com.sebchlan.picassocompat.TransformationCompat {
				public static class: java.lang.Class<zendesk.support.PicassoTransformations.BlurTransformation>;
				public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public key(): string;
			}
			export class RoundedTransformation extends com.sebchlan.picassocompat.TransformationCompat {
				public static class: java.lang.Class<zendesk.support.PicassoTransformations.RoundedTransformation>;
				public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
				public key(): string;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule {
			public static class: java.lang.Class<zendesk.support.ProviderModule>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideHelpCenterProviderFactory extends dagger.internal.Factory<zendesk.support.HelpCenterProvider> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideHelpCenterProviderFactory>;
			public get(): zendesk.support.HelpCenterProvider;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param3: javax.inject.Provider<zendesk.support.ZendeskHelpCenterService>, param4: javax.inject.Provider<zendesk.support.HelpCenterSessionCache>, param5: javax.inject.Provider<zendesk.support.ZendeskTracker>);
			public get(): any;
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param3: javax.inject.Provider<zendesk.support.ZendeskHelpCenterService>, param4: javax.inject.Provider<zendesk.support.HelpCenterSessionCache>, param5: javax.inject.Provider<zendesk.support.ZendeskTracker>): zendesk.support.ProviderModule_ProvideHelpCenterProviderFactory;
			public static provideHelpCenterProvider(param0: zendesk.support.ProviderModule, param1: zendesk.support.SupportSettingsProvider, param2: zendesk.support.SupportBlipsProvider, param3: any, param4: any, param5: any): zendesk.support.HelpCenterProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideProviderStoreFactory extends dagger.internal.Factory<zendesk.support.ProviderStore> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideProviderStoreFactory>;
			public static provideProviderStore(param0: zendesk.support.ProviderModule, param1: zendesk.support.HelpCenterProvider, param2: zendesk.support.RequestProvider, param3: zendesk.support.UploadProvider): zendesk.support.ProviderStore;
			public get(): any;
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param2: javax.inject.Provider<zendesk.support.RequestProvider>, param3: javax.inject.Provider<zendesk.support.UploadProvider>): zendesk.support.ProviderModule_ProvideProviderStoreFactory;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param2: javax.inject.Provider<zendesk.support.RequestProvider>, param3: javax.inject.Provider<zendesk.support.UploadProvider>);
			public get(): zendesk.support.ProviderStore;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideRequestProviderFactory extends dagger.internal.Factory<zendesk.support.RequestProvider> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideRequestProviderFactory>;
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.core.AuthenticationProvider>, param3: javax.inject.Provider<zendesk.support.ZendeskRequestService>, param4: javax.inject.Provider<zendesk.support.RequestStorage>, param5: javax.inject.Provider<zendesk.support.RequestSessionCache>, param6: javax.inject.Provider<zendesk.support.ZendeskTracker>, param7: javax.inject.Provider<zendesk.support.SupportSdkMetadata>, param8: javax.inject.Provider<zendesk.support.SupportBlipsProvider>): zendesk.support.ProviderModule_ProvideRequestProviderFactory;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.core.AuthenticationProvider>, param3: javax.inject.Provider<zendesk.support.ZendeskRequestService>, param4: javax.inject.Provider<zendesk.support.RequestStorage>, param5: javax.inject.Provider<zendesk.support.RequestSessionCache>, param6: javax.inject.Provider<zendesk.support.ZendeskTracker>, param7: javax.inject.Provider<zendesk.support.SupportSdkMetadata>, param8: javax.inject.Provider<zendesk.support.SupportBlipsProvider>);
			public get(): any;
			public static provideRequestProvider(param0: zendesk.support.ProviderModule, param1: zendesk.support.SupportSettingsProvider, param2: zendesk.core.AuthenticationProvider, param3: any, param4: any, param5: any, param6: any, param7: any, param8: zendesk.support.SupportBlipsProvider): zendesk.support.RequestProvider;
			public get(): zendesk.support.RequestProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideSdkSettingsProviderFactory extends dagger.internal.Factory<zendesk.support.SupportSettingsProvider> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideSdkSettingsProviderFactory>;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.core.SettingsProvider>, param2: javax.inject.Provider<java.util.Locale>, param3: javax.inject.Provider<zendesk.core.ZendeskLocaleConverter>);
			public get(): any;
			public get(): zendesk.support.SupportSettingsProvider;
			public static provideSdkSettingsProvider(param0: zendesk.support.ProviderModule, param1: zendesk.core.SettingsProvider, param2: java.util.Locale, param3: zendesk.core.ZendeskLocaleConverter): zendesk.support.SupportSettingsProvider;
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.core.SettingsProvider>, param2: javax.inject.Provider<java.util.Locale>, param3: javax.inject.Provider<zendesk.core.ZendeskLocaleConverter>): zendesk.support.ProviderModule_ProvideSdkSettingsProviderFactory;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideSupportBlipsProviderFactory extends dagger.internal.Factory<zendesk.support.SupportBlipsProvider> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideSupportBlipsProviderFactory>;
			public static provideSupportBlipsProvider(param0: zendesk.support.ProviderModule, param1: zendesk.core.BlipsProvider, param2: java.util.Locale): zendesk.support.SupportBlipsProvider;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.core.BlipsProvider>, param2: javax.inject.Provider<java.util.Locale>);
			public get(): any;
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.core.BlipsProvider>, param2: javax.inject.Provider<java.util.Locale>): zendesk.support.ProviderModule_ProvideSupportBlipsProviderFactory;
			public get(): zendesk.support.SupportBlipsProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideSupportModuleFactory extends dagger.internal.Factory<zendesk.support.SupportModule> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideSupportModuleFactory>;
			public get(): any;
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.RequestProvider>, param2: javax.inject.Provider<zendesk.support.UploadProvider>, param3: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param4: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param5: javax.inject.Provider<zendesk.core.RestServiceProvider>, param6: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param7: javax.inject.Provider<zendesk.support.ZendeskTracker>, param8: javax.inject.Provider<zendesk.support.ArticleVoteStorage>): zendesk.support.ProviderModule_ProvideSupportModuleFactory;
			public static provideSupportModule(param0: zendesk.support.ProviderModule, param1: zendesk.support.RequestProvider, param2: zendesk.support.UploadProvider, param3: zendesk.support.HelpCenterProvider, param4: zendesk.support.SupportSettingsProvider, param5: zendesk.core.RestServiceProvider, param6: zendesk.support.SupportBlipsProvider, param7: any, param8: zendesk.support.ArticleVoteStorage): zendesk.support.SupportModule;
			public get(): zendesk.support.SupportModule;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.RequestProvider>, param2: javax.inject.Provider<zendesk.support.UploadProvider>, param3: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param4: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param5: javax.inject.Provider<zendesk.core.RestServiceProvider>, param6: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param7: javax.inject.Provider<zendesk.support.ZendeskTracker>, param8: javax.inject.Provider<zendesk.support.ArticleVoteStorage>);
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideUploadProviderFactory extends dagger.internal.Factory<zendesk.support.UploadProvider> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideUploadProviderFactory>;
			public static provideUploadProvider(param0: zendesk.support.ProviderModule, param1: any): zendesk.support.UploadProvider;
			public constructor(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.ZendeskUploadService>);
			public get(): any;
			public get(): zendesk.support.UploadProvider;
			public static create(param0: zendesk.support.ProviderModule, param1: javax.inject.Provider<zendesk.support.ZendeskUploadService>): zendesk.support.ProviderModule_ProvideUploadProviderFactory;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_ProvideZendeskLocaleConverterFactory extends dagger.internal.Factory<zendesk.core.ZendeskLocaleConverter> {
			public static class: java.lang.Class<zendesk.support.ProviderModule_ProvideZendeskLocaleConverterFactory>;
			public get(): any;
			public get(): zendesk.core.ZendeskLocaleConverter;
			public static create(param0: zendesk.support.ProviderModule): zendesk.support.ProviderModule_ProvideZendeskLocaleConverterFactory;
			public constructor(param0: zendesk.support.ProviderModule);
			public static provideZendeskLocaleConverter(param0: zendesk.support.ProviderModule): zendesk.core.ZendeskLocaleConverter;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderModule_Proxy {
			public static class: java.lang.Class<zendesk.support.ProviderModule_Proxy>;
			public static newInstance(): zendesk.support.ProviderModule;
		}
	}
}

declare module zendesk {
	export module support {
		export class ProviderStore {
			public static class: java.lang.Class<zendesk.support.ProviderStore>;
			/**
			 * Constructs a new instance of the zendesk.support.ProviderStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				helpCenterProvider(): zendesk.support.HelpCenterProvider;
				requestProvider(): zendesk.support.RequestProvider;
				uploadProvider(): zendesk.support.UploadProvider;
			});
			public constructor();
			public helpCenterProvider(): zendesk.support.HelpCenterProvider;
			public requestProvider(): zendesk.support.RequestProvider;
			public uploadProvider(): zendesk.support.UploadProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class RawTicketField {
			public static class: java.lang.Class<zendesk.support.RawTicketField>;
		}
	}
}

declare module zendesk {
	export module support {
		export class RawTicketFieldOption {
			public static class: java.lang.Class<zendesk.support.RawTicketFieldOption>;
			public static create(param0: zendesk.support.RawTicketFieldOption): zendesk.support.TicketFieldOption;
		}
	}
}

declare module zendesk {
	export module support {
		export class RawTicketFieldSystemOption {
			public static class: java.lang.Class<zendesk.support.RawTicketFieldSystemOption>;
		}
	}
}

declare module zendesk {
	export module support {
		export class RawTicketForm {
			public static class: java.lang.Class<zendesk.support.RawTicketForm>;
			public static create(param0: zendesk.support.RawTicketForm, param1: java.util.List<zendesk.support.TicketField>): zendesk.support.TicketForm;
		}
	}
}

declare module zendesk {
	export module support {
		export class RawTicketFormResponse {
			public static class: java.lang.Class<zendesk.support.RawTicketFormResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class RecordArticleViewRequest {
			public static class: java.lang.Class<zendesk.support.RecordArticleViewRequest>;
		}
	}
}

declare module zendesk {
	export module support {
		export class Request {
			public static class: java.lang.Class<zendesk.support.Request>;
			public getCommentCount(): java.lang.Integer;
			public getFirstComment(): zendesk.support.Comment;
			public getUrl(): string;
			public getDueAt(): java.util.Date;
			public getRequesterId(): java.lang.Long;
			public getLastCommentingAgents(): java.util.List<zendesk.support.User>;
			public getCreatedAt(): java.util.Date;
			public getStatus(): zendesk.support.RequestStatus;
			public constructor();
			public getUpdatedAt(): java.util.Date;
			public getCustomFields(): java.util.List<zendesk.support.CustomField>;
			public getOrganizationId(): java.lang.Long;
			public setComment(param0: zendesk.support.EndUserComment): void;
			public getId(): string;
			public getSubject(): string;
			public getPriority(): string;
			public getPublicUpdatedAt(): java.util.Date;
			public getLastComment(): zendesk.support.Comment;
			public getDescription(): string;
			public getCollaboratorIds(): java.util.List<java.lang.Long>;
			public getType(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestData {
			public static class: java.lang.Class<zendesk.support.RequestData>;
			public equals(param0: any): boolean;
			public toString(): string;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestDataList {
			public static class: java.lang.Class<zendesk.support.RequestDataList>;
			public equals(param0: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestMigrator {
			public static class: java.lang.Class<zendesk.support.RequestMigrator>;
			/**
			 * Constructs a new instance of the zendesk.support.RequestMigrator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getLegacyRequests(): java.util.List<zendesk.support.RequestData>;
				clearLegacyRequestStorage(): void;
			});
			public constructor();
			public clearLegacyRequestStorage(): void;
			public getLegacyRequests(): java.util.List<zendesk.support.RequestData>;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestProvider {
			public static class: java.lang.Class<zendesk.support.RequestProvider>;
			/**
			 * Constructs a new instance of the zendesk.support.RequestProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createRequest(param0: zendesk.support.CreateRequest, param1: zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
				getAllRequests(param0: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Request>>): void;
				getRequests(param0: string, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Request>>): void;
				getComments(param0: string, param1: zendesk.service.ZendeskCallback<zendesk.support.CommentsResponse>): void;
				getCommentsSince(param0: string, param1: java.util.Date, param2: boolean, param3: zendesk.service.ZendeskCallback<zendesk.support.CommentsResponse>): void;
				addComment(param0: string, param1: zendesk.support.EndUserComment, param2: zendesk.service.ZendeskCallback<zendesk.support.Comment>): void;
				getRequest(param0: string, param1: zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
				getTicketFormsById(param0: java.util.List<java.lang.Long>, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.TicketForm>>): void;
				getUpdatesForDevice(param0: zendesk.service.ZendeskCallback<zendesk.support.RequestUpdates>): void;
				markRequestAsRead(param0: string, param1: number): void;
				markRequestAsUnread(param0: string): void;
			});
			public constructor();
			public createRequest(param0: zendesk.support.CreateRequest, param1: zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
			public getCommentsSince(param0: string, param1: java.util.Date, param2: boolean, param3: zendesk.service.ZendeskCallback<zendesk.support.CommentsResponse>): void;
			public getUpdatesForDevice(param0: zendesk.service.ZendeskCallback<zendesk.support.RequestUpdates>): void;
			public addComment(param0: string, param1: zendesk.support.EndUserComment, param2: zendesk.service.ZendeskCallback<zendesk.support.Comment>): void;
			public getComments(param0: string, param1: zendesk.service.ZendeskCallback<zendesk.support.CommentsResponse>): void;
			public getTicketFormsById(param0: java.util.List<java.lang.Long>, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.TicketForm>>): void;
			public markRequestAsRead(param0: string, param1: number): void;
			public markRequestAsUnread(param0: string): void;
			public getRequests(param0: string, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Request>>): void;
			public getAllRequests(param0: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Request>>): void;
			public getRequest(param0: string, param1: zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestResponse {
			public static class: java.lang.Class<zendesk.support.RequestResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestService {
			public static class: java.lang.Class<zendesk.support.RequestService>;
			/**
			 * Constructs a new instance of the zendesk.support.RequestService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createRequest(param0: string, param1: zendesk.support.CreateRequestWrapper): retrofit2.Call<zendesk.support.RequestResponse>;
				getAllRequests(param0: string, param1: string): retrofit2.Call<zendesk.support.RequestsResponse>;
				getManyRequests(param0: string, param1: string, param2: string): retrofit2.Call<zendesk.support.RequestsResponse>;
				getComments(param0: string): retrofit2.Call<zendesk.support.CommentsResponse>;
				getCommentsSince(param0: string, param1: string, param2: string): retrofit2.Call<zendesk.support.CommentsResponse>;
				addComment(param0: string, param1: zendesk.support.UpdateRequestWrapper): retrofit2.Call<zendesk.support.RequestResponse>;
				getRequest(param0: string, param1: string): retrofit2.Call<zendesk.support.RequestResponse>;
				getTicketFormsById(param0: string, param1: string): retrofit2.Call<zendesk.support.RawTicketFormResponse>;
			});
			public constructor();
			public getCommentsSince(param0: string, param1: string, param2: string): retrofit2.Call<zendesk.support.CommentsResponse>;
			public getManyRequests(param0: string, param1: string, param2: string): retrofit2.Call<zendesk.support.RequestsResponse>;
			public getRequest(param0: string, param1: string): retrofit2.Call<zendesk.support.RequestResponse>;
			public getTicketFormsById(param0: string, param1: string): retrofit2.Call<zendesk.support.RawTicketFormResponse>;
			public getComments(param0: string): retrofit2.Call<zendesk.support.CommentsResponse>;
			public addComment(param0: string, param1: zendesk.support.UpdateRequestWrapper): retrofit2.Call<zendesk.support.RequestResponse>;
			public getAllRequests(param0: string, param1: string): retrofit2.Call<zendesk.support.RequestsResponse>;
			public createRequest(param0: string, param1: zendesk.support.CreateRequestWrapper): retrofit2.Call<zendesk.support.RequestResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestSessionCache {
			public static class: java.lang.Class<zendesk.support.RequestSessionCache>;
			/**
			 * Constructs a new instance of the zendesk.support.RequestSessionCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				updateTicketFormCache(param0: java.util.List<zendesk.support.TicketForm>): void;
				getTicketFormsById(param0: java.util.List<java.lang.Long>): java.util.List<zendesk.support.TicketForm>;
				containsAllTicketForms(param0: java.util.List<java.lang.Long>): boolean;
			});
			public constructor();
			public updateTicketFormCache(param0: java.util.List<zendesk.support.TicketForm>): void;
			public getTicketFormsById(param0: java.util.List<java.lang.Long>): java.util.List<zendesk.support.TicketForm>;
			public containsAllTicketForms(param0: java.util.List<java.lang.Long>): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestStatus {
			public static class: java.lang.Class<zendesk.support.RequestStatus>;
			public static New: zendesk.support.RequestStatus;
			public static Open: zendesk.support.RequestStatus;
			public static Pending: zendesk.support.RequestStatus;
			public static Hold: zendesk.support.RequestStatus;
			public static Solved: zendesk.support.RequestStatus;
			public static Closed: zendesk.support.RequestStatus;
			public static values(): native.Array<zendesk.support.RequestStatus>;
			public static valueOf(param0: string): zendesk.support.RequestStatus;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestStorage {
			public static class: java.lang.Class<zendesk.support.RequestStorage>;
			/**
			 * Constructs a new instance of the zendesk.support.RequestStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				storeRequestData(param0: java.util.List<zendesk.support.RequestData>): void;
				getRequestData(): java.util.List<zendesk.support.RequestData>;
				isRequestDataExpired(): boolean;
				updateRequestData(param0: java.util.List<zendesk.support.Request>): void;
				markRequestAsRead(param0: string, param1: number): void;
				markRequestAsUnread(param0: string): void;
			});
			public constructor();
			public storeRequestData(param0: java.util.List<zendesk.support.RequestData>): void;
			public getRequestData(): java.util.List<zendesk.support.RequestData>;
			public isRequestDataExpired(): boolean;
			public markRequestAsRead(param0: string, param1: number): void;
			public markRequestAsUnread(param0: string): void;
			public updateRequestData(param0: java.util.List<zendesk.support.Request>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestUpdates {
			public static class: java.lang.Class<zendesk.support.RequestUpdates>;
			public getRequestUpdates(): java.util.Map<string,java.lang.Integer>;
			public totalUpdates(): number;
			public isRequestUnread(param0: string): boolean;
			public constructor(param0: java.util.Map<string,java.lang.Integer>);
			public hasUpdatedRequests(): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class RequestsResponse extends zendesk.support.ResponseWrapper {
			public static class: java.lang.Class<zendesk.support.RequestsResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export abstract class ResponseWrapper {
			public static class: java.lang.Class<zendesk.support.ResponseWrapper>;
			public getCount(): java.lang.Integer;
			public constructor();
			public getNextPage(): string;
			public getPreviousPage(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class SdkDependencyProvider {
			public static class: java.lang.Class<zendesk.support.SdkDependencyProvider>;
			public static INSTANCE: zendesk.support.SdkDependencyProvider;
			public static NOT_INITIALIZED_LOG: string;
			public static values(): native.Array<zendesk.support.SdkDependencyProvider>;
			public static valueOf(param0: string): zendesk.support.SdkDependencyProvider;
			public provideSupportSdkComponent(): zendesk.support.SupportSdkComponent;
			public isInitialized(): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class SdkDependencyProvider_MembersInjector extends dagger.MembersInjector<zendesk.support.SdkDependencyProvider> {
			public static class: java.lang.Class<zendesk.support.SdkDependencyProvider_MembersInjector>;
			public injectMembers(param0: any): void;
			public injectMembers(param0: zendesk.support.SdkDependencyProvider): void;
			public static injectActionHandlers(param0: zendesk.support.SdkDependencyProvider, param1: java.util.List<zendesk.core.ActionHandler>): void;
			public constructor(param0: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param1: javax.inject.Provider<java.util.List<zendesk.core.ActionHandler>>);
			public static create(param0: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param1: javax.inject.Provider<java.util.List<zendesk.core.ActionHandler>>): dagger.MembersInjector<zendesk.support.SdkDependencyProvider>;
			public static injectRegistry(param0: zendesk.support.SdkDependencyProvider, param1: zendesk.core.ActionHandlerRegistry): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class SearchArticle {
			public static class: java.lang.Class<zendesk.support.SearchArticle>;
			public getCategory(): zendesk.support.Category;
			public getSection(): zendesk.support.Section;
			public getArticle(): zendesk.support.Article;
			public constructor(param0: zendesk.support.Article, param1: zendesk.support.Section, param2: zendesk.support.Category);
		}
	}
}

declare module zendesk {
	export module support {
		export class Section {
			public static class: java.lang.Class<zendesk.support.Section>;
			public getCategoryId(): java.lang.Long;
			public getUrl(): string;
			public isOutdated(): boolean;
			public getArticlesCount(): number;
			public getCreatedAt(): java.util.Date;
			public getPosition(): number;
			public constructor();
			public getUpdatedAt(): java.util.Date;
			public getLocale(): string;
			public getSorting(): string;
			public getName(): string;
			public getId(): java.lang.Long;
			public getSourceLocale(): string;
			public getDescription(): string;
			public getHtmlUrl(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class SectionItem extends zendesk.support.HelpItem {
			public static class: java.lang.Class<zendesk.support.SectionItem>;
			public addArticle(param0: zendesk.support.ArticleItem): void;
			public equals(param0: any): boolean;
			public getName(): string;
			public getChildren(): java.util.List<zendesk.support.HelpItem>;
			public getId(): java.lang.Long;
			public getParentId(): java.lang.Long;
			public getTotalArticlesCount(): number;
			public constructor();
			public getViewType(): number;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class SectionResponse {
			public static class: java.lang.Class<zendesk.support.SectionResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SectionsResponse {
			public static class: java.lang.Class<zendesk.support.SectionsResponse>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SeeAllArticlesItem extends zendesk.support.HelpItem {
			public static class: java.lang.Class<zendesk.support.SeeAllArticlesItem>;
			public equals(param0: any): boolean;
			public getName(): string;
			public constructor(param0: zendesk.support.SectionItem);
			public getId(): java.lang.Long;
			public getParentId(): java.lang.Long;
			public getSection(): zendesk.support.SectionItem;
			public setLoading(param0: boolean): void;
			public isLoading(): boolean;
			public getViewType(): number;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule {
			public static class: java.lang.Class<zendesk.support.ServiceModule>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvideCustomNetworkConfigFactory extends dagger.internal.Factory<zendesk.support.HelpCenterCachingNetworkConfig> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvideCustomNetworkConfigFactory>;
			public get(): zendesk.support.HelpCenterCachingNetworkConfig;
			public get(): any;
			public constructor(param0: javax.inject.Provider<zendesk.support.HelpCenterCachingInterceptor>);
			public static create(param0: javax.inject.Provider<zendesk.support.HelpCenterCachingInterceptor>): zendesk.support.ServiceModule_ProvideCustomNetworkConfigFactory;
			public static provideCustomNetworkConfig(param0: any): zendesk.support.HelpCenterCachingNetworkConfig;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvideHelpCenterCachingInterceptorFactory extends dagger.internal.Factory<zendesk.support.HelpCenterCachingInterceptor> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvideHelpCenterCachingInterceptorFactory>;
			public static provideHelpCenterCachingInterceptor(): zendesk.support.HelpCenterCachingInterceptor;
			public get(): any;
			public constructor();
			public get(): zendesk.support.HelpCenterCachingInterceptor;
			public static create(): zendesk.support.ServiceModule_ProvideHelpCenterCachingInterceptorFactory;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvideZendeskHelpCenterServiceFactory extends dagger.internal.Factory<zendesk.support.ZendeskHelpCenterService> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvideZendeskHelpCenterServiceFactory>;
			public static create(param0: javax.inject.Provider<zendesk.support.HelpCenterService>, param1: javax.inject.Provider<zendesk.core.ZendeskLocaleConverter>): zendesk.support.ServiceModule_ProvideZendeskHelpCenterServiceFactory;
			public get(): any;
			public constructor(param0: javax.inject.Provider<zendesk.support.HelpCenterService>, param1: javax.inject.Provider<zendesk.core.ZendeskLocaleConverter>);
			public get(): zendesk.support.ZendeskHelpCenterService;
			public static provideZendeskHelpCenterService(param0: any, param1: zendesk.core.ZendeskLocaleConverter): zendesk.support.ZendeskHelpCenterService;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvideZendeskRequestServiceFactory extends dagger.internal.Factory<zendesk.support.ZendeskRequestService> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvideZendeskRequestServiceFactory>;
			public static create(param0: javax.inject.Provider<zendesk.support.RequestService>): zendesk.support.ServiceModule_ProvideZendeskRequestServiceFactory;
			public constructor(param0: javax.inject.Provider<zendesk.support.RequestService>);
			public get(): any;
			public get(): zendesk.support.ZendeskRequestService;
			public static provideZendeskRequestService(param0: any): zendesk.support.ZendeskRequestService;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvideZendeskUploadServiceFactory extends dagger.internal.Factory<zendesk.support.ZendeskUploadService> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvideZendeskUploadServiceFactory>;
			public constructor(param0: javax.inject.Provider<zendesk.support.UploadService>);
			public static provideZendeskUploadService(param0: any): zendesk.support.ZendeskUploadService;
			public get(): any;
			public static create(param0: javax.inject.Provider<zendesk.support.UploadService>): zendesk.support.ServiceModule_ProvideZendeskUploadServiceFactory;
			public get(): zendesk.support.ZendeskUploadService;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvidesHelpCenterServiceFactory extends dagger.internal.Factory<zendesk.support.HelpCenterService> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvidesHelpCenterServiceFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.RestServiceProvider>, param1: javax.inject.Provider<zendesk.support.HelpCenterCachingNetworkConfig>): zendesk.support.ServiceModule_ProvidesHelpCenterServiceFactory;
			public get(): any;
			public get(): zendesk.support.HelpCenterService;
			public constructor(param0: javax.inject.Provider<zendesk.core.RestServiceProvider>, param1: javax.inject.Provider<zendesk.support.HelpCenterCachingNetworkConfig>);
			public static providesHelpCenterService(param0: zendesk.core.RestServiceProvider, param1: any): zendesk.support.HelpCenterService;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvidesRequestServiceFactory extends dagger.internal.Factory<zendesk.support.RequestService> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvidesRequestServiceFactory>;
			public get(): zendesk.support.RequestService;
			public static providesRequestService(param0: zendesk.core.RestServiceProvider): zendesk.support.RequestService;
			public get(): any;
			public constructor(param0: javax.inject.Provider<zendesk.core.RestServiceProvider>);
			public static create(param0: javax.inject.Provider<zendesk.core.RestServiceProvider>): zendesk.support.ServiceModule_ProvidesRequestServiceFactory;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_ProvidesUploadServiceFactory extends dagger.internal.Factory<zendesk.support.UploadService> {
			public static class: java.lang.Class<zendesk.support.ServiceModule_ProvidesUploadServiceFactory>;
			public static create(param0: javax.inject.Provider<zendesk.core.RestServiceProvider>): zendesk.support.ServiceModule_ProvidesUploadServiceFactory;
			public static providesUploadService(param0: zendesk.core.RestServiceProvider): zendesk.support.UploadService;
			public get(): any;
			public constructor(param0: javax.inject.Provider<zendesk.core.RestServiceProvider>);
			public get(): zendesk.support.UploadService;
		}
	}
}

declare module zendesk {
	export module support {
		export class ServiceModule_Proxy {
			public static class: java.lang.Class<zendesk.support.ServiceModule_Proxy>;
			public static newInstance(): zendesk.support.ServiceModule;
		}
	}
}

declare module zendesk {
	export module support {
		export class SimpleArticle {
			public static class: java.lang.Class<zendesk.support.SimpleArticle>;
			public getTitle(): string;
			public getId(): java.lang.Long;
			public constructor(param0: java.lang.Long, param1: string);
		}
	}
}

declare module zendesk {
	export module support {
		export class SortBy {
			public static class: java.lang.Class<zendesk.support.SortBy>;
			public static POSITION: zendesk.support.SortBy;
			public static TITLE: zendesk.support.SortBy;
			public static CREATED_AT: zendesk.support.SortBy;
			public static UPDATED_AT: zendesk.support.SortBy;
			public static valueOf(param0: string): zendesk.support.SortBy;
			public static values(): native.Array<zendesk.support.SortBy>;
			public getApiValue(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class SortOrder {
			public static class: java.lang.Class<zendesk.support.SortOrder>;
			public static ASCENDING: zendesk.support.SortOrder;
			public static DESCENDING: zendesk.support.SortOrder;
			public static values(): native.Array<zendesk.support.SortOrder>;
			public static valueOf(param0: string): zendesk.support.SortOrder;
			public getApiValue(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule {
			public static class: java.lang.Class<zendesk.support.StorageModule>;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule_ProvideArticleVoteStorageFactory extends dagger.internal.Factory<zendesk.support.ArticleVoteStorage> {
			public static class: java.lang.Class<zendesk.support.StorageModule_ProvideArticleVoteStorageFactory>;
			public constructor(param0: zendesk.support.StorageModule, param1: javax.inject.Provider<zendesk.core.SessionStorage>);
			public static create(param0: zendesk.support.StorageModule, param1: javax.inject.Provider<zendesk.core.SessionStorage>): zendesk.support.StorageModule_ProvideArticleVoteStorageFactory;
			public get(): any;
			public get(): zendesk.support.ArticleVoteStorage;
			public static provideArticleVoteStorage(param0: zendesk.support.StorageModule, param1: zendesk.core.SessionStorage): zendesk.support.ArticleVoteStorage;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule_ProvideHelpCenterSessionCacheFactory extends dagger.internal.Factory<zendesk.support.HelpCenterSessionCache> {
			public static class: java.lang.Class<zendesk.support.StorageModule_ProvideHelpCenterSessionCacheFactory>;
			public get(): any;
			public static provideHelpCenterSessionCache(param0: zendesk.support.StorageModule): zendesk.support.HelpCenterSessionCache;
			public constructor(param0: zendesk.support.StorageModule);
			public get(): zendesk.support.HelpCenterSessionCache;
			public static create(param0: zendesk.support.StorageModule): zendesk.support.StorageModule_ProvideHelpCenterSessionCacheFactory;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule_ProvideRequestMigratorFactory extends dagger.internal.Factory<zendesk.support.RequestMigrator> {
			public static class: java.lang.Class<zendesk.support.StorageModule_ProvideRequestMigratorFactory>;
			public static create(param0: zendesk.support.StorageModule, param1: javax.inject.Provider<globalAndroid.content.Context>): zendesk.support.StorageModule_ProvideRequestMigratorFactory;
			public get(): zendesk.support.RequestMigrator;
			public get(): any;
			public constructor(param0: zendesk.support.StorageModule, param1: javax.inject.Provider<globalAndroid.content.Context>);
			public static provideRequestMigrator(param0: zendesk.support.StorageModule, param1: globalAndroid.content.Context): zendesk.support.RequestMigrator;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule_ProvideRequestSessionCacheFactory extends dagger.internal.Factory<zendesk.support.RequestSessionCache> {
			public static class: java.lang.Class<zendesk.support.StorageModule_ProvideRequestSessionCacheFactory>;
			public static create(param0: zendesk.support.StorageModule): zendesk.support.StorageModule_ProvideRequestSessionCacheFactory;
			public get(): zendesk.support.RequestSessionCache;
			public get(): any;
			public constructor(param0: zendesk.support.StorageModule);
			public static provideRequestSessionCache(param0: zendesk.support.StorageModule): zendesk.support.RequestSessionCache;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule_ProvideRequestStorageFactory extends dagger.internal.Factory<zendesk.support.RequestStorage> {
			public static class: java.lang.Class<zendesk.support.StorageModule_ProvideRequestStorageFactory>;
			public get(): any;
			public constructor(param0: zendesk.support.StorageModule, param1: javax.inject.Provider<zendesk.core.SessionStorage>, param2: javax.inject.Provider<zendesk.support.RequestMigrator>, param3: javax.inject.Provider<zendesk.core.MemoryCache>);
			public get(): zendesk.support.RequestStorage;
			public static create(param0: zendesk.support.StorageModule, param1: javax.inject.Provider<zendesk.core.SessionStorage>, param2: javax.inject.Provider<zendesk.support.RequestMigrator>, param3: javax.inject.Provider<zendesk.core.MemoryCache>): zendesk.support.StorageModule_ProvideRequestStorageFactory;
			public static provideRequestStorage(param0: zendesk.support.StorageModule, param1: zendesk.core.SessionStorage, param2: any, param3: zendesk.core.MemoryCache): zendesk.support.RequestStorage;
		}
	}
}

declare module zendesk {
	export module support {
		export class StorageModule_Proxy {
			public static class: java.lang.Class<zendesk.support.StorageModule_Proxy>;
			public static newInstance(): zendesk.support.StorageModule;
		}
	}
}

declare module zendesk {
	export module support {
		export class Streams {
			public static class: java.lang.Class<zendesk.support.Streams>;
			public static closeQuietly(param0: java.io.Closeable): void;
			public static toJson(param0: com.google.gson.Gson, param1: okio.Sink, param2: any): void;
			public constructor();
			public static fromJson(param0: com.google.gson.Gson, param1: okio.Source, param2: java.lang.reflect.Type): any;
			public static toWriter(param0: okio.Sink): java.io.Writer;
			public static use(param0: java.io.Closeable, param1: zendesk.support.Streams.Use<any,any>): any;
			public static toReader(param0: okio.Source): java.io.Reader;
		}
		export module Streams {
			export class Use<R, P>  extends java.lang.Object {
				public static class: java.lang.Class<zendesk.support.Streams.Use<any,any>>;
				/**
				 * Constructs a new instance of the zendesk.support.Streams$Use interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					use(param0: P): R;
				});
				public constructor();
				public use(param0: P): R;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class SuggestedArticleResponse {
			public static class: java.lang.Class<zendesk.support.SuggestedArticleResponse>;
			public getResults(): java.util.List<zendesk.support.SimpleArticle>;
			public constructor();
		}
	}
}

declare module zendesk {
	export module support {
		export class SuggestedArticleSearch {
			public static class: java.lang.Class<zendesk.support.SuggestedArticleSearch>;
			public getLabelNames(): string;
			public getCategoryId(): java.lang.Long;
			public getQuery(): string;
			public getSectionId(): java.lang.Long;
			public getLocale(): java.util.Locale;
		}
		export module SuggestedArticleSearch {
			export class Builder {
				public static class: java.lang.Class<zendesk.support.SuggestedArticleSearch.Builder>;
				public withSectionId(param0: java.lang.Long): zendesk.support.SuggestedArticleSearch.Builder;
				public withQuery(param0: string): zendesk.support.SuggestedArticleSearch.Builder;
				public forLocale(param0: java.util.Locale): zendesk.support.SuggestedArticleSearch.Builder;
				public withLabelNames(param0: native.Array<string>): zendesk.support.SuggestedArticleSearch.Builder;
				public withCategoryId(param0: java.lang.Long): zendesk.support.SuggestedArticleSearch.Builder;
				public build(): zendesk.support.SuggestedArticleSearch;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class Support {
			public static class: java.lang.Class<zendesk.support.Support>;
			public static INSTANCE: zendesk.support.Support;
			public provider(): zendesk.support.ProviderStore;
			public setHelpCenterLocaleOverride(param0: java.util.Locale): void;
			public static values(): native.Array<zendesk.support.Support>;
			public refreshRequest(param0: string, param1: globalAndroid.content.Context): boolean;
			public init(param0: zendesk.core.Zendesk): void;
			public static valueOf(param0: string): zendesk.support.Support;
			public getHelpCenterLocaleOverride(): java.util.Locale;
			public isInitialized(): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportApplicationModule {
			public static class: java.lang.Class<zendesk.support.SupportApplicationModule>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportApplicationModule_ProvideLocaleFactory extends dagger.internal.Factory<java.util.Locale> {
			public static class: java.lang.Class<zendesk.support.SupportApplicationModule_ProvideLocaleFactory>;
			public static create(param0: zendesk.support.SupportApplicationModule): zendesk.support.SupportApplicationModule_ProvideLocaleFactory;
			public get(): java.util.Locale;
			public get(): any;
			public constructor(param0: zendesk.support.SupportApplicationModule);
			public static provideLocale(param0: zendesk.support.SupportApplicationModule): java.util.Locale;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportApplicationModule_ProvideMetadataFactory extends dagger.internal.Factory<zendesk.support.SupportSdkMetadata> {
			public static class: java.lang.Class<zendesk.support.SupportApplicationModule_ProvideMetadataFactory>;
			public constructor(param0: zendesk.support.SupportApplicationModule, param1: javax.inject.Provider<globalAndroid.content.Context>);
			public static provideMetadata(param0: zendesk.support.SupportApplicationModule, param1: globalAndroid.content.Context): zendesk.support.SupportSdkMetadata;
			public get(): any;
			public static create(param0: zendesk.support.SupportApplicationModule, param1: javax.inject.Provider<globalAndroid.content.Context>): zendesk.support.SupportApplicationModule_ProvideMetadataFactory;
			public get(): zendesk.support.SupportSdkMetadata;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportApplicationModule_ProvidesZendeskTrackerFactory extends dagger.internal.Factory<zendesk.support.ZendeskTracker> {
			public static class: java.lang.Class<zendesk.support.SupportApplicationModule_ProvidesZendeskTrackerFactory>;
			public get(): any;
			public constructor(param0: zendesk.support.SupportApplicationModule);
			public get(): zendesk.support.ZendeskTracker;
			public static providesZendeskTracker(param0: zendesk.support.SupportApplicationModule): zendesk.support.ZendeskTracker;
			public static create(param0: zendesk.support.SupportApplicationModule): zendesk.support.SupportApplicationModule_ProvidesZendeskTrackerFactory;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportBlipsProvider {
			public static class: java.lang.Class<zendesk.support.SupportBlipsProvider>;
			/**
			 * Constructs a new instance of the zendesk.support.SupportBlipsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				supportSdkInit(): void;
				requestCreated(param0: string): void;
				requestUpdated(param0: string): void;
				requestViewed(param0: string): void;
				requestListViewed(): void;
				helpCenterSearch(param0: string): void;
				articleView(param0: zendesk.support.Article): void;
				articleVote(param0: java.lang.Long, param1: number): void;
			});
			public constructor();
			public requestListViewed(): void;
			public requestCreated(param0: string): void;
			public articleView(param0: zendesk.support.Article): void;
			public requestViewed(param0: string): void;
			public articleVote(param0: java.lang.Long, param1: number): void;
			public supportSdkInit(): void;
			public requestUpdated(param0: string): void;
			public helpCenterSearch(param0: string): void;
		}
		export module SupportBlipsProvider {
			export class ArticleVote {
				public static class: java.lang.Class<zendesk.support.SupportBlipsProvider.ArticleVote>;
				/**
				 * Constructs a new instance of the zendesk.support.SupportBlipsProvider$ArticleVote interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static ARTICLE_VOTE_DOWN: number;
				public static ARTICLE_VOTE_UP: number;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule {
			public static class: java.lang.Class<zendesk.support.SupportModule>;
			public constructor(param0: zendesk.support.RequestProvider, param1: zendesk.support.UploadProvider, param2: zendesk.support.HelpCenterProvider, param3: zendesk.support.SupportSettingsProvider, param4: zendesk.support.SupportBlipsProvider, param5: okhttp3.OkHttpClient, param6: zendesk.support.ZendeskTracker, param7: zendesk.support.ArticleVoteStorage);
			public getId(): java.util.UUID;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesArticleVoteStorageFactory extends dagger.internal.Factory<zendesk.support.ArticleVoteStorage> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesArticleVoteStorageFactory>;
			public constructor(param0: zendesk.support.SupportModule);
			public static create(param0: zendesk.support.SupportModule): zendesk.support.SupportModule_ProvidesArticleVoteStorageFactory;
			public get(): any;
			public get(): zendesk.support.ArticleVoteStorage;
			public static providesArticleVoteStorage(param0: zendesk.support.SupportModule): zendesk.support.ArticleVoteStorage;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesBlipsProviderFactory extends dagger.internal.Factory<zendesk.support.SupportBlipsProvider> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesBlipsProviderFactory>;
			public constructor(param0: zendesk.support.SupportModule);
			public static create(param0: zendesk.support.SupportModule): zendesk.support.SupportModule_ProvidesBlipsProviderFactory;
			public static providesBlipsProvider(param0: zendesk.support.SupportModule): zendesk.support.SupportBlipsProvider;
			public get(): any;
			public get(): zendesk.support.SupportBlipsProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesHelpCenterProviderFactory extends dagger.internal.Factory<zendesk.support.HelpCenterProvider> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesHelpCenterProviderFactory>;
			public get(): zendesk.support.HelpCenterProvider;
			public static create(param0: zendesk.support.SupportModule): zendesk.support.SupportModule_ProvidesHelpCenterProviderFactory;
			public constructor(param0: zendesk.support.SupportModule);
			public static providesHelpCenterProvider(param0: zendesk.support.SupportModule): zendesk.support.HelpCenterProvider;
			public get(): any;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesOkHttpClientFactory extends dagger.internal.Factory<okhttp3.OkHttpClient> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesOkHttpClientFactory>;
			public static create(param0: zendesk.support.SupportModule): zendesk.support.SupportModule_ProvidesOkHttpClientFactory;
			public constructor(param0: zendesk.support.SupportModule);
			public get(): any;
			public static providesOkHttpClient(param0: zendesk.support.SupportModule): okhttp3.OkHttpClient;
			public get(): okhttp3.OkHttpClient;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesRequestProviderFactory extends dagger.internal.Factory<zendesk.support.RequestProvider> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesRequestProviderFactory>;
			public constructor(param0: zendesk.support.SupportModule);
			public static create(param0: zendesk.support.SupportModule): zendesk.support.SupportModule_ProvidesRequestProviderFactory;
			public get(): any;
			public static providesRequestProvider(param0: zendesk.support.SupportModule): zendesk.support.RequestProvider;
			public get(): zendesk.support.RequestProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesSettingsProviderFactory extends dagger.internal.Factory<zendesk.support.SupportSettingsProvider> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesSettingsProviderFactory>;
			public static create(param0: zendesk.support.SupportModule): zendesk.support.SupportModule_ProvidesSettingsProviderFactory;
			public constructor(param0: zendesk.support.SupportModule);
			public static providesSettingsProvider(param0: zendesk.support.SupportModule): zendesk.support.SupportSettingsProvider;
			public get(): any;
			public get(): zendesk.support.SupportSettingsProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesUploadProviderFactory extends dagger.internal.Factory<zendesk.support.UploadProvider> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesUploadProviderFactory>;
			public constructor(param0: zendesk.support.SupportModule);
			public static providesUploadProvider(param0: zendesk.support.SupportModule): zendesk.support.UploadProvider;
			public static create(param0: zendesk.support.SupportModule): zendesk.support.SupportModule_ProvidesUploadProviderFactory;
			public get(): any;
			public get(): zendesk.support.UploadProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportModule_ProvidesZendeskTrackerFactory extends dagger.internal.Factory<zendesk.support.ZendeskTracker> {
			public static class: java.lang.Class<zendesk.support.SupportModule_ProvidesZendeskTrackerFactory>;
			public constructor(param0: zendesk.support.SupportModule);
			public static create(param0: zendesk.support.SupportModule): zendesk.support.SupportModule_ProvidesZendeskTrackerFactory;
			public static providesZendeskTracker(param0: zendesk.support.SupportModule): zendesk.support.ZendeskTracker;
			public get(): any;
			public get(): zendesk.support.ZendeskTracker;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkComponent {
			public static class: java.lang.Class<zendesk.support.SupportSdkComponent>;
			/**
			 * Constructs a new instance of the zendesk.support.SupportSdkComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				inject(param0: zendesk.support.guide.ViewArticleActivity): void;
				inject(param0: zendesk.support.guide.HelpCenterActivity): void;
				inject(param0: zendesk.support.guide.HelpCenterFragment): void;
				inject(param0: zendesk.support.SdkDependencyProvider): void;
				inject(param0: zendesk.support.DeepLinkingBroadcastReceiver): void;
				helpCenterProvider(): zendesk.support.HelpCenterProvider;
				plus(param0: zendesk.support.request.RequestModule): zendesk.support.request.RequestComponent;
				plus(param0: zendesk.support.requestlist.RequestListModule): zendesk.support.requestlist.RequestListComponent;
			});
			public constructor();
			public static SUPPORT_MAIN_THREAD_EXECUTOR: string;
			public plus(param0: zendesk.support.requestlist.RequestListModule): zendesk.support.requestlist.RequestListComponent;
			public plus(param0: zendesk.support.request.RequestModule): zendesk.support.request.RequestComponent;
			public inject(param0: zendesk.support.guide.HelpCenterActivity): void;
			public helpCenterProvider(): zendesk.support.HelpCenterProvider;
			public inject(param0: zendesk.support.SdkDependencyProvider): void;
			public inject(param0: zendesk.support.guide.ViewArticleActivity): void;
			public inject(param0: zendesk.support.DeepLinkingBroadcastReceiver): void;
			public inject(param0: zendesk.support.guide.HelpCenterFragment): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkMetadata {
			public static class: java.lang.Class<zendesk.support.SupportSdkMetadata>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_MainThreadExecutorFactory extends dagger.internal.Factory<java.util.concurrent.Executor> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_MainThreadExecutorFactory>;
			public constructor(param0: zendesk.support.SupportSdkModule);
			public get(): any;
			public get(): java.util.concurrent.Executor;
			public static mainThreadExecutor(param0: zendesk.support.SupportSdkModule): java.util.concurrent.Executor;
			public static create(param0: zendesk.support.SupportSdkModule): zendesk.support.SupportSdkModule_MainThreadExecutorFactory;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesActionHandlersFactory extends dagger.internal.Factory<java.util.List<zendesk.core.ActionHandler>> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesActionHandlersFactory>;
			public constructor(param0: zendesk.support.SupportSdkModule);
			public get(): java.util.List<zendesk.core.ActionHandler>;
			public get(): any;
			public static create(param0: zendesk.support.SupportSdkModule): zendesk.support.SupportSdkModule_ProvidesActionHandlersFactory;
			public static providesActionHandlers(param0: zendesk.support.SupportSdkModule): java.util.List<zendesk.core.ActionHandler>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesDeepLinkHelperFactory extends dagger.internal.Factory<zendesk.support.ZendeskDeepLinkHelper> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesDeepLinkHelperFactory>;
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param2: javax.inject.Provider<zendesk.support.ZendeskDeepLinkParser>): zendesk.support.SupportSdkModule_ProvidesDeepLinkHelperFactory;
			public get(): any;
			public static providesDeepLinkHelper(param0: zendesk.support.SupportSdkModule, param1: zendesk.core.ActionHandlerRegistry, param2: any): zendesk.support.ZendeskDeepLinkHelper;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param2: javax.inject.Provider<zendesk.support.ZendeskDeepLinkParser>);
			public get(): zendesk.support.ZendeskDeepLinkHelper;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesDeepLinkParserFactory extends dagger.internal.Factory<zendesk.support.ZendeskDeepLinkParser> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesDeepLinkParserFactory>;
			public static providesDeepLinkParser(param0: zendesk.support.SupportSdkModule, param1: string, param2: java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>): zendesk.support.ZendeskDeepLinkParser;
			public get(): zendesk.support.ZendeskDeepLinkParser;
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<string>, param2: javax.inject.Provider<java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>>): zendesk.support.SupportSdkModule_ProvidesDeepLinkParserFactory;
			public get(): any;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<string>, param2: javax.inject.Provider<java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>>);
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesFactory extends dagger.internal.Factory<com.google.gson.Gson> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesFactory>;
			public constructor(param0: zendesk.support.SupportSdkModule);
			public static provides(param0: zendesk.support.SupportSdkModule): com.google.gson.Gson;
			public static create(param0: zendesk.support.SupportSdkModule): zendesk.support.SupportSdkModule_ProvidesFactory;
			public get(): com.google.gson.Gson;
			public get(): any;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesParserModuleFactory extends dagger.internal.Factory<java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesParserModuleFactory>;
			public constructor(param0: zendesk.support.SupportSdkModule);
			public get(): any;
			public get(): java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>;
			public static providesParserModule(param0: zendesk.support.SupportSdkModule): java.util.List<zendesk.support.ZendeskDeepLinkParser.Module>;
			public static create(param0: zendesk.support.SupportSdkModule): zendesk.support.SupportSdkModule_ProvidesParserModuleFactory;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesPicassoFactory extends dagger.internal.Factory<com.sebchlan.picassocompat.PicassoCompat> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesPicassoFactory>;
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<globalAndroid.content.Context>, param2: javax.inject.Provider<okhttp3.OkHttpClient>, param3: javax.inject.Provider<java.util.concurrent.ExecutorService>): zendesk.support.SupportSdkModule_ProvidesPicassoFactory;
			public get(): any;
			public get(): com.sebchlan.picassocompat.PicassoCompat;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<globalAndroid.content.Context>, param2: javax.inject.Provider<okhttp3.OkHttpClient>, param3: javax.inject.Provider<java.util.concurrent.ExecutorService>);
			public static providesPicasso(param0: zendesk.support.SupportSdkModule, param1: globalAndroid.content.Context, param2: okhttp3.OkHttpClient, param3: java.util.concurrent.ExecutorService): com.sebchlan.picassocompat.PicassoCompat;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesRequestDiskLruCacheFactory extends dagger.internal.Factory<com.jakewharton.disklrucache.DiskLruCache> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesRequestDiskLruCacheFactory>;
			public static providesRequestDiskLruCache(param0: zendesk.support.SupportSdkModule, param1: zendesk.core.SessionStorage): com.jakewharton.disklrucache.DiskLruCache;
			public get(): any;
			public get(): com.jakewharton.disklrucache.DiskLruCache;
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.core.SessionStorage>): zendesk.support.SupportSdkModule_ProvidesRequestDiskLruCacheFactory;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.core.SessionStorage>);
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_ProvidesZendeskUrlFactory extends dagger.internal.Factory<string> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_ProvidesZendeskUrlFactory>;
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.core.ApplicationConfiguration>): zendesk.support.SupportSdkModule_ProvidesZendeskUrlFactory;
			public get(): any;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.core.ApplicationConfiguration>);
			public get(): string;
			public static providesZendeskUrl(param0: zendesk.support.SupportSdkModule, param1: zendesk.core.ApplicationConfiguration): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_Proxy {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_Proxy>;
			public static newInstance(): zendesk.support.SupportSdkModule;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_RequestInfoDataSourceFactory extends dagger.internal.Factory<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_RequestInfoDataSourceFactory>;
			public static requestInfoDataSource(param0: zendesk.support.SupportSdkModule, param1: zendesk.support.SupportUiStorage, param2: java.util.concurrent.Executor, param3: java.util.concurrent.ExecutorService): zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource;
			public get(): zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource;
			public get(): any;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.support.SupportUiStorage>, param2: javax.inject.Provider<java.util.concurrent.Executor>, param3: javax.inject.Provider<java.util.concurrent.ExecutorService>);
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<zendesk.support.SupportUiStorage>, param2: javax.inject.Provider<java.util.concurrent.Executor>, param3: javax.inject.Provider<java.util.concurrent.ExecutorService>): zendesk.support.SupportSdkModule_RequestInfoDataSourceFactory;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkModule_SupportUiStorageFactory extends dagger.internal.Factory<zendesk.support.SupportUiStorage> {
			public static class: java.lang.Class<zendesk.support.SupportSdkModule_SupportUiStorageFactory>;
			public get(): zendesk.support.SupportUiStorage;
			public static create(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<com.jakewharton.disklrucache.DiskLruCache>, param2: javax.inject.Provider<com.google.gson.Gson>): zendesk.support.SupportSdkModule_SupportUiStorageFactory;
			public get(): any;
			public constructor(param0: zendesk.support.SupportSdkModule, param1: javax.inject.Provider<com.jakewharton.disklrucache.DiskLruCache>, param2: javax.inject.Provider<com.google.gson.Gson>);
			public static supportUiStorage(param0: zendesk.support.SupportSdkModule, param1: com.jakewharton.disklrucache.DiskLruCache, param2: com.google.gson.Gson): zendesk.support.SupportUiStorage;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkProvidersComponent {
			public static class: java.lang.Class<zendesk.support.SupportSdkProvidersComponent>;
			/**
			 * Constructs a new instance of the zendesk.support.SupportSdkProvidersComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				inject(param0: zendesk.support.Support): zendesk.support.Support;
			});
			public constructor();
			public inject(param0: zendesk.support.Support): zendesk.support.Support;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkSettings {
			public static class: java.lang.Class<zendesk.support.SupportSdkSettings>;
			public getContactZendeskTags(): java.util.List<string>;
			public isAttachmentsEnabled(): boolean;
			public hasHelpCenterSettings(): boolean;
			public isTicketFormSupportAvailable(): boolean;
			public getHelpCenterLocale(): string;
			public getMaxAttachmentSize(): number;
			public isNeverAskForEmailEnabled(): boolean;
			public getReferrerUrl(): string;
			public constructor(param0: zendesk.support.SupportSettings, param1: zendesk.support.HelpCenterSettings, param2: zendesk.core.AuthenticationType);
			public isHelpCenterArticleVotingEnabled(): boolean;
			public isHelpCenterEnabled(): boolean;
			public getAuthenticationType(): zendesk.core.AuthenticationType;
			public isShowReferrerLogoEnabled(): boolean;
			public isConversationsEnabled(): boolean;
			public isShowClosedRequests(): boolean;
			public getRequestSystemMessage(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSdkStartupProvider extends zendesk.core.SdkStartUpProvider {
			public static class: java.lang.Class<zendesk.support.SupportSdkStartupProvider>;
			public onStartUp(param0: globalAndroid.content.Context): void;
			public constructor();
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSettings extends zendesk.core.Settings {
			public static class: java.lang.Class<zendesk.support.SupportSettings>;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportSettingsProvider {
			public static class: java.lang.Class<zendesk.support.SupportSettingsProvider>;
			/**
			 * Constructs a new instance of the zendesk.support.SupportSettingsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSettings(param0: zendesk.service.ZendeskCallback<zendesk.support.SupportSdkSettings>): void;
			});
			public constructor();
			public getSettings(param0: zendesk.service.ZendeskCallback<zendesk.support.SupportSdkSettings>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class SupportUiStorage {
			public static class: java.lang.Class<zendesk.support.SupportUiStorage>;
			public static REQUEST_MAPPER: string;
			public constructor(param0: com.jakewharton.disklrucache.DiskLruCache, param1: com.google.gson.Gson);
			public write(param0: string, param1: any): void;
			public read(param0: string, param1: java.lang.reflect.Type): any;
		}
	}
}

declare module zendesk {
	export module support {
		export class Support_MembersInjector extends dagger.MembersInjector<zendesk.support.Support> {
			public static class: java.lang.Class<zendesk.support.Support_MembersInjector>;
			public static injectBlipsProvider(param0: zendesk.support.Support, param1: zendesk.support.SupportBlipsProvider): void;
			public static injectAuthenticationProvider(param0: zendesk.support.Support, param1: zendesk.core.AuthenticationProvider): void;
			public static injectRequestProvider(param0: zendesk.support.Support, param1: zendesk.support.RequestProvider): void;
			public static injectProviderStore(param0: zendesk.support.Support, param1: zendesk.support.ProviderStore): void;
			public injectMembers(param0: zendesk.support.Support): void;
			public constructor(param0: javax.inject.Provider<zendesk.support.ProviderStore>, param1: javax.inject.Provider<zendesk.support.SupportModule>, param2: javax.inject.Provider<zendesk.support.RequestMigrator>, param3: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param4: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param5: javax.inject.Provider<zendesk.support.RequestProvider>, param6: javax.inject.Provider<zendesk.core.AuthenticationProvider>);
			public static injectSupportModule(param0: zendesk.support.Support, param1: zendesk.support.SupportModule): void;
			public injectMembers(param0: any): void;
			public static create(param0: javax.inject.Provider<zendesk.support.ProviderStore>, param1: javax.inject.Provider<zendesk.support.SupportModule>, param2: javax.inject.Provider<zendesk.support.RequestMigrator>, param3: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param4: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param5: javax.inject.Provider<zendesk.support.RequestProvider>, param6: javax.inject.Provider<zendesk.core.AuthenticationProvider>): dagger.MembersInjector<zendesk.support.Support>;
			public static injectActionHandlerRegistry(param0: zendesk.support.Support, param1: zendesk.core.ActionHandlerRegistry): void;
			public static injectRequestMigrator(param0: zendesk.support.Support, param1: any): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class TicketField {
			public static class: java.lang.Class<zendesk.support.TicketField>;
			public getTitle(): string;
			public getId(): number;
			public getTitleInPortal(): string;
			public getRegexpForValidation(): string;
			public getTicketFieldSystemOptions(): java.util.List<zendesk.support.TicketFieldSystemOption>;
			public getDescription(): string;
			public getTicketFieldOptions(): java.util.List<zendesk.support.TicketFieldOption>;
			public getType(): zendesk.support.TicketFieldType;
		}
	}
}

declare module zendesk {
	export module support {
		export class TicketFieldOption {
			public static class: java.lang.Class<zendesk.support.TicketFieldOption>;
			public getName(): string;
			public getId(): number;
			public getValue(): string;
			public isDefault(): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class TicketFieldSystemOption {
			public static class: java.lang.Class<zendesk.support.TicketFieldSystemOption>;
			public getName(): string;
			public getValue(): string;
		}
	}
}

declare module zendesk {
	export module support {
		export class TicketFieldType {
			public static class: java.lang.Class<zendesk.support.TicketFieldType>;
			public static Checkbox: zendesk.support.TicketFieldType;
			public static Date: zendesk.support.TicketFieldType;
			public static Decimal: zendesk.support.TicketFieldType;
			public static Description: zendesk.support.TicketFieldType;
			public static Integer: zendesk.support.TicketFieldType;
			public static PartialCreditCard: zendesk.support.TicketFieldType;
			public static Priority: zendesk.support.TicketFieldType;
			public static Status: zendesk.support.TicketFieldType;
			public static TicketType: zendesk.support.TicketFieldType;
			public static Regexp: zendesk.support.TicketFieldType;
			public static Subject: zendesk.support.TicketFieldType;
			public static Tagger: zendesk.support.TicketFieldType;
			public static Text: zendesk.support.TicketFieldType;
			public static TextArea: zendesk.support.TicketFieldType;
			public static MultiSelect: zendesk.support.TicketFieldType;
			public static Unknown: zendesk.support.TicketFieldType;
			public static valueOf(param0: string): zendesk.support.TicketFieldType;
			public static values(): native.Array<zendesk.support.TicketFieldType>;
		}
	}
}

declare module zendesk {
	export module support {
		export class TicketForm {
			public static class: java.lang.Class<zendesk.support.TicketForm>;
			public constructor(param0: number, param1: string, param2: java.util.List<zendesk.support.TicketField>);
			public getName(): string;
			public getId(): number;
			public getTicketFields(): java.util.List<zendesk.support.TicketField>;
		}
	}
}

declare module zendesk {
	export module support {
		export class TicketFormSettings {
			public static class: java.lang.Class<zendesk.support.TicketFormSettings>;
			public isAvailable(): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class UiUtils {
			public static class: java.lang.Class<zendesk.support.UiUtils>;
			public static dismissKeyboard(param0: globalAndroid.view.View): void;
			public static decodeHtmlEntities(param0: string): string;
			public static showKeyboard(param0: globalAndroid.view.View): void;
			public internalThemeAttributeToPixels(param0: number, param1: globalAndroid.content.Context, param2: number, param3: number): number;
			public static resolveColor(param0: number, param1: globalAndroid.content.Context): number;
			public static setVisibility(param0: globalAndroid.view.View, param1: number): void;
			public internalThemeAttributeToColor(param0: number, param1: globalAndroid.content.Context, param2: number): number;
			public static themeAttributeToColor(param0: number, param1: globalAndroid.content.Context, param2: number): number;
			public static setTint(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.view.View): void;
			public internalDismissKeyboard(param0: globalAndroid.app.Activity): void;
			public internalShowKeyboard(param0: globalAndroid.view.View): void;
			public internalSetTint(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: globalAndroid.view.View): void;
			public static setUiUtils(param0: zendesk.support.UiUtils): void;
			public static dismissKeyboard(param0: globalAndroid.app.Activity): void;
			public internalResolveColor(param0: number, param1: globalAndroid.content.Context): number;
			public internalDismissKeyboard(param0: globalAndroid.view.View): void;
		}
		export module UiUtils {
			export class ScreenSize {
				public static class: java.lang.Class<zendesk.support.UiUtils.ScreenSize>;
				public static UNKNOWN: zendesk.support.UiUtils.ScreenSize;
				public static UNDEFINED: zendesk.support.UiUtils.ScreenSize;
				public static X_LARGE: zendesk.support.UiUtils.ScreenSize;
				public static LARGE: zendesk.support.UiUtils.ScreenSize;
				public static NORMAL: zendesk.support.UiUtils.ScreenSize;
				public static SMALL: zendesk.support.UiUtils.ScreenSize;
				public static values(): native.Array<zendesk.support.UiUtils.ScreenSize>;
				public static valueOf(param0: string): zendesk.support.UiUtils.ScreenSize;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class UpdateRequestWrapper {
			public static class: java.lang.Class<zendesk.support.UpdateRequestWrapper>;
		}
	}
}

declare module zendesk {
	export module support {
		export class UploadProvider {
			public static class: java.lang.Class<zendesk.support.UploadProvider>;
			/**
			 * Constructs a new instance of the zendesk.support.UploadProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				uploadAttachment(param0: string, param1: java.io.File, param2: string, param3: zendesk.service.ZendeskCallback<zendesk.support.UploadResponse>): void;
				deleteAttachment(param0: string, param1: zendesk.service.ZendeskCallback<java.lang.Void>): void;
			});
			public constructor();
			public uploadAttachment(param0: string, param1: java.io.File, param2: string, param3: zendesk.service.ZendeskCallback<zendesk.support.UploadResponse>): void;
			public deleteAttachment(param0: string, param1: zendesk.service.ZendeskCallback<java.lang.Void>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class UploadResponse {
			public static class: java.lang.Class<zendesk.support.UploadResponse>;
			public getToken(): string;
			public constructor();
			public getAttachment(): zendesk.support.Attachment;
			public getExpiresAt(): java.util.Date;
		}
	}
}

declare module zendesk {
	export module support {
		export class UploadResponseWrapper {
			public static class: java.lang.Class<zendesk.support.UploadResponseWrapper>;
		}
	}
}

declare module zendesk {
	export module support {
		export class UploadService {
			public static class: java.lang.Class<zendesk.support.UploadService>;
			/**
			 * Constructs a new instance of the zendesk.support.UploadService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				uploadAttachment(param0: string, param1: okhttp3.RequestBody): retrofit2.Call<zendesk.support.UploadResponseWrapper>;
				deleteAttachment(param0: string): retrofit2.Call<java.lang.Void>;
			});
			public constructor();
			public uploadAttachment(param0: string, param1: okhttp3.RequestBody): retrofit2.Call<zendesk.support.UploadResponseWrapper>;
			public deleteAttachment(param0: string): retrofit2.Call<java.lang.Void>;
		}
	}
}

declare module zendesk {
	export module support {
		export class User {
			public static class: java.lang.Class<zendesk.support.User>;
			public equals(param0: any): boolean;
			public getTags(): java.util.List<string>;
			public getName(): string;
			public constructor(param0: java.lang.Long, param1: string, param2: zendesk.support.Attachment, param3: boolean, param4: java.lang.Long, param5: java.util.List<string>, param6: java.util.Map<string,string>);
			public getId(): java.lang.Long;
			public getUserFields(): java.util.Map<string,string>;
			public constructor();
			public getPhoto(): zendesk.support.Attachment;
			public getOrganizationId(): java.lang.Long;
			public isAgent(): boolean;
			public hashCode(): number;
		}
	}
}

declare module zendesk {
	export module support {
		export class ViewArticleActionHandler extends zendesk.core.ActionHandler {
			public static class: java.lang.Class<zendesk.support.ViewArticleActionHandler>;
			public getActionDescription(): zendesk.core.ActionDescription;
			public handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
			public getPriority(): number;
			public canHandle(param0: string): boolean;
			public updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
			public static data(param0: number, param1: string): java.util.Map<string,any>;
		}
	}
}

declare module zendesk {
	export module support {
		export class ViewArticleDeepLinkParser extends zendesk.support.ZendeskDeepLinkParser.Module {
			public static class: java.lang.Class<zendesk.support.ViewArticleDeepLinkParser>;
			public parse(param0: okhttp3.HttpUrl): zendesk.support.ViewArticleDeepLinkParser.ActionPayload;
		}
		export module ViewArticleDeepLinkParser {
			export class ActionPayload {
				public static class: java.lang.Class<zendesk.support.ViewArticleDeepLinkParser.ActionPayload>;
				public getAction(): string;
				public isValid(): boolean;
				public getPayload(): java.util.Map<string,any>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskArticleVoteStorage extends zendesk.support.ArticleVoteStorage {
			public static class: java.lang.Class<zendesk.support.ZendeskArticleVoteStorage>;
			public removeStoredArticleVote(param0: java.lang.Long): void;
			public storeArticleVote(param0: java.lang.Long, param1: zendesk.support.ArticleVote): void;
			public getStoredArticleVote(param0: java.lang.Long): zendesk.support.ArticleVote;
		}
		export module ZendeskArticleVoteStorage {
			export class ArticleVoteMapWrapper {
				public static class: java.lang.Class<zendesk.support.ZendeskArticleVoteStorage.ArticleVoteMapWrapper>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskAvatarView {
			public static class: java.lang.Class<zendesk.support.ZendeskAvatarView>;
			public showUserWithAvatarImage(param0: com.sebchlan.picassocompat.PicassoCompat, param1: string, param2: string, param3: number): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			public showUserWithIdentifier(param0: any): void;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
			public setStroke(param0: number, param1: number): void;
			public showUserWithName(param0: string): void;
			public constructor(param0: globalAndroid.content.Context);
		}
	}
}

declare module zendesk {
	export module support {
		export abstract class ZendeskCallbackSuccess<E>  extends zendesk.service.ZendeskCallback<any> {
			public static class: java.lang.Class<zendesk.support.ZendeskCallbackSuccess<any>>;
			public onError(param0: zendesk.service.ErrorResponse): void;
			public onSuccess(param0: any): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskDeepLinkHelper {
			public static class: java.lang.Class<zendesk.support.ZendeskDeepLinkHelper>;
			public launch(param0: string, param1: zendesk.commonui.UiConfig, param2: globalAndroid.content.Context): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskDeepLinkParser {
			public static class: java.lang.Class<zendesk.support.ZendeskDeepLinkParser>;
			public parse(param0: string): zendesk.support.ViewArticleDeepLinkParser.ActionPayload;
		}
		export module ZendeskDeepLinkParser {
			export class Module {
				public static class: java.lang.Class<zendesk.support.ZendeskDeepLinkParser.Module>;
				/**
				 * Constructs a new instance of the zendesk.support.ZendeskDeepLinkParser$Module interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					parse(param0: okhttp3.HttpUrl): zendesk.support.ViewArticleDeepLinkParser.ActionPayload;
				});
				public constructor();
				public parse(param0: okhttp3.HttpUrl): zendesk.support.ViewArticleDeepLinkParser.ActionPayload;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskHelpCenterProvider extends zendesk.support.HelpCenterProvider {
			public static class: java.lang.Class<zendesk.support.ZendeskHelpCenterProvider>;
			public getAttachments(param0: java.lang.Long, param1: zendesk.support.AttachmentType, param2: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpCenterAttachment>>): void;
			public getArticle(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<zendesk.support.Article>): void;
			public getArticles(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Article>>): void;
			public getSections(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Section>>): void;
			public getCategory(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<zendesk.support.Category>): void;
			public deleteVote(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public upvoteArticle(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<zendesk.support.ArticleVote>): void;
			public submitRecordArticleView(param0: zendesk.support.Article, param1: java.util.Locale, param2: zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public downvoteArticle(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<zendesk.support.ArticleVote>): void;
			public getCategories(param0: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Category>>): void;
			public listArticlesFlat(param0: zendesk.support.ListArticleQuery, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.FlatArticle>>): void;
			public getHelp(param0: zendesk.support.HelpRequest, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpItem>>): void;
			public getArticles(param0: java.lang.Long, param1: string, param2: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Article>>): void;
			public listArticles(param0: zendesk.support.ListArticleQuery, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
			public getSuggestedArticles(param0: zendesk.support.SuggestedArticleSearch, param1: zendesk.service.ZendeskCallback<zendesk.support.SuggestedArticleResponse>): void;
			public searchArticles(param0: zendesk.support.HelpCenterSearch, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
			public getSection(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<zendesk.support.Section>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskHelpCenterService {
			public static class: java.lang.Class<zendesk.support.ZendeskHelpCenterService>;
			public getAttachments(param0: java.util.Locale, param1: java.lang.Long, param2: zendesk.support.AttachmentType, param3: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpCenterAttachment>>): void;
			public getCategoryById(param0: java.lang.Long, param1: java.util.Locale, param2: zendesk.service.ZendeskCallback<zendesk.support.Category>): void;
			public getSectionById(param0: java.lang.Long, param1: java.util.Locale, param2: zendesk.service.ZendeskCallback<zendesk.support.Section>): void;
			public getSuggestedArticles(param0: string, param1: java.util.Locale, param2: string, param3: java.lang.Long, param4: java.lang.Long, param5: zendesk.service.ZendeskCallback<zendesk.support.SuggestedArticleResponse>): void;
			public getArticle(param0: java.lang.Long, param1: java.util.Locale, param2: string, param3: zendesk.service.ZendeskCallback<zendesk.support.Article>): void;
			public downvoteArticle(param0: java.lang.Long, param1: string, param2: zendesk.service.ZendeskCallback<zendesk.support.ArticleVoteResponse>): void;
			public deleteVote(param0: java.lang.Long, param1: zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public submitRecordArticleView(param0: java.lang.Long, param1: java.util.Locale, param2: zendesk.support.RecordArticleViewRequest, param3: zendesk.service.ZendeskCallback<java.lang.Void>): void;
			public getSectionsForCategory(param0: java.lang.Long, param1: java.util.Locale, param2: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Section>>): void;
			public searchArticles(param0: string, param1: java.util.Locale, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Integer, param7: java.lang.Integer, param8: zendesk.service.ZendeskCallback<zendesk.support.ArticlesSearchResponse>): void;
			public getCategories(param0: java.util.Locale, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Category>>): void;
			public upvoteArticle(param0: java.lang.Long, param1: string, param2: zendesk.service.ZendeskCallback<zendesk.support.ArticleVoteResponse>): void;
			public listArticles(param0: string, param1: java.util.Locale, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer, param7: zendesk.service.ZendeskCallback<zendesk.support.ArticlesListResponse>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskHelpCenterSessionCache extends zendesk.support.HelpCenterSessionCache {
			public static class: java.lang.Class<zendesk.support.ZendeskHelpCenterSessionCache>;
			public static DEFAULT_SEARCH: zendesk.support.LastSearch;
			public isUniqueSearchResultClick(): boolean;
			public unsetUniqueSearchResultClick(): void;
			public getLastSearch(): zendesk.support.LastSearch;
			public setLastSearch(param0: string, param1: number): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskProviderStore extends zendesk.support.ProviderStore {
			public static class: java.lang.Class<zendesk.support.ZendeskProviderStore>;
			public helpCenterProvider(): zendesk.support.HelpCenterProvider;
			public requestProvider(): zendesk.support.RequestProvider;
			public uploadProvider(): zendesk.support.UploadProvider;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskRequestProvider extends zendesk.support.RequestProvider {
			public static class: java.lang.Class<zendesk.support.ZendeskRequestProvider>;
			public createRequest(param0: zendesk.support.CreateRequest, param1: zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
			public getCommentsSince(param0: string, param1: java.util.Date, param2: boolean, param3: zendesk.service.ZendeskCallback<zendesk.support.CommentsResponse>): void;
			public getUpdatesForDevice(param0: zendesk.service.ZendeskCallback<zendesk.support.RequestUpdates>): void;
			public addComment(param0: string, param1: zendesk.support.EndUserComment, param2: zendesk.service.ZendeskCallback<zendesk.support.Comment>): void;
			public getComments(param0: string, param1: zendesk.service.ZendeskCallback<zendesk.support.CommentsResponse>): void;
			public getTicketFormsById(param0: java.util.List<java.lang.Long>, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.TicketForm>>): void;
			public markRequestAsRead(param0: string, param1: number): void;
			public markRequestAsUnread(param0: string): void;
			public getRequests(param0: string, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Request>>): void;
			public getAllRequests(param0: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.Request>>): void;
			public getRequest(param0: string, param1: zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskRequestService {
			public static class: java.lang.Class<zendesk.support.ZendeskRequestService>;
			public createRequest(param0: string, param1: zendesk.support.CreateRequest, param2: zendesk.service.ZendeskCallback<zendesk.support.Request>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskRequestSessionCache extends zendesk.support.RequestSessionCache {
			public static class: java.lang.Class<zendesk.support.ZendeskRequestSessionCache>;
			public updateTicketFormCache(param0: java.util.List<zendesk.support.TicketForm>): void;
			public getTicketFormsById(param0: java.util.List<java.lang.Long>): java.util.List<zendesk.support.TicketForm>;
			public containsAllTicketForms(param0: java.util.List<java.lang.Long>): boolean;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskRequestStorage extends zendesk.support.RequestStorage {
			public static class: java.lang.Class<zendesk.support.ZendeskRequestStorage>;
			public storeRequestData(param0: java.util.List<zendesk.support.RequestData>): void;
			public getRequestData(): java.util.List<zendesk.support.RequestData>;
			public isRequestDataExpired(): boolean;
			public markRequestAsRead(param0: string, param1: number): void;
			public markRequestAsUnread(param0: string): void;
			public updateRequestData(param0: java.util.List<zendesk.support.Request>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskSupportBlipsProvider extends zendesk.support.SupportBlipsProvider {
			public static class: java.lang.Class<zendesk.support.ZendeskSupportBlipsProvider>;
			public requestListViewed(): void;
			public articleView(param0: zendesk.support.Article): void;
			public requestCreated(param0: string): void;
			public articleVote(param0: java.lang.Long, param1: number): void;
			public requestViewed(param0: string): void;
			public supportSdkInit(): void;
			public requestUpdated(param0: string): void;
			public helpCenterSearch(param0: string): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskSupportSettingsProvider extends zendesk.support.SupportSettingsProvider {
			public static class: java.lang.Class<zendesk.support.ZendeskSupportSettingsProvider>;
			public getSettings(param0: zendesk.service.ZendeskCallback<zendesk.support.SupportSdkSettings>): void;
		}
		export module ZendeskSupportSettingsProvider {
			export class LoadHelpCenterSettings extends zendesk.service.ZendeskCallback<zendesk.core.SettingsPack<zendesk.support.HelpCenterSettings>> {
				public static class: java.lang.Class<zendesk.support.ZendeskSupportSettingsProvider.LoadHelpCenterSettings>;
				public onSuccess(param0: any): void;
				public onSuccess(param0: zendesk.core.SettingsPack<zendesk.support.HelpCenterSettings>): void;
				public onError(param0: zendesk.service.ErrorResponse): void;
			}
			export class LoadSupportSettings extends zendesk.service.ZendeskCallback<zendesk.core.SettingsPack<zendesk.support.SupportSettings>> {
				public static class: java.lang.Class<zendesk.support.ZendeskSupportSettingsProvider.LoadSupportSettings>;
				public onSuccess(param0: any): void;
				public onSuccess(param0: zendesk.core.SettingsPack<zendesk.support.SupportSettings>): void;
				public onError(param0: zendesk.service.ErrorResponse): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskTracker {
			public static class: java.lang.Class<zendesk.support.ZendeskTracker>;
			/**
			 * Constructs a new instance of the zendesk.support.ZendeskTracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				helpCenterLoaded(): void;
				helpCenterSearched(param0: string): void;
				helpCenterArticleViewed(): void;
				requestCreated(): void;
				requestUpdated(): void;
			});
			public constructor();
			public requestCreated(): void;
			public requestUpdated(): void;
			public helpCenterSearched(param0: string): void;
			public helpCenterLoaded(): void;
			public helpCenterArticleViewed(): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskUploadProvider extends zendesk.support.UploadProvider {
			public static class: java.lang.Class<zendesk.support.ZendeskUploadProvider>;
			public uploadAttachment(param0: string, param1: java.io.File, param2: string, param3: zendesk.service.ZendeskCallback<zendesk.support.UploadResponse>): void;
			public deleteAttachment(param0: string, param1: zendesk.service.ZendeskCallback<java.lang.Void>): void;
		}
	}
}

declare module zendesk {
	export module support {
		export class ZendeskUploadService {
			public static class: java.lang.Class<zendesk.support.ZendeskUploadService>;
			public constructor(param0: zendesk.support.UploadService);
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class ArticleUiConfig extends zendesk.commonui.UiConfig {
				public static class: java.lang.Class<zendesk.support.guide.ArticleUiConfig>;
				public isDeflectionEnabled(): boolean;
				public getUiConfigs(): java.util.List<zendesk.commonui.UiConfig>;
				public isContactUsButtonVisible(): boolean;
			}
			export module ArticleUiConfig {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.guide.ArticleUiConfig.Builder>;
					public withContactUsButtonVisible(param0: boolean): zendesk.support.guide.ArticleUiConfig.Builder;
					public show(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.commonui.UiConfig>): void;
					public constructor();
					public withDeflectionEnabled(param0: boolean): zendesk.support.guide.ArticleUiConfig.Builder;
					public intent(param0: globalAndroid.content.Context, param1: native.Array<zendesk.commonui.UiConfig>): globalAndroid.content.Intent;
					public show(param0: globalAndroid.content.Context, param1: native.Array<zendesk.commonui.UiConfig>): void;
					public intent(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.commonui.UiConfig>): globalAndroid.content.Intent;
					public constructor(param0: number);
					public constructor(param0: zendesk.support.Article);
					public config(): zendesk.commonui.UiConfig;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class ArticleViewModel {
				public static class: java.lang.Class<zendesk.support.guide.ArticleViewModel>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class ArticleVotingView {
				public static class: java.lang.Class<zendesk.support.guide.ArticleVotingView>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public bindTo(param0: java.lang.Long, param1: zendesk.support.ArticleVoteStorage, param2: zendesk.support.HelpCenterProvider): void;
			}
			export module ArticleVotingView {
				export class VoteState {
					public static class: java.lang.Class<zendesk.support.guide.ArticleVotingView.VoteState>;
					public static UPVOTED: zendesk.support.guide.ArticleVotingView.VoteState;
					public static DOWNVOTED: zendesk.support.guide.ArticleVotingView.VoteState;
					public static NONE: zendesk.support.guide.ArticleVotingView.VoteState;
					public static values(): native.Array<zendesk.support.guide.ArticleVotingView.VoteState>;
					public static valueOf(param0: string): zendesk.support.guide.ArticleVotingView.VoteState;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpAdapterPresenter extends zendesk.support.guide.HelpMvp.Presenter {
				public static class: java.lang.Class<zendesk.support.guide.HelpAdapterPresenter>;
				public setContentPresenter(param0: zendesk.support.guide.HelpCenterMvp.Presenter): void;
				public getItem(param0: number): zendesk.support.HelpItem;
				public onAttached(): void;
				public onSeeAllClick(param0: zendesk.support.SeeAllArticlesItem): void;
				public constructor(param0: zendesk.support.guide.HelpMvp.View, param1: zendesk.support.guide.HelpMvp.Model, param2: zendesk.core.NetworkInfoProvider, param3: zendesk.support.guide.HelpCenterUiConfig);
				public getItemViewType(param0: number): number;
				public onCategoryClick(param0: zendesk.support.CategoryItem, param1: number): boolean;
				public getItemForBinding(param0: number): zendesk.support.HelpItem;
				public onDetached(): void;
				public getItemCount(): number;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterActivity implements zendesk.support.guide.HelpCenterMvp.View {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterActivity>;
				public isShowingHelp(): boolean;
				public onPause(): void;
				public setSearchEnabled(param0: boolean): void;
				public constructor();
				public onPrepareOptionsMenu(param0: globalAndroid.view.Menu): boolean;
				public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public showLoadingState(): void;
				public announceContentLoaded(): void;
				public hideLoadingState(): void;
				public showSearchResults(param0: java.util.List<zendesk.support.SearchArticle>, param1: string): void;
				public showContactUsButton(): void;
				public showContactZendesk(): void;
				public onResume(): void;
				public getContext(): globalAndroid.content.Context;
				public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
				public showRequestList(): void;
				public showNoConnectionError(): void;
				public clearSearchResults(): void;
				public dismissError(): void;
				public showLoadArticleErrorWithRetry(param0: zendesk.support.guide.HelpCenterMvp.ErrorType, param1: zendesk.core.RetryAction): void;
				public exitActivity(): void;
				public static builder(): zendesk.support.guide.HelpCenterUiConfig.Builder;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onStart(): void;
				public showHelp(param0: zendesk.support.guide.HelpCenterUiConfig): void;
			}
			export module HelpCenterActivity {
				export class SnackbarStatus {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterActivity.SnackbarStatus>;
					public static NO_CONNECTION: zendesk.support.guide.HelpCenterActivity.SnackbarStatus;
					public static NONE: zendesk.support.guide.HelpCenterActivity.SnackbarStatus;
					public static CONTENT_ERROR: zendesk.support.guide.HelpCenterActivity.SnackbarStatus;
					public static values(): native.Array<zendesk.support.guide.HelpCenterActivity.SnackbarStatus>;
					public static valueOf(param0: string): zendesk.support.guide.HelpCenterActivity.SnackbarStatus;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterActivity_MembersInjector extends dagger.MembersInjector<zendesk.support.guide.HelpCenterActivity> {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterActivity_MembersInjector>;
				public injectMembers(param0: zendesk.support.guide.HelpCenterActivity): void;
				public constructor(param0: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.core.NetworkInfoProvider>, param3: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>);
				public static injectActionHandlerRegistry(param0: zendesk.support.guide.HelpCenterActivity, param1: zendesk.core.ActionHandlerRegistry): void;
				public injectMembers(param0: any): void;
				public static create(param0: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.core.NetworkInfoProvider>, param3: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>): dagger.MembersInjector<zendesk.support.guide.HelpCenterActivity>;
				public static injectSettingsProvider(param0: zendesk.support.guide.HelpCenterActivity, param1: zendesk.support.SupportSettingsProvider): void;
				public static injectNetworkInfoProvider(param0: zendesk.support.guide.HelpCenterActivity, param1: zendesk.core.NetworkInfoProvider): void;
				public static injectHelpCenterProvider(param0: zendesk.support.guide.HelpCenterActivity, param1: zendesk.support.HelpCenterProvider): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterFragment {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterFragment>;
				public static LOG_TAG: string;
				public static newInstance(param0: zendesk.support.guide.HelpCenterUiConfig): zendesk.support.guide.HelpCenterFragment;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public setPresenter(param0: zendesk.support.guide.HelpCenterMvp.Presenter): void;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterFragment_MembersInjector extends dagger.MembersInjector<zendesk.support.guide.HelpCenterFragment> {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterFragment_MembersInjector>;
				public injectMembers(param0: any): void;
				public static injectHelpCenterProvider(param0: zendesk.support.guide.HelpCenterFragment, param1: zendesk.support.HelpCenterProvider): void;
				public injectMembers(param0: zendesk.support.guide.HelpCenterFragment): void;
				public static injectNetworkInfoProvider(param0: zendesk.support.guide.HelpCenterFragment, param1: zendesk.core.NetworkInfoProvider): void;
				public static create(param0: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param1: javax.inject.Provider<zendesk.core.NetworkInfoProvider>): dagger.MembersInjector<zendesk.support.guide.HelpCenterFragment>;
				public constructor(param0: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param1: javax.inject.Provider<zendesk.core.NetworkInfoProvider>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterModel extends zendesk.support.guide.HelpCenterMvp.Model {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterModel>;
				public getSettings(param0: zendesk.service.ZendeskCallback<zendesk.support.SupportSdkSettings>): void;
				public search(param0: java.util.List<java.lang.Long>, param1: java.util.List<java.lang.Long>, param2: string, param3: native.Array<string>, param4: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterMvp {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterMvp>;
				/**
				 * Constructs a new instance of the zendesk.support.guide.HelpCenterMvp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
			export module HelpCenterMvp {
				export class ErrorType {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterMvp.ErrorType>;
					public static CATEGORY_LOAD: zendesk.support.guide.HelpCenterMvp.ErrorType;
					public static SECTION_LOAD: zendesk.support.guide.HelpCenterMvp.ErrorType;
					public static ARTICLES_LOAD: zendesk.support.guide.HelpCenterMvp.ErrorType;
					public static valueOf(param0: string): zendesk.support.guide.HelpCenterMvp.ErrorType;
					public static values(): native.Array<zendesk.support.guide.HelpCenterMvp.ErrorType>;
				}
				export class Model {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterMvp.Model>;
					/**
					 * Constructs a new instance of the zendesk.support.guide.HelpCenterMvp$Model interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						search(param0: java.util.List<java.lang.Long>, param1: java.util.List<java.lang.Long>, param2: string, param3: native.Array<string>, param4: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
						getSettings(param0: zendesk.service.ZendeskCallback<zendesk.support.SupportSdkSettings>): void;
					});
					public constructor();
					public getSettings(param0: zendesk.service.ZendeskCallback<zendesk.support.SupportSdkSettings>): void;
					public search(param0: java.util.List<java.lang.Long>, param1: java.util.List<java.lang.Long>, param2: string, param3: native.Array<string>, param4: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>>): void;
				}
				export class Presenter {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterMvp.Presenter>;
					/**
					 * Constructs a new instance of the zendesk.support.guide.HelpCenterMvp$Presenter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResume(param0: zendesk.support.guide.HelpCenterMvp.View): void;
						onPause(): void;
						onSearchSubmit(param0: string): void;
						onLoad(): void;
						onErrorWithRetry(param0: zendesk.support.guide.HelpCenterMvp.ErrorType, param1: zendesk.core.RetryAction): void;
						init(param0: zendesk.support.guide.HelpCenterUiConfig): void;
						shouldShowConversationsMenuItem(): boolean;
						shouldShowSearchMenuItem(): boolean;
					});
					public constructor();
					public onResume(param0: zendesk.support.guide.HelpCenterMvp.View): void;
					public shouldShowConversationsMenuItem(): boolean;
					public shouldShowSearchMenuItem(): boolean;
					public onLoad(): void;
					public onPause(): void;
					public onSearchSubmit(param0: string): void;
					public onErrorWithRetry(param0: zendesk.support.guide.HelpCenterMvp.ErrorType, param1: zendesk.core.RetryAction): void;
					public init(param0: zendesk.support.guide.HelpCenterUiConfig): void;
				}
				export class View {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterMvp.View>;
					/**
					 * Constructs a new instance of the zendesk.support.guide.HelpCenterMvp$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						showContactUsButton(): void;
						showHelp(param0: zendesk.support.guide.HelpCenterUiConfig): void;
						showSearchResults(param0: java.util.List<zendesk.support.SearchArticle>, param1: string): void;
						clearSearchResults(): void;
						setSearchEnabled(param0: boolean): void;
						showLoadingState(): void;
						hideLoadingState(): void;
						showRequestList(): void;
						showContactZendesk(): void;
						showLoadArticleErrorWithRetry(param0: zendesk.support.guide.HelpCenterMvp.ErrorType, param1: zendesk.core.RetryAction): void;
						showNoConnectionError(): void;
						dismissError(): void;
						getContext(): globalAndroid.content.Context;
						isShowingHelp(): boolean;
						exitActivity(): void;
						announceContentLoaded(): void;
					});
					public constructor();
					public exitActivity(): void;
					public showContactZendesk(): void;
					public showRequestList(): void;
					public setSearchEnabled(param0: boolean): void;
					public dismissError(): void;
					public showContactUsButton(): void;
					public showLoadingState(): void;
					public isShowingHelp(): boolean;
					public hideLoadingState(): void;
					public showSearchResults(param0: java.util.List<zendesk.support.SearchArticle>, param1: string): void;
					public clearSearchResults(): void;
					public showNoConnectionError(): void;
					public showHelp(param0: zendesk.support.guide.HelpCenterUiConfig): void;
					public getContext(): globalAndroid.content.Context;
					public showLoadArticleErrorWithRetry(param0: zendesk.support.guide.HelpCenterMvp.ErrorType, param1: zendesk.core.RetryAction): void;
					public announceContentLoaded(): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterPresenter implements zendesk.support.guide.HelpCenterMvp.Presenter, zendesk.core.NetworkAware {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterPresenter>;
				public shouldShowConversationsMenuItem(): boolean;
				public onNetworkUnavailable(): void;
				public onLoad(): void;
				public onPause(): void;
				public init(param0: zendesk.support.guide.HelpCenterUiConfig): void;
				public onResume(param0: zendesk.support.guide.HelpCenterMvp.View): void;
				public shouldShowSearchMenuItem(): boolean;
				public onSearchSubmit(param0: string): void;
				public onErrorWithRetry(param0: zendesk.support.guide.HelpCenterMvp.ErrorType, param1: zendesk.core.RetryAction): void;
				public onNetworkAvailable(): void;
			}
			export module HelpCenterPresenter {
				export class ViewSafeRetryZendeskCallback extends zendesk.service.ZendeskCallback<java.util.List<zendesk.support.SearchArticle>> {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterPresenter.ViewSafeRetryZendeskCallback>;
					public onError(param0: zendesk.service.ErrorResponse): void;
					public onSuccess(param0: any): void;
					public onSuccess(param0: java.util.List<zendesk.support.SearchArticle>): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpCenterUiConfig extends zendesk.commonui.UiConfig {
				public static class: java.lang.Class<zendesk.support.guide.HelpCenterUiConfig>;
				public getCategoryIds(): java.util.List<java.lang.Long>;
				public getLabelNames(): native.Array<string>;
				public getSectionIds(): java.util.List<java.lang.Long>;
				public isShowConversationsMenuButton(): boolean;
				public isDeflectionEnabled(): boolean;
				public getUiConfigs(): java.util.List<zendesk.commonui.UiConfig>;
				public isCollapseCategories(): boolean;
				public isContactUsButtonVisible(): boolean;
			}
			export module HelpCenterUiConfig {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.guide.HelpCenterUiConfig.Builder>;
					public withArticlesForSectionIds(param0: native.Array<java.lang.Long>): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public show(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.commonui.UiConfig>): void;
					public withArticlesForSectionIds(param0: java.util.List<java.lang.Long>): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public withContactUsButtonVisible(param0: boolean): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public withLabelNames(param0: java.util.List<string>): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public intent(param0: globalAndroid.content.Context, param1: native.Array<zendesk.commonui.UiConfig>): globalAndroid.content.Intent;
					public withCategoriesCollapsed(param0: boolean): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public withLabelNames(param0: native.Array<string>): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public withShowConversationsMenuButton(param0: boolean): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public constructor();
					public withArticlesForCategoryIds(param0: native.Array<java.lang.Long>): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public withDeflectionEnabled(param0: boolean): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public show(param0: globalAndroid.content.Context, param1: native.Array<zendesk.commonui.UiConfig>): void;
					public intent(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.commonui.UiConfig>): globalAndroid.content.Intent;
					public withArticlesForCategoryIds(param0: java.util.List<java.lang.Long>): zendesk.support.guide.HelpCenterUiConfig.Builder;
					public config(): zendesk.commonui.UiConfig;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpModel extends zendesk.support.guide.HelpMvp.Model {
				public static class: java.lang.Class<zendesk.support.guide.HelpModel>;
				public getArticles(param0: java.util.List<java.lang.Long>, param1: java.util.List<java.lang.Long>, param2: native.Array<string>, param3: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpItem>>): void;
				public getArticlesForSection(param0: zendesk.support.SectionItem, param1: native.Array<string>, param2: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.ArticleItem>>): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpMvp {
				public static class: java.lang.Class<zendesk.support.guide.HelpMvp>;
				/**
				 * Constructs a new instance of the zendesk.support.guide.HelpMvp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
			export module HelpMvp {
				export class Model {
					public static class: java.lang.Class<zendesk.support.guide.HelpMvp.Model>;
					/**
					 * Constructs a new instance of the zendesk.support.guide.HelpMvp$Model interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getArticles(param0: java.util.List<java.lang.Long>, param1: java.util.List<java.lang.Long>, param2: native.Array<string>, param3: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpItem>>): void;
						getArticlesForSection(param0: zendesk.support.SectionItem, param1: native.Array<string>, param2: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.ArticleItem>>): void;
					});
					public constructor();
					public getArticles(param0: java.util.List<java.lang.Long>, param1: java.util.List<java.lang.Long>, param2: native.Array<string>, param3: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpItem>>): void;
					public getArticlesForSection(param0: zendesk.support.SectionItem, param1: native.Array<string>, param2: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.ArticleItem>>): void;
				}
				export class Presenter {
					public static class: java.lang.Class<zendesk.support.guide.HelpMvp.Presenter>;
					/**
					 * Constructs a new instance of the zendesk.support.guide.HelpMvp$Presenter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAttached(): void;
						onDetached(): void;
						setContentPresenter(param0: zendesk.support.guide.HelpCenterMvp.Presenter): void;
						onSeeAllClick(param0: zendesk.support.SeeAllArticlesItem): void;
						onCategoryClick(param0: zendesk.support.CategoryItem, param1: number): boolean;
						getItem(param0: number): zendesk.support.HelpItem;
						getItemCount(): number;
						getItemViewType(param0: number): number;
						getItemForBinding(param0: number): zendesk.support.HelpItem;
					});
					public constructor();
					public getItemForBinding(param0: number): zendesk.support.HelpItem;
					public onCategoryClick(param0: zendesk.support.CategoryItem, param1: number): boolean;
					public onDetached(): void;
					public getItemCount(): number;
					public getItem(param0: number): zendesk.support.HelpItem;
					public onSeeAllClick(param0: zendesk.support.SeeAllArticlesItem): void;
					public getItemViewType(param0: number): number;
					public onAttached(): void;
					public setContentPresenter(param0: zendesk.support.guide.HelpCenterMvp.Presenter): void;
				}
				export class View {
					public static class: java.lang.Class<zendesk.support.guide.HelpMvp.View>;
					/**
					 * Constructs a new instance of the zendesk.support.guide.HelpMvp$View interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						showItems(param0: java.util.List<zendesk.support.HelpItem>): void;
						addItem(param0: number, param1: zendesk.support.HelpItem): void;
						removeItem(param0: number): void;
					});
					public constructor();
					public showItems(param0: java.util.List<zendesk.support.HelpItem>): void;
					public addItem(param0: number, param1: zendesk.support.HelpItem): void;
					public removeItem(param0: number): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpRecyclerViewAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder> implements zendesk.support.guide.HelpMvp.View  {
				public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter>;
				public addItem(param0: number, param1: zendesk.support.HelpItem): void;
				public onDetachedFromRecyclerView(param0: globalAndroid.support.v7.widget.RecyclerView): void;
				public getItemViewType(param0: number): number;
				public onBindViewHolder(param0: zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder, param1: number): void;
				public showItems(param0: java.util.List<zendesk.support.HelpItem>): void;
				public removeItem(param0: number): void;
				public onAttachedToRecyclerView(param0: globalAndroid.support.v7.widget.RecyclerView): void;
				public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder;
				public getItemCount(): number;
			}
			export module HelpRecyclerViewAdapter {
				export class ArticleViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.ArticleViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
				export class CategoryViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.CategoryViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
					public isExpanded(): boolean;
				}
				export class ExtraPaddingViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.ExtraPaddingViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
				export abstract class HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
				export class LoadingViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.LoadingViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
				export class NoResultsViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.NoResultsViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
				export class SectionViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.SectionViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
				export class SeeAllViewHolder extends zendesk.support.guide.HelpRecyclerViewAdapter.HelpViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpRecyclerViewAdapter.SeeAllViewHolder>;
					public bindTo(param0: zendesk.support.HelpItem, param1: number): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpSearchFragment {
				public static class: java.lang.Class<zendesk.support.guide.HelpSearchFragment>;
				public static newInstance(param0: zendesk.support.guide.HelpCenterUiConfig, param1: zendesk.support.HelpCenterProvider): zendesk.support.guide.HelpSearchFragment;
				public updateResults(param0: java.util.List<zendesk.support.SearchArticle>, param1: string): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public clearResults(): void;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class HelpSearchRecyclerViewAdapter {
				public static class: java.lang.Class<zendesk.support.guide.HelpSearchRecyclerViewAdapter>;
				public onBindViewHolder(param0: globalAndroid.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
				public getItemViewType(param0: number): number;
				public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): globalAndroid.support.v7.widget.RecyclerView.ViewHolder;
				public getItemCount(): number;
			}
			export module HelpSearchRecyclerViewAdapter {
				export class HelpSearchViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpSearchRecyclerViewAdapter.HelpSearchViewHolder>;
				}
				export class NoResultsViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpSearchRecyclerViewAdapter.NoResultsViewHolder>;
				}
				export class PaddingViewHolder {
					public static class: java.lang.Class<zendesk.support.guide.HelpSearchRecyclerViewAdapter.PaddingViewHolder>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class NetworkUtils {
				public static class: java.lang.Class<zendesk.support.guide.NetworkUtils>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class SeparatorDecoration {
				public static class: java.lang.Class<zendesk.support.guide.SeparatorDecoration>;
				public onDrawOver(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.support.v7.widget.RecyclerView, param2: globalAndroid.support.v7.widget.RecyclerView.State): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class ViewArticleActivity {
				public static class: java.lang.Class<zendesk.support.guide.ViewArticleActivity>;
				public static builder(param0: number): zendesk.support.guide.ArticleUiConfig.Builder;
				public showContactZendesk(): void;
				public static builder(param0: zendesk.support.Article): zendesk.support.guide.ArticleUiConfig.Builder;
				public setLoadingState(param0: zendesk.support.guide.ViewArticleActivity.LoadingState): void;
				public static builder(): zendesk.support.guide.ArticleUiConfig.Builder;
				public constructor();
				public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public showLoadingErrorState(param0: number): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onStart(): void;
				public onStop(): void;
				public onItemClick(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
				public onDestroy(): void;
			}
			export module ViewArticleActivity {
				export class ArticleAttachmentAdapter extends globalAndroid.widget.ArrayAdapter<zendesk.support.HelpCenterAttachment> {
					public static class: java.lang.Class<zendesk.support.guide.ViewArticleActivity.ArticleAttachmentAdapter>;
					public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
				export class ArticleAttachmentRow {
					public static class: java.lang.Class<zendesk.support.guide.ViewArticleActivity.ArticleAttachmentRow>;
					public constructor(param0: globalAndroid.content.Context);
					public bind(param0: zendesk.support.HelpCenterAttachment): void;
				}
				export class AttachmentRequestCallback extends zendesk.service.ZendeskCallback<java.util.List<zendesk.support.HelpCenterAttachment>> {
					public static class: java.lang.Class<zendesk.support.guide.ViewArticleActivity.AttachmentRequestCallback>;
					public onSuccess(param0: java.util.List<zendesk.support.HelpCenterAttachment>): void;
					public onError(param0: zendesk.service.ErrorResponse): void;
					public onSuccess(param0: any): void;
				}
				export class LoadingState {
					public static class: java.lang.Class<zendesk.support.guide.ViewArticleActivity.LoadingState>;
					public static LOADING: zendesk.support.guide.ViewArticleActivity.LoadingState;
					public static DISPLAYING: zendesk.support.guide.ViewArticleActivity.LoadingState;
					public static ERRORED: zendesk.support.guide.ViewArticleActivity.LoadingState;
					public static ERRORED_ATTACHMENT: zendesk.support.guide.ViewArticleActivity.LoadingState;
					public static valueOf(param0: string): zendesk.support.guide.ViewArticleActivity.LoadingState;
					public static values(): native.Array<zendesk.support.guide.ViewArticleActivity.LoadingState>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module guide {
			export class ViewArticleActivity_MembersInjector extends dagger.MembersInjector<zendesk.support.guide.ViewArticleActivity> {
				public static class: java.lang.Class<zendesk.support.guide.ViewArticleActivity_MembersInjector>;
				public static injectActionHandlerRegistry(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.core.ActionHandlerRegistry): void;
				public static injectSupportSettingsProvider(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.support.SupportSettingsProvider): void;
				public static injectApplicationConfiguration(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.core.ApplicationConfiguration): void;
				public static injectHelpCenterProvider(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.support.HelpCenterProvider): void;
				public static injectDeepLinkHelper(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.support.ZendeskDeepLinkHelper): void;
				public injectMembers(param0: zendesk.support.guide.ViewArticleActivity): void;
				public injectMembers(param0: any): void;
				public static create(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param2: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param3: javax.inject.Provider<zendesk.support.ArticleVoteStorage>, param4: javax.inject.Provider<zendesk.support.ZendeskDeepLinkHelper>, param5: javax.inject.Provider<zendesk.core.NetworkInfoProvider>, param6: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param7: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>): dagger.MembersInjector<zendesk.support.guide.ViewArticleActivity>;
				public constructor(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<zendesk.core.ApplicationConfiguration>, param2: javax.inject.Provider<zendesk.support.HelpCenterProvider>, param3: javax.inject.Provider<zendesk.support.ArticleVoteStorage>, param4: javax.inject.Provider<zendesk.support.ZendeskDeepLinkHelper>, param5: javax.inject.Provider<zendesk.core.NetworkInfoProvider>, param6: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param7: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>);
				public static injectOkHttpClient(param0: zendesk.support.guide.ViewArticleActivity, param1: okhttp3.OkHttpClient): void;
				public static injectArticleVoteStorage(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.support.ArticleVoteStorage): void;
				public static injectNetworkInfoProvider(param0: zendesk.support.guide.ViewArticleActivity, param1: zendesk.core.NetworkInfoProvider): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionCreateComment extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionCreateComment>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
			export module ActionCreateComment {
				export class CreateCommentResult {
					public static class: java.lang.Class<zendesk.support.request.ActionCreateComment.CreateCommentResult>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionFactory {
				public static class: java.lang.Class<zendesk.support.request.ActionFactory>;
			}
			export module ActionFactory {
				export class ErrorAction<E>  extends zendesk.suas.Action<any> {
					public static class: java.lang.Class<zendesk.support.request.ActionFactory.ErrorAction<any>>;
					public getErrorResponse(): zendesk.service.ErrorResponse;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionInstallConfiguration extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionInstallConfiguration>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionLoadCachedComments extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionLoadCachedComments>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
			export module ActionLoadCachedComments {
				export class LoadComments {
					public static class: java.lang.Class<zendesk.support.request.ActionLoadCachedComments.LoadComments>;
					public run(): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionLoadComments extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionLoadComments>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
			export module ActionLoadComments {
				export abstract class MinimumTimeCallback<E>  extends zendesk.service.ZendeskCallback<any> {
					public static class: java.lang.Class<zendesk.support.request.ActionLoadComments.MinimumTimeCallback<any>>;
					public onDelayedError(param0: zendesk.service.ErrorResponse): void;
					public onError(param0: zendesk.service.ErrorResponse): void;
					public onDelayedSuccess(param0: any): void;
					public onSuccess(param0: any): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionLoadRequest extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionLoadRequest>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionLoadSettings extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionLoadSettings>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ActionUpdateNameEmail extends zendesk.support.request.AsyncMiddleware.AsyncAction {
				public static class: java.lang.Class<zendesk.support.request.ActionUpdateNameEmail>;
				public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class AdapterAttachmentCarousel extends globalAndroid.support.v7.widget.RecyclerView.Adapter<zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder> {
				public static class: java.lang.Class<zendesk.support.request.AdapterAttachmentCarousel>;
				public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder;
				public getItemId(param0: number): number;
				public getItemViewType(param0: number): number;
				public onBindViewHolder(param0: zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder, param1: number): void;
				public getItemCount(): number;
			}
			export module AdapterAttachmentCarousel {
				export abstract class CarouselViewHolder {
					public static class: java.lang.Class<zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder>;
				}
				export module CarouselViewHolder {
					export class OnRemoveListener {
						public static class: java.lang.Class<zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder.OnRemoveListener>;
						/**
						 * Constructs a new instance of the zendesk.support.request.AdapterAttachmentCarousel$CarouselViewHolder$OnRemoveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onRemove(param0: zendesk.support.request.StateRequestAttachment): void;
						});
						public constructor();
						public onRemove(param0: zendesk.support.request.StateRequestAttachment): void;
					}
				}
				export class FileAttachmentViewHolder extends zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder {
					public static class: java.lang.Class<zendesk.support.request.AdapterAttachmentCarousel.FileAttachmentViewHolder>;
				}
				export class ImageAttachmentViewHolder extends zendesk.support.request.AdapterAttachmentCarousel.CarouselViewHolder {
					public static class: java.lang.Class<zendesk.support.request.AdapterAttachmentCarousel.ImageAttachmentViewHolder>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class AsyncMiddleware extends zendesk.suas.Middleware {
				public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware>;
				public onAction(param0: zendesk.suas.Action<any>, param1: zendesk.suas.GetState, param2: zendesk.suas.Dispatcher, param3: zendesk.suas.Continuation): void;
			}
			export module AsyncMiddleware {
				export class AsyncAction {
					public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware.AsyncAction>;
					/**
					 * Constructs a new instance of the zendesk.support.request.AsyncMiddleware$AsyncAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
						execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
					});
					public constructor();
					public actionQueued(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState): void;
					public execute(param0: zendesk.suas.Dispatcher, param1: zendesk.suas.GetState, param2: zendesk.support.request.AsyncMiddleware.Callback): void;
				}
				export class Callback {
					public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware.Callback>;
					/**
					 * Constructs a new instance of the zendesk.support.request.AsyncMiddleware$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						done(): void;
					});
					public constructor();
					public done(): void;
				}
				export class Item {
					public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware.Item>;
					/**
					 * Constructs a new instance of the zendesk.support.request.AsyncMiddleware$Item interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						execute(param0: zendesk.support.request.AsyncMiddleware.Callback): void;
					});
					public constructor();
					public execute(param0: zendesk.support.request.AsyncMiddleware.Callback): void;
				}
				export class Queue {
					public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware.Queue>;
				}
				export module Queue {
					export class QueueCallback extends zendesk.support.request.AsyncMiddleware.Callback {
						public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware.Queue.QueueCallback>;
						public done(): void;
					}
				}
				export class QueueItem extends zendesk.support.request.AsyncMiddleware.Item {
					public static class: java.lang.Class<zendesk.support.request.AsyncMiddleware.QueueItem>;
					public execute(param0: zendesk.support.request.AsyncMiddleware.Callback): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class AttachmentDownloadService {
				public static class: java.lang.Class<zendesk.support.request.AttachmentDownloadService>;
			}
			export module AttachmentDownloadService {
				export class SaveToFileTask {
					public static class: java.lang.Class<zendesk.support.request.AttachmentDownloadService.SaveToFileTask>;
					public run(): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class AttachmentDownloaderComponent extends zendesk.suas.Listener<zendesk.support.request.StateConversation> {
				public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent>;
				public update(param0: any): void;
				public update(param0: zendesk.support.request.StateConversation): void;
			}
			export module AttachmentDownloaderComponent {
				export class AttachmentDownloader {
					public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader>;
				}
				export module AttachmentDownloader {
					export class CacheCallback extends zendesk.service.ZendeskCallback<zendesk.belvedere.MediaResult> {
						public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader.CacheCallback>;
						public onSuccess(param0: zendesk.belvedere.MediaResult): void;
						public onSuccess(param0: any): void;
						public onError(param0: zendesk.service.ErrorResponse): void;
					}
					export class HttpCallback extends zendesk.service.ZendeskCallback<okhttp3.ResponseBody> {
						public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader.HttpCallback>;
						public onSuccess(param0: any): void;
						public onError(param0: zendesk.service.ErrorResponse): void;
						public onSuccess(param0: okhttp3.ResponseBody): void;
					}
					export class Request {
						public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader.Request>;
					}
				}
				export class AttachmentDownloaderSelector {
					public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloaderSelector>;
					public selectData(param0: zendesk.support.request.StateConversation): java.util.List<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader.Request>;
				}
				export class DownloadCallback extends zendesk.service.ZendeskCallback<zendesk.belvedere.MediaResult> {
					public static class: java.lang.Class<zendesk.support.request.AttachmentDownloaderComponent.DownloadCallback>;
					public onError(param0: zendesk.service.ErrorResponse): void;
					public onSuccess(param0: zendesk.belvedere.MediaResult): void;
					public onSuccess(param0: any): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class AttachmentHelper {
				public static class: java.lang.Class<zendesk.support.request.AttachmentHelper>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class AttachmentUploadService {
				public static class: java.lang.Class<zendesk.support.request.AttachmentUploadService>;
			}
			export module AttachmentUploadService {
				export class AttachmentUploadResult {
					public static class: java.lang.Class<zendesk.support.request.AttachmentUploadService.AttachmentUploadResult>;
				}
				export class AttachmentsCallback extends zendesk.service.ZendeskCallback<zendesk.support.UploadResponse> {
					public static class: java.lang.Class<zendesk.support.request.AttachmentUploadService.AttachmentsCallback>;
					public onSuccess(param0: zendesk.support.UploadResponse): void;
					public onError(param0: zendesk.service.ErrorResponse): void;
					public onSuccess(param0: any): void;
				}
				export class ResolveCallback extends zendesk.belvedere.Callback<java.util.List<zendesk.belvedere.MediaResult>> {
					public static class: java.lang.Class<zendesk.support.request.AttachmentUploadService.ResolveCallback>;
					public success(param0: any): void;
					public success(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellAgentAttachmentGeneric extends zendesk.support.request.CellBase implements zendesk.support.request.CellType.Attachment, zendesk.support.request.CellType.Agent {
				public static class: java.lang.Class<zendesk.support.request.CellAgentAttachmentGeneric>;
				public getInsets(): globalAndroid.graphics.Rect;
				public getLayoutId(): number;
				public getPositionType(): number;
				public getTimeStamp(): java.util.Date;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public setPositionType(param0: number): void;
				public getUniqueId(): number;
				public getGroupId(): number;
				public isAgentNameVisible(): boolean;
				public getAgent(): zendesk.support.request.StateRequestUser;
				public showAgentName(param0: boolean): void;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
				public getAttachment(): zendesk.support.request.StateRequestAttachment;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellAgentAttachmentImage extends zendesk.support.request.CellBase implements zendesk.support.request.CellType.Attachment, zendesk.support.request.CellType.Agent {
				public static class: java.lang.Class<zendesk.support.request.CellAgentAttachmentImage>;
				public getInsets(): globalAndroid.graphics.Rect;
				public getLayoutId(): number;
				public getPositionType(): number;
				public getTimeStamp(): java.util.Date;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public setPositionType(param0: number): void;
				public getUniqueId(): number;
				public getGroupId(): number;
				public isAgentNameVisible(): boolean;
				public getAgent(): zendesk.support.request.StateRequestUser;
				public showAgentName(param0: boolean): void;
				public getAttachment(): zendesk.support.request.StateRequestAttachment;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellAgentMessage extends zendesk.support.request.CellBase implements zendesk.support.request.CellType.Message, zendesk.support.request.CellType.Agent {
				public static class: java.lang.Class<zendesk.support.request.CellAgentMessage>;
				public getInsets(): globalAndroid.graphics.Rect;
				public getLayoutId(): number;
				public getPositionType(): number;
				public getTimeStamp(): java.util.Date;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public setPositionType(param0: number): void;
				public getUniqueId(): number;
				public getGroupId(): number;
				public isAgentNameVisible(): boolean;
				public getAgent(): zendesk.support.request.StateRequestUser;
				public getMessage(): string;
				public showAgentName(param0: boolean): void;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellAttachmentLoadingUtil {
				public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil>;
			}
			export module CellAttachmentLoadingUtil {
				export class ImageLoadingLogic {
					public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic>;
				}
				export module ImageLoadingLogic {
					export class DefaultDisplayStrategy extends zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.LoadingStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.DefaultDisplayStrategy>;
						public load(param0: globalAndroid.widget.ImageView, param1: zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions): void;
					}
					export class DisplayImageFromLocalSource extends zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.LoadingStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.DisplayImageFromLocalSource>;
						public load(param0: globalAndroid.widget.ImageView, param1: zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions): void;
					}
					export class DisplayImageFromWeb extends zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.LoadingStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.DisplayImageFromWeb>;
						public load(param0: globalAndroid.widget.ImageView, param1: zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions): void;
					}
					export class LoadingStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageLoadingLogic.LoadingStrategy>;
						/**
						 * Constructs a new instance of the zendesk.support.request.CellAttachmentLoadingUtil$ImageLoadingLogic$LoadingStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							load(param0: globalAndroid.widget.ImageView, param1: zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions): void;
						});
						public constructor();
						public load(param0: globalAndroid.widget.ImageView, param1: zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions): void;
					}
				}
				export class ImageSizingLogic {
					public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic>;
				}
				export module ImageSizingLogic {
					export class DefaultStrategy extends zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.DimensionStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.DefaultStrategy>;
						public findDimensions(param0: zendesk.service.ZendeskCallback<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>): void;
					}
					export class DimensionStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.DimensionStrategy>;
						/**
						 * Constructs a new instance of the zendesk.support.request.CellAttachmentLoadingUtil$ImageSizingLogic$DimensionStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							findDimensions(param0: zendesk.service.ZendeskCallback<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>): void;
						});
						public constructor();
						public findDimensions(param0: zendesk.service.ZendeskCallback<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>): void;
					}
					export class ExistingDimensions extends zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.DimensionStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ExistingDimensions>;
						public findDimensions(param0: zendesk.service.ZendeskCallback<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>): void;
					}
					export class ImageDimensions {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>;
						public toString(): string;
					}
					export class ReadFromBitmap extends zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.DimensionStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ReadFromBitmap>;
						public findDimensions(param0: zendesk.service.ZendeskCallback<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>): void;
					}
					export class ReadFromPicasso extends zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.DimensionStrategy {
						public static class: java.lang.Class<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ReadFromPicasso>;
						public findDimensions(param0: zendesk.service.ZendeskCallback<zendesk.support.request.CellAttachmentLoadingUtil.ImageSizingLogic.ImageDimensions>): void;
					}
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export abstract class CellBase extends zendesk.support.request.CellType.Base {
				public static class: java.lang.Class<zendesk.support.request.CellBase>;
				public utils: zendesk.support.request.CellBindHelper;
				public getTimeStamp(): java.util.Date;
				public getUniqueId(): number;
				public setPositionType(param0: number): void;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public getGroupId(): number;
				public getLayoutId(): number;
				public getInsets(): globalAndroid.graphics.Rect;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
				public getPositionType(): number;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellBindHelper {
				public static class: java.lang.Class<zendesk.support.request.CellBindHelper>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellFactory {
				public static class: java.lang.Class<zendesk.support.request.CellFactory>;
				public generateCells(param0: java.util.List<zendesk.support.request.StateMessage>, param1: java.util.List<zendesk.support.request.StateRequestUser>, param2: zendesk.support.RequestStatus, param3: string): java.util.List<zendesk.support.request.CellType.Base>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellMarginDecorator {
				public static class: java.lang.Class<zendesk.support.request.CellMarginDecorator>;
				public static CELL: number;
				public static CELL_START_BLOCK: number;
				public static CELL_WITH_LABEL: number;
				public static CELL_LAST: number;
				public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: globalAndroid.view.View, param2: globalAndroid.support.v7.widget.RecyclerView, param3: globalAndroid.support.v7.widget.RecyclerView.State): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellSystemMessages {
				public static class: java.lang.Class<zendesk.support.request.CellSystemMessages>;
			}
			export module CellSystemMessages {
				export class CellDateMessage extends zendesk.support.request.CellBase {
					public static class: java.lang.Class<zendesk.support.request.CellSystemMessages.CellDateMessage>;
					public getUniqueId(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getLayoutId(): number;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
				export class CellRequestStatus extends zendesk.support.request.CellBase {
					public static class: java.lang.Class<zendesk.support.request.CellSystemMessages.CellRequestStatus>;
					public getUniqueId(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getLayoutId(): number;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
				export class CellSystemMessage extends zendesk.support.request.CellBase {
					public static class: java.lang.Class<zendesk.support.request.CellSystemMessages.CellSystemMessage>;
					public getUniqueId(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getLayoutId(): number;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellType {
				public static class: java.lang.Class<zendesk.support.request.CellType>;
				/**
				 * Constructs a new instance of the zendesk.support.request.CellType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
			export module CellType {
				export class Agent extends zendesk.support.request.CellType.Base {
					public static class: java.lang.Class<zendesk.support.request.CellType.Agent>;
					/**
					 * Constructs a new instance of the zendesk.support.request.CellType$Agent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						showAgentName(param0: boolean): void;
						isAgentNameVisible(): boolean;
						getAgent(): zendesk.support.request.StateRequestUser;
						getPositionType(): number;
						setPositionType(param0: number): void;
						getUniqueId(): number;
						getGroupId(): number;
						getLayoutId(): number;
						bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
						areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
						getTimeStamp(): java.util.Date;
						getInsets(): globalAndroid.graphics.Rect;
					});
					public constructor();
					public getUniqueId(): number;
					public isAgentNameVisible(): boolean;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getAgent(): zendesk.support.request.StateRequestUser;
					public getLayoutId(): number;
					public showAgentName(param0: boolean): void;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
				export class Attachment extends zendesk.support.request.CellType.Base {
					public static class: java.lang.Class<zendesk.support.request.CellType.Attachment>;
					/**
					 * Constructs a new instance of the zendesk.support.request.CellType$Attachment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAttachment(): zendesk.support.request.StateRequestAttachment;
						getPositionType(): number;
						setPositionType(param0: number): void;
						getUniqueId(): number;
						getGroupId(): number;
						getLayoutId(): number;
						bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
						areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
						getTimeStamp(): java.util.Date;
						getInsets(): globalAndroid.graphics.Rect;
					});
					public constructor();
					public getUniqueId(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getAttachment(): zendesk.support.request.StateRequestAttachment;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getLayoutId(): number;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
				export class Base {
					public static class: java.lang.Class<zendesk.support.request.CellType.Base>;
					/**
					 * Constructs a new instance of the zendesk.support.request.CellType$Base interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getPositionType(): number;
						setPositionType(param0: number): void;
						getUniqueId(): number;
						getGroupId(): number;
						getLayoutId(): number;
						bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
						areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
						getTimeStamp(): java.util.Date;
						getInsets(): globalAndroid.graphics.Rect;
					});
					public constructor();
					public getUniqueId(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getLayoutId(): number;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
				export class Message extends zendesk.support.request.CellType.Base {
					public static class: java.lang.Class<zendesk.support.request.CellType.Message>;
					/**
					 * Constructs a new instance of the zendesk.support.request.CellType$Message interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getMessage(): string;
						getPositionType(): number;
						setPositionType(param0: number): void;
						getUniqueId(): number;
						getGroupId(): number;
						getLayoutId(): number;
						bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
						areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
						getTimeStamp(): java.util.Date;
						getInsets(): globalAndroid.graphics.Rect;
					});
					public constructor();
					public getUniqueId(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getGroupId(): number;
					public getLayoutId(): number;
					public getMessage(): string;
					public setPositionType(param0: number): void;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
					public getPositionType(): number;
				}
				export class Stateful extends zendesk.support.request.CellType.Base {
					public static class: java.lang.Class<zendesk.support.request.CellType.Stateful>;
					/**
					 * Constructs a new instance of the zendesk.support.request.CellType$Stateful interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						markAsDelivered(): zendesk.support.request.CellType.Stateful;
						markAsErrored(param0: java.util.List<zendesk.support.request.StateMessage>, param1: boolean): zendesk.support.request.CellType.Stateful;
						getStateMessage(): zendesk.support.request.StateMessage;
						getErrorGroupMessages(): java.util.List<zendesk.support.request.StateMessage>;
						isMarkedAsDelivered(): boolean;
						isErrorShown(): boolean;
						isLastErrorCellOfBlock(): boolean;
						getPositionType(): number;
						setPositionType(param0: number): void;
						getUniqueId(): number;
						getGroupId(): number;
						getLayoutId(): number;
						bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
						areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
						getTimeStamp(): java.util.Date;
						getInsets(): globalAndroid.graphics.Rect;
					});
					public constructor();
					public getErrorGroupMessages(): java.util.List<zendesk.support.request.StateMessage>;
					public getUniqueId(): number;
					public isErrorShown(): boolean;
					public isMarkedAsDelivered(): boolean;
					public getGroupId(): number;
					public setPositionType(param0: number): void;
					public markAsDelivered(): zendesk.support.request.CellType.Stateful;
					public isLastErrorCellOfBlock(): boolean;
					public markAsErrored(param0: java.util.List<zendesk.support.request.StateMessage>, param1: boolean): zendesk.support.request.CellType.Stateful;
					public getPositionType(): number;
					public getTimeStamp(): java.util.Date;
					public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
					public getInsets(): globalAndroid.graphics.Rect;
					public getLayoutId(): number;
					public getStateMessage(): zendesk.support.request.StateMessage;
					public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellUserAttachmentGeneric extends zendesk.support.request.CellBase implements zendesk.support.request.CellType.Attachment, zendesk.support.request.CellType.Stateful {
				public static class: java.lang.Class<zendesk.support.request.CellUserAttachmentGeneric>;
				public isErrorShown(): boolean;
				public markAsErrored(param0: java.util.List<zendesk.support.request.StateMessage>, param1: boolean): zendesk.support.request.CellType.Stateful;
				public getInsets(): globalAndroid.graphics.Rect;
				public getLayoutId(): number;
				public getPositionType(): number;
				public getErrorGroupMessages(): java.util.List<zendesk.support.request.StateMessage>;
				public getStateMessage(): zendesk.support.request.StateMessage;
				public getTimeStamp(): java.util.Date;
				public markAsDelivered(): zendesk.support.request.CellType.Stateful;
				public isLastErrorCellOfBlock(): boolean;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public setPositionType(param0: number): void;
				public getUniqueId(): number;
				public getGroupId(): number;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
				public getAttachment(): zendesk.support.request.StateRequestAttachment;
				public isMarkedAsDelivered(): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellUserAttachmentImage extends zendesk.support.request.CellBase implements zendesk.support.request.CellType.Attachment, zendesk.support.request.CellType.Stateful {
				public static class: java.lang.Class<zendesk.support.request.CellUserAttachmentImage>;
				public isErrorShown(): boolean;
				public markAsErrored(param0: java.util.List<zendesk.support.request.StateMessage>, param1: boolean): zendesk.support.request.CellType.Stateful;
				public getInsets(): globalAndroid.graphics.Rect;
				public getLayoutId(): number;
				public getPositionType(): number;
				public getErrorGroupMessages(): java.util.List<zendesk.support.request.StateMessage>;
				public getStateMessage(): zendesk.support.request.StateMessage;
				public getTimeStamp(): java.util.Date;
				public markAsDelivered(): zendesk.support.request.CellType.Stateful;
				public isLastErrorCellOfBlock(): boolean;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public setPositionType(param0: number): void;
				public getUniqueId(): number;
				public getGroupId(): number;
				public getAttachment(): zendesk.support.request.StateRequestAttachment;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
				public isMarkedAsDelivered(): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class CellUserMessage extends zendesk.support.request.CellBase implements zendesk.support.request.CellType.Message, zendesk.support.request.CellType.Stateful {
				public static class: java.lang.Class<zendesk.support.request.CellUserMessage>;
				public isErrorShown(): boolean;
				public markAsErrored(param0: java.util.List<zendesk.support.request.StateMessage>, param1: boolean): zendesk.support.request.CellType.Stateful;
				public getInsets(): globalAndroid.graphics.Rect;
				public getLayoutId(): number;
				public getPositionType(): number;
				public getErrorGroupMessages(): java.util.List<zendesk.support.request.StateMessage>;
				public getStateMessage(): zendesk.support.request.StateMessage;
				public getTimeStamp(): java.util.Date;
				public markAsDelivered(): zendesk.support.request.CellType.Stateful;
				public isLastErrorCellOfBlock(): boolean;
				public bind(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				public setPositionType(param0: number): void;
				public getUniqueId(): number;
				public getGroupId(): number;
				public getMessage(): string;
				public areContentsTheSame(param0: zendesk.support.request.CellType.Base): boolean;
				public isMarkedAsDelivered(): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentAttachmentCarousel extends java.lang.Object {
				public static class: java.lang.Class<zendesk.support.request.ComponentAttachmentCarousel>;
				public update(param0: zendesk.support.request.ComponentAttachmentCarousel.AttachmentCarouselModel): void;
				public onMenuItemsInflated(param0: globalAndroid.view.MenuItem, param1: globalAndroid.view.MenuItem): void;
				public onDismissed(): void;
				public onVisible(): void;
				public onMenuItemsClicked(param0: globalAndroid.view.MenuItem): void;
				public onMediaDeselected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
				public update(param0: any): void;
				public onMediaSelected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
			}
			export module ComponentAttachmentCarousel {
				export class AttachmentCarouselModel {
					public static class: java.lang.Class<zendesk.support.request.ComponentAttachmentCarousel.AttachmentCarouselModel>;
				}
				export class AttachmentCarouselSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentAttachmentCarousel.AttachmentCarouselModel> {
					public static class: java.lang.Class<zendesk.support.request.ComponentAttachmentCarousel.AttachmentCarouselSelector>;
					public selectData(param0: zendesk.suas.State): any;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentAttachmentCarousel.AttachmentCarouselModel;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentDialog extends zendesk.suas.Listener<zendesk.support.request.StateUi> {
				public static class: java.lang.Class<zendesk.support.request.ComponentDialog>;
				public update(param0: zendesk.support.request.StateUi): void;
				public update(param0: any): void;
			}
			export module ComponentDialog {
				export class OnDismissedListener {
					public static class: java.lang.Class<zendesk.support.request.ComponentDialog.OnDismissedListener>;
					public onDismiss(param0: globalAndroid.content.DialogInterface): void;
				}
				export class RetryDialogListener extends zendesk.support.request.RetryDialog.Listener {
					public static class: java.lang.Class<zendesk.support.request.ComponentDialog.RetryDialogListener>;
					public onRetryMessage(param0: java.util.List<zendesk.support.request.StateMessage>): void;
					public onDeleteMessage(param0: java.util.List<zendesk.support.request.StateMessage>): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentError extends zendesk.suas.Listener<zendesk.support.request.ComponentError.ErrorStateModel> {
				public static class: java.lang.Class<zendesk.support.request.ComponentError>;
				public update(param0: any): void;
				public update(param0: zendesk.support.request.ComponentError.ErrorStateModel): void;
			}
			export module ComponentError {
				export class ErrorStateModel {
					public static class: java.lang.Class<zendesk.support.request.ComponentError.ErrorStateModel>;
				}
				export class ErrorStateSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentError.ErrorStateModel> {
					public static class: java.lang.Class<zendesk.support.request.ComponentError.ErrorStateSelector>;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentError.ErrorStateModel;
					public selectData(param0: zendesk.suas.State): any;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentInputForm extends java.lang.Object {
				public static class: java.lang.Class<zendesk.support.request.ComponentInputForm>;
				public onMenuItemsInflated(param0: globalAndroid.view.MenuItem, param1: globalAndroid.view.MenuItem): void;
				public onKeyboardDismissed(): void;
				public onMenuItemsClicked(param0: globalAndroid.view.MenuItem): void;
				public onKeyboardVisible(): void;
				public update(param0: any): void;
				public update(param0: zendesk.support.request.ComponentInputForm.InputFormModel): void;
			}
			export module ComponentInputForm {
				export class EditTextTextWatcher {
					public static class: java.lang.Class<zendesk.support.request.ComponentInputForm.EditTextTextWatcher>;
					public afterTextChanged(param0: globalAndroid.text.Editable): void;
					public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				}
				export class EmailFieldFocusListener {
					public static class: java.lang.Class<zendesk.support.request.ComponentInputForm.EmailFieldFocusListener>;
					public onFocusChange(param0: globalAndroid.view.View, param1: boolean): void;
				}
				export class InputFormModel {
					public static class: java.lang.Class<zendesk.support.request.ComponentInputForm.InputFormModel>;
					public isLoading(): boolean;
				}
				export class InputFormSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentInputForm.InputFormModel> {
					public static class: java.lang.Class<zendesk.support.request.ComponentInputForm.InputFormSelector>;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentInputForm.InputFormModel;
					public selectData(param0: zendesk.suas.State): any;
				}
				export class Validator<T>  extends java.lang.Object {
					public static class: java.lang.Class<zendesk.support.request.ComponentInputForm.Validator<any>>;
					/**
					 * Constructs a new instance of the zendesk.support.request.ComponentInputForm$Validator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isValid(param0: T): boolean;
					});
					public constructor();
					public isValid(param0: T): boolean;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentMessageComposer extends java.lang.Object {
				public static class: java.lang.Class<zendesk.support.request.ComponentMessageComposer>;
				public onDismissed(): void;
				public update(param0: zendesk.support.request.ComponentMessageComposer.MessageComposerModel): void;
				public onVisible(): void;
				public onMediaDeselected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
				public update(param0: any): void;
				public getSelector(): zendesk.suas.StateSelector<zendesk.support.request.ComponentMessageComposer.MessageComposerModel>;
				public onMediaSelected(param0: java.util.List<zendesk.belvedere.MediaResult>): void;
				public onAddAttachmentsRequested(): void;
				public onSendMessageRequested(param0: string): void;
			}
			export module ComponentMessageComposer {
				export class MessageComposerModel {
					public static class: java.lang.Class<zendesk.support.request.ComponentMessageComposer.MessageComposerModel>;
				}
				export class MessageComposerSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentMessageComposer.MessageComposerModel> {
					public static class: java.lang.Class<zendesk.support.request.ComponentMessageComposer.MessageComposerSelector>;
					public selectData(param0: zendesk.suas.State): any;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentMessageComposer.MessageComposerModel;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentPersistence extends zendesk.suas.Listener<zendesk.support.request.ComponentPersistence.RequestPersistenceModel> {
				public static class: java.lang.Class<zendesk.support.request.ComponentPersistence>;
				public update(param0: zendesk.support.request.ComponentPersistence.RequestPersistenceModel): void;
				public update(param0: any): void;
			}
			export module ComponentPersistence {
				export class Item {
					public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.Item>;
					/**
					 * Constructs a new instance of the zendesk.support.request.ComponentPersistence$Item interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						persist(): void;
					});
					public constructor();
					public persist(): void;
				}
				export class PersistenceItem extends zendesk.support.request.ComponentPersistence.Item {
					public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.PersistenceItem>;
					public persist(): void;
				}
				export class PersistenceQueue {
					public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.PersistenceQueue>;
					public constructor(param0: java.util.concurrent.Executor);
				}
				export module PersistenceQueue {
					export class Worker {
						public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.PersistenceQueue.Worker>;
						public run(): void;
					}
				}
				export class PersistenceSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentPersistence.RequestPersistenceModel> {
					public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.PersistenceSelector>;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentPersistence.RequestPersistenceModel;
					public selectData(param0: zendesk.suas.State): any;
				}
				export class RequestIdMapper {
					public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.RequestIdMapper>;
					public constructor();
				}
				export class RequestPersistenceModel {
					public static class: java.lang.Class<zendesk.support.request.ComponentPersistence.RequestPersistenceModel>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentRequestAdapter extends zendesk.suas.Listener<java.util.List<zendesk.support.request.CellType.Base>> {
				public static class: java.lang.Class<zendesk.support.request.ComponentRequestAdapter>;
				public update(param0: java.util.List<zendesk.support.request.CellType.Base>): void;
				public update(param0: any): void;
			}
			export module ComponentRequestAdapter {
				export class DiffCalculator {
					public static class: java.lang.Class<zendesk.support.request.ComponentRequestAdapter.DiffCalculator>;
					public getNewListSize(): number;
					public areContentsTheSame(param0: number, param1: number): boolean;
					public getOldListSize(): number;
					public areItemsTheSame(param0: number, param1: number): boolean;
				}
				export class RequestAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<zendesk.support.request.ComponentRequestAdapter.RequestViewHolder> {
					public static class: java.lang.Class<zendesk.support.request.ComponentRequestAdapter.RequestAdapter>;
					public getItemCount(): number;
					public getItemViewType(param0: number): number;
					public onBindViewHolder(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder, param1: number): void;
					public getItemId(param0: number): number;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): zendesk.support.request.ComponentRequestAdapter.RequestViewHolder;
					public onViewDetachedFromWindow(param0: zendesk.support.request.ComponentRequestAdapter.RequestViewHolder): void;
				}
				export class RequestAdapterSelector extends zendesk.suas.StateSelector<java.util.List<zendesk.support.request.CellType.Base>> {
					public static class: java.lang.Class<zendesk.support.request.ComponentRequestAdapter.RequestAdapterSelector>;
					public selectData(param0: zendesk.suas.State): java.util.List<zendesk.support.request.CellType.Base>;
					public selectData(param0: zendesk.suas.State): any;
				}
				export class RequestViewHolder {
					public static class: java.lang.Class<zendesk.support.request.ComponentRequestAdapter.RequestViewHolder>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentRequestRouter extends zendesk.suas.Listener<zendesk.support.request.ComponentRequestRouter.RequestScreen> {
				public static class: java.lang.Class<zendesk.support.request.ComponentRequestRouter>;
				public update(param0: zendesk.support.request.ComponentRequestRouter.RequestScreen): void;
				public update(param0: any): void;
			}
			export module ComponentRequestRouter {
				export class RequestRouterSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentRequestRouter.RequestScreen> {
					public static class: java.lang.Class<zendesk.support.request.ComponentRequestRouter.RequestRouterSelector>;
					public selectData(param0: zendesk.suas.State): any;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentRequestRouter.RequestScreen;
				}
				export class RequestScreen {
					public static class: java.lang.Class<zendesk.support.request.ComponentRequestRouter.RequestScreen>;
					public static Loading: zendesk.support.request.ComponentRequestRouter.RequestScreen;
					public static EmailForm: zendesk.support.request.ComponentRequestRouter.RequestScreen;
					public static Conversation: zendesk.support.request.ComponentRequestRouter.RequestScreen;
					public static Fin: zendesk.support.request.ComponentRequestRouter.RequestScreen;
					public static valueOf(param0: string): zendesk.support.request.ComponentRequestRouter.RequestScreen;
					public static values(): native.Array<zendesk.support.request.ComponentRequestRouter.RequestScreen>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentToolbar extends zendesk.suas.Listener<zendesk.support.request.ComponentToolbar.ToolbarModel> {
				public static class: java.lang.Class<zendesk.support.request.ComponentToolbar>;
				public update(param0: zendesk.support.request.ComponentToolbar.ToolbarModel): void;
				public update(param0: any): void;
			}
			export module ComponentToolbar {
				export class ToolbarModel {
					public static class: java.lang.Class<zendesk.support.request.ComponentToolbar.ToolbarModel>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
				export class ToolbarSelector extends zendesk.suas.StateSelector<zendesk.support.request.ComponentToolbar.ToolbarModel> {
					public static class: java.lang.Class<zendesk.support.request.ComponentToolbar.ToolbarSelector>;
					public selectData(param0: zendesk.suas.State): zendesk.support.request.ComponentToolbar.ToolbarModel;
					public selectData(param0: zendesk.suas.State): any;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ComponentUpdateActionHandlers extends zendesk.suas.Listener<zendesk.support.request.StateConversation> {
				public static class: java.lang.Class<zendesk.support.request.ComponentUpdateActionHandlers>;
				public update(param0: any): void;
				public update(param0: zendesk.support.request.StateConversation): void;
			}
			export module ComponentUpdateActionHandlers {
				export class RefreshCallback extends zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>> {
					public static class: java.lang.Class<zendesk.support.request.ComponentUpdateActionHandlers.RefreshCallback>;
					public onError(param0: zendesk.service.ErrorResponse): void;
					public onSuccess(param0: java.util.List<zendesk.support.requestlist.RequestInfo>): void;
					public onSuccess(param0: any): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class DocumentRenderer {
				public static class: java.lang.Class<zendesk.support.request.DocumentRenderer>;
			}
			export module DocumentRenderer {
				export class HtmlParser {
					public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.HtmlParser>;
				}
				export class Node {
					public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Node>;
					public getText(): string;
					public getType(): zendesk.support.request.DocumentRenderer.Node.Type;
					public getParent(): zendesk.support.request.DocumentRenderer.Node;
				}
				export module Node {
					export class Type {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Node.Type>;
						public static B: zendesk.support.request.DocumentRenderer.Node.Type;
						public static I: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Code: zendesk.support.request.DocumentRenderer.Node.Type;
						public static H1: zendesk.support.request.DocumentRenderer.Node.Type;
						public static H2: zendesk.support.request.DocumentRenderer.Node.Type;
						public static H3: zendesk.support.request.DocumentRenderer.Node.Type;
						public static H4: zendesk.support.request.DocumentRenderer.Node.Type;
						public static H5: zendesk.support.request.DocumentRenderer.Node.Type;
						public static H6: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Strong: zendesk.support.request.DocumentRenderer.Node.Type;
						public static U: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Em: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Br: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Hr: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Div: zendesk.support.request.DocumentRenderer.Node.Type;
						public static P: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Li: zendesk.support.request.DocumentRenderer.Node.Type;
						public static A: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Ol: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Ul: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Img: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Text: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Document: zendesk.support.request.DocumentRenderer.Node.Type;
						public static Unknown: zendesk.support.request.DocumentRenderer.Node.Type;
						public static values(): native.Array<zendesk.support.request.DocumentRenderer.Node.Type>;
						public static valueOf(param0: string): zendesk.support.request.DocumentRenderer.Node.Type;
						public getTag(): string;
					}
				}
				export class RichRenderingDocument {
					public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.RichRenderingDocument>;
				}
				export class Style {
					public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style>;
					/**
					 * Constructs a new instance of the zendesk.support.request.DocumentRenderer$Style interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					});
					public constructor();
					public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
				}
				export module Style {
					export class Bold extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Bold>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class Br extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Br>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class CodeSpan extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.CodeSpan>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class Factory {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Factory>;
					}
					export class Header extends zendesk.support.request.DocumentRenderer.Style.Bold {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Header>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class Image extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Image>;
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class Italic extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Italic>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class Li extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Li>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class Link extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Link>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
					export class SpannableHelper {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.SpannableHelper>;
					}
					export class Unknown extends zendesk.support.request.DocumentRenderer.Style {
						public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.Style.Unknown>;
						public constructor();
						public applyStyle(param0: java.util.List<string>, param1: java.util.Map<string,string>): globalAndroid.text.Spannable;
					}
				}
				export class ZendeskUrlSpan {
					public static class: java.lang.Class<zendesk.support.request.DocumentRenderer.ZendeskUrlSpan>;
					public onClick(param0: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class HeadlessComponentListener {
				public static class: java.lang.Class<zendesk.support.request.HeadlessComponentListener>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class HeadlessFragment<E>  extends globalAndroid.support.v4.app.Fragment {
				public static class: java.lang.Class<zendesk.support.request.HeadlessFragment<any>>;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerAndroidLifecycle extends zendesk.suas.Reducer<zendesk.support.request.StateAndroidLifecycle> {
				public static class: java.lang.Class<zendesk.support.request.ReducerAndroidLifecycle>;
				public reduce(param0: any, param1: zendesk.suas.Action<any>): any;
				public getInitialState(): any;
				public getInitialState(): zendesk.support.request.StateAndroidLifecycle;
				public reduce(param0: zendesk.support.request.StateAndroidLifecycle, param1: zendesk.suas.Action<any>): zendesk.support.request.StateAndroidLifecycle;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerAttachments extends zendesk.suas.Reducer<zendesk.support.request.StateAttachments> {
				public static class: java.lang.Class<zendesk.support.request.ReducerAttachments>;
				public reduce(param0: zendesk.support.request.StateAttachments, param1: zendesk.suas.Action<any>): zendesk.support.request.StateAttachments;
				public reduce(param0: any, param1: zendesk.suas.Action<any>): any;
				public getInitialState(): any;
				public getInitialState(): zendesk.support.request.StateAttachments;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerConfiguration extends zendesk.suas.Reducer<zendesk.support.request.StateConfig> {
				public static class: java.lang.Class<zendesk.support.request.ReducerConfiguration>;
				public reduce(param0: zendesk.support.request.StateConfig, param1: zendesk.suas.Action<any>): zendesk.support.request.StateConfig;
				public reduce(param0: any, param1: zendesk.suas.Action<any>): any;
				public getInitialState(): any;
				public getInitialState(): zendesk.support.request.StateConfig;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerConversation extends zendesk.suas.Reducer<zendesk.support.request.StateConversation> {
				public static class: java.lang.Class<zendesk.support.request.ReducerConversation>;
				public reduce(param0: zendesk.support.request.StateConversation, param1: zendesk.suas.Action<any>): zendesk.support.request.StateConversation;
				public reduce(param0: any, param1: zendesk.suas.Action<any>): any;
				public getInitialState(): zendesk.support.request.StateConversation;
				public getInitialState(): any;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerError extends zendesk.suas.Reducer<zendesk.support.request.StateError> {
				public static class: java.lang.Class<zendesk.support.request.ReducerError>;
				public reduce(param0: zendesk.support.request.StateError, param1: zendesk.suas.Action<any>): zendesk.support.request.StateError;
				public reduce(param0: any, param1: zendesk.suas.Action<any>): any;
				public getInitialState(): zendesk.support.request.StateError;
				public getInitialState(): any;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerProgress extends zendesk.suas.Reducer<zendesk.support.request.StateProgress> {
				public static class: java.lang.Class<zendesk.support.request.ReducerProgress>;
				public reduce(param0: any, param1: zendesk.suas.Action<any>): any;
				public reduce(param0: zendesk.support.request.StateProgress, param1: zendesk.suas.Action<any>): zendesk.support.request.StateProgress;
				public getInitialState(): any;
				public getInitialState(): zendesk.support.request.StateProgress;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ReducerUiState extends zendesk.suas.Reducer<zendesk.support.request.StateUi> {
				public static class: java.lang.Class<zendesk.support.request.ReducerUiState>;
				public reduce(param0: any, param1: zendesk.suas.Action<any>): any;
				public reduce(param0: zendesk.support.request.StateUi, param1: zendesk.suas.Action<any>): zendesk.support.request.StateUi;
				public getInitialState(): any;
				public getInitialState(): zendesk.support.request.StateUi;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestAccessibilityHerald extends zendesk.suas.Listener<zendesk.suas.Action<any>> {
				public static class: java.lang.Class<zendesk.support.request.RequestAccessibilityHerald>;
				public update(param0: zendesk.suas.Action<any>): void;
				public update(param0: any): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestActivity {
				public static class: java.lang.Class<zendesk.support.request.RequestActivity>;
				public onBackPressed(): void;
				public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public static builder(): zendesk.support.request.RequestUiConfig.Builder;
				public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
				public onPause(): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public constructor();
			}
			export module RequestActivity {
				export class MoveUpWithSnackbarBehaviour {
					public static class: java.lang.Class<zendesk.support.request.RequestActivity.MoveUpWithSnackbarBehaviour>;
					public onDependentViewChanged(param0: globalAndroid.support.design.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
					public layoutDependsOn(param0: globalAndroid.support.design.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
				}
				export class RefreshRequestActionHandler extends zendesk.core.ActionHandler {
					public static class: java.lang.Class<zendesk.support.request.RequestActivity.RefreshRequestActionHandler>;
					public getPriority(): number;
					public canHandle(param0: string): boolean;
					public updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
					public handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
					public getActionDescription(): zendesk.core.ActionDescription;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestActivity_MembersInjector extends dagger.MembersInjector<zendesk.support.request.RequestActivity> {
				public static class: java.lang.Class<zendesk.support.request.RequestActivity_MembersInjector>;
				public static injectPicasso(param0: zendesk.support.request.RequestActivity, param1: com.sebchlan.picassocompat.PicassoCompat): void;
				public injectMembers(param0: zendesk.support.request.RequestActivity): void;
				public static injectHeadlessComponentListener(param0: zendesk.support.request.RequestActivity, param1: any): void;
				public constructor(param0: javax.inject.Provider<zendesk.suas.Store>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<zendesk.support.request.HeadlessComponentListener>, param3: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>, param4: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>);
				public injectMembers(param0: any): void;
				public static create(param0: javax.inject.Provider<zendesk.suas.Store>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<zendesk.support.request.HeadlessComponentListener>, param3: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>, param4: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>): dagger.MembersInjector<zendesk.support.request.RequestActivity>;
				public static injectActionHandlerRegistry(param0: zendesk.support.request.RequestActivity, param1: zendesk.core.ActionHandlerRegistry): void;
				public static injectStore(param0: zendesk.support.request.RequestActivity, param1: zendesk.suas.Store): void;
				public static injectAf(param0: zendesk.support.request.RequestActivity, param1: any): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestComponent {
				public static class: java.lang.Class<zendesk.support.request.RequestComponent>;
				/**
				 * Constructs a new instance of the zendesk.support.request.RequestComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					inject(param0: zendesk.support.request.RequestActivity): void;
					inject(param0: zendesk.support.request.RequestViewConversationsEnabled): void;
					inject(param0: zendesk.support.request.RequestViewConversationsDisabled): void;
				});
				public constructor();
				public inject(param0: zendesk.support.request.RequestViewConversationsEnabled): void;
				public inject(param0: zendesk.support.request.RequestActivity): void;
				public inject(param0: zendesk.support.request.RequestViewConversationsDisabled): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule {
				public static class: java.lang.Class<zendesk.support.request.RequestModule>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesActionFactoryFactory extends dagger.internal.Factory<zendesk.support.request.ActionFactory> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesActionFactoryFactory>;
				public static create(param0: javax.inject.Provider<zendesk.support.RequestProvider>, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.support.UploadProvider>, param3: javax.inject.Provider<zendesk.belvedere.Belvedere>, param4: javax.inject.Provider<zendesk.support.SupportUiStorage>, param5: javax.inject.Provider<java.util.concurrent.ExecutorService>, param6: javax.inject.Provider<java.util.concurrent.Executor>, param7: javax.inject.Provider<zendesk.core.AuthenticationProvider>, param8: javax.inject.Provider<zendesk.support.SupportBlipsProvider>): zendesk.support.request.RequestModule_ProvidesActionFactoryFactory;
				public get(): zendesk.support.request.ActionFactory;
				public constructor(param0: javax.inject.Provider<zendesk.support.RequestProvider>, param1: javax.inject.Provider<zendesk.support.SupportSettingsProvider>, param2: javax.inject.Provider<zendesk.support.UploadProvider>, param3: javax.inject.Provider<zendesk.belvedere.Belvedere>, param4: javax.inject.Provider<zendesk.support.SupportUiStorage>, param5: javax.inject.Provider<java.util.concurrent.ExecutorService>, param6: javax.inject.Provider<java.util.concurrent.Executor>, param7: javax.inject.Provider<zendesk.core.AuthenticationProvider>, param8: javax.inject.Provider<zendesk.support.SupportBlipsProvider>);
				public get(): any;
				public static providesActionFactory(param0: zendesk.support.RequestProvider, param1: zendesk.support.SupportSettingsProvider, param2: zendesk.support.UploadProvider, param3: zendesk.belvedere.Belvedere, param4: zendesk.support.SupportUiStorage, param5: java.util.concurrent.ExecutorService, param6: java.util.concurrent.Executor, param7: zendesk.core.AuthenticationProvider, param8: zendesk.support.SupportBlipsProvider): zendesk.support.request.ActionFactory;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesAsyncMiddlewareFactory extends dagger.internal.Factory<zendesk.support.request.AsyncMiddleware> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesAsyncMiddlewareFactory>;
				public static create(): zendesk.support.request.RequestModule_ProvidesAsyncMiddlewareFactory;
				public get(): zendesk.support.request.AsyncMiddleware;
				public get(): any;
				public constructor();
				public static providesAsyncMiddleware(): zendesk.support.request.AsyncMiddleware;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesAttachmentDownloaderComponentFactory extends dagger.internal.Factory<zendesk.support.request.AttachmentDownloaderComponent> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesAttachmentDownloaderComponentFactory>;
				public get(): zendesk.support.request.AttachmentDownloaderComponent;
				public static providesAttachmentDownloaderComponent(param0: zendesk.suas.Dispatcher, param1: any, param2: any): zendesk.support.request.AttachmentDownloaderComponent;
				public static create(param0: javax.inject.Provider<zendesk.suas.Dispatcher>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader>): zendesk.support.request.RequestModule_ProvidesAttachmentDownloaderComponentFactory;
				public get(): any;
				public constructor(param0: javax.inject.Provider<zendesk.suas.Dispatcher>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesAttachmentDownloaderFactory extends dagger.internal.Factory<zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesAttachmentDownloaderFactory>;
				public constructor(param0: javax.inject.Provider<zendesk.belvedere.Belvedere>, param1: javax.inject.Provider<zendesk.support.request.AttachmentDownloadService>);
				public static providesAttachmentDownloader(param0: zendesk.belvedere.Belvedere, param1: any): zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader;
				public get(): any;
				public get(): zendesk.support.request.AttachmentDownloaderComponent.AttachmentDownloader;
				public static create(param0: javax.inject.Provider<zendesk.belvedere.Belvedere>, param1: javax.inject.Provider<zendesk.support.request.AttachmentDownloadService>): zendesk.support.request.RequestModule_ProvidesAttachmentDownloaderFactory;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesAttachmentToDiskServiceFactory extends dagger.internal.Factory<zendesk.support.request.AttachmentDownloadService> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesAttachmentToDiskServiceFactory>;
				public constructor(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<java.util.concurrent.ExecutorService>);
				public static create(param0: javax.inject.Provider<okhttp3.OkHttpClient>, param1: javax.inject.Provider<java.util.concurrent.ExecutorService>): zendesk.support.request.RequestModule_ProvidesAttachmentToDiskServiceFactory;
				public static providesAttachmentToDiskService(param0: okhttp3.OkHttpClient, param1: java.util.concurrent.ExecutorService): zendesk.support.request.AttachmentDownloadService;
				public get(): any;
				public get(): zendesk.support.request.AttachmentDownloadService;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesBelvedereFactory extends dagger.internal.Factory<zendesk.belvedere.Belvedere> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesBelvedereFactory>;
				public static providesBelvedere(param0: globalAndroid.content.Context): zendesk.belvedere.Belvedere;
				public static create(param0: javax.inject.Provider<globalAndroid.content.Context>): zendesk.support.request.RequestModule_ProvidesBelvedereFactory;
				public get(): any;
				public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>);
				public get(): zendesk.belvedere.Belvedere;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesComponentListenerFactory extends dagger.internal.Factory<zendesk.support.request.HeadlessComponentListener> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesComponentListenerFactory>;
				public get(): zendesk.support.request.HeadlessComponentListener;
				public static providesComponentListener(param0: any, param1: any, param2: any): zendesk.support.request.HeadlessComponentListener;
				public constructor(param0: javax.inject.Provider<zendesk.support.request.ComponentPersistence>, param1: javax.inject.Provider<zendesk.support.request.AttachmentDownloaderComponent>, param2: javax.inject.Provider<zendesk.support.request.ComponentUpdateActionHandlers>);
				public get(): any;
				public static create(param0: javax.inject.Provider<zendesk.support.request.ComponentPersistence>, param1: javax.inject.Provider<zendesk.support.request.AttachmentDownloaderComponent>, param2: javax.inject.Provider<zendesk.support.request.ComponentUpdateActionHandlers>): zendesk.support.request.RequestModule_ProvidesComponentListenerFactory;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesConUpdatesComponentFactory extends dagger.internal.Factory<zendesk.support.request.ComponentUpdateActionHandlers> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesConUpdatesComponentFactory>;
				public static create(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param2: javax.inject.Provider<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource>): zendesk.support.request.RequestModule_ProvidesConUpdatesComponentFactory;
				public get(): any;
				public constructor(param0: javax.inject.Provider<globalAndroid.content.Context>, param1: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param2: javax.inject.Provider<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource>);
				public static providesConUpdatesComponent(param0: globalAndroid.content.Context, param1: zendesk.core.ActionHandlerRegistry, param2: zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource): zendesk.support.request.ComponentUpdateActionHandlers;
				public get(): zendesk.support.request.ComponentUpdateActionHandlers;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesDiskQueueFactory extends dagger.internal.Factory<zendesk.support.request.ComponentPersistence.PersistenceQueue> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesDiskQueueFactory>;
				public static create(param0: javax.inject.Provider<java.util.concurrent.ExecutorService>): zendesk.support.request.RequestModule_ProvidesDiskQueueFactory;
				public static providesDiskQueue(param0: java.util.concurrent.ExecutorService): zendesk.support.request.ComponentPersistence.PersistenceQueue;
				public get(): any;
				public constructor(param0: javax.inject.Provider<java.util.concurrent.ExecutorService>);
				public get(): zendesk.support.request.ComponentPersistence.PersistenceQueue;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesDispatcherFactory extends dagger.internal.Factory<zendesk.suas.Dispatcher> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesDispatcherFactory>;
				public get(): zendesk.suas.Dispatcher;
				public static create(param0: javax.inject.Provider<zendesk.suas.Store>): zendesk.support.request.RequestModule_ProvidesDispatcherFactory;
				public get(): any;
				public static providesDispatcher(param0: zendesk.suas.Store): zendesk.suas.Dispatcher;
				public constructor(param0: javax.inject.Provider<zendesk.suas.Store>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesMessageFactoryFactory extends dagger.internal.Factory<zendesk.support.request.CellFactory> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesMessageFactoryFactory>;
				public constructor(param0: zendesk.support.request.RequestModule, param1: javax.inject.Provider<globalAndroid.content.Context>, param2: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>, param3: javax.inject.Provider<zendesk.support.request.ActionFactory>, param4: javax.inject.Provider<zendesk.suas.Dispatcher>, param5: javax.inject.Provider<zendesk.support.ZendeskDeepLinkHelper>);
				public static providesMessageFactory(param0: zendesk.support.request.RequestModule, param1: globalAndroid.content.Context, param2: com.sebchlan.picassocompat.PicassoCompat, param3: any, param4: zendesk.suas.Dispatcher, param5: zendesk.support.ZendeskDeepLinkHelper): zendesk.support.request.CellFactory;
				public get(): zendesk.support.request.CellFactory;
				public static create(param0: zendesk.support.request.RequestModule, param1: javax.inject.Provider<globalAndroid.content.Context>, param2: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>, param3: javax.inject.Provider<zendesk.support.request.ActionFactory>, param4: javax.inject.Provider<zendesk.suas.Dispatcher>, param5: javax.inject.Provider<zendesk.support.ZendeskDeepLinkHelper>): zendesk.support.request.RequestModule_ProvidesMessageFactoryFactory;
				public get(): any;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesPersistenceComponentFactory extends dagger.internal.Factory<zendesk.support.request.ComponentPersistence> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesPersistenceComponentFactory>;
				public static create(param0: javax.inject.Provider<zendesk.support.SupportUiStorage>, param1: javax.inject.Provider<zendesk.support.request.ComponentPersistence.PersistenceQueue>, param2: javax.inject.Provider<java.util.concurrent.ExecutorService>): zendesk.support.request.RequestModule_ProvidesPersistenceComponentFactory;
				public constructor(param0: javax.inject.Provider<zendesk.support.SupportUiStorage>, param1: javax.inject.Provider<zendesk.support.request.ComponentPersistence.PersistenceQueue>, param2: javax.inject.Provider<java.util.concurrent.ExecutorService>);
				public get(): zendesk.support.request.ComponentPersistence;
				public get(): any;
				public static providesPersistenceComponent(param0: zendesk.support.SupportUiStorage, param1: any, param2: java.util.concurrent.ExecutorService): zendesk.support.request.ComponentPersistence;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesReducerFactory extends dagger.internal.Factory<java.util.List<zendesk.suas.Reducer<any>>> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesReducerFactory>;
				public static providesReducer(): java.util.List<zendesk.suas.Reducer<any>>;
				public get(): java.util.List<zendesk.suas.Reducer<any>>;
				public get(): any;
				public static create(): zendesk.support.request.RequestModule_ProvidesReducerFactory;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestModule_ProvidesStoreFactory extends dagger.internal.Factory<zendesk.suas.Store> {
				public static class: java.lang.Class<zendesk.support.request.RequestModule_ProvidesStoreFactory>;
				public static providesStore(param0: java.util.List<zendesk.suas.Reducer<any>>, param1: any): zendesk.suas.Store;
				public static create(param0: javax.inject.Provider<java.util.List<zendesk.suas.Reducer<any>>>, param1: javax.inject.Provider<zendesk.support.request.AsyncMiddleware>): zendesk.support.request.RequestModule_ProvidesStoreFactory;
				public get(): any;
				public constructor(param0: javax.inject.Provider<java.util.List<zendesk.suas.Reducer<any>>>, param1: javax.inject.Provider<zendesk.support.request.AsyncMiddleware>);
				public get(): zendesk.suas.Store;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestUiConfig extends zendesk.commonui.UiConfig {
				public static class: java.lang.Class<zendesk.support.request.RequestUiConfig>;
				public getTags(): java.util.List<string>;
				public getRequestSubject(): string;
				public getTicketForm(): zendesk.support.request.StateRequestTicketForm;
				public getUiConfigs(): java.util.List<zendesk.commonui.UiConfig>;
				public getFiles(): java.util.List<zendesk.support.request.StateRequestAttachment>;
				public getRequestStatus(): zendesk.support.RequestStatus;
				public getRequestId(): string;
				public getLocalRequestId(): string;
			}
			export module RequestUiConfig {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.request.RequestUiConfig.Builder>;
					public deepLinkIntent(param0: globalAndroid.content.Context, param1: native.Array<globalAndroid.content.Intent>): globalAndroid.content.Intent;
					public show(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.commonui.UiConfig>): void;
					public deepLinkIntent(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.commonui.UiConfig>, param2: native.Array<globalAndroid.content.Intent>): globalAndroid.content.Intent;
					public intent(param0: globalAndroid.content.Context, param1: native.Array<zendesk.commonui.UiConfig>): globalAndroid.content.Intent;
					public withFiles(param0: java.util.List<java.io.File>): zendesk.support.request.RequestUiConfig.Builder;
					public withFiles(param0: native.Array<java.io.File>): zendesk.support.request.RequestUiConfig.Builder;
					public withRequestSubject(param0: string): zendesk.support.request.RequestUiConfig.Builder;
					public withRequestId(param0: string): zendesk.support.request.RequestUiConfig.Builder;
					public withTicketForm(param0: java.lang.Long, param1: java.util.List<zendesk.support.CustomField>): zendesk.support.request.RequestUiConfig.Builder;
					public withTags(param0: java.util.List<string>): zendesk.support.request.RequestUiConfig.Builder;
					public withCustomFields(param0: java.util.List<zendesk.support.CustomField>): zendesk.support.request.RequestUiConfig.Builder;
					public withRequestInfo(param0: zendesk.support.requestlist.RequestInfo): zendesk.support.request.RequestUiConfig.Builder;
					public constructor();
					public withRequest(param0: zendesk.support.Request): zendesk.support.request.RequestUiConfig.Builder;
					public withTags(param0: native.Array<string>): zendesk.support.request.RequestUiConfig.Builder;
					public show(param0: globalAndroid.content.Context, param1: native.Array<zendesk.commonui.UiConfig>): void;
					public intent(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.commonui.UiConfig>): globalAndroid.content.Intent;
					public config(): zendesk.commonui.UiConfig;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestView {
				public static class: java.lang.Class<zendesk.support.request.RequestView>;
				/**
				 * Constructs a new instance of the zendesk.support.request.RequestView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					inflateMenu(param0: globalAndroid.view.MenuInflater, param1: globalAndroid.view.Menu): boolean;
					onOptionsItemClicked(param0: globalAndroid.view.MenuItem): boolean;
					hasUnsavedInput(): boolean;
				});
				public constructor();
				public inflateMenu(param0: globalAndroid.view.MenuInflater, param1: globalAndroid.view.Menu): boolean;
				public onOptionsItemClicked(param0: globalAndroid.view.MenuItem): boolean;
				public hasUnsavedInput(): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestViewConversationsDisabled implements zendesk.support.request.RequestView {
				public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsDisabled>;
				public init(param0: zendesk.support.request.RequestComponent): void;
				public inflateMenu(param0: globalAndroid.view.MenuInflater, param1: globalAndroid.view.Menu): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public hasUnsavedInput(): boolean;
				public onOptionsItemClicked(param0: globalAndroid.view.MenuItem): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onDetachedFromWindow(): void;
			}
			export module RequestViewConversationsDisabled {
				export class MenuItemsDelegate {
					public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsDisabled.MenuItemsDelegate>;
					/**
					 * Constructs a new instance of the zendesk.support.request.RequestViewConversationsDisabled$MenuItemsDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuItemsInflated(param0: globalAndroid.view.MenuItem, param1: globalAndroid.view.MenuItem): void;
						onMenuItemsClicked(param0: globalAndroid.view.MenuItem): void;
					});
					public constructor();
					public onMenuItemsClicked(param0: globalAndroid.view.MenuItem): void;
					public onMenuItemsInflated(param0: globalAndroid.view.MenuItem, param1: globalAndroid.view.MenuItem): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestViewConversationsDisabled_MembersInjector extends dagger.MembersInjector<zendesk.support.request.RequestViewConversationsDisabled> {
				public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsDisabled_MembersInjector>;
				public static injectPicasso(param0: zendesk.support.request.RequestViewConversationsDisabled, param1: com.sebchlan.picassocompat.PicassoCompat): void;
				public static injectStore(param0: zendesk.support.request.RequestViewConversationsDisabled, param1: zendesk.suas.Store): void;
				public injectMembers(param0: any): void;
				public static create(param0: javax.inject.Provider<zendesk.suas.Store>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>): dagger.MembersInjector<zendesk.support.request.RequestViewConversationsDisabled>;
				public injectMembers(param0: zendesk.support.request.RequestViewConversationsDisabled): void;
				public static injectAf(param0: zendesk.support.request.RequestViewConversationsDisabled, param1: any): void;
				public constructor(param0: javax.inject.Provider<zendesk.suas.Store>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestViewConversationsEnabled implements zendesk.support.request.RequestView {
				public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsEnabled>;
				public inflateMenu(param0: globalAndroid.view.MenuInflater, param1: globalAndroid.view.Menu): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onOptionsItemClicked(param0: globalAndroid.view.MenuItem): boolean;
				public hasUnsavedInput(): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onDetachedFromWindow(): void;
			}
			export module RequestViewConversationsEnabled {
				export class ImagePickerDragAnimation extends zendesk.belvedere.ImageStream.ScrollListener {
					public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsEnabled.ImagePickerDragAnimation>;
					public onScroll(param0: number, param1: number, param2: number): void;
				}
				export class RecyclerListener extends zendesk.support.request.ViewMessageComposer.OnHeightChangeListener {
					public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsEnabled.RecyclerListener>;
					public onFocusChange(param0: globalAndroid.view.View, param1: boolean): void;
					public onRemoved(param0: number, param1: number): void;
					public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
					public onHeightChange(param0: number): void;
					public onInserted(param0: number, param1: number): void;
					public onChanged(param0: number, param1: number, param2: any): void;
					public onMoved(param0: number, param1: number): void;
				}
				export class RequestItemAnimator {
					public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsEnabled.RequestItemAnimator>;
					public canReuseUpdatedViewHolder(param0: globalAndroid.support.v7.widget.RecyclerView.ViewHolder): boolean;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestViewConversationsEnabled_MembersInjector extends dagger.MembersInjector<zendesk.support.request.RequestViewConversationsEnabled> {
				public static class: java.lang.Class<zendesk.support.request.RequestViewConversationsEnabled_MembersInjector>;
				public static injectPicasso(param0: zendesk.support.request.RequestViewConversationsEnabled, param1: com.sebchlan.picassocompat.PicassoCompat): void;
				public static create(param0: javax.inject.Provider<zendesk.suas.Store>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<zendesk.support.request.CellFactory>, param3: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>): dagger.MembersInjector<zendesk.support.request.RequestViewConversationsEnabled>;
				public static injectStore(param0: zendesk.support.request.RequestViewConversationsEnabled, param1: zendesk.suas.Store): void;
				public injectMembers(param0: any): void;
				public injectMembers(param0: zendesk.support.request.RequestViewConversationsEnabled): void;
				public static injectAf(param0: zendesk.support.request.RequestViewConversationsEnabled, param1: any): void;
				public static injectCellFactory(param0: zendesk.support.request.RequestViewConversationsEnabled, param1: any): void;
				public constructor(param0: javax.inject.Provider<zendesk.suas.Store>, param1: javax.inject.Provider<zendesk.support.request.ActionFactory>, param2: javax.inject.Provider<zendesk.support.request.CellFactory>, param3: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RequestViewLoading implements zendesk.support.request.RequestView {
				public static class: java.lang.Class<zendesk.support.request.RequestViewLoading>;
				public inflateMenu(param0: globalAndroid.view.MenuInflater, param1: globalAndroid.view.Menu): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onOptionsItemClicked(param0: globalAndroid.view.MenuItem): boolean;
				public hasUnsavedInput(): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class RetryDialog {
				public static class: java.lang.Class<zendesk.support.request.RetryDialog>;
				public setListener(param0: zendesk.support.request.RetryDialog.Listener): void;
				public onStart(): void;
			}
			export module RetryDialog {
				export class Listener {
					public static class: java.lang.Class<zendesk.support.request.RetryDialog.Listener>;
					/**
					 * Constructs a new instance of the zendesk.support.request.RetryDialog$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDeleteMessage(param0: java.util.List<zendesk.support.request.StateMessage>): void;
						onRetryMessage(param0: java.util.List<zendesk.support.request.StateMessage>): void;
					});
					public constructor();
					public onRetryMessage(param0: java.util.List<zendesk.support.request.StateMessage>): void;
					public onDeleteMessage(param0: java.util.List<zendesk.support.request.StateMessage>): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateAndroidLifecycle {
				public static class: java.lang.Class<zendesk.support.request.StateAndroidLifecycle>;
				public static STARTED: number;
				public static STOPPED: number;
				public getState(): number;
				public constructor(param0: number);
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateAttachments {
				public static class: java.lang.Class<zendesk.support.request.StateAttachments>;
				public toString(): string;
			}
			export module StateAttachments {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.request.StateAttachments.Builder>;
				}
				export class UriComparator extends java.lang.Object {
					public static class: java.lang.Class<zendesk.support.request.StateAttachments.UriComparator>;
					public compare(param0: zendesk.support.request.StateRequestAttachment, param1: zendesk.support.request.StateRequestAttachment): number;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateConfig {
				public static class: java.lang.Class<zendesk.support.request.StateConfig>;
				public toString(): string;
			}
			export module StateConfig {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.request.StateConfig.Builder>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateConversation {
				public static class: java.lang.Class<zendesk.support.request.StateConversation>;
				public toString(): string;
			}
			export module StateConversation {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.request.StateConversation.Builder>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateError {
				public static class: java.lang.Class<zendesk.support.request.StateError>;
			}
			export module StateError {
				export class ErrorType {
					public static class: java.lang.Class<zendesk.support.request.StateError.ErrorType>;
					public static InitialGetComments: zendesk.support.request.StateError.ErrorType;
					public static InputFormSubmission: zendesk.support.request.StateError.ErrorType;
					public static NoAccess: zendesk.support.request.StateError.ErrorType;
					public static NoError: zendesk.support.request.StateError.ErrorType;
					public static values(): native.Array<zendesk.support.request.StateError.ErrorType>;
					public static valueOf(param0: string): zendesk.support.request.StateError.ErrorType;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateIdMapper {
				public static class: java.lang.Class<zendesk.support.request.StateIdMapper>;
				public toString(): string;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateMessage {
				public static class: java.lang.Class<zendesk.support.request.StateMessage>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateMessageMergeUtil {
				public static class: java.lang.Class<zendesk.support.request.StateMessageMergeUtil>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateMessageStatus {
				public static class: java.lang.Class<zendesk.support.request.StateMessageStatus>;
				public toString(): string;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateProgress {
				public static class: java.lang.Class<zendesk.support.request.StateProgress>;
				public toString(): string;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateRequestAttachment extends java.lang.Object {
				public static class: java.lang.Class<zendesk.support.request.StateRequestAttachment>;
				public toString(): string;
				public compareTo(param0: zendesk.support.request.StateRequestAttachment): number;
			}
			export module StateRequestAttachment {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.request.StateRequestAttachment.Builder>;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateRequestTicketForm {
				public static class: java.lang.Class<zendesk.support.request.StateRequestTicketForm>;
				public constructor(param0: number, param1: java.util.List<zendesk.support.CustomField>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateRequestUser {
				public static class: java.lang.Class<zendesk.support.request.StateRequestUser>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateRetryDialog extends zendesk.support.request.StateUi.DialogState {
				public static class: java.lang.Class<zendesk.support.request.StateRetryDialog>;
				public isVisible(): boolean;
				public setVisible(param0: boolean): zendesk.support.request.StateUi.DialogState;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateSettings {
				public static class: java.lang.Class<zendesk.support.request.StateSettings>;
				public toString(): string;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class StateUi {
				public static class: java.lang.Class<zendesk.support.request.StateUi>;
				public toString(): string;
			}
			export module StateUi {
				export class DialogState {
					public static class: java.lang.Class<zendesk.support.request.StateUi.DialogState>;
					/**
					 * Constructs a new instance of the zendesk.support.request.StateUi$DialogState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setVisible(param0: boolean): zendesk.support.request.StateUi.DialogState;
						isVisible(): boolean;
					});
					public constructor();
					public setVisible(param0: boolean): zendesk.support.request.StateUi.DialogState;
					public isVisible(): boolean;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class UtilsAnimation {
				public static class: java.lang.Class<zendesk.support.request.UtilsAnimation>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class UtilsAttachment {
				public static class: java.lang.Class<zendesk.support.request.UtilsAttachment>;
			}
			export module UtilsAttachment {
				export class AttachmentNameComparator extends java.util.Comparator<zendesk.support.request.StateRequestAttachment> {
					public static class: java.lang.Class<zendesk.support.request.UtilsAttachment.AttachmentNameComparator>;
					public compare(param0: zendesk.support.request.StateRequestAttachment, param1: zendesk.support.request.StateRequestAttachment): number;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class UtilsDate {
				public static class: java.lang.Class<zendesk.support.request.UtilsDate>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ViewAlmostRealProgressBar {
				public static class: java.lang.Class<zendesk.support.request.ViewAlmostRealProgressBar>;
				public static STOP_ANIMATION_DURATION: number;
				public static ALPHA_FADE_DURATION: number;
				public static STOP_DEBOUNCE_TIME: number;
				public static START_DEBOUNCE_TIME: number;
				public static SIMPLE_PROGRESSBAR: java.util.List<zendesk.support.request.ViewAlmostRealProgressBar.Step>;
				public static DONT_STOP_MOVING: java.util.List<zendesk.support.request.ViewAlmostRealProgressBar.Step>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public stop(param0: number): void;
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public start(param0: java.util.List<zendesk.support.request.ViewAlmostRealProgressBar.Step>): void;
			}
			export module ViewAlmostRealProgressBar {
				export class State {
					public static class: java.lang.Class<zendesk.support.request.ViewAlmostRealProgressBar.State>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<zendesk.support.request.ViewAlmostRealProgressBar.State>;
					public constructor(param0: globalAndroid.os.Parcelable, param1: number, param2: java.util.List<zendesk.support.request.ViewAlmostRealProgressBar.Step>);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export class StateAwareAnimator {
					public static class: java.lang.Class<zendesk.support.request.ViewAlmostRealProgressBar.StateAwareAnimator>;
					public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
					public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
					public onAnimationStart(param0: globalAndroid.animation.Animator): void;
					public onAnimationRepeat(param0: globalAndroid.animation.Animator): void;
				}
				export class Step extends java.lang.Object {
					public static class: java.lang.Class<zendesk.support.request.ViewAlmostRealProgressBar.Step>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<zendesk.support.request.ViewAlmostRealProgressBar.Step>;
					public compareTo(param0: zendesk.support.request.ViewAlmostRealProgressBar.Step): number;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ViewAttachmentsIndicator {
				public static class: java.lang.Class<zendesk.support.request.ViewAttachmentsIndicator>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ViewCellAttachmentMenuItem {
				public static class: java.lang.Class<zendesk.support.request.ViewCellAttachmentMenuItem>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ViewMessageComposer {
				public static class: java.lang.Class<zendesk.support.request.ViewMessageComposer>;
				public addListener(param0: zendesk.support.request.ViewMessageComposer.InputListener): void;
				public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setOnHeightChangeListener(param0: zendesk.support.request.ViewMessageComposer.OnHeightChangeListener): void;
				public init(param0: zendesk.belvedere.ImageStream): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public addOnFocusChangeListener(param0: globalAndroid.view.View.OnFocusChangeListener): void;
				public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				public setAttachmentsCount(param0: number): void;
				public hide(param0: boolean): void;
				public onFocusChange(param0: globalAndroid.view.View, param1: boolean): void;
				public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public onClick(param0: globalAndroid.view.View): void;
				public constructor(param0: globalAndroid.content.Context);
				public removeAllListener(): void;
				public dispatchKeyEventPreIme(param0: globalAndroid.view.KeyEvent): boolean;
				public onEditorAction(param0: globalAndroid.widget.TextView, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public getMessage(): string;
				public afterTextChanged(param0: globalAndroid.text.Editable): void;
				public requestFocusForInput(): void;
			}
			export module ViewMessageComposer {
				export class InputListener {
					public static class: java.lang.Class<zendesk.support.request.ViewMessageComposer.InputListener>;
					/**
					 * Constructs a new instance of the zendesk.support.request.ViewMessageComposer$InputListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAddAttachmentsRequested(): void;
						onSendMessageRequested(param0: string): void;
					});
					public constructor();
					public onSendMessageRequested(param0: string): void;
					public onAddAttachmentsRequested(): void;
				}
				export class MessageComposerState {
					public static class: java.lang.Class<zendesk.support.request.ViewMessageComposer.MessageComposerState>;
					public toString(): string;
				}
				export class MessageComposerStateHelper {
					public static class: java.lang.Class<zendesk.support.request.ViewMessageComposer.MessageComposerStateHelper>;
				}
				export class OnHeightChangeListener {
					public static class: java.lang.Class<zendesk.support.request.ViewMessageComposer.OnHeightChangeListener>;
					/**
					 * Constructs a new instance of the zendesk.support.request.ViewMessageComposer$OnHeightChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onHeightChange(param0: number): void;
					});
					public constructor();
					public onHeightChange(param0: number): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ViewRequestText {
				public static class: java.lang.Class<zendesk.support.request.ViewRequestText>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module request {
			export class ViewToolbarAvatar {
				public static class: java.lang.Class<zendesk.support.request.ViewToolbarAvatar>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class CancelableCompositeCallback {
				public static class: java.lang.Class<zendesk.support.requestlist.CancelableCompositeCallback>;
				public add(param0: zendesk.service.SafeZendeskCallback<any>): void;
				public cancel(): void;
				public add(param0: native.Array<zendesk.service.SafeZendeskCallback<any>>): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestInfo {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestInfo>;
				public constructor(param0: string, param1: string, param2: zendesk.support.RequestStatus, param3: boolean, param4: java.util.Date, param5: java.util.List<zendesk.support.requestlist.RequestInfo.AgentInfo>, param6: zendesk.support.requestlist.RequestInfo.MessageInfo, param7: zendesk.support.requestlist.RequestInfo.MessageInfo, param8: java.util.Set<string>);
				public getAgentInfos(): java.util.List<zendesk.support.requestlist.RequestInfo.AgentInfo>;
				public hashCode(): number;
				public getRemoteId(): string;
				public equals(param0: any): boolean;
				public getLocalId(): string;
				public getRequestStatus(): zendesk.support.RequestStatus;
			}
			export module RequestInfo {
				export class AgentInfo {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfo.AgentInfo>;
					public equals(param0: any): boolean;
					public hashCode(): number;
					public constructor(param0: string, param1: string, param2: string);
				}
				export class LastUpdatedComparator extends java.util.Comparator<zendesk.support.requestlist.RequestInfo> {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfo.LastUpdatedComparator>;
					public compare(param0: zendesk.support.requestlist.RequestInfo, param1: zendesk.support.requestlist.RequestInfo): number;
				}
				export class MessageInfo {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfo.MessageInfo>;
					public equals(param0: any): boolean;
					public constructor(param0: string, param1: java.util.Date, param2: string);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestInfoDataSource {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource>;
				/**
				 * Constructs a new instance of the zendesk.support.requestlist.RequestInfoDataSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					load(param0: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
				});
				public constructor();
				public static LOCAL: string;
				public static REMOTE: string;
				public load(param0: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
			}
			export module RequestInfoDataSource {
				export class Disk extends zendesk.support.requestlist.RequestInfoDataSource {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource.Disk>;
					public load(param0: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
					public constructor(param0: java.util.concurrent.Executor, param1: java.util.concurrent.Executor, param2: zendesk.support.SupportUiStorage, param3: string);
				}
				export class LocalDataSource extends zendesk.support.requestlist.RequestInfoDataSource {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource>;
					public insert(param0: zendesk.support.requestlist.RequestInfo, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
					public load(param0: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
					public constructor(param0: zendesk.support.requestlist.RequestInfoDataSource.Disk);
					public remove(param0: string, param1: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
				}
				export class Network extends zendesk.support.requestlist.RequestInfoDataSource {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource.Network>;
					public load(param0: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
				}
				export class RemoteDataSource extends zendesk.support.requestlist.RequestInfoDataSource {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource.RemoteDataSource>;
					public load(param0: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
				}
				export class Repository extends zendesk.support.requestlist.RequestInfoDataSource {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoDataSource.Repository>;
					public load(param0: zendesk.service.ZendeskCallback<java.util.List<zendesk.support.requestlist.RequestInfo>>): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestInfoMerger {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestInfoMerger>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListActivity {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListActivity>;
				public static refresh(param0: globalAndroid.content.Context, param1: zendesk.core.ActionHandlerRegistry): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public onStart(): void;
				public onPause(): void;
				public onStop(): void;
				public onDestroy(): void;
				public static builder(): zendesk.support.requestlist.RequestListUiConfig.Builder;
				public constructor();
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListActivity_MembersInjector extends dagger.MembersInjector<zendesk.support.requestlist.RequestListActivity> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListActivity_MembersInjector>;
				public static injectSyncHandler(param0: zendesk.support.requestlist.RequestListActivity, param1: any): void;
				public static injectModel(param0: zendesk.support.requestlist.RequestListActivity, param1: any): void;
				public constructor(param0: javax.inject.Provider<zendesk.support.requestlist.RequestListPresenter>, param1: javax.inject.Provider<zendesk.support.requestlist.RequestListView>, param2: javax.inject.Provider<zendesk.support.requestlist.RequestListModel>, param3: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param4: javax.inject.Provider<zendesk.support.requestlist.RequestListSyncHandler>);
				public injectMembers(param0: any): void;
				public static injectActionHandlerRegistry(param0: zendesk.support.requestlist.RequestListActivity, param1: zendesk.core.ActionHandlerRegistry): void;
				public static create(param0: javax.inject.Provider<zendesk.support.requestlist.RequestListPresenter>, param1: javax.inject.Provider<zendesk.support.requestlist.RequestListView>, param2: javax.inject.Provider<zendesk.support.requestlist.RequestListModel>, param3: javax.inject.Provider<zendesk.core.ActionHandlerRegistry>, param4: javax.inject.Provider<zendesk.support.requestlist.RequestListSyncHandler>): dagger.MembersInjector<zendesk.support.requestlist.RequestListActivity>;
				public injectMembers(param0: zendesk.support.requestlist.RequestListActivity): void;
				public static injectPresenter(param0: zendesk.support.requestlist.RequestListActivity, param1: any): void;
				public static injectView(param0: zendesk.support.requestlist.RequestListActivity, param1: any): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<zendesk.support.requestlist.RequestListViewHolder> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListAdapter>;
				public onBindViewHolder(param0: zendesk.support.requestlist.RequestListViewHolder, param1: number): void;
				public getItemId(param0: number): number;
				public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): zendesk.support.requestlist.RequestListViewHolder;
				public getItemCount(): number;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListComponent {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListComponent>;
				/**
				 * Constructs a new instance of the zendesk.support.requestlist.RequestListComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					inject(param0: zendesk.support.requestlist.RequestListActivity): void;
				});
				public constructor();
				public inject(param0: zendesk.support.requestlist.RequestListActivity): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListItem {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListItem>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModel {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModel>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModule {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModule>;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModule_ModelFactory extends dagger.internal.Factory<zendesk.support.requestlist.RequestListModel> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModule_ModelFactory>;
				public get(): any;
				public get(): zendesk.support.requestlist.RequestListModel;
				public static create(param0: javax.inject.Provider<zendesk.support.requestlist.RequestInfoDataSource.Repository>, param1: javax.inject.Provider<zendesk.core.MemoryCache>, param2: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param3: javax.inject.Provider<zendesk.support.SupportSettingsProvider>): zendesk.support.requestlist.RequestListModule_ModelFactory;
				public static model(param0: zendesk.support.requestlist.RequestInfoDataSource.Repository, param1: zendesk.core.MemoryCache, param2: zendesk.support.SupportBlipsProvider, param3: zendesk.support.SupportSettingsProvider): zendesk.support.requestlist.RequestListModel;
				public constructor(param0: javax.inject.Provider<zendesk.support.requestlist.RequestInfoDataSource.Repository>, param1: javax.inject.Provider<zendesk.core.MemoryCache>, param2: javax.inject.Provider<zendesk.support.SupportBlipsProvider>, param3: javax.inject.Provider<zendesk.support.SupportSettingsProvider>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModule_PresenterFactory extends dagger.internal.Factory<zendesk.support.requestlist.RequestListPresenter> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModule_PresenterFactory>;
				public constructor(param0: javax.inject.Provider<zendesk.support.requestlist.RequestListView>, param1: javax.inject.Provider<zendesk.support.requestlist.RequestListModel>);
				public get(): zendesk.support.requestlist.RequestListPresenter;
				public static create(param0: javax.inject.Provider<zendesk.support.requestlist.RequestListView>, param1: javax.inject.Provider<zendesk.support.requestlist.RequestListModel>): zendesk.support.requestlist.RequestListModule_PresenterFactory;
				public get(): any;
				public static presenter(param0: any, param1: any): zendesk.support.requestlist.RequestListPresenter;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModule_RefreshHandlerFactory extends dagger.internal.Factory<zendesk.support.requestlist.RequestListSyncHandler> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModule_RefreshHandlerFactory>;
				public static create(param0: javax.inject.Provider<zendesk.support.requestlist.RequestListPresenter>): zendesk.support.requestlist.RequestListModule_RefreshHandlerFactory;
				public static refreshHandler(param0: any): zendesk.support.requestlist.RequestListSyncHandler;
				public get(): zendesk.support.requestlist.RequestListSyncHandler;
				public get(): any;
				public constructor(param0: javax.inject.Provider<zendesk.support.requestlist.RequestListPresenter>);
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModule_RepositoryFactory extends dagger.internal.Factory<zendesk.support.requestlist.RequestInfoDataSource.Repository> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModule_RepositoryFactory>;
				public get(): zendesk.support.requestlist.RequestInfoDataSource.Repository;
				public static create(param0: javax.inject.Provider<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource>, param1: javax.inject.Provider<zendesk.support.SupportUiStorage>, param2: javax.inject.Provider<zendesk.support.RequestProvider>, param3: javax.inject.Provider<java.util.concurrent.Executor>, param4: javax.inject.Provider<java.util.concurrent.ExecutorService>): zendesk.support.requestlist.RequestListModule_RepositoryFactory;
				public constructor(param0: javax.inject.Provider<zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource>, param1: javax.inject.Provider<zendesk.support.SupportUiStorage>, param2: javax.inject.Provider<zendesk.support.RequestProvider>, param3: javax.inject.Provider<java.util.concurrent.Executor>, param4: javax.inject.Provider<java.util.concurrent.ExecutorService>);
				public static repository(param0: zendesk.support.requestlist.RequestInfoDataSource.LocalDataSource, param1: zendesk.support.SupportUiStorage, param2: zendesk.support.RequestProvider, param3: java.util.concurrent.Executor, param4: java.util.concurrent.ExecutorService): zendesk.support.requestlist.RequestInfoDataSource.Repository;
				public get(): any;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListModule_ViewFactory extends dagger.internal.Factory<zendesk.support.requestlist.RequestListView> {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListModule_ViewFactory>;
				public static create(param0: zendesk.support.requestlist.RequestListModule, param1: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>): zendesk.support.requestlist.RequestListModule_ViewFactory;
				public get(): any;
				public static view(param0: zendesk.support.requestlist.RequestListModule, param1: com.sebchlan.picassocompat.PicassoCompat): zendesk.support.requestlist.RequestListView;
				public constructor(param0: zendesk.support.requestlist.RequestListModule, param1: javax.inject.Provider<com.sebchlan.picassocompat.PicassoCompat>);
				public get(): zendesk.support.requestlist.RequestListView;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListPresenter {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListPresenter>;
				public constructor(param0: zendesk.support.requestlist.RequestListView, param1: zendesk.support.requestlist.RequestListModel);
			}
			export module RequestListPresenter {
				export class SettingsCallback {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestListPresenter.SettingsCallback>;
					/**
					 * Constructs a new instance of the zendesk.support.requestlist.RequestListPresenter$SettingsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSettings(param0: zendesk.support.SupportSdkSettings): void;
					});
					public constructor();
					public onSettings(param0: zendesk.support.SupportSdkSettings): void;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListSyncHandler extends zendesk.core.ActionHandler {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListSyncHandler>;
				public updateSettings(param0: java.util.Map<string,com.google.gson.JsonElement>): void;
				public getActionDescription(): zendesk.core.ActionDescription;
				public canHandle(param0: string): boolean;
				public getPriority(): number;
				public handle(param0: java.util.Map<string,any>, param1: globalAndroid.content.Context): void;
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListUiConfig extends zendesk.commonui.UiConfig {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListUiConfig>;
				public getUiConfigs(): java.util.List<zendesk.commonui.UiConfig>;
			}
			export module RequestListUiConfig {
				export class Builder {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestListUiConfig.Builder>;
					public show(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.commonui.UiConfig>): void;
					public constructor();
					public intent(param0: globalAndroid.content.Context, param1: native.Array<zendesk.commonui.UiConfig>): globalAndroid.content.Intent;
					public show(param0: globalAndroid.content.Context, param1: native.Array<zendesk.commonui.UiConfig>): void;
					public intent(param0: globalAndroid.content.Context, param1: java.util.List<zendesk.commonui.UiConfig>): globalAndroid.content.Intent;
					public config(): zendesk.commonui.UiConfig;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListView {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListView>;
				public setBackClickListener(param0: globalAndroid.view.View.OnClickListener): void;
				public startReferrerPage(param0: string): void;
				public onSaveInstanceState(): globalAndroid.os.Parcelable;
				public startRequestActivity(param0: zendesk.support.request.RequestUiConfig.Builder): void;
				public finish(param0: string): void;
				public finish(): void;
				public setCreateRequestListener(param0: globalAndroid.view.View.OnClickListener): void;
				public setLogoClickListener(param0: boolean, param1: globalAndroid.view.View.OnClickListener): void;
				public showErrorMessage(): void;
				public constructor(param0: globalAndroid.support.v7.app.AppCompatActivity, param1: zendesk.support.requestlist.RequestListUiConfig, param2: com.sebchlan.picassocompat.PicassoCompat);
				public setItemClickListener(param0: zendesk.support.requestlist.RequestListView.OnItemClick): void;
				public onStart(): void;
				public showRequestList(param0: java.util.List<zendesk.support.requestlist.RequestListItem>): void;
				public setLoading(param0: boolean): void;
				public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
				public setSwipeRefreshListener(param0: globalAndroid.support.v4.widget.SwipeRefreshLayout.OnRefreshListener): void;
				public setRetryClickListener(param0: globalAndroid.view.View.OnClickListener): void;
				public onStop(): void;
				public announceAccessibility(param0: number): void;
			}
			export module RequestListView {
				export class OnItemClick {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestListView.OnItemClick>;
					/**
					 * Constructs a new instance of the zendesk.support.requestlist.RequestListView$OnItemClick interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onClick(param0: zendesk.support.requestlist.RequestListItem): void;
					});
					public constructor();
					public onClick(param0: zendesk.support.requestlist.RequestListItem): void;
				}
				export class SceneState {
					public static class: java.lang.Class<zendesk.support.requestlist.RequestListView.SceneState>;
					public static LIST: zendesk.support.requestlist.RequestListView.SceneState;
					public static EMPTY: zendesk.support.requestlist.RequestListView.SceneState;
					public static NONE: zendesk.support.requestlist.RequestListView.SceneState;
					public static values(): native.Array<zendesk.support.requestlist.RequestListView.SceneState>;
					public static valueOf(param0: string): zendesk.support.requestlist.RequestListView.SceneState;
				}
			}
		}
	}
}

declare module zendesk {
	export module support {
		export module requestlist {
			export class RequestListViewHolder {
				public static class: java.lang.Class<zendesk.support.requestlist.RequestListViewHolder>;
			}
		}
	}
}

//Generics information:
//com.google.gson.Gson.FutureTypeAdapter:1
//com.google.gson.InstanceCreator:1
//com.google.gson.JsonDeserializer:1
//com.google.gson.JsonSerializer:1
//com.google.gson.TypeAdapter:1
//com.google.gson.internal.LinkedHashTreeMap:2
//com.google.gson.internal.LinkedHashTreeMap.AvlBuilder:2
//com.google.gson.internal.LinkedHashTreeMap.AvlIterator:2
//com.google.gson.internal.LinkedHashTreeMap.LinkedTreeMapIterator:1
//com.google.gson.internal.LinkedHashTreeMap.Node:2
//com.google.gson.internal.LinkedTreeMap:2
//com.google.gson.internal.LinkedTreeMap.LinkedTreeMapIterator:1
//com.google.gson.internal.LinkedTreeMap.Node:2
//com.google.gson.internal.ObjectConstructor:1
//com.google.gson.internal.bind.ArrayTypeAdapter:1
//com.google.gson.internal.bind.CollectionTypeAdapterFactory.Adapter:1
//com.google.gson.internal.bind.MapTypeAdapterFactory.Adapter:2
//com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.Adapter:1
//com.google.gson.internal.bind.TreeTypeAdapter:1
//com.google.gson.internal.bind.TypeAdapterRuntimeTypeWrapper:1
//com.google.gson.internal.bind.TypeAdapters.EnumTypeAdapter:1
//com.google.gson.reflect.TypeToken:1
//com.squareup.picasso.Action:1
//com.squareup.picasso.Action.RequestWeakReference:1
//zendesk.collection.CountedSet:1
//zendesk.func.ZFunc1:2
//zendesk.func.ZFunc2:3
//zendesk.service.CancellableCompositeZendeskCallback:1
//zendesk.service.RetrofitZendeskCallbackAdapter:2
//zendesk.service.RetrofitZendeskCallbackAdapter.DefaultExtractor:1
//zendesk.service.RetrofitZendeskCallbackAdapter.RequestExtractor:2
//zendesk.service.SafeZendeskCallback:1
//zendesk.service.ZendeskCallback:1
//dagger.Lazy:1
//dagger.MembersInjector:1
//dagger.android.AndroidInjector:1
//dagger.android.AndroidInjector.Builder:1
//dagger.android.AndroidInjector.Factory:1
//dagger.android.DispatchingAndroidInjector:1
//dagger.android.DispatchingAndroidInjector_Factory:1
//dagger.internal.AbstractMapFactory:3
//dagger.internal.AbstractMapFactory.Builder:3
//dagger.internal.DelegateFactory:1
//dagger.internal.DoubleCheck:1
//dagger.internal.Factory:1
//dagger.internal.InstanceFactory:1
//dagger.internal.MapBuilder:2
//dagger.internal.MapFactory:2
//dagger.internal.MapFactory.Builder:2
//dagger.internal.MapProviderFactory:2
//dagger.internal.MapProviderFactory.Builder:2
//dagger.internal.MissingBindingFactory:1
//dagger.internal.ProviderOfLazy:1
//dagger.internal.SetBuilder:1
//dagger.internal.SetFactory:1
//dagger.internal.SetFactory.Builder:1
//dagger.internal.SingleCheck:1
//javax.inject.Provider:1
//okhttp3.internal.platform.OptionalMethod:1
//retrofit2.Call:1
//retrofit2.CallAdapter:2
//retrofit2.Callback:1
//retrofit2.Converter:2
//retrofit2.ExecutorCallAdapterFactory.ExecutorCallbackCall:1
//retrofit2.OkHttpCall:1
//retrofit2.ParameterHandler:1
//retrofit2.ParameterHandler.Body:1
//retrofit2.ParameterHandler.Field:1
//retrofit2.ParameterHandler.FieldMap:1
//retrofit2.ParameterHandler.Header:1
//retrofit2.ParameterHandler.HeaderMap:1
//retrofit2.ParameterHandler.Part:1
//retrofit2.ParameterHandler.PartMap:1
//retrofit2.ParameterHandler.Path:1
//retrofit2.ParameterHandler.Query:1
//retrofit2.ParameterHandler.QueryMap:1
//retrofit2.ParameterHandler.QueryName:1
//retrofit2.Response:1
//retrofit2.ServiceMethod:2
//retrofit2.ServiceMethod.Builder:2
//retrofit2.converter.gson.GsonRequestBodyConverter:1
//retrofit2.converter.gson.GsonResponseBodyConverter:1
//zendesk.belvedere.Callback:1
//zendesk.commonui.CacheFragment.Supplier:1
//zendesk.commonui.Cell:1
//zendesk.commonui.DefaultViewObserver:1
//zendesk.commonui.ViewListener:1
//zendesk.commonui.ViewObserver:1
//zendesk.core.PassThroughErrorZendeskCallback:1
//zendesk.core.SettingsPack:1
//zendesk.suas.Action:1
//zendesk.suas.Filter:1
//zendesk.suas.Listener:1
//zendesk.suas.Listeners.ClassKeyedListener:1
//zendesk.suas.Listeners.ClassStringKeyedListener:1
//zendesk.suas.Listeners.StateSelectorListener:1
//zendesk.suas.Listeners.StringKeyedListener:1
//zendesk.suas.Reducer:1
//zendesk.suas.StateSelector:1
//zendesk.support.AggregatedCallback:1
//zendesk.support.Streams.Use:2
//zendesk.support.ZendeskCallbackSuccess:1
//zendesk.support.request.ActionFactory.ErrorAction:1
//zendesk.support.request.ActionLoadComments.MinimumTimeCallback:1
//zendesk.support.request.ComponentInputForm.Validator:1
//zendesk.support.request.HeadlessFragment:1
