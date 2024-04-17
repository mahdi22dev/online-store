/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any; }
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any; }
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  authorCollection?: Maybe<AuthorCollection>;
  blogCollection?: Maybe<BlogCollection>;
  entryCollection?: Maybe<EntryCollection>;
  nextBlogCollection?: Maybe<NextBlogCollection>;
  phoneCasesProductCollection?: Maybe<PhoneCasesProductCollection>;
};


export type AssetLinkingCollectionsAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsBlogCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsNextBlogCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPhoneCasesProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/author) */
export type Author = Entry & {
  __typename?: 'Author';
  bio?: Maybe<AuthorBio>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<AuthorLinkingCollections>;
  picture?: Maybe<Asset>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/author) */
export type AuthorBioArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/author) */
export type AuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/author) */
export type AuthorPictureArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/author) */
export type AuthorTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AuthorBio = {
  __typename?: 'AuthorBio';
  json: Scalars['JSON']['output'];
  links: AuthorBioLinks;
};

export type AuthorBioAssets = {
  __typename?: 'AuthorBioAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type AuthorBioEntries = {
  __typename?: 'AuthorBioEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type AuthorBioLinks = {
  __typename?: 'AuthorBioLinks';
  assets: AuthorBioAssets;
  entries: AuthorBioEntries;
  resources: AuthorBioResources;
};

export type AuthorBioResources = {
  __typename?: 'AuthorBioResources';
  block: Array<AuthorBioResourcesBlock>;
  hyperlink: Array<AuthorBioResourcesHyperlink>;
  inline: Array<AuthorBioResourcesInline>;
};

export type AuthorBioResourcesBlock = ResourceLink & {
  __typename?: 'AuthorBioResourcesBlock';
  sys: ResourceSys;
};

export type AuthorBioResourcesHyperlink = ResourceLink & {
  __typename?: 'AuthorBioResourcesHyperlink';
  sys: ResourceSys;
};

export type AuthorBioResourcesInline = ResourceLink & {
  __typename?: 'AuthorBioResourcesInline';
  sys: ResourceSys;
};

export type AuthorCollection = {
  __typename?: 'AuthorCollection';
  items: Array<Maybe<Author>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  bio_contains?: InputMaybe<Scalars['String']['input']>;
  bio_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bio_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  picture_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AuthorLinkingCollections = {
  __typename?: 'AuthorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  nextBlogCollection?: Maybe<NextBlogCollection>;
};


export type AuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AuthorLinkingCollectionsNextBlogCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AuthorLinkingCollectionsNextBlogCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AuthorLinkingCollectionsNextBlogCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ReadtimeAsc = 'readtime_ASC',
  ReadtimeDesc = 'readtime_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum AuthorOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/blog) */
export type Blog = Entry & {
  __typename?: 'Blog';
  articleBlog?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<BlogLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/blog) */
export type BlogArticleBlogArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/blog) */
export type BlogImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/blog) */
export type BlogLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/blog) */
export type BlogTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type BlogCollection = {
  __typename?: 'BlogCollection';
  items: Array<Maybe<Blog>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlogFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogFilter>>>;
  articleBlog?: InputMaybe<Scalars['String']['input']>;
  articleBlog_contains?: InputMaybe<Scalars['String']['input']>;
  articleBlog_exists?: InputMaybe<Scalars['Boolean']['input']>;
  articleBlog_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  articleBlog_not?: InputMaybe<Scalars['String']['input']>;
  articleBlog_not_contains?: InputMaybe<Scalars['String']['input']>;
  articleBlog_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlogLinkingCollections = {
  __typename?: 'BlogLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BlogLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BlogOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/nextBlog) */
export type NextBlog = Entry & {
  __typename?: 'NextBlog';
  author?: Maybe<Author>;
  content?: Maybe<NextBlogContent>;
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars['DateTime']['output']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<NextBlogLinkingCollections>;
  readtime?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/nextBlog) */
export type NextBlogAuthorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AuthorFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/nextBlog) */
export type NextBlogContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/nextBlog) */
export type NextBlogDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/nextBlog) */
export type NextBlogImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/nextBlog) */
export type NextBlogLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/nextBlog) */
export type NextBlogReadtimeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/nextBlog) */
export type NextBlogSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/nextBlog) */
export type NextBlogTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type NextBlogCollection = {
  __typename?: 'NextBlogCollection';
  items: Array<Maybe<NextBlog>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NextBlogContent = {
  __typename?: 'NextBlogContent';
  json: Scalars['JSON']['output'];
  links: NextBlogContentLinks;
};

export type NextBlogContentAssets = {
  __typename?: 'NextBlogContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type NextBlogContentEntries = {
  __typename?: 'NextBlogContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type NextBlogContentLinks = {
  __typename?: 'NextBlogContentLinks';
  assets: NextBlogContentAssets;
  entries: NextBlogContentEntries;
  resources: NextBlogContentResources;
};

export type NextBlogContentResources = {
  __typename?: 'NextBlogContentResources';
  block: Array<NextBlogContentResourcesBlock>;
  hyperlink: Array<NextBlogContentResourcesHyperlink>;
  inline: Array<NextBlogContentResourcesInline>;
};

export type NextBlogContentResourcesBlock = ResourceLink & {
  __typename?: 'NextBlogContentResourcesBlock';
  sys: ResourceSys;
};

export type NextBlogContentResourcesHyperlink = ResourceLink & {
  __typename?: 'NextBlogContentResourcesHyperlink';
  sys: ResourceSys;
};

export type NextBlogContentResourcesInline = ResourceLink & {
  __typename?: 'NextBlogContentResourcesInline';
  sys: ResourceSys;
};

export type NextBlogFilter = {
  AND?: InputMaybe<Array<InputMaybe<NextBlogFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NextBlogFilter>>>;
  author?: InputMaybe<CfAuthorNestedFilter>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readtime?: InputMaybe<Scalars['Int']['input']>;
  readtime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  readtime_gt?: InputMaybe<Scalars['Int']['input']>;
  readtime_gte?: InputMaybe<Scalars['Int']['input']>;
  readtime_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  readtime_lt?: InputMaybe<Scalars['Int']['input']>;
  readtime_lte?: InputMaybe<Scalars['Int']['input']>;
  readtime_not?: InputMaybe<Scalars['Int']['input']>;
  readtime_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NextBlogLinkingCollections = {
  __typename?: 'NextBlogLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NextBlogLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NextBlogOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ReadtimeAsc = 'readtime_ASC',
  ReadtimeDesc = 'readtime_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Phone cases product content type for online store for selling phone cases [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/phoneCasesProduct) */
export type PhoneCasesProduct = Entry & {
  __typename?: 'PhoneCasesProduct';
  brand?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<PhoneCasesProductDescription>;
  deviceName?: Maybe<Scalars['String']['output']>;
  imagesCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<PhoneCasesProductLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sys: Sys;
};


/** Phone cases product content type for online store for selling phone cases [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/phoneCasesProduct) */
export type PhoneCasesProductBrandArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Phone cases product content type for online store for selling phone cases [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/phoneCasesProduct) */
export type PhoneCasesProductColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Phone cases product content type for online store for selling phone cases [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/phoneCasesProduct) */
export type PhoneCasesProductDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Phone cases product content type for online store for selling phone cases [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/phoneCasesProduct) */
export type PhoneCasesProductDeviceNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Phone cases product content type for online store for selling phone cases [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/phoneCasesProduct) */
export type PhoneCasesProductImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Phone cases product content type for online store for selling phone cases [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/phoneCasesProduct) */
export type PhoneCasesProductLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Phone cases product content type for online store for selling phone cases [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/phoneCasesProduct) */
export type PhoneCasesProductNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Phone cases product content type for online store for selling phone cases [See type definition](https://app.contentful.com/spaces/xp3ehvbs6dy6/content_types/phoneCasesProduct) */
export type PhoneCasesProductPriceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PhoneCasesProductCollection = {
  __typename?: 'PhoneCasesProductCollection';
  items: Array<Maybe<PhoneCasesProduct>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PhoneCasesProductDescription = {
  __typename?: 'PhoneCasesProductDescription';
  json: Scalars['JSON']['output'];
  links: PhoneCasesProductDescriptionLinks;
};

export type PhoneCasesProductDescriptionAssets = {
  __typename?: 'PhoneCasesProductDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PhoneCasesProductDescriptionEntries = {
  __typename?: 'PhoneCasesProductDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PhoneCasesProductDescriptionLinks = {
  __typename?: 'PhoneCasesProductDescriptionLinks';
  assets: PhoneCasesProductDescriptionAssets;
  entries: PhoneCasesProductDescriptionEntries;
  resources: PhoneCasesProductDescriptionResources;
};

export type PhoneCasesProductDescriptionResources = {
  __typename?: 'PhoneCasesProductDescriptionResources';
  block: Array<PhoneCasesProductDescriptionResourcesBlock>;
  hyperlink: Array<PhoneCasesProductDescriptionResourcesHyperlink>;
  inline: Array<PhoneCasesProductDescriptionResourcesInline>;
};

export type PhoneCasesProductDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'PhoneCasesProductDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type PhoneCasesProductDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'PhoneCasesProductDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type PhoneCasesProductDescriptionResourcesInline = ResourceLink & {
  __typename?: 'PhoneCasesProductDescriptionResourcesInline';
  sys: ResourceSys;
};

export type PhoneCasesProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<PhoneCasesProductFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PhoneCasesProductFilter>>>;
  brand?: InputMaybe<Scalars['String']['input']>;
  brand_contains?: InputMaybe<Scalars['String']['input']>;
  brand_exists?: InputMaybe<Scalars['Boolean']['input']>;
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  brand_not?: InputMaybe<Scalars['String']['input']>;
  brand_not_contains?: InputMaybe<Scalars['String']['input']>;
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  deviceName_contains?: InputMaybe<Scalars['String']['input']>;
  deviceName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  deviceName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  deviceName_not?: InputMaybe<Scalars['String']['input']>;
  deviceName_not_contains?: InputMaybe<Scalars['String']['input']>;
  deviceName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  price_gt?: InputMaybe<Scalars['Float']['input']>;
  price_gte?: InputMaybe<Scalars['Float']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  price_lt?: InputMaybe<Scalars['Float']['input']>;
  price_lte?: InputMaybe<Scalars['Float']['input']>;
  price_not?: InputMaybe<Scalars['Float']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PhoneCasesProductLinkingCollections = {
  __typename?: 'PhoneCasesProductLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PhoneCasesProductLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PhoneCasesProductOrder {
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  DeviceNameAsc = 'deviceName_ASC',
  DeviceNameDesc = 'deviceName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  author?: Maybe<Author>;
  authorCollection?: Maybe<AuthorCollection>;
  blog?: Maybe<Blog>;
  blogCollection?: Maybe<BlogCollection>;
  entryCollection?: Maybe<EntryCollection>;
  nextBlog?: Maybe<NextBlog>;
  nextBlogCollection?: Maybe<NextBlogCollection>;
  phoneCasesProduct?: Maybe<PhoneCasesProduct>;
  phoneCasesProductCollection?: Maybe<PhoneCasesProductCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryAuthorArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AuthorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuthorFilter>;
};


export type QueryBlogArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBlogCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlogOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryNextBlogArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNextBlogCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NextBlogOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NextBlogFilter>;
};


export type QueryPhoneCasesProductArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPhoneCasesProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PhoneCasesProductOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PhoneCasesProductFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfAuthorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  bio_contains?: InputMaybe<Scalars['String']['input']>;
  bio_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bio_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  picture_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GetContentfulProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContentfulProductsQuery = { __typename?: 'Query', phoneCasesProductCollection?: { __typename?: 'PhoneCasesProductCollection', items: Array<{ __typename?: 'PhoneCasesProduct', name?: string | null, price?: number | null, sys: { __typename?: 'Sys', id: string }, imagesCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null } | null> } | null } | null> } | null };

export type GetContentSingleProductQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetContentSingleProductQuery = { __typename?: 'Query', phoneCasesProduct?: { __typename?: 'PhoneCasesProduct', name?: string | null, deviceName?: string | null, price?: number | null, imagesCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null } | null> } | null } | null };


export const GetContentfulProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContentfulProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phoneCasesProductCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"imagesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetContentfulProductsQuery, GetContentfulProductsQueryVariables>;
export const GetContentSingleProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContentSingleProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phoneCasesProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"deviceName"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"imagesCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetContentSingleProductQuery, GetContentSingleProductQueryVariables>;